/** @typedef {typeof __propDef.props}  PortalProps */
/** @typedef {typeof __propDef.events}  PortalEvents */
/** @typedef {typeof __propDef.slots}  PortalSlots */
export default class Portal extends SvelteComponent<{
    [x: string]: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type PortalProps = typeof __propDef.props;
export type PortalEvents = typeof __propDef.events;
export type PortalSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
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
