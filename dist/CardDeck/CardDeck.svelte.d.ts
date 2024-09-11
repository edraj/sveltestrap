/** @typedef {typeof __propDef.props}  CardDeckProps */
/** @typedef {typeof __propDef.events}  CardDeckEvents */
/** @typedef {typeof __propDef.slots}  CardDeckSlots */
export default class CardDeck extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CardDeckProps = typeof __propDef.props;
export type CardDeckEvents = typeof __propDef.events;
export type CardDeckSlots = typeof __propDef.slots;
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
