declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLImgAttributes } from 'svelte/elements';

export interface CardImgProps extends HTMLImgAttributes {
  bottom?: boolean;
  top?: boolean;
}

export interface CardImgEvents {}

export interface CardImgSlots {class?: string;
}

export class CardImg extends SvelteComponent<CardImgProps, CardImgEvents, CardImgSlots> {}

}
