/** @typedef {typeof __propDef.props}  ToastBodyProps */
/** @typedef {typeof __propDef.events}  ToastBodyEvents */
/** @typedef {typeof __propDef.slots}  ToastBodySlots */
export default class ToastBody extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ToastBodyProps = typeof __propDef.props;
export type ToastBodyEvents = typeof __propDef.events;
export type ToastBodySlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
