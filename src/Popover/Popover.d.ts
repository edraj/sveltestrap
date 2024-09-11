declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { ContainerType } from '../shared';

declare type PopoverPlacement = 'left' | 'top' | 'bottom' | 'right';
declare type Triggers = 'click' | 'hover' | 'focus';

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  animation?: boolean;
  container?: ContainerType;
  dismissible?: boolean;
  hideOnOutsideClick?: boolean;
  isOpen?: boolean;
  placement?: PopoverPlacement;
  target: string;
  theme?: string;
  title?: string;
  trigger?: Triggers;
}

export interface PopoverEvents {}

export interface PopoverSlots {
  default: {};
  title: {};
class?: string;
}

export class Popover extends SvelteComponent<PopoverProps, PopoverEvents, PopoverSlots> {}

}
