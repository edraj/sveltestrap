/** @typedef {typeof __propDef.props}  ButtonDropdownProps */
/** @typedef {typeof __propDef.events}  ButtonDropdownEvents */
/** @typedef {typeof __propDef.slots}  ButtonDropdownSlots */
export default class ButtonDropdown extends SvelteComponent<{
    [x: string]: any;
}, {
    click: any;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ButtonDropdownProps = typeof __propDef.props;
export type ButtonDropdownEvents = typeof __propDef.events;
export type ButtonDropdownSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        click: any;
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
