declare type ElementDefinition = HTMLElement | string;
declare const SHOW_ON_MOBILE_CLASS = "show-on-mobile";
declare const SECTION_NAME_ATTR = "section-name";
declare const SIDEBAR_CLASS = "sidebar";
declare const MOBILE_SAFE_VIEW = "mobile-view-safe";
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
