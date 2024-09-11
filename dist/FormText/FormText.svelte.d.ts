/** @typedef {typeof __propDef.props}  FormTextProps */
/** @typedef {typeof __propDef.events}  FormTextEvents */
/** @typedef {typeof __propDef.slots}  FormTextSlots */
export default class FormText extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    color?: any;
    inline?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FormTextProps = typeof __propDef.props;
export type FormTextEvents = typeof __propDef.events;
export type FormTextSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        color?: any;
        inline?: boolean | undefined;
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
