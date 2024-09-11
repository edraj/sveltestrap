declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableHeaderEvents {}

export interface TableHeaderSlots {
  default: {};
class?: string;
}

export class TableHeader extends SvelteComponent<TableHeaderProps, TableHeaderEvents, TableHeaderSlots> {}

}
