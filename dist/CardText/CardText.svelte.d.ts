/** @typedef {typeof __propDef.props}  CardTextProps */
/** @typedef {typeof __propDef.events}  CardTextEvents */
/** @typedef {typeof __propDef.slots}  CardTextSlots */
export default class CardText extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CardTextProps = typeof __propDef.props;
export type CardTextEvents = typeof __propDef.events;
export type CardTextSlots = typeof __propDef.slots;
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
