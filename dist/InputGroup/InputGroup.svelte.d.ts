/** @typedef {typeof __propDef.props}  InputGroupProps */
/** @typedef {typeof __propDef.events}  InputGroupEvents */
/** @typedef {typeof __propDef.slots}  InputGroupSlots */
export default class InputGroup extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    theme?: string | null | undefined;
    size?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type InputGroupProps = typeof __propDef.props;
export type InputGroupEvents = typeof __propDef.events;
export type InputGroupSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        theme?: string | null | undefined;
        size?: string | undefined;
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
