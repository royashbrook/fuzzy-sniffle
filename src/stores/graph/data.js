import { writable,get } from 'svelte/store';
export const data = writable(null);

import { accessToken } from '../auth/auth';
import { graphContentEndpoint } from "./graph.config";
import { callMSGraph } from './graph';
import { unzipRaw } from 'unzipit';
import { compress, decompress } from 'lz-string';

const writeCache = async (key, val) => {
  window["dbg"] && console.log("updating cache for", key);
  localStorage.setItem(key, compress(JSON.stringify(val)));
}
const readCache = async (key) => {
  window["dbg"] && console.log("using cache for", key);
  return JSON.parse(decompress(localStorage.getItem(key)))
}
const fetchAndCache = async (fileData) => {
  const { entries } = await unzipRaw(fileData["@microsoft.graph.downloadUrl"]);
  const entry = entries[0];
  let json = await entry.json();
  fileData.json = json;
  writeCache(fileData.name, fileData);
  window["dbg"] && console.log("using fresh data for", fileData.name);
  return json;
}

export const getData = async () => {
  
  let graphdata = await callMSGraph(graphContentEndpoint, get(accessToken));
  
  //if we need to filter out file(s) for testing, can be done here.
  //graphdata = graphdata.filter(x => !["exclude1.zip","exclude2.zip"].includes(x.name));

  //remove files from localstorage if they were not returned from graph
  const lsFileKeys = Object.keys(localStorage).filter(x => x.endsWith(".zip"));
  const grFileKeys = graphdata.map(x => x.name);
  lsFileKeys.filter(x => !grFileKeys.includes(x)).forEach(x => {
    window["dbg"] && console.log("removing old cache entry", x);
    localStorage.removeItem(x)
  });

  let filedata = await Promise.all(graphdata.map(f => tryGetFromCache(f).catch(async e => {
    console.log(e);
    try {
      return fetchAndCache(f);
    } catch (message) {
      return console.log(message);
    }
  })));
  data.set(Object.assign(...filedata));
  window["dbg"] && (window.json = Object.assign(...filedata));
}

const tryGetFromCache = async fileData => {
  try {
    let fileDataCache = await readCache(fileData.name);
    let json = fileDataCache.json;
    if (fileData.lastModifiedDateTime === fileDataCache.lastModifiedDateTime) {
      return Promise.resolve(json);
    } else {
      window["dbg"] && console.log("cache outdated for", fileData.name);
      return Promise.reject("cache outdated");
    }
  }
  catch {
    window["dbg"] && console.log("cache missing for", fileData.name)
    return Promise.reject("missing cache");
  }
};
