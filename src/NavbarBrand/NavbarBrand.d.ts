declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAnchorAttributes } from 'svelte/elements';

export interface NavbarBrandProps extends HTMLAnchorAttributes {}

export interface NavbarBrandEvents {
  click: WindowEventMap['click'];
}

export interface NavbarBrandSlots {
  default: {};
class?: string;
}

export class NavbarBrand extends SvelteComponent<NavbarBrandProps, NavbarBrandEvents, NavbarBrandSlots> {}

}
