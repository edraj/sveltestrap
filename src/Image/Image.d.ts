declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLImgAttributes } from 'svelte/elements';

export interface ImageProps extends HTMLImgAttributes {
  alt?: string;
  figure?: boolean;
  fluid?: boolean;
  theme?: string;
  thumbnail?: boolean;
}

export interface ImageEvents {}

export interface ImageSlots {class?: string;
}

export class Image extends SvelteComponent<ImageProps, ImageEvents, ImageSlots> {}

}
