declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardSubtitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface CardSubtitleEvents {}

export interface CardSubtitleSlots {
  default: {};
class?: string;
}

export class CardSubtitle extends SvelteComponent<CardSubtitleProps, CardSubtitleEvents, CardSubtitleSlots> {}

}
