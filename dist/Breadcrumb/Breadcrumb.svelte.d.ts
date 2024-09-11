/** @typedef {typeof __propDef.props}  BreadcrumbProps */
/** @typedef {typeof __propDef.events}  BreadcrumbEvents */
/** @typedef {typeof __propDef.slots}  BreadcrumbSlots */
export default class Breadcrumb extends SvelteComponent<{
    [x: string]: any;
    style?: string | undefined;
    class?: string | undefined;
    children?: string | undefined;
    divider?: string | undefined;
    listClassName?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type BreadcrumbProps = typeof __propDef.props;
export type BreadcrumbEvents = typeof __propDef.events;
export type BreadcrumbSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        style?: string | undefined;
        class?: string | undefined;
        children?: string | undefined;
        divider?: string | undefined;
        listClassName?: string | undefined;
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
