/** @typedef {typeof __propDef.props}  ListGroupProps */
/** @typedef {typeof __propDef.events}  ListGroupEvents */
/** @typedef {typeof __propDef.slots}  ListGroupSlots */
export default class ListGroup extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    flush?: boolean | undefined;
    theme?: string | null | undefined;
    horizontal?: boolean | undefined;
    numbered?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ListGroupProps = typeof __propDef.props;
export type ListGroupEvents = typeof __propDef.events;
export type ListGroupSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        flush?: boolean | undefined;
        theme?: string | null | undefined;
        horizontal?: boolean | undefined;
        numbered?: boolean | undefined;
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
