declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface FigureProps extends HTMLAttributes<HTMLElement> {
  alt?: string;
  caption?: string | HTMLSlotElement;
}

export interface FigureEvents {}

export interface FigureSlots {
  default: {};
  caption?: {};
class?: string;
}

export class Figure extends SvelteComponent<FigureProps, FigureEvents, FigureSlots> {}

}
