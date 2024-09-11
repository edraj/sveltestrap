declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';

export interface ResponsiveContainerProps {
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export interface ResponsiveContainerEvents {}

export interface ResponsiveContainerSlots {
  default: {};
class?: string;
}

export class ResponsiveContainer extends SvelteComponent<
  ResponsiveContainerProps,
  ResponsiveContainerEvents,
  ResponsiveContainerSlots
> {}

}
