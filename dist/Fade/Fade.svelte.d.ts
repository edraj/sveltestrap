/** @typedef {typeof __propDef.props}  FadeProps */
/** @typedef {typeof __propDef.events}  FadeEvents */
/** @typedef {typeof __propDef.slots}  FadeSlots */
export default class Fade extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    isOpen?: boolean | undefined;
    onEntering?: Function | undefined;
    onEntered?: Function | undefined;
    onExiting?: Function | undefined;
    onExited?: Function | undefined;
    toggler?: HTMLElement | null | undefined;
}, {
    introstart: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    introend: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    outrostart: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    outroend: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    opening: CustomEvent<any>;
    open: CustomEvent<any>;
    closing: CustomEvent<any>;
    close: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FadeProps = typeof __propDef.props;
export type FadeEvents = typeof __propDef.events;
export type FadeSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        isOpen?: boolean | undefined;
        onEntering?: Function | undefined;
        onEntered?: Function | undefined;
        onExiting?: Function | undefined;
        onExited?: Function | undefined;
        toggler?: HTMLElement | null | undefined;
    };
    events: {
        introstart: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        introend: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        outrostart: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        outroend: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
        opening: CustomEvent<any>;
        open: CustomEvent<any>;
        closing: CustomEvent<any>;
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
