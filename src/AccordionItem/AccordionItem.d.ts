declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  class?: string;
  header?: string;
  extraPrefix?: {};
  extraSuffix?: {};
}

export interface AccordionItemEvents {
  introstart: CustomEvent<void>;
  introend: CustomEvent<void>;
  outrostart: CustomEvent<void>;
  outroend: CustomEvent<void>;
  toggle: CustomEvent<boolean>;
}

export interface AccordionItemSlots {
  default: {};
  header?: {};
class?: string;
}

export class AccordionItem extends SvelteComponent<
  AccordionItemProps,
  AccordionItemEvents,
  AccordionItemSlots
> {}

}
