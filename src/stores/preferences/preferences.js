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
}
export const resetPreferences = () => preferences.set(defaultPrefs);