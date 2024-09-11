/** @typedef {typeof __propDef.props}  CardBodyProps */
/** @typedef {typeof __propDef.events}  CardBodyEvents */
/** @typedef {typeof __propDef.slots}  CardBodySlots */
export default class CardBody extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CardBodyProps = typeof __propDef.props;
export type CardBodyEvents = typeof __propDef.events;
export type CardBodySlots = typeof __propDef.slots;
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
