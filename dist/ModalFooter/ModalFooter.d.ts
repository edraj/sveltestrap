declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalFooterEvents {}

export interface ModalFooterSlots {
  default: {};
class?: string;
}

export class ModalFooter extends SvelteComponent<ModalFooterProps, ModalFooterEvents, ModalFooterSlots> {}

}
