/** @typedef {typeof __propDef.props}  BreadcrumbItemProps */
/** @typedef {typeof __propDef.events}  BreadcrumbItemEvents */
/** @typedef {typeof __propDef.slots}  BreadcrumbItemSlots */
export default class BreadcrumbItem extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    active?: boolean | undefined;
    children?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type BreadcrumbItemProps = typeof __propDef.props;
export type BreadcrumbItemEvents = typeof __propDef.events;
export type BreadcrumbItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        active?: boolean | undefined;
        children?: string | undefined;
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
