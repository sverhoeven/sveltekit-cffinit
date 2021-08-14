import { writable } from 'svelte/store';

export const expanded = writable(false);

export const last_step = writable('');
