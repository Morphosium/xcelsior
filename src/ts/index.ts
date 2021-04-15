type ElementDefinition = HTMLElement | string;
const SHOW_ON_MOBILE_CLASS = "show-on-mobile";
const SECTION_NAME_ATTR = "section-name";
const SIDEBAR_CLASS = "sidebar";
const MOBILE_SAFE_VIEW = "mobile-view-safe";

class Util {

    /**
     * returns element fallback
     * @param el html element or selector
     */
    static nativeHTMLElement(el: ElementDefinition): HTMLElement {
        if (typeof el === "string") {
            return document.querySelector(el);
        }
        else {
            return el
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
    static toggleSidebarSection(element: ElementDefinition, sectionName?: string, scrollUpSidebar = true) {
        const nativeElement = Util.nativeHTMLElement(element);
        const sidebarList = nativeElement.querySelectorAll(`.${MOBILE_SAFE_VIEW} > .wrap > .inner > .${SIDEBAR_CLASS}`);
        for (let sidebarIndex = 0; sidebarIndex < sidebarList.length; sidebarIndex++) {
            const sidebar = sidebarList[sidebarIndex];
            sidebar.classList.remove(SHOW_ON_MOBILE_CLASS);
            if (sidebar.getAttribute(SECTION_NAME_ATTR) === sectionName) {
                sidebar.classList.add(SHOW_ON_MOBILE_CLASS);
                if (scrollUpSidebar) sidebar.scrollTop = 0;
            }
        }
        const contentElementClassList = nativeElement.querySelector(`.content`)?.classList;
        if (sectionName)
            contentElementClassList.add("hide");
        else {
            contentElementClassList.remove("hide");
        }
    }
}

export default { Util, MobileSidebarUtil }


const initXcelsiorElement = (element: HTMLElement) => {
    const wrapSupposed = element?.firstChild as HTMLElement;
    const innerSupposed = wrapSupposed?.firstChild as HTMLElement;
    if (wrapSupposed?.classList?.contains("wrap") && innerSupposed?.classList?.contains("inner")) {
        //nothing
    }
    else if (element.getAttribute("no-auto-wrap") == null) {
        // create "wrap" and "inner" elements and move children into new "inner" element.
        const wrap = document.createElement("div");
        wrap.classList.add("wrap")
        const inner = document.createElement("div");
        inner.classList.add("inner");
        wrap.appendChild(inner);
        //All child elements (event texts) moved to by inner.append successfully
        inner.append(...element.childNodes);
        element.appendChild(wrap);
    }
}

export class XcelsiorHTMLElement extends HTMLElement {
    constructor() {
        super();
        window.addEventListener("load", () => {
            initXcelsiorElement(this);
        })
    }
}

export class RootXcelsiorHTMLElement extends HTMLElement { }
export class ScrollableXcelsiorHTMLElement extends XcelsiorHTMLElement { }
export class GridViewXcelsiorHTMLElement extends XcelsiorHTMLElement { }

customElements.define("xcelsior-root", RootXcelsiorHTMLElement);
customElements.define("xcelsior-scrollable", ScrollableXcelsiorHTMLElement)
customElements.define("xcelsior-grid-view", GridViewXcelsiorHTMLElement)