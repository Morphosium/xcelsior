(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const index_1 = require("./index"); //@ts-ignore


window.xcelsior = index_1.default;

},{"./index":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
    } else {
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
    const sidebarList = nativeElement.querySelectorAll(`.${MOBILE_SAFE_VIEW} .wrap .inner > .${SIDEBAR_CLASS}`);

    for (let sidebarIndex = 0; sidebarIndex < sidebarList.length; sidebarIndex++) {
      const sidebar = sidebarList[sidebarIndex];
      sidebar.classList.remove(SHOW_ON_MOBILE_CLASS);

      if (sidebar.getAttribute(SECTION_NAME_ATTR) === sectionName) {
        sidebar.classList.add(SHOW_ON_MOBILE_CLASS);
      }
    }

    const contentElementClassList = (_a = nativeElement.querySelector(`.content`)) === null || _a === void 0 ? void 0 : _a.classList;
    if (sectionName) contentElementClassList.add("hide");else {
      contentElementClassList.remove("hide");
    }
  }

}

exports.default = {
  Util,
  MobileSidebarUtil
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYnJvd3Nlci1zYWZlLnRzIiwic3JjL3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDLENBQ0E7OztBQUNBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLE9BQUEsQ0FBQSxPQUFsQjs7Ozs7Ozs7QUNEQSxNQUFNLG9CQUFvQixHQUFHLGdCQUE3QjtBQUNBLE1BQU0saUJBQWlCLEdBQUcsY0FBMUI7QUFDQSxNQUFNLGFBQWEsR0FBRyxTQUF0QjtBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsa0JBQXpCOztBQUVBLE1BQU0sSUFBTixDQUFVO0FBRU47OztBQUdHO0FBQ3FCLFNBQWpCLGlCQUFpQixDQUFDLEVBQUQsRUFBc0I7QUFDMUMsUUFBSSxPQUFPLEVBQVAsS0FBYyxRQUFsQixFQUE0QjtBQUN4QixhQUFPLFFBQVEsQ0FBQyxhQUFULENBQXVCLEVBQXZCLENBQVA7QUFDSCxLQUZELE1BR0s7QUFDRCxhQUFPLEVBQVA7QUFDSDtBQUNKOztBQWJLOztBQWdCVixNQUFNLGlCQUFOLENBQXVCO0FBR25COzs7OztBQUtHO0FBQ3dCLFNBQXBCLG9CQUFvQixDQUFDLE9BQUQsRUFBNkIsV0FBN0IsRUFBaUQ7OztBQUN4RSxVQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQUwsQ0FBdUIsT0FBdkIsQ0FBdEI7QUFDQSxVQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsZ0JBQWQsQ0FBK0IsSUFBSSxnQkFBZ0Isb0JBQW9CLGFBQWEsRUFBcEYsQ0FBcEI7O0FBQ0EsU0FBSyxJQUFJLFlBQVksR0FBRyxDQUF4QixFQUEyQixZQUFZLEdBQUcsV0FBVyxDQUFDLE1BQXRELEVBQThELFlBQVksRUFBMUUsRUFBOEU7QUFDMUUsWUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLFlBQUQsQ0FBM0I7QUFDQSxNQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLE1BQWxCLENBQXlCLG9CQUF6Qjs7QUFDQSxVQUFJLE9BQU8sQ0FBQyxZQUFSLENBQXFCLGlCQUFyQixNQUE0QyxXQUFoRCxFQUE2RDtBQUN6RCxRQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLG9CQUF0QjtBQUNIO0FBQ0o7O0FBQ0QsVUFBTSx1QkFBdUIsR0FBRyxDQUFBLEVBQUEsR0FBQSxhQUFhLENBQUMsYUFBZCxDQUE0QixVQUE1QixDQUFBLE1BQXVDLElBQXZDLElBQXVDLEVBQUEsS0FBQSxLQUFBLENBQXZDLEdBQXVDLEtBQUEsQ0FBdkMsR0FBdUMsRUFBQSxDQUFFLFNBQXpFO0FBQ0EsUUFBSSxXQUFKLEVBQ0ksdUJBQXVCLENBQUMsR0FBeEIsQ0FBNEIsTUFBNUIsRUFESixLQUVLO0FBQ0QsTUFBQSx1QkFBdUIsQ0FBQyxNQUF4QixDQUErQixNQUEvQjtBQUNIO0FBQ0o7O0FBekJrQjs7QUE0QnZCLE9BQUEsQ0FBQSxPQUFBLEdBQWU7QUFBQyxFQUFBLElBQUQ7QUFBTyxFQUFBO0FBQVAsQ0FBZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB4Y2Vsc2lvciBmcm9tIFwiLi9pbmRleFwiXG4vL0B0cy1pZ25vcmVcbndpbmRvdy54Y2Vsc2lvciA9IHhjZWxzaW9yOyIsInR5cGUgRWxlbWVudERlZmluaXRpb24gPSBIVE1MRWxlbWVudCB8IHN0cmluZztcbmNvbnN0IFNIT1dfT05fTU9CSUxFX0NMQVNTID0gXCJzaG93LW9uLW1vYmlsZVwiO1xuY29uc3QgU0VDVElPTl9OQU1FX0FUVFIgPSBcInNlY3Rpb24tbmFtZVwiO1xuY29uc3QgU0lERUJBUl9DTEFTUyA9IFwic2lkZWJhclwiO1xuY29uc3QgTU9CSUxFX1NBRkVfVklFVyA9IFwibW9iaWxlLXZpZXctc2FmZVwiO1xuXG5jbGFzcyBVdGlsIHtcblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgZWxlbWVudCBmYWxsYmFja1xuICAgICAqIEBwYXJhbSBlbCBodG1sIGVsZW1lbnQgb3Igc2VsZWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgbmF0aXZlSFRNTEVsZW1lbnQoZWw6IEVsZW1lbnREZWZpbml0aW9uKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBpZiAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZWxcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgTW9iaWxlU2lkZWJhclV0aWwge1xuXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIG9uIHNtYWxsIHNjcmVlbnMsIGlmIG1vYmlsZSB2aWV3IG1hbmFnZW1lbnQgaXMgZW5hYmxlZCBvbiBzaWRlYmFyLFxuICAgICAqIHNpZGViYXIgc2VjdGlvbnMgd2lsbCBiZSBzaG93biBvciBoaWRkZW4uIElmIHNlY3Rpb25OYW1lIGlzIG5vdFxuICAgICAqIEBwYXJhbSBlbGVtZW50IFxuICAgICAqIEBwYXJhbSBzZWN0aW9uTmFtZSBcbiAgICAgKi9cbiAgICBzdGF0aWMgdG9nZ2xlU2lkZWJhclNlY3Rpb24oZWxlbWVudDogRWxlbWVudERlZmluaXRpb24sIHNlY3Rpb25OYW1lPzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSBVdGlsLm5hdGl2ZUhUTUxFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBzaWRlYmFyTGlzdCA9IG5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7TU9CSUxFX1NBRkVfVklFV30gLndyYXAgLmlubmVyID4gLiR7U0lERUJBUl9DTEFTU31gKTtcbiAgICAgICAgZm9yIChsZXQgc2lkZWJhckluZGV4ID0gMDsgc2lkZWJhckluZGV4IDwgc2lkZWJhckxpc3QubGVuZ3RoOyBzaWRlYmFySW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3Qgc2lkZWJhciA9IHNpZGViYXJMaXN0W3NpZGViYXJJbmRleF07XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoU0hPV19PTl9NT0JJTEVfQ0xBU1MpO1xuICAgICAgICAgICAgaWYgKHNpZGViYXIuZ2V0QXR0cmlidXRlKFNFQ1RJT05fTkFNRV9BVFRSKSA9PT0gc2VjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoU0hPV19PTl9NT0JJTEVfQ0xBU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50Q2xhc3NMaXN0ID0gbmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuY29udGVudGApPy5jbGFzc0xpc3Q7XG4gICAgICAgIGlmIChzZWN0aW9uTmFtZSlcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50Q2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGVudEVsZW1lbnRDbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1V0aWwsIE1vYmlsZVNpZGViYXJVdGlsfSJdfQ==
