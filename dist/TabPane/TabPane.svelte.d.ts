/** @typedef {typeof __propDef.props}  TabPaneProps */
/** @typedef {typeof __propDef.events}  TabPaneEvents */
/** @typedef {typeof __propDef.slots}  TabPaneSlots */
export default class TabPane extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    active?: boolean | undefined;
    disabled?: boolean | undefined;
    tab?: any;
    tabId?: any;
    onClick?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    tab: {};
    default: {};
}> {
}
export type TabPaneProps = typeof __propDef.props;
export type TabPaneEvents = typeof __propDef.events;
export type TabPaneSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        active?: boolean | undefined;
        disabled?: boolean | undefined;
        tab?: any;
        tabId?: any;
        onClick?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        tab: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
