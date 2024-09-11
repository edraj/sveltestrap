/** @typedef {typeof __propDef.props}  ButtonToolbarProps */
/** @typedef {typeof __propDef.events}  ButtonToolbarEvents */
/** @typedef {typeof __propDef.slots}  ButtonToolbarSlots */
export default class ButtonToolbar extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ButtonToolbarProps = typeof __propDef.props;
export type ButtonToolbarEvents = typeof __propDef.events;
export type ButtonToolbarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
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
