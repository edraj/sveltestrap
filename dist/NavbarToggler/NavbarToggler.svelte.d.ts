/** @typedef {typeof __propDef.props}  NavbarTogglerProps */
/** @typedef {typeof __propDef.events}  NavbarTogglerEvents */
/** @typedef {typeof __propDef.slots}  NavbarTogglerSlots */
export default class NavbarToggler extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type NavbarTogglerProps = typeof __propDef.props;
export type NavbarTogglerEvents = typeof __propDef.events;
export type NavbarTogglerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
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
