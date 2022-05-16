import { writable } from 'svelte/store';
import defaultPrefs from './defaultPrefs';

export const preferences = writable(
  localStorage.preferences
    ? JSON.parse(localStorage.preferences)
    : defaultPrefs);

preferences.subscribe(val =>
  localStorage.setItem("preferences", JSON.stringify(val)));

export const setPreference = (id, pref, val) => {
  console.log(preferences)
  // const preference = get(preferences).find(x => x.id === id);
  // preference[pref] = val;
  // const newPref = {...get(preferences).filter(x => x.id !== id), preference}
  // preferences.set(newPref);
}
export const resetPreferences = () => preferences.set(defaultPrefs);