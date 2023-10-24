declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';

export interface AccordionItemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  active?: boolean;
  header?: string;
  extraPrefix?: AccordionHeaderExtra;
  extraSuffix?: AccordionHeaderExtra;
  class?: string;
}

  export interface AccordionHeaderExtra {
    action: any,
    icon?: string,
    value?: any
  }

export class AccordionItem extends SvelteComponent<
  AccordionItemProps,
  {
    toggle: CustomEvent<boolean>;
  },
  {
    default: {};
    header: {};
  }
> {}

}
