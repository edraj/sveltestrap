/** @typedef {typeof __propDef.props}  OffcanvasHeaderProps */
/** @typedef {typeof __propDef.events}  OffcanvasHeaderEvents */
/** @typedef {typeof __propDef.slots}  OffcanvasHeaderSlots */
export default class OffcanvasHeader extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    toggle?: any;
    children?: any;
    closeAriaLabel?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    close: {};
}> {
}
export type OffcanvasHeaderProps = typeof __propDef.props;
export type OffcanvasHeaderEvents = typeof __propDef.events;
export type OffcanvasHeaderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        toggle?: any;
        children?: any;
        closeAriaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        close: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
