/** @typedef {typeof __propDef.props}  NavbarBrandProps */
/** @typedef {typeof __propDef.events}  NavbarBrandEvents */
/** @typedef {typeof __propDef.slots}  NavbarBrandSlots */
export default class NavbarBrand extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    href?: string | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type NavbarBrandProps = typeof __propDef.props;
export type NavbarBrandEvents = typeof __propDef.events;
export type NavbarBrandSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        href?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
