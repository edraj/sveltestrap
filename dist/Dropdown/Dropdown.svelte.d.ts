/** @typedef {typeof __propDef.props}  DropdownProps */
/** @typedef {typeof __propDef.events}  DropdownEvents */
/** @typedef {typeof __propDef.slots}  DropdownSlots */
export default class Dropdown extends SvelteComponent<{
    [x: string]: any;
    nav?: boolean | undefined;
    class?: string | undefined;
    theme?: string | null | undefined;
    toggle?: Function | undefined;
    active?: boolean | undefined;
    isOpen?: boolean | undefined;
    size?: string | undefined;
    direction?: string | undefined;
    autoClose?: boolean | undefined;
    dropup?: boolean | undefined;
    group?: boolean | undefined;
    inNavbar?: boolean | undefined;
    setActiveFromChild?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DropdownProps = typeof __propDef.props;
export type DropdownEvents = typeof __propDef.events;
export type DropdownSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        nav?: boolean | undefined;
        class?: string | undefined;
        theme?: string | null | undefined;
        toggle?: Function | undefined;
        active?: boolean | undefined;
        isOpen?: boolean | undefined;
        size?: string | undefined;
        direction?: string | undefined;
        autoClose?: boolean | undefined;
        dropup?: boolean | undefined;
        group?: boolean | undefined;
        inNavbar?: boolean | undefined;
        setActiveFromChild?: boolean | undefined;
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
