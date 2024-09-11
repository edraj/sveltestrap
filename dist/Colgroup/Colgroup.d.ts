declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLColgroupAttributes } from 'svelte/elements';

export interface ColgroupProps extends HTMLColgroupAttributes {}

export interface ColgroupEvents {}

export interface ColgroupSlots {
  default: {};
class?: string;
}

export class Colgroup extends SvelteComponent<ColgroupProps, ColgroupEvents, ColgroupSlots> {}

}
