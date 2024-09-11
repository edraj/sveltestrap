declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface ListGroupProps extends HTMLAttributes<HTMLUListElement> {
  flush?: boolean;
  horizontal?: boolean;
  numbered?: boolean;
  theme?: string;
}

export interface ListGroupEvents {}

export interface ListGroupSlots {
  default: {};
class?: string;
}

export class ListGroup extends SvelteComponent<ListGroupProps, ListGroupEvents, ListGroupSlots> {}

}
