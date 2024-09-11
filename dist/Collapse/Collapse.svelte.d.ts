/** @typedef {typeof __propDef.props}  CollapseProps */
/** @typedef {typeof __propDef.events}  CollapseEvents */
/** @typedef {typeof __propDef.slots}  CollapseSlots */
export default class Collapse extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    isOpen?: boolean | undefined;
    horizontal?: boolean | undefined;
    navbar?: boolean | undefined;
    onEntering?: (() => boolean) | undefined;
    onEntered?: (() => boolean) | undefined;
    onExiting?: (() => boolean) | undefined;
    onExited?: (() => boolean) | undefined;
    expand?: boolean | undefined;
    toggler?: null | undefined;
}, {
    introstart: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    introend: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    outrostart: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    outroend: Event | MouseEvent | UIEvent | FocusEvent | ProgressEvent<EventTarget> | AnimationEvent | InputEvent | CompositionEvent | ClipboardEvent | DragEvent | ErrorEvent | FormDataEvent | PointerEvent | KeyboardEvent | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent;
    opening: CustomEvent<any>;
    open: CustomEvent<any>;
    closing: CustomEvent<any>;
    close: CustomEvent<any>;
    update: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CollapseProps = typeof __propDef.props;
export type CollapseEvents = typeof __propDef.events;
export type CollapseSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        isOpen?: boolean | undefined;
        horizontal?: boolean | undefined;
        navbar?: boolean | undefined;
        onEntering?: (() => boolean) | undefined;
        onEntered?: (() => boolean) | undefined;
        onExiting?: (() => boolean) | undefined;
        onExited?: (() => boolean) | undefined;
        expand?: boolean | undefined;
        toggler?: null | undefined;
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
        update: CustomEvent<any>;
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
