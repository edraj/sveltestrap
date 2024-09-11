declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardFooterEvents {}

export interface CardFooterSlots {
  default: {};
class?: string;
}

export class CardFooter extends SvelteComponent<CardFooterProps, CardFooterEvents, CardFooterSlots> {}

}
