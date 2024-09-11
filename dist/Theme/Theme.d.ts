declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';

export interface ThemeProps {
  theme?: string;
}

export interface ThemeEvents {}

export interface ThemeSlots {
  default: {};
class?: string;
}

export class Theme extends SvelteComponent<ThemeProps, ThemeEvents, ThemeSlots> {}

}
