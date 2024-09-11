/** @typedef {typeof __propDef.props}  NavbarProps */
/** @typedef {typeof __propDef.events}  NavbarEvents */
/** @typedef {typeof __propDef.slots}  NavbarSlots */
export default class Navbar extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    theme?: string | null | undefined;
    color?: string | undefined;
    expand?: string | boolean | undefined;
    container?: "sm" | "md" | "lg" | "xl" | "xxl" | "fluid" | undefined;
    dark?: boolean | undefined;
    fixed?: string | undefined;
    light?: boolean | undefined;
    sticky?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type NavbarProps = typeof __propDef.props;
export type NavbarEvents = typeof __propDef.events;
export type NavbarSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        theme?: string | null | undefined;
        color?: string | undefined;
        expand?: string | boolean | undefined;
        container?: "sm" | "md" | "lg" | "xl" | "xxl" | "fluid" | undefined;
        dark?: boolean | undefined;
        fixed?: string | undefined;
        light?: boolean | undefined;
        sticky?: string | undefined;
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
