/** @typedef {typeof __propDef.props}  ProgressProps */
/** @typedef {typeof __propDef.events}  ProgressEvents */
/** @typedef {typeof __propDef.slots}  ProgressSlots */
export default class Progress extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    theme?: string | null | undefined;
    color?: string | undefined;
    value?: number | undefined;
    max?: number | undefined;
    animated?: boolean | undefined;
    bar?: boolean | undefined;
    barClassName?: string | undefined;
    multi?: boolean | undefined;
    striped?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ProgressProps = typeof __propDef.props;
export type ProgressEvents = typeof __propDef.events;
export type ProgressSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        theme?: string | null | undefined;
        color?: string | undefined;
        value?: number | undefined;
        max?: number | undefined;
        animated?: boolean | undefined;
        bar?: boolean | undefined;
        barClassName?: string | undefined;
        multi?: boolean | undefined;
        striped?: boolean | undefined;
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
