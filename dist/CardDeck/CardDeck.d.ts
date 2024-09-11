declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardDeckProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardDeckEvents {}

export interface CardDeckSlots {
  default: {};
class?: string;
}

export class CardDeck extends SvelteComponent<CardDeckProps, CardDeckEvents, CardDeckSlots> {}

}
