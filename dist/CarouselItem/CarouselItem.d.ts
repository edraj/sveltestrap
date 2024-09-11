declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  activeIndex?: number;
  itemIndex?: number;
}

export interface CarouselItemEvents {}

export interface CarouselItemSlots {
  default: {};
class?: string;
}

export class CarouselItem extends SvelteComponent<CarouselItemProps, CarouselItemEvents, CarouselItemSlots> {}

}
