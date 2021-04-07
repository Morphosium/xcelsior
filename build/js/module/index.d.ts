declare type ElementDefinition = HTMLElement | string;
declare class Util {
    /**
     * returns element fallback
     * @param el html element or selector
     */
    static nativeHTMLElement(el: ElementDefinition): HTMLElement;
}
declare class MobileSidebarUtil {
    /**
     * When on small screens, if mobile view management is enabled on sidebar,
     * sidebar sections will be shown or hidden. If sectionName is not
     * @param element
     * @param sectionName
     */
    static toggleSidebarSection(element: ElementDefinition, sectionName?: string): void;
}
declare const _default: {
    Util: typeof Util;
    MobileSidebarUtil: typeof MobileSidebarUtil;
};
export default _default;