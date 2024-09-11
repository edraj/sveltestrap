/** @typedef {typeof __propDef.props}  ColumnProps */
/** @typedef {typeof __propDef.events}  ColumnEvents */
/** @typedef {typeof __propDef.slots}  ColumnSlots */
export default class Column extends SvelteComponent<{
    [x: string]: any;
    footer?: any;
    header?: any;
    class?: string | undefined;
    width?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    footer: {};
    header: {};
    default: {};
}> {
}
export type ColumnProps = typeof __propDef.props;
export type ColumnEvents = typeof __propDef.events;
export type ColumnSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        footer?: any;
        header?: any;
        class?: string | undefined;
        width?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        footer: {};
        header: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
