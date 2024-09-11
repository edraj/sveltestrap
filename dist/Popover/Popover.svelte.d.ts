/** @typedef {typeof __propDef.props}  PopoverProps */
/** @typedef {typeof __propDef.events}  PopoverEvents */
/** @typedef {typeof __propDef.slots}  PopoverSlots */
export default class Popover extends SvelteComponent<{
    [x: string]: any;
    title?: string | undefined;
    class?: string | undefined;
    theme?: string | null | undefined;
    children?: string | undefined;
    dismissible?: boolean | undefined;
    isOpen?: boolean | undefined;
    placement?: string | undefined;
    container?: string | undefined;
    animation?: boolean | undefined;
    hideOnOutsideClick?: boolean | undefined;
    target?: string | undefined;
    trigger?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    title: {};
    default: {};
}> {
}
export type PopoverProps = typeof __propDef.props;
export type PopoverEvents = typeof __propDef.events;
export type PopoverSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string | undefined;
        class?: string | undefined;
        theme?: string | null | undefined;
        children?: string | undefined;
        dismissible?: boolean | undefined;
        isOpen?: boolean | undefined;
        placement?: string | undefined;
        container?: string | undefined;
        animation?: boolean | undefined;
        hideOnOutsideClick?: boolean | undefined;
        target?: string | undefined;
        trigger?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
