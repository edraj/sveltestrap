/** @typedef {typeof __propDef.props}  ContainerProps */
/** @typedef {typeof __propDef.events}  ContainerEvents */
/** @typedef {typeof __propDef.slots}  ContainerSlots */
export default class Container extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    sm?: boolean | undefined;
    md?: boolean | undefined;
    lg?: boolean | undefined;
    xl?: boolean | undefined;
    xxl?: boolean | undefined;
    fluid?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ContainerProps = typeof __propDef.props;
export type ContainerEvents = typeof __propDef.events;
export type ContainerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        sm?: boolean | undefined;
        md?: boolean | undefined;
        lg?: boolean | undefined;
        xl?: boolean | undefined;
        xxl?: boolean | undefined;
        fluid?: boolean | undefined;
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
