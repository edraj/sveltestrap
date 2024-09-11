/** @typedef {typeof __propDef.props}  CarouselControlProps */
/** @typedef {typeof __propDef.events}  CarouselControlEvents */
/** @typedef {typeof __propDef.slots}  CarouselControlSlots */
export default class CarouselControl extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    activeIndex?: number | undefined;
    items?: any;
    direction?: string | undefined;
    directionText?: string | undefined;
    wrap?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CarouselControlProps = typeof __propDef.props;
export type CarouselControlEvents = typeof __propDef.events;
export type CarouselControlSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        activeIndex?: number | undefined;
        items?: any;
        direction?: string | undefined;
        directionText?: string | undefined;
        wrap?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
