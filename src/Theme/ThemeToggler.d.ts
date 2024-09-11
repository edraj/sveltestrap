declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';

export interface ThemeTogglerProps {}

export interface ThemeTogglerEvents {}

export interface ThemeTogglerSlots {
  default: {};
class?: string;
}

export class ThemeToggler extends SvelteComponent<ThemeTogglerProps, ThemeTogglerEvents, ThemeTogglerSlots> {}

}
