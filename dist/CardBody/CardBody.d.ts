declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardBodyEvents {}

export interface CardBodySlots {
  default: {};
class?: string;
}

export class CardBody extends SvelteComponent<CardBodyProps, CardBodyEvents, CardBodySlots> {}

}
