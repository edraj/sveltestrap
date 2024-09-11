declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  class?: string;
  flush?: boolean;
  stayOpen?: boolean;
  theme?: string;
}

export interface AccordionEvents {
  toggle: CustomEvent<{ [element: any]: boolean }>;
}

export interface AccordionSlots {
  default: {};
class?: string;
}

export class Accordion extends SvelteComponent<AccordionProps, AccordionEvents, AccordionSlots> {}

}
