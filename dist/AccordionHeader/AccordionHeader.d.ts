declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface AccordionHeaderProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface AccordionHeaderEvents {}

export interface AccordionHeaderSlots {
  default: {};
class?: string;
}

export class AccordionHeader extends SvelteComponent<
  AccordionHeaderProps,
  AccordionHeaderEvents,
  AccordionHeaderSlots
> {}

}
