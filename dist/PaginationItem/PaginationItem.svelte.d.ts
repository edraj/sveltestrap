/** @typedef {typeof __propDef.props}  PaginationItemProps */
/** @typedef {typeof __propDef.events}  PaginationItemEvents */
/** @typedef {typeof __propDef.slots}  PaginationItemSlots */
export default class PaginationItem extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    active?: boolean | undefined;
    disabled?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type PaginationItemProps = typeof __propDef.props;
export type PaginationItemEvents = typeof __propDef.events;
export type PaginationItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        active?: boolean | undefined;
        disabled?: boolean | undefined;
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
