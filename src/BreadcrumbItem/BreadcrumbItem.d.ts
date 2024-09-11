declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLLiAttributes } from 'svelte/elements';

export interface BreadcrumbItemProps extends HTMLLiAttributes {
  active?: boolean;
}

export interface BreadcrumbItemEvents {}

export interface BreadcrumbItemSlots {
  default: {};
class?: string;
}

export class BreadcrumbItem extends SvelteComponent<
  BreadcrumbItemProps,
  BreadcrumbItemEvents,
  BreadcrumbItemSlots
> {}

}
