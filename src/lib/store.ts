import { writable } from 'svelte/store';

export const modalOpened = writable(false);
export const whatToDisplay = writable("email")
export const customBackground = writable('#0a0908');
