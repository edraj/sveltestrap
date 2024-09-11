/** @typedef {typeof __propDef.props}  TableProps */
/** @typedef {typeof __propDef.events}  TableEvents */
/** @typedef {typeof __propDef.slots}  TableSlots */
export default class Table extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    size?: string | undefined;
    striped?: boolean | undefined;
    bordered?: boolean | undefined;
    borderless?: boolean | undefined;
    hover?: boolean | undefined;
    responsive?: boolean | undefined;
    rows?: Object[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        size?: string | undefined;
        striped?: boolean | undefined;
        bordered?: boolean | undefined;
        borderless?: boolean | undefined;
        hover?: boolean | undefined;
        responsive?: boolean | undefined;
        rows?: Object[] | undefined;
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
