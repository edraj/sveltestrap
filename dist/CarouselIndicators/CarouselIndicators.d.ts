declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLOlAttributes } from 'svelte/elements';

export interface CarouselIndicatorsProps extends HTMLOlAttributes {
  activeIndex: number;
  items: any[];
}

export interface CarouselIndicatorsEvents {}

export interface CarouselIndicatorsSlots {class?: string;
}

export class CarouselIndicators extends SvelteComponent<
  CarouselIndicatorsProps,
  CarouselIndicatorsEvents,
  CarouselIndicatorsSlots
> {}

}
