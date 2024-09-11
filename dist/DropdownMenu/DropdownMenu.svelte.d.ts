/** @typedef {typeof __propDef.props}  DropdownMenuProps */
/** @typedef {typeof __propDef.events}  DropdownMenuEvents */
/** @typedef {typeof __propDef.slots}  DropdownMenuSlots */
export default class DropdownMenu extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    end?: boolean | undefined;
    right?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DropdownMenuProps = typeof __propDef.props;
export type DropdownMenuEvents = typeof __propDef.events;
export type DropdownMenuSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        end?: boolean | undefined;
        right?: boolean | undefined;
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
