/** @typedef {typeof __propDef.props}  ToastHeaderProps */
/** @typedef {typeof __propDef.events}  ToastHeaderEvents */
/** @typedef {typeof __propDef.slots}  ToastHeaderSlots */
export default class ToastHeader extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    toggle?: null | undefined;
    closeAriaLabel?: string | undefined;
    icon?: null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    icon: {};
    default: {};
    close: {};
}> {
}
export type ToastHeaderProps = typeof __propDef.props;
export type ToastHeaderEvents = typeof __propDef.events;
export type ToastHeaderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        toggle?: null | undefined;
        closeAriaLabel?: string | undefined;
        icon?: null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
        close: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
