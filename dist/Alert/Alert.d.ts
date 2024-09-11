declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { FadeProps } from '../Fade';
import { Color } from '../shared';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  closeAriaLabel?: string;
  closeClassName?: string;
  color?: Color | string;
  dismissible?: boolean;
  fade?: boolean;
  heading?: string;
  isOpen?: boolean;
  theme?: string;
  toggle?: () => void;
  transition?: FadeProps;
}

export interface AlertEvents {}

export interface AlertSlots {
  default: {};
  heading?: {};
class?: string;
}

export class Alert extends SvelteComponent<AlertProps, AlertEvents, AlertSlots> {}

}
