declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface OffcanvasHeaderProps extends HTMLAttributes<HTMLDivElement> {
  closeAriaLabel?: string;
  toggle?: () => void;
}

export interface OffcanvasHeaderEvents {}

export interface OffcanvasHeaderSlots {
  default: {};
  close: {};
class?: string;
}

export class OffcanvasHeader extends SvelteComponent<
  OffcanvasHeaderProps,
  OffcanvasHeaderEvents,
  OffcanvasHeaderSlots
> {}

}
