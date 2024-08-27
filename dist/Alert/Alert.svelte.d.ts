/** @typedef {typeof __propDef.props}  AlertProps */
/** @typedef {typeof __propDef.events}  AlertEvents */
/** @typedef {typeof __propDef.slots}  AlertSlots */
export default class Alert {
}
export type AlertProps = typeof __propDef.props;
export type AlertEvents = typeof __propDef.events;
export type AlertSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        [x: string]: any;
        heading?: string | undefined;
        class?: string | undefined;
        children?: any;
        closeAriaLabel?: string | undefined;
        closeClassName?: string | undefined;
        color?: string | undefined;
        dismissible?: boolean | undefined;
        fade?: boolean | undefined;
        isOpen?: boolean | undefined;
        toggle?: Function | undefined;
        theme?: string | undefined;
        transition?: object | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        heading: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
