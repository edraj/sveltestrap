/** @typedef {typeof __propDef.props}  ButtonGroupProps */
/** @typedef {typeof __propDef.events}  ButtonGroupEvents */
/** @typedef {typeof __propDef.slots}  ButtonGroupSlots */
export default class ButtonGroup extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    size?: string | undefined;
    vertical?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ButtonGroupProps = typeof __propDef.props;
export type ButtonGroupEvents = typeof __propDef.events;
export type ButtonGroupSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        size?: string | undefined;
        vertical?: boolean | undefined;
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
