declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLLiAttributes } from 'svelte/elements';

export interface NavItemProps extends HTMLLiAttributes {
  active?: boolean;
}

export interface NavItemEvents {}

export interface NavItemSlots {
  default: {};
class?: string;
}

export class NavItem extends SvelteComponent<NavItemProps, NavItemEvents, NavItemSlots, {click: WindowEventMap['click']}> {}

}
