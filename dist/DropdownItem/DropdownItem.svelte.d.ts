/** @typedef {typeof __propDef.props}  DropdownItemProps */
/** @typedef {typeof __propDef.events}  DropdownItemEvents */
/** @typedef {typeof __propDef.slots}  DropdownItemSlots */
export default class DropdownItem extends SvelteComponent<{
    [x: string]: any;
    header?: boolean | undefined;
    class?: string | undefined;
    toggle?: boolean | undefined;
    active?: boolean | undefined;
    href?: string | undefined;
    divider?: boolean | undefined;
    disabled?: boolean | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DropdownItemProps = typeof __propDef.props;
export type DropdownItemEvents = typeof __propDef.events;
export type DropdownItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        header?: boolean | undefined;
        class?: string | undefined;
        toggle?: boolean | undefined;
        active?: boolean | undefined;
        href?: string | undefined;
        divider?: boolean | undefined;
        disabled?: boolean | undefined;
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
