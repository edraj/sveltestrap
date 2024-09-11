/** @typedef {typeof __propDef.props}  OffcanvasProps */
/** @typedef {typeof __propDef.events}  OffcanvasEvents */
/** @typedef {typeof __propDef.slots}  OffcanvasSlots */
export default class Offcanvas extends SvelteComponent<{
    [x: string]: any;
    body?: boolean | undefined;
    header?: string | undefined;
    style?: string | undefined;
    class?: string | undefined;
    theme?: string | null | undefined;
    scroll?: boolean | undefined;
    toggle?: undefined | Function;
    fade?: boolean | undefined;
    isOpen?: boolean | undefined;
    placement?: string | undefined;
    keyboard?: boolean | undefined;
    sm?: boolean | undefined;
    md?: boolean | undefined;
    lg?: boolean | undefined;
    xl?: boolean | undefined;
    xxl?: boolean | undefined;
    container?: string | undefined;
    backdrop?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    header: {};
    default: {};
}> {
}
export type OffcanvasProps = typeof __propDef.props;
export type OffcanvasEvents = typeof __propDef.events;
export type OffcanvasSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        body?: boolean | undefined;
        header?: string | undefined;
        style?: string | undefined;
        class?: string | undefined;
        theme?: string | null | undefined;
        scroll?: boolean | undefined;
        toggle?: undefined | Function;
        fade?: boolean | undefined;
        isOpen?: boolean | undefined;
        placement?: string | undefined;
        keyboard?: boolean | undefined;
        sm?: boolean | undefined;
        md?: boolean | undefined;
        lg?: boolean | undefined;
        xl?: boolean | undefined;
        xxl?: boolean | undefined;
        container?: string | undefined;
        backdrop?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
