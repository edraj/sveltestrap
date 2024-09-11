/** @typedef {typeof __propDef.props}  FormGroupProps */
/** @typedef {typeof __propDef.events}  FormGroupEvents */
/** @typedef {typeof __propDef.slots}  FormGroupSlots */
export default class FormGroup extends SvelteComponent<{
    [x: string]: any;
    label?: string | undefined;
    class?: string | undefined;
    disabled?: boolean | undefined;
    tag?: string | undefined;
    inline?: boolean | undefined;
    check?: boolean | undefined;
    floating?: boolean | undefined;
    row?: boolean | undefined;
    spacing?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    label: {};
}> {
}
export type FormGroupProps = typeof __propDef.props;
export type FormGroupEvents = typeof __propDef.events;
export type FormGroupSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        label?: string | undefined;
        class?: string | undefined;
        disabled?: boolean | undefined;
        tag?: string | undefined;
        inline?: boolean | undefined;
        check?: boolean | undefined;
        floating?: boolean | undefined;
        row?: boolean | undefined;
        spacing?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        label: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
