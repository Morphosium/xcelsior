"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridViewXcelsiorHTMLElement = exports.ScrollableXcelsiorHTMLElement = exports.RootXcelsiorHTMLElement = exports.XcelsiorHTMLElement = void 0;
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
    static toggleSidebarSection(element, sectionName, scrollUp = true) {
        var _a;
        const nativeElement = Util.nativeHTMLElement(element);
        const sidebarList = nativeElement.querySelectorAll(`.${MOBILE_SAFE_VIEW} > .wrap > .inner > .${SIDEBAR_CLASS}`);
        for (let sidebarIndex = 0; sidebarIndex < sidebarList.length; sidebarIndex++) {
            const sidebar = sidebarList[sidebarIndex];
            sidebar.classList.remove(SHOW_ON_MOBILE_CLASS);
            if (sidebar.getAttribute(SECTION_NAME_ATTR) === sectionName) {
                sidebar.classList.add(SHOW_ON_MOBILE_CLASS);
                if (scrollUp)
                    sidebar.scrollTop = 0;
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
exports.default = { Util, MobileSidebarUtil };
const initXcelsiorElement = (element) => {
    var _a, _b;
    const wrapSupposed = element === null || element === void 0 ? void 0 : element.firstChild;
    const innerSupposed = wrapSupposed === null || wrapSupposed === void 0 ? void 0 : wrapSupposed.firstChild;
    if (((_a = wrapSupposed === null || wrapSupposed === void 0 ? void 0 : wrapSupposed.classList) === null || _a === void 0 ? void 0 : _a.contains("wrap")) && ((_b = innerSupposed === null || innerSupposed === void 0 ? void 0 : innerSupposed.classList) === null || _b === void 0 ? void 0 : _b.contains("inner"))) {
        //nothing
    }
    else if (element.getAttribute("no-auto-wrap") == null) {
        // create "wrap" and "inner" elements and move children into new "inner" element.
        const wrap = document.createElement("div");
        wrap.classList.add("wrap");
        const inner = document.createElement("div");
        inner.classList.add("inner");
        wrap.appendChild(inner);
        //All child elements (event texts) moved to by inner.append successfully
        inner.append(...element.childNodes);
        element.appendChild(wrap);
    }
};
class XcelsiorHTMLElement extends HTMLElement {
    constructor() {
        super();
        initXcelsiorElement(this);
    }
}
exports.XcelsiorHTMLElement = XcelsiorHTMLElement;
class RootXcelsiorHTMLElement extends HTMLElement {
}
exports.RootXcelsiorHTMLElement = RootXcelsiorHTMLElement;
class ScrollableXcelsiorHTMLElement extends XcelsiorHTMLElement {
}
exports.ScrollableXcelsiorHTMLElement = ScrollableXcelsiorHTMLElement;
class GridViewXcelsiorHTMLElement extends XcelsiorHTMLElement {
}
exports.GridViewXcelsiorHTMLElement = GridViewXcelsiorHTMLElement;
customElements.define("xcelsior-root", RootXcelsiorHTMLElement);
customElements.define("xcelsior-scrollable", ScrollableXcelsiorHTMLElement);
customElements.define("xcelsior-grid-view", GridViewXcelsiorHTMLElement);
