declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLFormAttributes } from 'svelte/elements';

export interface FormProps extends HTMLFormAttributes {
  inline?: boolean;
  validated?: boolean;
}

export interface FormEvents {
  submit: WindowEventMap['submit'];
}

export interface FormSlots {
  default: {};
class?: string;
}

export class Form extends SvelteComponent<FormProps, FormEvents, FormSlots> {}

}
