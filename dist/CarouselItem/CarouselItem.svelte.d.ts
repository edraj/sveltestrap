/** @typedef {typeof __propDef.props}  CarouselItemProps */
/** @typedef {typeof __propDef.events}  CarouselItemEvents */
/** @typedef {typeof __propDef.slots}  CarouselItemSlots */
export default class CarouselItem extends SvelteComponent<{
    [x: string]: any;
    class?: string | undefined;
    activeIndex?: number | undefined;
    itemIndex?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CarouselItemProps = typeof __propDef.props;
export type CarouselItemEvents = typeof __propDef.events;
export type CarouselItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        activeIndex?: number | undefined;
        itemIndex?: number | undefined;
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
