declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  ariaToggle?: string;
  toggle?: () => void;
}

export interface ModalHeaderEvents {}

export interface ModalHeaderSlots {
  default: {};
  close: {};
class?: string;
}

export class ModalHeader extends SvelteComponent<ModalHeaderProps, ModalHeaderEvents, ModalHeaderSlots> {}

}
