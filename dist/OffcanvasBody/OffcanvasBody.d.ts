declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface OffcanvasBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface OffcanvasBodyEvents {}

export interface OffcanvasBodySlots {
  default: {};
class?: string;
}

export class OffcanvasBody extends SvelteComponent<
  OffcanvasBodyProps,
  OffcanvasBodyEvents,
  OffcanvasBodySlots
> {}

}
