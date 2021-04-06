const SHOW_ON_MOBILE_CLASS = "show-on-mobile";
const SECTION_NAME_ATTR = "section-name";
const SIDEBAR_CLASS = "sidebar";
const MOBILE_SAFE_VIEW = "mobile-view-safe";
class Util {
    /**
     * returns element fallback
     * @param el html element or selector
     */
    static nativeHTMLElement(el) {
        if (typeof el === "string") {
            return document.querySelector(el);
        }
        else {
            return el;
        }
    }
}
class MobileSidebarUtil {
    /**
     * When on small screens, if mobile view management is enabled on sidebar,
     * sidebar sections will be shown or hidden. If sectionName is not
     * @param element
     * @param sectionName
     */
    static toggleSidebarSection(element, sectionName) {
        var _a;
        const nativeElement = Util.nativeHTMLElement(element);
        const sidebarList = nativeElement.querySelectorAll(`.${MOBILE_SAFE_VIEW} .inner > .${SIDEBAR_CLASS}`);
        for (let sidebarIndex = 0; sidebarIndex < sidebarList.length; sidebarIndex++) {
            const sidebar = sidebarList[sidebarIndex];
            sidebar.classList.remove(SHOW_ON_MOBILE_CLASS);
            if (sidebar.getAttribute(SECTION_NAME_ATTR) === sectionName) {
                sidebar.classList.add(SHOW_ON_MOBILE_CLASS);
            }
        }
        const contentElementClassList = (_a = nativeElement.querySelector(`.content`)) === null || _a === void 0 ? void 0 : _a.classList;
        if (sectionName)
            contentElementClassList.add("hide");
        else {
            contentElementClassList.remove("hide");
        }
    }
}
