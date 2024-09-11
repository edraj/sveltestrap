/** @typedef {typeof __propDef.props}  CarouselProps */
/** @typedef {typeof __propDef.events}  CarouselEvents */
/** @typedef {typeof __propDef.slots}  CarouselSlots */
export default class Carousel extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    theme?: string | undefined;
    pause?: boolean | undefined;
    activeIndex?: number | undefined;
    interval?: number | undefined;
    items?: any[] | undefined;
    keyboard?: boolean | undefined;
    ride?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CarouselProps = typeof __propDef.props;
export type CarouselEvents = typeof __propDef.events;
export type CarouselSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        theme?: string | undefined;
        pause?: boolean | undefined;
        activeIndex?: number | undefined;
        interval?: number | undefined;
        items?: any[] | undefined;
        keyboard?: boolean | undefined;
        ride?: boolean | undefined;
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
