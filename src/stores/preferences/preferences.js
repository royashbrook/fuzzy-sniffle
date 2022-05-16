import { writable } from 'svelte/store';
import docProps from './DocumentProperties.json'
const defaultPrefs = docProps
  .filter(x => 
    !["25","27","69","71","72","73"].includes(x.id)
  )
  .map(x => ({
    ...x,
    selected: ["13", "14", "15", "16", "17"].includes(x.id) ? true : false
  }))
  .sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

  export const preferences = writable(
    localStorage.preferences? JSON.parse(localStorage.preferences) : defaultPrefs);
preferences.subscribe(val => localStorage.setItem("preferences", JSON.stringify(val)));
export const resetPreferences = () => preferences.set(defaultPrefs);

// //if no cache, init with default prefs
// if (!localStorage.getItem("pref")) {
//   console.log('Preference not set, storing to localStorage...');
//   localStorage.setItem(cacheKey, compress(JSON.stringify(defaultPrefs())));
// }

// //read our store from localstorage
// export const preferences = writable(JSON.parse(decompress(localStorage.getItem(cacheKey))));

// //persist changes to localstorage
// preferences.subscribe(
//   val => {
//     console.log("updating local storage");
//     localStorage.setItem(cacheKey, compress(JSON.stringify(val)))
//   });