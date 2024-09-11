/** @typedef {typeof __propDef.props}  JumbotronProps */
/** @typedef {typeof __propDef.events}  JumbotronEvents */
/** @typedef {typeof __propDef.slots}  JumbotronSlots */
export default class Jumbotron extends SvelteComponent<{
    class?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type JumbotronProps = typeof __propDef.props;
export type JumbotronEvents = typeof __propDef.events;
export type JumbotronSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
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
