declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ModalBackdropProps extends HTMLAttributes<HTMLDivElement> {
  fade?: boolean;
  isOpen?: boolean;
}

export interface ModalBackdropEvents {
  click: WindowEventMap['click'];
}

export interface ModalBackdropSlots {
  default: {};
class?: string;
}

export class ModalBackdrop extends SvelteComponent<
  ModalBackdropProps,
  ModalBackdropEvents,
  ModalBackdropSlots
> {}

}
