/** @typedef {typeof __propDef.props}  RowProps */
/** @typedef {typeof __propDef.events}  RowEvents */
/** @typedef {typeof __propDef.slots}  RowSlots */
export default class Row extends SvelteComponent<{
    [x: string]: any;
    form?: boolean | undefined;
    class?: string | undefined;
    inner?: any;
    noGutters?: boolean | undefined;
    cols?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type RowProps = typeof __propDef.props;
export type RowEvents = typeof __propDef.events;
export type RowSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        form?: boolean | undefined;
        class?: string | undefined;
        inner?: any;
        noGutters?: boolean | undefined;
        cols?: number | undefined;
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
