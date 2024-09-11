/** @typedef {typeof __propDef.props}  DropdownToggleProps */
/** @typedef {typeof __propDef.events}  DropdownToggleEvents */
/** @typedef {typeof __propDef.slots}  DropdownToggleSlots */
export default class DropdownToggle extends SvelteComponent<{
    [x: string]: any;
    nav?: boolean | undefined;
    class?: string | undefined;
    active?: boolean | undefined;
    color?: string | undefined;
    ariaLabel?: string | undefined;
    block?: boolean | undefined;
    disabled?: boolean | undefined;
    inner?: any;
    outline?: boolean | undefined;
    size?: string | undefined;
    tag?: null | undefined;
    caret?: boolean | undefined;
    split?: boolean | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DropdownToggleProps = typeof __propDef.props;
export type DropdownToggleEvents = typeof __propDef.events;
export type DropdownToggleSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        nav?: boolean | undefined;
        class?: string | undefined;
        active?: boolean | undefined;
        color?: string | undefined;
        ariaLabel?: string | undefined;
        block?: boolean | undefined;
        disabled?: boolean | undefined;
        inner?: any;
        outline?: boolean | undefined;
        size?: string | undefined;
        tag?: null | undefined;
        caret?: boolean | undefined;
        split?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
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
