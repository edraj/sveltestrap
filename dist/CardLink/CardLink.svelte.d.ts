/** @typedef {typeof __propDef.props}  CardLinkProps */
/** @typedef {typeof __propDef.events}  CardLinkEvents */
/** @typedef {typeof __propDef.slots}  CardLinkSlots */
export default class CardLink extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    href?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CardLinkProps = typeof __propDef.props;
export type CardLinkEvents = typeof __propDef.events;
export type CardLinkSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        href?: string | undefined;
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
