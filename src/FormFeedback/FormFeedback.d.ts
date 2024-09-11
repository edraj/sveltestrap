declare module 'sveltestrap' {
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface FormFeedbackProps extends HTMLAttributes<HTMLDivElement> {
  tooltip?: boolean;
  valid?: boolean;
}

export interface FormFeedbackEvents {}

export interface FormFeedbackSlots {
  default: {};
class?: string;
}

export class FormFeedback extends SvelteComponent<FormFeedbackProps, FormFeedbackEvents, FormFeedbackSlots> {}

}
