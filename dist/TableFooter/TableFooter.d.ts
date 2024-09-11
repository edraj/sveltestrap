declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableFooterEvents {}

export interface TableFooterSlots {
  default: {};
class?: string;
}

export class TableFooter extends SvelteComponent<TableFooterProps, TableFooterEvents, TableFooterSlots> {}

}
