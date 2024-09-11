/** @typedef {typeof __propDef.props}  ModalHeaderProps */
/** @typedef {typeof __propDef.events}  ModalHeaderEvents */
/** @typedef {typeof __propDef.slots}  ModalHeaderSlots */
export default class ModalHeader extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    toggle?: boolean | undefined;
    children?: any;
    closeAriaLabel?: string | undefined;
    id?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    close: {};
}> {
}
export type ModalHeaderProps = typeof __propDef.props;
export type ModalHeaderEvents = typeof __propDef.events;
export type ModalHeaderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        toggle?: boolean | undefined;
        children?: any;
        closeAriaLabel?: string | undefined;
        id?: string | undefined;
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
