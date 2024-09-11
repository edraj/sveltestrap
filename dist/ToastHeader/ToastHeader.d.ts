declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ToastHeaderProps extends HTMLAttributes<HTMLDivElement> {
  toggle?: () => void;
  icon?: any;
  closeAriaLabel?: string;
}

export interface ToastHeaderEvents {}

export interface ToastHeaderSlots {
  default: {};
  close: {};
  icon: {};
class?: string;
}

export class ToastHeader extends SvelteComponent<ToastHeaderProps, ToastHeaderEvents, ToastHeaderSlots> {}

}
