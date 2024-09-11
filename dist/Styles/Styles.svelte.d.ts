/** @typedef {typeof __propDef.props}  StylesProps */
/** @typedef {typeof __propDef.events}  StylesEvents */
/** @typedef {typeof __propDef.slots}  StylesSlots */
export default class Styles extends SvelteComponent<{
    theme?: any;
    icons?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StylesProps = typeof __propDef.props;
export type StylesEvents = typeof __propDef.events;
export type StylesSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        theme?: any;
        icons?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
