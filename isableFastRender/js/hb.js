(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2@v2.21100.20000/package/dist/cjs/popper.js
  var require_popper = __commonJS({
    "ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2@v2.21100.20000/package/dist/cjs/popper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (node.toString() !== "[object Window]") {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      function isElement2(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;
      function getBoundingClientRect(element, includeScale) {
        if (includeScale === void 0) {
          includeScale = false;
        }
        var rect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (isHTMLElement(element) && includeScale) {
          var offsetHeight = element.offsetHeight;
          var offsetWidth = element.offsetWidth;
          if (offsetWidth > 0) {
            scaleX = round(rect.width) / offsetWidth || 1;
          }
          if (offsetHeight > 0) {
            scaleY = round(rect.height) / offsetHeight || 1;
          }
        }
        return {
          width: rect.width / scaleX,
          height: rect.height / scaleY,
          top: rect.top / scaleY,
          right: rect.right / scaleX,
          bottom: rect.bottom / scaleY,
          left: rect.left / scaleX,
          x: rect.left / scaleX,
          y: rect.top / scaleY
        };
      }
      function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft,
          scrollTop
        };
      }
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) {
          return getWindowScroll(node);
        } else {
          return getHTMLElementScroll(node);
        }
      }
      function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getDocumentElement(element) {
        return ((isElement2(element) ? element.ownerDocument : (
          // $FlowFixMe[prop-missing]
          element.document
        )) || window.document).documentElement;
      }
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getComputedStyle2(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
          isScrollParent(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }
        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }
        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width,
          height
        };
      }
      function getParentNode(element) {
        if (getNodeName(element) === "html") {
          return element;
        }
        return (
          // this is a quicker (but less type safe) way to save quite some bytes from the bundle
          // $FlowFixMe[incompatible-return]
          // $FlowFixMe[prop-missing]
          element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          element.parentNode || // DOM Element detected
          (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
          // $FlowFixMe[incompatible-call]: HTMLElement is a Node
          getDocumentElement(element)
        );
      }
      function getScrollParent(node) {
        if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(node) && isScrollParent(node)) {
          return node;
        }
        return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) {
          list = [];
        }
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : (
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)))
        );
      }
      function isTableElement(element) {
        return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
        getComputedStyle2(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      function getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
        var isIE = navigator.userAgent.indexOf("Trident") !== -1;
        if (isIE && isHTMLElement(element)) {
          var elementCss = getComputedStyle2(element);
          if (elementCss.position === "fixed") {
            return null;
          }
        }
        var currentNode = getParentNode(element);
        while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
          var css = getComputedStyle2(currentNode);
          if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      function getOffsetParent(element) {
        var window2 = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      var top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [top, bottom, right, left];
      var start = "start";
      var end = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
        return acc.concat([placement + "-" + start, placement + "-" + end]);
      }, []);
      var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
        return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
      }, []);
      var beforeRead = "beforeRead";
      var read = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
      function order(modifiers) {
        var map = /* @__PURE__ */ new Map();
        var visited = /* @__PURE__ */ new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
          map.set(modifier.name, modifier);
        });
        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function(dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);
              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
          if (!visited.has(modifier.name)) {
            sort(modifier);
          }
        });
        return result;
      }
      function orderModifiers(modifiers) {
        var orderedModifiers = order(modifiers);
        return modifierPhases.reduce(function(acc, phase) {
          return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }
      function debounce(fn) {
        var pending;
        return function() {
          if (!pending) {
            pending = new Promise(function(resolve) {
              Promise.resolve().then(function() {
                pending = void 0;
                resolve(fn());
              });
            });
          }
          return pending;
        };
      }
      function format(str) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return [].concat(args).reduce(function(p, c) {
          return p.replace(/%s/, c);
        }, str);
      }
      var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
      var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
      var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
      function validateModifiers(modifiers) {
        modifiers.forEach(function(modifier) {
          [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self2) {
            return self2.indexOf(value) === index;
          }).forEach(function(key) {
            switch (key) {
              case "name":
                if (typeof modifier.name !== "string") {
                  console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                }
                break;
              case "enabled":
                if (typeof modifier.enabled !== "boolean") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                }
                break;
              case "phase":
                if (modifierPhases.indexOf(modifier.phase) < 0) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
                }
                break;
              case "fn":
                if (typeof modifier.fn !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "effect":
                if (modifier.effect != null && typeof modifier.effect !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "requires":
                if (modifier.requires != null && !Array.isArray(modifier.requires)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                }
                break;
              case "requiresIfExists":
                if (!Array.isArray(modifier.requiresIfExists)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                }
                break;
              case "options":
              case "data":
                break;
              default:
                console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                  return '"' + s + '"';
                }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
              if (modifiers.find(function(mod) {
                return mod.name === requirement;
              }) == null) {
                console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
              }
            });
          });
        });
      }
      function uniqueBy(arr, fn) {
        var identifiers = /* @__PURE__ */ new Set();
        return arr.filter(function(item) {
          var identifier = fn(item);
          if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
          }
        });
      }
      function getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function(merged2, current) {
          var existing = merged2[current.name];
          merged2[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged2;
        }, {});
        return Object.keys(merged).map(function(key) {
          return merged[key];
        });
      }
      function getViewportRect(element) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x: x + getWindowScrollBarX(element),
          y
        };
      }
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle2(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
          do {
            if (next && parent.isSameNode(next)) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      function getInnerBoundingClientRect(element) {
        var rect = getBoundingClientRect(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement2(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
        var clippingParents2 = listScrollParents(getParentNode(element));
        var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement2(clipperElement)) {
          return [];
        }
        return clippingParents2.filter(function(clippingParent) {
          return isElement2(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body" && (canEscapeClipping ? getComputedStyle2(clippingParent).position !== "static" : true);
        });
      }
      function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents2[0];
        var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      function getVariation(placement) {
        return placement.split("-")[1];
      }
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
      }
      function computeOffsets(_ref) {
        var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference2.x + reference2.width / 2 - element.width / 2;
        var commonY = reference2.y + reference2.height / 2 - element.height / 2;
        var offsets;
        switch (basePlacement) {
          case top:
            offsets = {
              x: commonX,
              y: reference2.y - element.height
            };
            break;
          case bottom:
            offsets = {
              x: commonX,
              y: reference2.y + reference2.height
            };
            break;
          case right:
            offsets = {
              x: reference2.x + reference2.width,
              y: commonY
            };
            break;
          case left:
            offsets = {
              x: reference2.x - element.width,
              y: commonY
            };
            break;
          default:
            offsets = {
              x: reference2.x,
              y: reference2.y
            };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          var len = mainAxis === "y" ? "height" : "width";
          switch (variation) {
            case start:
              offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
              break;
            case end:
              offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
              break;
          }
        }
        return offsets;
      }
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
        return keys.reduce(function(hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }
      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper ? reference : popper;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement2(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets2 = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: "absolute",
          placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
        var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset;
        if (elementContext === popper && offsetData) {
          var offset2 = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
          });
        }
        return overflowOffsets;
      }
      var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
      var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
      var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return !args.some(function(element) {
          return !(element && typeof element.getBoundingClientRect === "function");
        });
      }
      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper4(reference2, popper2, options) {
          if (options === void 0) {
            options = defaultOptions;
          }
          var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference2,
              popper: popper2
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options2);
              state.scrollParents = {
                reference: isElement2(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                popper: listScrollParents(popper2)
              };
              var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
              state.orderedModifiers = orderedModifiers.filter(function(m) {
                return m.enabled;
              });
              if (true) {
                var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                  var name = _ref.name;
                  return name;
                });
                validateModifiers(modifiers);
                if (getBasePlacement(state.options.placement) === auto) {
                  var flipModifier = state.orderedModifiers.find(function(_ref2) {
                    var name = _ref2.name;
                    return name === "flip";
                  });
                  if (!flipModifier) {
                    console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
                  }
                }
                var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
                if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
                  return parseFloat(margin);
                })) {
                  console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
                }
              }
              runModifierEffects();
              return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }
              var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
              if (!areValidElements(reference3, popper3)) {
                if (true) {
                  console.error(INVALID_ELEMENT_ERROR);
                }
                return;
              }
              state.rects = {
                reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                popper: getLayoutRect(popper3)
              };
              state.reset = false;
              state.placement = state.options.placement;
              state.orderedModifiers.forEach(function(modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              var __debug_loops__ = 0;
              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (true) {
                  __debug_loops__ += 1;
                  if (__debug_loops__ > 100) {
                    console.error(INFINITE_LOOP_ERROR);
                    break;
                  }
                }
                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }
                var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                if (typeof fn === "function") {
                  state = fn({
                    state,
                    options: _options,
                    name,
                    instance
                  }) || state;
                }
              }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: debounce(function() {
              return new Promise(function(resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };
          if (!areValidElements(reference2, popper2)) {
            if (true) {
              console.error(INVALID_ELEMENT_ERROR);
            }
            return instance;
          }
          instance.setOptions(options).then(function(state2) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state2);
            }
          });
          function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
              var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
              if (typeof effect2 === "function") {
                var cleanupFn = effect2({
                  state,
                  name,
                  instance,
                  options: options2
                });
                var noopFn = function noopFn2() {
                };
                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }
          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
              return fn();
            });
            effectCleanupFns = [];
          }
          return instance;
        };
      }
      var passive = {
        passive: true
      };
      function effect$2(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window2 = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.addEventListener("resize", instance.update, passive);
        }
        return function() {
          if (scroll) {
            scrollParents.forEach(function(scrollParent) {
              scrollParent.removeEventListener("scroll", instance.update, passive);
            });
          }
          if (resize) {
            window2.removeEventListener("resize", instance.update, passive);
          }
        };
      }
      var eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {
        },
        effect: effect$2,
        data: {}
      };
      function popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        state.modifiersData[name] = computeOffsets({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: "absolute",
          placement: state.placement
        });
      }
      var popperOffsets$1 = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets,
        data: {}
      };
      var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function roundOffsetsByDPR(_ref) {
        var x = _ref.x, y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: round(x * dpr) / dpr || 0,
          y: round(y * dpr) / dpr || 0
        };
      }
      function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = top;
        var win = window;
        if (adaptive) {
          var offsetParent = getOffsetParent(popper2);
          var heightProp = "clientHeight";
          var widthProp = "clientWidth";
          if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
              heightProp = "scrollHeight";
              widthProp = "scrollWidth";
            }
          }
          offsetParent = offsetParent;
          if (placement === top || (placement === left || placement === right) && variation === end) {
            sideY = bottom;
            var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : (
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp]
            );
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }
          if (placement === left || (placement === top || placement === bottom) && variation === end) {
            sideX = right;
            var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : (
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp]
            );
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }
        var commonStyles = Object.assign({
          position
        }, adaptive && unsetSides);
        if (gpuAcceleration) {
          var _Object$assign;
          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref4) {
        var state = _ref4.state, options = _ref4.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        if (true) {
          var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
          if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
            return transitionProperty.indexOf(property) >= 0;
          })) {
            console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
          }
        }
        var commonStyles = {
          placement: getBasePlacement(state.placement),
          variation: getVariation(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration,
          isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive,
            roundOffsets
          })));
        }
        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets
          })));
        }
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-placement": state.placement
        });
      }
      var computeStyles$1 = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
      };
      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name];
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(name2) {
            var value = attributes[name2];
            if (value === false) {
              element.removeAttribute(name2);
            } else {
              element.setAttribute(name2, value === true ? "" : value);
            }
          });
        });
      }
      function effect$1(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
        return function() {
          Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce(function(style2, property) {
              style2[property] = "";
              return style2;
            }, {});
            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      }
      var applyStyles$1 = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: effect$1,
        requires: ["computeStyles"]
      };
      function distanceAndSkiddingToXY(placement, rects, offset2) {
        var basePlacement = getBasePlacement(placement);
        var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
          placement
        })) : offset2, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [left, right].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }
      function offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
        var data = placements.reduce(function(acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
          return acc;
        }, {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
      }
      var offset$1 = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: ["popperOffsets"],
        fn: offset
      };
      var hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash$1[matched];
        });
      }
      var hash = {
        start: "end",
        end: "start"
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function(matched) {
          return hash[matched];
        });
      }
      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
        var variation = getVariation(placement);
        var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
          return getVariation(placement2) === variation;
        }) : basePlacements;
        var allowedPlacements = placements$1.filter(function(placement2) {
          return allowedAutoPlacements.indexOf(placement2) >= 0;
        });
        if (allowedPlacements.length === 0) {
          allowedPlacements = placements$1;
          if (true) {
            console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
          }
        }
        var overflows = allowedPlacements.reduce(function(acc, placement2) {
          acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding
          })[getBasePlacement(placement2)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function(a, b) {
          return overflows[a] - overflows[b];
        });
      }
      function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) {
          return [];
        }
        var oppositePlacement = getOppositePlacement(placement);
        return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
      }
      function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) {
          return;
        }
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
          return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
          }) : placement2);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = /* @__PURE__ */ new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements2[0];
        for (var i = 0; i < placements2.length; i++) {
          var placement = placements2[i];
          var _basePlacement = getBasePlacement(placement);
          var isStartVariation = getVariation(placement) === start;
          var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
          var len = isVertical ? "width" : "height";
          var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = getOppositePlacement(mainVariationSide);
          }
          var altVariationSide = getOppositePlacement(mainVariationSide);
          var checks = [];
          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }
          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }
          if (checks.every(function(check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }
          checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
          var numberOfChecks = flipVariations ? 3 : 1;
          var _loop = function _loop2(_i2) {
            var fittingPlacement = placements2.find(function(placement2) {
              var checks2 = checksMap.get(placement2);
              if (checks2) {
                return checks2.slice(0, _i2).every(function(check) {
                  return check;
                });
              }
            });
            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };
          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break")
              break;
          }
        }
        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      }
      var flip$1 = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: ["offset"],
        data: {
          _skip: false
        }
      };
      function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      function withinMaxClamp(min2, value, max2) {
        var v = within(min2, value, max2);
        return v > max2 ? max2 : v;
      }
      function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
          boundary,
          rootBoundary,
          padding,
          altBoundary
        });
        var basePlacement = getBasePlacement(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
          x: 0,
          y: 0
        };
        if (!popperOffsets2) {
          return;
        }
        if (checkMainAxis) {
          var _offsetModifierState$;
          var mainSide = mainAxis === "y" ? top : left;
          var altSide = mainAxis === "y" ? bottom : right;
          var len = mainAxis === "y" ? "height" : "width";
          var offset2 = popperOffsets2[mainAxis];
          var min$1 = offset2 + overflow[mainSide];
          var max$1 = offset2 - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === start ? referenceRect[len] : popperRect[len];
          var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide];
          var arrowLen = within(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
          var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
          var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = offset2 + maxOffset - offsetModifierValue;
          var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _offsetModifierState$2;
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _len = altAxis === "y" ? "height" : "width";
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
          var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
          var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
          var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
          var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
      }
      var preventOverflow$1 = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: ["offset"]
      };
      var toPaddingObject = function toPaddingObject2(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [left, right].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets2) {
          return;
        }
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
        var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2;
        var min2 = paddingObject[minProp];
        var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset2 = within(min2, center, max2);
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
      }
      function effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) {
          return;
        }
        if (typeof arrowElement === "string") {
          arrowElement = state.elements.popper.querySelector(arrowElement);
          if (!arrowElement) {
            return;
          }
        }
        if (true) {
          if (!isHTMLElement(arrowElement)) {
            console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
          }
        }
        if (!contains(state.elements.popper, arrowElement)) {
          if (true) {
            console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
          }
          return;
        }
        state.elements.arrow = arrowElement;
      }
      var arrow$1 = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }
        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }
      function isAnySideFullyClipped(overflow) {
        return [top, right, bottom, left].some(function(side) {
          return overflow[side] >= 0;
        });
      }
      function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
          elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets,
          popperEscapeOffsets,
          isReferenceHidden,
          hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-reference-hidden": isReferenceHidden,
          "data-popper-escaped": hasPopperEscaped
        });
      }
      var hide$1 = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: hide
      };
      var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
      var createPopper$1 = /* @__PURE__ */ popperGenerator({
        defaultModifiers: defaultModifiers$1
      });
      var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
      var createPopper3 = /* @__PURE__ */ popperGenerator({
        defaultModifiers
      });
      exports.applyStyles = applyStyles$1;
      exports.arrow = arrow$1;
      exports.computeStyles = computeStyles$1;
      exports.createPopper = createPopper3;
      exports.createPopperLite = createPopper$1;
      exports.defaultModifiers = defaultModifiers;
      exports.detectOverflow = detectOverflow;
      exports.eventListeners = eventListeners;
      exports.flip = flip$1;
      exports.hide = hide$1;
      exports.offset = offset$1;
      exports.popperGenerator = popperGenerator;
      exports.popperOffsets = popperOffsets$1;
      exports.preventOverflow = preventOverflow$1;
    }
  });

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.17/dist/bigger-picture.umd.js
  var require_bigger_picture_umd = __commonJS({
    "ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.17/dist/bigger-picture.umd.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.BiggerPicture = factory());
      })(exports, function() {
        function noop2() {
        }
        const identity = (x) => x;
        function assign(tar, src) {
          for (const k in src)
            tar[k] = src[k];
          return tar;
        }
        function run(fn) {
          return fn();
        }
        function run_all(fns) {
          fns.forEach(run);
        }
        function is_function(thing) {
          return typeof thing === "function";
        }
        function not_equal(a, b) {
          return a != a ? b == b : a !== b;
        }
        function is_empty(obj) {
          return Object.keys(obj).length === 0;
        }
        function subscribe(store, ...callbacks) {
          if (store == null) {
            return noop2;
          }
          const unsub = store.subscribe(...callbacks);
          return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
        }
        function component_subscribe(component, store, callback) {
          component.$$.on_destroy.push(subscribe(store, callback));
        }
        function action_destroyer(action_result) {
          return action_result && is_function(action_result.destroy) ? action_result.destroy : noop2;
        }
        let now = () => globalThis.performance.now();
        let raf = (cb) => requestAnimationFrame(cb);
        const tasks = /* @__PURE__ */ new Set();
        function run_tasks(now2) {
          tasks.forEach((task) => {
            if (!task.c(now2)) {
              tasks.delete(task);
              task.f();
            }
          });
          if (tasks.size !== 0)
            raf(run_tasks);
        }
        function loop(callback) {
          let task;
          if (tasks.size === 0)
            raf(run_tasks);
          return {
            promise: new Promise((fulfill) => {
              tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
              tasks.delete(task);
            }
          };
        }
        function append(target, node) {
          target.appendChild(node);
        }
        function insert(target, node, anchor) {
          target.insertBefore(node, anchor || null);
        }
        function detach(node) {
          node.parentNode.removeChild(node);
        }
        function element(name) {
          return document.createElement(name);
        }
        function text(data) {
          return document.createTextNode(data);
        }
        function empty() {
          return text("");
        }
        function listen(node, event, handler, options) {
          node.addEventListener(event, handler, options);
          return () => node.removeEventListener(event, handler, options);
        }
        function attr(node, attribute, value) {
          if (value == null)
            node.removeAttribute(attribute);
          else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
        }
        function set_style(node, key, value, important) {
          if (value === null) {
            node.style.removeProperty(key);
          } else {
            node.style.setProperty(key, value);
          }
        }
        function toggle_class(element2, name, toggle) {
          element2.classList[toggle ? "add" : "remove"](name);
        }
        function custom_event(type, detail, bubbles = false) {
          const e = document.createEvent("CustomEvent");
          e.initCustomEvent(type, bubbles, false, detail);
          return e;
        }
        let stylesheet;
        let active = 0;
        let current_rules = {};
        function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
          const step = 16.666 / duration;
          let keyframes = "{\n";
          for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
          }
          const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
          const name = `_bp_${Math.round(Math.random() * 1e9)}_${uid}`;
          if (!current_rules[name]) {
            if (!stylesheet) {
              const style = element("style");
              document.head.appendChild(style);
              stylesheet = style.sheet;
            }
            current_rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
          }
          const animation = node.style.animation || "";
          node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
          active += 1;
          return name;
        }
        function delete_rule(node, name) {
          node.style.animation = (node.style.animation || "").split(", ").filter(
            name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("_bp") === -1
            // remove all Svelte animations
          ).join(", ");
          if (name && !--active)
            clear_rules();
        }
        function clear_rules() {
          raf(() => {
            if (active)
              return;
            let i = stylesheet.cssRules.length;
            while (i--)
              stylesheet.deleteRule(i);
            current_rules = {};
          });
        }
        let current_component;
        function set_current_component(component) {
          current_component = component;
        }
        const dirty_components = [];
        const binding_callbacks = [];
        const render_callbacks = [];
        const flush_callbacks = [];
        const resolved_promise = Promise.resolve();
        let update_scheduled = false;
        function schedule_update() {
          if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
          }
        }
        function add_render_callback(fn) {
          render_callbacks.push(fn);
        }
        const seen_callbacks = /* @__PURE__ */ new Set();
        let flushidx = 0;
        function flush() {
          const saved_component = current_component;
          do {
            while (flushidx < dirty_components.length) {
              const component = dirty_components[flushidx];
              flushidx++;
              set_current_component(component);
              update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
              binding_callbacks.pop()();
            for (let i = 0; i < render_callbacks.length; i += 1) {
              const callback = render_callbacks[i];
              if (!seen_callbacks.has(callback)) {
                seen_callbacks.add(callback);
                callback();
              }
            }
            render_callbacks.length = 0;
          } while (dirty_components.length);
          while (flush_callbacks.length) {
            flush_callbacks.pop()();
          }
          update_scheduled = false;
          seen_callbacks.clear();
          set_current_component(saved_component);
        }
        function update($$) {
          if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
          }
        }
        let promise;
        function wait() {
          if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
              promise = null;
            });
          }
          return promise;
        }
        function dispatch(node, direction, kind) {
          node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
        }
        const outroing = /* @__PURE__ */ new Set();
        let outros;
        function group_outros() {
          outros = {
            r: 0,
            c: [],
            p: outros
            // parent group
          };
        }
        function check_outros() {
          if (!outros.r) {
            run_all(outros.c);
          }
          outros = outros.p;
        }
        function transition_in(block, local) {
          if (block && block.i) {
            outroing.delete(block);
            block.i(local);
          }
        }
        function transition_out(block, local, detach2, callback) {
          if (block && block.o) {
            if (outroing.has(block))
              return;
            outroing.add(block);
            outros.c.push(() => {
              outroing.delete(block);
              if (callback) {
                if (detach2)
                  block.d(1);
                callback();
              }
            });
            block.o(local);
          }
        }
        const null_transition = { duration: 0 };
        function create_in_transition(node, fn, params) {
          let config = fn(node, params);
          let running = false;
          let animation_name;
          let task;
          let uid = 0;
          function cleanup() {
            if (animation_name)
              delete_rule(node, animation_name);
          }
          function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop2, css } = config || null_transition;
            if (css)
              animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
            tick(0, 1);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            if (task)
              task.abort();
            running = true;
            add_render_callback(() => dispatch(node, true, "start"));
            task = loop((now2) => {
              if (running) {
                if (now2 >= end_time) {
                  tick(1, 0);
                  dispatch(node, true, "end");
                  cleanup();
                  return running = false;
                }
                if (now2 >= start_time) {
                  const t = easing((now2 - start_time) / duration);
                  tick(t, 1 - t);
                }
              }
              return running;
            });
          }
          let started = false;
          return {
            start() {
              if (started)
                return;
              started = true;
              delete_rule(node);
              if (is_function(config)) {
                config = config();
                wait().then(go);
              } else {
                go();
              }
            },
            invalidate() {
              started = false;
            },
            end() {
              if (running) {
                cleanup();
                running = false;
              }
            }
          };
        }
        function create_out_transition(node, fn, params) {
          let config = fn(node, params);
          let running = true;
          let animation_name;
          const group = outros;
          group.r += 1;
          function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop2, css } = config || null_transition;
            if (css)
              animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            add_render_callback(() => dispatch(node, false, "start"));
            loop((now2) => {
              if (running) {
                if (now2 >= end_time) {
                  tick(0, 1);
                  dispatch(node, false, "end");
                  if (!--group.r) {
                    run_all(group.c);
                  }
                  return false;
                }
                if (now2 >= start_time) {
                  const t = easing((now2 - start_time) / duration);
                  tick(1 - t, t);
                }
              }
              return running;
            });
          }
          if (is_function(config)) {
            wait().then(() => {
              config = config();
              go();
            });
          } else {
            go();
          }
          return {
            end(reset) {
              if (reset && config.tick) {
                config.tick(1, 0);
              }
              if (running) {
                if (animation_name)
                  delete_rule(node, animation_name);
                running = false;
              }
            }
          };
        }
        function create_component(block) {
          block && block.c();
        }
        function mount_component(component, target, anchor, customElement) {
          const { fragment, on_mount, on_destroy, after_update } = component.$$;
          fragment && fragment.m(target, anchor);
          if (!customElement) {
            add_render_callback(() => {
              const new_on_destroy = on_mount.map(run).filter(is_function);
              if (on_destroy) {
                on_destroy.push(...new_on_destroy);
              } else {
                run_all(new_on_destroy);
              }
              component.$$.on_mount = [];
            });
          }
          after_update.forEach(add_render_callback);
        }
        function destroy_component(component, detaching) {
          const $$ = component.$$;
          if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
          }
        }
        function make_dirty(component, i) {
          if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
          }
          component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
        }
        function init(component, options, instance2, create_fragment2, not_equal2, props, append_styles, dirty = [-1]) {
          const parent_component = current_component;
          set_current_component(component);
          const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop2,
            not_equal: not_equal2,
            bound: {},
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: {},
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
          };
          append_styles && append_styles($$.root);
          let ready = false;
          $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal2($$.ctx[i], $$.ctx[i] = value)) {
              if (!$$.skip_bound && $$.bound[i])
                $$.bound[i](value);
              if (ready)
                make_dirty(component, i);
            }
            return ret;
          }) : [];
          $$.update();
          ready = true;
          run_all($$.before_update);
          $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
          if (options.target) {
            {
              $$.fragment && $$.fragment.c();
            }
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
          }
          set_current_component(parent_component);
        }
        class SvelteComponent {
          $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop2;
          }
          $on(type, callback) {
            const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
            callbacks.push(callback);
            return () => {
              const index = callbacks.indexOf(callback);
              if (index !== -1)
                callbacks.splice(index, 1);
            };
          }
          $set($$props) {
            if (this.$$set && !is_empty($$props)) {
              this.$$.skip_bound = true;
              this.$$set($$props);
              this.$$.skip_bound = false;
            }
          }
        }
        function cubicOut(t) {
          const f = t - 1;
          return f * f * f + 1;
        }
        function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
          const style = getComputedStyle(node);
          const target_opacity = +style.opacity;
          const transform = style.transform === "none" ? "" : style.transform;
          const od = target_opacity * (1 - opacity);
          return {
            delay,
            duration,
            easing,
            css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
          };
        }
        const subscriber_queue = [];
        function writable(value, start = noop2) {
          let stop;
          const subscribers = /* @__PURE__ */ new Set();
          function set(new_value) {
            if (not_equal(value, new_value)) {
              value = new_value;
              if (stop) {
                const run_queue = !subscriber_queue.length;
                for (const subscriber of subscribers) {
                  subscriber[1]();
                  subscriber_queue.push(subscriber, value);
                }
                if (run_queue) {
                  for (let i = 0; i < subscriber_queue.length; i += 2) {
                    subscriber_queue[i][0](subscriber_queue[i + 1]);
                  }
                  subscriber_queue.length = 0;
                }
              }
            }
          }
          function update2(fn) {
            set(fn(value));
          }
          function subscribe2(run2, invalidate = noop2) {
            const subscriber = [run2, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
              stop = start(set) || noop2;
            }
            run2(value);
            return () => {
              subscribers.delete(subscriber);
              if (subscribers.size === 0) {
                stop();
                stop = null;
              }
            };
          }
          return { set, update: update2, subscribe: subscribe2 };
        }
        function get_interpolator(a, b) {
          if (a === b || a !== a)
            return () => a;
          const type = typeof a;
          if (Array.isArray(a)) {
            const arr = b.map((bi, i) => {
              return get_interpolator(a[i], bi);
            });
            return (t) => arr.map((fn) => fn(t));
          }
          if (type === "number") {
            const delta = b - a;
            return (t) => a + t * delta;
          }
        }
        function tweened(value, defaults = {}) {
          const store = writable(value);
          let task;
          let target_value = value;
          function set(new_value, opts) {
            if (value == null) {
              store.set(value = new_value);
              return Promise.resolve();
            }
            target_value = new_value;
            let previous_task = task;
            let started = false;
            let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
            if (duration === 0) {
              if (previous_task) {
                previous_task.abort();
                previous_task = null;
              }
              store.set(value = target_value);
              return Promise.resolve();
            }
            const start = now() + delay;
            let fn;
            task = loop((now2) => {
              if (now2 < start)
                return true;
              if (!started) {
                fn = interpolate(value, new_value);
                if (typeof duration === "function")
                  duration = duration(value, new_value);
                started = true;
              }
              if (previous_task) {
                previous_task.abort();
                previous_task = null;
              }
              const elapsed = now2 - start;
              if (elapsed > duration) {
                store.set(value = new_value);
                return false;
              }
              store.set(value = fn(easing(elapsed / duration)));
              return true;
            });
            return task.promise;
          }
          return {
            set,
            update: (fn, opts) => set(fn(target_value, value), opts),
            subscribe: store.subscribe
          };
        }
        const closing = writable(0);
        const prefersReducedMotion = globalThis.matchMedia?.(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        const defaultTweenOptions = (duration) => ({
          easing: cubicOut,
          duration: prefersReducedMotion ? 0 : duration
        });
        const getThumbBackground = (activeItem) => !activeItem.thumb || `url(${activeItem.thumb})`;
        const addAttributes = (node, obj) => {
          if (!obj) {
            return;
          }
          if (typeof obj === "string") {
            obj = JSON.parse(obj);
          }
          for (const key in obj) {
            node.setAttribute(key, obj[key]);
          }
        };
        function create_if_block_1$2(ctx) {
          let div;
          let div_outro;
          let current;
          return {
            c() {
              div = element("div");
              div.innerHTML = `<span class="bp-bar"></span><span class="bp-o"></span>`;
              attr(div, "class", "bp-load");
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[0]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              if (dirty & /*activeItem*/
              1) {
                set_style(div, "background-image", getThumbBackground(
                  /*activeItem*/
                  ctx2[0]
                ));
              }
            },
            i(local) {
              if (current)
                return;
              if (div_outro)
                div_outro.end(1);
              current = true;
            },
            o(local) {
              if (local) {
                div_outro = create_out_transition(div, fly, { duration: 480 });
              }
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (detaching && div_outro)
                div_outro.end();
            }
          };
        }
        function create_if_block$2(ctx) {
          let div;
          let div_intro;
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-load");
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[0]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
            },
            p(ctx2, dirty) {
              if (dirty & /*activeItem*/
              1) {
                set_style(div, "background-image", getThumbBackground(
                  /*activeItem*/
                  ctx2[0]
                ));
              }
            },
            i(local) {
              if (!div_intro) {
                add_render_callback(() => {
                  div_intro = create_in_transition(div, fly, { duration: 480 });
                  div_intro.start();
                });
              }
            },
            o: noop2,
            d(detaching) {
              if (detaching)
                detach(div);
            }
          };
        }
        function create_fragment$4(ctx) {
          let if_block0_anchor;
          let if_block1_anchor;
          let if_block0 = !/*loaded*/
          ctx[1] && create_if_block_1$2(ctx);
          let if_block1 = (
            /*$closing*/
            ctx[2] && create_if_block$2(ctx)
          );
          return {
            c() {
              if (if_block0)
                if_block0.c();
              if_block0_anchor = empty();
              if (if_block1)
                if_block1.c();
              if_block1_anchor = empty();
            },
            m(target, anchor) {
              if (if_block0)
                if_block0.m(target, anchor);
              insert(target, if_block0_anchor, anchor);
              if (if_block1)
                if_block1.m(target, anchor);
              insert(target, if_block1_anchor, anchor);
            },
            p(ctx2, [dirty]) {
              if (!/*loaded*/
              ctx2[1]) {
                if (if_block0) {
                  if_block0.p(ctx2, dirty);
                  if (dirty & /*loaded*/
                  2) {
                    transition_in(if_block0, 1);
                  }
                } else {
                  if_block0 = create_if_block_1$2(ctx2);
                  if_block0.c();
                  transition_in(if_block0, 1);
                  if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
                }
              } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, () => {
                  if_block0 = null;
                });
                check_outros();
              }
              if (
                /*$closing*/
                ctx2[2]
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty & /*$closing*/
                  4) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block$2(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
              } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
              }
            },
            i(local) {
              transition_in(if_block0);
              transition_in(if_block1);
            },
            o(local) {
              transition_out(if_block0);
            },
            d(detaching) {
              if (if_block0)
                if_block0.d(detaching);
              if (detaching)
                detach(if_block0_anchor);
              if (if_block1)
                if_block1.d(detaching);
              if (detaching)
                detach(if_block1_anchor);
            }
          };
        }
        function instance$4($$self, $$props, $$invalidate) {
          let $closing;
          component_subscribe($$self, closing, ($$value) => $$invalidate(2, $closing = $$value));
          let { activeItem } = $$props;
          let { loaded } = $$props;
          $$self.$$set = ($$props2) => {
            if ("activeItem" in $$props2)
              $$invalidate(0, activeItem = $$props2.activeItem);
            if ("loaded" in $$props2)
              $$invalidate(1, loaded = $$props2.loaded);
          };
          return [activeItem, loaded, $closing];
        }
        class Loading extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$4, create_fragment$4, not_equal, { activeItem: 0, loaded: 1 });
          }
        }
        function create_if_block_1$1(ctx) {
          let img;
          let img_sizes_value;
          let img_outro;
          let current;
          let mounted;
          let dispose;
          return {
            c() {
              img = element("img");
              attr(img, "sizes", img_sizes_value = /*opts*/
              ctx[8].sizes || `${/*sizes*/
              ctx[1]}px`);
              attr(
                img,
                "alt",
                /*activeItem*/
                ctx[7].alt
              );
            },
            m(target, anchor) {
              insert(target, img, anchor);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*addSrc*/
                    ctx[21].call(null, img)
                  ),
                  listen(
                    img,
                    "error",
                    /*error_handler*/
                    ctx[27]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (!current || dirty[0] & /*sizes*/
              2 && img_sizes_value !== (img_sizes_value = /*opts*/
              ctx2[8].sizes || `${/*sizes*/
              ctx2[1]}px`)) {
                attr(img, "sizes", img_sizes_value);
              }
            },
            i(local) {
              if (current)
                return;
              if (img_outro)
                img_outro.end(1);
              current = true;
            },
            o(local) {
              img_outro = create_out_transition(img, fly, {});
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(img);
              if (detaching && img_outro)
                img_outro.end();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_if_block$1(ctx) {
          let loading;
          let current;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[7]
              ),
              loaded: (
                /*loaded*/
                ctx[2]
              )
            }
          });
          return {
            c() {
              create_component(loading.$$.fragment);
            },
            m(target, anchor) {
              mount_component(loading, target, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              const loading_changes = {};
              if (dirty[0] & /*loaded*/
              4)
                loading_changes.loaded = /*loaded*/
                ctx2[2];
              loading.$set(loading_changes);
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(loading, detaching);
            }
          };
        }
        function create_fragment$3(ctx) {
          let div1;
          let div0;
          let if_block0_anchor;
          let style_transform = `translate3d(${/*$imageDimensions*/
          ctx[0][0] / -2 + /*$zoomDragTranslate*/
          ctx[6][0]}px, ${/*$imageDimensions*/
          ctx[0][1] / -2 + /*$zoomDragTranslate*/
          ctx[6][1]}px, 0)`;
          let current;
          let mounted;
          let dispose;
          let if_block0 = (
            /*loaded*/
            ctx[2] && create_if_block_1$1(ctx)
          );
          let if_block1 = (
            /*showLoader*/
            ctx[3] && create_if_block$1(ctx)
          );
          return {
            c() {
              div1 = element("div");
              div0 = element("div");
              if (if_block0)
                if_block0.c();
              if_block0_anchor = empty();
              if (if_block1)
                if_block1.c();
              attr(div0, "class", "bp-img");
              set_style(
                div0,
                "width",
                /*$imageDimensions*/
                ctx[0][0] + "px"
              );
              set_style(
                div0,
                "height",
                /*$imageDimensions*/
                ctx[0][1] + "px"
              );
              toggle_class(
                div0,
                "bp-drag",
                /*pointerDown*/
                ctx[4]
              );
              toggle_class(
                div0,
                "bp-canzoom",
                /*maxZoom*/
                ctx[11] > 1 && /*$imageDimensions*/
                ctx[0][0] < /*naturalWidth*/
                ctx[12]
              );
              set_style(div0, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[7]
              ));
              set_style(div0, "transform", style_transform);
              attr(div1, "class", "bp-img-wrap");
              toggle_class(
                div1,
                "bp-close",
                /*closingWhileZoomed*/
                ctx[5]
              );
            },
            m(target, anchor) {
              insert(target, div1, anchor);
              append(div1, div0);
              if (if_block0)
                if_block0.m(div0, null);
              append(div0, if_block0_anchor);
              if (if_block1)
                if_block1.m(div0, null);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*onMount*/
                    ctx[20].call(null, div0)
                  ),
                  listen(
                    div1,
                    "wheel",
                    /*onWheel*/
                    ctx[15]
                  ),
                  listen(
                    div1,
                    "pointerdown",
                    /*onPointerDown*/
                    ctx[16]
                  ),
                  listen(
                    div1,
                    "pointermove",
                    /*onPointerMove*/
                    ctx[17]
                  ),
                  listen(
                    div1,
                    "pointerup",
                    /*onPointerUp*/
                    ctx[19]
                  ),
                  listen(
                    div1,
                    "pointercancel",
                    /*removeEventFromCache*/
                    ctx[18]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (
                /*loaded*/
                ctx2[2]
              ) {
                if (if_block0) {
                  if_block0.p(ctx2, dirty);
                  if (dirty[0] & /*loaded*/
                  4) {
                    transition_in(if_block0, 1);
                  }
                } else {
                  if_block0 = create_if_block_1$1(ctx2);
                  if_block0.c();
                  transition_in(if_block0, 1);
                  if_block0.m(div0, if_block0_anchor);
                }
              } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, () => {
                  if_block0 = null;
                });
                check_outros();
              }
              if (
                /*showLoader*/
                ctx2[3]
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty[0] & /*showLoader*/
                  8) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block$1(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(div0, null);
                }
              } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, () => {
                  if_block1 = null;
                });
                check_outros();
              }
              if (!current || dirty[0] & /*$imageDimensions*/
              1) {
                set_style(
                  div0,
                  "width",
                  /*$imageDimensions*/
                  ctx2[0][0] + "px"
                );
              }
              if (!current || dirty[0] & /*$imageDimensions*/
              1) {
                set_style(
                  div0,
                  "height",
                  /*$imageDimensions*/
                  ctx2[0][1] + "px"
                );
              }
              if (!current || dirty[0] & /*pointerDown*/
              16) {
                toggle_class(
                  div0,
                  "bp-drag",
                  /*pointerDown*/
                  ctx2[4]
                );
              }
              if (!current || dirty[0] & /*maxZoom, $imageDimensions, naturalWidth*/
              6145) {
                toggle_class(
                  div0,
                  "bp-canzoom",
                  /*maxZoom*/
                  ctx2[11] > 1 && /*$imageDimensions*/
                  ctx2[0][0] < /*naturalWidth*/
                  ctx2[12]
                );
              }
              if (dirty[0] & /*$imageDimensions, $zoomDragTranslate*/
              65 && style_transform !== (style_transform = `translate3d(${/*$imageDimensions*/
              ctx2[0][0] / -2 + /*$zoomDragTranslate*/
              ctx2[6][0]}px, ${/*$imageDimensions*/
              ctx2[0][1] / -2 + /*$zoomDragTranslate*/
              ctx2[6][1]}px, 0)`)) {
                set_style(div0, "transform", style_transform);
              }
              if (!current || dirty[0] & /*closingWhileZoomed*/
              32) {
                toggle_class(
                  div1,
                  "bp-close",
                  /*closingWhileZoomed*/
                  ctx2[5]
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block0);
              transition_in(if_block1);
              current = true;
            },
            o(local) {
              transition_out(if_block0);
              transition_out(if_block1);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div1);
              if (if_block0)
                if_block0.d();
              if (if_block1)
                if_block1.d();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function instance$3($$self, $$props, $$invalidate) {
          let $zoomed;
          let $zoomDragTranslate;
          let $closing;
          let $imageDimensions;
          component_subscribe($$self, closing, ($$value) => $$invalidate(26, $closing = $$value));
          let { props } = $$props;
          let { smallScreen } = $$props;
          let { activeItem, opts, prev, next, zoomed, container } = props;
          component_subscribe($$self, zoomed, (value) => $$invalidate(25, $zoomed = value));
          let maxZoom = activeItem.maxZoom || opts.maxZoom || 10;
          let calculatedDimensions = props.calculateDimensions(activeItem);
          let sizes = calculatedDimensions[0];
          let loaded, showLoader;
          let pinchDetails;
          let bpImg;
          let prevDiff = 0;
          let pointerDown, hasDragged;
          let dragStartX, dragStartY;
          let dragStartTranslateX, dragStartTranslateY;
          let closingWhileZoomed;
          const naturalWidth = +activeItem.width;
          const dragPositions = [];
          const pointerCache = /* @__PURE__ */ new Map();
          const imageDimensions = tweened(calculatedDimensions, defaultTweenOptions(400));
          component_subscribe($$self, imageDimensions, (value) => $$invalidate(0, $imageDimensions = value));
          const zoomDragTranslate = tweened([0, 0], defaultTweenOptions(400));
          component_subscribe($$self, zoomDragTranslate, (value) => $$invalidate(6, $zoomDragTranslate = value));
          const boundTranslateValues = ([x, y], newDimensions = $imageDimensions) => {
            const maxTranslateX = (newDimensions[0] - container.w) / 2;
            const maxTranslateY = (newDimensions[1] - container.h) / 2;
            if (maxTranslateX < 0) {
              x = 0;
            } else if (x > maxTranslateX) {
              if (smallScreen) {
                x = pointerDown ? maxTranslateX + (x - maxTranslateX) / 10 : maxTranslateX;
                if (x > maxTranslateX + 20) {
                  $$invalidate(4, pointerDown = prev());
                }
              } else {
                x = maxTranslateX;
              }
            } else if (x < -maxTranslateX) {
              if (smallScreen) {
                x = pointerDown ? -maxTranslateX - (-maxTranslateX - x) / 10 : -maxTranslateX;
                if (x < -maxTranslateX - 20) {
                  $$invalidate(4, pointerDown = next());
                }
              } else {
                x = -maxTranslateX;
              }
            }
            if (maxTranslateY < 0) {
              y = 0;
            } else if (y > maxTranslateY) {
              y = maxTranslateY;
            } else if (y < -maxTranslateY) {
              y = -maxTranslateY;
            }
            return [x, y];
          };
          function changeZoom(amt = maxZoom, e) {
            if ($closing) {
              return;
            }
            const maxWidth = calculatedDimensions[0] * maxZoom;
            let newWidth = $imageDimensions[0] + $imageDimensions[0] * amt;
            let newHeight = $imageDimensions[1] + $imageDimensions[1] * amt;
            if (amt > 0) {
              if (newWidth > maxWidth) {
                newWidth = maxWidth;
                newHeight = calculatedDimensions[1] * maxZoom;
              }
              if (newWidth > naturalWidth) {
                newWidth = naturalWidth;
                newHeight = +activeItem.height;
              }
            } else if (newWidth < calculatedDimensions[0]) {
              imageDimensions.set(calculatedDimensions);
              return zoomDragTranslate.set([0, 0]);
            }
            let { x, y, width, height } = bpImg.getBoundingClientRect();
            const offsetX = e ? e.clientX - x - width / 2 : 0;
            const offsetY = e ? e.clientY - y - height / 2 : 0;
            x = -offsetX * (newWidth / width) + offsetX;
            y = -offsetY * (newHeight / height) + offsetY;
            const newDimensions = [newWidth, newHeight];
            imageDimensions.set(newDimensions).then(() => {
              $$invalidate(1, sizes = Math.round(Math.max(sizes, newWidth)));
            });
            zoomDragTranslate.set(boundTranslateValues([$zoomDragTranslate[0] + x, $zoomDragTranslate[1] + y], newDimensions));
          }
          Object.defineProperty(activeItem, "zoom", {
            configurable: true,
            get: () => $zoomed,
            set: (bool) => changeZoom(bool ? maxZoom : -maxZoom)
          });
          const onWheel = (e) => {
            if (opts.inline && !$zoomed) {
              return;
            }
            e.preventDefault();
            changeZoom(e.deltaY / -300, e);
          };
          const onPointerDown = (e) => {
            if (e.button !== 2) {
              e.preventDefault();
              $$invalidate(4, pointerDown = true);
              pointerCache.set(e.pointerId, e);
              dragStartX = e.clientX;
              dragStartY = e.clientY;
              dragStartTranslateX = $zoomDragTranslate[0];
              dragStartTranslateY = $zoomDragTranslate[1];
            }
          };
          const onPointerMove = (e) => {
            if (pointerCache.size > 1) {
              $$invalidate(4, pointerDown = false);
              return opts.noPinch?.(container.el) || handlePinch(e);
            }
            if (!pointerDown) {
              return;
            }
            let x = e.clientX;
            let y = e.clientY;
            hasDragged = dragPositions.push({ x, y }) > 2;
            x = x - dragStartX;
            y = y - dragStartY;
            if (!$zoomed) {
              if (y < -90) {
                $$invalidate(4, pointerDown = !opts.noClose && props.close());
              }
              if (Math.abs(y) < 30) {
                if (x > 40) {
                  $$invalidate(4, pointerDown = prev());
                }
                if (x < -40) {
                  $$invalidate(4, pointerDown = next());
                }
              }
            }
            if ($zoomed && hasDragged && !$closing) {
              zoomDragTranslate.set(boundTranslateValues([dragStartTranslateX + x, dragStartTranslateY + y]), { duration: 0 });
            }
          };
          const handlePinch = (e) => {
            const [p1, p2] = pointerCache.set(e.pointerId, e).values();
            const dx = p1.clientX - p2.clientX;
            const dy = p1.clientY - p2.clientY;
            const curDiff = Math.hypot(dx, dy);
            pinchDetails = pinchDetails || {
              clientX: (p1.clientX + p2.clientX) / 2,
              clientY: (p1.clientY + p2.clientY) / 2
            };
            changeZoom(((prevDiff || curDiff) - curDiff) / -35, pinchDetails);
            prevDiff = curDiff;
          };
          const removeEventFromCache = (e) => pointerCache.delete(e.pointerId);
          function onPointerUp(e) {
            removeEventFromCache(e);
            if (pinchDetails) {
              $$invalidate(4, pointerDown = prevDiff = 0);
              pinchDetails = pointerCache.size ? pinchDetails : null;
            }
            if (!pointerDown) {
              return;
            }
            $$invalidate(4, pointerDown = false);
            if (e.target === this && !opts.noClose) {
              return props.close();
            }
            if (hasDragged) {
              const [posOne, posTwo, posThree] = dragPositions.slice(-3);
              const xDiff = posTwo.x - posThree.x;
              const yDiff = posTwo.y - posThree.y;
              if (Math.hypot(xDiff, yDiff) > 5) {
                zoomDragTranslate.set(boundTranslateValues([
                  $zoomDragTranslate[0] - (posOne.x - posThree.x) * 5,
                  $zoomDragTranslate[1] - (posOne.y - posThree.y) * 5
                ]));
              }
            } else if (!opts.onImageClick?.(container.el, activeItem)) {
              changeZoom($zoomed ? -maxZoom : maxZoom, e);
            }
            hasDragged = false;
            dragPositions.length = 0;
          }
          const onMount = (node) => {
            bpImg = node;
            props.setResizeFunc(() => {
              $$invalidate(24, calculatedDimensions = props.calculateDimensions(activeItem));
              if (opts.inline || !smallScreen) {
                imageDimensions.set(calculatedDimensions);
                zoomDragTranslate.set([0, 0]);
              }
            });
            props.loadImage(activeItem).then(() => {
              $$invalidate(2, loaded = true);
              props.preloadNext();
            });
            setTimeout(
              () => {
                $$invalidate(3, showLoader = !loaded);
              },
              250
            );
          };
          const addSrc = (node) => {
            addAttributes(node, activeItem.attr);
            node.srcset = activeItem.img;
          };
          const error_handler = (error) => opts.onError?.(container, activeItem, error);
          $$self.$$set = ($$props2) => {
            if ("smallScreen" in $$props2)
              $$invalidate(23, smallScreen = $$props2.smallScreen);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*$imageDimensions, calculatedDimensions*/
            16777217) {
              zoomed.set($imageDimensions[0] - 10 > calculatedDimensions[0]);
            }
            if ($$self.$$.dirty[0] & /*$closing, $zoomed, calculatedDimensions*/
            117440512) {
              if ($closing && $zoomed && !opts.intro) {
                const closeTweenOpts = defaultTweenOptions(480);
                zoomDragTranslate.set([0, 0], closeTweenOpts);
                imageDimensions.set(calculatedDimensions, closeTweenOpts);
                $$invalidate(5, closingWhileZoomed = true);
              }
            }
          };
          return [
            $imageDimensions,
            sizes,
            loaded,
            showLoader,
            pointerDown,
            closingWhileZoomed,
            $zoomDragTranslate,
            activeItem,
            opts,
            zoomed,
            container,
            maxZoom,
            naturalWidth,
            imageDimensions,
            zoomDragTranslate,
            onWheel,
            onPointerDown,
            onPointerMove,
            removeEventFromCache,
            onPointerUp,
            onMount,
            addSrc,
            props,
            smallScreen,
            calculatedDimensions,
            $zoomed,
            $closing,
            error_handler
          ];
        }
        class Image extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$3, create_fragment$3, not_equal, { props: 22, smallScreen: 23 }, null, [-1, -1]);
          }
        }
        function create_fragment$2(ctx) {
          let div;
          let iframe;
          let loading;
          let current;
          let mounted;
          let dispose;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[2]
              ),
              loaded: (
                /*loaded*/
                ctx[0]
              )
            }
          });
          return {
            c() {
              div = element("div");
              iframe = element("iframe");
              create_component(loading.$$.fragment);
              attr(iframe, "allow", "autoplay; fullscreen");
              attr(
                iframe,
                "title",
                /*activeItem*/
                ctx[2].title
              );
              attr(div, "class", "bp-if");
              set_style(
                div,
                "width",
                /*dimensions*/
                ctx[1][0] + "px"
              );
              set_style(
                div,
                "height",
                /*dimensions*/
                ctx[1][1] + "px"
              );
            },
            m(target, anchor) {
              insert(target, div, anchor);
              append(div, iframe);
              mount_component(loading, div, null);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*addSrc*/
                    ctx[3].call(null, iframe)
                  ),
                  listen(
                    iframe,
                    "load",
                    /*load_handler*/
                    ctx[5]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, [dirty]) {
              const loading_changes = {};
              if (dirty & /*loaded*/
              1)
                loading_changes.loaded = /*loaded*/
                ctx2[0];
              loading.$set(loading_changes);
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "width",
                  /*dimensions*/
                  ctx2[1][0] + "px"
                );
              }
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "height",
                  /*dimensions*/
                  ctx2[1][1] + "px"
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              destroy_component(loading);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function instance$2($$self, $$props, $$invalidate) {
          let { props } = $$props;
          let loaded, dimensions;
          const { activeItem } = props;
          const setDimensions = () => $$invalidate(1, dimensions = props.calculateDimensions(activeItem));
          setDimensions();
          props.setResizeFunc(setDimensions);
          const addSrc = (node) => {
            addAttributes(node, activeItem.attr);
            node.src = activeItem.iframe;
          };
          const load_handler = () => $$invalidate(0, loaded = true);
          return [loaded, dimensions, activeItem, addSrc, props, load_handler];
        }
        class Iframe extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$2, create_fragment$2, not_equal, { props: 4 });
          }
        }
        function create_fragment$1(ctx) {
          let div;
          let loading;
          let current;
          let mounted;
          let dispose;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[2]
              ),
              loaded: (
                /*loaded*/
                ctx[0]
              )
            }
          });
          return {
            c() {
              div = element("div");
              create_component(loading.$$.fragment);
              attr(div, "class", "bp-vid");
              set_style(
                div,
                "width",
                /*dimensions*/
                ctx[1][0] + "px"
              );
              set_style(
                div,
                "height",
                /*dimensions*/
                ctx[1][1] + "px"
              );
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[2]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
              mount_component(loading, div, null);
              current = true;
              if (!mounted) {
                dispose = action_destroyer(
                  /*onMount*/
                  ctx[3].call(null, div)
                );
                mounted = true;
              }
            },
            p(ctx2, [dirty]) {
              const loading_changes = {};
              if (dirty & /*loaded*/
              1)
                loading_changes.loaded = /*loaded*/
                ctx2[0];
              loading.$set(loading_changes);
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "width",
                  /*dimensions*/
                  ctx2[1][0] + "px"
                );
              }
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "height",
                  /*dimensions*/
                  ctx2[1][1] + "px"
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              destroy_component(loading);
              mounted = false;
              dispose();
            }
          };
        }
        function instance$1($$self, $$props, $$invalidate) {
          let { props } = $$props;
          let loaded, dimensions;
          const { activeItem, opts, container } = props;
          const setDimensions = () => $$invalidate(1, dimensions = props.calculateDimensions(activeItem));
          setDimensions();
          props.setResizeFunc(setDimensions);
          const onMount = (node) => {
            let mediaElement;
            const appendToVideo = (tag, arr) => {
              if (!Array.isArray(arr)) {
                arr = JSON.parse(arr);
              }
              for (const obj of arr) {
                if (!mediaElement) {
                  mediaElement = document.createElement(obj.type?.includes("audio") ? "audio" : "video");
                  addAttributes(mediaElement, {
                    controls: true,
                    autoplay: true,
                    playsinline: true,
                    tabindex: "0"
                  });
                  addAttributes(mediaElement, activeItem.attr);
                }
                const el = document.createElement(tag);
                addAttributes(el, obj);
                if (tag == "source") {
                  el.onError = (error) => opts.onError?.(container, activeItem, error);
                }
                mediaElement.append(el);
              }
            };
            appendToVideo("source", activeItem.sources);
            appendToVideo("track", activeItem.tracks || []);
            mediaElement.oncanplay = () => $$invalidate(0, loaded = true);
            node.append(mediaElement);
          };
          return [loaded, dimensions, activeItem, onMount, props];
        }
        class Video extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$1, create_fragment$1, not_equal, { props: 4 });
          }
        }
        function create_if_block(ctx) {
          let div2;
          let div0;
          let div0_outro;
          let previous_key = (
            /*activeItem*/
            ctx[6].i
          );
          let div1;
          let button;
          let div1_outro;
          let current;
          let mounted;
          let dispose;
          let key_block = create_key_block(ctx);
          let if_block = (
            /*items*/
            ctx[0].length > 1 && create_if_block_1(ctx)
          );
          return {
            c() {
              div2 = element("div");
              div0 = element("div");
              key_block.c();
              div1 = element("div");
              button = element("button");
              if (if_block)
                if_block.c();
              attr(button, "class", "bp-x");
              attr(button, "title", "Close");
              attr(button, "aria-label", "Close");
              attr(div1, "class", "bp-controls");
              attr(div2, "class", "bp-wrap");
              toggle_class(
                div2,
                "bp-zoomed",
                /*$zoomed*/
                ctx[10]
              );
              toggle_class(
                div2,
                "bp-inline",
                /*inline*/
                ctx[8]
              );
              toggle_class(
                div2,
                "bp-small",
                /*smallScreen*/
                ctx[7]
              );
              toggle_class(
                div2,
                "bp-noclose",
                /*opts*/
                ctx[5].noClose
              );
            },
            m(target, anchor) {
              insert(target, div2, anchor);
              append(div2, div0);
              key_block.m(div2, null);
              append(div2, div1);
              append(div1, button);
              if (if_block)
                if_block.m(div1, null);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    button,
                    "click",
                    /*close*/
                    ctx[1]
                  ),
                  action_destroyer(
                    /*containerActions*/
                    ctx[14].call(null, div2)
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*activeItem*/
              64 && not_equal(previous_key, previous_key = /*activeItem*/
              ctx2[6].i)) {
                group_outros();
                transition_out(key_block, 1, 1, noop2);
                check_outros();
                key_block = create_key_block(ctx2);
                key_block.c();
                transition_in(key_block, 1);
                key_block.m(div2, div1);
              } else {
                key_block.p(ctx2, dirty);
              }
              if (
                /*items*/
                ctx2[0].length > 1
              ) {
                if (if_block) {
                  if_block.p(ctx2, dirty);
                } else {
                  if_block = create_if_block_1(ctx2);
                  if_block.c();
                  if_block.m(div1, null);
                }
              } else if (if_block) {
                if_block.d(1);
                if_block = null;
              }
              if (!current || dirty[0] & /*$zoomed*/
              1024) {
                toggle_class(
                  div2,
                  "bp-zoomed",
                  /*$zoomed*/
                  ctx2[10]
                );
              }
              if (!current || dirty[0] & /*inline*/
              256) {
                toggle_class(
                  div2,
                  "bp-inline",
                  /*inline*/
                  ctx2[8]
                );
              }
              if (!current || dirty[0] & /*smallScreen*/
              128) {
                toggle_class(
                  div2,
                  "bp-small",
                  /*smallScreen*/
                  ctx2[7]
                );
              }
              if (!current || dirty[0] & /*opts*/
              32) {
                toggle_class(
                  div2,
                  "bp-noclose",
                  /*opts*/
                  ctx2[5].noClose
                );
              }
            },
            i(local) {
              if (current)
                return;
              if (div0_outro)
                div0_outro.end(1);
              transition_in(key_block);
              if (div1_outro)
                div1_outro.end(1);
              current = true;
            },
            o(local) {
              if (local) {
                div0_outro = create_out_transition(div0, fly, { duration: 480 });
              }
              transition_out(key_block);
              if (local) {
                div1_outro = create_out_transition(div1, fly, {});
              }
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div2);
              if (detaching && div0_outro)
                div0_outro.end();
              key_block.d(detaching);
              if (if_block)
                if_block.d();
              if (detaching && div1_outro)
                div1_outro.end();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_else_block(ctx) {
          let div;
          let raw_value = (
            /*activeItem*/
            (ctx[6].html ?? /*activeItem*/
            ctx[6].element.outerHTML) + ""
          );
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-html");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*activeItem*/
              64 && raw_value !== (raw_value = /*activeItem*/
              (ctx2[6].html ?? /*activeItem*/
              ctx2[6].element.outerHTML) + ""))
                div.innerHTML = raw_value;
            },
            i: noop2,
            o: noop2,
            d(detaching) {
              if (detaching)
                detach(div);
            }
          };
        }
        function create_if_block_5(ctx) {
          let iframe;
          let current;
          iframe = new Iframe({
            props: { props: (
              /*getChildProps*/
              ctx[13]()
            ) }
          });
          return {
            c() {
              create_component(iframe.$$.fragment);
            },
            m(target, anchor) {
              mount_component(iframe, target, anchor);
              current = true;
            },
            p: noop2,
            i(local) {
              if (current)
                return;
              transition_in(iframe.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(iframe.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(iframe, detaching);
            }
          };
        }
        function create_if_block_4(ctx) {
          let video;
          let current;
          video = new Video({
            props: { props: (
              /*getChildProps*/
              ctx[13]()
            ) }
          });
          return {
            c() {
              create_component(video.$$.fragment);
            },
            m(target, anchor) {
              mount_component(video, target, anchor);
              current = true;
            },
            p: noop2,
            i(local) {
              if (current)
                return;
              transition_in(video.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(video.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(video, detaching);
            }
          };
        }
        function create_if_block_3(ctx) {
          let imageitem;
          let current;
          imageitem = new Image({
            props: {
              props: (
                /*getChildProps*/
                ctx[13]()
              ),
              smallScreen: (
                /*smallScreen*/
                ctx[7]
              )
            }
          });
          return {
            c() {
              create_component(imageitem.$$.fragment);
            },
            m(target, anchor) {
              mount_component(imageitem, target, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              const imageitem_changes = {};
              if (dirty[0] & /*smallScreen*/
              128)
                imageitem_changes.smallScreen = /*smallScreen*/
                ctx2[7];
              imageitem.$set(imageitem_changes);
            },
            i(local) {
              if (current)
                return;
              transition_in(imageitem.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(imageitem.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(imageitem, detaching);
            }
          };
        }
        function create_if_block_2(ctx) {
          let div;
          let raw_value = (
            /*activeItem*/
            ctx[6].caption + ""
          );
          let div_outro;
          let current;
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-cap");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
              current = true;
            },
            p(ctx2, dirty) {
              if ((!current || dirty[0] & /*activeItem*/
              64) && raw_value !== (raw_value = /*activeItem*/
              ctx2[6].caption + ""))
                div.innerHTML = raw_value;
            },
            i(local) {
              if (current)
                return;
              if (div_outro)
                div_outro.end(1);
              current = true;
            },
            o(local) {
              div_outro = create_out_transition(div, fly, { duration: 200 });
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (detaching && div_outro)
                div_outro.end();
            }
          };
        }
        function create_key_block(ctx) {
          let div;
          let current_block_type_index;
          let if_block0;
          let div_intro;
          let div_outro;
          let if_block1_anchor;
          let current;
          let mounted;
          let dispose;
          const if_block_creators = [create_if_block_3, create_if_block_4, create_if_block_5, create_else_block];
          const if_blocks = [];
          function select_block_type(ctx2, dirty) {
            if (
              /*activeItem*/
              ctx2[6].img
            )
              return 0;
            if (
              /*activeItem*/
              ctx2[6].sources
            )
              return 1;
            if (
              /*activeItem*/
              ctx2[6].iframe
            )
              return 2;
            return 3;
          }
          current_block_type_index = select_block_type(ctx);
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          let if_block1 = (
            /*activeItem*/
            ctx[6].caption && create_if_block_2(ctx)
          );
          return {
            c() {
              div = element("div");
              if_block0.c();
              if (if_block1)
                if_block1.c();
              if_block1_anchor = empty();
              attr(div, "class", "bp-inner");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              if_blocks[current_block_type_index].m(div, null);
              if (if_block1)
                if_block1.m(target, anchor);
              insert(target, if_block1_anchor, anchor);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    div,
                    "pointerdown",
                    /*pointerdown_handler*/
                    ctx[20]
                  ),
                  listen(
                    div,
                    "pointerup",
                    /*pointerup_handler*/
                    ctx[21]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              let previous_block_index = current_block_type_index;
              current_block_type_index = select_block_type(ctx2);
              if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx2, dirty);
              } else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, () => {
                  if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block0 = if_blocks[current_block_type_index];
                if (!if_block0) {
                  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                  if_block0.c();
                } else {
                  if_block0.p(ctx2, dirty);
                }
                transition_in(if_block0, 1);
                if_block0.m(div, null);
              }
              if (
                /*activeItem*/
                ctx2[6].caption
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty[0] & /*activeItem*/
                  64) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block_2(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
              } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, () => {
                  if_block1 = null;
                });
                check_outros();
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block0);
              add_render_callback(() => {
                if (div_outro)
                  div_outro.end(1);
                div_intro = create_in_transition(
                  div,
                  /*mediaTransition*/
                  ctx[12],
                  true
                );
                div_intro.start();
              });
              transition_in(if_block1);
              current = true;
            },
            o(local) {
              transition_out(if_block0);
              if (div_intro)
                div_intro.invalidate();
              div_outro = create_out_transition(
                div,
                /*mediaTransition*/
                ctx[12],
                false
              );
              transition_out(if_block1);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if_blocks[current_block_type_index].d();
              if (detaching && div_outro)
                div_outro.end();
              if (if_block1)
                if_block1.d(detaching);
              if (detaching)
                detach(if_block1_anchor);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_if_block_1(ctx) {
          let div;
          let raw_value = `${/*position*/
          ctx[4] + 1} / ${/*items*/
          ctx[0].length}`;
          let button0;
          let button1;
          let mounted;
          let dispose;
          return {
            c() {
              div = element("div");
              button0 = element("button");
              button1 = element("button");
              attr(div, "class", "bp-count");
              attr(button0, "class", "bp-prev");
              attr(button0, "title", "Previous");
              attr(button0, "aria-label", "Previous");
              attr(button1, "class", "bp-next");
              attr(button1, "title", "Next");
              attr(button1, "aria-label", "Next");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
              insert(target, button0, anchor);
              insert(target, button1, anchor);
              if (!mounted) {
                dispose = [
                  listen(
                    button0,
                    "click",
                    /*prev*/
                    ctx[2]
                  ),
                  listen(
                    button1,
                    "click",
                    /*next*/
                    ctx[3]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*position, items*/
              17 && raw_value !== (raw_value = `${/*position*/
              ctx2[4] + 1} / ${/*items*/
              ctx2[0].length}`))
                div.innerHTML = raw_value;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (detaching)
                detach(button0);
              if (detaching)
                detach(button1);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_fragment(ctx) {
          let if_block_anchor;
          let current;
          let if_block = (
            /*items*/
            ctx[0] && create_if_block(ctx)
          );
          return {
            c() {
              if (if_block)
                if_block.c();
              if_block_anchor = empty();
            },
            m(target, anchor) {
              if (if_block)
                if_block.m(target, anchor);
              insert(target, if_block_anchor, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              if (
                /*items*/
                ctx2[0]
              ) {
                if (if_block) {
                  if_block.p(ctx2, dirty);
                  if (dirty[0] & /*items*/
                  1) {
                    transition_in(if_block, 1);
                  }
                } else {
                  if_block = create_if_block(ctx2);
                  if_block.c();
                  transition_in(if_block, 1);
                  if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
              } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, () => {
                  if_block = null;
                });
                check_outros();
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block);
              current = true;
            },
            o(local) {
              transition_out(if_block);
              current = false;
            },
            d(detaching) {
              if (if_block)
                if_block.d(detaching);
              if (detaching)
                detach(if_block_anchor);
            }
          };
        }
        function instance($$self, $$props, $$invalidate) {
          let $zoomed;
          let { items = void 0 } = $$props;
          let { target = void 0 } = $$props;
          const html = document.documentElement;
          let position;
          let opts;
          let isOpen;
          let focusTrigger;
          let smallScreen;
          let inline;
          let movement;
          let clickedEl;
          let activeItem;
          const activeItemIsHtml = () => !activeItem.img && !activeItem.sources && !activeItem.iframe;
          let resizeFunc;
          const setResizeFunc = (fn) => resizeFunc = fn;
          const container = {};
          const zoomed = writable(0);
          component_subscribe($$self, zoomed, (value) => $$invalidate(10, $zoomed = value));
          const open = (options) => {
            $$invalidate(5, opts = options);
            $$invalidate(8, inline = opts.inline);
            if (!inline && html.scrollHeight > html.clientHeight) {
              html.classList.add("bp-lock");
            }
            focusTrigger = document.activeElement;
            $$invalidate(19, container.w = target.offsetWidth, container);
            $$invalidate(
              19,
              container.h = target === document.body ? globalThis.innerHeight : target.clientHeight,
              container
            );
            $$invalidate(7, smallScreen = container.w < 769);
            $$invalidate(4, position = opts.position || 0);
            $$invalidate(0, items = []);
            for (let i = 0; i < (opts.items.length || 1); i++) {
              let item = opts.items[i] || opts.items;
              if ("dataset" in item) {
                items.push({ element: item, i, ...item.dataset });
              } else {
                item.i = i;
                items.push(item);
                item = item.element;
              }
              if (opts.el && opts.el === item) {
                $$invalidate(4, position = i);
              }
            }
          };
          const close = () => {
            opts.onClose?.(container.el, activeItem);
            closing.set(true);
            $$invalidate(0, items = null);
            focusTrigger?.focus({ preventScroll: true });
          };
          const prev = () => setPosition(position - 1);
          const next = () => setPosition(position + 1);
          const setPosition = (index) => {
            movement = index - position;
            $$invalidate(4, position = getNextPosition(index));
          };
          const getNextPosition = (index) => (index + items.length) % items.length;
          const onKeydown = (e) => {
            const { key, shiftKey } = e;
            if (key === "Escape") {
              !opts.noClose && close();
            } else if (key === "ArrowRight") {
              next();
            } else if (key === "ArrowLeft") {
              prev();
            } else if (key === "Tab") {
              const { activeElement } = document;
              if (shiftKey || !activeElement.controls) {
                e.preventDefault();
                const { focusWrap = container.el } = opts;
                const tabbable = [...focusWrap.querySelectorAll("*")].filter((node) => node.tabIndex >= 0);
                let index = tabbable.indexOf(activeElement);
                index += tabbable.length + (shiftKey ? -1 : 1);
                tabbable[index % tabbable.length].focus();
              }
            }
          };
          const calculateDimensions = ({ width = 1920, height = 1080 }) => {
            const { scale = 0.99 } = opts;
            const ratio = Math.min(1, container.w / width * scale, container.h / height * scale);
            return [Math.round(width * ratio), Math.round(height * ratio)];
          };
          const preloadNext = () => {
            if (items) {
              const nextItem = items[getNextPosition(position + 1)];
              const prevItem = items[getNextPosition(position - 1)];
              !nextItem.preload && loadImage(nextItem);
              !prevItem.preload && loadImage(prevItem);
            }
          };
          const loadImage = (item) => {
            if (item.img) {
              const image = document.createElement("img");
              image.sizes = opts.sizes || `${calculateDimensions(item)[0]}px`;
              image.srcset = item.img;
              item.preload = true;
              return image.decode().catch((error) => {
              });
            }
          };
          const mediaTransition = (node, isEntering) => {
            if (!isOpen || !items) {
              $$invalidate(18, isOpen = isEntering);
              return opts.intro ? fly(node, { y: isEntering ? 10 : -10 }) : scaleIn(node);
            }
            return fly(node, {
              x: (movement > 0 ? 20 : -20) * (isEntering ? 1 : -1),
              duration: 250
            });
          };
          const scaleIn = (node) => {
            let dimensions;
            if (activeItemIsHtml()) {
              const bpItem = node.firstChild.firstChild;
              dimensions = [bpItem.clientWidth, bpItem.clientHeight];
            } else {
              dimensions = calculateDimensions(activeItem);
            }
            const rect = (activeItem.element || focusTrigger).getBoundingClientRect();
            const leftOffset = rect.left - (container.w - rect.width) / 2;
            const centerTop = rect.top - (container.h - rect.height) / 2;
            const scaleWidth = rect.width / dimensions[0];
            const scaleHeight = rect.height / dimensions[1];
            return {
              duration: 480,
              easing: cubicOut,
              css: (t, u) => {
                return `transform:translate3d(${leftOffset * u}px, ${centerTop * u}px, 0) scale3d(${scaleWidth + t * (1 - scaleWidth)}, ${scaleHeight + t * (1 - scaleHeight)}, 1)`;
              }
            };
          };
          const getChildProps = () => ({
            activeItem,
            calculateDimensions,
            loadImage,
            preloadNext,
            opts,
            prev,
            next,
            close,
            setResizeFunc,
            zoomed,
            container
          });
          const containerActions = (node) => {
            $$invalidate(19, container.el = node, container);
            let roActive;
            opts.onOpen?.(container.el, activeItem);
            if (!inline) {
              globalThis.addEventListener("keydown", onKeydown);
            }
            const ro = new ResizeObserver((entries) => {
              if (roActive) {
                $$invalidate(19, container.w = entries[0].contentRect.width, container);
                $$invalidate(19, container.h = entries[0].contentRect.height, container);
                $$invalidate(7, smallScreen = container.w < 769);
                if (!activeItemIsHtml()) {
                  resizeFunc?.();
                }
                opts.onResize?.(container.el, activeItem);
              }
              roActive = true;
            });
            ro.observe(node);
            return {
              destroy() {
                ro.disconnect();
                globalThis.removeEventListener("keydown", onKeydown);
                closing.set(false);
                html.classList.remove("bp-lock");
                opts.onClosed?.();
              }
            };
          };
          const pointerdown_handler = (e) => $$invalidate(9, clickedEl = e.target);
          const pointerup_handler = function(e) {
            if (e.button !== 2 && e.target === this && clickedEl === this) {
              !opts.noClose && close();
            }
          };
          $$self.$$set = ($$props2) => {
            if ("items" in $$props2)
              $$invalidate(0, items = $$props2.items);
            if ("target" in $$props2)
              $$invalidate(15, target = $$props2.target);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*items, position, isOpen, opts, container, activeItem*/
            786545) {
              if (items) {
                $$invalidate(6, activeItem = items[position]);
                if (isOpen) {
                  opts.onUpdate?.(container.el, activeItem);
                }
              }
            }
          };
          return [
            items,
            close,
            prev,
            next,
            position,
            opts,
            activeItem,
            smallScreen,
            inline,
            clickedEl,
            $zoomed,
            zoomed,
            mediaTransition,
            getChildProps,
            containerActions,
            target,
            open,
            setPosition,
            isOpen,
            container,
            pointerdown_handler,
            pointerup_handler
          ];
        }
        class Bigger_picture extends SvelteComponent {
          constructor(options) {
            super();
            init(
              this,
              options,
              instance,
              create_fragment,
              not_equal,
              {
                items: 0,
                target: 15,
                open: 16,
                close: 1,
                prev: 2,
                next: 3,
                setPosition: 17
              },
              null,
              [-1, -1]
            );
          }
          get items() {
            return this.$$.ctx[0];
          }
          get target() {
            return this.$$.ctx[15];
          }
          get open() {
            return this.$$.ctx[16];
          }
          get close() {
            return this.$$.ctx[1];
          }
          get prev() {
            return this.$$.ctx[2];
          }
          get next() {
            return this.$$.ctx[3];
          }
          get setPosition() {
            return this.$$.ctx[17];
          }
        }
        function biggerPicture(options) {
          return new Bigger_picture({
            ...options,
            props: options
          });
        }
        return biggerPicture;
      });
    }
  });

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dropdown.js
  var Popper = __toESM(require_popper());

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/data.js
  var elementMap = /* @__PURE__ */ new Map();
  var data_default = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/index.js
  var MAX_UID = 1e6;
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getUID = (prefix) => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var findShadowRoot = (element) => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    if (typeof element.getRootNode === "function") {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/event-handler.js
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
  ]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, { delegateTarget: element });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let { target } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, { delegateTarget: target });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn2) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn2.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, { bubbles, cancelable: true }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  var event_handler_default = EventHandler;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/manipulator.js
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var manipulator_default = Manipulator;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/config.js
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? manipulator_default.getDataAttribute(element, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof jsonConfig === "object" ? jsonConfig : {},
        ...isElement(element) ? manipulator_default.getDataAttributes(element) : {},
        ...typeof config === "object" ? config : {}
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
          );
        }
      }
    }
  };
  var config_default = Config;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/base-component.js
  var VERSION = "5.3.3";
  var BaseComponent = class extends config_default {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      data_default.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      data_default.remove(this._element, this.constructor.DATA_KEY);
      event_handler_default.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return data_default.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var base_component_default = BaseComponent;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/selector-engine.js
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]'
      ].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var selector_engine_default = SelectorEngine;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dropdown.js
  var NAME = "dropdown";
  var DATA_KEY = "bs.dropdown";
  var EVENT_KEY = `.${DATA_KEY}`;
  var DATA_API_KEY = ".data-api";
  var ESCAPE_KEY = "Escape";
  var TAB_KEY = "Tab";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = selector_engine_default.next(this._element, SELECTOR_MENU)[0] || selector_engine_default.prev(this._element, SELECTOR_MENU)[0] || selector_engine_default.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW);
      this._element.classList.add(CLASS_NAME_SHOW);
      event_handler_default.trigger(this._element, EVENT_SHOWN, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW);
      this._element.classList.remove(CLASS_NAME_SHOW);
      this._element.setAttribute("aria-expanded", "false");
      manipulator_default.removeDataAttribute(this._menu, "popper");
      event_handler_default.trigger(this._element, EVENT_HIDDEN, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const { offset } = this._config;
      if (typeof offset === "string") {
        return offset.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset === "function") {
        return (popperData) => offset(popperData, this._element);
      }
      return offset;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }
        ]
      };
      if (this._inNavbar || this._config.display === "static") {
        manipulator_default.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _selectMenuItem({ key, target }) {
      const items = selector_engine_default.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY) {
        return;
      }
      const openToggles = selector_engine_default.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = { relatedTarget: context._element };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY;
      const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ? this : selector_engine_default.prev(this, SELECTOR_DATA_TOGGLE)[0] || selector_engine_default.next(this, SELECTOR_DATA_TOGGLE)[0] || selector_engine_default.findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/backdrop.js
  var NAME2 = "backdrop";
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_SHOW2 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME2}`;
  var Default2 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType2 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default2;
    }
    static get DefaultType() {
      return DefaultType2;
    }
    static get NAME() {
      return NAME2;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW2);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW2);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      event_handler_default.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      event_handler_default.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var backdrop_default = Backdrop;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/component-functions.js
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    event_handler_default.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = selector_engine_default.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/focustrap.js
  var NAME3 = "focustrap";
  var DATA_KEY2 = "bs.focustrap";
  var EVENT_KEY2 = `.${DATA_KEY2}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY2}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY2}`;
  var TAB_KEY2 = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default3 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType3 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default3;
    }
    static get DefaultType() {
      return DefaultType3;
    }
    static get NAME() {
      return NAME3;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      event_handler_default.off(document, EVENT_KEY2);
      event_handler_default.on(document, EVENT_FOCUSIN, (event) => this._handleFocusin(event));
      event_handler_default.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      event_handler_default.off(document, EVENT_KEY2);
    }
    // Private
    _handleFocusin(event) {
      const { trapElement } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = selector_engine_default.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY2) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var focustrap_default = FocusTrap;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/scrollbar.js
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        manipulator_default.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = manipulator_default.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        manipulator_default.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of selector_engine_default.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var scrollbar_default = ScrollBarHelper;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/offcanvas.js
  var NAME4 = "offcanvas";
  var DATA_KEY3 = "bs.offcanvas";
  var EVENT_KEY3 = `.${DATA_KEY3}`;
  var DATA_API_KEY2 = ".data-api";
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY3}${DATA_API_KEY2}`;
  var ESCAPE_KEY2 = "Escape";
  var CLASS_NAME_SHOW3 = "show";
  var CLASS_NAME_SHOWING = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW2 = `show${EVENT_KEY3}`;
  var EVENT_SHOWN2 = `shown${EVENT_KEY3}`;
  var EVENT_HIDE2 = `hide${EVENT_KEY3}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY3}`;
  var EVENT_HIDDEN2 = `hidden${EVENT_KEY3}`;
  var EVENT_RESIZE = `resize${EVENT_KEY3}`;
  var EVENT_CLICK_DATA_API2 = `click${EVENT_KEY3}${DATA_API_KEY2}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY3}`;
  var SELECTOR_DATA_TOGGLE2 = '[data-bs-toggle="offcanvas"]';
  var Default4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType4 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default4;
    }
    static get DefaultType() {
      return DefaultType4;
    }
    static get NAME() {
      return NAME4;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW2, { relatedTarget });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new scrollbar_default().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW3);
        this._element.classList.remove(CLASS_NAME_SHOWING);
        event_handler_default.trigger(this._element, EVENT_SHOWN2, { relatedTarget });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE2);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new scrollbar_default().reset();
        }
        event_handler_default.trigger(this._element, EVENT_HIDDEN2);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new backdrop_default({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new focustrap_default({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      event_handler_default.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY2) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API2, SELECTOR_DATA_TOGGLE2, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    event_handler_default.one(target, EVENT_HIDDEN2, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = selector_engine_default.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const selector of selector_engine_default.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  event_handler_default.on(window, EVENT_RESIZE, () => {
    for (const element of selector_engine_default.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/header@v0.14.6/assets/hb/modules/header/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const header2 = document.querySelector(".hb-header");
      const nav = header2.querySelector(".hb-header-nav");
      if (!header2) {
        return;
      }
      const activeMenu = (menu) => {
        menu.classList.add("active");
        menu.setAttribute("aria-current", "page");
        menu.parentElement?.classList.add("active");
        const parent = menu.closest(".hb-header-menu");
        parent?.classList.add("active");
        parent?.querySelector(".nav-link:first-child")?.classList.add("active");
      };
      const isMenuParent = (parent) => {
        const href = parent.getAttribute("href") ?? "";
        return window.location.href.indexOf(href) !== -1 || window.location.pathname.indexOf(href) !== -1;
      };
      const menus = nav.querySelectorAll(`a[href="${window.location.href}"], a[href="${window.location.pathname}"]`);
      if (menus.length > 0) {
        menus.forEach((menu) => {
          activeMenu(menu);
        });
      } else {
        let foundParent = false;
        const submenus = Array.from(document.querySelectorAll("a.hb-header-submenu"));
        for (let menu of submenus) {
          if (isMenuParent(menu)) {
            activeMenu(menu);
            foundParent = true;
            break;
          }
        }
        if (!foundParent) {
          for (let menu of Array.from(nav.querySelectorAll("a.nav-link"))) {
            if (isMenuParent(menu)) {
              activeMenu(menu);
              break;
            }
          }
        }
      }
      const shadow = () => {
        nav.classList.add("shadow-sm");
      };
      const removeShadow = () => {
        nav.classList.contains("shadow-sm") && nav.classList.remove("shadow-sm");
      };
      const show = () => {
        nav.style.removeProperty("opacity");
        nav.style.removeProperty("z-index");
      };
      const hide = () => {
        nav.style.opacity = "0";
        nav.style.zIndex = "0";
      };
      let h = 0;
      const threshold = 20;
      if (document.documentElement.scrollTop !== 0) {
        header2.classList.add("scrolling");
      }
      const isMobile = () => {
        return window.innerWidth < 576;
      };
      window.addEventListener("resize", () => {
        if (!isMobile()) {
          show();
        }
      });
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop === 0) {
          header2.classList.remove("scrolling");
          removeShadow();
        } else {
          header2.classList.add("scrolling");
          shadow();
        }
        if (isMobile() && Math.abs(document.documentElement.scrollTop - h) > threshold) {
          document.documentElement.scrollTop > h ? hide() : show();
          h = document.documentElement.scrollTop;
        }
      });
    });
  })();

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/gallery@v0.13.1/assets/hb/modules/gallery/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const loaded = (img) => {
        img.classList.remove("loading");
      };
      const images = document.querySelectorAll(".hb-gallery-album-items img");
      for (const img of images) {
        if (img.complete) {
          loaded(img);
        } else {
          img.addEventListener("load", () => {
            loaded(img);
          });
        }
      }
    });
  })();

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/tooltip.js
  var Popper2 = __toESM(require_popper());

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/sanitizer.js
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  var uriAttributes = /* @__PURE__ */ new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href"
  ]);
  var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  var allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }
    return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === "function") {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/template-factory.js
  var NAME5 = "TemplateFactory";
  var Default5 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  };
  var DefaultType5 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  };
  var DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  var TemplateFactory = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
      return Default5;
    }
    static get DefaultType() {
      return DefaultType5;
    }
    static get NAME() {
      return NAME5;
    }
    // Public
    getContent() {
      return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = { ...this._config.content, ...content };
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement("div");
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(" "));
      }
      return template;
    }
    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({ selector, entry: content }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = selector_engine_default.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = "";
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  };
  var template_factory_default = TemplateFactory;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/tooltip.js
  var NAME6 = "tooltip";
  var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  var CLASS_NAME_FADE2 = "fade";
  var CLASS_NAME_MODAL = "modal";
  var CLASS_NAME_SHOW4 = "show";
  var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
  var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  var EVENT_MODAL_HIDE = "hide.bs.modal";
  var TRIGGER_HOVER = "hover";
  var TRIGGER_FOCUS = "focus";
  var TRIGGER_CLICK = "click";
  var TRIGGER_MANUAL = "manual";
  var EVENT_HIDE3 = "hide";
  var EVENT_HIDDEN3 = "hidden";
  var EVENT_SHOW3 = "show";
  var EVENT_SHOWN3 = "shown";
  var EVENT_INSERTED = "inserted";
  var EVENT_CLICK = "click";
  var EVENT_FOCUSIN2 = "focusin";
  var EVENT_FOCUSOUT = "focusout";
  var EVENT_MOUSEENTER = "mouseenter";
  var EVENT_MOUSELEAVE = "mouseleave";
  var AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
  };
  var Default6 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: false,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  };
  var DefaultType6 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  var Tooltip = class _Tooltip extends base_component_default {
    constructor(element, config) {
      if (typeof Popper2 === "undefined") {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      }
      super(element, config);
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }
    // Getters
    static get Default() {
      return Default6;
    }
    static get DefaultType() {
      return DefaultType6;
    }
    static get NAME() {
      return NAME6;
    }
    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      this._activeTrigger.click = !this._activeTrigger.click;
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      event_handler_default.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute("data-bs-original-title")) {
        this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === "none") {
        throw new Error("Please use show on visible elements");
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_SHOW3));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
      const { container } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW4);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.on(element, "mouseover", noop);
        }
      }
      const complete = () => {
        event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_SHOWN3));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_HIDE3));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW4);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.off(element, "mouseover", noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null;
      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute("aria-describedby");
        event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN3));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }
    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE2, CLASS_NAME_SHOW4);
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute("id", tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new template_factory_default({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW4);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return Popper2.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const { offset } = this._config;
      if (typeof offset === "string") {
        return offset.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset === "function") {
        return (popperData) => offset(popperData, this._element);
      }
      return offset;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [
          {
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          },
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "arrow",
            options: {
              element: `.${this.constructor.NAME}-arrow`
            }
          },
          {
            name: "preSetPlacement",
            enabled: true,
            phase: "beforeMain",
            fn: (data) => {
              this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
            }
          }
        ]
      };
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _setListeners() {
      const triggers = this._config.trigger.split(" ");
      for (const trigger of triggers) {
        if (trigger === "click") {
          event_handler_default.on(this._element, this.constructor.eventName(EVENT_CLICK), this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN2);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT);
          event_handler_default.on(this._element, eventIn, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          event_handler_default.on(this._element, eventOut, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      event_handler_default.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute("title");
      if (!title) {
        return;
      }
      if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
        this._element.setAttribute("aria-label", title);
      }
      this._element.setAttribute("data-bs-original-title", title);
      this._element.removeAttribute("title");
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = manipulator_default.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...typeof config === "object" && config ? config : {}
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === "number") {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === "number") {
        config.title = config.title.toString();
      }
      if (typeof config.content === "number") {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = "manual";
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Tooltip);
  var tooltip_default = Tooltip;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/bs-tooltip@v0.1.1/assets/hb/modules/bs-tooltip/js/index.ts
  (() => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
      new tooltip_default(el);
    });
  })();

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/base@v0.6.1/assets/hb/modules/base/js/responsive-table.ts
  (() => {
    "use strict";
    document.querySelectorAll("table").forEach((table) => {
      const wrapper = document.createElement("div");
      wrapper.className = "table-responsive";
      wrapper.appendChild(table.cloneNode(true));
      table.parentNode?.replaceChild(wrapper, table);
    });
  })();

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/swipe.js
  var NAME7 = "swipe";
  var EVENT_KEY4 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY4}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY4}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY4}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY4}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY4}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default7 = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType7 = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends config_default {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default7;
    }
    static get DefaultType() {
      return DefaultType7;
    }
    static get NAME() {
      return NAME7;
    }
    // Public
    dispose() {
      event_handler_default.off(this._element, EVENT_KEY4);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        event_handler_default.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        event_handler_default.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        event_handler_default.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var swipe_default = Swipe;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/carousel.js
  var NAME8 = "carousel";
  var DATA_KEY4 = "bs.carousel";
  var EVENT_KEY5 = `.${DATA_KEY4}`;
  var DATA_API_KEY3 = ".data-api";
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY5}`;
  var EVENT_SLID = `slid${EVENT_KEY5}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY5}`;
  var EVENT_MOUSEENTER2 = `mouseenter${EVENT_KEY5}`;
  var EVENT_MOUSELEAVE2 = `mouseleave${EVENT_KEY5}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY5}`;
  var EVENT_LOAD_DATA_API2 = `load${EVENT_KEY5}${DATA_API_KEY3}`;
  var EVENT_CLICK_DATA_API3 = `click${EVENT_KEY5}${DATA_API_KEY3}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  var Default8 = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType8 = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = selector_engine_default.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default8;
    }
    static get DefaultType() {
      return DefaultType8;
    }
    static get NAME() {
      return NAME8;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        event_handler_default.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        event_handler_default.on(this._element, EVENT_MOUSEENTER2, () => this.pause());
        event_handler_default.on(this._element, EVENT_MOUSELEAVE2, () => this._maybeEnableCycle());
      }
      if (this._config.touch && swipe_default.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of selector_engine_default.find(SELECTOR_ITEM_IMG, this._element)) {
        event_handler_default.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new swipe_default(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = selector_engine_default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = selector_engine_default.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return event_handler_default.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE);
        activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return selector_engine_default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return selector_engine_default.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API3, SELECTOR_DATA_SLIDE, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (manipulator_default.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API2, () => {
    const carousels = selector_engine_default.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var carousel_default = Carousel;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/carousel@v0.2.6/assets/hb/modules/carousel/js/index.ts
  (() => {
    document.querySelectorAll(".carousel").forEach((el) => {
      new carousel_default(el);
    });
  })();

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/slide@v0.4.0/assets/hb/modules/slide/js/index.ts
  (() => {
    "use strict";
    let scrolling = false;
    const scroll = (element, dir) => {
      if (scrolling) {
        return;
      }
      scrolling = true;
      const inner = element.parentElement?.querySelector(".slide-inner");
      const step = inner.offsetWidth;
      let left = 0;
      if (dir === "left") {
        left = inner.scrollLeft - step;
      } else {
        left = Math.min(inner.scrollWidth - inner.clientWidth, inner.scrollLeft + step);
      }
      if (left <= 0) {
        scrolling = false;
        return;
      }
      inner.scroll({
        left
      });
      const checker = setInterval(() => {
        if (left === inner.scrollLeft) {
          scrolling = false;
          clearInterval(checker);
        }
      }, 50);
    };
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".slide-control-left").forEach((element) => {
        element.addEventListener("click", () => {
          scroll(element, "left");
        });
      });
      document.querySelectorAll(".slide-control-right").forEach((element) => {
        element.addEventListener("click", () => {
          scroll(element, "right");
        });
      });
      const els = document.querySelectorAll(".slide-inner");
      els.forEach((el) => {
        let startX = 0;
        el.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX;
        }, { passive: true });
        el.addEventListener("touchend", (e) => {
          scroll(el, e.changedTouches[0].clientX > startX ? "left" : "right");
        }, { passive: true });
      });
    });
  })();

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/giscus@v0.1.1/assets/mods/giscus/js/index.ts
  var Giscus = class {
    setTheme(theme) {
      const frames = document.querySelectorAll(
        "iframe.giscus-frame"
      );
      frames.forEach((frame) => {
        if (!frame.contentWindow) {
          return;
        }
        const endpoint = new URL(frame.src).origin;
        frame.contentWindow.postMessage(
          {
            giscus: {
              setConfig: {
                theme: `${endpoint}/themes/${theme}.css`
              }
            }
          },
          endpoint
        );
      });
    }
  };
  var js_default = Giscus;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/giscus@v0.1.1/assets/hb/modules/giscus/js/index.ts
  (() => {
    "use strict";
    const giscus = new js_default();
    const setTheme = (theme = "") => {
      if (theme === "") {
        const saved = localStorage.getItem("hb-theme");
        theme = !saved || saved === "auto" ? getPreferredTheme() : saved;
      }
      giscus.setTheme(theme);
    };
    const getPreferredTheme = () => {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    document.addEventListener("DOMContentLoaded", () => {
      document.body.addEventListener("giscus-load", () => {
        const frame = document.querySelector("iframe.giscus-frame.giscus-frame--loading");
        frame?.addEventListener("load", () => {
          setTheme();
        });
      });
      setTimeout(() => {
        setTheme();
      }, 2e3);
      document.addEventListener("hb:theme", (e) => {
        setTheme(e.detail.theme);
      });
    });
  })();

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/scrollspy.js
  var NAME9 = "scrollspy";
  var DATA_KEY5 = "bs.scrollspy";
  var EVENT_KEY6 = `.${DATA_KEY5}`;
  var DATA_API_KEY4 = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY6}`;
  var EVENT_CLICK2 = `click${EVENT_KEY6}`;
  var EVENT_LOAD_DATA_API3 = `load${EVENT_KEY6}${DATA_API_KEY4}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE2 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var Default9 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType9 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default9;
    }
    static get DefaultType() {
      return DefaultType9;
    }
    static get NAME() {
      return NAME9;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      event_handler_default.off(this._config.target, EVENT_CLICK2);
      event_handler_default.on(this._config.target, EVENT_CLICK2, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({ top: height, behavior: "smooth" });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = selector_engine_default.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = selector_engine_default.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE2);
      this._activateParents(target);
      event_handler_default.trigger(this._element, EVENT_ACTIVATE, { relatedTarget: target });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        selector_engine_default.findOne(SELECTOR_DROPDOWN_TOGGLE, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE2);
        return;
      }
      for (const listGroup of selector_engine_default.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of selector_engine_default.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE2);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE2);
      const activeNodes = selector_engine_default.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE2}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE2);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  event_handler_default.on(window, EVENT_LOAD_DATA_API3, () => {
    for (const spy of selector_engine_default.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/collapse.js
  var NAME10 = "collapse";
  var DATA_KEY6 = "bs.collapse";
  var EVENT_KEY7 = `.${DATA_KEY6}`;
  var DATA_API_KEY5 = ".data-api";
  var EVENT_SHOW4 = `show${EVENT_KEY7}`;
  var EVENT_SHOWN4 = `shown${EVENT_KEY7}`;
  var EVENT_HIDE4 = `hide${EVENT_KEY7}`;
  var EVENT_HIDDEN4 = `hidden${EVENT_KEY7}`;
  var EVENT_CLICK_DATA_API4 = `click${EVENT_KEY7}${DATA_API_KEY5}`;
  var CLASS_NAME_SHOW5 = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE3 = '[data-bs-toggle="collapse"]';
  var Default10 = {
    parent: null,
    toggle: true
  };
  var DefaultType10 = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = selector_engine_default.find(SELECTOR_DATA_TOGGLE3);
      for (const elem of toggleList) {
        const selector = selector_engine_default.getSelectorFromElement(elem);
        const filterElement = selector_engine_default.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default10;
    }
    static get DefaultType() {
      return DefaultType10;
    }
    static get NAME() {
      return NAME10;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, { toggle: false }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_SHOW4);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW5);
        this._element.style[dimension] = "";
        event_handler_default.trigger(this._element, EVENT_SHOWN4);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_HIDE4);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW5);
      for (const trigger of this._triggerArray) {
        const element = selector_engine_default.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        event_handler_default.trigger(this._element, EVENT_HIDDEN4);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW5);
    }
    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE3);
      for (const element of children) {
        const selected = selector_engine_default.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = selector_engine_default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return selector_engine_default.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API4, SELECTOR_DATA_TOGGLE3, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of selector_engine_default.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, { toggle: false }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/docs@v0.17.3/assets/hb/modules/docs/js/nav.ts
  (() => {
    const activeParent = (child) => {
      const parent = child.parentElement?.closest(".hb-docs-nav-links-group");
      if (parent == null) {
        return;
      }
      parent.querySelector(".collapse")?.classList.add("show");
      const heading = parent.querySelector(".hb-docs-nav-heading");
      heading.classList.add("active");
      heading.querySelector(".hb-docs-nav-item-toggle")?.setAttribute("aria-expanded", "true");
      activeParent(parent);
    };
    const active = (link2) => {
      link2.classList.add("active");
      activeParent(link2);
    };
    const link = document.querySelector(`.hb-docs-nav-links a[href="${location.pathname}"]`);
    if (link == null) {
      return;
    }
    active(link);
  })();

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/docs@v0.17.3/assets/hb/modules/docs/js/nav-toggle.ts
  (() => {
    const toggle = document.querySelector(".hb-docs-nav-toggle");
    const docs2 = document.querySelector(".hb-docs");
    if (!toggle || !docs2) {
      return;
    }
    const className = "sidebar-off";
    toggle.addEventListener("click", () => {
      if (docs2.classList.contains(className)) {
        docs2.classList.remove(className);
      } else {
        docs2.classList.add(className);
      }
    });
  })();

  // ns-params:@params
  var params_exports = {};
  __export(params_exports, {
    back_to_top: () => back_to_top,
    bigger_picture: () => bigger_picture,
    blog: () => blog,
    breadcrumb: () => breadcrumb,
    color: () => color,
    content_panel: () => content_panel,
    css_bundle_name: () => css_bundle_name,
    default: () => params_default,
    docs: () => docs,
    featured_image: () => featured_image,
    footer: () => footer,
    full_width: () => full_width,
    full_width_types: () => full_width_types,
    gallery: () => gallery,
    header: () => header,
    heading_sign: () => heading_sign,
    js_bundle_name: () => js_bundle_name,
    logo: () => logo,
    modules: () => modules,
    pagination: () => pagination,
    progress_bar: () => progress_bar,
    scrollbar: () => scrollbar,
    search: () => search,
    styles: () => styles,
    terms: () => terms
  });
  var back_to_top = { animation: true, icon_height: "2em", icon_name: "rocket", icon_width: "2em", position_bottom: "1rem", position_end: "1rem" };
  var bigger_picture = { play_interval: 5e3, scale: 2 };
  var blog = { archives: { paginate: 30 }, full_width: false, giscus: { category_id: "DIC_kwDOJP3qtM4CVavM", repo: "hbstack/theme", repo_id: "R_kgDOJP3qtA" }, home: { featured_posts: 5, main_sections: ["docs", "blog", { tutorials: "https://thetumultuousunicornofdarkness.github.io/CPU-X" }], pinned_posts_position: "" }, list_cols_lg: 3, list_cols_md: 2, list_style: "", paginate: 12, post_date_format: ":date_long", post_thumbnail: true, post_thumbnail_default: "images/thumbnail.png", post_thumbnail_height: "160px", post_thumbnail_placeholder: "HB THEME", post_thumbnail_position: "top", post_thumbnail_resize_height: 360, related_posts: { number: 10 }, sidebar: { max_width: "320px", position: "start", posts: { featured_count: 5, fill: true, list_style: "slide", recent_count: 5, style: "pills" }, profile: { avatar: "/images/logo.png", avatar_size: 100, company: "COMPANY", description: "", location: "Earth", socials: { github: "hbstack", mastodon: "https://techhub.social/@hbstack", rss: true }, title: "" }, sticky: true, taxonomies: { count: true, limit: 10, separate: false }, width: 0.35 }, toc: { position: "end" } };
  var breadcrumb = { disabled: false };
  var color = "light";
  var content_panel = { bottom: "20px", comments: true, repo: { branch: "main", repo: "hbstack/theme", service: "github" } };
  var css_bundle_name = "hb";
  var docs = { date_format: ":date_long", giscus: { category_id: "DIC_kwDOJP3qtM4CVavM", repo: "hbstack/theme", repo_id: "R_kgDOJP3qtA" } };
  var featured_image = { size: "x640" };
  var footer = { socials: { _color: true, github: "hbstack", mastodon: "https://techhub.social/@hbstack", rss: true, twitter: "razonyang" } };
  var full_width = false;
  var full_width_types = { docs: { enable: true } };
  var gallery = { date_sort_order: "desc", highlight_images_count: 10, highlight_images_recursive: false, paginate: 24, thumbnail_size: "x640" };
  var header = { banner: { navbar_opacity: 0.8, transparentize_navbar_bg: true }, brand: "Roran60 Blog", breakpoint: "lg", full_width: true, socials: { github: "hbstack", mastodon: "https://techhub.social/@hbstack", rss: true }, sticky: true, theme_toggle: { style: "switch" } };
  var heading_sign = { containers: { ".hb-blog-post-content": {}, ".hb-docs-doc-content": {} }, symbol: "\xA7" };
  var js_bundle_name = "hb";
  var logo = "/images/logo.png";
  var modules = { "code-block-panel": { js_resources: [{ partial: "code-block-panel/assets/js-resource" }] } };
  var pagination = { alignment: "center", siblings: 2, size: "" };
  var progress_bar = { height: "2px", initial_width: 20, interval: 50, time: 2 };
  var scrollbar = { corner_bg: "#909294", height: "12px", thumb_bg: "#909294", track_bg: "#f8f9fa", width: "12px" };
  var search = { modal: true };
  var styles = { hb_top_offset: "24px", prefix: "hb-" };
  var terms = { list_style: "", paginate: 12, profile: true, profile_metrics: true };
  var params_default = { back_to_top, bigger_picture, blog, breadcrumb, color, content_panel, css_bundle_name, docs, featured_image, footer, full_width, full_width_types, gallery, header, heading_sign, js_bundle_name, logo, modules, pagination, progress_bar, scrollbar, search, styles, terms };

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/heading-sign@v0.2.0/assets/hb/modules/heading-sign/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const containers = params_exports?.heading_sign?.containers;
      if (!containers) {
        return;
      }
      const symbol = params_exports?.heading_sign?.symbol ?? "\xA7";
      for (const selector in containers) {
        const container = document.querySelector(selector);
        if (!container) {
          continue;
        }
        container.querySelectorAll("h2, h3, h4, h5, h6").forEach((heading) => {
          const id = heading.getAttribute("id");
          if (!id) {
            return;
          }
          const anchor = document.createElement("a");
          anchor.className = "anchor ms-1";
          anchor.href = `#${id}`;
          anchor.innerText = symbol;
          heading.appendChild(anchor);
        });
      }
    });
  })();

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/tab.js
  var NAME11 = "tab";
  var DATA_KEY7 = "bs.tab";
  var EVENT_KEY8 = `.${DATA_KEY7}`;
  var EVENT_HIDE5 = `hide${EVENT_KEY8}`;
  var EVENT_HIDDEN5 = `hidden${EVENT_KEY8}`;
  var EVENT_SHOW5 = `show${EVENT_KEY8}`;
  var EVENT_SHOWN5 = `shown${EVENT_KEY8}`;
  var EVENT_CLICK_DATA_API5 = `click${EVENT_KEY8}`;
  var EVENT_KEYDOWN2 = `keydown${EVENT_KEY8}`;
  var EVENT_LOAD_DATA_API4 = `load${EVENT_KEY8}`;
  var ARROW_LEFT_KEY2 = "ArrowLeft";
  var ARROW_RIGHT_KEY2 = "ArrowRight";
  var ARROW_UP_KEY2 = "ArrowUp";
  var ARROW_DOWN_KEY2 = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE3 = "active";
  var CLASS_NAME_FADE3 = "fade";
  var CLASS_NAME_SHOW6 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE2 = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE2})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE4 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE4}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE3}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE3}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE3}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends base_component_default {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      event_handler_default.on(this._element, EVENT_KEYDOWN2, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME11;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? event_handler_default.trigger(active, EVENT_HIDE5, { relatedTarget: innerElem }) : null;
      const showEvent = event_handler_default.trigger(innerElem, EVENT_SHOW5, { relatedTarget: active });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE3);
      this._activate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW6);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        event_handler_default.trigger(element, EVENT_SHOWN5, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE3));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE3);
      element.blur();
      this._deactivate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW6);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        event_handler_default.trigger(element, EVENT_HIDDEN5, { relatedTarget: relatedElem });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE3));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY2, ARROW_RIGHT_KEY2, ARROW_UP_KEY2, ARROW_DOWN_KEY2, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY2, ARROW_DOWN_KEY2].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({ preventScroll: true });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return selector_engine_default.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = selector_engine_default.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = selector_engine_default.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE2, CLASS_NAME_ACTIVE3);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW6);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE3);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : selector_engine_default.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API5, SELECTOR_DATA_TOGGLE4, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API4, () => {
    for (const element of selector_engine_default.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.0/assets/hb/modules/progress-bar/js/progress.ts
  var Progress = class {
    ele;
    bar;
    width;
    interval;
    step;
    constructor() {
      this.width = params_exports?.progress_bar?.width ?? 20;
      this.interval = params_exports?.progress_bar?.interval ?? 50;
      const time = params_exports?.progress_bar?.time ?? 2;
      this.step = (100 - this.width) / time / 1e3 * this.interval;
      this.initBar();
      this.initProgress();
    }
    initProgress() {
      const progress = document.createElement("div");
      progress.className = "hb-progress progress position-fixed top-0 w-100 rounded-0 d-none";
      progress.role = "progressbar";
      progress.appendChild(this.bar);
      document.body.appendChild(progress);
      this.ele = progress;
    }
    initBar() {
      const bar = document.createElement("div");
      bar.className = "progress-bar progress-bar-striped progress-bar-animated";
      bar.style.width = this.width + "%";
      this.bar = bar;
    }
    show() {
      this.ele.classList.remove("d-none");
      setInterval(() => {
        this.width += this.step;
        this.bar.style.width = `${this.width}%`;
      }, this.interval);
    }
  };

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.0/assets/hb/modules/progress-bar/js/index.ts
  (() => {
    const progress = new Progress();
    window.addEventListener("beforeunload", () => {
      progress.show();
    });
  })();

  // <stdin>
  var import_bigger_picture_umd = __toESM(require_bigger_picture_umd());

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/bigger-picture@v0.10.1/assets/hb/modules/bigger-picture/js/panel.ts
  var Panel = class {
    constructor(bp, downloadIcon, shareIcon, rotateIcon, flipIcon, playIcon) {
      this.bp = bp;
      this.downloadIcon = downloadIcon;
      this.shareIcon = shareIcon;
      this.rotateIcon = rotateIcon;
      this.flipIcon = flipIcon;
      this.playIcon = playIcon;
    }
    init(container) {
      const p = document.createElement("div");
      p.classList.add("bp-panel", "d-flex", "position-absolute", "mx-auto", "start-0", "end-0", "text-center");
      p.appendChild(this.rotate(false));
      p.appendChild(this.rotate(true));
      p.appendChild(this.flip());
      p.appendChild(this.play());
      p.appendChild(this.download());
      p.appendChild(this.share());
      container.appendChild(p);
    }
    update(container, item) {
      const p = container.querySelector(".bp-panel");
      const d = p.querySelector(".bp-panel-download");
      d.href = item.img;
      d.download = item.alt;
    }
    imgWrap = () => {
      return document.querySelector(".bp-img-wrap");
    };
    rotate = (clockwise = false) => {
      const a = document.createElement("a");
      a.title = "Rotate";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-rotate", clockwise ? "bp-panel-rotate-clockwise" : "bp-panel-rotate-anticlockwise", "text-decoration-none", "p-2");
      a.innerHTML = this.rotateIcon;
      a.addEventListener("click", () => {
        const wrap = this.imgWrap();
        let value = parseInt(wrap.getAttribute("data-rotate") ?? "0");
        value += clockwise ? 90 : -90;
        wrap.setAttribute("data-rotate", value.toString());
        this.transform(wrap);
      });
      return a;
    };
    flip = () => {
      const a = document.createElement("a");
      a.title = "Flip";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-flip", "text-decoration-none", "p-2");
      a.innerHTML = this.flipIcon;
      a.addEventListener("click", () => {
        const wrap = this.imgWrap();
        if (wrap.hasAttribute("data-flip")) {
          wrap.removeAttribute("data-flip");
        } else {
          wrap.setAttribute("data-flip", "true");
        }
        this.transform(wrap);
      });
      return a;
    };
    transform = (wrap) => {
      const transform = [];
      const rotate = wrap.getAttribute("data-rotate");
      if (rotate) {
        transform.push(`rotate(${parseInt(rotate)}deg)`);
      }
      const flip = wrap.getAttribute("data-flip");
      if (flip) {
        transform.push("scaleX(-1)");
      }
      wrap.style.transform = transform.join(" ");
    };
    playJob = 0;
    playInterval = 1e3;
    play = () => {
      const a = document.createElement("a");
      a.title = "Play";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-play", "text-decoration-none", "p-2");
      a.innerHTML = this.playIcon;
      a.addEventListener("click", () => {
        if (this.playJob) {
          clearInterval(this.playJob);
          this.playJob = 0;
          a.classList.remove("active");
          return;
        }
        a.classList.add("active");
        this.playJob = setInterval(() => {
          this.bp.next();
        }, params_default.bigger_picture.play_interval ?? 5e3);
      });
      return a;
    };
    download = () => {
      const a = document.createElement("a");
      a.title = "Download";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-download", "text-decoration-none", "p-2");
      a.setAttribute("download", "");
      a.innerHTML = this.downloadIcon;
      return a;
    };
    twitterShareLink = () => {
      return `https://twitter.com/intent/tweet?url=${this.shareLink()}`;
    };
    facebookShareLink = () => {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.shareLink()}`;
    };
    shareLink = () => {
      return encodeURIComponent(window.location.href);
    };
    share = () => {
      const el = document.createElement("div");
      el.classList.add("bp-panel-action", "dropdown-center", "bp-panel-share", "p-2");
      el.innerHTML = `<a class="text-white" href="#" role="button" title="Share" data-bs-toggle="dropdown" aria-expanded="false">${this.shareIcon}</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" target="_blank" href="${this.twitterShareLink()}">Twitter</a></li>
            <li><a class="dropdown-item" target="_blank" href="${this.facebookShareLink()}">Facebook</a></li>
          </ul>`;
      return el;
    };
  };

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/back-to-top@v0.2.0/assets/hb/modules/back-to-top/js/button.ts
  var Button = class {
    btn;
    constructor(icon) {
      const btn = document.createElement("button");
      btn.className = "hb-back-to-top";
      btn.ariaLabel = "Back to top";
      btn.innerHTML = this.transformIcon(icon);
      document.body.appendChild(btn);
      this.btn = btn;
      let y = 0;
      window.addEventListener("scroll", () => {
        const top = document.documentElement.scrollTop;
        if (document.body.scrollTop > 20 || top > 20) {
          this.show();
        } else {
          this.hide();
        }
        if (this.animation() && top > y) {
          btn.classList.remove("scrolling");
        }
        y = top;
        this.updatePos();
      });
      this.btn.addEventListener("click", () => {
        this.animation() && btn.classList.add("scrolling");
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      });
    }
    transformIcon(icon) {
      return icon.replace(/<svg(.*)>((.|\n)*)<\/svg>/, `<svg$1>
  <defs><clipPath id="icon">$2</clipPath></defs>
  <rect x="0" y="0" fill="currentColor" width="100%" height="100%" clip-path="url(#icon)" />
  <rect x="0" y="100%" width="100%" height="100%" clip-path="url(#icon)" />
</svg>`);
    }
    posIcon;
    updatePos() {
      if (!this.posIcon) {
        this.posIcon = this.btn.querySelectorAll("rect")[1];
      }
      const pos = document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight);
      this.posIcon.setAttribute("y", (1 - pos) * 100 + "%");
    }
    show() {
      this.btn.classList.add("show");
    }
    hide() {
      this.btn.classList.remove("show");
    }
    animation() {
      return params_exports?.back_to_top?.animation !== false;
    }
  };

  // <stdin>
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const bp = (0, import_bigger_picture_umd.default)({
        target: document.body
      });
      const panel = new Panel(bp, `<svg aria-hidden="true" class="bi bi-download hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-share hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-arrow-clockwise hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-phone-flip hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0zM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11q.148 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169s0 .065-.13.187c-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883s-.535-.411-.882-.571M7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-play-circle hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>`);
      const onOpen = (container) => {
        panel.init(container);
      };
      const onUpdate = (container, item) => {
        panel.update(container, item);
      };
      const show = (imgs, pos) => {
        bp.open({
          items: imgs,
          intro: "fadeup",
          position: pos,
          onOpen,
          onUpdate
        });
      };
      const scale = parseInt("2");
      const data = (img) => {
        const alt = img.getAttribute("alt");
        let caption = alt;
        const captionEle = img.parentNode.querySelector("figcaption");
        if (captionEle !== null) {
          caption = captionEle.innerText;
        }
        return {
          img: img.getAttribute("data-src") ?? img.src,
          height: scale * (img.getAttribute("data-height") ?? img.naturalHeight),
          width: scale * (img.getAttribute("data-width") ?? img.naturalWidth),
          alt: img.getAttribute("alt"),
          caption,
          thumb: img.src
        };
      };
      const images = document.querySelectorAll("img");
      for (const img of images) {
        if (img.closest("a")) {
          continue;
        }
        img.addEventListener("click", () => {
          const imgs = [];
          let pos = 0;
          const set = img.closest(".bigger-pictures");
          if (set) {
            const els = set.querySelectorAll("img");
            for (let i = 0; i < els.length; i++) {
              if (els[i] === img) {
                pos = i;
              }
              imgs.push(data(els[i]));
            }
          } else {
            imgs.push(data(img));
          }
          show(imgs, pos);
        });
      }
      const links = Array.from(document.querySelectorAll(".img-link"));
      for (const link of links) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          show([{
            img: link.getAttribute("href"),
            alt: link.innerText,
            caption: link.innerText
          }], 0);
        });
      }
    });
  })();
  (() => {
    "use strict";
    window.addEventListener("DOMContentLoaded", () => {
      const btn = new Button(`<svg aria-hidden="true" class="bi bi-rocket hi-svg-inline hb-back-to-top-icon" fill="currentColor" height="2em" viewBox="0 0 16 16" width="2em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8"/>
  <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.5 3.5 0 0 0-.463-.315A2 2 0 0 0 8.25.064.55.55 0 0 0 8 0a.55.55 0 0 0-.266.073 2 2 0 0 0-.142.08 4 4 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635s1.7-.207 2.4-.635q.1.044.196.083c.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562zM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935zM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199M8.009 1.073q.096.06.226.163c.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13s-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32q.136-.113.236-.18Z"/>
  <path d="M9.479 14.361c-.48.093-.98.139-1.479.139s-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0z"/>
</svg>`);
    });
  })();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9nb2h1Z29pby9odWdvLW1vZC1qc2xpYnMtZGlzdC9wb3BwZXJqcy92MkB2Mi4yMTEwMC4yMDAwMC9wYWNrYWdlL2Rpc3QvY2pzL3BvcHBlci5qcyIsICJucy1odWdvOi9ob21lL3JvcmFuLy5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hlbnJ5Z2QvYmlnZ2VyLXBpY3R1cmVAdjEuMS4xNy9kaXN0L2JpZ2dlci1waWN0dXJlLnVtZC5qcyIsICJucy1odWdvOi9ob21lL3JvcmFuLy5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2Ryb3Bkb3duLmpzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvZG9tL2RhdGEuanMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy91dGlsL2luZGV4LmpzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9kb20vbWFuaXB1bGF0b3IuanMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy91dGlsL2NvbmZpZy5qcyIsICJucy1odWdvOi9ob21lL3JvcmFuLy5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvZG9tL3NlbGVjdG9yLWVuZ2luZS5qcyIsICJucy1odWdvOi9ob21lL3JvcmFuLy5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvYmFja2Ryb3AuanMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy91dGlsL2ZvY3VzdHJhcC5qcyIsICJucy1odWdvOi9ob21lL3JvcmFuLy5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvc2Nyb2xsYmFyLmpzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvb2ZmY2FudmFzLmpzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9oZWFkZXJAdjAuMTQuNi9hc3NldHMvaGIvbW9kdWxlcy9oZWFkZXIvanMvaW5kZXgudHMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2dhbGxlcnlAdjAuMTMuMS9hc3NldHMvaGIvbW9kdWxlcy9nYWxsZXJ5L2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvdG9vbHRpcC5qcyIsICJucy1odWdvOi9ob21lL3JvcmFuLy5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvc2FuaXRpemVyLmpzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvdXRpbC90ZW1wbGF0ZS1mYWN0b3J5LmpzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9icy10b29sdGlwQHYwLjEuMS9hc3NldHMvaGIvbW9kdWxlcy9icy10b29sdGlwL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9iYXNlQHYwLjYuMS9hc3NldHMvaGIvbW9kdWxlcy9iYXNlL2pzL3Jlc3BvbnNpdmUtdGFibGUudHMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy91dGlsL3N3aXBlLmpzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvY2Fyb3VzZWwuanMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2Nhcm91c2VsQHYwLjIuNi9hc3NldHMvaGIvbW9kdWxlcy9jYXJvdXNlbC9qcy9pbmRleC50cyIsICJucy1odWdvOi9ob21lL3JvcmFuLy5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svc2xpZGVAdjAuNC4wL2Fzc2V0cy9oYi9tb2R1bGVzL3NsaWRlL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaHVnb21vZHMvZ2lzY3VzQHYwLjEuMS9hc3NldHMvbW9kcy9naXNjdXMvanMvaW5kZXgudHMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2dpc2N1c0B2MC4xLjEvYXNzZXRzL2hiL21vZHVsZXMvZ2lzY3VzL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvY29sbGFwc2UuanMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2RvY3NAdjAuMTcuMy9hc3NldHMvaGIvbW9kdWxlcy9kb2NzL2pzL25hdi50cyIsICJucy1odWdvOi9ob21lL3JvcmFuLy5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svZG9jc0B2MC4xNy4zL2Fzc2V0cy9oYi9tb2R1bGVzL2RvY3MvanMvbmF2LXRvZ2dsZS50cyIsICJucy1wYXJhbXM6QHBhcmFtcyIsICJucy1odWdvOi9ob21lL3JvcmFuLy5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svaGVhZGluZy1zaWduQHYwLjIuMC9hc3NldHMvaGIvbW9kdWxlcy9oZWFkaW5nLXNpZ24vanMvaW5kZXgudHMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy90YWIuanMiLCAibnMtaHVnbzovaG9tZS9yb3Jhbi8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL3Byb2dyZXNzLWJhckB2MC4xLjAvYXNzZXRzL2hiL21vZHVsZXMvcHJvZ3Jlc3MtYmFyL2pzL3Byb2dyZXNzLnRzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9wcm9ncmVzcy1iYXJAdjAuMS4wL2Fzc2V0cy9oYi9tb2R1bGVzL3Byb2dyZXNzLWJhci9qcy9pbmRleC50cyIsICI8c3RkaW4+IiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9iaWdnZXItcGljdHVyZUB2MC4xMC4xL2Fzc2V0cy9oYi9tb2R1bGVzL2JpZ2dlci1waWN0dXJlL2pzL3BhbmVsLnRzIiwgIm5zLWh1Z286L2hvbWUvcm9yYW4vLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9iYWNrLXRvLXRvcEB2MC4yLjAvYXNzZXRzL2hiL21vZHVsZXMvYmFjay10by10b3AvanMvYnV0dG9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBwb3BwZXJqcy9jb3JlIHYyLjExLjAgLSBNSVQgTGljZW5zZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSAxO1xuICB2YXIgc2NhbGVZID0gMTtcblxuICBpZiAoaXNIVE1MRWxlbWVudChlbGVtZW50KSAmJiBpbmNsdWRlU2NhbGUpIHtcbiAgICB2YXIgb2Zmc2V0SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIG9mZnNldFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDsgLy8gRG8gbm90IGF0dGVtcHQgdG8gZGl2aWRlIGJ5IDAsIG90aGVyd2lzZSB3ZSBnZXQgYEluZmluaXR5YCBhcyBzY2FsZVxuICAgIC8vIEZhbGxiYWNrIHRvIDEgaW4gY2FzZSBib3RoIHZhbHVlcyBhcmUgYDBgXG5cbiAgICBpZiAob2Zmc2V0V2lkdGggPiAwKSB7XG4gICAgICBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIG9mZnNldFdpZHRoIHx8IDE7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldEhlaWdodCA+IDApIHtcbiAgICAgIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIG9mZnNldEhlaWdodCB8fCAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGggLyBzY2FsZVgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCAvIHNjYWxlWSxcbiAgICB0b3A6IHJlY3QudG9wIC8gc2NhbGVZLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0IC8gc2NhbGVYLFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20gLyBzY2FsZVksXG4gICAgbGVmdDogcmVjdC5sZWZ0IC8gc2NhbGVYLFxuICAgIHg6IHJlY3QubGVmdCAvIHNjYWxlWCxcbiAgICB5OiByZWN0LnRvcCAvIHNjYWxlWVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDE7XG4gIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn0gLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudElzU2NhbGVkKTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59XG5cbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5mdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufVxuXG5mdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn1cblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG4gIHZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgIT09IC0xO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn1cblxudmFyIHRvcCA9ICd0b3AnO1xudmFyIGJvdHRvbSA9ICdib3R0b20nO1xudmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbnZhciBsZWZ0ID0gJ2xlZnQnO1xudmFyIGF1dG8gPSAnYXV0byc7XG52YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbnZhciBzdGFydCA9ICdzdGFydCc7XG52YXIgZW5kID0gJ2VuZCc7XG52YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG52YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xudmFyIHBvcHBlciA9ICdwb3BwZXInO1xudmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xudmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbnZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbnZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xudmFyIHJlYWQgPSAncmVhZCc7XG52YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbnZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xudmFyIG1haW4gPSAnbWFpbic7XG52YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxudmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbnZhciB3cml0ZSA9ICd3cml0ZSc7XG52YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbnZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTtcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHBlbmRpbmc7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXQoc3RyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBbXS5jb25jYXQoYXJncykucmVkdWNlKGZ1bmN0aW9uIChwLCBjKSB7XG4gICAgcmV0dXJuIHAucmVwbGFjZSgvJXMvLCBjKTtcbiAgfSwgc3RyKTtcbn1cblxudmFyIElOVkFMSURfTU9ESUZJRVJfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcHJvdmlkZWQgYW4gaW52YWxpZCAlcyBwcm9wZXJ0eSwgZXhwZWN0ZWQgJXMgYnV0IGdvdCAlcyc7XG52YXIgTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHJlcXVpcmVzIFwiJXNcIiwgYnV0IFwiJXNcIiBtb2RpZmllciBpcyBub3QgYXZhaWxhYmxlJztcbnZhciBWQUxJRF9QUk9QRVJUSUVTID0gWyduYW1lJywgJ2VuYWJsZWQnLCAncGhhc2UnLCAnZm4nLCAnZWZmZWN0JywgJ3JlcXVpcmVzJywgJ29wdGlvbnMnXTtcbmZ1bmN0aW9uIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBbXS5jb25jYXQoT2JqZWN0LmtleXMobW9kaWZpZXIpLCBWQUxJRF9QUk9QRVJUSUVTKSAvLyBJRTExLWNvbXBhdGlibGUgcmVwbGFjZW1lbnQgZm9yIGBuZXcgU2V0KGl0ZXJhYmxlKWBcbiAgICAuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcbiAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgJ1wibmFtZVwiJywgJ1wic3RyaW5nXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5uYW1lKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZW5hYmxlZCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lbmFibGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVuYWJsZWRcIicsICdcImJvb2xlYW5cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmVuYWJsZWQpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdwaGFzZSc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyUGhhc2VzLmluZGV4T2YobW9kaWZpZXIucGhhc2UpIDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicGhhc2VcIicsIFwiZWl0aGVyIFwiICsgbW9kaWZpZXJQaGFzZXMuam9pbignLCAnKSwgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucGhhc2UpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmbic6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5mbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZm5cIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VmZmVjdCc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyLmVmZmVjdCAhPSBudWxsICYmIHR5cGVvZiBtb2RpZmllci5lZmZlY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVmZmVjdFwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXMnOlxuICAgICAgICAgIGlmIChtb2RpZmllci5yZXF1aXJlcyAhPSBudWxsICYmICFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlcykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzSWZFeGlzdHMnOlxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNJZkV4aXN0c1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvcHRpb25zJzpcbiAgICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUG9wcGVySlM6IGFuIGludmFsaWQgcHJvcGVydHkgaGFzIGJlZW4gcHJvdmlkZWQgdG8gdGhlIFxcXCJcIiArIG1vZGlmaWVyLm5hbWUgKyBcIlxcXCIgbW9kaWZpZXIsIHZhbGlkIHByb3BlcnRpZXMgYXJlIFwiICsgVkFMSURfUFJPUEVSVElFUy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlxcXCJcIiArIHMgKyBcIlxcXCJcIjtcbiAgICAgICAgICB9KS5qb2luKCcsICcpICsgXCI7IGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHByb3ZpZGVkLlwiKTtcbiAgICAgIH1cblxuICAgICAgbW9kaWZpZXIucmVxdWlyZXMgJiYgbW9kaWZpZXIucmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgICByZXR1cm4gbW9kLm5hbWUgPT09IHJlcXVpcmVtZW50O1xuICAgICAgICB9KSA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksIHJlcXVpcmVtZW50LCByZXF1aXJlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZUJ5KGFyciwgZm4pIHtcbiAgdmFyIGlkZW50aWZpZXJzID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gZm4oaXRlbSk7XG5cbiAgICBpZiAoIWlkZW50aWZpZXJzLmhhcyhpZGVudGlmaWVyKSkge1xuICAgICAgaWRlbnRpZmllcnMuYWRkKGlkZW50aWZpZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufVxuXG5mdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDsgLy8gTkI6IFRoaXMgaXNuJ3Qgc3VwcG9ydGVkIG9uIGlPUyA8PSAxMi4gSWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sIHRoZSBwb3BwZXJcbiAgLy8gY2FuIGJlIG9ic2N1cmVkIHVuZGVybmVhdGggaXQuXG4gIC8vIEFsc28sIGBodG1sLmNsaWVudEhlaWdodGAgYWRkcyB0aGUgYm90dG9tIGJhciBoZWlnaHQgaW4gU2FmYXJpIGlPUywgZXZlblxuICAvLyBpZiBpdCBpc24ndCBvcGVuLCBzbyBpZiB0aGlzIGlzbid0IGF2YWlsYWJsZSwgdGhlIHBvcHBlciB3aWxsIGJlIGRldGVjdGVkXG4gIC8vIHRvIG92ZXJmbG93IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0b28gZWFybHkuXG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7IC8vIFVzZXMgTGF5b3V0IFZpZXdwb3J0IChsaWtlIENocm9tZTsgU2FmYXJpIGRvZXMgbm90IGN1cnJlbnRseSlcbiAgICAvLyBJbiBDaHJvbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB2ZXJ5IGNsb3NlIHRvIDAgKCsvLSkgYnV0IGNvbnRhaW5zIHJvdW5kaW5nXG4gICAgLy8gZXJyb3JzIGR1ZSB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHByZWNpc2lvbi5cbiAgICAvLyBTYWZhcmkgcmV0dXJucyBhIG51bWJlciA8PSAwLCB1c3VhbGx5IDwgLTEgd2hlbiBwaW5jaC16b29tZWRcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmYWlscyBpbiBtb2JpbGUgZW11bGF0aW9uIG1vZGUgaW4gQ2hyb21lLlxuICAgIC8vIE1hdGguYWJzKHdpbi5pbm5lcldpZHRoIC8gdmlzdWFsVmlld3BvcnQuc2NhbGUgLSB2aXN1YWxWaWV3cG9ydC53aWR0aCkgPFxuICAgIC8vIDAuMDAxXG4gICAgLy8gRmFsbGJhY2sgaGVyZTogXCJOb3QgU2FmYXJpXCIgdXNlckFnZW50XG5cbiAgICBpZiAoIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59XG5cbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keScgJiYgKGNhbkVzY2FwZUNsaXBwaW5nID8gZ2V0Q29tcHV0ZWRTdHlsZShjbGlwcGluZ1BhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnIDogdHJ1ZSk7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn1cblxuZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbmZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn1cblxudmFyIElOVkFMSURfRUxFTUVOVF9FUlJPUiA9ICdQb3BwZXI6IEludmFsaWQgcmVmZXJlbmNlIG9yIHBvcHBlciBhcmd1bWVudCBwcm92aWRlZC4gVGhleSBtdXN0IGJlIGVpdGhlciBhIERPTSBlbGVtZW50IG9yIHZpcnR1YWwgZWxlbWVudC4nO1xudmFyIElORklOSVRFX0xPT1BfRVJST1IgPSAnUG9wcGVyOiBBbiBpbmZpbml0ZSBsb29wIGluIHRoZSBtb2RpZmllcnMgY3ljbGUgaGFzIGJlZW4gZGV0ZWN0ZWQhIFRoZSBjeWNsZSBoYXMgYmVlbiBpbnRlcnJ1cHRlZCB0byBwcmV2ZW50IGEgYnJvd3NlciBjcmFzaC4nO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHNldE9wdGlvbnNBY3Rpb24gPT09ICdmdW5jdGlvbicgPyBzZXRPcHRpb25zQWN0aW9uKHN0YXRlLm9wdGlvbnMpIDogc2V0T3B0aW9uc0FjdGlvbjtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG4gICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbW9kaWZpZXJzIGlzIGludmFsaWQgZm9yIGFueSByZWFzb25cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVycyA9IHVuaXF1ZUJ5KFtdLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycyksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycyk7XG5cbiAgICAgICAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5vcHRpb25zLnBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgICAgICAgIHZhciBmbGlwTW9kaWZpZXIgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjIubmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgPT09ICdmbGlwJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWZsaXBNb2RpZmllcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImF1dG9cIiBwbGFjZW1lbnRzIHJlcXVpcmUgdGhlIFwiZmxpcFwiIG1vZGlmaWVyIGJlJywgJ3ByZXNlbnQgYW5kIGVuYWJsZWQgdG8gd29yay4nXS5qb2luKCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocG9wcGVyKSxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luVG9wLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20sXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0OyAvLyBXZSBubyBsb25nZXIgdGFrZSBpbnRvIGFjY291bnQgYG1hcmdpbnNgIG9uIHRoZSBwb3BwZXIsIGFuZCBpdCBjYW5cbiAgICAgICAgICAvLyBjYXVzZSBidWdzIHdpdGggcG9zaXRpb25pbmcsIHNvIHdlJ2xsIHdhcm4gdGhlIGNvbnN1bWVyXG5cblxuICAgICAgICAgIGlmIChbbWFyZ2luVG9wLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0XS5zb21lKGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hcmdpbik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogQ1NTIFwibWFyZ2luXCIgc3R5bGVzIGNhbm5vdCBiZSB1c2VkIHRvIGFwcGx5IHBhZGRpbmcnLCAnYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgb3IgYm91bmRhcnkuJywgJ1RvIHJlcGxpY2F0ZSBtYXJnaW4sIHVzZSB0aGUgYG9mZnNldGAgbW9kaWZpZXIsIGFzIHdlbGwgYXMnLCAndGhlIGBwYWRkaW5nYCBvcHRpb24gaW4gdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIGFuZCBgZmxpcGAnLCAnbW9kaWZpZXJzLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSBcdTIwMTMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX19kZWJ1Z19sb29wc19fID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBfX2RlYnVnX2xvb3BzX18gKz0gMTtcblxuICAgICAgICAgICAgaWYgKF9fZGVidWdfbG9vcHNfXyA+IDEwMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKElORklOSVRFX0xPT1BfRVJST1IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUgXHUyMDEzIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QkMihfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGV2ZW50TGlzdGVuZXJzID0ge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0JDIsXG4gIGRhdGE6IHt9XG59O1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBwb3BwZXJPZmZzZXRzJDEgPSB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59O1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgd2luID0gd2luZG93O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZCh4ICogZHByKSAvIGRwciB8fCAwLFxuICAgIHk6IHJvdW5kKHkgKiBkcHIpIC8gZHByIHx8IDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICB2YXJpYXRpb24gPSBfcmVmMi52YXJpYXRpb24sXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzLFxuICAgICAgaXNGaXhlZCA9IF9yZWYyLmlzRml4ZWQ7XG5cbiAgdmFyIF9yZWYzID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIob2Zmc2V0cykgOiB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKG9mZnNldHMpIDogb2Zmc2V0cyxcbiAgICAgIF9yZWYzJHggPSBfcmVmMy54LFxuICAgICAgeCA9IF9yZWYzJHggPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR4LFxuICAgICAgX3JlZjMkeSA9IF9yZWYzLnksXG4gICAgICB5ID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHk7XG5cbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3AgfHwgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCBwbGFjZW1lbnQgPT09IHJpZ2h0KSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdO1xuICAgICAgeSAtPSBvZmZzZXRZIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICB2YXIgb2Zmc2V0WCA9IGlzRml4ZWQgJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcbiAgICAgIHggLT0gb2Zmc2V0WCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8PSAxID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAnJztcblxuICAgIGlmIChhZGFwdGl2ZSAmJiBbJ3RyYW5zZm9ybScsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5zb21lKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25Qcm9wZXJ0eS5pbmRleE9mKHByb3BlcnR5KSA+PSAwO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IERldGVjdGVkIENTUyB0cmFuc2l0aW9ucyBvbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZycsICdDU1MgcHJvcGVydGllczogXCJ0cmFuc2Zvcm1cIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIi4nLCAnXFxuXFxuJywgJ0Rpc2FibGUgdGhlIFwiY29tcHV0ZVN0eWxlc1wiIG1vZGlmaWVyXFwncyBgYWRhcHRpdmVgIG9wdGlvbiB0byBhbGxvdycsICdmb3Igc21vb3RoIHRyYW5zaXRpb25zLCBvciByZW1vdmUgdGhlc2UgcHJvcGVydGllcyBmcm9tIHRoZSBDU1MnLCAndHJhbnNpdGlvbiBkZWNsYXJhdGlvbiBvbiB0aGUgcG9wcGVyIGVsZW1lbnQgaWYgb25seSB0cmFuc2l0aW9uaW5nJywgJ29wYWNpdHkgb3IgYmFja2dyb3VuZC1jb2xvciBmb3IgZXhhbXBsZS4nLCAnXFxuXFxuJywgJ1dlIHJlY29tbWVuZCB1c2luZyB0aGUgcG9wcGVyIGVsZW1lbnQgYXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBpbm5lcicsICdlbGVtZW50IHRoYXQgY2FuIGhhdmUgYW55IENTUyBwcm9wZXJ0eSB0cmFuc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHZhcmlhdGlvbjogZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uLFxuICAgIGlzRml4ZWQ6IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCdcbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgY29tcHV0ZVN0eWxlcyQxID0ge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07XG5cbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdCQxKF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgYXBwbHlTdHlsZXMkMSA9IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBhcHBseVN0eWxlcyxcbiAgZWZmZWN0OiBlZmZlY3QkMSxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59O1xuXG5mdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIG9mZnNldCQxID0ge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59O1xuXG52YXIgaGFzaCQxID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2gkMVttYXRjaGVkXTtcbiAgfSk7XG59XG5cbnZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBwbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzJDEgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMS5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFRoZSBgYWxsb3dlZEF1dG9QbGFjZW1lbnRzYCBvcHRpb24gZGlkIG5vdCBhbGxvdyBhbnknLCAncGxhY2VtZW50cy4gRW5zdXJlIHRoZSBgcGxhY2VtZW50YCBvcHRpb24gbWF0Y2hlcyB0aGUgdmFyaWF0aW9uJywgJ29mIHRoZSBhbGxvd2VkIHBsYWNlbWVudHMuJywgJ0ZvciBleGFtcGxlLCBcImF1dG9cIiBjYW5ub3QgYmUgdXNlZCB0byBhbGxvdyBcImJvdHRvbS1zdGFydFwiLicsICdVc2UgXCJhdXRvLXN0YXJ0XCIgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIFx1MjAxMyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBmbGlwJDEgPSB7XG4gIG5hbWU6ICdmbGlwJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGZsaXAsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG4gIGRhdGE6IHtcbiAgICBfc2tpcDogZmFsc2VcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59XG5cbmZ1bmN0aW9uIHdpdGhpbihtaW4kMSwgdmFsdWUsIG1heCQxKSB7XG4gIHJldHVybiBtYXgobWluJDEsIG1pbih2YWx1ZSwgbWF4JDEpKTtcbn1cbmZ1bmN0aW9uIHdpdGhpbk1heENsYW1wKG1pbiwgdmFsdWUsIG1heCkge1xuICB2YXIgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xuICByZXR1cm4gdiA+IG1heCA/IG1heCA6IHY7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldFZhbHVlID09PSAnbnVtYmVyJyA/IHtcbiAgICBtYWluQXhpczogdGV0aGVyT2Zmc2V0VmFsdWUsXG4gICAgYWx0QXhpczogdGV0aGVyT2Zmc2V0VmFsdWVcbiAgfSA6IE9iamVjdC5hc3NpZ24oe1xuICAgIG1haW5BeGlzOiAwLFxuICAgIGFsdEF4aXM6IDBcbiAgfSwgdGV0aGVyT2Zmc2V0VmFsdWUpO1xuICB2YXIgb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XSA6IG51bGw7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcblxuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluJDEgPSBvZmZzZXQgKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCQxID0gb2Zmc2V0IC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJCA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbbWFpbkF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gb2Zmc2V0ICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gb2Zmc2V0ICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcbiAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1pbihtaW4kMSwgdGV0aGVyTWluKSA6IG1pbiQxLCBvZmZzZXQsIHRldGhlciA/IG1heChtYXgkMSwgdGV0aGVyTWF4KSA6IG1heCQxKTtcbiAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgfVxuXG4gIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkMjtcblxuICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgIHZhciBfbGVuID0gYWx0QXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgIHZhciBpc09yaWdpblNpZGUgPSBbdG9wLCBsZWZ0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVthbHRBeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJDIgOiAwO1xuXG4gICAgdmFyIF90ZXRoZXJNaW4gPSBpc09yaWdpblNpZGUgPyBfbWluIDogX29mZnNldCAtIHJlZmVyZW5jZVJlY3RbX2xlbl0gLSBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcztcblxuICAgIHZhciBfdGV0aGVyTWF4ID0gaXNPcmlnaW5TaWRlID8gX29mZnNldCArIHJlZmVyZW5jZVJlY3RbX2xlbl0gKyBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcyA6IF9tYXg7XG5cbiAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHRldGhlciAmJiBpc09yaWdpblNpZGUgPyB3aXRoaW5NYXhDbGFtcChfdGV0aGVyTWluLCBfb2Zmc2V0LCBfdGV0aGVyTWF4KSA6IHdpdGhpbih0ZXRoZXIgPyBfdGV0aGVyTWluIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gX3RldGhlck1heCA6IF9tYXgpO1xuXG4gICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgcHJldmVudE92ZXJmbG93JDEgPSB7XG4gIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogcHJldmVudE92ZXJmbG93LFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG59O1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIGVsZW1lbnQgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCAobm90IGFuIFNWR0VsZW1lbnQpLicsICdUbyB1c2UgYW4gU1ZHIGFycm93LCB3cmFwIGl0IGluIGFuIEhUTUxFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzJywgJ3RoZSBhcnJvdy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIG1vZGlmaWVyXFwncyBgZWxlbWVudGAgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBwb3BwZXInLCAnZWxlbWVudC4nXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGFycm93JDEgPSB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGhpZGUkMSA9IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTtcblxudmFyIGRlZmF1bHRNb2RpZmllcnMkMSA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDFdO1xudmFyIGNyZWF0ZVBvcHBlciQxID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnMkMVxufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxLCBvZmZzZXQkMSwgZmxpcCQxLCBwcmV2ZW50T3ZlcmZsb3ckMSwgYXJyb3ckMSwgaGlkZSQxXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0cy5hcHBseVN0eWxlcyA9IGFwcGx5U3R5bGVzJDE7XG5leHBvcnRzLmFycm93ID0gYXJyb3ckMTtcbmV4cG9ydHMuY29tcHV0ZVN0eWxlcyA9IGNvbXB1dGVTdHlsZXMkMTtcbmV4cG9ydHMuY3JlYXRlUG9wcGVyID0gY3JlYXRlUG9wcGVyO1xuZXhwb3J0cy5jcmVhdGVQb3BwZXJMaXRlID0gY3JlYXRlUG9wcGVyJDE7XG5leHBvcnRzLmRlZmF1bHRNb2RpZmllcnMgPSBkZWZhdWx0TW9kaWZpZXJzO1xuZXhwb3J0cy5kZXRlY3RPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93O1xuZXhwb3J0cy5ldmVudExpc3RlbmVycyA9IGV2ZW50TGlzdGVuZXJzO1xuZXhwb3J0cy5mbGlwID0gZmxpcCQxO1xuZXhwb3J0cy5oaWRlID0gaGlkZSQxO1xuZXhwb3J0cy5vZmZzZXQgPSBvZmZzZXQkMTtcbmV4cG9ydHMucG9wcGVyR2VuZXJhdG9yID0gcG9wcGVyR2VuZXJhdG9yO1xuZXhwb3J0cy5wb3BwZXJPZmZzZXRzID0gcG9wcGVyT2Zmc2V0cyQxO1xuZXhwb3J0cy5wcmV2ZW50T3ZlcmZsb3cgPSBwcmV2ZW50T3ZlcmZsb3ckMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvcHBlci5qcy5tYXBcbiIsICIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5CaWdnZXJQaWN0dXJlID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gbm9vcCgpIHsgfVxuICAgIGNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuICAgIGZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgICAgICB0YXJba10gPSBzcmNba107XG4gICAgICAgIHJldHVybiB0YXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJ1bihmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICAgICAgZm5zLmZvckVhY2gocnVuKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG4gICAgZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzX2VtcHR5KG9iaikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgICAgICByZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuICAgICAgICByZXR1cm4gYWN0aW9uX3Jlc3VsdCAmJiBpc19mdW5jdGlvbihhY3Rpb25fcmVzdWx0LmRlc3Ryb3kpID8gYWN0aW9uX3Jlc3VsdC5kZXN0cm95IDogbm9vcDtcbiAgICB9XG4gICAgbGV0IG5vdyA9ICgpID0+IGdsb2JhbFRoaXMucGVyZm9ybWFuY2Uubm93KClcbiAgICAgICAgO1xuICAgIGxldCByYWYgPSBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDtcblxuICAgIGNvbnN0IHRhc2tzID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIHJ1bl90YXNrcyhub3cpIHtcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICghdGFzay5jKG5vdykpIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICAgICAgdGFzay5mKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGFza3Muc2l6ZSAhPT0gMClcbiAgICAgICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHRhc2sgdGhhdCBydW5zIG9uIGVhY2ggcmFmIGZyYW1lXG4gICAgICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsb29wKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCB0YXNrO1xuICAgICAgICBpZiAodGFza3Muc2l6ZSA9PT0gMClcbiAgICAgICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvbWlzZTogbmV3IFByb21pc2UoZnVsZmlsbCA9PiB7XG4gICAgICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSB7IGM6IGNhbGxiYWNrLCBmOiBmdWxmaWxsIH0pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhYm9ydCgpIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRleHQoJycpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3RbdG9nZ2xlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIGJ1YmJsZXMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGZhbHNlLCBkZXRhaWwpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgbGV0IHN0eWxlc2hlZXQ7XG4gICAgbGV0IGFjdGl2ZSA9IDA7XG4gICAgbGV0IGN1cnJlbnRfcnVsZXMgPSB7fTtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuICAgIC8vIGZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgLy8gICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICAvLyAgICAgbGV0IGkgPSBzdHIubGVuZ3RoO1xuICAgIC8vICAgICB3aGlsZSAoaS0tKVxuICAgIC8vICAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgLy8gICAgIHJldHVybiBoYXNoID4+PiAwO1xuICAgIC8vIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICAgICAgbGV0IGtleWZyYW1lcyA9ICd7XFxuJztcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICAgICAga2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICAgICAgY29uc3QgbmFtZSA9IGBfYnBfJHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTkpfV8ke3VpZH1gO1xuICAgICAgICBpZiAoIWN1cnJlbnRfcnVsZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmICghc3R5bGVzaGVldCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0ID0gc3R5bGUuc2hlZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50X3J1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6IGBgfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgICAgICBhY3RpdmUgKz0gMTtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpXG4gICAgICAgICAgICAuc3BsaXQoJywgJylcbiAgICAgICAgICAgIC5maWx0ZXIobmFtZVxuICAgICAgICAgICAgPyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuICAgICAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX2JwJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICAgICAgKVxuICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgICAgIGlmIChuYW1lICYmICEtLWFjdGl2ZSlcbiAgICAgICAgICAgIGNsZWFyX3J1bGVzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuICAgICAgICByYWYoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBsZXQgaSA9IHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG4gICAgICAgICAgICBjdXJyZW50X3J1bGVzID0ge307XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBmdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbiAgICBjb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuICAgIGNvbnN0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbiAgICBjb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcbiAgICBjb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gICAgICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgICAgICAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gICAgLy8gZmx1c2goKSBjYWxscyBjYWxsYmFja3MgaW4gdGhpcyBvcmRlcjpcbiAgICAvLyAxLiBBbGwgYmVmb3JlVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuXG4gICAgLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuICAgIC8vIDMuIEFsbCBhZnRlclVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlbi4gRVhDRVBUXG4gICAgLy8gICAgZm9yIGFmdGVyVXBkYXRlcyBjYWxsZWQgZHVyaW5nIHRoZSBpbml0aWFsIG9uTW91bnQsIHdoaWNoIGFyZSBjYWxsZWQgaW5cbiAgICAvLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbiAgICAvLyBTaW5jZSBjYWxsYmFja3MgbWlnaHQgdXBkYXRlIGNvbXBvbmVudCB2YWx1ZXMsIHdoaWNoIGNvdWxkIHRyaWdnZXIgYW5vdGhlclxuICAgIC8vIGNhbGwgdG8gZmx1c2goKSwgdGhlIGZvbGxvd2luZyBzdGVwcyBndWFyZCBhZ2FpbnN0IHRoaXM6XG4gICAgLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuICAgIC8vICAgIGRpcnR5X2NvbXBvbmVudHMgYXJyYXkgYW5kIHdpbGwgY2F1c2UgYSByZWVudHJhbnQgY2FsbCB0byBmbHVzaCgpLiBCZWNhdXNlXG4gICAgLy8gICAgdGhlIGZsdXNoIGluZGV4IGlzIGtlcHQgb3V0c2lkZSB0aGUgZnVuY3Rpb24sIHRoZSByZWVudHJhbnQgY2FsbCB3aWxsIHBpY2tcbiAgICAvLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbiAgICAvLyAgICBjdXJyZW50X2NvbXBvbmVudCB2YWx1ZSBpcyBzYXZlZCBhbmQgcmVzdG9yZWQgc28gdGhhdCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbFxuICAgIC8vICAgIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgXCJwYXJlbnRcIiBmbHVzaCgpIGNhbGwuXG4gICAgLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbiAgICAvLyAzLiBEdXJpbmcgYWZ0ZXJVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBOT1QgaGF2ZSB0aGVpciBhZnRlclVwZGF0ZVxuICAgIC8vICAgIGNhbGxiYWNrIGNhbGxlZCBhIHNlY29uZCB0aW1lOyB0aGUgc2Vlbl9jYWxsYmFja3Mgc2V0LCBvdXRzaWRlIHRoZSBmbHVzaCgpXG4gICAgLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbiAgICBjb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbiAgICBsZXQgZmx1c2hpZHggPSAwOyAvLyBEbyAqbm90KiBtb3ZlIHRoaXMgaW5zaWRlIHRoZSBmbHVzaCgpIGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkX2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgICAgIHdoaWxlIChmbHVzaGlkeCA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICAgICAgZmx1c2hpZHgrKztcbiAgICAgICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGZsdXNoaWR4ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgICAgIC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuICAgICAgICAgICAgLy8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuICAgICAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcbiAgICAgICAgICAgICAgICAgICAgc2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgICAgIH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcbiAgICAgICAgd2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHNhdmVkX2NvbXBvbmVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgICAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcnR5ID0gJCQuZGlydHk7XG4gICAgICAgICAgICAkJC5kaXJ0eSA9IFstMV07XG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAgICAgJCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcHJvbWlzZTtcbiAgICBmdW5jdGlvbiB3YWl0KCkge1xuICAgICAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG4gICAgbGV0IG91dHJvcztcbiAgICBmdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG4gICAgICAgIG91dHJvcyA9IHtcbiAgICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgICBjOiBbXSxcbiAgICAgICAgICAgIHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuICAgICAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgICAgICBydW5fYWxsKG91dHJvcy5jKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRyb3MgPSBvdXRyb3MucDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcbiAgICAgICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICBibG9jay5pKGxvY2FsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgICAgIGlmIChvdXRyb2luZy5oYXMoYmxvY2spKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgICAgICBvdXRyb3MuYy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWNoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbiAgICBmdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgICAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgICAgIGxldCB0YXNrO1xuICAgICAgICBsZXQgdWlkID0gMDtcbiAgICAgICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MsIHVpZCsrKTtcbiAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICAgICAgdGFzay5hYm9ydCgpO1xuICAgICAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydGVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKGdvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludmFsaWRhdGUoKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgICAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBvdXRyb3M7XG4gICAgICAgIGdyb3VwLnIgKz0gMTtcbiAgICAgICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcbiAgICAgICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ncm91cC5yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKGdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKDEgLSB0LCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdvKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcudGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG4gICAgICAgIGJsb2NrICYmIGJsb2NrLmMoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IsIGN1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgeyBmcmFnbWVudCwgb25fbW91bnQsIG9uX2Rlc3Ryb3ksIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgICAgICBmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICAgICAgaWYgKCFjdXN0b21FbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICAgICAgb25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuICAgICAgICAgICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuICAgICAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICAgICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAgICAgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgICAgICAgICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuICAgICAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICQkLmN0eCA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG4gICAgICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgICAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5WyhpIC8gMzEpIHwgMF0gfD0gKDEgPDwgKGkgJSAzMSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgYXBwZW5kX3N0eWxlcywgZGlydHkgPSBbLTFdKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgICAgICBjdHg6IG51bGwsXG4gICAgICAgICAgICAvLyBzdGF0ZVxuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICB1cGRhdGU6IG5vb3AsXG4gICAgICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgICAgICBib3VuZDoge30sXG4gICAgICAgICAgICAvLyBsaWZlY3ljbGVcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICAgICAgb25fZGlzY29ubmVjdDogW10sXG4gICAgICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKG9wdGlvbnMuY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgIGNhbGxiYWNrczoge30sXG4gICAgICAgICAgICBkaXJ0eSxcbiAgICAgICAgICAgIHNraXBfYm91bmQ6IGZhbHNlLFxuICAgICAgICAgICAgcm9vdDogb3B0aW9ucy50YXJnZXQgfHwgcGFyZW50X2NvbXBvbmVudC4kJC5yb290XG4gICAgICAgIH07XG4gICAgICAgIGFwcGVuZF9zdHlsZXMgJiYgYXBwZW5kX3N0eWxlcygkJC5yb290KTtcbiAgICAgICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICQkLmN0eCA9IGluc3RhbmNlXG4gICAgICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuICAgICAgICAgICAgICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgJCQuY3R4W2ldID0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICQkLmJvdW5kW2ldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogW107XG4gICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICByZWFkeSA9IHRydWU7XG4gICAgICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgICAgIC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuICAgICAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yLCBvcHRpb25zLmN1c3RvbUVsZW1lbnQpO1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzLiBVc2VkIHdoZW4gZGV2PWZhbHNlLlxuICAgICAqL1xuICAgIGNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgICAgICRkZXN0cm95KCkge1xuICAgICAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gICAgICAgIGNvbnN0IGYgPSB0IC0gMS4wO1xuICAgICAgICByZXR1cm4gZiAqIGYgKiBmICsgMS4wO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZseShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0LCB4ID0gMCwgeSA9IDAsIG9wYWNpdHkgPSAwIH0gPSB7fSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsYXksXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZyxcbiAgICAgICAgICAgIGNzczogKHQsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgkeygxIC0gdCkgKiB4fXB4LCAkeygxIC0gdCkgKiB5fXB4KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1gXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gICAgICogQHBhcmFtIHsqPX12YWx1ZSBpbml0aWFsIHZhbHVlXG4gICAgICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHdyaXRhYmxlKHZhbHVlLCBzdGFydCA9IG5vb3ApIHtcbiAgICAgICAgbGV0IHN0b3A7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobm90X2VxdWFsKHZhbHVlLCBuZXdfdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnVuX3F1ZXVlID0gIXN1YnNjcmliZXJfcXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHN1YnNjcmliZXIgb2Ygc3Vic2NyaWJlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUucHVzaChzdWJzY3JpYmVyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZVtpXVswXShzdWJzY3JpYmVyX3F1ZXVlW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgICAgICBzZXQoZm4odmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuICAgICAgICAgICAgc3Vic2NyaWJlcnMuYWRkKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBzdG9wID0gc3RhcnQoc2V0KSB8fCBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcnMuZGVsZXRlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0X2ludGVycG9sYXRvcihhLCBiKSB7XG4gICAgICAgIGlmIChhID09PSBiIHx8IGEgIT09IGEpXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gYTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiBhO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICAgICAgY29uc3QgYXJyID0gYi5tYXAoKGJpLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldF9pbnRlcnBvbGF0b3IoYVtpXSwgYmkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdCA9PiBhcnIubWFwKGZuID0+IGZuKHQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gYiAtIGE7XG4gICAgICAgICAgICByZXR1cm4gdCA9PiBhICsgdCAqIGRlbHRhO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiB0d2VlbmVkKHZhbHVlLCBkZWZhdWx0cyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gd3JpdGFibGUodmFsdWUpO1xuICAgICAgICBsZXQgdGFzaztcbiAgICAgICAgbGV0IHRhcmdldF92YWx1ZSA9IHZhbHVlO1xuICAgICAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0X3ZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzX3Rhc2sgPSB0YXNrO1xuICAgICAgICAgICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGlkZW50aXR5LCBpbnRlcnBvbGF0ZSA9IGdldF9pbnRlcnBvbGF0b3IgfSA9IGFzc2lnbihhc3NpZ24oe30sIGRlZmF1bHRzKSwgb3B0cyk7XG4gICAgICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNfdGFzaykge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSB0YXJnZXRfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgIGxldCBmbjtcbiAgICAgICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA8IHN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm4gPSBpbnRlcnBvbGF0ZSh2YWx1ZSwgbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24odmFsdWUsIG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNfdGFzaykge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKGVsYXBzZWQgPiBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBmbihlYXNpbmcoZWxhcHNlZCAvIGR1cmF0aW9uKSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGFzay5wcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXQsXG4gICAgICAgICAgICB1cGRhdGU6IChmbiwgb3B0cykgPT4gc2V0KGZuKHRhcmdldF92YWx1ZSwgdmFsdWUpLCBvcHRzKSxcbiAgICAgICAgICAgIHN1YnNjcmliZTogc3RvcmUuc3Vic2NyaWJlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIHRydWUgaWYgZ2FsbGVyeSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBjbG9zaW5nICovXG4gICAgY29uc3QgY2xvc2luZyA9IHdyaXRhYmxlKDApO1xuXG4gICAgLyoqIHN0b3JlIGlmIHVzZXIgcHJlZmVycyByZWR1Y2VkIG1vdGlvbiAgKi9cbiAgICBjb25zdCBwcmVmZXJzUmVkdWNlZE1vdGlvbiA9IGdsb2JhbFRoaXMubWF0Y2hNZWRpYT8uKFxuICAgIFx0JyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJ1xuICAgICkubWF0Y2hlcztcblxuICAgIC8qKiBkZWZhdWx0IG9wdGlvbnMgZm9yIHR3ZWVucyAvIHRyYW5zaXRpb25zICovXG4gICAgY29uc3QgZGVmYXVsdFR3ZWVuT3B0aW9ucyA9IChkdXJhdGlvbikgPT4gKHtcbiAgICBcdGVhc2luZzogY3ViaWNPdXQsXG4gICAgXHRkdXJhdGlvbjogcHJlZmVyc1JlZHVjZWRNb3Rpb24gPyAwIDogZHVyYXRpb24sXG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRUaHVtYkJhY2tncm91bmQgPSAoYWN0aXZlSXRlbSkgPT5cbiAgICBcdCFhY3RpdmVJdGVtLnRodW1iIHx8IGB1cmwoJHthY3RpdmVJdGVtLnRodW1ifSlgO1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhdHRyaWJ1dGVzIHRvIHRoZSBnaXZlbiBub2RlIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIG5vZGUgdG8gd2hpY2ggYXR0cmlidXRlcyB3aWxsIGJlIGFkZGVkXG4gICAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuPiB8IHN0cmluZ30gb2JqIC0gVGhlIG9iamVjdCBjb250YWluaW5nIGtleS12YWx1ZSBwYWlycyBvZiBhdHRyaWJ1dGVzIHRvIGJlIGFkZGVkXG4gICAgICovXG4gICAgY29uc3QgYWRkQXR0cmlidXRlcyA9IChub2RlLCBvYmopID0+IHtcbiAgICBcdGlmICghb2JqKSB7XG4gICAgXHRcdHJldHVyblxuICAgIFx0fVxuICAgIFx0aWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgXHRcdG9iaiA9IEpTT04ucGFyc2Uob2JqKTtcbiAgICBcdH1cbiAgICBcdGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIFx0XHRub2RlLnNldEF0dHJpYnV0ZShrZXksIG9ialtrZXldKTtcbiAgICBcdH1cbiAgICB9O1xuXG4gICAgLyogc3JjL2NvbXBvbmVudHMvbG9hZGluZy5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My41NS4xICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMSQyKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCBkaXZfb3V0cm87XG4gICAgXHRsZXQgY3VycmVudDtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGRpdi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJicC1iYXJcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJicC1vXCI+PC9zcGFuPmA7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1sb2FkXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzBdKSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmIChkaXJ0eSAmIC8qYWN0aXZlSXRlbSovIDEpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzBdKSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHRpZiAoZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGxvY2FsKSB7XG4gICAgXHRcdFx0XHRkaXZfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oZGl2LCBmbHksIHsgZHVyYXRpb246IDQ4MCB9KTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBkaXZfb3V0cm8pIGRpdl9vdXRyby5lbmQoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMTE6NTcpIHsjaWYgJGNsb3Npbmd9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrJDIoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IGRpdl9pbnRybztcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtbG9hZFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgZ2V0VGh1bWJCYWNrZ3JvdW5kKC8qYWN0aXZlSXRlbSovIGN0eFswXSkpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoZGlydHkgJiAvKmFjdGl2ZUl0ZW0qLyAxKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgZ2V0VGh1bWJCYWNrZ3JvdW5kKC8qYWN0aXZlSXRlbSovIGN0eFswXSkpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmICghZGl2X2ludHJvKSB7XG4gICAgXHRcdFx0XHRhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICBcdFx0XHRcdFx0ZGl2X2ludHJvID0gY3JlYXRlX2luX3RyYW5zaXRpb24oZGl2LCBmbHksIHsgZHVyYXRpb246IDQ4MCB9KTtcbiAgICBcdFx0XHRcdFx0ZGl2X2ludHJvLnN0YXJ0KCk7XG4gICAgXHRcdFx0XHR9KTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdG86IG5vb3AsXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDQoY3R4KSB7XG4gICAgXHRsZXQgaWZfYmxvY2swX2FuY2hvcjtcbiAgICBcdGxldCBpZl9ibG9jazFfYW5jaG9yO1xuICAgIFx0bGV0IGlmX2Jsb2NrMCA9ICEvKmxvYWRlZCovIGN0eFsxXSAmJiBjcmVhdGVfaWZfYmxvY2tfMSQyKGN0eCk7XG4gICAgXHRsZXQgaWZfYmxvY2sxID0gLyokY2xvc2luZyovIGN0eFsyXSAmJiBjcmVhdGVfaWZfYmxvY2skMihjdHgpO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0aWZfYmxvY2swX2FuY2hvciA9IGVtcHR5KCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRpZl9ibG9jazFfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpZl9ibG9jazBfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpZl9ibG9jazFfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgW2RpcnR5XSkge1xuICAgIFx0XHRcdGlmICghLypsb2FkZWQqLyBjdHhbMV0pIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jazApIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5ICYgLypsb2FkZWQqLyAyKSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAgPSBjcmVhdGVfaWZfYmxvY2tfMSQyKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLm0oaWZfYmxvY2swX2FuY2hvci5wYXJlbnROb2RlLCBpZl9ibG9jazBfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMCkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICgvKiRjbG9zaW5nKi8gY3R4WzJdKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2sxKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5wKGN0eCwgZGlydHkpO1xuXG4gICAgXHRcdFx0XHRcdGlmIChkaXJ0eSAmIC8qJGNsb3NpbmcqLyA0KSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBjcmVhdGVfaWZfYmxvY2skMihjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5tKGlmX2Jsb2NrMV9hbmNob3IucGFyZW50Tm9kZSwgaWZfYmxvY2sxX2FuY2hvcik7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrMS5kKDEpO1xuICAgIFx0XHRcdFx0aWZfYmxvY2sxID0gbnVsbDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCk7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChpZl9ibG9jazBfYW5jaG9yKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChpZl9ibG9jazFfYW5jaG9yKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZSQ0KCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgJGNsb3Npbmc7XG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgY2xvc2luZywgJCR2YWx1ZSA9PiAkJGludmFsaWRhdGUoMiwgJGNsb3NpbmcgPSAkJHZhbHVlKSk7XG4gICAgXHRsZXQgeyBhY3RpdmVJdGVtIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IHsgbG9hZGVkIH0gPSAkJHByb3BzO1xuXG4gICAgXHQkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBcdFx0aWYgKCdhY3RpdmVJdGVtJyBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgYWN0aXZlSXRlbSA9ICQkcHJvcHMuYWN0aXZlSXRlbSk7XG4gICAgXHRcdGlmICgnbG9hZGVkJyBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMSwgbG9hZGVkID0gJCRwcm9wcy5sb2FkZWQpO1xuICAgIFx0fTtcblxuICAgIFx0cmV0dXJuIFthY3RpdmVJdGVtLCBsb2FkZWQsICRjbG9zaW5nXTtcbiAgICB9XG5cbiAgICBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBcdFx0c3VwZXIoKTtcbiAgICBcdFx0aW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQ0LCBjcmVhdGVfZnJhZ21lbnQkNCwgbm90X2VxdWFsLCB7IGFjdGl2ZUl0ZW06IDAsIGxvYWRlZDogMSB9KTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKiBzcmMvY29tcG9uZW50cy9pbWFnZS5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My41NS4xICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMSQxKGN0eCkge1xuICAgIFx0bGV0IGltZztcbiAgICBcdGxldCBpbWdfc2l6ZXNfdmFsdWU7XG4gICAgXHRsZXQgaW1nX291dHJvO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGltZyA9IGVsZW1lbnQoXCJpbWdcIik7XG4gICAgXHRcdFx0YXR0cihpbWcsIFwic2l6ZXNcIiwgaW1nX3NpemVzX3ZhbHVlID0gLypvcHRzKi8gY3R4WzhdLnNpemVzIHx8IGAkey8qc2l6ZXMqLyBjdHhbMV19cHhgKTtcbiAgICBcdFx0XHRhdHRyKGltZywgXCJhbHRcIiwgLyphY3RpdmVJdGVtKi8gY3R4WzddLmFsdCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpbWcsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGFjdGlvbl9kZXN0cm95ZXIoLyphZGRTcmMqLyBjdHhbMjFdLmNhbGwobnVsbCwgaW1nKSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihpbWcsIFwiZXJyb3JcIiwgLyplcnJvcl9oYW5kbGVyKi8gY3R4WzI3XSlcbiAgICBcdFx0XHRcdF07XG5cbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLypzaXplcyovIDIgJiYgaW1nX3NpemVzX3ZhbHVlICE9PSAoaW1nX3NpemVzX3ZhbHVlID0gLypvcHRzKi8gY3R4WzhdLnNpemVzIHx8IGAkey8qc2l6ZXMqLyBjdHhbMV19cHhgKSkge1xuICAgIFx0XHRcdFx0YXR0cihpbWcsIFwic2l6ZXNcIiwgaW1nX3NpemVzX3ZhbHVlKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdGlmIChpbWdfb3V0cm8pIGltZ19vdXRyby5lbmQoMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHRpbWdfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oaW1nLCBmbHksIHt9KTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGltZyk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBpbWdfb3V0cm8pIGltZ19vdXRyby5lbmQoKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0cnVuX2FsbChkaXNwb3NlKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzg0OjEwKSB7I2lmIHNob3dMb2FkZXJ9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrJDEoY3R4KSB7XG4gICAgXHRsZXQgbG9hZGluZztcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHRsb2FkaW5nID0gbmV3IExvYWRpbmcoe1xuICAgIFx0XHRcdHByb3BzOiB7XG4gICAgXHRcdFx0XHRhY3RpdmVJdGVtOiAvKmFjdGl2ZUl0ZW0qLyBjdHhbN10sXG4gICAgXHRcdFx0XHRsb2FkZWQ6IC8qbG9hZGVkKi8gY3R4WzJdXG4gICAgXHRcdFx0fVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGxvYWRpbmcuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGxvYWRpbmcsIHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0Y29uc3QgbG9hZGluZ19jaGFuZ2VzID0ge307XG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLypsb2FkZWQqLyA0KSBsb2FkaW5nX2NoYW5nZXMubG9hZGVkID0gLypsb2FkZWQqLyBjdHhbMl07XG4gICAgXHRcdFx0bG9hZGluZy4kc2V0KGxvYWRpbmdfY2hhbmdlcyk7XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4obG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQobG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudChsb2FkaW5nLCBkZXRhY2hpbmcpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQzKGN0eCkge1xuICAgIFx0bGV0IGRpdjE7XG4gICAgXHRsZXQgZGl2MDtcbiAgICBcdGxldCBpZl9ibG9jazBfYW5jaG9yO1xuICAgIFx0bGV0IHN0eWxlX3RyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkey8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSAvIC0yICsgLyokem9vbURyYWdUcmFuc2xhdGUqLyBjdHhbNl1bMF19cHgsICR7LyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzFdIC8gLTIgKyAvKiR6b29tRHJhZ1RyYW5zbGF0ZSovIGN0eFs2XVsxXX1weCwgMClgO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuICAgIFx0bGV0IGlmX2Jsb2NrMCA9IC8qbG9hZGVkKi8gY3R4WzJdICYmIGNyZWF0ZV9pZl9ibG9ja18xJDEoY3R4KTtcbiAgICBcdGxldCBpZl9ibG9jazEgPSAvKnNob3dMb2FkZXIqLyBjdHhbM10gJiYgY3JlYXRlX2lmX2Jsb2NrJDEoY3R4KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYxID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRkaXYwID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuYygpO1xuICAgIFx0XHRcdGlmX2Jsb2NrMF9hbmNob3IgPSBlbXB0eSgpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5jKCk7XG4gICAgXHRcdFx0YXR0cihkaXYwLCBcImNsYXNzXCIsIFwiYnAtaW1nXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYwLCBcIndpZHRoXCIsIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSArIFwicHhcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwiaGVpZ2h0XCIsIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjAsIFwiYnAtZHJhZ1wiLCAvKnBvaW50ZXJEb3duKi8gY3R4WzRdKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MCwgXCJicC1jYW56b29tXCIsIC8qbWF4Wm9vbSovIGN0eFsxMV0gPiAxICYmIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSA8IC8qbmF0dXJhbFdpZHRoKi8gY3R4WzEyXSk7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzddKSk7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwidHJhbnNmb3JtXCIsIHN0eWxlX3RyYW5zZm9ybSk7XG4gICAgXHRcdFx0YXR0cihkaXYxLCBcImNsYXNzXCIsIFwiYnAtaW1nLXdyYXBcIik7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjEsIFwiYnAtY2xvc2VcIiwgLypjbG9zaW5nV2hpbGVab29tZWQqLyBjdHhbNV0pO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2MSwgYW5jaG9yKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2MSwgZGl2MCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLm0oZGl2MCwgbnVsbCk7XG4gICAgXHRcdFx0YXBwZW5kKGRpdjAsIGlmX2Jsb2NrMF9hbmNob3IpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5tKGRpdjAsIG51bGwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gW1xuICAgIFx0XHRcdFx0XHRhY3Rpb25fZGVzdHJveWVyKC8qb25Nb3VudCovIGN0eFsyMF0uY2FsbChudWxsLCBkaXYwKSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcIndoZWVsXCIsIC8qb25XaGVlbCovIGN0eFsxNV0pLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2MSwgXCJwb2ludGVyZG93blwiLCAvKm9uUG9pbnRlckRvd24qLyBjdHhbMTZdKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdjEsIFwicG9pbnRlcm1vdmVcIiwgLypvblBvaW50ZXJNb3ZlKi8gY3R4WzE3XSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcInBvaW50ZXJ1cFwiLCAvKm9uUG9pbnRlclVwKi8gY3R4WzE5XSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcInBvaW50ZXJjYW5jZWxcIiwgLypyZW1vdmVFdmVudEZyb21DYWNoZSovIGN0eFsxOF0pXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmICgvKmxvYWRlZCovIGN0eFsyXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrMCkge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAucChjdHgsIGRpcnR5KTtcblxuICAgIFx0XHRcdFx0XHRpZiAoZGlydHlbMF0gJiAvKmxvYWRlZCovIDQpIHtcbiAgICBcdFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgXHRcdFx0XHRcdH1cbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMCA9IGNyZWF0ZV9pZl9ibG9ja18xJDEoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLmMoKTtcbiAgICBcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAubShkaXYwLCBpZl9ibG9jazBfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMCkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICgvKnNob3dMb2FkZXIqLyBjdHhbM10pIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5WzBdICYgLypzaG93TG9hZGVyKi8gOCkge1xuICAgIFx0XHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxID0gY3JlYXRlX2lmX2Jsb2NrJDEoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEubShkaXYwLCBudWxsKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMSkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qJGltYWdlRGltZW5zaW9ucyovIDEpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYwLCBcIndpZHRoXCIsIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyokaW1hZ2VEaW1lbnNpb25zKi8gMSkge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwiaGVpZ2h0XCIsIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLypwb2ludGVyRG93biovIDE2KSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MCwgXCJicC1kcmFnXCIsIC8qcG9pbnRlckRvd24qLyBjdHhbNF0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qbWF4Wm9vbSwgJGltYWdlRGltZW5zaW9ucywgbmF0dXJhbFdpZHRoKi8gNjE0NSkge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjAsIFwiYnAtY2Fuem9vbVwiLCAvKm1heFpvb20qLyBjdHhbMTFdID4gMSAmJiAvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMF0gPCAvKm5hdHVyYWxXaWR0aCovIGN0eFsxMl0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qJGltYWdlRGltZW5zaW9ucywgJHpvb21EcmFnVHJhbnNsYXRlKi8gNjUgJiYgc3R5bGVfdHJhbnNmb3JtICE9PSAoc3R5bGVfdHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7LyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdIC8gLTIgKyAvKiR6b29tRHJhZ1RyYW5zbGF0ZSovIGN0eFs2XVswXX1weCwgJHsvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMV0gLyAtMiArIC8qJHpvb21EcmFnVHJhbnNsYXRlKi8gY3R4WzZdWzFdfXB4LCAwKWApKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJ0cmFuc2Zvcm1cIiwgc3R5bGVfdHJhbnNmb3JtKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKmNsb3NpbmdXaGlsZVpvb21lZCovIDMyKSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MSwgXCJicC1jbG9zZVwiLCAvKmNsb3NpbmdXaGlsZVpvb21lZCovIGN0eFs1XSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCk7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swKTtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2MSk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLmQoKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuZCgpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbmNlJDMoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgICBcdGxldCAkem9vbWVkO1xuICAgIFx0bGV0ICR6b29tRHJhZ1RyYW5zbGF0ZTtcbiAgICBcdGxldCAkY2xvc2luZztcbiAgICBcdGxldCAkaW1hZ2VEaW1lbnNpb25zO1xuICAgIFx0Y29tcG9uZW50X3N1YnNjcmliZSgkJHNlbGYsIGNsb3NpbmcsICQkdmFsdWUgPT4gJCRpbnZhbGlkYXRlKDI2LCAkY2xvc2luZyA9ICQkdmFsdWUpKTtcbiAgICBcdGxldCB7IHByb3BzIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IHsgc21hbGxTY3JlZW4gfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgeyBhY3RpdmVJdGVtLCBvcHRzLCBwcmV2LCBuZXh0LCB6b29tZWQsIGNvbnRhaW5lciB9ID0gcHJvcHM7XG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgem9vbWVkLCB2YWx1ZSA9PiAkJGludmFsaWRhdGUoMjUsICR6b29tZWQgPSB2YWx1ZSkpO1xuICAgIFx0bGV0IG1heFpvb20gPSBhY3RpdmVJdGVtLm1heFpvb20gfHwgb3B0cy5tYXhab29tIHx8IDEwO1xuICAgIFx0bGV0IGNhbGN1bGF0ZWREaW1lbnNpb25zID0gcHJvcHMuY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKTtcblxuICAgIFx0LyoqIHZhbHVlIG9mIHNpemVzIGF0dHJpYnV0ZSAqL1xuICAgIFx0bGV0IHNpemVzID0gY2FsY3VsYXRlZERpbWVuc2lvbnNbMF07XG5cbiAgICBcdC8qKiB0cmFja3MgbG9hZCBzdGF0ZSBvZiBpbWFnZSAqL1xuICAgIFx0bGV0IGxvYWRlZCwgc2hvd0xvYWRlcjtcblxuICAgIFx0LyoqIHN0b3JlcyBwaW5jaCBpbmZvIGlmIG11bHRpcGxlIHRvdWNoIGV2ZW50cyBhY3RpdmUgKi9cbiAgICBcdGxldCBwaW5jaERldGFpbHM7XG5cbiAgICBcdC8qKiBpbWFnZSBodG1sIGVsZW1lbnQgKC5icC1pbWcpICovXG4gICAgXHRsZXQgYnBJbWc7XG5cbiAgICBcdC8qKiB0cmFjayBkaXN0YW5jZSBmb3IgcGluY2ggZXZlbnRzICovXG4gICAgXHRsZXQgcHJldkRpZmYgPSAwO1xuXG4gICAgXHRsZXQgcG9pbnRlckRvd24sIGhhc0RyYWdnZWQ7XG4gICAgXHRsZXQgZHJhZ1N0YXJ0WCwgZHJhZ1N0YXJ0WTtcblxuICAgIFx0LyoqIHpvb21EcmFnVHJhbnNsYXRlIHZhbHVlcyBvbiBzdGFydCBvZiBkcmFnICovXG4gICAgXHRsZXQgZHJhZ1N0YXJ0VHJhbnNsYXRlWCwgZHJhZ1N0YXJ0VHJhbnNsYXRlWTtcblxuICAgIFx0LyoqIGlmIHRydWUsIGFkZHMgY2xhc3MgdG8gLmJwLXdyYXAgdG8gYXZvaWQgaW1hZ2UgY3JvcHBpbmcgKi9cbiAgICBcdGxldCBjbG9zaW5nV2hpbGVab29tZWQ7XG5cbiAgICBcdGNvbnN0IG5hdHVyYWxXaWR0aCA9ICthY3RpdmVJdGVtLndpZHRoO1xuXG4gICAgXHQvKiogc3RvcmUgcG9zaXRpb25zIGZvciBkcmFnIGluZXJ0aWEgKi9cbiAgICBcdGNvbnN0IGRyYWdQb3NpdGlvbnMgPSBbXTtcblxuICAgIFx0LyoqIGNhY2hlIHBvaW50ZXIgZXZlbnRzIHRvIGhhbmRsZSBwaW5jaCAqL1xuICAgIFx0Y29uc3QgcG9pbnRlckNhY2hlID0gbmV3IE1hcCgpO1xuXG4gICAgXHQvKiogdHdlZW4gdG8gY29udHJvbCBpbWFnZSBzaXplICovXG4gICAgXHRjb25zdCBpbWFnZURpbWVuc2lvbnMgPSB0d2VlbmVkKGNhbGN1bGF0ZWREaW1lbnNpb25zLCBkZWZhdWx0VHdlZW5PcHRpb25zKDQwMCkpO1xuXG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgaW1hZ2VEaW1lbnNpb25zLCB2YWx1ZSA9PiAkJGludmFsaWRhdGUoMCwgJGltYWdlRGltZW5zaW9ucyA9IHZhbHVlKSk7XG5cbiAgICBcdC8qKiB0cmFuc2xhdGUgdHJhbnNmb3JtIGZvciBwb2ludGVyRG93biAqL1xuICAgIFx0Y29uc3Qgem9vbURyYWdUcmFuc2xhdGUgPSB0d2VlbmVkKFswLCAwXSwgZGVmYXVsdFR3ZWVuT3B0aW9ucyg0MDApKTtcblxuICAgIFx0Y29tcG9uZW50X3N1YnNjcmliZSgkJHNlbGYsIHpvb21EcmFnVHJhbnNsYXRlLCB2YWx1ZSA9PiAkJGludmFsaWRhdGUoNiwgJHpvb21EcmFnVHJhbnNsYXRlID0gdmFsdWUpKTtcblxuICAgIFx0LyoqIGNhbGN1bGF0ZSB0cmFuc2xhdGUgcG9zaXRpb24gd2l0aCBib3VuZHMgKi9cbiAgICBcdGNvbnN0IGJvdW5kVHJhbnNsYXRlVmFsdWVzID0gKFt4LCB5XSwgbmV3RGltZW5zaW9ucyA9ICRpbWFnZURpbWVuc2lvbnMpID0+IHtcbiAgICBcdFx0Ly8gaW1hZ2UgZHJhZyB0cmFuc2xhdGUgYm91bmRzXG4gICAgXHRcdGNvbnN0IG1heFRyYW5zbGF0ZVggPSAobmV3RGltZW5zaW9uc1swXSAtIGNvbnRhaW5lci53KSAvIDI7XG5cbiAgICBcdFx0Y29uc3QgbWF4VHJhbnNsYXRlWSA9IChuZXdEaW1lbnNpb25zWzFdIC0gY29udGFpbmVyLmgpIC8gMjtcblxuICAgIFx0XHQvLyB4IG1heCBkcmFnXG4gICAgXHRcdGlmIChtYXhUcmFuc2xhdGVYIDwgMCkge1xuICAgIFx0XHRcdHggPSAwO1xuICAgIFx0XHR9IGVsc2UgaWYgKHggPiBtYXhUcmFuc2xhdGVYKSB7XG4gICAgXHRcdFx0aWYgKHNtYWxsU2NyZWVuKSB7XG4gICAgXHRcdFx0XHQvLyBib3VuZCB0byBsZWZ0IHNpZGUgKGFsbG93IHNsaWdodCBvdmVyIGRyYWcpXG4gICAgXHRcdFx0XHR4ID0gcG9pbnRlckRvd25cbiAgICBcdFx0XHRcdD8gbWF4VHJhbnNsYXRlWCArICh4IC0gbWF4VHJhbnNsYXRlWCkgLyAxMFxuICAgIFx0XHRcdFx0OiBtYXhUcmFuc2xhdGVYO1xuXG4gICAgXHRcdFx0XHQvLyBwcmV2aW91cyBpdGVtIGlmIGRyYWdnZWQgcGFzdCB0aHJlc2hvbGRcbiAgICBcdFx0XHRcdGlmICh4ID4gbWF4VHJhbnNsYXRlWCArIDIwKSB7XG4gICAgXHRcdFx0XHRcdC8vIHBvaW50ZXJkb3duID0gdW5kZWZpbmVkIHRvIHN0b3AgcG9pbnRlcm1vdmUgZnJvbSBydW5uaW5nIGFnYWluXG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IHByZXYoKSk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdHggPSBtYXhUcmFuc2xhdGVYO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSBlbHNlIGlmICh4IDwgLW1heFRyYW5zbGF0ZVgpIHtcbiAgICBcdFx0XHQvLyBib3VuZCB0byByaWdodCBzaWRlIChhbGxvdyBzbGlnaHQgb3ZlciBkcmFnKVxuICAgIFx0XHRcdGlmIChzbWFsbFNjcmVlbikge1xuICAgIFx0XHRcdFx0eCA9IHBvaW50ZXJEb3duXG4gICAgXHRcdFx0XHQ/IC1tYXhUcmFuc2xhdGVYIC0gKC1tYXhUcmFuc2xhdGVYIC0geCkgLyAxMFxuICAgIFx0XHRcdFx0OiAtbWF4VHJhbnNsYXRlWDtcblxuICAgIFx0XHRcdFx0Ly8gbmV4dCBpdGVtIGlmIGRyYWdnZWQgcGFzdCB0aHJlc2hvbGRcbiAgICBcdFx0XHRcdGlmICh4IDwgLW1heFRyYW5zbGF0ZVggLSAyMCkge1xuICAgIFx0XHRcdFx0XHQvLyBwb2ludGVyZG93biA9IHVuZGVmaW5lZCB0byBzdG9wIHBvaW50ZXJtb3ZlIGZyb20gcnVubmluZyBhZ2FpblxuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBuZXh0KCkpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHR4ID0gLW1heFRyYW5zbGF0ZVg7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8geSBtYXggZHJhZ1xuICAgIFx0XHRpZiAobWF4VHJhbnNsYXRlWSA8IDApIHtcbiAgICBcdFx0XHR5ID0gMDtcbiAgICBcdFx0fSBlbHNlIGlmICh5ID4gbWF4VHJhbnNsYXRlWSkge1xuICAgIFx0XHRcdHkgPSBtYXhUcmFuc2xhdGVZO1xuICAgIFx0XHR9IGVsc2UgaWYgKHkgPCAtbWF4VHJhbnNsYXRlWSkge1xuICAgIFx0XHRcdHkgPSAtbWF4VHJhbnNsYXRlWTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdHJldHVybiBbeCwgeV07XG4gICAgXHR9O1xuXG4gICAgXHQvKiogdXBkYXRlcyB6b29tIGxldmVsIGluIG9yIG91dCBiYXNlZCBvbiBhbXQgdmFsdWUgKi9cbiAgICBcdGZ1bmN0aW9uIGNoYW5nZVpvb20oYW10ID0gbWF4Wm9vbSwgZSkge1xuICAgIFx0XHRpZiAoJGNsb3NpbmcpIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHRjb25zdCBtYXhXaWR0aCA9IGNhbGN1bGF0ZWREaW1lbnNpb25zWzBdICogbWF4Wm9vbTtcbiAgICBcdFx0bGV0IG5ld1dpZHRoID0gJGltYWdlRGltZW5zaW9uc1swXSArICRpbWFnZURpbWVuc2lvbnNbMF0gKiBhbXQ7XG4gICAgXHRcdGxldCBuZXdIZWlnaHQgPSAkaW1hZ2VEaW1lbnNpb25zWzFdICsgJGltYWdlRGltZW5zaW9uc1sxXSAqIGFtdDtcblxuICAgIFx0XHRpZiAoYW10ID4gMCkge1xuICAgIFx0XHRcdGlmIChuZXdXaWR0aCA+IG1heFdpZHRoKSB7XG4gICAgXHRcdFx0XHQvLyByZXF1ZXN0aW5nIHNpemUgbGFyZ2UgdGhhbiBtYXggem9vbVxuICAgIFx0XHRcdFx0bmV3V2lkdGggPSBtYXhXaWR0aDtcblxuICAgIFx0XHRcdFx0bmV3SGVpZ2h0ID0gY2FsY3VsYXRlZERpbWVuc2lvbnNbMV0gKiBtYXhab29tO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmIChuZXdXaWR0aCA+IG5hdHVyYWxXaWR0aCkge1xuICAgIFx0XHRcdFx0Ly8gaWYgcmVxdWVzdGluZyB6b29tIGxhcmdlciB0aGFuIG5hdHVyYWwgc2l6ZVxuICAgIFx0XHRcdFx0bmV3V2lkdGggPSBuYXR1cmFsV2lkdGg7XG5cbiAgICBcdFx0XHRcdG5ld0hlaWdodCA9ICthY3RpdmVJdGVtLmhlaWdodDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0gZWxzZSBpZiAobmV3V2lkdGggPCBjYWxjdWxhdGVkRGltZW5zaW9uc1swXSkge1xuICAgIFx0XHRcdC8vIGlmIHJlcXVlc3RpbmcgaW1hZ2Ugc21hbGxlciB0aGFuIHN0YXJ0aW5nIHNpemVcbiAgICBcdFx0XHRpbWFnZURpbWVuc2lvbnMuc2V0KGNhbGN1bGF0ZWREaW1lbnNpb25zKTtcblxuICAgIFx0XHRcdHJldHVybiB6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoWzAsIDBdKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdGxldCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IGJwSW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgXHRcdC8vIGRpc3RhbmNlIGNsaWNrZWQgZnJvbSBjZW50ZXIgb2YgaW1hZ2VcbiAgICBcdFx0Y29uc3Qgb2Zmc2V0WCA9IGUgPyBlLmNsaWVudFggLSB4IC0gd2lkdGggLyAyIDogMDtcblxuICAgIFx0XHRjb25zdCBvZmZzZXRZID0gZSA/IGUuY2xpZW50WSAtIHkgLSBoZWlnaHQgLyAyIDogMDtcbiAgICBcdFx0eCA9IC1vZmZzZXRYICogKG5ld1dpZHRoIC8gd2lkdGgpICsgb2Zmc2V0WDtcbiAgICBcdFx0eSA9IC1vZmZzZXRZICogKG5ld0hlaWdodCAvIGhlaWdodCkgKyBvZmZzZXRZO1xuICAgIFx0XHRjb25zdCBuZXdEaW1lbnNpb25zID0gW25ld1dpZHRoLCBuZXdIZWlnaHRdO1xuXG4gICAgXHRcdC8vIHNldCBuZXcgZGltZW5zaW9ucyBhbmQgdXBkYXRlIHNpemVzIHByb3BlcnR5XG4gICAgXHRcdGltYWdlRGltZW5zaW9ucy5zZXQobmV3RGltZW5zaW9ucykudGhlbigoKSA9PiB7XG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDEsIHNpemVzID0gTWF0aC5yb3VuZChNYXRoLm1heChzaXplcywgbmV3V2lkdGgpKSk7XG4gICAgXHRcdH0pO1xuXG4gICAgXHRcdC8vIHVwZGF0ZSB0cmFuc2xhdGUgdmFsdWVcbiAgICBcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KGJvdW5kVHJhbnNsYXRlVmFsdWVzKFskem9vbURyYWdUcmFuc2xhdGVbMF0gKyB4LCAkem9vbURyYWdUcmFuc2xhdGVbMV0gKyB5XSwgbmV3RGltZW5zaW9ucykpO1xuICAgIFx0fVxuXG4gICAgXHQvLyBhbGxvdyB6b29tIHRvIGJlIHJlYWQgLyBzZXQgZXh0ZXJuYWxseVxuICAgIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGFjdGl2ZUl0ZW0sICd6b29tJywge1xuICAgIFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gICAgXHRcdGdldDogKCkgPT4gJHpvb21lZCxcbiAgICBcdFx0c2V0OiBib29sID0+IGNoYW5nZVpvb20oYm9vbCA/IG1heFpvb20gOiAtbWF4Wm9vbSlcbiAgICBcdH0pO1xuXG4gICAgXHRjb25zdCBvbldoZWVsID0gZSA9PiB7XG4gICAgXHRcdC8vIHJldHVybiBpZiBzY3JvbGxpbmcgcGFzdCBpbmxpbmUgZ2FsbGVyeSB3LyB3aGVlbFxuICAgIFx0XHRpZiAob3B0cy5pbmxpbmUgJiYgISR6b29tZWQpIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBwcmV2ZW50RGVmYXVsdCB0byBzdG9wIHNjcm9sbGluZyBvbiB6b29tZWQgaW5saW5lIGltYWdlXG4gICAgXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIFx0XHQvLyBjaGFuZ2Ugem9vbSBvbiB3aGVlbFxuICAgIFx0XHRjaGFuZ2Vab29tKGUuZGVsdGFZIC8gLTMwMCwgZSk7XG4gICAgXHR9O1xuXG4gICAgXHQvKiogb24gZHJhZyBzdGFydCwgc3RvcmUgaW5pdGlhbCBwb3NpdGlvbiBhbmQgaW1hZ2UgdHJhbnNsYXRlIHZhbHVlcyAqL1xuICAgIFx0Y29uc3Qgb25Qb2ludGVyRG93biA9IGUgPT4ge1xuICAgIFx0XHQvLyBkb24ndCBydW4gaWYgcmlnaHQgY2xpY2tcbiAgICBcdFx0aWYgKGUuYnV0dG9uICE9PSAyKSB7XG4gICAgXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IHRydWUpO1xuICAgIFx0XHRcdHBvaW50ZXJDYWNoZS5zZXQoZS5wb2ludGVySWQsIGUpO1xuICAgIFx0XHRcdGRyYWdTdGFydFggPSBlLmNsaWVudFg7XG4gICAgXHRcdFx0ZHJhZ1N0YXJ0WSA9IGUuY2xpZW50WTtcbiAgICBcdFx0XHRkcmFnU3RhcnRUcmFuc2xhdGVYID0gJHpvb21EcmFnVHJhbnNsYXRlWzBdO1xuICAgIFx0XHRcdGRyYWdTdGFydFRyYW5zbGF0ZVkgPSAkem9vbURyYWdUcmFuc2xhdGVbMV07XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdC8qKiBvbiBkcmFnLCB1cGRhdGUgaW1hZ2UgdHJhbnNsYXRlIHZhbCAqL1xuICAgIFx0Y29uc3Qgb25Qb2ludGVyTW92ZSA9IGUgPT4ge1xuICAgIFx0XHRpZiAocG9pbnRlckNhY2hlLnNpemUgPiAxKSB7XG4gICAgXHRcdFx0Ly8gaWYgbXVsdGlwbGUgcG9pbnRlciBldmVudHMsIHBhc3MgdG8gaGFuZGxlUGluY2ggZnVuY3Rpb25cbiAgICBcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBmYWxzZSk7XG5cbiAgICBcdFx0XHRyZXR1cm4gb3B0cy5ub1BpbmNoPy4oY29udGFpbmVyLmVsKSB8fCBoYW5kbGVQaW5jaChlKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdGlmICghcG9pbnRlckRvd24pIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHRsZXQgeCA9IGUuY2xpZW50WDtcbiAgICBcdFx0bGV0IHkgPSBlLmNsaWVudFk7XG5cbiAgICBcdFx0Ly8gc3RvcmUgcG9zaXRpb25zIGluIGRyYWdQb3NpdGlvbnMgZm9yIGluZXJ0aWFcbiAgICBcdFx0Ly8gc2V0IGhhc0RyYWdnZWQgaWYgPiAyIHBvaW50ZXIgbW92ZSBldmVudHNcbiAgICBcdFx0aGFzRHJhZ2dlZCA9IGRyYWdQb3NpdGlvbnMucHVzaCh7IHgsIHkgfSkgPiAyO1xuXG4gICAgXHRcdC8vIG92ZXJhbGwgZHJhZyBkaWZmIGZyb20gc3RhcnQgbG9jYXRpb25cbiAgICBcdFx0eCA9IHggLSBkcmFnU3RhcnRYO1xuXG4gICAgXHRcdHkgPSB5IC0gZHJhZ1N0YXJ0WTtcblxuICAgIFx0XHQvLyBoYW5kbGUgdW56b29tZWQgbGVmdCAvIHJpZ2h0IC8gdXAgc3dpcGVzXG4gICAgXHRcdGlmICghJHpvb21lZCkge1xuICAgIFx0XHRcdC8vIGNsb3NlIGlmIHN3aXBlIHVwXG4gICAgXHRcdFx0aWYgKHkgPCAtOTApIHtcbiAgICBcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9ICFvcHRzLm5vQ2xvc2UgJiYgcHJvcHMuY2xvc2UoKSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0Ly8gb25seSBoYW5kbGUgbGVmdCAvIHJpZ2h0IGlmIG5vdCBzd2lwaW5nIHZlcnRpY2FsbHlcbiAgICBcdFx0XHRpZiAoTWF0aC5hYnMoeSkgPCAzMCkge1xuICAgIFx0XHRcdFx0Ly8gcHJldmlvdXMgaWYgc3dpcGUgbGVmdFxuICAgIFx0XHRcdFx0aWYgKHggPiA0MCkge1xuICAgIFx0XHRcdFx0XHQvLyBwb2ludGVyZG93biA9IHVuZGVmaW5lZCB0byBzdG9wIHBvaW50ZXJtb3ZlIGZyb20gcnVubmluZyBhZ2FpblxuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBwcmV2KCkpO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHQvLyBuZXh0IGlmIHN3aXBlIHJpZ2h0XG4gICAgXHRcdFx0XHRpZiAoeCA8IC00MCkge1xuICAgIFx0XHRcdFx0XHQvLyBwb2ludGVyZG93biA9IHVuZGVmaW5lZCB0byBzdG9wIHBvaW50ZXJtb3ZlIGZyb20gcnVubmluZyBhZ2FpblxuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBuZXh0KCkpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIGltYWdlIGRyYWcgd2hlbiB6b29tZWRcbiAgICBcdFx0aWYgKCR6b29tZWQgJiYgaGFzRHJhZ2dlZCAmJiAhJGNsb3NpbmcpIHtcbiAgICBcdFx0XHR6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoYm91bmRUcmFuc2xhdGVWYWx1ZXMoW2RyYWdTdGFydFRyYW5zbGF0ZVggKyB4LCBkcmFnU3RhcnRUcmFuc2xhdGVZICsgeV0pLCB7IGR1cmF0aW9uOiAwIH0pO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBoYW5kbGVQaW5jaCA9IGUgPT4ge1xuICAgIFx0XHQvLyB1cGRhdGUgZXZlbnQgaW4gY2FjaGUgYW5kIGdldCB2YWx1ZXNcbiAgICBcdFx0Y29uc3QgW3AxLCBwMl0gPSBwb2ludGVyQ2FjaGUuc2V0KGUucG9pbnRlcklkLCBlKS52YWx1ZXMoKTtcblxuICAgIFx0XHQvLyBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludGVyc1xuICAgIFx0XHRjb25zdCBkeCA9IHAxLmNsaWVudFggLSBwMi5jbGllbnRYO1xuXG4gICAgXHRcdGNvbnN0IGR5ID0gcDEuY2xpZW50WSAtIHAyLmNsaWVudFk7XG4gICAgXHRcdGNvbnN0IGN1ckRpZmYgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG5cbiAgICBcdFx0Ly8gY2FjaGUgdGhlIG9yaWdpbmFsIHBpbmNoIGNlbnRlclxuICAgIFx0XHRwaW5jaERldGFpbHMgPSBwaW5jaERldGFpbHMgfHwge1xuICAgIFx0XHRcdGNsaWVudFg6IChwMS5jbGllbnRYICsgcDIuY2xpZW50WCkgLyAyLFxuICAgIFx0XHRcdGNsaWVudFk6IChwMS5jbGllbnRZICsgcDIuY2xpZW50WSkgLyAyXG4gICAgXHRcdH07XG5cbiAgICBcdFx0Ly8gc2NhbGUgaW1hZ2VcbiAgICBcdFx0Y2hhbmdlWm9vbSgoKHByZXZEaWZmIHx8IGN1ckRpZmYpIC0gY3VyRGlmZikgLyAtMzUsIHBpbmNoRGV0YWlscyk7XG5cbiAgICBcdFx0Ly8gQ2FjaGUgdGhlIGRpc3RhbmNlIGZvciB0aGUgbmV4dCBtb3ZlIGV2ZW50XG4gICAgXHRcdHByZXZEaWZmID0gY3VyRGlmZjtcbiAgICBcdH07XG5cbiAgICBcdC8qKiByZW1vdmUgZXZlbnQgZnJvbSBwb2ludGVyIGV2ZW50IGNhY2hlICovXG4gICAgXHRjb25zdCByZW1vdmVFdmVudEZyb21DYWNoZSA9IGUgPT4gcG9pbnRlckNhY2hlLmRlbGV0ZShlLnBvaW50ZXJJZCk7XG5cbiAgICBcdGZ1bmN0aW9uIG9uUG9pbnRlclVwKGUpIHtcbiAgICBcdFx0cmVtb3ZlRXZlbnRGcm9tQ2FjaGUoZSk7XG5cbiAgICBcdFx0aWYgKHBpbmNoRGV0YWlscykge1xuICAgIFx0XHRcdC8vIHJlc2V0IHByZXZEaWZmIGFuZCBjbGVhciBwb2ludGVyRG93biB0byB0cmlnZ2VyIHJldHVybiBiZWxvd1xuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IHByZXZEaWZmID0gMCk7XG5cbiAgICBcdFx0XHQvLyBzZXQgcGluY2hEZXRhaWxzIHRvIG51bGwgYWZ0ZXIgbGFzdCBmaW5nZXIgbGlmdHNcbiAgICBcdFx0XHRwaW5jaERldGFpbHMgPSBwb2ludGVyQ2FjaGUuc2l6ZSA/IHBpbmNoRGV0YWlscyA6IG51bGw7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBtYWtlIHN1cmUgcG9pbnRlciBldmVudHMgZG9uJ3QgY2Fycnkgb3ZlciB0byBuZXh0IGltYWdlXG4gICAgXHRcdGlmICghcG9pbnRlckRvd24pIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBmYWxzZSk7XG5cbiAgICBcdFx0Ly8gY2xvc2UgaWYgb3ZlcmxheSBpcyBjbGlja2VkXG4gICAgXHRcdGlmIChlLnRhcmdldCA9PT0gdGhpcyAmJiAhb3B0cy5ub0Nsb3NlKSB7XG4gICAgXHRcdFx0cmV0dXJuIHByb3BzLmNsb3NlKCk7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBhZGQgZHJhZyBpbmVydGlhIC8gc25hcCBiYWNrIHRvIGJvdW5kc1xuICAgIFx0XHRpZiAoaGFzRHJhZ2dlZCkge1xuICAgIFx0XHRcdGNvbnN0IFtwb3NPbmUsIHBvc1R3bywgcG9zVGhyZWVdID0gZHJhZ1Bvc2l0aW9ucy5zbGljZSgtMyk7XG4gICAgXHRcdFx0Y29uc3QgeERpZmYgPSBwb3NUd28ueCAtIHBvc1RocmVlLng7XG4gICAgXHRcdFx0Y29uc3QgeURpZmYgPSBwb3NUd28ueSAtIHBvc1RocmVlLnk7XG5cbiAgICBcdFx0XHRpZiAoTWF0aC5oeXBvdCh4RGlmZiwgeURpZmYpID4gNSkge1xuICAgIFx0XHRcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KGJvdW5kVHJhbnNsYXRlVmFsdWVzKFtcbiAgICBcdFx0XHRcdFx0JHpvb21EcmFnVHJhbnNsYXRlWzBdIC0gKHBvc09uZS54IC0gcG9zVGhyZWUueCkgKiA1LFxuICAgIFx0XHRcdFx0XHQkem9vbURyYWdUcmFuc2xhdGVbMV0gLSAocG9zT25lLnkgLSBwb3NUaHJlZS55KSAqIDVcbiAgICBcdFx0XHRcdF0pKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0gZWxzZSBpZiAoIW9wdHMub25JbWFnZUNsaWNrPy4oY29udGFpbmVyLmVsLCBhY3RpdmVJdGVtKSkge1xuICAgIFx0XHRcdGNoYW5nZVpvb20oJHpvb21lZCA/IC1tYXhab29tIDogbWF4Wm9vbSwgZSk7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyByZXNldCBwb2ludGVyIHN0YXRlc1xuICAgIFx0XHRoYXNEcmFnZ2VkID0gZmFsc2U7XG5cbiAgICBcdFx0Ly8gcmVzZXQgZHJhZ1Bvc2l0aW9uc1xuICAgIFx0XHRkcmFnUG9zaXRpb25zLmxlbmd0aCA9IDA7XG4gICAgXHR9XG5cbiAgICBcdGNvbnN0IG9uTW91bnQgPSBub2RlID0+IHtcbiAgICBcdFx0YnBJbWcgPSBub2RlO1xuXG4gICAgXHRcdC8vIGhhbmRsZSBnbG9iYWxUaGlzIHJlc2l6ZVxuICAgIFx0XHRwcm9wcy5zZXRSZXNpemVGdW5jKCgpID0+IHtcbiAgICBcdFx0XHQkJGludmFsaWRhdGUoMjQsIGNhbGN1bGF0ZWREaW1lbnNpb25zID0gcHJvcHMuY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKSk7XG5cbiAgICBcdFx0XHQvLyBhZGp1c3QgaW1hZ2Ugc2l6ZSAvIHpvb20gb24gcmVzaXplLCBidXQgbm90IG9uIG1vYmlsZSBiZWNhdXNlXG4gICAgXHRcdFx0Ly8gc29tZSBicm93c2VycyAoaW9zIHNhZmFyaSAxNSkgY29uc3RhbnRseSByZXNpemUgc2NyZWVuIG9uIGRyYWdcbiAgICBcdFx0XHRpZiAob3B0cy5pbmxpbmUgfHwgIXNtYWxsU2NyZWVuKSB7XG4gICAgXHRcdFx0XHRpbWFnZURpbWVuc2lvbnMuc2V0KGNhbGN1bGF0ZWREaW1lbnNpb25zKTtcbiAgICBcdFx0XHRcdHpvb21EcmFnVHJhbnNsYXRlLnNldChbMCwgMF0pO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdFx0Ly8gZGVjb2RlIGluaXRpYWwgaW1hZ2UgYmVmb3JlIHJlbmRlcmluZ1xuICAgIFx0XHRwcm9wcy5sb2FkSW1hZ2UoYWN0aXZlSXRlbSkudGhlbigoKSA9PiB7XG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDIsIGxvYWRlZCA9IHRydWUpO1xuICAgIFx0XHRcdHByb3BzLnByZWxvYWROZXh0KCk7XG4gICAgXHRcdH0pO1xuXG4gICAgXHRcdC8vIHNob3cgbG9hZGluZyBpbmRpY2F0b3IgaWYgbmVlZGVkXG4gICAgXHRcdHNldFRpbWVvdXQoXG4gICAgXHRcdFx0KCkgPT4ge1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDMsIHNob3dMb2FkZXIgPSAhbG9hZGVkKTtcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdDI1MFxuICAgIFx0XHQpO1xuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgYWRkU3JjID0gbm9kZSA9PiB7XG4gICAgXHRcdGFkZEF0dHJpYnV0ZXMobm9kZSwgYWN0aXZlSXRlbS5hdHRyKTtcbiAgICBcdFx0bm9kZS5zcmNzZXQgPSBhY3RpdmVJdGVtLmltZztcbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IGVycm9yX2hhbmRsZXIgPSBlcnJvciA9PiBvcHRzLm9uRXJyb3I/Lihjb250YWluZXIsIGFjdGl2ZUl0ZW0sIGVycm9yKTtcblxuICAgIFx0JCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgXHRcdFxuICAgIFx0XHRpZiAoJ3NtYWxsU2NyZWVuJyBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMjMsIHNtYWxsU2NyZWVuID0gJCRwcm9wcy5zbWFsbFNjcmVlbik7XG4gICAgXHR9O1xuXG4gICAgXHQkJHNlbGYuJCQudXBkYXRlID0gKCkgPT4ge1xuICAgIFx0XHRpZiAoJCRzZWxmLiQkLmRpcnR5WzBdICYgLyokaW1hZ2VEaW1lbnNpb25zLCBjYWxjdWxhdGVkRGltZW5zaW9ucyovIDE2Nzc3MjE3KSB7XG4gICAgXHRcdFx0em9vbWVkLnNldCgkaW1hZ2VEaW1lbnNpb25zWzBdIC0gMTAgPiBjYWxjdWxhdGVkRGltZW5zaW9uc1swXSk7XG4gICAgXHRcdH1cblxuICAgIFx0XHRpZiAoJCRzZWxmLiQkLmRpcnR5WzBdICYgLyokY2xvc2luZywgJHpvb21lZCwgY2FsY3VsYXRlZERpbWVuc2lvbnMqLyAxMTc0NDA1MTIpIHtcbiAgICBcdFx0XHQvLyBpZiB6b29tZWQgd2hpbGUgY2xvc2luZywgem9vbSBvdXQgaW1hZ2UgYW5kIGFkZCBjbGFzc1xuICAgIFx0XHRcdC8vIHRvIGNoYW5nZSBjb250YWluIHZhbHVlIG9uIC5icC13cmFwIHRvIGF2b2lkIGNyb3BwaW5nXG4gICAgXHRcdFx0aWYgKCRjbG9zaW5nICYmICR6b29tZWQgJiYgIW9wdHMuaW50cm8pIHtcbiAgICBcdFx0XHRcdGNvbnN0IGNsb3NlVHdlZW5PcHRzID0gZGVmYXVsdFR3ZWVuT3B0aW9ucyg0ODApO1xuICAgIFx0XHRcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KFswLCAwXSwgY2xvc2VUd2Vlbk9wdHMpO1xuICAgIFx0XHRcdFx0aW1hZ2VEaW1lbnNpb25zLnNldChjYWxjdWxhdGVkRGltZW5zaW9ucywgY2xvc2VUd2Vlbk9wdHMpO1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDUsIGNsb3NpbmdXaGlsZVpvb21lZCA9IHRydWUpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0cmV0dXJuIFtcbiAgICBcdFx0JGltYWdlRGltZW5zaW9ucyxcbiAgICBcdFx0c2l6ZXMsXG4gICAgXHRcdGxvYWRlZCxcbiAgICBcdFx0c2hvd0xvYWRlcixcbiAgICBcdFx0cG9pbnRlckRvd24sXG4gICAgXHRcdGNsb3NpbmdXaGlsZVpvb21lZCxcbiAgICBcdFx0JHpvb21EcmFnVHJhbnNsYXRlLFxuICAgIFx0XHRhY3RpdmVJdGVtLFxuICAgIFx0XHRvcHRzLFxuICAgIFx0XHR6b29tZWQsXG4gICAgXHRcdGNvbnRhaW5lcixcbiAgICBcdFx0bWF4Wm9vbSxcbiAgICBcdFx0bmF0dXJhbFdpZHRoLFxuICAgIFx0XHRpbWFnZURpbWVuc2lvbnMsXG4gICAgXHRcdHpvb21EcmFnVHJhbnNsYXRlLFxuICAgIFx0XHRvbldoZWVsLFxuICAgIFx0XHRvblBvaW50ZXJEb3duLFxuICAgIFx0XHRvblBvaW50ZXJNb3ZlLFxuICAgIFx0XHRyZW1vdmVFdmVudEZyb21DYWNoZSxcbiAgICBcdFx0b25Qb2ludGVyVXAsXG4gICAgXHRcdG9uTW91bnQsXG4gICAgXHRcdGFkZFNyYyxcbiAgICBcdFx0cHJvcHMsXG4gICAgXHRcdHNtYWxsU2NyZWVuLFxuICAgIFx0XHRjYWxjdWxhdGVkRGltZW5zaW9ucyxcbiAgICBcdFx0JHpvb21lZCxcbiAgICBcdFx0JGNsb3NpbmcsXG4gICAgXHRcdGVycm9yX2hhbmRsZXJcbiAgICBcdF07XG4gICAgfVxuXG4gICAgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIFx0XHRzdXBlcigpO1xuICAgIFx0XHRpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDMsIGNyZWF0ZV9mcmFnbWVudCQzLCBub3RfZXF1YWwsIHsgcHJvcHM6IDIyLCBzbWFsbFNjcmVlbjogMjMgfSwgbnVsbCwgWy0xLCAtMV0pO1xuICAgIFx0fVxuICAgIH1cblxuICAgIC8qIHNyYy9jb21wb25lbnRzL2lmcmFtZS5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My41NS4xICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkMihjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgaWZyYW1lO1xuICAgIFx0bGV0IGxvYWRpbmc7XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBtb3VudGVkO1xuICAgIFx0bGV0IGRpc3Bvc2U7XG5cbiAgICBcdGxvYWRpbmcgPSBuZXcgTG9hZGluZyh7XG4gICAgXHRcdFx0cHJvcHM6IHtcbiAgICBcdFx0XHRcdGFjdGl2ZUl0ZW06IC8qYWN0aXZlSXRlbSovIGN0eFsyXSxcbiAgICBcdFx0XHRcdGxvYWRlZDogLypsb2FkZWQqLyBjdHhbMF1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH0pO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0aWZyYW1lID0gZWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGxvYWRpbmcuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHRcdGF0dHIoaWZyYW1lLCBcImFsbG93XCIsIFwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cIik7XG4gICAgXHRcdFx0YXR0cihpZnJhbWUsIFwidGl0bGVcIiwgLyphY3RpdmVJdGVtKi8gY3R4WzJdLnRpdGxlKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWlmXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwid2lkdGhcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImhlaWdodFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMV0gKyBcInB4XCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYsIGlmcmFtZSk7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGxvYWRpbmcsIGRpdiwgbnVsbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGFjdGlvbl9kZXN0cm95ZXIoLyphZGRTcmMqLyBjdHhbM10uY2FsbChudWxsLCBpZnJhbWUpKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGlmcmFtZSwgXCJsb2FkXCIsIC8qbG9hZF9oYW5kbGVyKi8gY3R4WzVdKVxuICAgIFx0XHRcdFx0XTtcblxuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgW2RpcnR5XSkge1xuICAgIFx0XHRcdGNvbnN0IGxvYWRpbmdfY2hhbmdlcyA9IHt9O1xuICAgIFx0XHRcdGlmIChkaXJ0eSAmIC8qbG9hZGVkKi8gMSkgbG9hZGluZ19jaGFuZ2VzLmxvYWRlZCA9IC8qbG9hZGVkKi8gY3R4WzBdO1xuICAgIFx0XHRcdGxvYWRpbmcuJHNldChsb2FkaW5nX2NoYW5nZXMpO1xuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5ICYgLypkaW1lbnNpb25zKi8gMikge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJ3aWR0aFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMF0gKyBcInB4XCIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eSAmIC8qZGltZW5zaW9ucyovIDIpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwiaGVpZ2h0XCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQobG9hZGluZyk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFuY2UkMigkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICAgIFx0bGV0IHsgcHJvcHMgfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgbG9hZGVkLCBkaW1lbnNpb25zO1xuICAgIFx0Y29uc3QgeyBhY3RpdmVJdGVtIH0gPSBwcm9wcztcbiAgICBcdGNvbnN0IHNldERpbWVuc2lvbnMgPSAoKSA9PiAkJGludmFsaWRhdGUoMSwgZGltZW5zaW9ucyA9IHByb3BzLmNhbGN1bGF0ZURpbWVuc2lvbnMoYWN0aXZlSXRlbSkpO1xuICAgIFx0c2V0RGltZW5zaW9ucygpO1xuICAgIFx0cHJvcHMuc2V0UmVzaXplRnVuYyhzZXREaW1lbnNpb25zKTtcblxuICAgIFx0Y29uc3QgYWRkU3JjID0gbm9kZSA9PiB7XG4gICAgXHRcdGFkZEF0dHJpYnV0ZXMobm9kZSwgYWN0aXZlSXRlbS5hdHRyKTtcbiAgICBcdFx0bm9kZS5zcmMgPSBhY3RpdmVJdGVtLmlmcmFtZTtcbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IGxvYWRfaGFuZGxlciA9ICgpID0+ICQkaW52YWxpZGF0ZSgwLCBsb2FkZWQgPSB0cnVlKTtcblxuICAgIFx0XG5cbiAgICBcdHJldHVybiBbbG9hZGVkLCBkaW1lbnNpb25zLCBhY3RpdmVJdGVtLCBhZGRTcmMsIHByb3BzLCBsb2FkX2hhbmRsZXJdO1xuICAgIH1cblxuICAgIGNsYXNzIElmcmFtZSBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgXHRcdHN1cGVyKCk7XG4gICAgXHRcdGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkMiwgY3JlYXRlX2ZyYWdtZW50JDIsIG5vdF9lcXVhbCwgeyBwcm9wczogNCB9KTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKiBzcmMvY29tcG9uZW50cy92aWRlby5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My41NS4xICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkMShjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgbG9hZGluZztcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcblxuICAgIFx0bG9hZGluZyA9IG5ldyBMb2FkaW5nKHtcbiAgICBcdFx0XHRwcm9wczoge1xuICAgIFx0XHRcdFx0YWN0aXZlSXRlbTogLyphY3RpdmVJdGVtKi8gY3R4WzJdLFxuICAgIFx0XHRcdFx0bG9hZGVkOiAvKmxvYWRlZCovIGN0eFswXVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGxvYWRpbmcuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtdmlkXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwid2lkdGhcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImhlaWdodFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMV0gKyBcInB4XCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzJdKSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGxvYWRpbmcsIGRpdiwgbnVsbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBhY3Rpb25fZGVzdHJveWVyKC8qb25Nb3VudCovIGN0eFszXS5jYWxsKG51bGwsIGRpdikpO1xuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgW2RpcnR5XSkge1xuICAgIFx0XHRcdGNvbnN0IGxvYWRpbmdfY2hhbmdlcyA9IHt9O1xuICAgIFx0XHRcdGlmIChkaXJ0eSAmIC8qbG9hZGVkKi8gMSkgbG9hZGluZ19jaGFuZ2VzLmxvYWRlZCA9IC8qbG9hZGVkKi8gY3R4WzBdO1xuICAgIFx0XHRcdGxvYWRpbmcuJHNldChsb2FkaW5nX2NoYW5nZXMpO1xuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5ICYgLypkaW1lbnNpb25zKi8gMikge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJ3aWR0aFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMF0gKyBcInB4XCIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eSAmIC8qZGltZW5zaW9ucyovIDIpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwiaGVpZ2h0XCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQobG9hZGluZyk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdGRpc3Bvc2UoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZSQxKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgeyBwcm9wcyB9ID0gJCRwcm9wcztcbiAgICBcdGxldCBsb2FkZWQsIGRpbWVuc2lvbnM7XG4gICAgXHRjb25zdCB7IGFjdGl2ZUl0ZW0sIG9wdHMsIGNvbnRhaW5lciB9ID0gcHJvcHM7XG4gICAgXHRjb25zdCBzZXREaW1lbnNpb25zID0gKCkgPT4gJCRpbnZhbGlkYXRlKDEsIGRpbWVuc2lvbnMgPSBwcm9wcy5jYWxjdWxhdGVEaW1lbnNpb25zKGFjdGl2ZUl0ZW0pKTtcbiAgICBcdHNldERpbWVuc2lvbnMoKTtcbiAgICBcdHByb3BzLnNldFJlc2l6ZUZ1bmMoc2V0RGltZW5zaW9ucyk7XG5cbiAgICBcdC8qKiBjcmVhdGUgYXVkbyAvIHZpZGVvIGVsZW1lbnQgKi9cbiAgICBcdGNvbnN0IG9uTW91bnQgPSBub2RlID0+IHtcbiAgICBcdFx0bGV0IG1lZGlhRWxlbWVudDtcblxuICAgIFx0XHQvKiogdGFrZXMgc3VwcGxpZWQgb2JqZWN0IGFuZCBjcmVhdGVzIGVsZW1lbnRzIGluIHZpZGVvICovXG4gICAgXHRcdGNvbnN0IGFwcGVuZFRvVmlkZW8gPSAodGFnLCBhcnIpID0+IHtcbiAgICBcdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIFx0XHRcdFx0YXJyID0gSlNPTi5wYXJzZShhcnIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGZvciAoY29uc3Qgb2JqIG9mIGFycikge1xuICAgIFx0XHRcdFx0Ly8gY3JlYXRlIG1lZGlhIGVsZW1lbnQgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIFx0XHRcdFx0aWYgKCFtZWRpYUVsZW1lbnQpIHtcbiAgICBcdFx0XHRcdFx0bWVkaWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgob2JqLnR5cGU/LmluY2x1ZGVzKCdhdWRpbycpKSA/ICdhdWRpbycgOiAndmlkZW8nKTtcblxuICAgIFx0XHRcdFx0XHRhZGRBdHRyaWJ1dGVzKG1lZGlhRWxlbWVudCwge1xuICAgIFx0XHRcdFx0XHRcdGNvbnRyb2xzOiB0cnVlLFxuICAgIFx0XHRcdFx0XHRcdGF1dG9wbGF5OiB0cnVlLFxuICAgIFx0XHRcdFx0XHRcdHBsYXlzaW5saW5lOiB0cnVlLFxuICAgIFx0XHRcdFx0XHRcdHRhYmluZGV4OiAnMCdcbiAgICBcdFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdFx0YWRkQXR0cmlidXRlcyhtZWRpYUVsZW1lbnQsIGFjdGl2ZUl0ZW0uYXR0cik7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdC8vIGFkZCBzb3VyY2VzIC8gdHJhY2tzIHRvIG1lZGlhIGVsZW1lbnRcbiAgICBcdFx0XHRcdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgXHRcdFx0XHRhZGRBdHRyaWJ1dGVzKGVsLCBvYmopO1xuXG4gICAgXHRcdFx0XHRpZiAodGFnID09ICdzb3VyY2UnKSB7XG4gICAgXHRcdFx0XHRcdGVsLm9uRXJyb3IgPSBlcnJvciA9PiBvcHRzLm9uRXJyb3I/Lihjb250YWluZXIsIGFjdGl2ZUl0ZW0sIGVycm9yKTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0bWVkaWFFbGVtZW50LmFwcGVuZChlbCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9O1xuXG4gICAgXHRcdGFwcGVuZFRvVmlkZW8oJ3NvdXJjZScsIGFjdGl2ZUl0ZW0uc291cmNlcyk7XG4gICAgXHRcdGFwcGVuZFRvVmlkZW8oJ3RyYWNrJywgYWN0aXZlSXRlbS50cmFja3MgfHwgW10pO1xuICAgIFx0XHRtZWRpYUVsZW1lbnQub25jYW5wbGF5ID0gKCkgPT4gJCRpbnZhbGlkYXRlKDAsIGxvYWRlZCA9IHRydWUpO1xuICAgIFx0XHRub2RlLmFwcGVuZChtZWRpYUVsZW1lbnQpO1xuICAgIFx0fTtcblxuICAgIFx0XG5cbiAgICBcdHJldHVybiBbbG9hZGVkLCBkaW1lbnNpb25zLCBhY3RpdmVJdGVtLCBvbk1vdW50LCBwcm9wc107XG4gICAgfVxuXG4gICAgY2xhc3MgVmlkZW8gZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIFx0XHRzdXBlcigpO1xuICAgIFx0XHRpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDEsIGNyZWF0ZV9mcmFnbWVudCQxLCBub3RfZXF1YWwsIHsgcHJvcHM6IDQgfSk7XG4gICAgXHR9XG4gICAgfVxuXG4gICAgLyogc3JjL2JpZ2dlci1waWN0dXJlLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjU1LjEgKi9cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9jayhjdHgpIHtcbiAgICBcdGxldCBkaXYyO1xuICAgIFx0bGV0IGRpdjA7XG4gICAgXHRsZXQgZGl2MF9vdXRybztcbiAgICBcdGxldCBwcmV2aW91c19rZXkgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaTtcbiAgICBcdGxldCBkaXYxO1xuICAgIFx0bGV0IGJ1dHRvbjtcbiAgICBcdGxldCBkaXYxX291dHJvO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuICAgIFx0bGV0IGtleV9ibG9jayA9IGNyZWF0ZV9rZXlfYmxvY2soY3R4KTtcbiAgICBcdGxldCBpZl9ibG9jayA9IC8qaXRlbXMqLyBjdHhbMF0ubGVuZ3RoID4gMSAmJiBjcmVhdGVfaWZfYmxvY2tfMShjdHgpO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdjIgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGRpdjAgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGtleV9ibG9jay5jKCk7XG4gICAgXHRcdFx0ZGl2MSA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YnV0dG9uID0gZWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbiwgXCJjbGFzc1wiLCBcImJwLXhcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24sIFwidGl0bGVcIiwgXCJDbG9zZVwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbiwgXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XG4gICAgXHRcdFx0YXR0cihkaXYxLCBcImNsYXNzXCIsIFwiYnAtY29udHJvbHNcIik7XG4gICAgXHRcdFx0YXR0cihkaXYyLCBcImNsYXNzXCIsIFwiYnAtd3JhcFwiKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC16b29tZWRcIiwgLyokem9vbWVkKi8gY3R4WzEwXSk7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtaW5saW5lXCIsIC8qaW5saW5lKi8gY3R4WzhdKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1zbWFsbFwiLCAvKnNtYWxsU2NyZWVuKi8gY3R4WzddKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1ub2Nsb3NlXCIsIC8qb3B0cyovIGN0eFs1XS5ub0Nsb3NlKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdjIsIGFuY2hvcik7XG4gICAgXHRcdFx0YXBwZW5kKGRpdjIsIGRpdjApO1xuICAgIFx0XHRcdGtleV9ibG9jay5tKGRpdjIsIG51bGwpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYyLCBkaXYxKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2MSwgYnV0dG9uKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLm0oZGl2MSwgbnVsbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGxpc3RlbihidXR0b24sIFwiY2xpY2tcIiwgLypjbG9zZSovIGN0eFsxXSksXG4gICAgXHRcdFx0XHRcdGFjdGlvbl9kZXN0cm95ZXIoLypjb250YWluZXJBY3Rpb25zKi8gY3R4WzE0XS5jYWxsKG51bGwsIGRpdjIpKVxuICAgIFx0XHRcdFx0XTtcblxuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKmFjdGl2ZUl0ZW0qLyA2NCAmJiBub3RfZXF1YWwocHJldmlvdXNfa2V5LCBwcmV2aW91c19rZXkgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaSkpIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoa2V5X2Jsb2NrLCAxLCAxLCBub29wKTtcbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdFx0a2V5X2Jsb2NrID0gY3JlYXRlX2tleV9ibG9jayhjdHgpO1xuICAgIFx0XHRcdFx0a2V5X2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRcdHRyYW5zaXRpb25faW4oa2V5X2Jsb2NrLCAxKTtcbiAgICBcdFx0XHRcdGtleV9ibG9jay5tKGRpdjIsIGRpdjEpO1xuICAgIFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRrZXlfYmxvY2sucChjdHgsIGRpcnR5KTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoLyppdGVtcyovIGN0eFswXS5sZW5ndGggPiAxKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2spIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sucChjdHgsIGRpcnR5KTtcbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrID0gY3JlYXRlX2lmX2Jsb2NrXzEoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2suYygpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5tKGRpdjEsIG51bGwpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2spIHtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrLmQoMSk7XG4gICAgXHRcdFx0XHRpZl9ibG9jayA9IG51bGw7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyokem9vbWVkKi8gMTAyNCkge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtem9vbWVkXCIsIC8qJHpvb21lZCovIGN0eFsxMF0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qaW5saW5lKi8gMjU2KSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1pbmxpbmVcIiwgLyppbmxpbmUqLyBjdHhbOF0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qc21hbGxTY3JlZW4qLyAxMjgpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLXNtYWxsXCIsIC8qc21hbGxTY3JlZW4qLyBjdHhbN10pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qb3B0cyovIDMyKSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1ub2Nsb3NlXCIsIC8qb3B0cyovIGN0eFs1XS5ub0Nsb3NlKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdGlmIChkaXYwX291dHJvKSBkaXYwX291dHJvLmVuZCgxKTtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGtleV9ibG9jayk7XG4gICAgXHRcdFx0aWYgKGRpdjFfb3V0cm8pIGRpdjFfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGxvY2FsKSB7XG4gICAgXHRcdFx0XHRkaXYwX291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGRpdjAsIGZseSwgeyBkdXJhdGlvbjogNDgwIH0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGtleV9ibG9jayk7XG5cbiAgICBcdFx0XHRpZiAobG9jYWwpIHtcbiAgICBcdFx0XHRcdGRpdjFfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oZGl2MSwgZmx5LCB7fSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYyKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGRpdjBfb3V0cm8pIGRpdjBfb3V0cm8uZW5kKCk7XG4gICAgXHRcdFx0a2V5X2Jsb2NrLmQoZGV0YWNoaW5nKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmQoKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGRpdjFfb3V0cm8pIGRpdjFfb3V0cm8uZW5kKCk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxMToxOTkpIHs6ZWxzZX1cbiAgICBmdW5jdGlvbiBjcmVhdGVfZWxzZV9ibG9jayhjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgcmF3X3ZhbHVlID0gKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5odG1sID8/IC8qYWN0aXZlSXRlbSovIGN0eFs2XS5lbGVtZW50Lm91dGVySFRNTCkgKyBcIlwiO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1odG1sXCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGRpdi5pbm5lckhUTUwgPSByYXdfdmFsdWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qYWN0aXZlSXRlbSovIDY0ICYmIHJhd192YWx1ZSAhPT0gKHJhd192YWx1ZSA9ICgvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaHRtbCA/PyAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uZWxlbWVudC5vdXRlckhUTUwpICsgXCJcIikpIGRpdi5pbm5lckhUTUwgPSByYXdfdmFsdWU7XHRcdH0sXG4gICAgXHRcdGk6IG5vb3AsXG4gICAgXHRcdG86IG5vb3AsXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxMToxNjUpIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja181KGN0eCkge1xuICAgIFx0bGV0IGlmcmFtZTtcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHRpZnJhbWUgPSBuZXcgSWZyYW1lKHtcbiAgICBcdFx0XHRwcm9wczogeyBwcm9wczogLypnZXRDaGlsZFByb3BzKi8gY3R4WzEzXSgpIH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0Y3JlYXRlX2NvbXBvbmVudChpZnJhbWUuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGlmcmFtZSwgdGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwOiBub29wLFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmcmFtZS4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZyYW1lLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGRlc3Ryb3lfY29tcG9uZW50KGlmcmFtZSwgZGV0YWNoaW5nKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzExOjEwNCkgXG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzQoY3R4KSB7XG4gICAgXHRsZXQgdmlkZW87XG4gICAgXHRsZXQgY3VycmVudDtcblxuICAgIFx0dmlkZW8gPSBuZXcgVmlkZW8oe1xuICAgIFx0XHRcdHByb3BzOiB7IHByb3BzOiAvKmdldENoaWxkUHJvcHMqLyBjdHhbMTNdKCkgfVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KHZpZGVvLiQkLmZyYWdtZW50KTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdG1vdW50X2NvbXBvbmVudCh2aWRlbywgdGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwOiBub29wLFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKHZpZGVvLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dCh2aWRlby4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudCh2aWRlbywgZGV0YWNoaW5nKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzExOjQpIHsjaWYgYWN0aXZlSXRlbS5pbWd9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzMoY3R4KSB7XG4gICAgXHRsZXQgaW1hZ2VpdGVtO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdGltYWdlaXRlbSA9IG5ldyBJbWFnZSh7XG4gICAgXHRcdFx0cHJvcHM6IHtcbiAgICBcdFx0XHRcdHByb3BzOiAvKmdldENoaWxkUHJvcHMqLyBjdHhbMTNdKCksXG4gICAgXHRcdFx0XHRzbWFsbFNjcmVlbjogLypzbWFsbFNjcmVlbiovIGN0eFs3XVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0Y3JlYXRlX2NvbXBvbmVudChpbWFnZWl0ZW0uJCQuZnJhZ21lbnQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGltYWdlaXRlbSwgdGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRjb25zdCBpbWFnZWl0ZW1fY2hhbmdlcyA9IHt9O1xuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qc21hbGxTY3JlZW4qLyAxMjgpIGltYWdlaXRlbV9jaGFuZ2VzLnNtYWxsU2NyZWVuID0gLypzbWFsbFNjcmVlbiovIGN0eFs3XTtcbiAgICBcdFx0XHRpbWFnZWl0ZW0uJHNldChpbWFnZWl0ZW1fY2hhbmdlcyk7XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaW1hZ2VpdGVtLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpbWFnZWl0ZW0uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQoaW1hZ2VpdGVtLCBkZXRhY2hpbmcpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTE6Mjk5KSB7I2lmIGFjdGl2ZUl0ZW0uY2FwdGlvbn1cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMihjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgcmF3X3ZhbHVlID0gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmNhcHRpb24gKyBcIlwiO1xuICAgIFx0bGV0IGRpdl9vdXRybztcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1jYXBcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0ZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKCghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qYWN0aXZlSXRlbSovIDY0KSAmJiByYXdfdmFsdWUgIT09IChyYXdfdmFsdWUgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uY2FwdGlvbiArIFwiXCIpKSBkaXYuaW5uZXJIVE1MID0gcmF3X3ZhbHVlO1x0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHRpZiAoZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0ZGl2X291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGRpdiwgZmx5LCB7IGR1cmF0aW9uOiAyMDAgfSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcgJiYgZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKCk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMwMDo0MykgeyNrZXkgYWN0aXZlSXRlbS5pfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9rZXlfYmxvY2soY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleDtcbiAgICBcdGxldCBpZl9ibG9jazA7XG4gICAgXHRsZXQgZGl2X2ludHJvO1xuICAgIFx0bGV0IGRpdl9vdXRybztcbiAgICBcdGxldCBpZl9ibG9jazFfYW5jaG9yO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuICAgIFx0Y29uc3QgaWZfYmxvY2tfY3JlYXRvcnMgPSBbY3JlYXRlX2lmX2Jsb2NrXzMsIGNyZWF0ZV9pZl9ibG9ja180LCBjcmVhdGVfaWZfYmxvY2tfNSwgY3JlYXRlX2Vsc2VfYmxvY2tdO1xuICAgIFx0Y29uc3QgaWZfYmxvY2tzID0gW107XG5cbiAgICBcdGZ1bmN0aW9uIHNlbGVjdF9ibG9ja190eXBlKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0aWYgKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5pbWcpIHJldHVybiAwO1xuICAgIFx0XHRpZiAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLnNvdXJjZXMpIHJldHVybiAxO1xuICAgIFx0XHRpZiAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLmlmcmFtZSkgcmV0dXJuIDI7XG4gICAgXHRcdHJldHVybiAzO1xuICAgIFx0fVxuXG4gICAgXHRjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXggPSBzZWxlY3RfYmxvY2tfdHlwZShjdHgpO1xuICAgIFx0aWZfYmxvY2swID0gaWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0gPSBpZl9ibG9ja19jcmVhdG9yc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdKGN0eCk7XG4gICAgXHRsZXQgaWZfYmxvY2sxID0gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmNhcHRpb24gJiYgY3JlYXRlX2lmX2Jsb2NrXzIoY3R4KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRpZl9ibG9jazFfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWlubmVyXCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdLm0oZGl2LCBudWxsKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaWZfYmxvY2sxX2FuY2hvciwgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IFtcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdiwgXCJwb2ludGVyZG93blwiLCAvKnBvaW50ZXJkb3duX2hhbmRsZXIqLyBjdHhbMjBdKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdiwgXCJwb2ludGVydXBcIiwgLypwb2ludGVydXBfaGFuZGxlciovIGN0eFsyMV0pXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGxldCBwcmV2aW91c19ibG9ja19pbmRleCA9IGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleDtcbiAgICBcdFx0XHRjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXggPSBzZWxlY3RfYmxvY2tfdHlwZShjdHgpO1xuXG4gICAgXHRcdFx0aWYgKGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleCA9PT0gcHJldmlvdXNfYmxvY2tfaW5kZXgpIHtcbiAgICBcdFx0XHRcdGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdLnAoY3R4LCBkaXJ0eSk7XG4gICAgXHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9ja3NbcHJldmlvdXNfYmxvY2tfaW5kZXhdLCAxLCAxLCAoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2Nrc1twcmV2aW91c19ibG9ja19pbmRleF0gPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdFx0aWZfYmxvY2swID0gaWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF07XG5cbiAgICBcdFx0XHRcdGlmICghaWZfYmxvY2swKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMCA9IGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdID0gaWZfYmxvY2tfY3JlYXRvcnNbY3VycmVudF9ibG9ja190eXBlX2luZGV4XShjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAuYygpO1xuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLnAoY3R4LCBkaXJ0eSk7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrMC5tKGRpdiwgbnVsbCk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5jYXB0aW9uKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2sxKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5wKGN0eCwgZGlydHkpO1xuXG4gICAgXHRcdFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qYWN0aXZlSXRlbSovIDY0KSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBjcmVhdGVfaWZfYmxvY2tfMihjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5tKGlmX2Jsb2NrMV9hbmNob3IucGFyZW50Tm9kZSwgaWZfYmxvY2sxX2FuY2hvcik7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazEsIDEsIDEsICgpID0+IHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxID0gbnVsbDtcbiAgICBcdFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0XHRjaGVja19vdXRyb3MoKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swKTtcblxuICAgIFx0XHRcdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgIFx0XHRcdFx0aWYgKGRpdl9vdXRybykgZGl2X291dHJvLmVuZCgxKTtcbiAgICBcdFx0XHRcdGRpdl9pbnRybyA9IGNyZWF0ZV9pbl90cmFuc2l0aW9uKGRpdiwgLyptZWRpYVRyYW5zaXRpb24qLyBjdHhbMTJdLCB0cnVlKTtcbiAgICBcdFx0XHRcdGRpdl9pbnRyby5zdGFydCgpO1xuICAgIFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swKTtcbiAgICBcdFx0XHRpZiAoZGl2X2ludHJvKSBkaXZfaW50cm8uaW52YWxpZGF0ZSgpO1xuICAgIFx0XHRcdGRpdl9vdXRybyA9IGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihkaXYsIC8qbWVkaWFUcmFuc2l0aW9uKi8gY3R4WzEyXSwgZmFsc2UpO1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHRcdGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdLmQoKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGRpdl9vdXRybykgZGl2X291dHJvLmVuZCgpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5kKGRldGFjaGluZyk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGlmX2Jsb2NrMV9hbmNob3IpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTE6NTU0KSB7I2lmIGl0ZW1zLmxlbmd0aCA+IDF9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzEoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IHJhd192YWx1ZSA9IGAkey8qcG9zaXRpb24qLyBjdHhbNF0gKyAxfSAvICR7LyppdGVtcyovIGN0eFswXS5sZW5ndGh9YCArIFwiXCI7XG4gICAgXHRsZXQgYnV0dG9uMDtcbiAgICBcdGxldCBidXR0b24xO1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGJ1dHRvbjAgPSBlbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFx0XHRcdGJ1dHRvbjEgPSBlbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtY291bnRcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24wLCBcImNsYXNzXCIsIFwiYnAtcHJldlwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjAsIFwidGl0bGVcIiwgXCJQcmV2aW91c1wiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjAsIFwiYXJpYS1sYWJlbFwiLCBcIlByZXZpb3VzXCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uMSwgXCJjbGFzc1wiLCBcImJwLW5leHRcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24xLCBcInRpdGxlXCIsIFwiTmV4dFwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjEsIFwiYXJpYS1sYWJlbFwiLCBcIk5leHRcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0ZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBidXR0b24wLCBhbmNob3IpO1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGJ1dHRvbjEsIGFuY2hvcik7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGxpc3RlbihidXR0b24wLCBcImNsaWNrXCIsIC8qcHJldiovIGN0eFsyXSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihidXR0b24xLCBcImNsaWNrXCIsIC8qbmV4dCovIGN0eFszXSlcbiAgICBcdFx0XHRcdF07XG5cbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLypwb3NpdGlvbiwgaXRlbXMqLyAxNyAmJiByYXdfdmFsdWUgIT09IChyYXdfdmFsdWUgPSBgJHsvKnBvc2l0aW9uKi8gY3R4WzRdICsgMX0gLyAkey8qaXRlbXMqLyBjdHhbMF0ubGVuZ3RofWAgKyBcIlwiKSkgZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goYnV0dG9uMCk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGJ1dHRvbjEpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudChjdHgpIHtcbiAgICBcdGxldCBpZl9ibG9ja19hbmNob3I7XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBpZl9ibG9jayA9IC8qaXRlbXMqLyBjdHhbMF0gJiYgY3JlYXRlX2lmX2Jsb2NrKGN0eCk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5jKCk7XG4gICAgXHRcdFx0aWZfYmxvY2tfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2subSh0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaWZfYmxvY2tfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoLyppdGVtcyovIGN0eFswXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5WzBdICYgLyppdGVtcyovIDEpIHtcbiAgICBcdFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrLCAxKTtcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sgPSBjcmVhdGVfaWZfYmxvY2soY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2suYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrLCAxKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2subShpZl9ibG9ja19hbmNob3IucGFyZW50Tm9kZSwgaWZfYmxvY2tfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrKSB7XG4gICAgXHRcdFx0XHRncm91cF9vdXRyb3MoKTtcblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jayk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jayk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2suZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChpZl9ibG9ja19hbmNob3IpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbmNlKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgJHpvb21lZDtcbiAgICBcdGxldCB7IGl0ZW1zID0gdW5kZWZpbmVkIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IHsgdGFyZ2V0ID0gdW5kZWZpbmVkIH0gPSAkJHByb3BzO1xuICAgIFx0Y29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIFx0LyoqIGluZGV4IG9mIGN1cnJlbnQgYWN0aXZlIGl0ZW0gKi9cbiAgICBcdGxldCBwb3NpdGlvbjtcblxuICAgIFx0LyoqIG9wdGlvbnMgcGFzc2VkIHZpYSBvcGVuIG1ldGhvZCAqL1xuICAgIFx0bGV0IG9wdHM7XG5cbiAgICBcdC8qKiBib29sIHRyYWNrcyBvcGVuIHN0YXRlICovXG4gICAgXHRsZXQgaXNPcGVuO1xuXG4gICAgXHQvKiogZG9tIGVsZW1lbnQgdG8gcmVzdG9yZSBmb2N1cyB0byBvbiBjbG9zZSAqL1xuICAgIFx0bGV0IGZvY3VzVHJpZ2dlcjtcblxuICAgIFx0LyoqIGJvb2wgdHJ1ZSBpZiBjb250YWluZXIgd2lkdGggPCA3NjkgKi9cbiAgICBcdGxldCBzbWFsbFNjcmVlbjtcblxuICAgIFx0LyoqIGJvb2wgdmFsdWUgb2YgaW5saW5lIG9wdGlvbiBwYXNzZWQgaW4gb3BlbiBtZXRob2QgKi9cbiAgICBcdGxldCBpbmxpbmU7XG5cbiAgICBcdC8qKiB3aGVuIHBvc2l0aW9uIGlzIHNldCAqL1xuICAgIFx0bGV0IG1vdmVtZW50O1xuXG4gICAgXHQvKiogc3RvcmVzIHRhcmdldCBvbiBwb2ludGVyZG93biAocmVmIGZvciBvdmVybGF5IGNsb3NlKSAqL1xuICAgIFx0bGV0IGNsaWNrZWRFbDtcblxuICAgIFx0LyoqIGFjdGl2ZSBpdGVtIG9iamVjdCAqL1xuICAgIFx0bGV0IGFjdGl2ZUl0ZW07XG5cbiAgICBcdC8qKiByZXR1cm5zIHRydWUgaWYgYGFjdGl2ZUl0ZW1gIGlzIGh0bWwgKi9cbiAgICBcdGNvbnN0IGFjdGl2ZUl0ZW1Jc0h0bWwgPSAoKSA9PiAhYWN0aXZlSXRlbS5pbWcgJiYgIWFjdGl2ZUl0ZW0uc291cmNlcyAmJiAhYWN0aXZlSXRlbS5pZnJhbWU7XG5cbiAgICBcdC8qKiBmdW5jdGlvbiBzZXQgYnkgY2hpbGQgY29tcG9uZW50IHRvIHJ1biB3aGVuIGNvbnRhaW5lciByZXNpemVkICovXG4gICAgXHRsZXQgcmVzaXplRnVuYztcblxuICAgIFx0LyoqIHVzZWQgYnkgY2hpbGQgY29tcG9uZW50cyB0byBzZXQgcmVzaXplIGZ1bmN0aW9uICovXG4gICAgXHRjb25zdCBzZXRSZXNpemVGdW5jID0gZm4gPT4gcmVzaXplRnVuYyA9IGZuO1xuXG4gICAgXHQvKiogY29udGFpbmVyIGVsZW1lbnQgKGVsKSAvIHdpZHRoICh3KSAvIGhlaWdodCAoaCkgKi9cbiAgICBcdGNvbnN0IGNvbnRhaW5lciA9IHt9O1xuXG4gICAgXHQvLyAvKiogdHJ1ZSBpZiBpbWFnZSBpcyBjdXJyZW50bHkgem9vbWVkIHBhc3Qgc3RhcnRpbmcgc2l6ZSAqL1xuICAgIFx0Y29uc3Qgem9vbWVkID0gd3JpdGFibGUoMCk7XG5cbiAgICBcdGNvbXBvbmVudF9zdWJzY3JpYmUoJCRzZWxmLCB6b29tZWQsIHZhbHVlID0+ICQkaW52YWxpZGF0ZSgxMCwgJHpvb21lZCA9IHZhbHVlKSk7XG5cbiAgICBcdGNvbnN0IG9wZW4gPSBvcHRpb25zID0+IHtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDUsIG9wdHMgPSBvcHRpb25zKTtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDgsIGlubGluZSA9IG9wdHMuaW5saW5lKTtcblxuICAgIFx0XHQvLyBhZGQgY2xhc3MgdG8gaGlkZSBzY3JvbGwgaWYgbm90IGlubGluZSBnYWxsZXJ5XG4gICAgXHRcdGlmICghaW5saW5lICYmIGh0bWwuc2Nyb2xsSGVpZ2h0ID4gaHRtbC5jbGllbnRIZWlnaHQpIHtcbiAgICBcdFx0XHRodG1sLmNsYXNzTGlzdC5hZGQoJ2JwLWxvY2snKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHVwZGF0ZSB0cmlnZ2VyIGVsZW1lbnQgdG8gcmVzdG9yZSBmb2N1c1xuICAgIFx0XHRmb2N1c1RyaWdnZXIgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgXHRcdCQkaW52YWxpZGF0ZSgxOSwgY29udGFpbmVyLncgPSB0YXJnZXQub2Zmc2V0V2lkdGgsIGNvbnRhaW5lcik7XG5cbiAgICBcdFx0JCRpbnZhbGlkYXRlKFxuICAgIFx0XHRcdDE5LFxuICAgIFx0XHRcdGNvbnRhaW5lci5oID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5XG4gICAgXHRcdFx0PyBnbG9iYWxUaGlzLmlubmVySGVpZ2h0XG4gICAgXHRcdFx0OiB0YXJnZXQuY2xpZW50SGVpZ2h0LFxuICAgIFx0XHRcdGNvbnRhaW5lclxuICAgIFx0XHQpO1xuXG4gICAgXHRcdCQkaW52YWxpZGF0ZSg3LCBzbWFsbFNjcmVlbiA9IGNvbnRhaW5lci53IDwgNzY5KTtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDQsIHBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCAwKTtcblxuICAgIFx0XHQvLyBzZXQgaXRlbXNcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDAsIGl0ZW1zID0gW10pO1xuXG4gICAgXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgKG9wdHMuaXRlbXMubGVuZ3RoIHx8IDEpOyBpKyspIHtcbiAgICBcdFx0XHRsZXQgaXRlbSA9IG9wdHMuaXRlbXNbaV0gfHwgb3B0cy5pdGVtcztcblxuICAgIFx0XHRcdGlmICgnZGF0YXNldCcgaW4gaXRlbSkge1xuICAgIFx0XHRcdFx0aXRlbXMucHVzaCh7IGVsZW1lbnQ6IGl0ZW0sIGksIC4uLml0ZW0uZGF0YXNldCB9KTtcbiAgICBcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0aXRlbS5pID0gaTtcbiAgICBcdFx0XHRcdGl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICBcdFx0XHRcdC8vIHNldCBpdGVtIHRvIGVsZW1lbnQgZm9yIHBvc2l0aW9uIGNoZWNrIGJlbG93XG4gICAgXHRcdFx0XHRpdGVtID0gaXRlbS5lbGVtZW50O1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdC8vIG92ZXJyaWRlIGdhbGxlcnkgcG9zaXRpb24gaWYgbmVlZGVkXG4gICAgXHRcdFx0aWYgKG9wdHMuZWwgJiYgb3B0cy5lbCA9PT0gaXRlbSkge1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvc2l0aW9uID0gaSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICBcdFx0b3B0cy5vbkNsb3NlPy4oY29udGFpbmVyLmVsLCBhY3RpdmVJdGVtKTtcbiAgICBcdFx0Y2xvc2luZy5zZXQodHJ1ZSk7XG4gICAgXHRcdCQkaW52YWxpZGF0ZSgwLCBpdGVtcyA9IG51bGwpO1xuXG4gICAgXHRcdC8vIHJlc3RvcmUgZm9jdXMgdG8gdHJpZ2dlciBlbGVtZW50XG4gICAgXHRcdGZvY3VzVHJpZ2dlcj8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgcHJldiA9ICgpID0+IHNldFBvc2l0aW9uKHBvc2l0aW9uIC0gMSk7XG4gICAgXHRjb25zdCBuZXh0ID0gKCkgPT4gc2V0UG9zaXRpb24ocG9zaXRpb24gKyAxKTtcblxuICAgIFx0Y29uc3Qgc2V0UG9zaXRpb24gPSBpbmRleCA9PiB7XG4gICAgXHRcdG1vdmVtZW50ID0gaW5kZXggLSBwb3NpdGlvbjtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDQsIHBvc2l0aW9uID0gZ2V0TmV4dFBvc2l0aW9uKGluZGV4KSk7XG4gICAgXHR9O1xuXG4gICAgXHQvKipcbiAgICAgKiByZXR1cm5zIG5leHQgZ2FsbGVyeSBwb3NpdGlvbiAobG9vcGVkIGlmIG5lY2Nlc3NhcnkpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAgICovXG4gICAgXHRjb25zdCBnZXROZXh0UG9zaXRpb24gPSBpbmRleCA9PiAoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgaXRlbXMubGVuZ3RoO1xuXG4gICAgXHRjb25zdCBvbktleWRvd24gPSBlID0+IHtcbiAgICBcdFx0Y29uc3QgeyBrZXksIHNoaWZ0S2V5IH0gPSBlO1xuXG4gICAgXHRcdGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgXHRcdFx0IW9wdHMubm9DbG9zZSAmJiBjbG9zZSgpO1xuICAgIFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgXHRcdFx0bmV4dCgpO1xuICAgIFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICBcdFx0XHRwcmV2KCk7XG4gICAgXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnVGFiJykge1xuICAgIFx0XHRcdC8vIHRyYXAgZm9jdXMgb24gdGFiIHByZXNzXG4gICAgXHRcdFx0Y29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudDtcblxuICAgIFx0XHRcdC8vIGFsbG93IGJyb3dzZXIgdG8gaGFuZGxlIHRhYiBpbnRvIHZpZGVvIGNvbnRyb2xzIG9ubHlcbiAgICBcdFx0XHRpZiAoc2hpZnRLZXkgfHwgIWFjdGl2ZUVsZW1lbnQuY29udHJvbHMpIHtcbiAgICBcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcdFx0XHRcdGNvbnN0IHsgZm9jdXNXcmFwID0gY29udGFpbmVyLmVsIH0gPSBvcHRzO1xuICAgIFx0XHRcdFx0Y29uc3QgdGFiYmFibGUgPSBbLi4uZm9jdXNXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKV0uZmlsdGVyKG5vZGUgPT4gbm9kZS50YWJJbmRleCA+PSAwKTtcbiAgICBcdFx0XHRcdGxldCBpbmRleCA9IHRhYmJhYmxlLmluZGV4T2YoYWN0aXZlRWxlbWVudCk7XG4gICAgXHRcdFx0XHRpbmRleCArPSB0YWJiYWJsZS5sZW5ndGggKyAoc2hpZnRLZXkgPyAtMSA6IDEpO1xuICAgIFx0XHRcdFx0dGFiYmFibGVbaW5kZXggJSB0YWJiYWJsZS5sZW5ndGhdLmZvY3VzKCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHQvKipcbiAgICAgKiBjYWxjdWxhdGUgZGltZW5zaW9ucyBvZiBoZWlnaHQgLyB3aWR0aCByZXNpemVkIHRvIGZpdCB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gb2JqZWN0IHdpdGggaGVpZ2h0IC8gd2lkdGggcHJvcGVydGllc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX0gW3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyXVxuICAgICAqL1xuICAgIFx0Y29uc3QgY2FsY3VsYXRlRGltZW5zaW9ucyA9ICh7IHdpZHRoID0gMTkyMCwgaGVpZ2h0ID0gMTA4MCB9KSA9PiB7XG4gICAgXHRcdGNvbnN0IHsgc2NhbGUgPSAwLjk5IH0gPSBvcHRzO1xuICAgIFx0XHRjb25zdCByYXRpbyA9IE1hdGgubWluKDEsIGNvbnRhaW5lci53IC8gd2lkdGggKiBzY2FsZSwgY29udGFpbmVyLmggLyBoZWlnaHQgKiBzY2FsZSk7XG5cbiAgICBcdFx0Ly8gcm91bmQgbnVtYmVyIHNvIHdlIGRvbid0IHVzZSBhIGZsb2F0IGFzIHRoZSBzaXplcyBhdHRyaWJ1dGVcbiAgICBcdFx0cmV0dXJuIFtNYXRoLnJvdW5kKHdpZHRoICogcmF0aW8pLCBNYXRoLnJvdW5kKGhlaWdodCAqIHJhdGlvKV07XG4gICAgXHR9O1xuXG4gICAgXHQvKiogcHJlbG9hZHMgaW1hZ2VzIGZvciBwcmV2aW91cyBhbmQgbmV4dCBpdGVtcyBpbiBnYWxsZXJ5ICovXG4gICAgXHRjb25zdCBwcmVsb2FkTmV4dCA9ICgpID0+IHtcbiAgICBcdFx0aWYgKGl0ZW1zKSB7XG4gICAgXHRcdFx0Y29uc3QgbmV4dEl0ZW0gPSBpdGVtc1tnZXROZXh0UG9zaXRpb24ocG9zaXRpb24gKyAxKV07XG4gICAgXHRcdFx0Y29uc3QgcHJldkl0ZW0gPSBpdGVtc1tnZXROZXh0UG9zaXRpb24ocG9zaXRpb24gLSAxKV07XG4gICAgXHRcdFx0IW5leHRJdGVtLnByZWxvYWQgJiYgbG9hZEltYWdlKG5leHRJdGVtKTtcbiAgICBcdFx0XHQhcHJldkl0ZW0ucHJlbG9hZCAmJiBsb2FkSW1hZ2UocHJldkl0ZW0pO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHQvKiogbG9hZHMgLyBkZWNvZGVzIGltYWdlIGZvciBpdGVtICovXG4gICAgXHRjb25zdCBsb2FkSW1hZ2UgPSBpdGVtID0+IHtcbiAgICBcdFx0aWYgKGl0ZW0uaW1nKSB7XG4gICAgXHRcdFx0Y29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBcdFx0XHRpbWFnZS5zaXplcyA9IG9wdHMuc2l6ZXMgfHwgYCR7Y2FsY3VsYXRlRGltZW5zaW9ucyhpdGVtKVswXX1weGA7XG4gICAgXHRcdFx0aW1hZ2Uuc3Jjc2V0ID0gaXRlbS5pbWc7XG4gICAgXHRcdFx0aXRlbS5wcmVsb2FkID0gdHJ1ZTtcblxuICAgIFx0XHRcdHJldHVybiBpbWFnZS5kZWNvZGUoKS5jYXRjaChlcnJvciA9PiB7XG4gICAgXHRcdFx0XHRcbiAgICBcdFx0XHR9KTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0LyoqIHN2ZWx0ZSB0cmFuc2l0aW9uIHRvIGNvbnRyb2wgb3BlbmluZyAvIGNoYW5naW5nICovXG4gICAgXHRjb25zdCBtZWRpYVRyYW5zaXRpb24gPSAobm9kZSwgaXNFbnRlcmluZykgPT4ge1xuICAgIFx0XHRpZiAoIWlzT3BlbiB8fCAhaXRlbXMpIHtcbiAgICBcdFx0XHQvLyBlbnRyYW5jZSAvIGV4aXQgdHJhbnNpdGlvblxuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSgxOCwgaXNPcGVuID0gaXNFbnRlcmluZyk7XG5cbiAgICBcdFx0XHRyZXR1cm4gb3B0cy5pbnRyb1xuICAgIFx0XHRcdD8gZmx5KG5vZGUsIHsgeTogaXNFbnRlcmluZyA/IDEwIDogLTEwIH0pXG4gICAgXHRcdFx0OiBzY2FsZUluKG5vZGUpO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gZm9yd2FyZCAvIGJhY2t3YXJkIHRyYW5zaXRpb25cbiAgICBcdFx0cmV0dXJuIGZseShub2RlLCB7XG4gICAgXHRcdFx0eDogKG1vdmVtZW50ID4gMCA/IDIwIDogLTIwKSAqIChpc0VudGVyaW5nID8gMSA6IC0xKSxcbiAgICBcdFx0XHRkdXJhdGlvbjogMjUwXG4gICAgXHRcdH0pO1xuICAgIFx0fTtcblxuICAgIFx0LyoqIGN1c3RvbSBzdmVsdGUgdHJhbnNpdGlvbiBmb3IgZW50cmFuY2Ugem9vbSAqL1xuICAgIFx0Y29uc3Qgc2NhbGVJbiA9IG5vZGUgPT4ge1xuICAgIFx0XHRsZXQgZGltZW5zaW9ucztcblxuICAgIFx0XHRpZiAoYWN0aXZlSXRlbUlzSHRtbCgpKSB7XG4gICAgXHRcdFx0Y29uc3QgYnBJdGVtID0gbm9kZS5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgXHRcdFx0ZGltZW5zaW9ucyA9IFticEl0ZW0uY2xpZW50V2lkdGgsIGJwSXRlbS5jbGllbnRIZWlnaHRdO1xuICAgIFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdGRpbWVuc2lvbnMgPSBjYWxjdWxhdGVEaW1lbnNpb25zKGFjdGl2ZUl0ZW0pO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gcmVjdCBpcyBib3VuZGluZyByZWN0IG9mIHRyaWdnZXIgZWxlbWVudFxuICAgIFx0XHRjb25zdCByZWN0ID0gKGFjdGl2ZUl0ZW0uZWxlbWVudCB8fCBmb2N1c1RyaWdnZXIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgXHRcdGNvbnN0IGxlZnRPZmZzZXQgPSByZWN0LmxlZnQgLSAoY29udGFpbmVyLncgLSByZWN0LndpZHRoKSAvIDI7XG4gICAgXHRcdGNvbnN0IGNlbnRlclRvcCA9IHJlY3QudG9wIC0gKGNvbnRhaW5lci5oIC0gcmVjdC5oZWlnaHQpIC8gMjtcbiAgICBcdFx0Y29uc3Qgc2NhbGVXaWR0aCA9IHJlY3Qud2lkdGggLyBkaW1lbnNpb25zWzBdO1xuICAgIFx0XHRjb25zdCBzY2FsZUhlaWdodCA9IHJlY3QuaGVpZ2h0IC8gZGltZW5zaW9uc1sxXTtcblxuICAgIFx0XHRyZXR1cm4ge1xuICAgIFx0XHRcdGR1cmF0aW9uOiA0ODAsXG4gICAgXHRcdFx0ZWFzaW5nOiBjdWJpY091dCxcbiAgICBcdFx0XHRjc3M6ICh0LCB1KSA9PiB7XG4gICAgXHRcdFx0XHRyZXR1cm4gYHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgke2xlZnRPZmZzZXQgKiB1fXB4LCAke2NlbnRlclRvcCAqIHV9cHgsIDApIHNjYWxlM2QoJHtzY2FsZVdpZHRoICsgdCAqICgxIC0gc2NhbGVXaWR0aCl9LCAke3NjYWxlSGVpZ2h0ICsgdCAqICgxIC0gc2NhbGVIZWlnaHQpfSwgMSlgO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fTtcbiAgICBcdH07XG5cbiAgICBcdC8qKiBwcm92aWRlcyBvYmplY3Qgdy8gbmVlZGVkIGZ1bmNzIC8gZGF0YSB0byBjaGlsZCBjb21wb25lbnRzICAqL1xuICAgIFx0Y29uc3QgZ2V0Q2hpbGRQcm9wcyA9ICgpID0+ICh7XG4gICAgXHRcdGFjdGl2ZUl0ZW0sXG4gICAgXHRcdGNhbGN1bGF0ZURpbWVuc2lvbnMsXG4gICAgXHRcdGxvYWRJbWFnZSxcbiAgICBcdFx0cHJlbG9hZE5leHQsXG4gICAgXHRcdG9wdHMsXG4gICAgXHRcdHByZXYsXG4gICAgXHRcdG5leHQsXG4gICAgXHRcdGNsb3NlLFxuICAgIFx0XHRzZXRSZXNpemVGdW5jLFxuICAgIFx0XHR6b29tZWQsXG4gICAgXHRcdGNvbnRhaW5lclxuICAgIFx0fSk7XG5cbiAgICBcdC8qKiBjb2RlIHRvIHJ1biBvbiBtb3VudCAvIGRlc3Ryb3kgKi9cbiAgICBcdGNvbnN0IGNvbnRhaW5lckFjdGlvbnMgPSBub2RlID0+IHtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDE5LCBjb250YWluZXIuZWwgPSBub2RlLCBjb250YWluZXIpO1xuICAgIFx0XHRsZXQgcm9BY3RpdmU7XG4gICAgXHRcdG9wdHMub25PcGVuPy4oY29udGFpbmVyLmVsLCBhY3RpdmVJdGVtKTtcblxuICAgIFx0XHQvLyBkb24ndCB1c2Uga2V5Ym9hcmQgZXZlbnRzIGZvciBpbmxpbmUgZ2FsbGVyaWVzXG4gICAgXHRcdGlmICghaW5saW5lKSB7XG4gICAgXHRcdFx0Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHNldCB1cCByZXNpemUgb2JzZXJ2ZXJcbiAgICBcdFx0Y29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgXHRcdFx0XHQvLyB1c2Ugcm9BY3RpdmUgdG8gYXZvaWQgcnVubmluZyBvbiBpbml0aWFsIG9wZW5cbiAgICBcdFx0XHRcdGlmIChyb0FjdGl2ZSkge1xuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoMTksIGNvbnRhaW5lci53ID0gZW50cmllc1swXS5jb250ZW50UmVjdC53aWR0aCwgY29udGFpbmVyKTtcbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDE5LCBjb250YWluZXIuaCA9IGVudHJpZXNbMF0uY29udGVudFJlY3QuaGVpZ2h0LCBjb250YWluZXIpO1xuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNywgc21hbGxTY3JlZW4gPSBjb250YWluZXIudyA8IDc2OSk7XG5cbiAgICBcdFx0XHRcdFx0Ly8gcnVuIGNoaWxkIGNvbXBvbmVudCByZXNpemUgZnVuY3Rpb25cbiAgICBcdFx0XHRcdFx0aWYgKCFhY3RpdmVJdGVtSXNIdG1sKCkpIHtcbiAgICBcdFx0XHRcdFx0XHRyZXNpemVGdW5jPy4oKTtcbiAgICBcdFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHRcdC8vIHJ1biB1c2VyIGRlZmluZWQgb25SZXNpemUgZnVuY3Rpb25cbiAgICBcdFx0XHRcdFx0b3B0cy5vblJlc2l6ZT8uKGNvbnRhaW5lci5lbCwgYWN0aXZlSXRlbSk7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdHJvQWN0aXZlID0gdHJ1ZTtcbiAgICBcdFx0XHR9KTtcblxuICAgIFx0XHRyby5vYnNlcnZlKG5vZGUpO1xuXG4gICAgXHRcdHJldHVybiB7XG4gICAgXHRcdFx0ZGVzdHJveSgpIHtcbiAgICBcdFx0XHRcdHJvLmRpc2Nvbm5lY3QoKTtcbiAgICBcdFx0XHRcdGdsb2JhbFRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gICAgXHRcdFx0XHRjbG9zaW5nLnNldChmYWxzZSk7XG5cbiAgICBcdFx0XHRcdC8vIHJlbW92ZSBjbGFzcyBoaWRpbmcgc2Nyb2xsXG4gICAgXHRcdFx0XHRodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2JwLWxvY2snKTtcblxuICAgIFx0XHRcdFx0b3B0cy5vbkNsb3NlZD8uKCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9O1xuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgcG9pbnRlcmRvd25faGFuZGxlciA9IGUgPT4gJCRpbnZhbGlkYXRlKDksIGNsaWNrZWRFbCA9IGUudGFyZ2V0KTtcblxuICAgIFx0Y29uc3QgcG9pbnRlcnVwX2hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIFx0XHQvLyBvbmx5IGNsb3NlIGlmIGxlZnQgY2xpY2sgb24gc2VsZiBhbmQgbm90IGRyYWdnZWRcbiAgICBcdFx0aWYgKGUuYnV0dG9uICE9PSAyICYmIGUudGFyZ2V0ID09PSB0aGlzICYmIGNsaWNrZWRFbCA9PT0gdGhpcykge1xuICAgIFx0XHRcdCFvcHRzLm5vQ2xvc2UgJiYgY2xvc2UoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0JCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgXHRcdGlmICgnaXRlbXMnIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBpdGVtcyA9ICQkcHJvcHMuaXRlbXMpO1xuICAgIFx0XHRpZiAoJ3RhcmdldCcgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDE1LCB0YXJnZXQgPSAkJHByb3BzLnRhcmdldCk7XG4gICAgXHR9O1xuXG4gICAgXHQkJHNlbGYuJCQudXBkYXRlID0gKCkgPT4ge1xuICAgIFx0XHRpZiAoJCRzZWxmLiQkLmRpcnR5WzBdICYgLyppdGVtcywgcG9zaXRpb24sIGlzT3Blbiwgb3B0cywgY29udGFpbmVyLCBhY3RpdmVJdGVtKi8gNzg2NTQ1KSB7XG4gICAgXHRcdFx0aWYgKGl0ZW1zKSB7XG4gICAgXHRcdFx0XHQvLyB1cGRhdGUgYWN0aXZlIGl0ZW0gd2hlbiBwb3NpdGlvbiBjaGFuZ2VzXG4gICAgXHRcdFx0XHQkJGludmFsaWRhdGUoNiwgYWN0aXZlSXRlbSA9IGl0ZW1zW3Bvc2l0aW9uXSk7XG5cbiAgICBcdFx0XHRcdGlmIChpc09wZW4pIHtcbiAgICBcdFx0XHRcdFx0Ly8gcnVuIG9uVXBkYXRlIHdoZW4gaXRlbXMgdXBkYXRlZFxuICAgIFx0XHRcdFx0XHRvcHRzLm9uVXBkYXRlPy4oY29udGFpbmVyLmVsLCBhY3RpdmVJdGVtKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdHJldHVybiBbXG4gICAgXHRcdGl0ZW1zLFxuICAgIFx0XHRjbG9zZSxcbiAgICBcdFx0cHJldixcbiAgICBcdFx0bmV4dCxcbiAgICBcdFx0cG9zaXRpb24sXG4gICAgXHRcdG9wdHMsXG4gICAgXHRcdGFjdGl2ZUl0ZW0sXG4gICAgXHRcdHNtYWxsU2NyZWVuLFxuICAgIFx0XHRpbmxpbmUsXG4gICAgXHRcdGNsaWNrZWRFbCxcbiAgICBcdFx0JHpvb21lZCxcbiAgICBcdFx0em9vbWVkLFxuICAgIFx0XHRtZWRpYVRyYW5zaXRpb24sXG4gICAgXHRcdGdldENoaWxkUHJvcHMsXG4gICAgXHRcdGNvbnRhaW5lckFjdGlvbnMsXG4gICAgXHRcdHRhcmdldCxcbiAgICBcdFx0b3BlbixcbiAgICBcdFx0c2V0UG9zaXRpb24sXG4gICAgXHRcdGlzT3BlbixcbiAgICBcdFx0Y29udGFpbmVyLFxuICAgIFx0XHRwb2ludGVyZG93bl9oYW5kbGVyLFxuICAgIFx0XHRwb2ludGVydXBfaGFuZGxlclxuICAgIFx0XTtcbiAgICB9XG5cbiAgICBjbGFzcyBCaWdnZXJfcGljdHVyZSBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgXHRcdHN1cGVyKCk7XG5cbiAgICBcdFx0aW5pdChcbiAgICBcdFx0XHR0aGlzLFxuICAgIFx0XHRcdG9wdGlvbnMsXG4gICAgXHRcdFx0aW5zdGFuY2UsXG4gICAgXHRcdFx0Y3JlYXRlX2ZyYWdtZW50LFxuICAgIFx0XHRcdG5vdF9lcXVhbCxcbiAgICBcdFx0XHR7XG4gICAgXHRcdFx0XHRpdGVtczogMCxcbiAgICBcdFx0XHRcdHRhcmdldDogMTUsXG4gICAgXHRcdFx0XHRvcGVuOiAxNixcbiAgICBcdFx0XHRcdGNsb3NlOiAxLFxuICAgIFx0XHRcdFx0cHJldjogMixcbiAgICBcdFx0XHRcdG5leHQ6IDMsXG4gICAgXHRcdFx0XHRzZXRQb3NpdGlvbjogMTdcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdG51bGwsXG4gICAgXHRcdFx0Wy0xLCAtMV1cbiAgICBcdFx0KTtcbiAgICBcdH1cblxuICAgIFx0Z2V0IGl0ZW1zKCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMF07XG4gICAgXHR9XG5cblxuXG4gICAgXHRnZXQgdGFyZ2V0KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMTVdO1xuICAgIFx0fVxuXG5cblxuICAgIFx0Z2V0IG9wZW4oKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFsxNl07XG4gICAgXHR9XG5cbiAgICBcdGdldCBjbG9zZSgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzFdO1xuICAgIFx0fVxuXG4gICAgXHRnZXQgcHJldigpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzJdO1xuICAgIFx0fVxuXG4gICAgXHRnZXQgbmV4dCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzNdO1xuICAgIFx0fVxuXG4gICAgXHRnZXQgc2V0UG9zaXRpb24oKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFsxN107XG4gICAgXHR9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgQmlnZ2VyUGljdHVyZVxuICAgICAqIEBwYXJhbSB7e3RhcmdldDogSFRNTEVsZW1lbnR9fSBvcHRpb25zXG4gICAgICogQHJldHVybnMgQmlnZ2VyUGljdHVyZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGJpZ2dlclBpY3R1cmUgKG9wdGlvbnMpIHtcbiAgICBcdHJldHVybiBuZXcgQmlnZ2VyX3BpY3R1cmUoe1xuICAgIFx0XHQuLi5vcHRpb25zLFxuICAgIFx0XHRwcm9wczogb3B0aW9ucyxcbiAgICBcdH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGJpZ2dlclBpY3R1cmU7XG5cbn0pKTtcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZSxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdkcm9wZG93bidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDIgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUiA9ICdkcm9wdXAtY2VudGVyJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIgPSAnZHJvcGRvd24tY2VudGVyJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9LiR7Q0xBU1NfTkFNRV9TSE9XfWBcbmNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcidcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwoKSA/ICd0b3AtZW5kJyA6ICd0b3Atc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QRU5EID0gaXNSVEwoKSA/ICd0b3Atc3RhcnQnIDogJ3RvcC1lbmQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NID0gaXNSVEwoKSA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwoKSA/ICdib3R0b20tc3RhcnQnIDogJ2JvdHRvbS1lbmQnXG5jb25zdCBQTEFDRU1FTlRfUklHSFQgPSBpc1JUTCgpID8gJ2xlZnQtc3RhcnQnIDogJ3JpZ2h0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0xFRlQgPSBpc1JUTCgpID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUENFTlRFUiA9ICd0b3AnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSID0gJ2JvdHRvbSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b0Nsb3NlOiB0cnVlLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgb2Zmc2V0OiBbMCwgMl0sXG4gIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b0Nsb3NlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAvLyBkcm9wZG93biB3cmFwcGVyXG4gICAgLy8gVE9ETzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4zL2Zvcm1zL2lucHV0LWdyb3VwL1xuICAgIHRoaXMuX21lbnUgPSBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01FTlUsIHRoaXMuX3BhcmVudClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bigpID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY3JlYXRlUG9wcGVyKClcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhdGhpcy5fcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLl9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSBzdXBlci5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChjb25maWcucmVmZXJlbmNlKSAmJlxuICAgICAgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICAvLyBQb3BwZXIgdmlydHVhbCBlbGVtZW50cyByZXF1aXJlIGEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtOQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NyZWF0ZVBvcHBlcigpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX3BhcmVudFxuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gZ2V0RWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuICAgIH1cblxuICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHRoaXMuX2dldFBvcHBlckNvbmZpZygpXG4gICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpXG4gIH1cblxuICBfaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX3BhcmVudFxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BFTkQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfTEVGVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9UT1BDRU5URVJcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9CT1RUT01DRU5URVJcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSKSAhPT0gbnVsbFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheSBvciBEcm9wZG93biBpcyBpbiBOYXZiYXJcbiAgICBpZiAodGhpcy5faW5OYXZiYXIgfHwgdGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJykgLy8gVE9ETzogdjYgcmVtb3ZlXG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLmV4ZWN1dGUodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZywgW2RlZmF1bHRCc1BvcHBlckNvbmZpZ10pXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdE1lbnVJdGVtKHsga2V5LCB0YXJnZXQgfSkge1xuICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoZWxlbWVudCA9PiBpc1Zpc2libGUoZWxlbWVudCkpXG5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gaWYgdGFyZ2V0IGlzbid0IGluY2x1ZGVkIGluIGl0ZW1zIChlLmcuIHdoZW4gZXhwYW5kaW5nIHRoZSBkcm9wZG93bilcbiAgICAvLyBhbGxvdyBjeWNsaW5nIHRvIGdldCB0aGUgbGFzdCBpdGVtIGluIGNhc2Uga2V5IGVxdWFscyBBUlJPV19VUF9LRVlcbiAgICBnZXROZXh0QWN0aXZlRWxlbWVudChpdGVtcywgdGFyZ2V0LCBrZXkgPT09IEFSUk9XX0RPV05fS0VZLCAhaXRlbXMuaW5jbHVkZXModGFyZ2V0KSkuZm9jdXMoKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSBSSUdIVF9NT1VTRV9CVVRUT04gfHwgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3BlblRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOKVxuXG4gICAgZm9yIChjb25zdCB0b2dnbGUgb2Ygb3BlblRvZ2dsZXMpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBEcm9wZG93bi5nZXRJbnN0YW5jZSh0b2dnbGUpXG4gICAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKClcbiAgICAgIGNvbnN0IGlzTWVudVRhcmdldCA9IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9tZW51KVxuICAgICAgaWYgKFxuICAgICAgICBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fZWxlbWVudCkgfHxcbiAgICAgICAgKGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdpbnNpZGUnICYmICFpc01lbnVUYXJnZXQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIFRhYiBuYXZpZ2F0aW9uIHRocm91Z2ggdGhlIGRyb3Bkb3duIG1lbnUgb3IgZXZlbnRzIGZyb20gY29udGFpbmVkIGlucHV0cyBzaG91bGRuJ3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgIGlmIChjb250ZXh0Ll9tZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgKChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSA9PT0gVEFCX0tFWSkgfHwgL2lucHV0fHNlbGVjdHxvcHRpb258dGV4dGFyZWF8Zm9ybS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0geyByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50IH1cblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBhbiBVUCB8IERPV04gfCBFU0NBUEUga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYSAmJiBpZiBrZXkgaXMgb3RoZXIgdGhhbiBFU0NBUEUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuXG4gICAgY29uc3QgaXNJbnB1dCA9IC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpXG4gICAgY29uc3QgaXNFc2NhcGVFdmVudCA9IGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWVxuICAgIGNvbnN0IGlzVXBPckRvd25FdmVudCA9IFtBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpXG5cbiAgICBpZiAoIWlzVXBPckRvd25FdmVudCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzSW5wdXQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIFRPRE86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICBjb25zdCBnZXRUb2dnbGVCdXR0b24gPSB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUpID9cbiAgICAgIHRoaXMgOlxuICAgICAgKFNlbGVjdG9yRW5naW5lLnByZXYodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdIHx8XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdIHx8XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnBhcmVudE5vZGUpKVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKGdldFRvZ2dsZUJ1dHRvbilcblxuICAgIGlmIChpc1VwT3JEb3duRXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5zaG93KClcbiAgICAgIGluc3RhbmNlLl9zZWxlY3RNZW51SXRlbShldmVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5faXNTaG93bigpKSB7IC8vIGVsc2UgaXMgZXNjYXBlIGFuZCB3ZSBjaGVjayBpZiBpdCBpcyBzaG93blxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGluc3RhbmNlLmhpZGUoKVxuICAgICAgZ2V0VG9nZ2xlQnV0dG9uLmZvY3VzKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oRHJvcGRvd24pXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9kYXRhLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcbiAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSlcbiAgfSxcblxuICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpXG5cbiAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcbiAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudClcbiAgICB9XG4gIH1cbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9pbmRleC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1BWF9VSUQgPSAxXzAwMF8wMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcblxuLyoqXG4gKiBQcm9wZXJseSBlc2NhcGUgSURzIHNlbGVjdG9ycyB0byBoYW5kbGUgd2VpcmQgSURzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHBhcnNlU2VsZWN0b3IgPSBzZWxlY3RvciA9PiB7XG4gIGlmIChzZWxlY3RvciAmJiB3aW5kb3cuQ1NTICYmIHdpbmRvdy5DU1MuZXNjYXBlKSB7XG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciBuZWVkcyBlc2NhcGluZyB0byBoYW5kbGUgSURzIChodG1sNSspIGNvbnRhaW5pbmcgZm9yIGluc3RhbmNlIC9cbiAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoLyMoW15cXHNcIiMnXSspL2csIChtYXRjaCwgaWQpID0+IGAjJHtDU1MuZXNjYXBlKGlkKX1gKVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yXG59XG5cbi8vIFNob3V0LW91dCBBbmd1cyBDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuY29uc3QgdG9UeXBlID0gb2JqZWN0ID0+IHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBgJHtvYmplY3R9YFxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogUHVibGljIFV0aWwgQVBJXG4gKi9cblxuY29uc3QgZ2V0VUlEID0gcHJlZml4ID0+IHtcbiAgZG8ge1xuICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKVxuICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuXG4gIHJldHVybiBwcmVmaXhcbn1cblxuY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gIGxldCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvbkRlbGF5IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG59XG5cbmNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKVxufVxuXG5jb25zdCBpc0VsZW1lbnQgPSBvYmplY3QgPT4ge1xuICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9iamVjdCA9IG9iamVjdFswXVxuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnXG59XG5cbmNvbnN0IGdldEVsZW1lbnQgPSBvYmplY3QgPT4ge1xuICAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICBpZiAoaXNFbGVtZW50KG9iamVjdCkpIHtcbiAgICByZXR1cm4gb2JqZWN0LmpxdWVyeSA/IG9iamVjdFswXSA6IG9iamVjdFxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdzdHJpbmcnICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyc2VTZWxlY3RvcihvYmplY3QpKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gIGlmICghaXNFbGVtZW50KGVsZW1lbnQpIHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRJc1Zpc2libGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnXG4gIC8vIEhhbmRsZSBgZGV0YWlsc2AgZWxlbWVudCBhcyBpdHMgY29udGVudCBtYXkgZmFsc2llIGFwcGVhciB2aXNpYmxlIHdoZW4gaXQgaXMgY2xvc2VkXG4gIGNvbnN0IGNsb3NlZERldGFpbHMgPSBlbGVtZW50LmNsb3Nlc3QoJ2RldGFpbHM6bm90KFtvcGVuXSknKVxuXG4gIGlmICghY2xvc2VkRGV0YWlscykge1xuICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG4gIH1cblxuICBpZiAoY2xvc2VkRGV0YWlscyAhPT0gZWxlbWVudCkge1xuICAgIGNvbnN0IHN1bW1hcnkgPSBlbGVtZW50LmNsb3Nlc3QoJ3N1bW1hcnknKVxuICAgIGlmIChzdW1tYXJ5ICYmIHN1bW1hcnkucGFyZW50Tm9kZSAhPT0gY2xvc2VkRGV0YWlscykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHN1bW1hcnkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG59XG5cbmNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIGVsZW1lbnQuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWRcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJ1xufVxuXG5jb25zdCBmaW5kU2hhZG93Um9vdCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBmaW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG4vKipcbiAqIFRyaWNrIHRvIHJlc3RhcnQgYW4gZWxlbWVudCdzIGFuaW1hdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4gdm9pZFxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cuY2hhcmlzdGhlby5pby9ibG9nLzIwMjEvMDIvcmVzdGFydC1hLWNzcy1hbmltYXRpb24td2l0aC1qYXZhc2NyaXB0LyNyZXN0YXJ0aW5nLWEtY3NzLWFuaW1hdGlvblxuICovXG5jb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5vZmZzZXRIZWlnaHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbn1cblxuY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICBpZiAod2luZG93LmpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4gd2luZG93LmpRdWVyeVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyA9IFtdXG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIC8vIGFkZCBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgY2FsbCB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbiBsb2FkaW5nIHN0YXRlXG4gICAgaWYgKCFET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MucHVzaChjYWxsYmFjaylcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJ1xuXG5jb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUVcbiAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV1cbiAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luXG4gICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGV4ZWN1dGUgPSAocG9zc2libGVDYWxsYmFjaywgYXJncyA9IFtdLCBkZWZhdWx0VmFsdWUgPSBwb3NzaWJsZUNhbGxiYWNrKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgcG9zc2libGVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IHBvc3NpYmxlQ2FsbGJhY2soLi4uYXJncykgOiBkZWZhdWx0VmFsdWVcbn1cblxuY29uc3QgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiA9IChjYWxsYmFjaywgdHJhbnNpdGlvbkVsZW1lbnQsIHdhaXRGb3JUcmFuc2l0aW9uID0gdHJ1ZSkgPT4ge1xuICBpZiAoIXdhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDVcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRyYW5zaXRpb25FbGVtZW50KSArIGR1cmF0aW9uUGFkZGluZ1xuXG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gIGNvbnN0IGhhbmRsZXIgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGlmICh0YXJnZXQgIT09IHRyYW5zaXRpb25FbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgdHJhbnNpdGlvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICB9XG5cbiAgdHJhbnNpdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25FbGVtZW50KVxuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbilcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHByZXZpb3VzL25leHQgZWxlbWVudCBvZiBhIGxpc3QuXG4gKlxuICogQHBhcmFtIHthcnJheX0gbGlzdCAgICBUaGUgbGlzdCBvZiBlbGVtZW50c1xuICogQHBhcmFtIGFjdGl2ZUVsZW1lbnQgICBUaGUgYWN0aXZlIGVsZW1lbnRcbiAqIEBwYXJhbSBzaG91bGRHZXROZXh0ICAgQ2hvb3NlIHRvIGdldCBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnRcbiAqIEBwYXJhbSBpc0N5Y2xlQWxsb3dlZFxuICogQHJldHVybiB7RWxlbWVudHxlbGVtfSBUaGUgcHJvcGVyIGVsZW1lbnRcbiAqL1xuY29uc3QgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQgPSAobGlzdCwgYWN0aXZlRWxlbWVudCwgc2hvdWxkR2V0TmV4dCwgaXNDeWNsZUFsbG93ZWQpID0+IHtcbiAgY29uc3QgbGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoXG4gIGxldCBpbmRleCA9IGxpc3QuaW5kZXhPZihhY3RpdmVFbGVtZW50KVxuXG4gIC8vIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IHJldHVybiBhbiBlbGVtZW50XG4gIC8vIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBpZiBjeWNsZSBpcyBhbGxvd2VkXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gIXNob3VsZEdldE5leHQgJiYgaXNDeWNsZUFsbG93ZWQgPyBsaXN0W2xpc3RMZW5ndGggLSAxXSA6IGxpc3RbMF1cbiAgfVxuXG4gIGluZGV4ICs9IHNob3VsZEdldE5leHQgPyAxIDogLTFcblxuICBpZiAoaXNDeWNsZUFsbG93ZWQpIHtcbiAgICBpbmRleCA9IChpbmRleCArIGxpc3RMZW5ndGgpICUgbGlzdExlbmd0aFxuICB9XG5cbiAgcmV0dXJuIGxpc3RbTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGxpc3RMZW5ndGggLSAxKSldXG59XG5cbmV4cG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZSxcbiAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbixcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIGdldEVsZW1lbnQsXG4gIGdldGpRdWVyeSxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcCxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBwYXJzZVNlbGVjdG9yLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICB0b1R5cGVcbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBnZXRqUXVlcnkgfSBmcm9tICcuLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qL1xuY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovXG5jb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvXG5jb25zdCBldmVudFJlZ2lzdHJ5ID0ge30gLy8gRXZlbnRzIHN0b3JhZ2VcbmxldCB1aWRFdmVudCA9IDFcbmNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn1cblxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiBQcml2YXRlIG1ldGhvZHNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRXZlbnRVaWQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogZWxlbWVudCB9KVxuXG4gICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgZm9yIChsZXQgeyB0YXJnZXQgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChjb25zdCBkb21FbGVtZW50IG9mIGRvbUVsZW1lbnRzKSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogdGFyZ2V0IH0pXG5cbiAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGNhbGxhYmxlLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50cylcbiAgICAuZmluZChldmVudCA9PiBldmVudC5jYWxsYWJsZSA9PT0gY2FsbGFibGUgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICBjb25zdCBpc0RlbGVnYXRlZCA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJ1xuICAvLyBUT0RPOiB0b29sdGlwIHBhc3NlcyBgZmFsc2VgIGluc3RlYWQgb2Ygc2VsZWN0b3IsIHNvIHdlIG5lZWQgdG8gY2hlY2tcbiAgY29uc3QgY2FsbGFibGUgPSBpc0RlbGVnYXRlZCA/IGRlbGVnYXRpb25GdW5jdGlvbiA6IChoYW5kbGVyIHx8IGRlbGVnYXRpb25GdW5jdGlvbilcbiAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudClcblxuICBpZiAoIW5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KSkge1xuICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50XG4gIH1cblxuICByZXR1cm4gW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG5cbiAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgaWYgKG9yaWdpbmFsVHlwZUV2ZW50IGluIGN1c3RvbUV2ZW50cykge1xuICAgIGNvbnN0IHdyYXBGdW5jdGlvbiA9IGZuID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxsYWJsZSA9IHdyYXBGdW5jdGlvbihjYWxsYWJsZSlcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudClcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSlcbiAgY29uc3QgcHJldmlvdXNGdW5jdGlvbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbClcblxuICBpZiAocHJldmlvdXNGdW5jdGlvbikge1xuICAgIHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmID0gcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgJiYgb25lT2ZmXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChjYWxsYWJsZSwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKVxuICBjb25zdCBmbiA9IGlzRGVsZWdhdGVkID9cbiAgICBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjYWxsYWJsZSkgOlxuICAgIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgY2FsbGFibGUpXG5cbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbFxuICBmbi5jYWxsYWJsZSA9IGNhbGxhYmxlXG4gIGZuLm9uZU9mZiA9IG9uZU9mZlxuICBmbi51aWRFdmVudCA9IHVpZFxuICBoYW5kbGVyc1t1aWRdID0gZm5cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgaXNEZWxlZ2F0ZWQpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpXG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSlcbiAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XVxufVxuXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG5cbiAgZm9yIChjb25zdCBbaGFuZGxlcktleSwgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50XG59XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgZmFsc2UpXG4gIH0sXG5cbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIHRydWUpXG4gIH0sXG5cbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbilcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpXG5cbiAgICBpZiAodHlwZW9mIGNhbGxhYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnRFdmVudCBvZiBPYmplY3Qua2V5cyhldmVudHMpKSB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5SGFuZGxlcnMsIGV2ZW50XSBvZiBPYmplY3QuZW50cmllcyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKVxuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50XG5cbiAgICBsZXQgalF1ZXJ5RXZlbnQgPSBudWxsXG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZVxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2VcblxuICAgIGlmIChpbk5hbWVzcGFjZSAmJiAkKSB7XG4gICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpXG5cbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihqUXVlcnlFdmVudClcbiAgICAgIGJ1YmJsZXMgPSAhalF1ZXJ5RXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGpRdWVyeUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpXG4gICAgfVxuXG4gICAgY29uc3QgZXZ0ID0gaHlkcmF0ZU9iaihuZXcgRXZlbnQoZXZlbnQsIHsgYnViYmxlcywgY2FuY2VsYWJsZTogdHJ1ZSB9KSwgYXJncylcblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgalF1ZXJ5RXZlbnQpIHtcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZXZ0XG4gIH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZU9iaihvYmosIG1ldGEgPSB7fSkge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhKSkge1xuICAgIHRyeSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlXG4gICAgfSBjYXRjaCB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL21hbmlwdWxhdG9yLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gTnVtYmVyKHZhbHVlKS50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YClcbn1cblxuY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKVxuICB9LFxuXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YClcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge31cbiAgICBjb25zdCBic0tleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykgJiYgIWtleS5zdGFydHNXaXRoKCdic0NvbmZpZycpKVxuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG4gICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJylcbiAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aClcbiAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKVxuICAgIH1cblxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5pcHVsYXRvclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2NvbmZpZy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgeyBpc0VsZW1lbnQsIHRvVHlwZSB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbmZpZyB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZylcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tZXJnZUNvbmZpZ09iaihjb25maWcsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBqc29uQ29uZmlnID0gaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAnY29uZmlnJykgOiB7fSAvLyB0cnkgdG8gcGFyc2VcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi4odHlwZW9mIGpzb25Db25maWcgPT09ICdvYmplY3QnID8ganNvbkNvbmZpZyA6IHt9KSxcbiAgICAgIC4uLihpc0VsZW1lbnQoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSA6IHt9KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgfVxuXG4gIF90eXBlQ2hlY2tDb25maWcoY29uZmlnLCBjb25maWdUeXBlcyA9IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpIHtcbiAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgZXhwZWN0ZWRUeXBlc10gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnVHlwZXMpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IGlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBgJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhLmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL3V0aWwvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBWRVJTSU9OID0gJzUuMy4zJ1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudClcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgdGhpcy5fZWxlbWVudClcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldChnZXRFbGVtZW50KGVsZW1lbnQpLCB0aGlzLkRBVEFfS0VZKVxuICB9XG5cbiAgc3RhdGljIGdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpXG4gIH1cblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIGBicy4ke3RoaXMuTkFNRX1gXG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YFxuICB9XG5cbiAgc3RhdGljIGV2ZW50TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGAke25hbWV9JHt0aGlzLkVWRU5UX0tFWX1gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbXBvbmVudFxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgaXNEaXNhYmxlZCwgaXNWaXNpYmxlLCBwYXJzZVNlbGVjdG9yIH0gZnJvbSAnLi4vdXRpbC9pbmRleC5qcydcblxuY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JylcblxuICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICBsZXQgaHJlZkF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHJpYnV0ZSB8fCAoIWhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBocmVmQXR0cmlidXRlID0gYCMke2hyZWZBdHRyaWJ1dGUuc3BsaXQoJyMnKVsxXX1gXG4gICAgfVxuXG4gICAgc2VsZWN0b3IgPSBocmVmQXR0cmlidXRlICYmIGhyZWZBdHRyaWJ1dGUgIT09ICcjJyA/IGhyZWZBdHRyaWJ1dGUudHJpbSgpIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yID8gc2VsZWN0b3Iuc3BsaXQoJywnKS5tYXAoc2VsID0+IHBhcnNlU2VsZWN0b3Ioc2VsKSkuam9pbignLCcpIDogbnVsbFxufVxuXG5jb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcbiAgZmluZChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSlcbiAgfSxcblxuICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3RvcilcbiAgfSxcblxuICBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKVxuICB9LFxuXG4gIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwYXJlbnRzID0gW11cbiAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3RvcilcblxuICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKVxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfSxcblxuICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcbiAgLy8gVE9ETzogdGhpcyBpcyBub3cgdW51c2VkOyByZW1vdmUgbGF0ZXIgYWxvbmcgd2l0aCBwcmV2KClcbiAgbmV4dChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBuZXh0ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW25leHRdXG4gICAgICB9XG5cbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuXG4gIGZvY3VzYWJsZUNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICBjb25zdCBmb2N1c2FibGVzID0gW1xuICAgICAgJ2EnLFxuICAgICAgJ2J1dHRvbicsXG4gICAgICAnaW5wdXQnLFxuICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICdzZWxlY3QnLFxuICAgICAgJ2RldGFpbHMnLFxuICAgICAgJ1t0YWJpbmRleF0nLFxuICAgICAgJ1tjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJ1xuICAgIF0ubWFwKHNlbGVjdG9yID0+IGAke3NlbGVjdG9yfTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pYCkuam9pbignLCcpXG5cbiAgICByZXR1cm4gdGhpcy5maW5kKGZvY3VzYWJsZXMsIGVsZW1lbnQpLmZpbHRlcihlbCA9PiAhaXNEaXNhYmxlZChlbCkgJiYgaXNWaXNpYmxlKGVsKSlcbiAgfSxcblxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgOiBudWxsXG4gIH0sXG5cbiAgZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3RvcihlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikgOiBbXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yRW5naW5lXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvYmFja2Ryb3AuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7XG4gIGV4ZWN1dGUsIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sIGdldEVsZW1lbnQsIHJlZmxvd1xufSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUV9YFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIGNsaWNrQ2FsbGJhY2s6IG51bGwsXG4gIGlzQW5pbWF0ZWQ6IGZhbHNlLFxuICBpc1Zpc2libGU6IHRydWUsIC8vIGlmIGZhbHNlLCB3ZSB1c2UgdGhlIGJhY2tkcm9wIGhlbHBlciB3aXRob3V0IGFkZGluZyBhbnkgZWxlbWVudCB0byB0aGUgZG9tXG4gIHJvb3RFbGVtZW50OiAnYm9keScgLy8gZ2l2ZSB0aGUgY2hvaWNlIHRvIHBsYWNlIGJhY2tkcm9wIHVuZGVyIGRpZmZlcmVudCBlbGVtZW50c1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgaXNWaXNpYmxlOiAnYm9vbGVhbicsXG4gIHJvb3RFbGVtZW50OiAnKGVsZW1lbnR8c3RyaW5nKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQmFja2Ryb3AgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwZW5kKClcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KClcbiAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHJlZmxvdyhlbGVtZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuZGlzcG9zZSgpXG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pXG5cbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9nZXRFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gdGhpcy5fY29uZmlnLmNsYXNzTmFtZVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gYmFja2Ryb3BcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFxuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gdXNlIGdldEVsZW1lbnQoKSB3aXRoIHRoZSBkZWZhdWx0IFwiYm9keVwiIHRvIGdldCBhIGZyZXNoIEVsZW1lbnQgb24gZWFjaCBpbnN0YW50aWF0aW9uXG4gICAgY29uZmlnLnJvb3RFbGVtZW50ID0gZ2V0RWxlbWVudChjb25maWcucm9vdEVsZW1lbnQpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FwcGVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKVxuICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQoZWxlbWVudClcblxuICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCBFVkVOVF9NT1VTRURPV04sICgpID0+IHtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spXG4gICAgfSlcblxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSB0cnVlXG4gIH1cblxuICBfZW11bGF0ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2Ryb3BcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHsgaXNEaXNhYmxlZCB9IGZyb20gJy4vaW5kZXguanMnXG5cbmNvbnN0IGVuYWJsZURpc21pc3NUcmlnZ2VyID0gKGNvbXBvbmVudCwgbWV0aG9kID0gJ2hpZGUnKSA9PiB7XG4gIGNvbnN0IGNsaWNrRXZlbnQgPSBgY2xpY2suZGlzbWlzcyR7Y29tcG9uZW50LkVWRU5UX0tFWX1gXG4gIGNvbnN0IG5hbWUgPSBjb21wb25lbnQuTkFNRVxuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgY2xpY2tFdmVudCwgYFtkYXRhLWJzLWRpc21pc3M9XCIke25hbWV9XCJdYCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpIHx8IHRoaXMuY2xvc2VzdChgLiR7bmFtZX1gKVxuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50LmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuXG4gICAgLy8gTWV0aG9kIGFyZ3VtZW50IGlzIGxlZnQsIGZvciBBbGVydCBhbmQgb25seSwgYXMgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlICdoaWRlJyBtZXRob2RcbiAgICBpbnN0YW5jZVttZXRob2RdKClcbiAgfSlcbn1cblxuZXhwb3J0IHtcbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXJcbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9mb2N1c3RyYXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZm9jdXN0cmFwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZm9jdXN0cmFwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJ1xuY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b2ZvY3VzOiB0cnVlLFxuICB0cmFwRWxlbWVudDogbnVsbCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b2ZvY3VzOiAnYm9vbGVhbicsXG4gIHRyYXBFbGVtZW50OiAnZWxlbWVudCdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRm9jdXNUcmFwIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUZvY3VzaW4oZXZlbnQpKVxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9UQUIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUtleWRvd24oZXZlbnQpKVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlXG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9oYW5kbGVGb2N1c2luKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0cmFwRWxlbWVudCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudCB8fCBldmVudC50YXJnZXQgPT09IHRyYXBFbGVtZW50IHx8IHRyYXBFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID09PSBUQUJfTkFWX0JBQ0tXQVJEKSB7XG4gICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBldmVudC5zaGlmdEtleSA/IFRBQl9OQVZfQkFDS1dBUkQgOiBUQUJfTkFWX0ZPUldBUkRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2N1c1RyYXBcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9zY3JvbGxCYXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCdcbmNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJ1xuY29uc3QgUFJPUEVSVFlfUEFERElORyA9ICdwYWRkaW5nLXJpZ2h0J1xuY29uc3QgUFJPUEVSVFlfTUFSR0lOID0gJ21hcmdpbi1yaWdodCdcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBnZXRXaWR0aCgpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICB0aGlzLl9kaXNhYmxlT3ZlckZsb3coKVxuICAgIC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2UgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMgdG8ga2VlcCBzaG93aW5nIGZ1bGx3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4pXG4gIH1cblxuICBpc092ZXJmbG93aW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFdpZHRoKCkgPiAwXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9kaXNhYmxlT3ZlckZsb3coKSB7XG4gICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfVxuXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgYCR7Y2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSl9cHhgKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5LCBhY3R1YWxWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIC8vIFdlIG9ubHkgd2FudCB0byByZW1vdmUgdGhlIHByb3BlcnR5IGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGA7IHRoZSB2YWx1ZSBjYW4gYWxzbyBiZSB6ZXJvXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZVByb3BlcnR5KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIF9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBjYWxsQmFjaykge1xuICAgIGlmIChpc0VsZW1lbnQoc2VsZWN0b3IpKSB7XG4gICAgICBjYWxsQmFjayhzZWxlY3RvcilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VsIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBjYWxsQmFjayhzZWwpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhckhlbHBlclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBvZmZjYW52YXMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AuanMnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzJ1xuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuL3V0aWwvZm9jdXN0cmFwLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBpc0Rpc2FibGVkLFxuICBpc1Zpc2libGVcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IFNjcm9sbEJhckhlbHBlciBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnb2ZmY2FudmFzJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMub2ZmY2FudmFzJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcbmNvbnN0IENMQVNTX05BTUVfSElESU5HID0gJ2hpZGluZydcbmNvbnN0IENMQVNTX05BTUVfQkFDS0RST1AgPSAnb2ZmY2FudmFzLWJhY2tkcm9wJ1xuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2Nyb2xsOiBmYWxzZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2Nyb2xsOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkuaGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwgfHwgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHsgcmVsYXRlZFRhcmdldCB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgdGhpcy5fZWxlbWVudC5ibHVyKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkucmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxiYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgY29uc3QgY2xpY2tDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5oaWRlKClcbiAgICB9XG5cbiAgICAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWVcbiAgICBjb25zdCBpc1Zpc2libGUgPSBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcClcblxuICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgY2xhc3NOYW1lOiBDTEFTU19OQU1FX0JBQ0tEUk9QLFxuICAgICAgaXNWaXNpYmxlLFxuICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICBjbGlja0NhbGxiYWNrOiBpc1Zpc2libGUgPyBjbGlja0NhbGxiYWNrIDogbnVsbFxuICAgIH0pXG4gIH1cblxuICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgdGhpcy5mb2N1cygpXG4gICAgfVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxyZWFkeU9wZW4gJiYgYWxyZWFkeU9wZW4gIT09IHRhcmdldCkge1xuICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikpIHtcbiAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShzZWxlY3Rvcikuc2hvdygpXG4gIH1cbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZCgnW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV0nKSkge1xuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KS5oaWRlKClcbiAgICB9XG4gIH1cbn0pXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKE9mZmNhbnZhcylcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXNcbiIsICJpbXBvcnQgXCJqcy9ib290c3RyYXAvc3JjL2Ryb3Bkb3duXCI7XG5pbXBvcnQgXCJqcy9ib290c3RyYXAvc3JjL29mZmNhbnZhc1wiO1xuXG4oKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYi1oZWFkZXInKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICBjb25zdCBuYXYgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmhiLWhlYWRlci1uYXYnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICBpZiAoIWhlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aXZlTWVudSA9IChtZW51OiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKVxuICAgICAgICAgICAgbWVudS5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbWVudS5jbG9zZXN0KCcuaGItaGVhZGVyLW1lbnUnKVxuICAgICAgICAgICAgcGFyZW50Py5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgcGFyZW50Py5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbms6Zmlyc3QtY2hpbGQnKT8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzTWVudVBhcmVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgPz8gJydcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKGhyZWYpICE9PSAtMSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihocmVmKSAhPT0gLTFcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lbnVzID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoYGFbaHJlZj1cIiR7d2luZG93LmxvY2F0aW9uLmhyZWZ9XCJdLCBhW2hyZWY9XCIke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1cIl1gKVxuICAgICAgICBpZiAobWVudXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWVudXMuZm9yRWFjaChtZW51ID0+IHtcbiAgICAgICAgICAgICAgICBhY3RpdmVNZW51KG1lbnUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZvdW5kUGFyZW50ID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLmhiLWhlYWRlci1zdWJtZW51JykpXG4gICAgICAgICAgICAvLyBmaW5kIHBhcmVudCBtZW51IGZyb20gc2Vjb25kLWxldmVsIG1lbnVzLlxuICAgICAgICAgICAgZm9yIChsZXQgbWVudSBvZiBzdWJtZW51cykge1xuICAgICAgICAgICAgICAgIGlmIChpc01lbnVQYXJlbnQobWVudSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWVudShtZW51KVxuICAgICAgICAgICAgICAgICAgICBmb3VuZFBhcmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZvdW5kUGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gZmluZCBwYXJlbnQgbWVudSBmcm9tIHRvcC1sZXZlbCBtZW51cy5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBtZW51IG9mIEFycmF5LmZyb20obmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EubmF2LWxpbmsnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWVudVBhcmVudChtZW51KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWVudShtZW51KVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoYWRvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdzaGFkb3ctc20nKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlU2hhZG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5jb250YWlucygnc2hhZG93LXNtJykgJiYgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWRvdy1zbScpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvcGFjaXR5Jyk7XG4gICAgICAgICAgICBuYXYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3otaW5kZXgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgIG5hdi5zdHlsZS56SW5kZXggPSAnMCc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaCA9IDA7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IDIwO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAhPT0gMCkge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGluZycpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc01vYmlsZSA9ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8IDU3NlxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgICAgIHNob3coKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxpbmcnKVxuICAgICAgICAgICAgICAgIHJlbW92ZVNoYWRvdygpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxpbmcnKVxuICAgICAgICAgICAgICAgIHNoYWRvdygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNNb2JpbGUoKSAmJiBNYXRoLmFicyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC0gaCkgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gaCA/IGhpZGUoKSA6IHNob3coKTtcbiAgICAgICAgICAgICAgICBoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSkoKVxuIiwgIigoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZGVkID0gKGltZzogSFRNTEltYWdlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MSW1hZ2VFbGVtZW50PignLmhiLWdhbGxlcnktYWxidW0taXRlbXMgaW1nJylcbiAgICAgICAgZm9yIChjb25zdCBpbWcgb2YgaW1hZ2VzKSB7XG4gICAgICAgICAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkKGltZylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZChpbWcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBleGVjdXRlLCBmaW5kU2hhZG93Um9vdCwgZ2V0RWxlbWVudCwgZ2V0VUlELCBpc1JUTCwgbm9vcFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgeyBEZWZhdWx0QWxsb3dsaXN0IH0gZnJvbSAnLi91dGlsL3Nhbml0aXplci5qcydcbmltcG9ydCBUZW1wbGF0ZUZhY3RvcnkgZnJvbSAnLi91dGlsL3RlbXBsYXRlLWZhY3RvcnkuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b29sdGlwJ1xuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJ1xuY29uc3QgU0VMRUNUT1JfTU9EQUwgPSBgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gXG5cbmNvbnN0IEVWRU5UX01PREFMX0hJREUgPSAnaGlkZS5icy5tb2RhbCdcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3ZlcidcbmNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gJ2hpZGUnXG5jb25zdCBFVkVOVF9ISURERU4gPSAnaGlkZGVuJ1xuY29uc3QgRVZFTlRfU0hPVyA9ICdzaG93J1xuY29uc3QgRVZFTlRfU0hPV04gPSAnc2hvd24nXG5jb25zdCBFVkVOVF9JTlNFUlRFRCA9ICdpbnNlcnRlZCdcbmNvbnN0IEVWRU5UX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgRVZFTlRfRk9DVVNJTiA9ICdmb2N1c2luJ1xuY29uc3QgRVZFTlRfRk9DVVNPVVQgPSAnZm9jdXNvdXQnXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gJ21vdXNlZW50ZXInXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gJ21vdXNlbGVhdmUnXG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE86ICdhdXRvJyxcbiAgVE9QOiAndG9wJyxcbiAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICBCT1RUT006ICdib3R0b20nLFxuICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBjdXN0b21DbGFzczogJycsXG4gIGRlbGF5OiAwLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gIGh0bWw6IGZhbHNlLFxuICBvZmZzZXQ6IFswLCA2XSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgc2VsZWN0b3I6IGZhbHNlLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyxcbiAgdGl0bGU6ICcnLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiAnYXJyYXknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlcjogJ3N0cmluZydcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIC8vIFByaXZhdGVcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5fdGltZW91dCA9IDBcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG51bGxcbiAgICB0aGlzLl9uZXdDb250ZW50ID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy50aXAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICF0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrXG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5fbGVhdmUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZW50ZXIoKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKVxuICAgIH1cblxuICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuX2lzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XKSlcbiAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBpc0luVGhlRG9tID0gKHNoYWRvd1Jvb3QgfHwgdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuY29udGFpbnModGhpcy5fZWxlbWVudClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNJblRoZURvbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVE9ETzogdjYgcmVtb3ZlIHRoaXMgb3IgbWFrZSBpdCBvcHRpb25hbFxuICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpXG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcC5nZXRBdHRyaWJ1dGUoJ2lkJykpXG5cbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kKHRpcClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0lOU0VSVEVEKSlcbiAgICB9XG5cbiAgICB0aGlzLl9wb3BwZXIgPSB0aGlzLl9jcmVhdGVQb3BwZXIodGlwKVxuXG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1dOKSlcblxuICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9ISURFKSlcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRpcEVsZW1lbnQoKVxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbCAvLyBpdCBpcyBhIHRyaWNrIHRvIHN1cHBvcnQgbWFudWFsIHRyaWdnZXJpbmdcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJRERFTikpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcbiAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIF9nZXRUaXBFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy50aXApIHtcbiAgICAgIHRoaXMudGlwID0gdGhpcy5fY3JlYXRlVGlwRWxlbWVudCh0aGlzLl9uZXdDb250ZW50IHx8IHRoaXMuX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgX2NyZWF0ZVRpcEVsZW1lbnQoY29udGVudCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KS50b0h0bWwoKVxuXG4gICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgY2hlY2sgaW4gdjZcbiAgICBpZiAoIXRpcCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgICAvLyBUT0RPOiB2NiB0aGUgZm9sbG93aW5nIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBvbmx5XG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoYGJzLSR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hdXRvYClcblxuICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSkudG9TdHJpbmcoKVxuXG4gICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcblxuICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGlwXG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLl9uZXdDb250ZW50ID0gY29udGVudFxuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBfZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5fdGVtcGxhdGVGYWN0b3J5KSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkuY2hhbmdlQ29udGVudChjb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBuZXcgVGVtcGxhdGVGYWN0b3J5KHtcbiAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAvLyB0aGUgYGNvbnRlbnRgIHZhciBoYXMgdG8gYmUgYWZ0ZXIgYHRoaXMuX2NvbmZpZ2BcbiAgICAgICAgLy8gdG8gb3ZlcnJpZGUgY29uZmlnLmNvbnRlbnQgaW4gY2FzZSBvZiBwb3BvdmVyXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGV4dHJhQ2xhc3M6IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlRmFjdG9yeVxuICB9XG5cbiAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1NFTEVDVE9SX1RPT0xUSVBfSU5ORVJdOiB0aGlzLl9nZXRUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2dldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcudGl0bGUpIHx8IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJylcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmFuaW1hdGlvbiB8fCAodGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIodGlwKSB7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gZXhlY3V0ZSh0aGlzLl9jb25maWcucGxhY2VtZW50LCBbdGhpcywgdGlwLCB0aGlzLl9lbGVtZW50XSlcbiAgICBjb25zdCBhdHRhY2htZW50ID0gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgICByZXR1cm4gUG9wcGVyLmNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGUoYXJnLCBbdGhpcy5fZWxlbWVudF0pXG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IHRoaXMuX2NvbmZpZy5mYWxsYmFja1BsYWNlbWVudHNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZWxlbWVudDogYC4ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXJyb3dgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZVNldFBsYWNlbWVudCcsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwaGFzZTogJ2JlZm9yZU1haW4nLFxuICAgICAgICAgIGZuOiBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIFByZS1zZXQgUG9wcGVyJ3MgcGxhY2VtZW50IGF0dHJpYnV0ZSBpbiBvcmRlciB0byByZWFkIHRoZSBhcnJvdyBzaXplcyBwcm9wZXJseS5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgUG9wcGVyIG1peGVzIHVwIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGRpbWVuc2lvbnMgc2luY2UgdGhlIGluaXRpYWwgYXJyb3cgc3R5bGUgaXMgZm9yIHRvcCBwbGFjZW1lbnRcbiAgICAgICAgICAgIHRoaXMuX2dldFRpcEVsZW1lbnQoKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCcsIGRhdGEuc3RhdGUucGxhY2VtZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLl9jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdHJpZ2dlcnMpIHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9DTElDSyksIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG4gICAgICAgICAgY29udGV4dC50b2dnbGUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VFTlRFUikgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTSU4pXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VMRUFWRSkgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTT1VUKVxuXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudEluLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gdHJ1ZVxuICAgICAgICAgIGNvbnRleHQuX2VudGVyKClcbiAgICAgICAgfSlcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9XG4gICAgICAgICAgICBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG5cbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlKSAvLyBETyBOT1QgVVNFIElULiBJcyBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpXG4gIH1cblxuICBfZW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSB8fCB0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcblxuICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLnNob3coKVxuICAgICAgfVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKCkge1xuICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dClcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2FjdGl2ZVRyaWdnZXIpLmluY2x1ZGVzKHRydWUpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudClcblxuICAgIGZvciAoY29uc3QgZGF0YUF0dHJpYnV0ZSBvZiBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykpIHtcbiAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaGFzKGRhdGFBdHRyaWJ1dGUpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cmlidXRlXVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogZ2V0RWxlbWVudChjb25maWcuY29udGFpbmVyKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykpIHtcbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgY29uZmlnW2tleV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZy5zZWxlY3RvciA9IGZhbHNlXG4gICAgY29uZmlnLnRyaWdnZXIgPSAnbWFudWFsJ1xuXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSBjYW4gYmUgcmVwbGFjZWQgd2l0aDpcbiAgICAvLyBjb25zdCBrZXlzV2l0aERpZmZlcmVudFZhbHVlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykuZmlsdGVyKGVudHJ5ID0+IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlbnRyeVswXV0gIT09IHRoaXMuX2NvbmZpZ1tlbnRyeVswXV0pXG4gICAgLy8gYE9iamVjdC5mcm9tRW50cmllcyhrZXlzV2l0aERpZmZlcmVudFZhbHVlcylgXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2Rpc3Bvc2VQb3BwZXIoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgdGhpcy50aXAucmVtb3ZlKClcbiAgICAgIHRoaXMudGlwID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRvb2x0aXAuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vLyBqcy1kb2NzLXN0YXJ0IGFsbG93LWxpc3RcbmNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdEFsbG93bGlzdCA9IHtcbiAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgYXJlYTogW10sXG4gIGI6IFtdLFxuICBicjogW10sXG4gIGNvbDogW10sXG4gIGNvZGU6IFtdLFxuICBkZDogW10sXG4gIGRpdjogW10sXG4gIGRsOiBbXSxcbiAgZHQ6IFtdLFxuICBlbTogW10sXG4gIGhyOiBbXSxcbiAgaDE6IFtdLFxuICBoMjogW10sXG4gIGgzOiBbXSxcbiAgaDQ6IFtdLFxuICBoNTogW10sXG4gIGg2OiBbXSxcbiAgaTogW10sXG4gIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgbGk6IFtdLFxuICBvbDogW10sXG4gIHA6IFtdLFxuICBwcmU6IFtdLFxuICBzOiBbXSxcbiAgc21hbGw6IFtdLFxuICBzcGFuOiBbXSxcbiAgc3ViOiBbXSxcbiAgc3VwOiBbXSxcbiAgc3Ryb25nOiBbXSxcbiAgdTogW10sXG4gIHVsOiBbXVxufVxuLy8ganMtZG9jcy1lbmQgYWxsb3ctbGlzdFxuXG5jb25zdCB1cmlBdHRyaWJ1dGVzID0gbmV3IFNldChbXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2NpdGUnLFxuICAnaHJlZicsXG4gICdpdGVtdHlwZScsXG4gICdsb25nZGVzYycsXG4gICdwb3N0ZXInLFxuICAnc3JjJyxcbiAgJ3hsaW5rOmhyZWYnXG5dKVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgVVJMcyB0aGF0IGFyZSBzYWZlIHdydC4gWFNTIGluIFVSTCBuYXZpZ2F0aW9uXG4gKiBjb250ZXh0cy5cbiAqXG4gKiBTaG91dC1vdXQgdG8gQW5ndWxhciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvMTUuMi44L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzI0wzOFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9iZXR0ZXItcmVnZXhcbmNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/IWphdmFzY3JpcHQ6KSg/OlthLXowLTkrLi1dKzp8W14mOi8/I10qKD86Wy8/I118JCkpL2lcblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGUsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgIGlmICh1cmlBdHRyaWJ1dGVzLmhhcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHJpYnV0ZS5ub2RlVmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgcmV0dXJuIGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcihhdHRyaWJ1dGVSZWdleCA9PiBhdHRyaWJ1dGVSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAuc29tZShyZWdleCA9PiByZWdleC50ZXN0KGF0dHJpYnV0ZU5hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIGFsbG93TGlzdCwgc2FuaXRpemVGdW5jdGlvbikge1xuICBpZiAoIXVuc2FmZUh0bWwubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuc2FmZUh0bWxcbiAgfVxuXG4gIGlmIChzYW5pdGl6ZUZ1bmN0aW9uICYmIHR5cGVvZiBzYW5pdGl6ZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhbml0aXplRnVuY3Rpb24odW5zYWZlSHRtbClcbiAgfVxuXG4gIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKClcbiAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJylcbiAgY29uc3QgZWxlbWVudHMgPSBbXS5jb25jYXQoLi4uY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnROYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGFsbG93TGlzdCkuaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWxlbWVudC5hdHRyaWJ1dGVzKVxuICAgIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KGFsbG93TGlzdFsnKiddIHx8IFtdLCBhbGxvd0xpc3RbZWxlbWVudE5hbWVdIHx8IFtdKVxuXG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlTGlzdCkge1xuICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5ub2RlTmFtZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvdGVtcGxhdGUtZmFjdG9yeS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IERlZmF1bHRBbGxvd2xpc3QsIHNhbml0aXplSHRtbCB9IGZyb20gJy4vc2FuaXRpemVyLmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZSwgZ2V0RWxlbWVudCwgaXNFbGVtZW50IH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ1RlbXBsYXRlRmFjdG9yeSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBjb250ZW50OiB7fSwgLy8geyBzZWxlY3RvciA6IHRleHQgLCAgc2VsZWN0b3IyIDogdGV4dDIgLCB9XG4gIGV4dHJhQ2xhc3M6ICcnLFxuICBodG1sOiBmYWxzZSxcbiAgc2FuaXRpemU6IHRydWUsXG4gIHNhbml0aXplRm46IG51bGwsXG4gIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBjb250ZW50OiAnb2JqZWN0JyxcbiAgZXh0cmFDbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgdGVtcGxhdGU6ICdzdHJpbmcnXG59XG5cbmNvbnN0IERlZmF1bHRDb250ZW50VHlwZSA9IHtcbiAgZW50cnk6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb258bnVsbCknLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRlbXBsYXRlRmFjdG9yeSBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KVxuICAgICAgLm1hcChjb25maWcgPT4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29uZmlnKSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgfVxuXG4gIGhhc0NvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGVudCgpLmxlbmd0aCA+IDBcbiAgfVxuXG4gIGNoYW5nZUNvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuX2NoZWNrQ29udGVudChjb250ZW50KVxuICAgIHRoaXMuX2NvbmZpZy5jb250ZW50ID0geyAuLi50aGlzLl9jb25maWcuY29udGVudCwgLi4uY29udGVudCB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRvSHRtbCgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRlbXBsYXRlV3JhcHBlci5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKHRoaXMuX2NvbmZpZy50ZW1wbGF0ZSlcblxuICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCB0ZXh0XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcuY29udGVudCkpIHtcbiAgICAgIHRoaXMuX3NldENvbnRlbnQodGVtcGxhdGVXcmFwcGVyLCB0ZXh0LCBzZWxlY3RvcilcbiAgICB9XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlV3JhcHBlci5jaGlsZHJlblswXVxuICAgIGNvbnN0IGV4dHJhQ2xhc3MgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuZXh0cmFDbGFzcylcblxuICAgIGlmIChleHRyYUNsYXNzKSB7XG4gICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKC4uLmV4dHJhQ2xhc3Muc3BsaXQoJyAnKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGVcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcpIHtcbiAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29uZmlnLmNvbnRlbnQpXG4gIH1cblxuICBfY2hlY2tDb250ZW50KGFyZykge1xuICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCBjb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhhcmcpKSB7XG4gICAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKHsgc2VsZWN0b3IsIGVudHJ5OiBjb250ZW50IH0sIERlZmF1bHRDb250ZW50VHlwZSlcbiAgICB9XG4gIH1cblxuICBfc2V0Q29udGVudCh0ZW1wbGF0ZSwgY29udGVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCB0ZW1wbGF0ZSlcblxuICAgIGlmICghdGVtcGxhdGVFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZW50ID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29udGVudClcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgdGVtcGxhdGVFbGVtZW50LnJlbW92ZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KGNvbnRlbnQpKSB7XG4gICAgICB0aGlzLl9wdXRFbGVtZW50SW5UZW1wbGF0ZShnZXRFbGVtZW50KGNvbnRlbnQpLCB0ZW1wbGF0ZUVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKGNvbnRlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50XG4gIH1cblxuICBfbWF5YmVTYW5pdGl6ZShhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNhbml0aXplID8gc2FuaXRpemVIdG1sKGFyZywgdGhpcy5fY29uZmlnLmFsbG93TGlzdCwgdGhpcy5fY29uZmlnLnNhbml0aXplRm4pIDogYXJnXG4gIH1cblxuICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGUoYXJnLCBbdGhpc10pXG4gIH1cblxuICBfcHV0RWxlbWVudEluVGVtcGxhdGUoZWxlbWVudCwgdGVtcGxhdGVFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5hcHBlbmQoZWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRlbXBsYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZUZhY3RvcnlcbiIsICJpbXBvcnQgVG9vbHRpcCBmcm9tIFwianMvYm9vdHN0cmFwL3NyYy90b29sdGlwXCI7XG5cbigoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIG5ldyBUb29sdGlwKGVsKVxuICAgIH0pXG59KSgpXG4iLCAiKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlJykuZm9yRWFjaCgodGFibGUpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3RhYmxlLXJlc3BvbnNpdmUnXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGFibGUuY2xvbmVOb2RlKHRydWUpKVxuICAgICAgICB0YWJsZS5wYXJlbnROb2RlPy5yZXBsYWNlQ2hpbGQod3JhcHBlciwgdGFibGUpXG4gICAgfSlcbn0pKClcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9zd2lwZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdzd2lwZSdcbmNvbnN0IEVWRU5UX0tFWSA9ICcuYnMuc3dpcGUnXG5jb25zdCBFVkVOVF9UT1VDSFNUQVJUID0gYHRvdWNoc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSE1PVkUgPSBgdG91Y2htb3ZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hFTkQgPSBgdG91Y2hlbmQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSRE9XTiA9IGBwb2ludGVyZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJVUCA9IGBwb2ludGVydXAke0VWRU5UX0tFWX1gXG5jb25zdCBQT0lOVEVSX1RZUEVfVE9VQ0ggPSAndG91Y2gnXG5jb25zdCBQT0lOVEVSX1RZUEVfUEVOID0gJ3BlbidcbmNvbnN0IENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCA9ICdwb2ludGVyLWV2ZW50J1xuY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgZW5kQ2FsbGJhY2s6IG51bGwsXG4gIGxlZnRDYWxsYmFjazogbnVsbCxcbiAgcmlnaHRDYWxsYmFjazogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgZW5kQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICBsZWZ0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICByaWdodENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTd2lwZSBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgaWYgKCFlbGVtZW50IHx8ICFTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2RlbHRhWCA9IDBcbiAgICB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudClcbiAgICB0aGlzLl9pbml0RXZlbnRzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZGlzcG9zZSgpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX3N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WFxuICAgIH1cbiAgfVxuXG4gIF9lbmQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLl9kZWx0YVhcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVTd2lwZSgpXG4gICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuZW5kQ2FsbGJhY2spXG4gIH1cblxuICBfbW92ZShldmVudCkge1xuICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxID9cbiAgICAgIDAgOlxuICAgICAgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5fZGVsdGFYXG4gIH1cblxuICBfaGFuZGxlU3dpcGUoKSB7XG4gICAgY29uc3QgYWJzRGVsdGFYID0gTWF0aC5hYnModGhpcy5fZGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRhWCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRhWCAvIHRoaXMuX2RlbHRhWFxuXG4gICAgdGhpcy5fZGVsdGFYID0gMFxuXG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV4ZWN1dGUoZGlyZWN0aW9uID4gMCA/IHRoaXMuX2NvbmZpZy5yaWdodENhbGxiYWNrIDogdGhpcy5fY29uZmlnLmxlZnRDYWxsYmFjaylcbiAgfVxuXG4gIF9pbml0RXZlbnRzKCkge1xuICAgIGlmICh0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUlVQLCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNITU9WRSwgZXZlbnQgPT4gdGhpcy5fbW92ZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hFTkQsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpXG4gICAgfVxuICB9XG5cbiAgX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGlzU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXBlXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kXG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcbmltcG9ydCBTd2lwZSBmcm9tICcuL3V0aWwvc3dpcGUuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjYXJvdXNlbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNhcm91c2VsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcblxuY29uc3QgT1JERVJfTkVYVCA9ICduZXh0J1xuY29uc3QgT1JERVJfUFJFViA9ICdwcmV2J1xuY29uc3QgRElSRUNUSU9OX0xFRlQgPSAnbGVmdCdcbmNvbnN0IERJUkVDVElPTl9SSUdIVCA9ICdyaWdodCdcblxuY29uc3QgRVZFTlRfU0xJREUgPSBgc2xpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TTElEID0gYHNsaWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSdcbmNvbnN0IENMQVNTX05BTUVfRU5EID0gJ2Nhcm91c2VsLWl0ZW0tZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFSVCA9ICdjYXJvdXNlbC1pdGVtLXN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9ORVhUID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCdcbmNvbnN0IENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gU0VMRUNUT1JfQUNUSVZFICsgU0VMRUNUT1JfSVRFTVxuY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJ1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycydcbmNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJ1xuXG5jb25zdCBLRVlfVE9fRElSRUNUSU9OID0ge1xuICBbQVJST1dfTEVGVF9LRVldOiBESVJFQ1RJT05fUklHSFQsXG4gIFtBUlJPV19SSUdIVF9LRVldOiBESVJFQ1RJT05fTEVGVFxufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpbnRlcnZhbDogNTAwMCxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHBhdXNlOiAnaG92ZXInLFxuICByaWRlOiBmYWxzZSxcbiAgdG91Y2g6IHRydWUsXG4gIHdyYXA6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsIC8vIFRPRE86djYgcmVtb3ZlIGJvb2xlYW4gc3VwcG9ydFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICByaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIHRvdWNoOiAnYm9vbGVhbicsXG4gIHdyYXA6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgdGhpcy50b3VjaFRpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBudWxsXG5cbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ESUNBVE9SUywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJpZGUgPT09IENMQVNTX05BTUVfQ0FST1VTRUwpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgbmV4dCgpIHtcbiAgICB0aGlzLl9zbGlkZShPUkRFUl9ORVhUKVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIEZJWE1FIFRPRE8gdXNlIGBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVgXG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICB0aGlzLl9zbGlkZShPUkRFUl9QUkVWKVxuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhckludGVydmFsKClcbiAgfVxuXG4gIGN5Y2xlKCkge1xuICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKVxuICAgIHRoaXMuX3VwZGF0ZUludGVydmFsKClcblxuICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5uZXh0V2hlblZpc2libGUoKSwgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICB9XG5cbiAgX21heWJlRW5hYmxlQ3ljbGUoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucmlkZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLmN5Y2xlKCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmN5Y2xlKClcbiAgfVxuXG4gIHRvKGluZGV4KSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLl9nZXRJdGVtcygpXG4gICAgaWYgKGluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9nZXRBY3RpdmUoKSlcbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlciA9IGluZGV4ID4gYWN0aXZlSW5kZXggPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuXG4gICAgdGhpcy5fc2xpZGUob3JkZXIsIGl0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3N3aXBlSGVscGVyKSB7XG4gICAgICB0aGlzLl9zd2lwZUhlbHBlci5kaXNwb3NlKClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IGNvbmZpZy5pbnRlcnZhbFxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRU5URVIsICgpID0+IHRoaXMucGF1c2UoKSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUxFQVZFLCAoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiBTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBmb3IgKGNvbnN0IGltZyBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGltZywgRVZFTlRfRFJBR19TVEFSVCwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgICB9XG5cbiAgICBjb25zdCBlbmRDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgIT09ICdob3ZlcicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgIH1cblxuICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICB9XG5cbiAgICBjb25zdCBzd2lwZUNvbmZpZyA9IHtcbiAgICAgIGxlZnRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fTEVGVCkpLFxuICAgICAgcmlnaHRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fUklHSFQpKSxcbiAgICAgIGVuZENhbGxiYWNrOiBlbmRDYWxsQmFja1xuICAgIH1cblxuICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbmV3IFN3aXBlKHRoaXMuX2VsZW1lbnQsIHN3aXBlQ29uZmlnKVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IEtFWV9UT19ESVJFQ1RJT05bZXZlbnQua2V5XVxuICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSlcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbXMoKS5pbmRleE9mKGVsZW1lbnQpXG4gIH1cblxuICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChpbmRleCkge1xuICAgIGlmICghdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgIGFjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG5cbiAgICBjb25zdCBuZXdBY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGBbZGF0YS1icy1zbGlkZS10bz1cIiR7aW5kZXh9XCJdYCwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICBpZiAobmV3QWN0aXZlSW5kaWNhdG9yKSB7XG4gICAgICBuZXdBY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJylcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2FjdGl2ZUVsZW1lbnQgfHwgdGhpcy5fZ2V0QWN0aXZlKClcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEludGVydmFsID0gTnVtYmVyLnBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWludGVydmFsJyksIDEwKVxuXG4gICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWxcbiAgfVxuXG4gIF9zbGlkZShvcmRlciwgZWxlbWVudCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZ2V0QWN0aXZlKClcbiAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVFxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRJdGVtcygpLCBhY3RpdmVFbGVtZW50LCBpc05leHQsIHRoaXMuX2NvbmZpZy53cmFwKVxuXG4gICAgaWYgKG5leHRFbGVtZW50ID09PSBhY3RpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KVxuXG4gICAgY29uc3QgdHJpZ2dlckV2ZW50ID0gZXZlbnROYW1lID0+IHtcbiAgICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBldmVudE5hbWUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5fb3JkZXJUb0RpcmVjdGlvbihvcmRlciksXG4gICAgICAgIGZyb206IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KSxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRyaWdnZXJFdmVudChFVkVOVF9TTElERSlcblxuICAgIGlmIChzbGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgLy8gVE9ETzogY2hhbmdlIHRlc3RzIHRoYXQgdXNlIGVtcHR5IGRpdnMgdG8gYXZvaWQgdGhpcyBjaGVja1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLnBhdXNlKClcblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnRJbmRleClcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbmV4dEVsZW1lbnRcblxuICAgIGNvbnN0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9TVEFSVCA6IENMQVNTX05BTUVfRU5EXG4gICAgY29uc3Qgb3JkZXJDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX05FWFQgOiBDTEFTU19OQU1FX1BSRVZcblxuICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpXG5cbiAgICByZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSwgb3JkZXJDbGFzc05hbWUsIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJRClcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIGFjdGl2ZUVsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKVxuICB9XG5cbiAgX2dldEFjdGl2ZSgpIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtcygpIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICB9XG5cbiAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfUFJFViA6IE9SREVSX05FWFRcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWXG4gIH1cblxuICBfb3JkZXJUb0RpcmVjdGlvbihvcmRlcikge1xuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVFxuICAgIH1cblxuICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9TTElERSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NBUk9VU0VMKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGNhcm91c2VsID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG4gIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1zbGlkZS10bycpXG5cbiAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICBjYXJvdXNlbC50byhzbGlkZUluZGV4KVxuICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKHRoaXMsICdzbGlkZScpID09PSAnbmV4dCcpIHtcbiAgICBjYXJvdXNlbC5uZXh0KClcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjYXJvdXNlbC5wcmV2KClcbiAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfUklERSlcblxuICBmb3IgKGNvbnN0IGNhcm91c2VsIG9mIGNhcm91c2Vscykge1xuICAgIENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UoY2Fyb3VzZWwpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKENhcm91c2VsKVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwgImltcG9ydCBDYXJvdXNlbCBmcm9tIFwianMvYm9vdHN0cmFwL3NyYy9jYXJvdXNlbFwiO1xuXG4oKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5jYXJvdXNlbFwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIG5ldyBDYXJvdXNlbChlbClcbiAgfSlcbn0pKClcbiIsICIoKCkgPT4ge1xuICAndXNlIHN0cmljdCdcblxuICBsZXQgc2Nyb2xsaW5nID0gZmFsc2VcblxuICBjb25zdCBzY3JvbGwgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRpcjogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgaWYgKHNjcm9sbGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNjcm9sbGluZyA9IHRydWVcblxuICAgIGNvbnN0IGlubmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtaW5uZXInKSBhcyBIVE1MRWxlbWVudFxuICAgIGNvbnN0IHN0ZXAgPSBpbm5lci5vZmZzZXRXaWR0aFxuICAgIGxldCBsZWZ0ID0gMFxuICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgbGVmdCA9IGlubmVyLnNjcm9sbExlZnQgLSBzdGVwXG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSBNYXRoLm1pbihpbm5lci5zY3JvbGxXaWR0aCAtIGlubmVyLmNsaWVudFdpZHRoLCBpbm5lci5zY3JvbGxMZWZ0ICsgc3RlcClcbiAgICB9XG4gICAgaWYgKGxlZnQgPD0gMCkge1xuICAgICAgc2Nyb2xsaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlubmVyLnNjcm9sbCh7XG4gICAgICBsZWZ0XG4gICAgfSlcbiAgICBjb25zdCBjaGVja2VyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGxlZnQgPT09IGlubmVyLnNjcm9sbExlZnQpIHtcbiAgICAgICAgc2Nyb2xsaW5nID0gZmFsc2VcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja2VyKVxuICAgICAgfVxuICAgIH0sIDUwKVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLnNsaWRlLWNvbnRyb2wtbGVmdCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWxlbWVudCwgJ2xlZnQnKVxuICAgICAgfSlcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2xpZGUtY29udHJvbC1yaWdodCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWxlbWVudCwgJ3JpZ2h0JylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2xpZGUtaW5uZXInKVxuICAgIGVscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGxldCBzdGFydFggPSAwXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgc3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWwsIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA+IHN0YXJ0WCA/ICdsZWZ0JyA6ICdyaWdodCcpXG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB9KVxuICB9KVxufSkoKVxuIiwgImNsYXNzIEdpc2N1cyB7XG4gICAgc2V0VGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBmcmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJRnJhbWVFbGVtZW50PihcbiAgICAgICAgICAgICdpZnJhbWUuZ2lzY3VzLWZyYW1lJ1xuICAgICAgICApXG5cbiAgICAgICAgZnJhbWVzLmZvckVhY2goKGZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gKG5ldyBVUkwoZnJhbWUuc3JjKSkub3JpZ2luO1xuICAgICAgICAgICAgZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGdpc2N1czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGAke2VuZHBvaW50fS90aGVtZXMvJHt0aGVtZX0uY3NzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbmRwb2ludFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpc2N1cztcbiIsICJpbXBvcnQgR2lzY3VzIGZyb20gJ21vZHMvZ2lzY3VzL2pzJ1xuKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcblxuICAgIGNvbnN0IGdpc2N1cyA9IG5ldyBHaXNjdXMoKVxuXG4gICAgY29uc3Qgc2V0VGhlbWUgPSAodGhlbWUgPSAnJykgPT4ge1xuICAgICAgICBpZiAodGhlbWUgPT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoYi10aGVtZScpXG4gICAgICAgICAgICB0aGVtZSA9ICghc2F2ZWQgfHwgc2F2ZWQgPT09ICdhdXRvJykgPyBnZXRQcmVmZXJyZWRUaGVtZSgpIDogc2F2ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGdpc2N1cy5zZXRUaGVtZSh0aGVtZSlcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcmVmZXJyZWRUaGVtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcyA/ICdkYXJrJyA6ICdsaWdodCdcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2dpc2N1cy1sb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSB0aGVtZSBhZnRlciBsb2FkaW5nIHRoZSBnaXNjdXMgZnJhbWUuXG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZS5naXNjdXMtZnJhbWUuZ2lzY3VzLWZyYW1lLS1sb2FkaW5nJylcbiAgICAgICAgICAgIGZyYW1lPy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRoZW1lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIGlmcmFtZSB0aG9zZSBtaXNzZWQgdGhlIFwiZ2lzY3VzLWxvYWRcIiBldmVudCB0byBiZSBzZXQgYXMgdGhlIHJpZ2h0IHRoZW1lLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRoZW1lKClcbiAgICAgICAgfSwgMjAwMClcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdoYjp0aGVtZScsICgoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNldFRoZW1lKGUuZGV0YWlsLnRoZW1lKVxuICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyKVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBnZXRFbGVtZW50LCBpc0Rpc2FibGVkLCBpc1Zpc2libGVcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX0FDVElWQVRFID0gYGFjdGl2YXRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MgPSAnW2hyZWZdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJTktfSVRFTVMgPSBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX05BVl9JVEVNU30gPiAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiBudWxsLCAvLyBUT0RPOiB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICByb290TWFyZ2luOiAnMHB4IDBweCAtMjUlJyxcbiAgc21vb3RoU2Nyb2xsOiBmYWxzZSxcbiAgdGFyZ2V0OiBudWxsLFxuICB0aHJlc2hvbGQ6IFswLjEsIDAuNSwgMV1cbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhudW1iZXJ8bnVsbCknLCAvLyBUT0RPIHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gIHJvb3RNYXJnaW46ICdzdHJpbmcnLFxuICBzbW9vdGhTY3JvbGw6ICdib29sZWFuJyxcbiAgdGFyZ2V0OiAnZWxlbWVudCcsXG4gIHRocmVzaG9sZDogJ2FycmF5J1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgLy8gdGhpcy5fZWxlbWVudCBpcyB0aGUgb2JzZXJ2YWJsZXNDb250YWluZXIgYW5kIGNvbmZpZy50YXJnZXQgdGhlIG1lbnUgbGlua3Mgd3JhcHBlclxuICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fcm9vdEVsZW1lbnQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnQpLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnID8gbnVsbCA6IHRoaXMuX2VsZW1lbnRcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsXG4gICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhID0ge1xuICAgICAgdmlzaWJsZUVudHJ5VG9wOiAwLFxuICAgICAgcGFyZW50U2Nyb2xsVG9wOiAwXG4gICAgfVxuICAgIHRoaXMucmVmcmVzaCgpIC8vIGluaXRpYWxpemVcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKClcbiAgICB0aGlzLl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpXG5cbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IHRoaXMuX2dldE5ld09ic2VydmVyKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gVE9ETzogb24gdjYgdGFyZ2V0IHNob3VsZCBiZSBnaXZlbiBleHBsaWNpdGx5ICYgcmVtb3ZlIHRoZSB7dGFyZ2V0OiAnc3MtdGFyZ2V0J30gY2FzZVxuICAgIGNvbmZpZy50YXJnZXQgPSBnZXRFbGVtZW50KGNvbmZpZy50YXJnZXQpIHx8IGRvY3VtZW50LmJvZHlcblxuICAgIC8vIFRPRE86IHY2IE9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnMuIFVzZSByb290TWFyZ2luIG9ubHlcbiAgICBjb25maWcucm9vdE1hcmdpbiA9IGNvbmZpZy5vZmZzZXQgPyBgJHtjb25maWcub2Zmc2V0fXB4IDBweCAtMzAlYCA6IGNvbmZpZy5yb290TWFyZ2luXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aHJlc2hvbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcudGhyZXNob2xkID0gY29uZmlnLnRocmVzaG9sZC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnNtb290aFNjcm9sbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gdW5yZWdpc3RlciBhbnkgcHJldmlvdXMgbGlzdGVuZXJzXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSylcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSywgU0VMRUNUT1JfVEFSR0VUX0xJTktTLCBldmVudCA9PiB7XG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5nZXQoZXZlbnQudGFyZ2V0Lmhhc2gpXG4gICAgICBpZiAob2JzZXJ2YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCByb290ID0gdGhpcy5fcm9vdEVsZW1lbnQgfHwgd2luZG93XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9ic2VydmFibGVTZWN0aW9uLm9mZnNldFRvcCAtIHRoaXMuX2VsZW1lbnQub2Zmc2V0VG9wXG4gICAgICAgIGlmIChyb290LnNjcm9sbFRvKSB7XG4gICAgICAgICAgcm9vdC5zY3JvbGxUbyh7IHRvcDogaGVpZ2h0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENocm9tZSA2MCBkb2Vzbid0IHN1cHBvcnQgYHNjcm9sbFRvYFxuICAgICAgICByb290LnNjcm9sbFRvcCA9IGhlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfZ2V0TmV3T2JzZXJ2ZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3Q6IHRoaXMuX3Jvb3RFbGVtZW50LFxuICAgICAgdGhyZXNob2xkOiB0aGlzLl9jb25maWcudGhyZXNob2xkLFxuICAgICAgcm9vdE1hcmdpbjogdGhpcy5fY29uZmlnLnJvb3RNYXJnaW5cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gdGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSwgb3B0aW9ucylcbiAgfVxuXG4gIC8vIFRoZSBsb2dpYyBvZiBzZWxlY3Rpb25cbiAgX29ic2VydmVyQ2FsbGJhY2soZW50cmllcykge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlbnRyeSA9PiB0aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke2VudHJ5LnRhcmdldC5pZH1gKVxuICAgIGNvbnN0IGFjdGl2YXRlID0gZW50cnkgPT4ge1xuICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcCA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3BcbiAgICAgIHRoaXMuX3Byb2Nlc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50U2Nyb2xsVG9wID0gKHRoaXMuX3Jvb3RFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wXG4gICAgY29uc3QgdXNlclNjcm9sbHNEb3duID0gcGFyZW50U2Nyb2xsVG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3BcbiAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wID0gcGFyZW50U2Nyb2xsVG9wXG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcFxuICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyBkb3duLCBwaWNrIHRoZSBiaWdnZXIgb2Zmc2V0VG9wXG4gICAgICBpZiAodXNlclNjcm9sbHNEb3duICYmIGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgICAgLy8gaWYgcGFyZW50IGlzbid0IHNjcm9sbGVkLCBsZXQncyBrZWVwIHRoZSBmaXJzdCB2aXNpYmxlIGl0ZW0sIGJyZWFraW5nIHRoZSBpdGVyYXRpb25cbiAgICAgICAgaWYgKCFwYXJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAsIHBpY2sgdGhlIHNtYWxsZXN0IG9mZnNldFRvcFxuICAgICAgaWYgKCF1c2VyU2Nyb2xsc0Rvd24gJiYgIWVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpIHtcbiAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKVxuXG4gICAgY29uc3QgdGFyZ2V0TGlua3MgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgdGhpcy5fY29uZmlnLnRhcmdldClcblxuICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYW5jaG9yIGhhcyBhbiBpZCBhbmQgaXMgbm90IGRpc2FibGVkXG4gICAgICBpZiAoIWFuY2hvci5oYXNoIHx8IGlzRGlzYWJsZWQoYW5jaG9yKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoZGVjb2RlVVJJKGFuY2hvci5oYXNoKSwgdGhpcy5fZWxlbWVudClcblxuICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIG9ic2VydmFibGVTZWN0aW9uIGV4aXN0cyAmIGlzIHZpc2libGVcbiAgICAgIGlmIChpc1Zpc2libGUob2JzZXJ2YWJsZVNlY3Rpb24pKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldExpbmtzLnNldChkZWNvZGVVUkkoYW5jaG9yLmhhc2gpLCBhbmNob3IpXG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5zZXQoYW5jaG9yLmhhc2gsIG9ic2VydmFibGVTZWN0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9wcm9jZXNzKHRhcmdldCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0aGlzLl9jb25maWcudGFyZ2V0KVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIHRoaXMuX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpXG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwgeyByZWxhdGVkVGFyZ2V0OiB0YXJnZXQgfSlcbiAgfVxuXG4gIF9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KSB7XG4gICAgLy8gQWN0aXZhdGUgZHJvcGRvd24gcGFyZW50c1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBsaXN0R3JvdXAgb2YgU2VsZWN0b3JFbmdpbmUucGFyZW50cyh0YXJnZXQsIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKSkge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX0xJTktfSVRFTVMpKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xlYXJBY3RpdmVDbGFzcyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZU5vZGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChgJHtTRUxFQ1RPUl9UQVJHRVRfTElOS1N9LiR7Q0xBU1NfTkFNRV9BQ1RJVkV9YCwgcGFyZW50KVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhY3RpdmVOb2Rlcykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBzcHkgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSkpIHtcbiAgICBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzcHkpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWBcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBhcmVudDogbnVsbCxcbiAgdG9nZ2xlOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gIHRvZ2dsZTogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW11cblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3JFbmdpbmUuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXVxuXG4gICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUylcbiAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KSlcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSlcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RyaWdnZXJdLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSlcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGNvbnN0IF9jb25maWcgPSB7fVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5nZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHRoaXMpKSB7XG4gICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkudG9nZ2xlKClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCAiKCgpID0+IHtcbiAgY29uc3QgYWN0aXZlUGFyZW50ID0gKGNoaWxkOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGNoaWxkLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJy5oYi1kb2NzLW5hdi1saW5rcy1ncm91cCcpIGFzIEhUTUxFbGVtZW50XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignLmNvbGxhcHNlJyk/LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIGNvbnN0IGhlYWRpbmcgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLmhiLWRvY3MtbmF2LWhlYWRpbmcnKSBhcyBIVE1MRWxlbWVudFxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5oYi1kb2NzLW5hdi1pdGVtLXRvZ2dsZScpPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgYWN0aXZlUGFyZW50KHBhcmVudClcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZSA9IChsaW5rOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBhY3RpdmVQYXJlbnQobGluaylcbiAgfVxuXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGItZG9jcy1uYXYtbGlua3MgYVtocmVmPVwiJHtsb2NhdGlvbi5wYXRobmFtZX1cIl1gKSBhcyBIVE1MRWxlbWVudFxuICBpZiAobGluayA9PSBudWxsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBhY3RpdmUobGluaylcbn0pKClcbiIsICIoKCkgPT4ge1xuICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGItZG9jcy1uYXYtdG9nZ2xlJylcbiAgY29uc3QgZG9jcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYi1kb2NzJylcbiAgaWYgKCF0b2dnbGUgfHwgIWRvY3MpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9ICdzaWRlYmFyLW9mZidcblxuICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGRvY3MuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgIGRvY3MuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3MuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgfVxuICB9KVxufSkoKVxuIiwgIntcImJhY2tfdG9fdG9wXCI6e1wiYW5pbWF0aW9uXCI6dHJ1ZSxcImljb25faGVpZ2h0XCI6XCIyZW1cIixcImljb25fbmFtZVwiOlwicm9ja2V0XCIsXCJpY29uX3dpZHRoXCI6XCIyZW1cIixcInBvc2l0aW9uX2JvdHRvbVwiOlwiMXJlbVwiLFwicG9zaXRpb25fZW5kXCI6XCIxcmVtXCJ9LFwiYmlnZ2VyX3BpY3R1cmVcIjp7XCJwbGF5X2ludGVydmFsXCI6NTAwMCxcInNjYWxlXCI6Mn0sXCJibG9nXCI6e1wiYXJjaGl2ZXNcIjp7XCJwYWdpbmF0ZVwiOjMwfSxcImZ1bGxfd2lkdGhcIjpmYWxzZSxcImdpc2N1c1wiOntcImNhdGVnb3J5X2lkXCI6XCJESUNfa3dET0pQM3F0TTRDVmF2TVwiLFwicmVwb1wiOlwiaGJzdGFjay90aGVtZVwiLFwicmVwb19pZFwiOlwiUl9rZ0RPSlAzcXRBXCJ9LFwiaG9tZVwiOntcImZlYXR1cmVkX3Bvc3RzXCI6NSxcIm1haW5fc2VjdGlvbnNcIjpbXCJkb2NzXCIsXCJibG9nXCIse1widHV0b3JpYWxzXCI6XCJodHRwczovL3RoZXR1bXVsdHVvdXN1bmljb3Jub2ZkYXJrbmVzcy5naXRodWIuaW8vQ1BVLVhcIn1dLFwicGlubmVkX3Bvc3RzX3Bvc2l0aW9uXCI6XCJcIn0sXCJsaXN0X2NvbHNfbGdcIjozLFwibGlzdF9jb2xzX21kXCI6MixcImxpc3Rfc3R5bGVcIjpcIlwiLFwicGFnaW5hdGVcIjoxMixcInBvc3RfZGF0ZV9mb3JtYXRcIjpcIjpkYXRlX2xvbmdcIixcInBvc3RfdGh1bWJuYWlsXCI6dHJ1ZSxcInBvc3RfdGh1bWJuYWlsX2RlZmF1bHRcIjpcImltYWdlcy90aHVtYm5haWwucG5nXCIsXCJwb3N0X3RodW1ibmFpbF9oZWlnaHRcIjpcIjE2MHB4XCIsXCJwb3N0X3RodW1ibmFpbF9wbGFjZWhvbGRlclwiOlwiSEIgVEhFTUVcIixcInBvc3RfdGh1bWJuYWlsX3Bvc2l0aW9uXCI6XCJ0b3BcIixcInBvc3RfdGh1bWJuYWlsX3Jlc2l6ZV9oZWlnaHRcIjozNjAsXCJyZWxhdGVkX3Bvc3RzXCI6e1wibnVtYmVyXCI6MTB9LFwic2lkZWJhclwiOntcIm1heF93aWR0aFwiOlwiMzIwcHhcIixcInBvc2l0aW9uXCI6XCJzdGFydFwiLFwicG9zdHNcIjp7XCJmZWF0dXJlZF9jb3VudFwiOjUsXCJmaWxsXCI6dHJ1ZSxcImxpc3Rfc3R5bGVcIjpcInNsaWRlXCIsXCJyZWNlbnRfY291bnRcIjo1LFwic3R5bGVcIjpcInBpbGxzXCJ9LFwicHJvZmlsZVwiOntcImF2YXRhclwiOlwiL2ltYWdlcy9sb2dvLnBuZ1wiLFwiYXZhdGFyX3NpemVcIjoxMDAsXCJjb21wYW55XCI6XCJDT01QQU5ZXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJsb2NhdGlvblwiOlwiRWFydGhcIixcInNvY2lhbHNcIjp7XCJnaXRodWJcIjpcImhic3RhY2tcIixcIm1hc3RvZG9uXCI6XCJodHRwczovL3RlY2hodWIuc29jaWFsL0BoYnN0YWNrXCIsXCJyc3NcIjp0cnVlfSxcInRpdGxlXCI6XCJcIn0sXCJzdGlja3lcIjp0cnVlLFwidGF4b25vbWllc1wiOntcImNvdW50XCI6dHJ1ZSxcImxpbWl0XCI6MTAsXCJzZXBhcmF0ZVwiOmZhbHNlfSxcIndpZHRoXCI6MC4zNX0sXCJ0b2NcIjp7XCJwb3NpdGlvblwiOlwiZW5kXCJ9fSxcImJyZWFkY3J1bWJcIjp7XCJkaXNhYmxlZFwiOmZhbHNlfSxcImNvbG9yXCI6XCJsaWdodFwiLFwiY29udGVudF9wYW5lbFwiOntcImJvdHRvbVwiOlwiMjBweFwiLFwiY29tbWVudHNcIjp0cnVlLFwicmVwb1wiOntcImJyYW5jaFwiOlwibWFpblwiLFwicmVwb1wiOlwiaGJzdGFjay90aGVtZVwiLFwic2VydmljZVwiOlwiZ2l0aHViXCJ9fSxcImNzc19idW5kbGVfbmFtZVwiOlwiaGJcIixcImRvY3NcIjp7XCJkYXRlX2Zvcm1hdFwiOlwiOmRhdGVfbG9uZ1wiLFwiZ2lzY3VzXCI6e1wiY2F0ZWdvcnlfaWRcIjpcIkRJQ19rd0RPSlAzcXRNNENWYXZNXCIsXCJyZXBvXCI6XCJoYnN0YWNrL3RoZW1lXCIsXCJyZXBvX2lkXCI6XCJSX2tnRE9KUDNxdEFcIn19LFwiZmVhdHVyZWRfaW1hZ2VcIjp7XCJzaXplXCI6XCJ4NjQwXCJ9LFwiZm9vdGVyXCI6e1wic29jaWFsc1wiOntcIl9jb2xvclwiOnRydWUsXCJnaXRodWJcIjpcImhic3RhY2tcIixcIm1hc3RvZG9uXCI6XCJodHRwczovL3RlY2hodWIuc29jaWFsL0BoYnN0YWNrXCIsXCJyc3NcIjp0cnVlLFwidHdpdHRlclwiOlwicmF6b255YW5nXCJ9fSxcImZ1bGxfd2lkdGhcIjpmYWxzZSxcImZ1bGxfd2lkdGhfdHlwZXNcIjp7XCJkb2NzXCI6e1wiZW5hYmxlXCI6dHJ1ZX19LFwiZ2FsbGVyeVwiOntcImRhdGVfc29ydF9vcmRlclwiOlwiZGVzY1wiLFwiaGlnaGxpZ2h0X2ltYWdlc19jb3VudFwiOjEwLFwiaGlnaGxpZ2h0X2ltYWdlc19yZWN1cnNpdmVcIjpmYWxzZSxcInBhZ2luYXRlXCI6MjQsXCJ0aHVtYm5haWxfc2l6ZVwiOlwieDY0MFwifSxcImhlYWRlclwiOntcImJhbm5lclwiOntcIm5hdmJhcl9vcGFjaXR5XCI6MC44LFwidHJhbnNwYXJlbnRpemVfbmF2YmFyX2JnXCI6dHJ1ZX0sXCJicmFuZFwiOlwiUm9yYW42MCBCbG9nXCIsXCJicmVha3BvaW50XCI6XCJsZ1wiLFwiZnVsbF93aWR0aFwiOnRydWUsXCJzb2NpYWxzXCI6e1wiZ2l0aHViXCI6XCJoYnN0YWNrXCIsXCJtYXN0b2RvblwiOlwiaHR0cHM6Ly90ZWNoaHViLnNvY2lhbC9AaGJzdGFja1wiLFwicnNzXCI6dHJ1ZX0sXCJzdGlja3lcIjp0cnVlLFwidGhlbWVfdG9nZ2xlXCI6e1wic3R5bGVcIjpcInN3aXRjaFwifX0sXCJoZWFkaW5nX3NpZ25cIjp7XCJjb250YWluZXJzXCI6e1wiLmhiLWJsb2ctcG9zdC1jb250ZW50XCI6e30sXCIuaGItZG9jcy1kb2MtY29udGVudFwiOnt9fSxcInN5bWJvbFwiOlwiXHUwMEE3XCJ9LFwianNfYnVuZGxlX25hbWVcIjpcImhiXCIsXCJsb2dvXCI6XCIvaW1hZ2VzL2xvZ28ucG5nXCIsXCJtb2R1bGVzXCI6e1wiY29kZS1ibG9jay1wYW5lbFwiOntcImpzX3Jlc291cmNlc1wiOlt7XCJwYXJ0aWFsXCI6XCJjb2RlLWJsb2NrLXBhbmVsL2Fzc2V0cy9qcy1yZXNvdXJjZVwifV19fSxcInBhZ2luYXRpb25cIjp7XCJhbGlnbm1lbnRcIjpcImNlbnRlclwiLFwic2libGluZ3NcIjoyLFwic2l6ZVwiOlwiXCJ9LFwicHJvZ3Jlc3NfYmFyXCI6e1wiaGVpZ2h0XCI6XCIycHhcIixcImluaXRpYWxfd2lkdGhcIjoyMCxcImludGVydmFsXCI6NTAsXCJ0aW1lXCI6Mn0sXCJzY3JvbGxiYXJcIjp7XCJjb3JuZXJfYmdcIjpcIiM5MDkyOTRcIixcImhlaWdodFwiOlwiMTJweFwiLFwidGh1bWJfYmdcIjpcIiM5MDkyOTRcIixcInRyYWNrX2JnXCI6XCIjZjhmOWZhXCIsXCJ3aWR0aFwiOlwiMTJweFwifSxcInNlYXJjaFwiOntcIm1vZGFsXCI6dHJ1ZX0sXCJzdHlsZXNcIjp7XCJoYl90b3Bfb2Zmc2V0XCI6XCIyNHB4XCIsXCJwcmVmaXhcIjpcImhiLVwifSxcInRlcm1zXCI6e1wibGlzdF9zdHlsZVwiOlwiXCIsXCJwYWdpbmF0ZVwiOjEyLFwicHJvZmlsZVwiOnRydWUsXCJwcm9maWxlX21ldHJpY3NcIjp0cnVlfX0iLCAiaW1wb3J0ICogYXMgcGFyYW1zIGZyb20gJ0BwYXJhbXMnO1xuXG4oKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBwYXJhbXM/LmhlYWRpbmdfc2lnbj8uY29udGFpbmVyc1xuICAgICAgICBpZiAoIWNvbnRhaW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ltYm9sID0gcGFyYW1zPy5oZWFkaW5nX3NpZ24/LnN5bWJvbCA/PyAnXHUwMEE3J1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0b3IgaW4gY29udGFpbmVycykge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiaDIsIGgzLCBoNCwgaDUsIGg2XCIpLmZvckVhY2goKGhlYWRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGhlYWRpbmcuZ2V0QXR0cmlidXRlKCdpZCcpXG4gICAgICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgICAgICAgICBhbmNob3IuY2xhc3NOYW1lID0gJ2FuY2hvciBtcy0xJ1xuICAgICAgICAgICAgICAgIGFuY2hvci5ocmVmID0gYCMke2lkfWBcbiAgICAgICAgICAgICAgICBhbmNob3IuaW5uZXJUZXh0ID0gc3ltYm9sXG4gICAgICAgICAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZChhbmNob3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn0pKClcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldE5leHRBY3RpdmVFbGVtZW50LCBpc0Rpc2FibGVkIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndGFiJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX1gXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBIT01FX0tFWSA9ICdIb21lJ1xuY29uc3QgRU5EX0tFWSA9ICdFbmQnXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19EUk9QRE9XTiA9ICdkcm9wZG93bidcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9IGA6bm90KCR7U0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSlgXG5cbmNvbnN0IFNFTEVDVE9SX1RBQl9QQU5FTCA9ICcubGlzdC1ncm91cCwgLm5hdiwgW3JvbGU9XCJ0YWJsaXN0XCJdJ1xuY29uc3QgU0VMRUNUT1JfT1VURVIgPSAnLm5hdi1pdGVtLCAubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSU5ORVIgPSBgLm5hdi1saW5rJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgLmxpc3QtZ3JvdXAtaXRlbSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIFtyb2xlPVwidGFiXCJdJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfWBcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXScgLy8gVE9ETzogY291bGQgb25seSBiZSBgdGFiYCBpbiB2NlxuY29uc3QgU0VMRUNUT1JfSU5ORVJfRUxFTSA9IGAke1NFTEVDVE9SX0lOTkVSfSwgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSA9IGAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl1gXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRhYiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudClcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfVEFCX1BBTkVMKVxuXG4gICAgaWYgKCF0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgICAgLy8gVE9ETzogc2hvdWxkIHRocm93IGV4Y2VwdGlvbiBpbiB2NlxuICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtlbGVtZW50Lm91dGVySFRNTH0gaGFzIG5vdCBhIHZhbGlkIHBhcmVudCAke1NFTEVDVE9SX0lOTkVSX0VMRU19YClcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgaW5pdGlhbCBhcmlhIGF0dHJpYnV0ZXNcbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlcyh0aGlzLl9wYXJlbnQsIHRoaXMuX2dldENoaWxkcmVuKCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coKSB7IC8vIFNob3dzIHRoaXMgZWxlbSBhbmQgZGVhY3RpdmF0ZSB0aGUgYWN0aXZlIHNpYmxpbmcgaWYgZXhpc3RzXG4gICAgY29uc3QgaW5uZXJFbGVtID0gdGhpcy5fZWxlbWVudFxuICAgIGlmICh0aGlzLl9lbGVtSXNBY3RpdmUoaW5uZXJFbGVtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gU2VhcmNoIGZvciBhY3RpdmUgdGFiIG9uIHNhbWUgcGFyZW50IHRvIGRlYWN0aXZhdGUgaXRcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLl9nZXRBY3RpdmVFbGVtKClcblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IGFjdGl2ZSA/XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihhY3RpdmUsIEVWRU5UX0hJREUsIHsgcmVsYXRlZFRhcmdldDogaW5uZXJFbGVtIH0pIDpcbiAgICAgIG51bGxcblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKGlubmVyRWxlbSwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0OiBhY3RpdmUgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAoaGlkZUV2ZW50ICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShhY3RpdmUsIGlubmVyRWxlbSlcbiAgICB0aGlzLl9hY3RpdmF0ZShpbm5lckVsZW0sIGFjdGl2ZSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2FjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICB0aGlzLl9hY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGFjdGl2YXRlL3Nob3cgdGhlIHByb3BlciBzZWN0aW9uXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4JylcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIHRydWUpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2RlYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBlbGVtZW50LmJsdXIoKVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGRlYWN0aXZhdGUgdGhlIHNob3duIHNlY3Rpb24gdG9vXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCBmYWxzZSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0hJRERFTiwgeyByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbSB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICghKFtBUlJPV19MRUZUX0tFWSwgQVJST1dfUklHSFRfS0VZLCBBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZLCBIT01FX0tFWSwgRU5EX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLy8gc3RvcFByb3BhZ2F0aW9uL3ByZXZlbnREZWZhdWx0IGJvdGggYWRkZWQgdG8gc3VwcG9ydCB1cC9kb3duIGtleXMgd2l0aG91dCBzY3JvbGxpbmcgdGhlIHBhZ2VcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldENoaWxkcmVuKCkuZmlsdGVyKGVsZW1lbnQgPT4gIWlzRGlzYWJsZWQoZWxlbWVudCkpXG4gICAgbGV0IG5leHRBY3RpdmVFbGVtZW50XG5cbiAgICBpZiAoW0hPTUVfS0VZLCBFTkRfS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICBuZXh0QWN0aXZlRWxlbWVudCA9IGNoaWxkcmVuW2V2ZW50LmtleSA9PT0gSE9NRV9LRVkgPyAwIDogY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXNOZXh0ID0gW0FSUk9XX1JJR0hUX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSlcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50ID0gZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoY2hpbGRyZW4sIGV2ZW50LnRhcmdldCwgaXNOZXh0LCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChuZXh0QWN0aXZlRWxlbWVudCkge1xuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShuZXh0QWN0aXZlRWxlbWVudCkuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgX2dldENoaWxkcmVuKCkgeyAvLyBjb2xsZWN0aW9uIG9mIGlubmVyIGVsZW1lbnRzXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ORVJfRUxFTSwgdGhpcy5fcGFyZW50KVxuICB9XG5cbiAgX2dldEFjdGl2ZUVsZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldENoaWxkcmVuKCkuZmluZChjaGlsZCA9PiB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpKSB8fCBudWxsXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXMocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHBhcmVudCwgJ3JvbGUnLCAndGFibGlzdCcpXG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZCkge1xuICAgIGNoaWxkID0gdGhpcy5fZ2V0SW5uZXJFbGVtZW50KGNoaWxkKVxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKVxuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChjaGlsZClcbiAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBpc0FjdGl2ZSlcblxuICAgIGlmIChvdXRlckVsZW0gIT09IGNoaWxkKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhvdXRlckVsZW0sICdyb2xlJywgJ3ByZXNlbnRhdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoY2hpbGQsICdyb2xlJywgJ3RhYicpXG5cbiAgICAvLyBzZXQgYXR0cmlidXRlcyB0byB0aGUgcmVsYXRlZCBwYW5lbCB0b29cbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihjaGlsZClcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdyb2xlJywgJ3RhYnBhbmVsJylcblxuICAgIGlmIChjaGlsZC5pZCkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAnYXJpYS1sYWJlbGxlZGJ5JywgYCR7Y2hpbGQuaWR9YClcbiAgICB9XG4gIH1cblxuICBfdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgb3Blbikge1xuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChlbGVtZW50KVxuICAgIGlmICghb3V0ZXJFbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EUk9QRE9XTikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZSA9IChzZWxlY3RvciwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3Rvciwgb3V0ZXJFbGVtKVxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSwgb3BlbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBDTEFTU19OQU1FX0FDVElWRSlcbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fTUVOVSwgQ0xBU1NfTkFNRV9TSE9XKVxuICAgIG91dGVyRWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBvcGVuKVxuICB9XG5cbiAgX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgX2VsZW1Jc0FjdGl2ZShlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKVxuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgaW5uZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1saW5rKVxuICBfZ2V0SW5uZXJFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5tYXRjaGVzKFNFTEVDVE9SX0lOTkVSX0VMRU0pID8gZWxlbSA6IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ORVJfRUxFTSwgZWxlbSlcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIG91dGVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtaXRlbSlcbiAgX2dldE91dGVyRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xvc2VzdChTRUxFQ1RPUl9PVVRFUikgfHwgZWxlbVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS5zaG93KClcbn0pXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBvbiBmb2N1c1xuICovXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSkpIHtcbiAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KVxuICB9XG59KVxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVGFiKVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsICJpbXBvcnQgKiBhcyBwYXJhbXMgZnJvbSBcIkBwYXJhbXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3Mge1xuICAgIHByaXZhdGUgZWxlOiBIVE1MRWxlbWVudFxuXG4gICAgcHJpdmF0ZSBiYXI6IEhUTUxFbGVtZW50XG5cbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXJcblxuICAgIHByaXZhdGUgaW50ZXJ2YWw6IG51bWJlciBcblxuICAgIHByaXZhdGUgc3RlcDogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHBhcmFtcz8ucHJvZ3Jlc3NfYmFyPy53aWR0aCA/PyAyMFxuICAgICAgICB0aGlzLmludGVydmFsID0gcGFyYW1zPy5wcm9ncmVzc19iYXI/LmludGVydmFsID8/IDUwXG4gICAgICAgIGNvbnN0IHRpbWUgPSBwYXJhbXM/LnByb2dyZXNzX2Jhcj8udGltZSA/PyAyIFxuICAgICAgICB0aGlzLnN0ZXAgPSAoMTAwIC0gdGhpcy53aWR0aCkgLyB0aW1lIC8gMTAwMCAqIHRoaXMuaW50ZXJ2YWxcbiAgICAgICAgdGhpcy5pbml0QmFyKClcbiAgICAgICAgdGhpcy5pbml0UHJvZ3Jlc3MoKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFByb2dyZXNzKCkge1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2dyZXNzLmNsYXNzTmFtZSA9ICdoYi1wcm9ncmVzcyBwcm9ncmVzcyBwb3NpdGlvbi1maXhlZCB0b3AtMCB3LTEwMCByb3VuZGVkLTAgZC1ub25lJ1xuICAgICAgICBwcm9ncmVzcy5yb2xlID0gJ3Byb2dyZXNzYmFyJ1xuICAgICAgICBwcm9ncmVzcy5hcHBlbmRDaGlsZCh0aGlzLmJhcilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9ncmVzcylcbiAgICAgICAgdGhpcy5lbGUgPSBwcm9ncmVzc1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEJhcigpIHtcbiAgICAgICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYmFyLmNsYXNzTmFtZSA9ICdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJ1xuICAgICAgICBiYXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJyUnXG4gICAgICAgIHRoaXMuYmFyID0gYmFyXG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5lbGUuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53aWR0aCArPSB0aGlzLnN0ZXBcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLndpZHRoID0gYCR7dGhpcy53aWR0aH0lYFxuICAgICAgICB9LCB0aGlzLmludGVydmFsKVxuICAgIH1cbn1cbiIsICJpbXBvcnQgUHJvZ3Jlc3MgZnJvbSBcIi4vcHJvZ3Jlc3NcIjtcblxuKCgpID0+IHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IG5ldyBQcm9ncmVzcygpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgICBwcm9ncmVzcy5zaG93KClcbiAgICB9KVxufSkoKVxuIiwgIi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL2pzL2luZGV4LnVtZC5qc1xuXG4gIGltcG9ydCAnL2hiL21vZHVsZXMvY3VzdG9tL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9oZWFkZXIvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2dhbGxlcnkvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2JzLXRvb2x0aXAvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2Jhc2UvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2Nhcm91c2VsL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9zbGlkZS9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvZ2lzY3VzL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy90b2Mtc2Nyb2xsc3B5L2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9jb250ZW50LXBhbmVsL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9kb2NzL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9oZWFkaW5nLXNpZ24vanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvcHJvZ3Jlc3MtYmFyL2pzL2luZGV4LnRzJztcblxuICBcbiAgXG5cbmltcG9ydCBCaWdnZXJQaWN0dXJlIGZyb20gJ21vZHMvYmlnZ2VyLXBpY3R1cmUvYmlnZ2VyLXBpY3R1cmUudW1kLmpzJ1xuaW1wb3J0IFBhbmVsIGZyb20gJ2hiL21vZHVsZXMvYmlnZ2VyLXBpY3R1cmUvanMvcGFuZWwnXG5cbigoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgYnAgPSBCaWdnZXJQaWN0dXJlKHtcbiAgICAgICAgICAgIHRhcmdldDogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBwYW5lbCA9IG5ldyBQYW5lbChicCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1kb3dubG9hZCBoaS1zdmctaW5saW5lXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjEuMjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjEuMjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk0uNSA5LjlhLjUuNSAwIDAgMSAuNS41djIuNWExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF2LTIuNWEuNS41IDAgMCAxIDEgMHYyLjVhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ2LTIuNWEuNS41IDAgMCAxIC41LS41XCIvPlxuICA8cGF0aCBkPVwiTTcuNjQ2IDExLjg1NGEuNS41IDAgMCAwIC43MDggMGwzLTNhLjUuNSAwIDAgMC0uNzA4LS43MDhMOC41IDEwLjI5M1YxLjVhLjUuNSAwIDAgMC0xIDB2OC43OTNMNS4zNTQgOC4xNDZhLjUuNSAwIDEgMC0uNzA4LjcwOHpcIi8+XG48L3N2Zz5gLCBgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImJpIGJpLXNoYXJlIGhpLXN2Zy1pbmxpbmVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMS4yNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMS4yNWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBkPVwiTTEzLjUgMWExLjUgMS41IDAgMSAwIDAgMyAxLjUgMS41IDAgMCAwIDAtM00xMSAyLjVhMi41IDIuNSAwIDEgMSAuNjAzIDEuNjI4bC02LjcxOCAzLjEyYTIuNSAyLjUgMCAwIDEgMCAxLjUwNGw2LjcxOCAzLjEyYTIuNSAyLjUgMCAxIDEtLjQ4OC44NzZsLTYuNzE4LTMuMTJhMi41IDIuNSAwIDEgMSAwLTMuMjU2bDYuNzE4LTMuMTJBMi41IDIuNSAwIDAgMSAxMSAyLjVtLTguNSA0YTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zbTExIDUuNWExLjUgMS41IDAgMSAwIDAgMyAxLjUgMS41IDAgMCAwIDAtM1wiLz5cbjwvc3ZnPmAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktYXJyb3ctY2xvY2t3aXNlIGhpLXN2Zy1pbmxpbmVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMS4yNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMS4yNWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDNhNSA1IDAgMSAwIDQuNTQ2IDIuOTE0LjUuNSAwIDAgMSAuOTA4LS40MTdBNiA2IDAgMSAxIDggMnpcIi8+XG4gIDxwYXRoIGQ9XCJNOCA0LjQ2NlYuNTM0YS4yNS4yNSAwIDAgMSAuNDEtLjE5MmwyLjM2IDEuOTY2Yy4xMi4xLjEyLjI4NCAwIC4zODRMOC40MSA0LjY1OEEuMjUuMjUgMCAwIDEgOCA0LjQ2NlwiLz5cbjwvc3ZnPmAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktcGhvbmUtZmxpcCBoaS1zdmctaW5saW5lXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjEuMjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjEuMjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEgMUg1YTEgMSAwIDAgMC0xIDF2NmEuNS41IDAgMCAxLTEgMFYyYTIgMiAwIDAgMSAyLTJoNmEyIDIgMCAwIDEgMiAydjZhLjUuNSAwIDAgMS0xIDBWMmExIDEgMCAwIDAtMS0xbTEgMTNhMSAxIDAgMCAxLTEgMUg1YTEgMSAwIDAgMS0xLTF2LTJhLjUuNSAwIDAgMC0xIDB2MmEyIDIgMCAwIDAgMiAyaDZhMiAyIDAgMCAwIDItMnYtMmEuNS41IDAgMCAwLTEgMHpNMS43MTMgNy45NTRhLjUuNSAwIDEgMC0uNDE5LS45MDhjLS4zNDcuMTYtLjY1NC4zNDgtLjg4Mi41N0MuMTg0IDcuODQyIDAgOC4xMzkgMCA4LjVjMCAuNTQ2LjQwOC45NC44MjMgMS4yMDEuNDQuMjc4IDEuMDQzLjUxIDEuNzQ1LjY5NkMzLjk3OCAxMC43NzMgNS44OTggMTEgOCAxMXEuMTQ4IDAgLjI5NC0uMDAybC0xLjE0OCAxLjE0OGEuNS41IDAgMCAwIC43MDguNzA4bDItMmEuNS41IDAgMCAwIDAtLjcwOGwtMi0yYS41LjUgMCAxIDAtLjcwOC43MDhsMS4xNDUgMS4xNDRMOCAxMGMtMi4wNCAwLTMuODctLjIyMS01LjE3NC0uNTY5LS42NTYtLjE3NS0xLjE1MS0uMzc0LTEuNDctLjU3NUMxLjAxMiA4LjYzOSAxIDguNTA2IDEgOC41YzAtLjAwMyAwLS4wNTkuMTEyLS4xNy4xMTUtLjExMi4zMS0uMjQyLjYtLjM3NlptMTIuOTkzLS45MDhhLjUuNSAwIDAgMC0uNDE5LjkwOGMuMjkyLjEzNC40ODYuMjY0LjYuMzc3LjExMy4xMS4xMTMuMTY2LjExMy4xNjlzMCAuMDY1LS4xMy4xODdjLS4xMzIuMTIyLS4zNTIuMjYtLjY3Ny40LS42NDUuMjgtMS41OTYuNTIzLTIuNzYzLjY4N2EuNS41IDAgMCAwIC4xNC45OWMxLjIxMi0uMTcgMi4yNi0uNDMgMy4wMi0uNzU4LjM4LS4xNjQuNzEzLS4zNTcuOTYtLjU4Ny4yNDYtLjIyOS40NS0uNTM3LjQ1LS45MTkgMC0uMzYyLS4xODQtLjY2LS40MTItLjg4M3MtLjUzNS0uNDExLS44ODItLjU3MU03LjUgMmEuNS41IDAgMCAwIDAgMWgxYS41LjUgMCAwIDAgMC0xelwiLz5cbjwvc3ZnPmAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktcGxheS1jaXJjbGUgaGktc3ZnLWlubGluZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxLjI1ZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGQ9XCJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2XCIvPlxuICA8cGF0aCBkPVwiTTYuMjcxIDUuMDU1YS41LjUgMCAwIDEgLjUyLjAzOGwzLjUgMi41YS41LjUgMCAwIDEgMCAuODE0bC0zLjUgMi41QS41LjUgMCAwIDEgNiAxMC41di01YS41LjUgMCAwIDEgLjI3MS0uNDQ1XCIvPlxuPC9zdmc+YClcblxuICAgICAgICBjb25zdCBvbk9wZW4gPSAoY29udGFpbmVyOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgcGFuZWwuaW5pdChjb250YWluZXIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvblVwZGF0ZSA9IChjb250YWluZXI6IEhUTUxFbGVtZW50LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBwYW5lbC51cGRhdGUoY29udGFpbmVyLCBpdGVtKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvdyA9IChpbWdzLCBwb3MpID0+IHtcbiAgICAgICAgICAgIGJwLm9wZW4oe1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBpbWdzLFxuICAgICAgICAgICAgICAgIGludHJvOiAnZmFkZXVwJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zLFxuICAgICAgICAgICAgICAgIG9uT3Blbjogb25PcGVuLFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBvblVwZGF0ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY2FsZSA9IHBhcnNlSW50KCcyJylcblxuICAgICAgICBjb25zdCBkYXRhID0gKGltZzogSFRNTEltYWdlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWx0ID0gaW1nLmdldEF0dHJpYnV0ZSgnYWx0JylcbiAgICAgICAgICAgIGxldCBjYXB0aW9uID0gYWx0XG4gICAgICAgICAgICBjb25zdCBjYXB0aW9uRWxlID0gaW1nLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignZmlnY2FwdGlvbicpXG4gICAgICAgICAgICBpZiAoY2FwdGlvbkVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNhcHRpb24gPSBjYXB0aW9uRWxlLmlubmVyVGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbWc6IGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykgPz8gaW1nLnNyYyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNjYWxlICogKGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGVpZ2h0JykgPz8gaW1nLm5hdHVyYWxIZWlnaHQpLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBzY2FsZSAqIChpbWcuZ2V0QXR0cmlidXRlKCdkYXRhLXdpZHRoJykgPz8gaW1nLm5hdHVyYWxXaWR0aCksXG4gICAgICAgICAgICAgICAgYWx0OiBpbWcuZ2V0QXR0cmlidXRlKCdhbHQnKSxcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiBjYXB0aW9uLFxuICAgICAgICAgICAgICAgIHRodW1iOiBpbWcuc3JjLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcbiAgICAgICAgZm9yIChjb25zdCBpbWcgb2YgaW1hZ2VzKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgbGlua2FibGUgaW1hZ2VzLlxuICAgICAgICAgICAgaWYgKGltZy5jbG9zZXN0KCdhJykpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nczogQXJyYXk8dW5rbm93bj4gPSBbXVxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSAwXG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0ID0gaW1nLmNsb3Nlc3QoJy5iaWdnZXItcGljdHVyZXMnKVxuICAgICAgICAgICAgICAgIGlmIChzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheSBhIHNldCBvZiBpbWFnZXMuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVscyA9IHNldC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbWFnZUVsZW1lbnQ+KCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsc1tpXSA9PT0gaW1nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ncy5wdXNoKGRhdGEoZWxzW2ldKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGltZ3MucHVzaChkYXRhKGltZykpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2hvdyhpbWdzLCBwb3MpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuaW1nLWxpbmsnKSlcbiAgICAgICAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBzaG93KFt7XG4gICAgICAgICAgICAgICAgICAgIGltZzogbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBsaW5rLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogbGluay5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgfV0sIDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn0pKClcblxuICBcbiAgXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnaGIvbW9kdWxlcy9iYWNrLXRvLXRvcC9qcy9idXR0b24nO1xuXG4oKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IG5ldyBCdXR0b24oYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1yb2NrZXQgaGktc3ZnLWlubGluZSBoYi1iYWNrLXRvLXRvcC1pY29uXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjJlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjJlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk04IDhjLjgyOCAwIDEuNS0uODk1IDEuNS0yUzguODI4IDQgOCA0cy0xLjUuODk1LTEuNSAyUzcuMTcyIDggOCA4XCIvPlxuICA8cGF0aCBkPVwiTTExLjk1MyA4LjgxYy0uMTk1LTMuMzg4LS45NjgtNS41MDctMS43NzctNi44MTlDOS43MDcgMS4yMzMgOS4yMy43NTEgOC44NTcuNDU0YTMuNSAzLjUgMCAwIDAtLjQ2My0uMzE1QTIgMiAwIDAgMCA4LjI1LjA2NC41NS41NSAwIDAgMCA4IDBhLjU1LjU1IDAgMCAwLS4yNjYuMDczIDIgMiAwIDAgMC0uMTQyLjA4IDQgNCAwIDAgMC0uNDU5LjMzYy0uMzcuMzA4LS44NDQuODAzLTEuMzEgMS41Ny0uODA1IDEuMzIyLTEuNTc3IDMuNDMzLTEuNzc0IDYuNzU2bC0xLjQ5NyAxLjgyNi0uMDA0LjAwNUEyLjUgMi41IDAgMCAwIDIgMTIuMjAyVjE1LjVhLjUuNSAwIDAgMCAuOS4zbDEuMTI1LTEuNWMuMTY2LS4yMjIuNDItLjQuNzUyLS41Ny4yMTQtLjEwOC40MTQtLjE5Mi42MjUtLjI4MWwuMTk4LS4wODRjLjcuNDI4IDEuNTUuNjM1IDIuNC42MzVzMS43LS4yMDcgMi40LS42MzVxLjEuMDQ0LjE5Ni4wODNjLjIxMy4wOS40MTMuMTc0LjYyNy4yODIuMzMyLjE3LjU4Ni4zNDguNzUyLjU3bDEuMTI1IDEuNWEuNS41IDAgMCAwIC45LS4zdi0zLjI5OGEyLjUgMi41IDAgMCAwLS41NDgtMS41NjJ6TTEyIDEwLjQ0NXYuMDU1YzAgLjg2Ni0uMjg0IDEuNTg1LS43NSAyLjE0LjE0Ni4wNjQuMjkyLjEzLjQyNS4xOTkuMzkuMTk3LjguNDYgMS4xLjg2TDEzIDE0di0xLjc5OGExLjUgMS41IDAgMCAwLS4zMjctLjkzNXpNNC43NSAxMi42NEM0LjI4NCAxMi4wODUgNCAxMS4zNjYgNCAxMC41di0uMDU0bC0uNjczLjgyYTEuNSAxLjUgMCAwIDAtLjMyNy45MzZWMTRsLjIyNS0uM2MuMy0uNC43MS0uNjY0IDEuMS0uODYxLjEzMy0uMDY4LjI3OS0uMTM1LjQyNS0uMTk5TTguMDA5IDEuMDczcS4wOTYuMDYuMjI2LjE2M2MuMjg0LjIyNi42ODMuNjIxIDEuMDkgMS4yOEMxMC4xMzcgMy44MzYgMTEgNi4yMzcgMTEgMTAuNWMwIC44NTgtLjM3NCAxLjQ4LS45NDMgMS44OTNDOS41MTcgMTIuNzg2IDguNzgxIDEzIDggMTNzLTEuNTE3LS4yMTQtMi4wNTctLjYwN0M1LjM3MyAxMS45NzkgNSAxMS4zNTggNSAxMC41YzAtNC4xODIuODYtNi41ODYgMS42NzctNy45MjguNDA5LS42Ny44MS0xLjA4MiAxLjA5Ni0xLjMycS4xMzYtLjExMy4yMzYtLjE4WlwiLz5cbiAgPHBhdGggZD1cIk05LjQ3OSAxNC4zNjFjLS40OC4wOTMtLjk4LjEzOS0xLjQ3OS4xMzlzLS45OTktLjA0Ni0xLjQ3OS0uMTM5TDcuNiAxNS44YS41LjUgMCAwIDAgLjggMHpcIi8+XG48L3N2Zz5gKVxuICAgIH0pXG59KSgpO1xuIiwgImltcG9ydCB7ZGVmYXVsdCBhcyBwYXJhbXN9IGZyb20gJ0BwYXJhbXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBicCxcbiAgICAgICAgcHJpdmF0ZSBkb3dubG9hZEljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBzaGFyZUljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSByb3RhdGVJY29uOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgZmxpcEljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBwbGF5SWNvbjogc3RyaW5nLFxuICAgICkge1xuXG4gICAgfVxuXG4gICAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsJywgJ2QtZmxleCcsICdwb3NpdGlvbi1hYnNvbHV0ZScsICdteC1hdXRvJywgJ3N0YXJ0LTAnLCAnZW5kLTAnLCAndGV4dC1jZW50ZXInKVxuICAgICAgICBwLmFwcGVuZENoaWxkKHRoaXMucm90YXRlKGZhbHNlKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLnJvdGF0ZSh0cnVlKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLmZsaXAoKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLnBsYXkoKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLmRvd25sb2FkKCkpXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGhpcy5zaGFyZSgpKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocClcbiAgICB9XG5cbiAgICB1cGRhdGUoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgaXRlbSkge1xuICAgICAgICBjb25zdCBwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5icC1wYW5lbCcpIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgLy8gdXBkYXRlIGRvd25sb2FkIGxpbmsuXG4gICAgICAgIGNvbnN0IGQgPSBwLnF1ZXJ5U2VsZWN0b3IoJy5icC1wYW5lbC1kb3dubG9hZCcpIGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgICAgIGQuaHJlZiA9IGl0ZW0uaW1nXG4gICAgICAgIGQuZG93bmxvYWQgPSBpdGVtLmFsdFxuICAgIH1cblxuICAgIGltZ1dyYXAgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJwLWltZy13cmFwJykgYXMgSFRNTEVsZW1lbnRcbiAgICB9XG5cbiAgICByb3RhdGUgPSAoY2xvY2t3aXNlID0gZmFsc2UpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdSb3RhdGUnXG4gICAgICAgIGEucm9sZSA9ICdidXR0b24nXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYnAtcGFuZWwtYWN0aW9uJywgJ2JwLXBhbmVsLXJvdGF0ZScsIGNsb2Nrd2lzZSA/ICdicC1wYW5lbC1yb3RhdGUtY2xvY2t3aXNlJyA6ICdicC1wYW5lbC1yb3RhdGUtYW50aWNsb2Nrd2lzZScsICd0ZXh0LWRlY29yYXRpb24tbm9uZScsICdwLTInKVxuICAgICAgICBhLmlubmVySFRNTCA9IHRoaXMucm90YXRlSWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IHRoaXMuaW1nV3JhcCgpXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludCh3cmFwLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGUnKSA/PyAnMCcpXG4gICAgICAgICAgICB2YWx1ZSArPSBjbG9ja3dpc2UgPyA5MCA6IC05MFxuICAgICAgICAgICAgd3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlJywgdmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHdyYXApXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhXG4gICAgfVxuXG4gICAgZmxpcCA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdGbGlwJ1xuICAgICAgICBhLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdicC1wYW5lbC1mbGlwJywgJ3RleHQtZGVjb3JhdGlvbi1ub25lJywgJ3AtMicpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5mbGlwSWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IHRoaXMuaW1nV3JhcCgpXG4gICAgICAgICAgICBpZiAod3JhcC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpKSB7XG4gICAgICAgICAgICAgICAgd3JhcC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLWZsaXAnLCAndHJ1ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh3cmFwKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYVxuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtID0gKHdyYXA6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybTogQXJyYXk8c3RyaW5nPiA9IFtdXG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gd3JhcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlJylcbiAgICAgICAgaWYgKHJvdGF0ZSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLnB1c2goYHJvdGF0ZSgke3BhcnNlSW50KHJvdGF0ZSl9ZGVnKWApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmbGlwID0gd3JhcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpXG4gICAgICAgIGlmIChmbGlwKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0ucHVzaCgnc2NhbGVYKC0xKScpXG4gICAgICAgIH1cblxuICAgICAgICB3cmFwLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybS5qb2luKFwiIFwiKVxuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUpvYiA9IDBcblxuICAgIHByaXZhdGUgcGxheUludGVydmFsID0gMTAwMFxuXG4gICAgcGxheSA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdQbGF5J1xuICAgICAgICBhLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdicC1wYW5lbC1wbGF5JywgJ3RleHQtZGVjb3JhdGlvbi1ub25lJywgJ3AtMicpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5wbGF5SWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheUpvYikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wbGF5Sm9iKVxuICAgICAgICAgICAgICAgIHRoaXMucGxheUpvYiA9IDBcbiAgICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIHRoaXMucGxheUpvYiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJwLm5leHQoKVxuICAgICAgICAgICAgfSwgcGFyYW1zLmJpZ2dlcl9waWN0dXJlLnBsYXlfaW50ZXJ2YWwgPz8gNTAwMClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cbiAgICBkb3dubG9hZCA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdEb3dubG9hZCdcbiAgICAgICAgYS5yb2xlID0gJ2J1dHRvbidcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKCdicC1wYW5lbC1hY3Rpb24nLCAnYnAtcGFuZWwtZG93bmxvYWQnLCAndGV4dC1kZWNvcmF0aW9uLW5vbmUnLCAncC0yJylcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJycpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5kb3dubG9hZEljb25cbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cbiAgICB0d2l0dGVyU2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0ke3RoaXMuc2hhcmVMaW5rKCl9YFxuICAgIH1cblxuICAgIGZhY2Vib29rU2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dGhpcy5zaGFyZUxpbmsoKX1gXG4gICAgfVxuXG4gICAgc2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIH1cblxuICAgIHNoYXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdkcm9wZG93bi1jZW50ZXInLCAnYnAtcGFuZWwtc2hhcmUnLCAncC0yJylcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwidGV4dC13aGl0ZVwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIHRpdGxlPVwiU2hhcmVcIiBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+JHt0aGlzLnNoYXJlSWNvbn08L2E+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3RoaXMudHdpdHRlclNoYXJlTGluaygpfVwiPlR3aXR0ZXI8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt0aGlzLmZhY2Vib29rU2hhcmVMaW5rKCl9XCI+RmFjZWJvb2s8L2E+PC9saT5cbiAgICAgICAgICA8L3VsPmBcbiAgICAgICAgcmV0dXJuIGVsXG4gICAgfVxufVxuIiwgImltcG9ydCAqIGFzIHBhcmFtcyBmcm9tIFwiQHBhcmFtc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24ge1xuICAgIHByaXZhdGUgYnRuOiBIVE1MQnV0dG9uRWxlbWVudFxuXG4gICAgY29uc3RydWN0b3IoaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSAnaGItYmFjay10by10b3AnXG4gICAgICAgIGJ0bi5hcmlhTGFiZWwgPSAnQmFjayB0byB0b3AnXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSB0aGlzLnRyYW5zZm9ybUljb24oaWNvbilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgIHRoaXMuYnRuID0gYnRuXG5cbiAgICAgICAgbGV0IHkgPSAwXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAyMCB8fCB0b3AgPiAyMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbigpICYmIHRvcCA+IHkpIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsaW5nJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHkgPSB0b3BcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbigpICYmIGJ0bi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxpbmcnKVxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRyYW5zZm9ybUljb24oaWNvbikge1xuICAgICAgICByZXR1cm4gaWNvbi5yZXBsYWNlKC88c3ZnKC4qKT4oKC58XFxuKSopPFxcL3N2Zz4vLCBgPHN2ZyQxPlxuICA8ZGVmcz48Y2xpcFBhdGggaWQ9XCJpY29uXCI+JDI8L2NsaXBQYXRoPjwvZGVmcz5cbiAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2xpcC1wYXRoPVwidXJsKCNpY29uKVwiIC8+XG4gIDxyZWN0IHg9XCIwXCIgeT1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2xpcC1wYXRoPVwidXJsKCNpY29uKVwiIC8+XG48L3N2Zz5gKVxuICAgIH1cblxuICAgIHByaXZhdGUgcG9zSWNvbjogSFRNTEVsZW1lbnRcblxuICAgIHVwZGF0ZVBvcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBvc0ljb24pIHtcbiAgICAgICAgICAgIHRoaXMucG9zSWNvbiA9IHRoaXMuYnRuLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdyZWN0JylbMV1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC8gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICAgICAgICB0aGlzLnBvc0ljb24uc2V0QXR0cmlidXRlKCd5JywgKDEgLSBwb3MpICogMTAwICsgJyUnKVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuYnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgIH1cblxuICAgIGFuaW1hdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcz8uYmFja190b190b3A/LmFuaW1hdGlvbiAhPT0gZmFsc2VcbiAgICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQU1BLGFBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUU1RCxlQUFTLFVBQVUsTUFBTTtBQUN2QixZQUFJLFFBQVEsTUFBTTtBQUNoQixpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUFJLEtBQUssU0FBUyxNQUFNLG1CQUFtQjtBQUN6QyxjQUFJLGdCQUFnQixLQUFLO0FBQ3pCLGlCQUFPLGdCQUFnQixjQUFjLGVBQWUsU0FBUztBQUFBLFFBQy9EO0FBRUEsZUFBTztBQUFBLE1BQ1Q7QUFFQSxlQUFTQSxXQUFVLE1BQU07QUFDdkIsWUFBSSxhQUFhLFVBQVUsSUFBSSxFQUFFO0FBQ2pDLGVBQU8sZ0JBQWdCLGNBQWMsZ0JBQWdCO0FBQUEsTUFDdkQ7QUFFQSxlQUFTLGNBQWMsTUFBTTtBQUMzQixZQUFJLGFBQWEsVUFBVSxJQUFJLEVBQUU7QUFDakMsZUFBTyxnQkFBZ0IsY0FBYyxnQkFBZ0I7QUFBQSxNQUN2RDtBQUVBLGVBQVMsYUFBYSxNQUFNO0FBRTFCLFlBQUksT0FBTyxlQUFlLGFBQWE7QUFDckMsaUJBQU87QUFBQSxRQUNUO0FBRUEsWUFBSSxhQUFhLFVBQVUsSUFBSSxFQUFFO0FBQ2pDLGVBQU8sZ0JBQWdCLGNBQWMsZ0JBQWdCO0FBQUEsTUFDdkQ7QUFFQSxV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QixDQUFDO0FBQzlCLGNBQUksTUFBTTtBQUNWLGdCQUFNLE1BQU0sSUFBSSxRQUFRLGtCQUFrQjtBQUMxQyxjQUFJLEtBQUs7QUFFTCxrQkFBTSxNQUFNLElBQUksaUJBQW1DLEtBQUs7QUFDeEQscUJBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxRQUFRLEtBQUs7QUFDakMsa0JBQUksSUFBSSxDQUFDLE1BQU0sS0FBSztBQUNoQixzQkFBTTtBQUFBLGNBQ1Y7QUFDQSxtQkFBSyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztBQUFBLFlBQzFCO0FBQUEsVUFDSixPQUFPO0FBQ0gsaUJBQUssS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUFBLFVBQ3ZCO0FBRUEsZUFBSyxNQUFNLEdBQUc7QUFBQSxRQUNsQixDQUFDO0FBQUEsTUFDTDtBQUVBLFlBQU0sUUFBUSxNQUFNLEtBQUssU0FBUyxpQkFBOEIsV0FBVyxDQUFDO0FBQzVFLGlCQUFXLFFBQVEsT0FBTztBQUN0QixhQUFLLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUNsQyxZQUFFLGVBQWU7QUFDakIsZUFBSyxDQUFDO0FBQUEsWUFDRixLQUFLLEtBQUssYUFBYSxNQUFNO0FBQUEsWUFDN0IsS0FBSyxLQUFLO0FBQUEsWUFDVixTQUFTLEtBQUs7QUFBQSxVQUNsQixDQUFDLEdBQUcsQ0FBQztBQUFBLFFBQ1QsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMLEdBQUc7QUFPSCxHQUFDLE1BQU07QUFDSDtBQUVBLFdBQU8saUJBQWlCLG9CQUFvQixNQUFNO0FBQzlDLFlBQU0sTUFBTSxJQUFJLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUl4QjtBQUFBLElBQ0gsQ0FBQztBQUFBLEVBQ0wsR0FBRzsiLAogICJuYW1lcyI6IFsiaXNFbGVtZW50IiwgImdldENvbXB1dGVkU3R5bGUiLCAid2luZG93IiwgInNlbGYiLCAibWVyZ2VkIiwgImNsaXBwaW5nUGFyZW50cyIsICJyZWZlcmVuY2UiLCAicG9wcGVyT2Zmc2V0cyIsICJvZmZzZXQiLCAiZGVmYXVsdE1vZGlmaWVycyIsICJjcmVhdGVQb3BwZXIiLCAicG9wcGVyIiwgIm9wdGlvbnMiLCAic3RhdGUiLCAiZWZmZWN0IiwgIm5vb3BGbiIsICJuYW1lIiwgInN0eWxlIiwgInBsYWNlbWVudCIsICJwbGFjZW1lbnRzIiwgIl9sb29wIiwgIl9pIiwgImNoZWNrcyIsICJtaW4iLCAibWF4IiwgInRvUGFkZGluZ09iamVjdCIsICJub29wIiwgIm5vdyIsICJlbGVtZW50IiwgImRldGFjaCIsICJpbnN0YW5jZSIsICJjcmVhdGVfZnJhZ21lbnQiLCAibm90X2VxdWFsIiwgInVwZGF0ZSIsICJzdWJzY3JpYmUiLCAicnVuIiwgImN0eCIsICIkJHByb3BzIiwgImNhbGxiYWNrIiwgImZuIiwgIk5BTUUiLCAiQ0xBU1NfTkFNRV9TSE9XIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiVEFCX0tFWSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkRBVEFfQVBJX0tFWSIsICJFU0NBUEVfS0VZIiwgIkNMQVNTX05BTUVfU0hPVyIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0hJREUiLCAiRVZFTlRfSElEREVOIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiaXNWaXNpYmxlIiwgImhlYWRlciIsICJQb3BwZXIiLCAiTkFNRSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiQ0xBU1NfTkFNRV9GQURFIiwgIkNMQVNTX05BTUVfU0hPVyIsICJFVkVOVF9ISURFIiwgIkVWRU5UX0hJRERFTiIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0ZPQ1VTSU4iLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJQb3BwZXIiLCAiTkFNRSIsICJFVkVOVF9LRVkiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJEQVRBX0FQSV9LRVkiLCAiRVZFTlRfTU9VU0VFTlRFUiIsICJFVkVOVF9NT1VTRUxFQVZFIiwgIkVWRU5UX0xPQURfREFUQV9BUEkiLCAiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJEQVRBX0FQSV9LRVkiLCAiRVZFTlRfQ0xJQ0siLCAiRVZFTlRfTE9BRF9EQVRBX0FQSSIsICJDTEFTU19OQU1FX0FDVElWRSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkRBVEFfQVBJX0tFWSIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0hJREUiLCAiRVZFTlRfSElEREVOIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIkNMQVNTX05BTUVfU0hPVyIsICJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgImxpbmsiLCAiZG9jcyIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJFVkVOVF9ISURFIiwgIkVWRU5UX0hJRERFTiIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIkVWRU5UX0tFWURPV04iLCAiRVZFTlRfTE9BRF9EQVRBX0FQSSIsICJBUlJPV19MRUZUX0tFWSIsICJBUlJPV19SSUdIVF9LRVkiLCAiQVJST1dfVVBfS0VZIiwgIkFSUk9XX0RPV05fS0VZIiwgIkNMQVNTX05BTUVfQUNUSVZFIiwgIkNMQVNTX05BTUVfRkFERSIsICJDTEFTU19OQU1FX1NIT1ciLCAiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwgImVsZW1lbnQiLCAiQmlnZ2VyUGljdHVyZSJdCn0K

;
(() => {
  // ns-params:@params
  var params_default = { defaultLang: "sk", i18n: {}, icons: { copy: '<svg aria-hidden="true" class="bi bi-clipboard hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>\n  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>\n</svg>', expand: '<svg aria-hidden="true" class="bi bi-chevron-expand hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>\n</svg>', ln: '<svg aria-hidden="true" class="bi bi-list-ol hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>\n  <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>\n</svg>', wrap: '<svg aria-hidden="true" class="bi bi-text-wrap hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h9a2.5 2.5 0 0 1 0 5h-1.293l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708l-.647.646H11.5a1.5 1.5 0 0 0 0-3h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5"/>\n</svg>' }, line_nos: true, max_lines: 10, wrap: false };

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/snackbar@v0.1.2/assets/mods/snackbar/js/index.ts
  var Snackbar = class {
    container;
    constructor() {
      this.container = document.createElement("div");
      this.container.className = "snackbars";
      document.body.appendChild(this.container);
    }
    add(text, duration = 2e3) {
      const msg = document.createElement("div");
      msg.className = "snackbar";
      msg.innerText = text;
      this.container.appendChild(msg);
      setTimeout(() => {
        msg.remove();
      }, duration);
    }
  };
  var snackbar = new Snackbar();
  var js_default = snackbar;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/i18n-js@v0.2.1/assets/mods/i18n/translator.ts
  var Translator = class {
    constructor(translations, fallback) {
      this.translations = translations;
      this.fallback = fallback;
    }
    lang = "";
    getLang() {
      if (this.lang === "") {
        this.lang = document.documentElement.getAttribute("lang") ?? this.fallback;
      }
      return this.lang;
    }
    getTranslations() {
      const lang = this.getLang();
      return this.translations[lang] ?? this.getFallbackTranslations();
    }
    getFallbackTranslations() {
      return this.translations[this.fallback];
    }
    getFallbackTranslation(key) {
      const translations = this.getFallbackTranslations();
      return translations[key] ?? "";
    }
    translate(key, ctx, fallback = "") {
      const translations = this.getTranslations();
      if (!translations) {
        return fallback === "" ? key : fallback;
      }
      const translation = translations[key] ?? this.getFallbackTranslation(key);
      if (!translation) {
        return fallback === "" ? key : fallback;
      }
      if (!ctx) {
        return translation.other;
      }
      let format = ctx.count === 1 ? translation.one : translation.other;
      for (let name in ctx) {
        format = format.replace(`{${name}}`, ctx[name]);
      }
      return format;
    }
  };

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.7.0/assets/mods/code-block-panel/js/i18n.ts
  var i18n = new Translator(params_default.i18n, params_default.defaultLang);
  var i18n_default = i18n;

  // ns-hugo:/home/roran/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.7.0/assets/mods/code-block-panel/js/panel.ts
  var Panel = class {
    constructor(code) {
      this.code = code;
    }
    pre;
    wrapper;
    ele;
    init() {
      if (!params_default.line_nos) {
        this.code.classList.add("code-no-ln");
      }
      if (params_default.wrap) {
        this.code.classList.add("code-wrap");
      }
      this.pre = this.code.parentElement;
      this.ele = document.createElement("div");
      this.ele.className = "code-block-panel";
      this.wrapper = document.createElement("div");
      this.wrapper.className = "code-block-panel-wrapper";
      this.wrapper.appendChild(this.ele);
      this.maxLines();
      this.language();
      this.lineNoButton();
      this.wrapButton();
      this.expandButton();
      this.copyButton();
      this.pre.appendChild(this.wrapper);
    }
    // Returns the lines of code block.
    lines() {
      return Array.from(this.code.querySelectorAll(":scope > span"));
    }
    maxHeight;
    maxLines() {
      const lines = this.lines();
      const maxLines = this.code.closest(".highlight")?.getAttribute("data-max-lines") ?? params_default.max_lines;
      if (maxLines > 0 && lines.length > maxLines) {
        const offsetTop = lines[maxLines].offsetTop;
        if (offsetTop > 0) {
          this.pre.style.maxHeight = this.maxHeight = offsetTop + "px";
        }
      }
    }
    // Show the code language.
    language() {
      const lang = this.code.getAttribute("data-lang");
      if (!lang || lang === "fallback") {
        return;
      }
      const e = document.createElement("span");
      e.className = "code-block-lang";
      e.innerText = lang;
      this.pre.appendChild(e);
    }
    button(name, callback) {
      const btn = document.createElement("button");
      btn.className = "code-block-action code-block-action-" + name;
      btn.innerHTML = params_default.icons[name];
      btn.addEventListener("click", () => {
        callback();
      });
      return btn;
    }
    copyButton() {
      const btn = this.button("copy", () => {
        this.copy();
      });
      this.ele.appendChild(btn);
    }
    copy() {
      const clone = this.code.cloneNode(true);
      clone.querySelectorAll(".ln, :scope > span > span:first-child").forEach((ln) => {
        ln.remove();
      });
      navigator.clipboard.writeText(clone.innerText).then(() => {
        js_default.add(i18n_default.translate("copied", null, "Copied!"));
      }).catch((err) => {
        js_default.add(i18n_default.translate("copy_failed", null, "Copy failed."));
        console.error(err);
      });
    }
    wrapButton() {
      const btn = this.button("wrap", () => {
        this.toggleClass("code-wrap");
      });
      this.ele.appendChild(btn);
    }
    toggleClass(className) {
      if (this.code.classList.contains(className)) {
        this.code.classList.remove(className);
        return;
      }
      this.code.classList.add(className);
    }
    lineNoButton() {
      const btn = this.button("ln", () => {
        this.toggleClass("code-no-ln");
      });
      this.ele.appendChild(btn);
    }
    expandButton() {
      const btn = this.button("expand", () => {
        this.expand();
      });
      this.ele.appendChild(btn);
    }
    expand() {
      if (!this.pre.style.maxHeight && !this.maxHeight) {
        return;
      }
      if (this.pre.style.maxHeight) {
        this.pre.style.maxHeight = "";
        return;
      }
      this.pre.style.maxHeight = this.maxHeight;
    }
  };

  // <stdin>
  (() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("pre code").forEach((code) => {
        new Panel(code).init();
      });
    });
  })();
})();
