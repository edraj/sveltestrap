declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  size?: string;
  vertical?: boolean;
}

export interface ButtonGroupEvents {}

export interface ButtonGroupSlots {
  default: {};
class?: string;
}

export class ButtonGroup extends SvelteComponent<ButtonGroupProps, ButtonGroupEvents, ButtonGroupSlots> {}

}
