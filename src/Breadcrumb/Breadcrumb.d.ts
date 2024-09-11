declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  divider?: string;
  listClassName?: string;
}

export interface BreadcrumbEvents {}

export interface BreadcrumbSlots {
  default: {};
class?: string;
}

export class Breadcrumb extends SvelteComponent<BreadcrumbProps, BreadcrumbEvents, BreadcrumbSlots> {}

}
