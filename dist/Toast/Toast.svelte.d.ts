/** @typedef {typeof __propDef.props}  ToastProps */
/** @typedef {typeof __propDef.events}  ToastEvents */
/** @typedef {typeof __propDef.slots}  ToastSlots */
export default class Toast extends SvelteComponent<{
    [x: string]: any;
    body?: boolean | undefined;
    header?: string | undefined;
    class?: string | undefined;
    theme?: string | null | undefined;
    toggle?: null | undefined;
    fade?: boolean | undefined;
    isOpen?: boolean | undefined;
    autohide?: boolean | undefined;
    delay?: number | undefined;
    duration?: number | undefined;
}, {
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
export type ToastProps = typeof __propDef.props;
export type ToastEvents = typeof __propDef.events;
export type ToastSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        body?: boolean | undefined;
        header?: string | undefined;
        class?: string | undefined;
        theme?: string | null | undefined;
        toggle?: null | undefined;
        fade?: boolean | undefined;
        isOpen?: boolean | undefined;
        autohide?: boolean | undefined;
        delay?: number | undefined;
        duration?: number | undefined;
    };
    events: {
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
