declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface JumbotronProps extends HTMLAttributes<HTMLDivElement> {}

export interface JumbotronEvents {}

export interface JumbotronSlots {
  default: {};
class?: string;
}

export class Jumbotron extends SvelteComponent<JumbotronProps, JumbotronEvents, JumbotronSlots> {}

}
