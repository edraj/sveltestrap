/** @typedef {typeof __propDef.props}  NavProps */
/** @typedef {typeof __propDef.events}  NavEvents */
/** @typedef {typeof __propDef.slots}  NavSlots */
export default class Nav extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    theme?: string | null | undefined;
    vertical?: string | undefined;
    horizontal?: string | undefined;
    navbar?: boolean | undefined;
    tabs?: boolean | undefined;
    pills?: boolean | undefined;
    justified?: boolean | undefined;
    fill?: boolean | undefined;
    card?: boolean | undefined;
    underline?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type NavProps = typeof __propDef.props;
export type NavEvents = typeof __propDef.events;
export type NavSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        theme?: string | null | undefined;
        vertical?: string | undefined;
        horizontal?: string | undefined;
        navbar?: boolean | undefined;
        tabs?: boolean | undefined;
        pills?: boolean | undefined;
        justified?: boolean | undefined;
        fill?: boolean | undefined;
        card?: boolean | undefined;
        underline?: boolean | undefined;
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
