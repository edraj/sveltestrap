declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'lg';
  theme?: string;
}

export interface InputGroupEvents {}

export interface InputGroupSlots {
  default: {};
class?: string;
}

export class InputGroup extends SvelteComponent<InputGroupProps, InputGroupEvents, InputGroupSlots> {}

}
