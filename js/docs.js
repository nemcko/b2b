! function() {
	angular.module("angularytics", []).provider("Angularytics", function() {
		var e = ["Google"];
		this.setEventHandlers = function(n) {
			angular.isString(n) && (n = [n]), e = [], angular.forEach(n, function(n) {
				e.push(t(n))
			})
		};
		var t = function(e) {
			return e.charAt(0).toUpperCase() + e.substring(1)
		},
		n = "$locationChangeSuccess";
		this.setPageChangeEvent = function(e) {
			n = e
		}, this.$get = ["$injector", "$rootScope", "$location", function(t, a, o) {
			var r = [];
			angular.forEach(e, function(e) {
				r.push(t.get("Angularytics" + e + "Handler"))
			});
			var i = function(e) {
				angular.forEach(r, function(t) {
					e(t)
				})
			},
			l = {};
			return l.init = function() {}, l.trackEvent = function(e, t, n, a, o) {
				i(function(r) {
					e && t && r.trackEvent(e, t, n, a, o)
				})
			}, l.trackPageView = function(e) {
				i(function(t) {
					e && t.trackPageView(e)
				})
			}, a.$on(n, function() {
				l.trackPageView(o.url())
			}), l
		}]
	})
}(),
function() {

}(),
function() {
	angular.module("angularytics").factory("AngularyticsConsoleHandler", ["$log", function(e) {
		var t = {};
		return t.trackPageView = function(t) {
			e.log("URL visited", t)
		}, t.trackEvent = function(t, n, a, o, r) {
			e.log("Event tracked", t, n, a, o, r)
		}, t
	}])
}(),
function() {
	angular.module("angularytics").factory("AngularyticsGoogleHandler", ["$log", function() {
		var e = {};
		return e.trackPageView = function(e) {
			_gaq.push(["_set", "page", e]), _gaq.push(["_trackPageview", e])
		}, e.trackEvent = function(e, t, n, a, o) {
			_gaq.push(["_trackEvent", e, t, n, a, o])
		}, e
	}]).factory("AngularyticsGoogleUniversalHandler", function() {
		var e = {};
		return e.trackPageView = function(e) {
			ga("set", "page", e), ga("send", "pageview", e)
		}, e.trackEvent = function(e, t, n, a, o) {
			ga("send", "event", e, t, n, a, {
				nonInteraction: o
			})
		}, e
	})
}(),
function() {
	angular.module("angularytics").filter("trackEvent", ["Angularytics", function(e) {
		return function(t, n, a, o, r, i) {
			return e.trackEvent(n, a, o, r, i), t
		}
	}])
}(), angular.module("ngMaterial", ["ng", "ngAnimate", "ngAria", "material.core", "material.core.theming.palette", "material.core.theming", "material.components.autocomplete", "material.components.backdrop", "material.components.bottomSheet", "material.components.button", "material.components.card", "material.components.checkbox", "material.components.content", "material.components.dialog", "material.components.divider", "material.components.gridList", "material.components.icon", "material.components.input", "material.components.list", "material.components.progressCircular", "material.components.progressLinear", "material.components.radioButton", "material.components.select", "material.components.sidenav", "material.components.slider", "material.components.sticky", "material.components.subheader", "material.components.swipe", "material.components.switch", "material.components.tabs", "material.components.textField", "material.components.toast", "material.components.toolbar", "material.components.tooltip", "material.components.whiteframe"]),
function() {
	"use strict";

	function e(e, n) {
		e.decorator("$$rAF", ["$delegate", t]), n.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("red").backgroundPalette("grey")
	}

	function t(e) {
		return e.throttle = function(t) {
			var n, a, o, r;
			return function() {
				n = arguments, r = this, o = t, a || (a = !0, e(function() {
					o.apply(r, n), a = !1
				}))
			}
		}, e
	}
	angular.module("material.core", ["material.core.theming"]).config(e), e.$inject = ["$provide", "$mdThemingProvider"]
}(),
function() {
	"use strict";

	function e(e, t) {
		function n(e) {
			return a ? "webkit" + e.charAt(0).toUpperCase() + e.substring(1) : e
		}
		var a = /webkit/i.test(t.vendorPrefix);
		return {
			KEY_CODE: {
				ENTER: 13,
				ESCAPE: 27,
				SPACE: 32,
				LEFT_ARROW: 37,
				UP_ARROW: 38,
				RIGHT_ARROW: 39,
				DOWN_ARROW: 40,
				TAB: 9
			},
			CSS: {
				TRANSITIONEND: "transitionend" + (a ? " webkitTransitionEnd" : ""),
				ANIMATIONEND: "animationend" + (a ? " webkitAnimationEnd" : ""),
				TRANSFORM: n("transform"),
				TRANSFORM_ORIGIN: n("transformOrigin"),
				TRANSITION: n("transition"),
				TRANSITION_DURATION: n("transitionDuration"),
				ANIMATION_PLAY_STATE: n("animationPlayState"),
				ANIMATION_DURATION: n("animationDuration"),
				ANIMATION_NAME: n("animationName"),
				ANIMATION_TIMING: n("animationTimingFunction"),
				ANIMATION_DIRECTION: n("animationDirection")
			},
			MEDIA: {
				sm: "(max-width: 600px)",
				"gt-sm": "(min-width: 600px)",
				md: "(min-width: 600px) and (max-width: 960px)",
				"gt-md": "(min-width: 960px)",
				lg: "(min-width: 960px) and (max-width: 1200px)",
				"gt-lg": "(min-width: 1200px)"
			},
			MEDIA_PRIORITY: ["gt-lg", "lg", "gt-md", "md", "gt-sm", "sm"]
		}
	}
	angular.module("material.core").factory("$mdConstant", e), e.$inject = ["$$rAF", "$sniffer"]
}(),
function() {
	function e(e, t) {
		function n() {
			return [].concat(b)
		}

		function a() {
			return b.length
		}

		function o(e) {
			return b.length && e > -1 && e < b.length
		}

		function r(e) {
			return e ? o(m(e) + 1) : !1
		}

		function i(e) {
			return e ? o(m(e) - 1) : !1
		}

		function l(e) {
			return o(e) ? b[e] : null
		}

		function s(e, t) {
			return b.filter(function(n) {
				return n[e] === t
			})
		}

		function d(e, t) {
			return e ? (angular.isNumber(t) || (t = b.length), b.splice(t, 0, e), m(e)) : -1
		}

		function c(e) {
			u(e) && b.splice(m(e), 1)
		}

		function m(e) {
			return b.indexOf(e)
		}

		function u(e) {
			return e && m(e) > -1
		}

		function p() {
			return b.length ? b[0] : null
		}

		function h() {
			return b.length ? b[b.length - 1] : null
		}

		function f(e, n, a, r) {
			a = a || g;
			for (var i = m(n);;) {
				if (!o(i)) return null;
				var l = i + (e ? -1 : 1),
				s = null;
				if (o(l) ? s = b[l] : t && (s = e ? h() : p(), l = m(s)), null === s || l === r) return null;
				if (a(s)) return s;
				angular.isUndefined(r) && (r = l), i = l
			}
		}
		var g = function() {
			return !0
		};
		e && !angular.isArray(e) && (e = Array.prototype.slice.call(e)), t = !!t;
		var b = e || [];
		return {
			items: n,
			count: a,
			inRange: o,
			contains: u,
			indexOf: m,
			itemAt: l,
			findBy: s,
			add: d,
			remove: c,
			first: p,
			last: h,
			next: angular.bind(null, f, !1),
			previous: angular.bind(null, f, !0),
			hasPrevious: i,
			hasNext: r
		}
	}
	angular.module("material.core").config(["$provide", function(t) {
		t.decorator("$mdUtil", ["$delegate", function(t) {
			return t.iterator = e, t
		}])
	}])
}(),
function() {
	function e(e, t, n) {
		function a(e) {
			var t = m[e];
			angular.isUndefined(t) && (t = m[e] = o(e));
			var n = p[t];
			return angular.isUndefined(n) && (n = r(t)), n
		}

		function o(t) {
			return e.MEDIA[t] || ("(" !== t.charAt(0) ? "(" + t + ")" : t)
		}

		function r(e) {
			var t = u[e] = n.matchMedia(e);
			return t.addListener(i), p[t.media] = !!t.matches
		}

		function i(e) {
			t.$evalAsync(function() {
				p[e.media] = !!e.matches
			})
		}

		function l(e) {
			return u[e]
		}

		function s(t, n) {
			for (var a = 0; a < e.MEDIA_PRIORITY.length; a++) {
				var o = e.MEDIA_PRIORITY[a];
				if (u[m[o]].matches) {
					var r = c(t, n + "-" + o);
					if (t[r]) return t[r]
				}
			}
			return t[c(t, n)]
		}

		function d(t, n, a) {
			var o = [];
			return t.forEach(function(t) {
				var r = c(n, t);
				n[r] && o.push(n.$observe(r, angular.bind(void 0, a, null)));
				for (var i in e.MEDIA) {
					if (r = c(n, t + "-" + i), !n[r]) return;
					o.push(n.$observe(r, angular.bind(void 0, a, i)))
				}
			}),
			function() {
				o.forEach(function(e) {
					e()
				})
			}
		}

		function c(e, t) {
			return h[t] || (h[t] = e.$normalize(t))
		}
		var m = {},
		u = {},
		p = {},
		h = {};
		return a.getResponsiveAttribute = s, a.getQuery = l, a.watchResponsiveAttributes = d, a
	}
	angular.module("material.core").factory("$mdMedia", e), e.$inject = ["$mdConstant", "$rootScope", "$window"]
}(),
function() {
	"use strict";
	var e = ["0", "0", "0"];
	angular.module("material.core").factory("$mdUtil", ["$cacheFactory", "$document", "$timeout", "$q", "$window", "$mdConstant", function(t, n, a, o, r, i) {
		function l(e) {
			return e[0] || e
		}
		var s;
		return s = {
				now: window.performance ? angular.bind(window.performance, window.performance.now) : Date.now,
						clientRect: function(e, t, n) {
							var a = l(e);
							t = l(t || a.offsetParent || document.body);
							var o = a.getBoundingClientRect(),
							r = n ? t.getBoundingClientRect() : {
								left: 0,
								top: 0,
								width: 0,
								height: 0
							};
							return {
								left: o.left - r.left + t.scrollLeft,
								top: o.top - r.top + t.scrollTop,
								width: o.width,
								height: o.height
							}
						},
						offsetRect: function(e, t) {
							return s.clientRect(e, t, !0)
						},
						floatingScrollbars: function() {
							if (void 0 === this.floatingScrollbars.cached) {
								var e = angular.element('<div style="z-index: -1; position: absolute; height: 1px; overflow-y: scroll"><div style="height: 2px;"></div></div>');
								n[0].body.appendChild(e[0]), this.floatingScrollbars.cached = e[0].offsetWidth == e[0].childNodes[0].offsetWidth, e.remove()
							}
							return this.floatingScrollbars.cached
						},
						forceFocus: function(e) {
							var t = e[0] || e;
							document.addEventListener("click", function a(e) {
								e.target === t && e.$focus && (t.focus(), e.stopImmediatePropagation(), e.preventDefault(), t.removeEventListener("click", a))
							}, !0);
							var n = document.createEvent("MouseEvents");
							n.initMouseEvent("click", !1, !0, window, {}, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.$material = !0, n.$focus = !0, t.dispatchEvent(n)
						},
						transitionEndPromise: function(e) {
							function t(a) {
								a.target === e[0] && (e.off(i.CSS.TRANSITIONEND, t), n.resolve())
							}
							var n = o.defer();
							return e.on(i.CSS.TRANSITIONEND, t), n.promise
						},
						fakeNgModel: function() {
							return {
								$fake: !0,
								$setTouched: angular.noop,
								$setViewValue: function(e) {
									this.$viewValue = e, this.$render(e), this.$viewChangeListeners.forEach(function(e) {
										e()
									})
								},
								$isEmpty: function(e) {
									return 0 === ("" + e).length
								},
								$parsers: [],
								$formatters: [],
								$viewChangeListeners: [],
								$render: angular.noop
							}
						},
						debounce: function(e, t, n, o) {
							var r;
							return function() {
								var i = n,
								l = Array.prototype.slice.call(arguments);
								a.cancel(r), r = a(function() {
									r = void 0, e.apply(i, l)
								}, t || 10, o)
							}
						},
						throttle: function(e, t) {
							var n;
							return function() {
								var a = this,
								o = arguments,
								r = s.now();
								(!n || r - n > t) && (e.apply(a, o), n = r)
							}
						},
						time: function(e) {
							var t = s.now();
							return e(), s.now() - t
						},
						nextUid: function() {
							for (var t, n = e.length; n;) {
								if (n--, t = e[n].charCodeAt(0), 57 == t) return e[n] = "A", e.join("");
								if (90 != t) return e[n] = String.fromCharCode(t + 1), e.join("");
								e[n] = "0"
							}
							return e.unshift("0"), e.join("")
						},
						disconnectScope: function(e) {
							if (e && e.$root !== e && !e.$$destroyed) {
								var t = e.$parent;
								e.$$disconnected = !0, t.$$childHead === e && (t.$$childHead = e.$$nextSibling), t.$$childTail === e && (t.$$childTail = e.$$prevSibling), e.$$prevSibling && (e.$$prevSibling.$$nextSibling = e.$$nextSibling), e.$$nextSibling && (e.$$nextSibling.$$prevSibling = e.$$prevSibling), e.$$nextSibling = e.$$prevSibling = null
							}
						},
						reconnectScope: function(e) {
							if (e && e.$root !== e && e.$$disconnected) {
								var t = e,
								n = t.$parent;
								t.$$disconnected = !1, t.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = t, n.$$childTail = t) : n.$$childHead = n.$$childTail = t
							}
						},
						getClosest: function(e, t) {
							t = t.toUpperCase();
							do
								if (e.nodeName === t) return e;
							while (e = e.parentNode);
							return null
						}
		}
	}]), angular.element.prototype.focus = angular.element.prototype.focus || function() {
		return this.length && this[0].focus(), this
	}, angular.element.prototype.blur = angular.element.prototype.blur || function() {
		return this.length && this[0].blur(), this
	}
}(),
function() {
	"use strict";

	function e(e, t, n) {
		function a(e, n, a) {
			var o = e[0];
			o.hasAttribute(n) || l(o, n) || (a = angular.isString(a) ? a.trim() : "", a.length ? e.attr(n, a) : t.warn('ARIA: Attribute "', n, '", required for accessibility, is missing on node:', o))
		}

		function o(t, n, o) {
			e(function() {
				a(t, n, o())
			})
		}

		function r(e, t) {
			o(e, t, function() {
				return i(e)
			})
		}

		function i(e) {
			return e.text().trim()
		}

		function l(e, t) {
			function a(e) {
				var t = e.currentStyle ? e.currentStyle : n.getComputedStyle(e);
				return "none" === t.display
			}
			var o = e.hasChildNodes(),
			r = !1;
			if (o)
				for (var i = e.childNodes, l = 0; l < i.length; l++) {
					var s = i[l];
					1 === s.nodeType && s.hasAttribute(t) && (a(s) || (r = !0))
				}
			return r
		}
		return {
			expect: a,
			expectAsync: o,
			expectWithText: r
		}
	}
	angular.module("material.core").service("$mdAria", e), e.$inject = ["$$rAF", "$log", "$window"]
}(),
function() {
	"use strict";

	function e(e, t, n, a, o, r) {
		this.compile = function(i) {
			var l = i.templateUrl,
			s = i.template || "",
			d = i.controller,
			c = i.controllerAs,
			m = i.resolve || {},
			u = i.locals || {},
			p = i.transformTemplate || angular.identity,
			h = i.bindToController;
			return angular.forEach(m, function(e, t) {
				m[t] = angular.isString(e) ? n.get(e) : n.invoke(e)
			}), angular.extend(m, u), m.$template = l ? t.get(l, {
				cache: r
			}).then(function(e) {
				return e.data
			}) : e.when(s), e.all(m).then(function(e) {
				var t = p(e.$template),
				n = i.element || angular.element("<div>").html(t.trim()).contents(),
				r = a(n);
				return {
					locals: e,
					element: n,
					link: function(t) {
						if (e.$scope = t, d) {
							var a = o(d, e);
							h && angular.extend(a, e), n.data("$ngControllerController", a), n.children().data("$ngControllerController", a), c && (t[c] = a)
						}
						return r(t)
					}
				}
			})
		}
	}
	angular.module("material.core").service("$mdCompiler", e), e.$inject = ["$q", "$http", "$injector", "$compile", "$controller", "$templateCache"]
}(),
function() {
	"use strict";

	function e(e, t) {
		var n;
		for (var a in s) n = s[a], "start" === e && n.cancel(), n[e](t, g)
	}

	function t(t) {
		if (!g) {
			var n = +Date.now();
			b && !o(t, b) && n - b.endTime < 1500 || (g = l(t), e("start", t))
		}
	}

	function n(t) {
		g && o(t, g) && (i(t, g), e("move", t))
	}

	function a(t) {
		g && o(t, g) && (i(t, g), g.endTime = +Date.now(), e("end", t), b = g, g = null)
	}

	function o(e, t) {
		return e && t && e.type.charAt(0) === t.type
	}

	function r(e) {
		return e = e.originalEvent || e, e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e
	}

	function i(e, t) {
		var n = r(e),
		a = t.x = n.pageX,
		o = t.y = n.pageY;
		t.distanceX = a - t.startX, t.distanceY = o - t.startY, t.distance = Math.sqrt(t.distanceX * t.distanceX + t.distanceY * t.distanceY), t.directionX = t.distanceX > 0 ? "right" : t.distanceX < 0 ? "left" : "", t.directionY = t.distanceY > 0 ? "up" : t.distanceY < 0 ? "down" : "", t.duration = +Date.now() - t.startTime, t.velocityX = t.distanceX / t.duration, t.velocityY = t.distanceY / t.duration
	}

	function l(e) {
		var t = r(e),
		n = {
			startTime: +Date.now(),
			target: e.target,
			type: e.type.charAt(0)
		};
		return n.startX = n.x = t.pageX, n.startY = n.y = t.pageY, n
	}
	var s, d = "mousedown touchstart pointerdown",
	c = "mousemove touchmove pointermove",
	m = "mouseup mouseleave touchend touchcancel pointerup pointercancel";
	document.contains || (document.contains = function(e) {
		return document.body.contains(e)
	});
	var u = navigator.userAgent || navigator.vendor || window.opera,
	p = u.match(/iPad/i) || u.match(/iPhone/i) || u.match(/iPod/i),
	h = u.match(/Android/i),
	f = p || h;
	f && document.addEventListener("click", function(e) {
		var t = 0 === e.clientX && 0 === e.clientY;
		window.jQuery || t || e.$material || (e.preventDefault(), e.stopPropagation())
	}, !0), angular.element(document).on(d, t).on(c, n).on(m, a).on("$$mdGestureReset", function() {
		b = g = null
	});
	var g, b;
	angular.module("material.core").run(["$mdGesture", function() {}]).factory("$mdGesture", ["$$MdGestureHandler", "$$rAF", "$timeout", function(e, t, n) {
		function a(t, n) {
			var a = new e(t);
			return angular.extend(a, n), s[t] = a, r
		}

		function o(e, t, n) {
			var a = s[t.replace(/^\$md./, "")];
			if (!a) throw new Error("Failed to register element with handler " + t + ". Available handlers: " + Object.keys(s).join(", "));
			return a.registerElement(e, n)
		}
		s = {}, f && a("click", {
			options: {
				maxDistance: 6
			},
			onEnd: function(e, t) {
				t.distance < this.state.options.maxDistance && this.dispatchEvent(e, "click")
			}
		}), a("press", {
			onStart: function(e) {
				this.dispatchEvent(e, "$md.pressdown")
			},
			onEnd: function(e) {
				this.dispatchEvent(e, "$md.pressup")
			}
		}), a("hold", {
			options: {
				maxDistance: 6,
				delay: 500
			},
			onCancel: function() {
				n.cancel(this.state.timeout)
			},
			onStart: function(e, t) {
				return this.state.registeredParent ? (this.state.pos = {
						x: t.x,
						y: t.y
				}, this.state.timeout = n(angular.bind(this, function() {
					this.dispatchEvent(e, "$md.hold"), this.cancel()
				}), this.state.options.delay, !1), void 0) : this.cancel()
			},
			onMove: function(e, t) {
				e.preventDefault();
				var n = this.state.pos.x - t.x,
				a = this.state.pos.y - t.y;
				Math.sqrt(n * n + a * a) > this.options.maxDistance && this.cancel()
			},
			onEnd: function() {
				this.onCancel()
			}
		}), a("drag", {
			options: {
				minDistance: 6,
				horizontal: !0
			},
			onStart: function() {
				this.state.registeredParent || this.cancel()
			},
			onMove: function(e, t) {
				var n, a;
				e.preventDefault(), this.state.dragPointer ? this.dispatchDragMove(e) : (this.state.options.horizontal ? (n = Math.abs(t.distanceX) > this.state.options.minDistance, a = Math.abs(t.distanceY) > 1.5 * this.state.options.minDistance) : (n = Math.abs(t.distanceY) > this.state.options.minDistance, a = Math.abs(t.distanceX) > 1.5 * this.state.options.minDistance), n ? (this.state.dragPointer = l(e), i(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragstart", this.state.dragPointer)) : a && this.cancel())
			},
			dispatchDragMove: t.throttle(function(e) {
				this.state.isRunning && (i(e, this.state.dragPointer), this.dispatchEvent(e, "$md.drag", this.state.dragPointer))
			}),
			onEnd: function(e) {
				this.state.dragPointer && (i(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragend", this.state.dragPointer))
			}
		}), a("swipe", {
			options: {
				minVelocity: .65,
				minDistance: 10
			},
			onEnd: function(e, t) {
				if (Math.abs(t.velocityX) > this.state.options.minVelocity && Math.abs(t.distanceX) > this.state.options.minDistance) {
					var n = "left" == t.directionX ? "$md.swipeleft" : "$md.swiperight";
					this.dispatchEvent(e, n)
				}
			}
		});
		var r;
		return r = {
				handler: a,
				register: o
		}
	}]).factory("$$MdGestureHandler", ["$$rAF", function() {
		function e(e) {
			this.name = e, this.state = {}
		}

		function t(e, t, n) {
			n = n || g;
			var a = new angular.element.Event(t);
			a.$material = !0, a.pointer = n, a.srcEvent = e, angular.extend(a, {
				clientX: n.x,
				clientY: n.y,
				screenX: n.x,
				screenY: n.y,
				pageX: n.x,
				pageY: n.y,
				ctrlKey: e.ctrlKey,
				altKey: e.altKey,
				shiftKey: e.shiftKey,
				metaKey: e.metaKey
			}), angular.element(n.target).trigger(a)
		}

		function n(e, t, n) {
			n = n || g;
			var a;
			"click" === t ? (a = document.createEvent("MouseEvents"), a.initMouseEvent("click", !0, !0, window, e.detail, n.x, n.y, n.x, n.y, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget || null)) : (a = document.createEvent("CustomEvent"), a.initCustomEvent(t, !0, !0, {})), a.$material = !0, a.pointer = n, a.srcEvent = e, n.target.dispatchEvent(a)
		}
		return e.prototype = {
				onStart: angular.noop,
				onMove: angular.noop,
				onEnd: angular.noop,
				onCancel: angular.noop,
				options: {},
				dispatchEvent: "undefined" != typeof window.jQuery && angular.element === window.jQuery ? t : n,
						start: function(e, t) {
							if (!this.state.isRunning) {
								var n = this.getNearestParent(e.target),
								a = n && n.$mdGesture[this.name] || {};
								this.state = {
										isRunning: !0,
										options: angular.extend({}, this.options, a),
										registeredParent: n
								}, this.onStart(e, t)
							}
						},
						move: function(e, t) {
							this.state.isRunning && this.onMove(e, t)
						},
						end: function(e, t) {
							this.state.isRunning && (this.onEnd(e, t), this.state.isRunning = !1)
						},
						cancel: function(e, t) {
							this.onCancel(e, t), this.state = {}
						},
						getNearestParent: function(e) {
							for (var t = e; t;) {
								if ((t.$mdGesture || {})[this.name]) return t;
								t = t.parentNode
							}
						},
						registerElement: function(e, t) {
							function n() {
								delete e[0].$mdGesture[a.name], e.off("$destroy", n)
							}
							var a = this;
							return e[0].$mdGesture = e[0].$mdGesture || {}, e[0].$mdGesture[this.name] = t || {}, e.on("$destroy", n), n
						}
		}, e
	}])
}(),
function() {
	"use strict";

	function e() {
		function e(e) {
			function t(e) {
				return l.optionsFactory = e.options, l.methods = (e.methods || []).concat(r), s
			}

			function n(e, t) {
				return i[e] = t, s
			}

			function a(t, n) {
				if (n = n || {}, n.methods = n.methods || [], n.options = n.options || function() {
					return {}
				}, /^cancel|hide|show$/.test(t)) throw new Error("Preset '" + t + "' in " + e + " is reserved!");
				if (n.methods.indexOf("_options") > -1) throw new Error("Method '_options' in " + e + " is reserved!");
				return l.presets[t] = {
						methods: n.methods.concat(r),
						optionsFactory: n.options,
						argOption: n.argOption
				}, s
			}

			function o(t, n, a) {
				function o(e) {
					return e && e._options && (e = e._options), c.show(angular.extend({}, d, e))
				}

				function r(t, n) {
					var o = {};
					return o[e] = m, a.invoke(t || function() {
						return n
					}, {}, o)
				}
				var s, d, c = t(),
				m = {
					hide: c.hide,
					cancel: c.cancel,
					show: o
				};
				return s = l.methods || [], d = r(l.optionsFactory, {}), angular.forEach(i, function(e, t) {
					m[t] = e
				}), angular.forEach(l.presets, function(e, t) {
					function n(e) {
						this._options = angular.extend({}, a, e)
					}
					var a = r(e.optionsFactory, {}),
					o = (e.methods || []).concat(s);
					if (angular.extend(a, {
						$type: t
					}), angular.forEach(o, function(e) {
						n.prototype[e] = function(t) {
							return this._options[e] = t, this
						}
					}), e.argOption) {
						var i = "show" + t.charAt(0).toUpperCase() + t.slice(1);
						m[i] = function(e) {
							var n = m[t](e);
							return m.show(n)
						}
					}
					m[t] = function(t) {
						return arguments.length && e.argOption && !angular.isObject(t) && !angular.isArray(t) ? (new n)[e.argOption](t) : new n(t)
					}
				}), m
			}
			var r = ["onHide", "onShow", "onRemove"],
			i = {},
			l = {
					presets: {}
			},
			s = {
					setDefaults: t,
					addPreset: a,
					addMethod: n,
					$get: o
			};
			return s.addPreset("build", {
				methods: ["controller", "controllerAs", "resolve", "template", "templateUrl", "themable", "transformTemplate", "parent"]
			}), o.$inject = ["$$interimElement", "$animate", "$injector"], s
		}

		function t(e, t, n, a, o, r, i, l, s) {
			function d(e) {
				return e && angular.isString(e) ? e.replace(/\{\{/g, c).replace(/}}/g, m) : e
			}
			var c = i.startSymbol(),
			m = i.endSymbol(),
			u = "{{" === c && "}}" === m,
			p = u ? angular.identity : d;
			return function() {
				function i(e) {
					if (h.length) return u.cancel().then(function() {
						return i(e)
					});
					var t = new m(e);
					return h.push(t), t.show().then(function() {
						return t.deferred.promise
					})
				}

				function d(e) {
					var t = h.shift();
					return t && t.remove().then(function() {
						t.deferred.resolve(e)
					})
				}

				function c(e) {
					var n = h.shift();
					return t.when(n && n.remove().then(function() {
						n.deferred.reject(e)
					}))
				}

				function m(i) {
					var d, c, m, h, f;
					return i = i || {}, i = angular.extend({
						preserveScope: !1,
						scope: i.scope || n.$new(i.isolateScope),
						onShow: function(e, t, n) {
							return r.enter(t, n.parent)
						},
						onRemove: function(e, n) {
							return n && r.leave(n) || t.when()
						}
					}, i), i.template && (i.template = p(i.template)), d = {
						options: i,
						deferred: t.defer(),
						show: function() {
							var n;
							return n = i.skipCompile ? t(function(e) {
								e({
									locals: {},
									link: function() {
										return i.element
									}
								})
							}) : l.compile(i), h = n.then(function(n) {
								function r() {
									i.hideDelay && (c = a(u.cancel, i.hideDelay))
								}
								angular.extend(n.locals, d.options), m = n.link(i.scope), angular.isFunction(i.parent) ? i.parent = i.parent(i.scope, m, i) : angular.isString(i.parent) && (i.parent = angular.element(e[0].querySelector(i.parent))), (i.parent || {}).length || (i.parent = o.find("body"), i.parent.length || (i.parent = o)), i.themable && s(m);
								var l = i.onShow(i.scope, m, i);
								return t.when(l).then(function() {
									(i.onComplete || angular.noop)(i.scope, m, i), r()
								})
							}, function(e) {
								h = !0, d.deferred.reject(e)
							})
						},
						cancelTimeout: function() {
							c && (a.cancel(c), c = void 0)
						},
						remove: function() {
							return d.cancelTimeout(), f = t.when(h).then(function() {
								var e = m ? i.onRemove(i.scope, m, i) : !0;
								return t.when(e).then(function() {
									i.preserveScope || i.scope.$destroy(), f = !0
								})
							})
						}
					}
				}
				var u, h = [];
				return u = {
						show: i,
						hide: d,
						cancel: c
				}
			}
		}
		return e.$get = t, t.$inject = ["$document", "$q", "$rootScope", "$timeout", "$rootElement", "$animate", "$interpolate", "$mdCompiler", "$mdTheming"], e
	}
	angular.module("material.core").provider("$$interimElement", e)
}(),
function() {
	"use strict";

	function e(e, t) {
		function n(e) {
			return e && "" !== e
		}
		var a, o = [],
		r = {};
		return a = {
				notFoundError: function(t) {
					e.error("No instance found for handle", t)
				},
				getInstances: function() {
					return o
				},
				get: function(e) {
					if (!n(e)) return null;
					var t, a, r;
					for (t = 0, a = o.length; a > t; t++)
						if (r = o[t], r.$$mdHandle === e) return r;
					return null
				},
				register: function(e, t) {
					function n() {
						var t = o.indexOf(e); - 1 !== t && o.splice(t, 1)
					}

					function a() {
						var n = r[t];
						n && (n.resolve(e), delete r[t])
					}
					return t ? (e.$$mdHandle = t, o.push(e), a(), n) : angular.noop
				},
				when: function(e) {
					if (n(e)) {
						var o = t.defer(),
						i = a.get(e);
						return i ? o.resolve(i) : r[e] = o, o.promise
					}
					return t.reject("Invalid `md-component-id` value.")
				}
		}
	}
	angular.module("material.core").factory("$mdComponentRegistry", e), e.$inject = ["$log", "$q"]
}(),
function() {
	"use strict";

	function e(e) {
		return {
			controller: angular.noop,
			link: function(t, n, a) {
				a.hasOwnProperty("mdInkRippleCheckbox") ? e.attachCheckboxBehavior(t, n) : e.attachButtonBehavior(t, n)
			}
		}
	}

	function t(e, t) {
		function n(e, t, n) {
			return r(e, t, angular.extend({
				isFAB: t.hasClass("md-fab"),
				isMenuItem: t.hasClass("md-menu-item"),
				center: !1,
				dimBackground: !0
			}, n))
		}

		function a(e, t, n) {
			return r(e, t, angular.extend({
				center: !0,
				dimBackground: !1,
				fitRipple: !0
			}, n))
		}

		function o(e, t, n) {
			return r(e, t, angular.extend({
				center: !1,
				dimBackground: !0,
				outline: !0
			}, n))
		}

		function r(n, a, o) {
			function r() {
				var e = a.data("$mdRippleContainer");
				return e ? e : (e = angular.element('<div class="md-ripple-container">'), a.append(e), a.data("$mdRippleContainer", e), e)
			}

			function i(e) {
				function t(e) {
					var t = "#" === e.charAt(0) ? e.substr(1) : e,
							n = t.length / 3,
							a = t.substr(0, n),
							o = t.substr(n, n),
							r = t.substr(2 * n);
					return 1 === n && (a += a, o += o, r += r), "rgba(" + parseInt(a, 16) + "," + parseInt(o, 16) + "," + parseInt(r, 16) + ",0.1)"
				}

				function n(e) {
					return e.replace(")", ", 0.1)").replace("(", "a(")
				}
				if (e) return 0 === e.indexOf("rgba") ? e.replace(/\d?\.?\d*\s*\)\s*$/, "0.1)") : 0 === e.indexOf("rgb") ? n(e) : 0 === e.indexOf("#") ? t(e) : void 0
			}

			function l(e, n) {
				g.splice(g.indexOf(e), 1), 0 === g.length && r().css({
					backgroundColor: ""
				}), t(function() {
					e.remove()
				}, n, !1)
			}

			function s(e) {
				var t = g.indexOf(e),
				n = b[t] || {},
				a = g.length > 1 ? !1 : E,
						r = g.length > 1 ? !1 : y;
						a || n.animating || r ? e.addClass("md-ripple-visible") : e && (e.removeClass("md-ripple-visible"), o.outline && e.css({
							width: p + "px",
							height: p + "px",
							marginLeft: -1 * p + "px",
							marginTop: -1 * p + "px"
						}), l(e, o.outline ? 450 : 650))
			}

			function d(n, l) {
				function d(e) {
					var t = angular.element('<div class="md-ripple" data-counter="' + f++ +'">');
					return g.unshift(t), b.unshift({
						animating: !0
					}), u.append(t), e && t.css(e), t
				}

				function c(e, t) {
					var n, a, r, i = u.prop("offsetWidth"),
					l = u.prop("offsetHeight");
					return o.isMenuItem ? a = Math.sqrt(Math.pow(i, 2) + Math.pow(l, 2)) : o.outline ? (r = $.getBoundingClientRect(), e -= r.left, t -= r.top, i = Math.max(e, i - e), l = Math.max(t, l - t), a = 2 * Math.sqrt(Math.pow(i, 2) + Math.pow(l, 2))) : (n = o.isFAB ? 1.1 : .8, a = Math.sqrt(Math.pow(i, 2) + Math.pow(l, 2)) * n, o.fitRipple && (a = Math.min(l, i, a))), a
				}

				function m(e, t, n) {
					function a(e) {
						return e.replace("rgba", "rgb").replace(/,[^\)\,]+\)/, ")")
					}
					var r, i = {
							backgroundColor: a(M),
							borderColor: a(M),
							width: e + "px",
							height: e + "px"
					};
					return o.outline ? (i.width = 0, i.height = 0) : i.marginLeft = i.marginTop = e * -.5 + "px", o.center ? i.left = i.top = "50%" : (r = $.getBoundingClientRect(), i.left = Math.round((t - r.left) / u.prop("offsetWidth") * 100) + "%", i.top = Math.round((n - r.top) / u.prop("offsetHeight") * 100) + "%"), i
				}
				M = i(a.attr("md-ink-ripple")) || i(e.getComputedStyle(o.colorElement[0]).color || "rgb(0, 0, 0)");
				var u = r(),
				h = c(n, l),
				v = m(h, n, l),
				E = d(v),
				y = g.indexOf(E),
				x = b[y] || {};
				return p = h, x.animating = !0, t(function() {
					o.dimBackground && u.css({
						backgroundColor: M
					}), E.addClass("md-ripple-placed md-ripple-scaled"), o.outline ? E.css({
						borderWidth: .5 * h + "px",
						marginLeft: h * -.5 + "px",
						marginTop: h * -.5 + "px"
					}) : E.css({
						left: "50%",
						top: "50%"
					}), s(E), t(function() {
						x.animating = !1, s(E)
					}, o.outline ? 450 : 225, !1)
				}, 0, !1), E
			}

			function c(e) {
				if (u()) {
					{
						d(e.pointer.x, e.pointer.y)
					}
					y = !0
				}
			}

			function m() {
				y = !1;
				var e = g[g.length - 1];
				t(function() {
					s(e)
				}, 0, !1)
			}

			function u() {
				function e(e) {
					return e && e.hasAttribute && e.hasAttribute("disabled")
				}
				var t = $.parentNode,
				n = t && t.parentNode,
				a = n && n.parentNode;
				return !(e($) || e(t) || e(n) || e(a))
			}
			if (a.controller("mdNoInk")) return angular.noop;
			o = angular.extend({
				colorElement: a,
				mousedown: !0,
				hover: !0,
				focus: !0,
				center: !1,
				mousedownPauseTime: 150,
				dimBackground: !1,
				outline: !1,
				isFAB: !1,
				isMenuItem: !1,
				fitRipple: !1
			}, o);
			var p, h = a.controller("mdInkRipple") || {},
			f = 0,
			g = [],
			b = [],
			v = a.attr("md-highlight"),
			E = !1,
			y = !1,
			$ = a[0],
			x = a.attr("md-ripple-size"),
			M = i(a.attr("md-ink-ripple")) || i(e.getComputedStyle(o.colorElement[0]).color || "rgb(0, 0, 0)");
			switch (x) {
			case "full":
				o.isFAB = !0;
				break;
			case "partial":
				o.isFAB = !1
			}
			return o.mousedown && a.on("$md.pressdown", c).on("$md.pressup", m), h.createRipple = d, v && n.$watch(v, function(e) {
				E = e, E && !g.length && t(function() {
					d(0, 0)
				}, 0, !1), angular.forEach(g, s)
			}),
			function() {
				a.off("$md.pressdown", c).off("$md.pressup", m), r().remove()
			}
		}
		return {
			attachButtonBehavior: n,
			attachCheckboxBehavior: a,
			attachTabBehavior: o,
			attach: r
		}
	}

	function n() {
		return function() {
			return {
				controller: angular.noop
			}
		}
	}
	angular.module("material.core").factory("$mdInkRipple", t).directive("mdInkRipple", e).directive("mdNoInk", n()).directive("mdNoBar", n()).directive("mdNoStretch", n()), e.$inject = ["$mdInkRipple"], t.$inject = ["$window", "$timeout"]
}(),
function() {
	"use strict";
	angular.module("material.core.theming.palette", []).constant("$mdColorPalette", {
		red: {
			50: "#ffebee",
			100: "#ffcdd2",
			200: "#ef9a9a",
			300: "#e57373",
			400: "#ef5350",
			500: "#f44336",
			600: "#e53935",
			700: "#d32f2f",
			800: "#c62828",
			900: "#b71c1c",
			A100: "#ff8a80",
			A200: "#ff5252",
			A400: "#ff1744",
			A700: "#d50000",
			contrastDefaultColor: "light",
			contrastDarkColors: "50 100 200 300 400 A100",
			contrastStrongLightColors: "500 600 700 A200 A400 A700"
		},
		pink: {
			50: "#fce4ec",
			100: "#f8bbd0",
			200: "#f48fb1",
			300: "#f06292",
			400: "#ec407a",
			500: "#e91e63",
			600: "#d81b60",
			700: "#c2185b",
			800: "#ad1457",
			900: "#880e4f",
			A100: "#ff80ab",
			A200: "#ff4081",
			A400: "#f50057",
			A700: "#c51162",
			contrastDefaultColor: "light",
			contrastDarkColors: "50 100 200 300 400 A100",
			contrastStrongLightColors: "500 600 A200 A400 A700"
		},
		purple: {
			50: "#f3e5f5",
			100: "#e1bee7",
			200: "#ce93d8",
			300: "#ba68c8",
			400: "#ab47bc",
			500: "#9c27b0",
			600: "#8e24aa",
			700: "#7b1fa2",
			800: "#6a1b9a",
			900: "#4a148c",
			A100: "#ea80fc",
			A200: "#e040fb",
			A400: "#d500f9",
			A700: "#aa00ff",
			contrastDefaultColor: "light",
			contrastDarkColors: "50 100 200 A100",
			contrastStrongLightColors: "300 400 A200 A400 A700"
		},
		"deep-purple": {
			50: "#ede7f6",
			100: "#d1c4e9",
			200: "#b39ddb",
			300: "#9575cd",
			400: "#7e57c2",
			500: "#673ab7",
			600: "#5e35b1",
			700: "#512da8",
			800: "#4527a0",
			900: "#311b92",
			A100: "#b388ff",
			A200: "#7c4dff",
			A400: "#651fff",
			A700: "#6200ea",
			contrastDefaultColor: "light",
			contrastDarkColors: "50 100 200 A100",
			contrastStrongLightColors: "300 400 A200"
		},
		indigo: {
			50: "#e8eaf6",
			100: "#c5cae9",
			200: "#9fa8da",
			300: "#7986cb",
			400: "#5c6bc0",
			500: "#3f51b5",
			600: "#3949ab",
			700: "#303f9f",
			800: "#283593",
			900: "#1a237e",
			A100: "#8c9eff",
			A200: "#536dfe",
			A400: "#3d5afe",
			A700: "#304ffe",
			contrastDefaultColor: "light",
			contrastDarkColors: "50 100 200 A100",
			contrastStrongLightColors: "300 400 A200 A400"
		},
		blue: {
			50: "#e3f2fd",
			100: "#bbdefb",
			200: "#90caf9",
			300: "#64b5f6",
			400: "#42a5f5",
			500: "#2196f3",
			600: "#1e88e5",
			700: "#1976d2",
			800: "#1565c0",
			900: "#0d47a1",
			A100: "#82b1ff",
			A200: "#448aff",
			A400: "#2979ff",
			A700: "#2962ff",
			contrastDefaultColor: "light",
			contrastDarkColors: "100 200 300 400 A100",
			contrastStrongLightColors: "500 600 700 A200 A400 A700"
		},
		"light-blue": {
			50: "#e1f5fe",
			100: "#b3e5fc",
			200: "#81d4fa",
			300: "#4fc3f7",
			400: "#29b6f6",
			500: "#03a9f4",
			600: "#039be5",
			700: "#0288d1",
			800: "#0277bd",
			900: "#01579b",
			A100: "#80d8ff",
			A200: "#40c4ff",
			A400: "#00b0ff",
			A700: "#0091ea",
			contrastDefaultColor: "dark",
			contrastLightColors: "500 600 700 800 900 A700",
			contrastStrongLightColors: "500 600 700 800 A700"
		},
		cyan: {
			50: "#e0f7fa",
			100: "#b2ebf2",
			200: "#80deea",
			300: "#4dd0e1",
			400: "#26c6da",
			500: "#00bcd4",
			600: "#00acc1",
			700: "#0097a7",
			800: "#00838f",
			900: "#006064",
			A100: "#84ffff",
			A200: "#18ffff",
			A400: "#00e5ff",
			A700: "#00b8d4",
			contrastDefaultColor: "dark",
			contrastLightColors: "500 600 700 800 900",
			contrastStrongLightColors: "500 600 700 800"
		},
		teal: {
			50: "#e0f2f1",
			100: "#b2dfdb",
			200: "#80cbc4",
			300: "#4db6ac",
			400: "#26a69a",
			500: "#009688",
			600: "#00897b",
			700: "#00796b",
			800: "#00695c",
			900: "#004d40",
			A100: "#a7ffeb",
			A200: "#64ffda",
			A400: "#1de9b6",
			A700: "#00bfa5",
			contrastDefaultColor: "dark",
			contrastLightColors: "500 600 700 800 900",
			contrastStrongLightColors: "500 600 700"
		},
		green: {
			50: "#e8f5e9",
			100: "#c8e6c9",
			200: "#a5d6a7",
			300: "#81c784",
			400: "#66bb6a",
			500: "#4caf50",
			600: "#43a047",
			700: "#388e3c",
			800: "#2e7d32",
			900: "#1b5e20",
			A100: "#b9f6ca",
			A200: "#69f0ae",
			A400: "#00e676",
			A700: "#00c853",
			contrastDefaultColor: "dark",
			contrastLightColors: "500 600 700 800 900",
			contrastStrongLightColors: "500 600 700"
		},
		"light-green": {
			50: "#f1f8e9",
			100: "#dcedc8",
			200: "#c5e1a5",
			300: "#aed581",
			400: "#9ccc65",
			500: "#8bc34a",
			600: "#7cb342",
			700: "#689f38",
			800: "#558b2f",
			900: "#33691e",
			A100: "#ccff90",
			A200: "#b2ff59",
			A400: "#76ff03",
			A700: "#64dd17",
			contrastDefaultColor: "dark",
			contrastLightColors: "800 900",
			contrastStrongLightColors: "800 900"
		},
		lime: {
			50: "#f9fbe7",
			100: "#f0f4c3",
			200: "#e6ee9c",
			300: "#dce775",
			400: "#d4e157",
			500: "#cddc39",
			600: "#c0ca33",
			700: "#afb42b",
			800: "#9e9d24",
			900: "#827717",
			A100: "#f4ff81",
			A200: "#eeff41",
			A400: "#c6ff00",
			A700: "#aeea00",
			contrastDefaultColor: "dark",
			contrastLightColors: "900",
			contrastStrongLightColors: "900"
		},
		yellow: {
			50: "#fffde7",
			100: "#fff9c4",
			200: "#fff59d",
			300: "#fff176",
			400: "#ffee58",
			500: "#ffeb3b",
			600: "#fdd835",
			700: "#fbc02d",
			800: "#f9a825",
			900: "#f57f17",
			A100: "#ffff8d",
			A200: "#ffff00",
			A400: "#ffea00",
			A700: "#ffd600",
			contrastDefaultColor: "dark"
		},
		amber: {
			50: "#fff8e1",
			100: "#ffecb3",
			200: "#ffe082",
			300: "#ffd54f",
			400: "#ffca28",
			500: "#ffc107",
			600: "#ffb300",
			700: "#ffa000",
			800: "#ff8f00",
			900: "#ff6f00",
			A100: "#ffe57f",
			A200: "#ffd740",
			A400: "#ffc400",
			A700: "#ffab00",
			contrastDefaultColor: "dark"
		},
		orange: {
			50: "#fff3e0",
			100: "#ffe0b2",
			200: "#ffcc80",
			300: "#ffb74d",
			400: "#ffa726",
			500: "#ff9800",
			600: "#fb8c00",
			700: "#f57c00",
			800: "#ef6c00",
			900: "#e65100",
			A100: "#ffd180",
			A200: "#ffab40",
			A400: "#ff9100",
			A700: "#ff6d00",
			contrastDefaultColor: "dark",
			contrastLightColors: "800 900",
			contrastStrongLightColors: "800 900"
		},
		"deep-orange": {
			50: "#fbe9e7",
			100: "#ffccbc",
			200: "#ffab91",
			300: "#ff8a65",
			400: "#ff7043",
			500: "#ff5722",
			600: "#f4511e",
			700: "#e64a19",
			800: "#d84315",
			900: "#bf360c",
			A100: "#ff9e80",
			A200: "#ff6e40",
			A400: "#ff3d00",
			A700: "#dd2c00",
			contrastDefaultColor: "light",
			contrastDarkColors: "50 100 200 300 400 A100 A200",
			contrastStrongLightColors: "500 600 700 800 900 A400 A700"
		},
		brown: {
			50: "#efebe9",
			100: "#d7ccc8",
			200: "#bcaaa4",
			300: "#a1887f",
			400: "#8d6e63",
			500: "#795548",
			600: "#6d4c41",
			700: "#5d4037",
			800: "#4e342e",
			900: "#3e2723",
			A100: "#d7ccc8",
			A200: "#bcaaa4",
			A400: "#8d6e63",
			A700: "#5d4037",
			contrastDefaultColor: "light",
			contrastDarkColors: "50 100 200",
			contrastStrongLightColors: "300 400"
		},
		grey: {
			0: "#ffffff",
			50: "#fafafa",
			100: "#f5f5f5",
			200: "#eeeeee",
			300: "#e0e0e0",
			400: "#bdbdbd",
			500: "#9e9e9e",
			600: "#757575",
			700: "#616161",
			800: "#424242",
			900: "#212121",
			1000: "#000000",
			A100: "#ffffff",
			A200: "#eeeeee",
			A400: "#bdbdbd",
			A700: "#616161",
			contrastDefaultColor: "dark",
			contrastLightColors: "600 700 800 900"
		},
		"blue-grey": {
			50: "#eceff1",
			100: "#cfd8dc",
			200: "#b0bec5",
			300: "#90a4ae",
			400: "#78909c",
			500: "#607d8b",
			600: "#546e7a",
			700: "#455a64",
			800: "#37474f",
			900: "#263238",
			A100: "#cfd8dc",
			A200: "#b0bec5",
			A400: "#78909c",
			A700: "#455a64",
			contrastDefaultColor: "light",
			contrastDarkColors: "50 100 200 300",
			contrastStrongLightColors: "400 500"
		}
	})
}(),
function() {
	"use strict";

	function e(e) {
		function t(e, t) {
			return t = t || {}, s[e] = o(e, t), c
		}

		function n(e, t) {
			return o(e, angular.extend({}, s[e] || {}, t))
		}

		function o(e, t) {
			var n = M.filter(function(e) {
				return !t[e]
			});
			if (n.length) throw new Error("Missing colors %1 in palette %2!".replace("%1", n.join(", ")).replace("%2", e));
			return t
		}

		function r(e, t) {
			if (t = t || "default", d[e]) return d[e];
			var n = "string" == typeof t ? d[t] : t,
					a = new i(e);
			return n && angular.forEach(n.colors, function(e, t) {
				a.colors[t] = {
						name: e.name,
						hues: angular.extend({}, e.hues)
				}
			}), d[e] = a, a
		}

		function i(e) {
			function t(e) {
				if (e = 0 === arguments.length ? !0 : !!e, e !== n.isDark) {
					n.isDark = e, n.foregroundPalette = n.isDark ? p : u, n.foregroundShadow = n.isDark ? h : f;
					var t = n.isDark ? x : $,
							a = n.isDark ? $ : x;
					return angular.forEach(t, function(e, t) {
						var o = n.colors[t],
						r = a[t];
						if (o)
							for (var i in o.hues) o.hues[i] === r[i] && (o.hues[i] = e[i])
					}), n
				}
			}
			var n = this;
			n.name = e, n.colors = {}, n.dark = t, t(!1), E.forEach(function(e) {
				var t = (n.isDark ? x : $)[e];
				n[e + "Palette"] = function(a, o) {
					var r = n.colors[e] = {
							name: a,
							hues: angular.extend({}, t, o)
					};
					return Object.keys(r.hues).forEach(function(e) {
						if (!t[e]) throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1", e).replace("%2", n.name).replace("%3", a).replace("%4", Object.keys(t).join(", ")))
					}), Object.keys(r.hues).map(function(e) {
						return r.hues[e]
					}).forEach(function(t) {
						if (-1 == M.indexOf(t)) throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1", t).replace("%2", n.name).replace("%3", e).replace("%4", a).replace("%5", M.join(", ")))
					}), n
				}, n[e + "Color"] = function() {
					var t = Array.prototype.slice.call(arguments);
					return console.warn("$mdThemingProviderTheme." + e + "Color() has been deprecated. Use $mdThemingProviderTheme." + e + "Palette() instead."), n[e + "Palette"].apply(n, t)
				}
			})
		}

		function m(e, t) {
			function n(e) {
				return void 0 === e || "" === e ? !0 : void 0 !== d[e]
			}

			function a(t, n) {
				void 0 === n && (n = t, t = void 0), void 0 === t && (t = e), a.inherit(n, n)
			}
			return a.inherit = function(a, o) {
				function r(e) {
					n(e) || t.warn("Attempted to use unregistered theme '" + e + "'. Register it with $mdThemingProvider.theme().");
					var o = a.data("$mdThemeName");
					o && a.removeClass("md-" + o + "-theme"), a.addClass("md-" + e + "-theme"), a.data("$mdThemeName", e)
				}
				var i = o.controller("mdTheme"),
				l = a.attr("md-theme-watch");
				if ((b || angular.isDefined(l)) && "false" != l) {
					var s = e.$watch(function() {
						return i && i.$mdTheme || g
					}, r);
					a.on("$destroy", s)
				} else {
					var d = i && i.$mdTheme || g;
					r(d)
				}
			}, a.registered = n, a.defaultTheme = function() {
				return g
			}, a
		}
		s = {}, d = {};
		var g = "default",
		b = !1;
		return angular.extend(s, e), m.$inject = ["$rootScope", "$log"], c = {
			definePalette: t,
			extendPalette: n,
			theme: r,
			setDefaultTheme: function(e) {
				g = e
			},
			alwaysWatchTheme: function(e) {
				b = e
			},
			$get: m,
			_LIGHT_DEFAULT_HUES: $,
			_DARK_DEFAULT_HUES: x,
			_PALETTES: s,
			_THEMES: d,
			_parseRules: a,
			_rgba: l
		}
	}

	function t(e, t, n) {
		return {
			priority: 100,
			link: {
				pre: function(a, o, r) {
					var i = {
							$setTheme: function(t) {
								e.registered(t) || n.warn("attempted to use unregistered theme '" + t + "'"), i.$mdTheme = t
							}
					};
					o.data("$mdThemeController", i), i.$setTheme(t(r.mdTheme)(a)), r.$observe("mdTheme", i.$setTheme)
				}
			}
		}
	}

	function n(e) {
		return e
	}

	function a(e, t, n) {
		r(e, t), n = n.replace(/THEME_NAME/g, e.name);
		var a = [],
		o = e.colors[t],
		i = new RegExp(".md-" + e.name + "-theme", "g"),
		d = new RegExp("('|\")?{{\\s*(" + t + ")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?", "g"),
		c = /'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?\s*\}\}'?"?/g,
		m = s[o.name];
		return n = n.replace(c, function(t, n, a, o) {
			return "foreground" === n ? "shadow" == a ? e.foregroundShadow : e.foregroundPalette[a] || e.foregroundPalette["1"] : (0 === a.indexOf("hue") && (a = e.colors[n].hues[a]), l((s[e.colors[n].name][a] || "").value, o))
		}), angular.forEach(o.hues, function(t, o) {
			var r = n.replace(d, function(e, n, a, o, r) {
				return l(m[t]["color" === o ? "value" : "contrast"], r)
			});
			"default" !== o && (r = r.replace(i, ".md-" + e.name + "-theme.md-" + o)), a.push(r)
		}), a.join("")
	}

	function o(e) {
		function t(e) {
			var t = e.contrastDefaultColor,
			n = e.contrastLightColors || [],
			a = e.contrastStrongLightColors || [],
			o = e.contrastDarkColors || [];
			"string" == typeof n && (n = n.split(" ")), "string" == typeof a && (a = a.split(" ")), "string" == typeof o && (o = o.split(" ")), delete e.contrastDefaultColor, delete e.contrastLightColors, delete e.contrastStrongLightColors, delete e.contrastDarkColors, angular.forEach(e, function(r, l) {
				function s() {
					return "light" === t ? o.indexOf(l) > -1 ? g : a.indexOf(l) > -1 ? v : b : n.indexOf(l) > -1 ? a.indexOf(l) > -1 ? v : b : g
				}
				if (!angular.isObject(r)) {
					var d = i(r);
					if (!d) throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1", r).replace("%2", e.name).replace("%3", l));
					e[l] = {
							value: d,
							contrast: s()
					}
				}
			})
		}
		var n = e.has("$MD_THEME_CSS") ? e.get("$MD_THEME_CSS") : "";
		angular.forEach(s, t);
		var o = n.split(/\}(?!(\}|'|"|;))/).filter(function(e) {
			return e && e.length
		}).map(function(e) {
			return e.trim() + "}"
	}),
	r = {};
		E.forEach(function(e) {
			r[e] = ""
		});
		var l = new RegExp("md-(" + E.join("|") + ")", "g");
		o.forEach(function(e) {
			for (var t, n = (e.match(l), 0); t = E[n]; n++)
				if (e.indexOf(".md-" + t) > -1) return r[t] += e;
			for (n = 0; t = E[n]; n++)
				if (e.indexOf(t) > -1) return r[t] += e;
			return r[y] += e
		});
		var c = "";
		if (angular.forEach(d, function(e) {
			E.forEach(function(t) {
				c += a(e, t, r[t] + "")
			}), e.colors.primary.name == e.colors.accent.name && console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec.")
		}), !m) {
			var u = document.createElement("style");
			u.innerHTML = c;
			var p = document.getElementsByTagName("head")[0];
			p.insertBefore(u, p.firstElementChild), m = !0
		}
	}

	function r(e, t) {
		if (!s[(e.colors[t] || {}).name]) throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1", e.name).replace("%2", t).replace("%3", Object.keys(s).join(", ")))
	}

	function i(e) {
		if (angular.isArray(e) && 3 == e.length) return e;
		if (/^rgb/.test(e)) return e.replace(/(^\s*rgba?\(|\)\s*$)/g, "").split(",").map(function(e, t) {
			return 3 == t ? parseFloat(e, 10) : parseInt(e, 10)
		});
		if ("#" == e.charAt(0) && (e = e.substring(1)), /^([a-fA-F0-9]{3}){1,2}$/g.test(e)) {
			var t = e.length / 3,
			n = e.substr(0, t),
			a = e.substr(t, t),
			o = e.substr(2 * t);
			return 1 === t && (n += n, a += a, o += o), [parseInt(n, 16), parseInt(a, 16), parseInt(o, 16)]
		}
	}

	function l(e, t) {
		return 4 == e.length && (e = angular.copy(e), t ? e.pop() : t = e.pop()), t && ("number" == typeof t || "string" == typeof t && t.length) ? "rgba(" + e.join(",") + "," + t + ")" : "rgb(" + e.join(",") + ")"
	}
	angular.module("material.core.theming", ["material.core.theming.palette"]).directive("mdTheme", t).directive("mdThemable", n).provider("$mdTheming", e).run(o);
	var s, d, c, m, u = {
			name: "dark",
			1: "rgba(0,0,0,0.87)",
			2: "rgba(0,0,0,0.54)",
			3: "rgba(0,0,0,0.26)",
			4: "rgba(0,0,0,0.12)"
	},
	p = {
			name: "light",
			1: "rgba(255,255,255,1.0)",
			2: "rgba(255,255,255,0.7)",
			3: "rgba(255,255,255,0.3)",
			4: "rgba(255,255,255,0.12)"
	},
	h = "1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",
	f = "",
	g = i("rgba(0,0,0,0.87)"),
	b = i("rgba(255,255,255,0.87"),
	v = i("rgb(255,255,255)"),
	E = ["primary", "accent", "warn", "background"],
	y = "primary",
	$ = {
		accent: {
			"default": "A200",
			"hue-1": "A100",
			"hue-2": "A400",
			"hue-3": "A700"
		}
	},
	x = {
		background: {
			"default": "500",
			"hue-1": "300",
			"hue-2": "600",
			"hue-3": "800"
		}
	};
	E.forEach(function(e) {
		var t = {
				"default": "500",
				"hue-1": "300",
				"hue-2": "800",
				"hue-3": "A100"
		};
		$[e] || ($[e] = t), x[e] || (x[e] = t)
	});
	var M = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "A100", "A200", "A400", "A700"];
	e.$inject = ["$mdColorPalette"], t.$inject = ["$mdTheming", "$interpolate", "$log"], n.$inject = ["$mdTheming"], o.$inject = ["$injector"]
}(),
function() {
	"use strict";
	angular.module("material.components.autocomplete", ["material.core", "material.components.icon"])
}(),
function() {
	"use strict";

	function e(e) {
		return e
	}
	angular.module("material.components.backdrop", ["material.core"]).directive("mdBackdrop", e), e.$inject = ["$mdTheming"]
}(),
function() {
	"use strict";

	function e() {
		return {
			restrict: "E"
		}
	}

	function t(e) {
		function t(e, t, o, r, i, l, s, d, c, m) {
			function u(n, a, r) {
				f = i('<md-backdrop class="md-opaque md-bottom-sheet-backdrop">')(n), f.on("click", function() {
					o(s.cancel)
				}), l.inherit(f, r.parent), e.enter(f, r.parent, null);
				var c = new h(a, r.parent);
				return r.bottomSheet = c, r.targetEvent && angular.element(r.targetEvent.target).blur(), l.inherit(c.element, r.parent), r.disableParentScroll && (r.lastOverflow = r.parent.css("overflow"), r.parent.css("overflow", "hidden")), e.enter(c.element, r.parent).then(function() {
					var e = angular.element(a[0].querySelector("button") || a[0].querySelector("a") || a[0].querySelector("[ng-click]"));
					e.focus(), r.escapeToClose && (r.rootElementKeyupCallback = function(e) {
						e.keyCode === t.KEY_CODE.ESCAPE && o(s.cancel)
					}, d.on("keyup", r.rootElementKeyupCallback))
				})
			}

			function p(t, n, a) {
				var o = a.bottomSheet;
				return e.leave(f), e.leave(o.element).then(function() {
					a.disableParentScroll && (a.parent.css("overflow", a.lastOverflow), delete a.lastOverflow), o.cleanup(), a.targetEvent && angular.element(a.targetEvent.target).focus()
				})
			}

			function h(e, r) {
				function i() {
					e.css(t.CSS.TRANSITION_DURATION, "0ms")
				}

				function l(n) {
					var o = n.pointer.distanceY;
					5 > o && (o = Math.max(-a, o / 2)), e.css(t.CSS.TRANSFORM, "translate3d(0," + (a + o) + "px,0)")
				}

				function d(a) {
					if (a.pointer.distanceY > 0 && (a.pointer.distanceY > 20 || Math.abs(a.pointer.velocityY) > n)) {
						var r = e.prop("offsetHeight") - a.pointer.distanceY,
						i = Math.min(r / a.pointer.velocityY * .75, 500);
						e.css(t.CSS.TRANSITION_DURATION, i + "ms"), o(s.cancel)
					} else e.css(t.CSS.TRANSITION_DURATION, ""), e.css(t.CSS.TRANSFORM, "")
				}
				var c = m.register(r, "drag", {
					horizontal: !1
				});
				return r.on("$md.dragstart", i).on("$md.drag", l).on("$md.dragend", d), {
					element: e,
					cleanup: function() {
						c(), r.off("$md.dragstart", i).off("$md.drag", l).off("$md.dragend", d)
					}
				}
			}
			var f;
			return {
				themable: !0,
				targetEvent: null,
				onShow: u,
				onRemove: p,
				escapeToClose: !0,
				disableParentScroll: !0
			}
		}
		var n = .5,
		a = 80;
		return t.$inject = ["$animate", "$mdConstant", "$timeout", "$$rAF", "$compile", "$mdTheming", "$mdBottomSheet", "$rootElement", "$rootScope", "$mdGesture"], e("$mdBottomSheet").setDefaults({
			methods: ["disableParentScroll", "escapeToClose", "targetEvent"],
			options: t
		})
	}
	angular.module("material.components.bottomSheet", ["material.core", "material.components.backdrop"]).directive("mdBottomSheet", e).provider("$mdBottomSheet", t), t.$inject = ["$$interimElementProvider"]
}(),
function() {
	"use strict";

	function e(e, t, n) {
		function a(e) {
			return angular.isDefined(e.href) || angular.isDefined(e.ngHref)
		}

		function o(e, t) {
			return a(t) ? '<a class="md-button" ng-transclude></a>' : '<button class="md-button" ng-transclude></button>'
		}

		function r(o, r, i) {
			var l = r[0];
			t(r), e.attachButtonBehavior(o, r);
			var s = l.textContent.trim();
			s || n.expect(r, "aria-label"), a(i) && angular.isDefined(i.ngDisabled) && o.$watch(i.ngDisabled, function(e) {
				r.attr("tabindex", e ? -1 : 0)
			})
		}
		return {
			restrict: "EA",
			replace: !0,
			transclude: !0,
			template: o,
			link: r
		}
	}
	angular.module("material.components.button", ["material.core"]).directive("mdButton", e), e.$inject = ["$mdInkRipple", "$mdTheming", "$mdAria"]
}(),
function() {
	"use strict";

	function e(e) {
		return {
			restrict: "E",
			link: function(t, n) {
				e(n)
			}
		}
	}
	angular.module("material.components.card", ["material.core"]).directive("mdCard", e), e.$inject = ["$mdTheming"]
}(),
function() {
	"use strict";

	function e(e, t, n, a, o, r) {
		function i(t, i) {
			return i.type = "checkbox", i.tabIndex = 0, t.attr("role", i.type),
			function(t, i, s, d) {
				function c(e) {
					e.which === a.KEY_CODE.SPACE && (e.preventDefault(), m(e))
				}

				function m(e) {
					i[0].hasAttribute("disabled") || t.$apply(function() {
						p = !p, d.$setViewValue(p, e && e.type), d.$render()
					})
				}

				function u() {
					p = d.$viewValue, p ? i.addClass(l) : i.removeClass(l)
				}
				d = d || r.fakeNgModel();
				var p = !1;
				o(i), s.ngChecked && t.$watch(t.$eval.bind(t, s.ngChecked), d.$setViewValue.bind(d)), n.expectWithText(i, "aria-label"), e.link.pre(t, {
					on: angular.noop,
					0: {}
				}, s, [d]), i.on("click", m).on("keypress", c), d.$render = u
			}
		}
		e = e[0];
		var l = "md-checked";
		return {
			restrict: "E",
			transclude: !0,
			require: "?ngModel",
			template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',
			compile: i
		}
	}
	angular.module("material.components.checkbox", ["material.core"]).directive("mdCheckbox", e), e.$inject = ["inputDirective", "$mdInkRipple", "$mdAria", "$mdConstant", "$mdTheming", "$mdUtil"]
}(),
function() {
	"use strict";

	function e(e) {
		function n(e, t) {
			this.$scope = e, this.$element = t
		}
		return {
			restrict: "E",
			controller: ["$scope", "$element", n],
			link: function(n, a) {
				a[0];
				e(a), n.$broadcast("$mdContentLoaded", a), t(a[0])
			}
		}
	}

	function t(e) {
		angular.element(e).on("$md.pressdown", function(t) {
			"t" === t.pointer.type && (t.$materialScrollFixed || (t.$materialScrollFixed = !0, 0 === e.scrollTop ? e.scrollTop = 1 : e.scrollHeight === e.scrollTop + e.offsetHeight && (e.scrollTop -= 1)))
		})
	}
	angular.module("material.components.content", ["material.core"]).directive("mdContent", e), e.$inject = ["$mdTheming"]
}(),
function() {
	"use strict";

	function e(e, t) {
		return {
			restrict: "E",
			link: function(n, a) {
				t(a), e(function() {
					var e = a[0].querySelector("md-content");
					e && e.scrollHeight > e.clientHeight && a.addClass("md-content-overflow")
				})
			}
		}
	}

	function t(e) {
		function t(e, t) {
			return {
				template: ['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}">', "<md-content>", "<h2>{{ dialog.title }}</h2>", "<p>{{ dialog.content }}</p>", "</md-content>", '<div class="md-actions">', '<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()">', "{{ dialog.cancel }}", "</md-button>", '<md-button ng-click="dialog.hide()" class="md-primary">', "{{ dialog.ok }}", "</md-button>", "</div>", "</md-dialog>"].join(""),
				controller: function() {
					this.hide = function() {
						e.hide(!0)
					}, this.abort = function() {
						e.cancel()
					}
				},
				controllerAs: "dialog",
				bindToController: !0,
				theme: t.defaultTheme()
			}
		}

		function n(e, t, n, a, o, r, i, l, s, d, c, m) {
			function u(n, o, i) {
				function d() {
					var e = o[0].querySelector(".dialog-close");
					if (!e) {
						var t = o[0].querySelectorAll(".md-actions button");
						e = t[t.length - 1]
					}
					return angular.element(e)
				}
				i.parent = angular.element(i.parent), i.popInTarget = angular.element((i.targetEvent || {}).target);
				var c = d();
				if (h(o.find("md-dialog")), i.hasBackdrop) {
					var u = i.parent[0] == r[0].body && r[0].documentElement && r[0].scrollTop ? angular.element(r[0].documentElement) : i.parent,
							p = u.prop("scrollTop");
					i.backdrop = angular.element('<md-backdrop class="md-dialog-backdrop md-opaque">'), s.inherit(i.backdrop, i.parent), a.enter(i.backdrop, i.parent), o.css("top", p + "px")
				}
				return i.disableParentScroll && (i.lastOverflow = i.parent.css("overflow"), i.parent.css("overflow", "hidden")), f(o, i.parent, i.popInTarget && i.popInTarget.length && i.popInTarget).then(function() {
					i.escapeToClose && (i.rootElementKeyupCallback = function(t) {
						t.keyCode === l.KEY_CODE.ESCAPE && e(m.cancel)
					}, t.on("keyup", i.rootElementKeyupCallback)), i.clickOutsideToClose && (i.dialogClickOutsideCallback = function(t) {
						t.target === o[0] && e(m.cancel)
					}, o.on("click", i.dialogClickOutsideCallback)), c.focus()
				})
			}

			function p(e, n, o) {
				return o.backdrop && a.leave(o.backdrop), o.disableParentScroll && (o.parent.css("overflow", o.lastOverflow), delete o.lastOverflow), o.escapeToClose && t.off("keyup", o.rootElementKeyupCallback), o.clickOutsideToClose && n.off("click", o.dialogClickOutsideCallback), g(n, o.parent, o.popInTarget && o.popInTarget.length && o.popInTarget).then(function() {
					o.scope.$destroy(), n.remove(), o.popInTarget && o.popInTarget.focus()
				})
			}

			function h(e) {
				e.attr({
					role: "dialog"
				});
				var t = e.find("md-content");
				0 === t.length && (t = e), o.expectAsync(e, "aria-label", function() {
					var e = t.text().split(/\s+/);
					return e.length > 3 && (e = e.slice(0, 3).concat("...")), e.join(" ")
				})
			}

			function f(e, t, n) {
				var a = e.find("md-dialog");
				return t.append(e), b(a, n), d(function() {
					a.addClass("transition-in").css(l.CSS.TRANSFORM, "")
				}), i.transitionEndPromise(a)
			}

			function g(e, t, n) {
				var a = e.find("md-dialog");
				return a.addClass("transition-out").removeClass("transition-in"), b(a, n), i.transitionEndPromise(a)
			}

			function b(e, t) {
				if (t) {
					var n = t[0].getBoundingClientRect(),
					a = e[0].getBoundingClientRect(),
					o = Math.min(.5, n.width / a.width),
					r = Math.min(.5, n.height / a.height);
					e.css(l.CSS.TRANSFORM, "translate3d(" + (-a.left + n.left + n.width / 2 - a.width / 2) + "px," + (-a.top + n.top + n.height / 2 - a.height / 2) + "px,0) scale(" + o + "," + r + ")")
				}
			}
			return {
				hasBackdrop: !0,
				isolateScope: !0,
				onShow: u,
				onRemove: p,
				clickOutsideToClose: !0,
				escapeToClose: !0,
				targetEvent: null,
				disableParentScroll: !0,
				transformTemplate: function(e) {
					return '<div class="md-dialog-container">' + e + "</div>"
				}
			}
		}
		return t.$inject = ["$mdDialog", "$mdTheming"], n.$inject = ["$timeout", "$rootElement", "$compile", "$animate", "$mdAria", "$document", "$mdUtil", "$mdConstant", "$mdTheming", "$$rAF", "$q", "$mdDialog"], e("$mdDialog").setDefaults({
			methods: ["disableParentScroll", "hasBackdrop", "clickOutsideToClose", "escapeToClose", "targetEvent"],
			options: n
		}).addPreset("alert", {
			methods: ["title", "content", "ariaLabel", "ok", "theme"],
			options: t
		}).addPreset("confirm", {
			methods: ["title", "content", "ariaLabel", "ok", "cancel", "theme"],
			options: t
		})
	}
	angular.module("material.components.dialog", ["material.core", "material.components.backdrop"]).directive("mdDialog", e).provider("$mdDialog", t), e.$inject = ["$$rAF", "$mdTheming"], t.$inject = ["$$interimElementProvider"]
}(),
function() {
	"use strict";

	function e() {}

	function t(t) {
		return {
			restrict: "E",
			link: t,
			controller: [e]
		}
	}
	angular.module("material.components.divider", ["material.core"]).directive("mdDivider", t), t.$inject = ["$mdTheming"]
}(),
function() {
	"use strict";

	function e(e, n, a, o) {
		function r(t, r, i, l) {
			function s() {
				for (var e in n.MEDIA) o(e), o.getQuery(n.MEDIA[e]).addListener($);
				return o.watchResponsiveAttributes(["md-cols", "md-row-height"], i, c)
			}

			function d() {
				x();
				for (var e in n.MEDIA) o.getQuery(n.MEDIA[e]).removeListener($)
			}

			function c(e) {
				null == e ? l.invalidateLayout() : o(e) && l.invalidateLayout()
			}

			function m() {
				var e = h(),
				n = g(),
				o = E(),
				i = v(),
				l = b(),
				s = a(n, f(), h()).map(function(t, a) {
					return {
						grid: {
							element: r,
							style: p(n, a, l, o, i)
						},
						tiles: t.map(function(t, r) {
							return {
								element: angular.element(e[r]),
								style: u(t.position, t.spans, n, a, l, o, i)
							}
						})
					}
				}).reflow().performance();
				t.mdOnLayout({
					$event: {
						performance: s
					}
				})
			}

			function u(e, t, n, a, o, r, i) {
				var l = 1 / n * 100,
				s = 1 === n ? 0 : (n - 1) / n,
						d = M({
							share: l,
							gutterShare: s,
							gutter: o
						}),
						c = {
						left: w({
							unit: d,
							offset: e.col,
							gutter: o
						}),
						width: T({
							unit: d,
							span: t.col,
							gutter: o
						}),
						paddingTop: "",
						marginTop: "",
						top: "",
						height: ""
				};
				switch (r) {
				case "fixed":
					c.top = w({
						unit: i,
						offset: e.row,
						gutter: o
					}), c.height = T({
						unit: i,
						span: t.row,
						gutter: o
					});
					break;
				case "ratio":
					var m = l * (1 / i),
					u = M({
						share: m,
						gutterShare: s,
						gutter: o
					});
					c.paddingTop = T({
						unit: u,
						span: t.row,
						gutter: o
					}), c.marginTop = w({
						unit: u,
						offset: e.row,
						gutter: o
					});
					break;
				case "fit":
					var p = 1 === a ? 0 : (a - 1) / a,
							m = 1 / a * 100,
							u = M({
								share: m,
								gutterShare: p,
								gutter: o
							});
					c.top = w({
						unit: u,
						offset: e.row,
						gutter: o
					}), c.height = T({
						unit: u,
						span: t.row,
						gutter: o
					})
				}
				return c
			}

			function p(e, t, n, a, o) {
				var r = {
						height: "",
						paddingBottom: ""
				};
				switch (a) {
				case "fixed":
					r.height = T({
						unit: o,
						span: t,
						gutter: n
					});
					break;
				case "ratio":
					var i = 1 === e ? 0 : (e - 1) / e,
							l = 1 / e * 100,
							s = l * (1 / o),
							d = M({
								share: s,
								gutterShare: i,
								gutter: n
							});
					r.paddingBottom = T({
						unit: d,
						span: t,
						gutter: n
					});
					break;
				case "fit":
				}
				return r
			}

			function h() {
				return l.tiles.map(function(e) {
					return e.element
				})
			}

			function f() {
				return l.tiles.map(function(e) {
					return {
						row: parseInt(o.getResponsiveAttribute(e.attrs, "md-rowspan"), 10) || 1,
						col: parseInt(o.getResponsiveAttribute(e.attrs, "md-colspan"), 10) || 1
					}
				})
			}

			function g() {
				var e = parseInt(o.getResponsiveAttribute(i, "md-cols"), 10);
				if (isNaN(e)) throw "md-grid-list: md-cols attribute was not found, or contained a non-numeric value";
				return e
			}

			function b() {
				return y(o.getResponsiveAttribute(i, "md-gutter") || 1)
			}

			function v() {
				var e = o.getResponsiveAttribute(i, "md-row-height");
				switch (E()) {
				case "fixed":
					return y(e);
				case "ratio":
					var t = e.split(":");
					return parseFloat(t[0]) / parseFloat(t[1]);
				case "fit":
					return 0
				}
			}

			function E() {
				var e = o.getResponsiveAttribute(i, "md-row-height");
				return "fit" == e ? "fit" : -1 !== e.indexOf(":") ? "ratio" : "fixed"
			}

			function y(e) {
				return /\D$/.test(e) ? e : e + "px"
			}
			r.attr("role", "list"), l.layoutDelegate = m;
			var $ = angular.bind(l, l.invalidateLayout),
			x = s();
			t.$on("$destroy", d);
			var M = e("{{ share }}% - ({{ gutter }} * {{ gutterShare }})"),
			w = e("calc(({{ unit }}) * {{ offset }} + {{ offset }} * {{ gutter }})"),
			T = e("calc(({{ unit }}) * {{ span }} + ({{ span }} - 1) * {{ gutter }})")
		}
		return {
			restrict: "E",
			controller: t,
			scope: {
				mdOnLayout: "&"
			},
			link: r
		}
	}

	function t(e) {
		this.invalidated = !1, this.$timeout_ = e, this.tiles = [], this.layoutDelegate = angular.noop
	}

	function n(e) {
		function t(t, n) {
			var r, i, l, s, d, c, i;
			return s = e.time(function() {
				i = a(t, n)
			}), r = {
				layoutInfo: function() {
					return i
				},
				map: function(t) {
					return d = e.time(function() {
						var e = r.layoutInfo();
						l = t(e.positioning, e.rowCount)
					}), r
				},
				reflow: function(t) {
					return c = e.time(function() {
						var e = t || o;
						e(l.grid, l.tiles)
					}), r
				},
				performance: function() {
					return {
						tileCount: n.length,
						layoutTime: s,
						mapTime: d,
						reflowTime: c,
						totalTime: s + d + c
					}
				}
			}
		}

		function n(e, t) {
			e.element.css(e.style), t.forEach(function(e) {
				e.element.css(e.style)
			})
		}

		function a(e, t) {
			function n(t, n) {
				if (t.col > e) throw "md-grid-list: Tile at position " + n + " has a colspan (" + t.col + ") that exceeds the column count (" + e + ")";
				for (var i = 0, c = 0; c - i < t.col;) l >= e ? a() : (i = d.indexOf(0, l), -1 !== i && -1 !== (c = r(i + 1)) ? l = c + 1 : (i = c = 0, a()));
				return o(i, t.col, t.row), l = i + t.col, {
					col: i,
					row: s
				}
			}

			function a() {
				l = 0, s++, o(0, e, -1)
			}

			function o(e, t, n) {
				for (var a = e; e + t > a; a++) d[a] = Math.max(d[a] + n, 0)
			}

			function r(e) {
				var t;
				for (t = e; t < d.length; t++)
					if (0 !== d[t]) return t;
				return t === d.length ? t : void 0
			}

			function i() {
				for (var t = [], n = 0; e > n; n++) t.push(0);
				return t
			}
			var l = 0,
			s = 0,
			d = i();
			return {
				positioning: t.map(function(e, t) {
					return {
						spans: e,
						position: n(e, t)
					}
				}),
				rowCount: s + Math.max.apply(Math, d)
			}
		}
		var o = n;
		return t.animateWith = function(e) {
			o = angular.isFunction(e) ? e : n
		}, t
	}

	function a(e) {
		function t(t, n, a, o) {
			n.attr("role", "listitem");
			var r = e.watchResponsiveAttributes(["md-colspan", "md-rowspan"], a, angular.bind(o, o.invalidateLayout));
			o.addTile(n, a, t.$parent.$index), t.$on("$destroy", function() {
				r(), o.removeTile(n, a)
			})
		}
		return {
			restrict: "E",
			require: "^mdGridList",
			template: "<figure ng-transclude></figure>",
			transclude: !0,
			scope: {},
			link: t
		}
	}

	function o() {
		return {
			template: "<figcaption ng-transclude></figcaption>",
			transclude: !0
		}
	}
	angular.module("material.components.gridList", ["material.core"]).directive("mdGridList", e).directive("mdGridTile", a).directive("mdGridTileFooter", o).directive("mdGridTileHeader", o).factory("$mdGridLayout", n), e.$inject = ["$interpolate", "$mdConstant", "$mdGridLayout", "$mdMedia", "$mdUtil"], t.$inject = ["$timeout"], t.prototype = {
		addTile: function(e, t, n) {
			var a = {
					element: e,
					attrs: t
			};
			angular.isUndefined(n) ? this.tiles.push(a) : this.tiles.splice(n, 0, a), this.invalidateLayout()
		},
		removeTile: function(e, t) {
			var n = this._findTileIndex(t); - 1 !== n && (this.tiles.splice(n, 1), this.invalidateLayout())
		},
		invalidateLayout: function() {
			this.invalidated || (this.invalidated = !0, this.$timeout_(angular.bind(this, this.layout)))
		},
		layout: function() {
			try {
				this.layoutDelegate()
			} finally {
				this.invalidated = !1
			}
		},
		_findTileIndex: function(e) {
			for (var t = 0; t < this.tiles.length; t++)
				if (this.tiles[t].attrs == e) return t;
			return -1
		}
	}, n.$inject = ["$mdUtil"], a.$inject = ["$mdMedia"]
}(),
function() {
	"use strict";

	function e(e, t, n) {
		function a(e, t) {
			return t.mdFontIcon ? '<span class="md-font" ng-class="fontIcon"></span>' : ""
		}

		function o(a, o, r) {
			function i() {
				var e = o.parent();
				return e.attr("aria-label") || e.text() ? !0 : e.parent().attr("aria-label") || e.parent().text() ? !0 : !1
			}
			t(o);
			var l = r.alt || a.fontIcon || a.svgIcon,
			s = r.$normalize(r.$attr.mdSvgIcon || r.$attr.mdSvgSrc || "");
			"" == r.alt || i() ? n.expect(o, "aria-hidden", "true") : (n.expect(o, "aria-label", l), n.expect(o, "role", "img")), s && r.$observe(s, function(t) {
				o.empty(), t && e(t).then(function(e) {
					o.append(e)
				})
			})
		}
		return {
			scope: {
				fontIcon: "@mdFontIcon",
				svgIcon: "@mdSvgIcon",
				svgSrc: "@mdSvgSrc"
			},
			restrict: "E",
			template: a,
			link: o
		}
	}
	angular.module("material.components.icon", ["material.core"]).directive("mdIcon", e), e.$inject = ["$mdIcon", "$mdTheming", "$mdAria"]
}(),
function() {
	"use strict";

	function e() {}

	function t(e, t) {
		this.url = e, this.iconSize = t || a.defaultIconSize
	}

	function n(e, t, n, a, o) {
		function r(t) {
			return function(n) {
				return f[t] = m(n) ? n : new u(n, e[t]), f[t].clone()
			}
		}

		function i(t) {
			var a = e[t];
			return a ? s(a.url).then(function(e) {
				return new u(e, a)
			}) : n.reject(t)
		}

		function l(t) {
			function a(e) {
				var a = t.slice(t.lastIndexOf(":") + 1),
				o = e.querySelector("#" + a);
				return o ? new u(o, r) : n.reject(t)
			}
			var o = t.substring(0, t.lastIndexOf(":")) || "$default",
			r = e[o];
			return r ? s(r.url).then(a) : n.reject(t)
		}

		function s(e) {
			return t.get(e, {
				cache: o
			}).then(function(e) {
				for (var t = angular.element(e.data), n = 0; n < t.length; ++n)
					if ("svg" == t[n].nodeName) return t[n]
			})
		}

		function d(e) {
			var t;
			return angular.isString(e) && (t = "icon " + e + " not found", a.warn(t)), n.reject(t || e)
		}

		function c(e) {
			var t = angular.isString(e) ? e : e.message || e.data || e.statusText;
			return a.warn(t), n.reject(t)
		}

		function m(e) {
			return angular.isDefined(e.element) && angular.isDefined(e.config)
		}

		function u(e, t) {
			"svg" != e.tagName && (e = angular.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]), e = angular.element(e), e.attr("xmlns") || e.attr("xmlns", "http://www.w3.org/2000/svg"), this.element = e, this.config = t, this.prepare()
		}

		function p() {
			var t = this.config ? this.config.iconSize : e.defaultIconSize,
					n = angular.element(this.element);
			n.attr({
				fit: "",
				height: "100%",
				width: "100%",
				preserveAspectRatio: "xMidYMid meet",
				viewBox: n.attr("viewBox") || "0 0 " + t + " " + t
			}).css({
				"pointer-events": "none",
				display: "block"
			}), this.element = n
		}

		function h() {
			return angular.element(this.element[0].cloneNode(!0))
		}
		var f = {},
		g = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;
		return u.prototype = {
				clone: h,
				prepare: p
		},
		function(e) {
			return e = e || "", f[e] ? n.when(f[e].clone()) : g.test(e) ? s(e).then(r(e)) : (-1 == e.indexOf(":") && (e = "$default:" + e), i(e).catch(l).catch(d).catch(c).then(r(e)))
		}
	}
	angular.module("material.components.icon").provider("$mdIcon", e);
	var a = {
			defaultIconSize: 24
	};
	e.prototype = {
			icon: function(e, n, o) {
				return -1 == e.indexOf(":") && (e = "$default:" + e), a[e] = new t(n, o), this
			},
			iconSet: function(e, n, o) {
				return a[e] = new t(n, o), this
			},
			defaultIconSet: function(e, n) {
				var o = "$default";
				return a[o] || (a[o] = new t(e, n)), a[o].iconSize = n || a.defaultIconSize, this
			},
			defaultIconSize: function(e) {
				return a.defaultIconSize = e, this
			},
			preloadIcons: function(e) {
				var t = this,
				n = [{
					id: "tabs-arrow",
					url: "tabs-arrow.svg",
					svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="tabs-arrow"><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'
				}, {
					id: "close",
					url: "close.svg",
					svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="close"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'
				}, {
					id: "cancel",
					url: "cancel.svg",
					svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="cancel"><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'
				}];
				n.forEach(function(n) {
					t.icon(n.id, n.url), e.put(n.url, n.svg)
				})
			},
			$get: ["$http", "$q", "$log", "$templateCache", function(e, t, o, r) {
				return this.preloadIcons(r), new n(a, e, t, o, r)
			}]
	}
}(),
function() {
	function e(e, t) {
		function n(t, n) {
			e(n)
		}

		function a(e, n, a) {
			var o = this;
			o.isErrorGetter = a.mdIsError && t(a.mdIsError), o.element = n, o.setFocused = function(e) {
				n.toggleClass("md-input-focused", !!e)
			}, o.setHasValue = function(e) {
				n.toggleClass("md-input-has-value", !!e)
			}, o.setInvalid = function(e) {
				n.toggleClass("md-input-invalid", !!e)
			}, e.$watch(function() {
				return o.label && o.input
			}, function(e) {
				e && !o.label.attr("for") && o.label.attr("for", o.input.attr("id"))
			})
		}
		return a.$inject = ["$scope", "$element", "$attrs"], {
			restrict: "E",
			link: n,
			controller: a
		}
	}

	function t() {
		return {
			restrict: "E",
			require: "^?mdInputContainer",
			link: function(e, t, n, a) {
				a && !n.mdNoFloat && (a.label = t, e.$on("$destroy", function() {
					a.label = null
				}))
			}
		}
	}

	function n(e, t) {
		function n(n, a, o, r) {
			function i(e) {
				return d.setHasValue(!c.$isEmpty(e)), e
			}

			function l() {
				d.setHasValue(a.val().length > 0 || (a[0].validity || {}).badInput)
			}

			function s() {
				function o(e) {
					return d(), e
				}

				function r() {
					s.style.height = "auto", s.scrollTop = 0;
					var e = i();
					e && (s.style.height = e + "px")
				}

				function i() {
					var e = s.scrollHeight - s.offsetHeight;
					return s.offsetHeight + (e > 0 ? e : 0)
				}

				function l() {
					s.scrollTop = 0;
					var e = s.scrollHeight - s.offsetHeight,
					t = s.offsetHeight + e;
					s.style.height = t + "px"
				}
				var s = a[0],
				d = e.debounce(r, 1);
				c ? (c.$formatters.push(o), c.$viewChangeListeners.push(o)) : d(), a.on("keydown input", d), a.on("scroll", l), angular.element(t).on("resize", d), n.$on("$destroy", function() {
					angular.element(t).off("resize", d)
				})
			}
			var d = r[0],
			c = r[1] || e.fakeNgModel(),
			m = angular.isDefined(o.readonly);
			if (d) {
				if (d.input) throw new Error("<md-input-container> can only have *one* <input> or <textarea> child element!");
				d.input = a, a.addClass("md-input"), a.attr("id") || a.attr("id", "input_" + e.nextUid()), "textarea" === a[0].tagName.toLowerCase() && s();
				var u = !1,
				p = d.isErrorGetter || function() {
					return c.$invalid && (u || c.$touched)
				};
				n.$watch(p, d.setInvalid), c.$parsers.push(i), c.$formatters.push(i), a.on("input", l), m || a.on("focus", function() {
					u = !0, d.setFocused(!0), n.$evalAsync()
				}).on("blur", function() {
					d.setFocused(!1), l()
				}), n.$on("$destroy", function() {
					d.setFocused(!1), d.setHasValue(!1), d.input = null
				})
			}
		}
		return {
			restrict: "E",
			require: ["^?mdInputContainer", "?ngModel"],
			link: n
		}
	}

	function a(e) {
		function t(t, n, a, o) {
			function r(e) {
				return d.text((n.val() || e || "").length + "/" + i), e
			}
			var i, l = o[0],
			s = o[1],
			d = angular.element('<div class="md-char-counter">');
			a.$set("ngTrim", "false"), s.element.append(d), l.$formatters.push(r), l.$viewChangeListeners.push(r), n.on("input keydown", function() {
				r()
			}), t.$watch(a.mdMaxlength, function(t) {
				i = t, angular.isNumber(t) && t > 0 ? (d.parent().length || e.enter(d, s.element, angular.element(s.element[0].lastElementChild)), r()) : e.leave(d)
			}), l.$validators["md-maxlength"] = function(e, t) {
				return !angular.isNumber(i) || 0 > i ? !0 : (e || n.val() || t || "").length <= i
			}
		}
		return {
			restrict: "A",
			require: ["ngModel", "^mdInputContainer"],
			link: t
		}
	}

	function o() {
		function e(e, t, n, a) {
			if (a) {
				var o = n.placeholder;
				t.removeAttr("placeholder"), a.element.append('<div class="md-placeholder">' + o + "</div>")
			}
		}
		return {
			restrict: "A",
			require: "^^?mdInputContainer",
			link: e
		}
	}
	angular.module("material.components.input", ["material.core"]).directive("mdInputContainer", e).directive("label", t).directive("input", n).directive("textarea", n).directive("mdMaxlength", a).directive("placeholder", o), e.$inject = ["$mdTheming", "$parse"], n.$inject = ["$mdUtil", "$window"], a.$inject = ["$animate"]
}(),
function() {
	"use strict";

	function e() {
		return {
			restrict: "E",
			link: function(e, t) {
				t.attr({
					role: "list"
				})
			}
		}
	}

	function t() {
		return {
			restrict: "E",
			link: function(e, t) {
				t.attr({
					role: "listitem"
				})
			}
		}
	}
	angular.module("material.components.list", ["material.core"]).directive("mdList", e).directive("mdItem", t)
}(),
function() {
	"use strict";

	function e(e, t, n) {
		function a(e) {
			return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), o
		}

		function o(e, a, o) {
			n(a);
			var s, d, c, m, u = a[0],
			p = u.querySelectorAll(".md-fill, .md-mask.md-full"),
			h = u.querySelectorAll(".md-fill.md-fix"),
			f = o.mdDiameter || 48,
			g = f / 48;
			u.style[t.CSS.TRANSFORM] = "scale(" + g.toString() + ")", o.$observe("value", function(e) {
				for (d = r(e), c = i[d], m = l[d], a.attr("aria-valuenow", d), s = 0; s < p.length; s++) p[s].style[t.CSS.TRANSFORM] = c;
				for (s = 0; s < h.length; s++) h[s].style[t.CSS.TRANSFORM] = m
			})
		}

		function r(e) {
			return e > 100 ? 100 : 0 > e ? 0 : Math.ceil(e || 0)
		}
		for (var i = new Array(101), l = new Array(101), s = 0; 101 > s; s++) {
			var d = s / 100,
			c = Math.floor(180 * d);
			i[s] = "rotate(" + c.toString() + "deg)", l[s] = "rotate(" + (2 * c).toString() + "deg)"
		}
		return {
			restrict: "E",
			template: '<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',
			compile: a
		}
	}
	angular.module("material.components.progressCircular", ["material.core"]).directive("mdProgressCircular", e), e.$inject = ["$$rAF", "$mdConstant", "$mdTheming"]
}(),
function() {
	"use strict";

	function e(e, n, a) {
		function o(e) {
			return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), r
		}

		function r(o, r, l) {
			a(r);
			var s = r[0].querySelector(".md-bar1").style,
			d = r[0].querySelector(".md-bar2").style,
			c = angular.element(r[0].querySelector(".md-container"));
			l.$observe("value", function(e) {
				if ("query" != l.mdMode) {
					var a = i(e);
					r.attr("aria-valuenow", a), d[n.CSS.TRANSFORM] = t[a]
				}
			}), l.$observe("mdBufferValue", function(e) {
				s[n.CSS.TRANSFORM] = t[i(e)]
			}), e(function() {
				c.addClass("md-ready")
			})
		}

		function i(e) {
			return e > 100 ? 100 : 0 > e ? 0 : Math.ceil(e || 0)
		}
		return {
			restrict: "E",
			template: '<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',
			compile: o
		}
	}
	angular.module("material.components.progressLinear", ["material.core"]).directive("mdProgressLinear", e), e.$inject = ["$$rAF", "$mdConstant", "$mdTheming"];
	var t = function() {
		function e(e) {
			var t = e / 100,
			n = (e - 100) / 2;
			return "translateX(" + n.toString() + "%) scale(" + t.toString() + ", 1)"
		}
		for (var t = new Array(101), n = 0; 101 > n; n++) t[n] = e(n);
		return t
	}()
}(),
function() {
	"use strict";

	function e(e, t, n) {
		function a(a, o, r, i) {
			function l(n) {
				switch (n.keyCode) {
				case t.KEY_CODE.LEFT_ARROW:
				case t.KEY_CODE.UP_ARROW:
					n.preventDefault(), s.selectPrevious();
					break;
				case t.KEY_CODE.RIGHT_ARROW:
				case t.KEY_CODE.DOWN_ARROW:
					n.preventDefault(), s.selectNext();
					break;
				case t.KEY_CODE.ENTER:
					var a = angular.element(e.getClosest(o[0], "form"));
					a.length > 0 && a.triggerHandler("submit")
				}
			}
			n(o);
			var s = i[0],
			d = i[1] || e.fakeNgModel();
			s.init(d), o.attr({
				role: "radiogroup",
				tabIndex: o.attr("tabindex") || "0"
			}).on("keydown", l)
		}

		function o(e) {
			this._radioButtonRenderFns = [], this.$element = e
		}

		function r() {
			return {
				init: function(e) {
					this._ngModelCtrl = e, this._ngModelCtrl.$render = angular.bind(this, this.render)
				},
				add: function(e) {
					this._radioButtonRenderFns.push(e)
				},
				remove: function(e) {
					var t = this._radioButtonRenderFns.indexOf(e); - 1 !== t && this._radioButtonRenderFns.splice(t, 1)
				},
				render: function() {
					this._radioButtonRenderFns.forEach(function(e) {
						e()
					})
				},
				setViewValue: function(e, t) {
					this._ngModelCtrl.$setViewValue(e, t), this.render()
				},
				getViewValue: function() {
					return this._ngModelCtrl.$viewValue
				},
				selectNext: function() {
					return i(this.$element, 1)
				},
				selectPrevious: function() {
					return i(this.$element, -1)
				},
				setActiveDescendant: function(e) {
					this.$element.attr("aria-activedescendant", e)
				}
			}
		}

		function i(t, n) {
			var a = e.iterator(t[0].querySelectorAll("md-radio-button"), !0);
			if (a.count()) {
				var o = function(e) {
					return !angular.element(e).attr("disabled")
				},
				r = t[0].querySelector("md-radio-button.md-checked"),
				i = a[0 > n ? "previous" : "next"](r, o) || a.first();
				angular.element(i).triggerHandler("click")
			}
		}
		return o.prototype = r(), {
			restrict: "E",
			controller: ["$element", o],
			require: ["mdRadioGroup", "?ngModel"],
			link: {
				pre: a
			}
		}
	}

	function t(e, t, n) {
		function a(a, r, i, l) {
			function s(e) {
				r[0].hasAttribute("disabled") || a.$apply(function() {
					l.setViewValue(i.value, e && e.type)
				})
			}

			function d() {
				var e = l.getViewValue() == i.value;
				e !== m && (m = e, r.attr("aria-checked", e), e ? (r.addClass(o), l.setActiveDescendant(r.attr("id"))) : r.removeClass(o))
			}

			function c(n, a) {
				function o() {
					return i.id || "radio_" + t.nextUid()
				}
				a.ariaId = o(), n.attr({
					id: a.ariaId,
					role: "radio",
					"aria-checked": "false"
				}), e.expectWithText(n, "aria-label")
			}
			var m;
			n(r), c(r, a), l.add(d), i.$observe("value", d), r.on("click", s).on("$destroy", function() {
				l.remove(d)
			})
		}
		var o = "md-checked";
		return {
			restrict: "E",
			require: "^mdRadioGroup",
			transclude: !0,
			template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',
			link: a
		}
	}
	angular.module("material.components.radioButton", ["material.core"]).directive("mdRadioGroup", e).directive("mdRadioButton", t), e.$inject = ["$mdUtil", "$mdConstant", "$mdTheming"], t.$inject = ["$mdAria", "$mdUtil", "$mdTheming"]
}(),
function() {
	"use strict";

	function e(e, t, n, a, o) {
		function r(a, r) {
			var i = a.find("md-select-label").remove();
			i.length || (i = angular.element("<md-select-label><span></span></md-select-label>")), i.append('<span class="md-select-icon" aria-hidden="true"></span>'), i.addClass("md-select-label"), i.attr("id", "select_label_" + t.nextUid()), a.find("md-content").length || a.append(angular.element("<md-content>").append(a.contents())), r.mdOnOpen && a.find("md-content").prepend(angular.element("<md-progress-circular>").attr("md-mode", "indeterminate").attr("ng-hide", "$$loadingAsyncDone").wrap("<div>").parent());
			var l = angular.element('<div class="md-select-menu-container"><md-select-menu ' + (angular.isDefined(r.multiple) ? "multiple" : "") + ">" + a.html() + "</md-select-menu></div>");
			return a.empty().append(i), n(a),
			function(n, a, r, i) {
				function s() {
					u = angular.element(l.clone());
					var e = u.find("md-select-menu");
					e.data("$ngModelController", f), e.data("$mdSelectController", h), p = n.$new(), u = o(u)(p)
				}

				function d(e) {
					var t = [32, 13, 38, 40]; - 1 != t.indexOf(e.keyCode) && (e.preventDefault(), c(e))
				}

				function c() {
					n.$evalAsync(function() {
						m = !0, e.show({
							scope: p,
							preserveScope: !0,
							skipCompile: !0,
							element: u,
							target: a[0],
							hasBackdrop: !0,
							loadingAsync: r.mdOnOpen ? n.$eval(r.mdOnOpen) : !1
						}).then(function() {
							m = !1
						})
					})
				}
				var m, u, p, h = i[0],
				f = i[1],
				g = a.find("md-select-label"),
				b = 0 !== g.text().length;
				s();
				var v = f.$render;
				f.$render = function() {
					if (v(), u) {
						var e = u.find("md-select-menu").controller("mdSelectMenu");
						h.setLabelText(e.selectedLabels())
					}
				}, h.setLabelText = function(e) {
					if (!b) {
						h.setIsPlaceholder(!e);
						var t = e || r.placeholder,
						n = b ? g : g.children().eq(0);
						n.text(t)
					}
				}, h.setIsPlaceholder = function(e) {
					e ? g.addClass("md-placeholder") : g.removeClass("md-placeholder")
				}, r.$observe("disabled", function(e) {
					void 0 !== e ? (a.attr("tabindex", -1), a.off("click", c), a.off("keydown", d)) : (a.attr("tabindex", 0), a.on("click", c), a.on("keydown", d))
				}), void 0 === r.disabled && (a.on("click", c), a.on("keydown", d)), a.attr({
					role: "combobox",
					id: "select_" + t.nextUid(),
					"aria-haspopup": !0,
					"aria-expanded": "false",
					"aria-labelledby": g.attr("id")
				}), n.$on("$destroy", function() {
					m ? e.cancel().then(function() {
						u.remove()
					}) : u.remove()
				})
			}
		}
		a.startSymbol(), a.endSymbol();
		return {
			restrict: "E",
			require: ["mdSelect", "ngModel"],
			compile: r,
			controller: function() {}
		}
	}

	function t(e, t, n) {
		function a(e, a, o, r) {
			function i() {
				a.attr({
					id: "select_menu_" + t.nextUid(),
					role: "listbox",
					"aria-multiselectable": d.isMultiple ? "true" : "false"
				})
			}

			function l(e) {
				(13 == e.keyCode || 32 == e.keyCode) && s(e)
			}

			function s(n) {
				var a = t.getClosest(n.target, "md-option"),
				o = a && angular.element(a).data("$mdOptionController");
				if (a && o) {
					var r = d.hashGetter(o.value),
					i = angular.isDefined(d.selected[r]);
					e.$apply(function() {
						d.isMultiple ? i ? d.deselect(r) : d.select(r, o.value) : i || (d.deselect(Object.keys(d.selected)[0]), d.select(r, o.value)), d.refreshViewValue()
					})
				}
			}
			var d = r[0],
			c = r[1];
			n(a), a.on("click", s), a.on("keypress", l), c && d.init(c), i()
		}

		function o(t, n, a) {
			function o() {
				var e = s.ngModel.$modelValue || s.ngModel.$viewValue;
				if (angular.isArray(e)) {
					var t = Object.keys(s.selected),
					n = e.map(s.hashGetter),
					a = t.filter(function(e) {
						return -1 === n.indexOf(e)
					});
					a.forEach(s.deselect), n.forEach(function(t, n) {
						s.select(t, e[n])
					})
				}
			}

			function i() {
				var e = s.ngModel.$viewValue || s.ngModel.$modelValue;
				Object.keys(s.selected).forEach(s.deselect), s.select(s.hashGetter(e), e)
			}
			var s = this;
			s.isMultiple = angular.isDefined(n.multiple), s.selected = {}, s.options = {}, s.init = function(a) {
				function r(e, t) {
					return angular.isArray(e || t || [])
				}
				if (s.ngModel = a, a.$options && a.$options.trackBy) {
					var d = {},
					c = e(a.$options.trackBy);
					s.hashGetter = function(e, n) {
						return d.$value = e, c(n || t, d)
					}
				} else s.hashGetter = function(e) {
					return angular.isObject(e) ? "$$object_" + (e.$$mdSelectId || (e.$$mdSelectId = ++l)) : e
				};
				s.isMultiple ? (a.$validators["md-multiple"] = r, a.$render = o, t.$watchCollection(n.ngModel, function(e) {
					r(e) && o(e)
				})) : a.$render = i
			}, s.selectedLabels = function() {
				var e = r(a[0].querySelectorAll("md-option[selected]"));
				return e.length ? e.map(function(e) {
					return e.textContent
				}).join(", ") : ""
			}, s.select = function(e, t) {
				var n = s.options[e];
				n && n.setSelected(!0), s.selected[e] = t
			}, s.deselect = function(e) {
				var t = s.options[e];
				t && t.setSelected(!1), delete s.selected[e]
			}, s.addOption = function(e, t) {
				if (angular.isDefined(s.options[e])) throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "' + t.value + '" found.');
				s.options[e] = t, angular.isDefined(s.selected[e]) && (s.select(e, t.value), s.refreshViewValue())
			}, s.removeOption = function(e) {
				delete s.options[e]
			}, s.refreshViewValue = function() {
				var e, t = [];
				for (var n in s.selected)(e = s.options[n]) ? t.push(e.value) : t.push(s.selected[n]);
				s.ngModel.$setViewValue(s.isMultiple ? t : t[0])
			}
		}
		return o.$inject = ["$scope", "$attrs", "$element"], {
			restrict: "E",
			require: ["mdSelectMenu", "?ngModel"],
			controller: o,
			link: {
				pre: a
			}
		}
	}

	function n(e, t) {
		function n(e, t) {
			return e.append(angular.element('<div class="md-text">').append(e.contents())), void 0 === t.tabindex && e.attr("tabindex", 0), a
		}

		function a(n, a, o, r) {
			function i(e, t) {
				var a = d.hashGetter(t, n),
				o = d.hashGetter(e, n);
				s.hashKey = o, s.value = e, d.removeOption(a, s), d.addOption(o, s)
			}

			function l() {
				a.attr({
					role: "option",
					"aria-selected": "false",
					id: "select_option_" + t.nextUid()
				})
			}
			var s = r[0],
			d = r[1];
			if (angular.isDefined(o.ngValue)) n.$watch(o.ngValue, i);
			else {
				if (!angular.isDefined(o.value)) throw new Error("Expected either ngValue or value attr");
				i(o.value)
			}
			e.attachButtonBehavior(n, a), l(), n.$on("$destroy", function() {
				d.removeOption(s.hashKey, s)
			})
		}

		function o(e) {
			this.selected = !1, this.setSelected = function(t) {
				t && !this.selected ? e.attr({
					selected: "selected",
					"aria-selected": "true"
				}) : !t && this.selected && (e.removeAttr("selected"), e.attr("aria-selected", "false")), this.selected = t
			}
		}
		return o.$inject = ["$element"], {
			restrict: "E",
			require: ["mdOption", "^^mdSelectMenu"],
			controller: o,
			compile: n
		}
	}

	function a() {
		function e(e, t) {
			var n = e.find("label");
			n.length || (n = angular.element("<label>"), e.prepend(n)), t.label && n.text(t.label)
		}
		return {
			restrict: "E",
			compile: e
		}
	}

	function o(e) {
		function t(e, t, o, l, s, d) {
			function c(n, a, i) {
				function c() {
					i.selectEl.attr("aria-labelledby", i.target.attr("id")), i.target.attr("aria-owns", i.selectEl.attr("id")), i.target.attr("aria-expanded", "true")
				}

				function m() {
					function o(e) {
						var t = r(p),
						n = t.indexOf(i.focusedNode); - 1 === n ? n = 0 : "next" === e && n < t.length - 1 ? n++ : "prev" === e && n > 0 && n--;
						var a = i.focusedNode = t[n];
						a && a.focus()
					}

					function s() {
						o("next")
					}

					function d() {
						o("prev")
					}

					function c() {
						i.restoreFocus = !0, n.$evalAsync(function() {
							e.hide(m.ngModel.$viewValue)
						})
					}
					if (!i.isRemoved) {
						var m = i.selectEl.controller("mdSelectMenu") || {};
						a.addClass("md-clickable"), i.backdrop && i.backdrop.on("click", function(t) {
							t.preventDefault(), t.stopPropagation(), i.restoreFocus = !1, n.$apply(e.cancel)
						}), i.selectEl.on("keydown", function(a) {
							switch (a.keyCode) {
							case t.KEY_CODE.SPACE:
							case t.KEY_CODE.ENTER:
								var o = l.getClosest(a.target, "md-option");
								o && (i.selectEl.triggerHandler({
									type: "click",
									target: o
								}), a.preventDefault());
								break;
							case t.KEY_CODE.TAB:
							case t.KEY_CODE.ESCAPE:
								a.preventDefault(), i.restoreFocus = !0, n.$apply(e.cancel)
							}
						}), i.selectEl.on("keydown", function(e) {
							switch (e.keyCode) {
							case t.KEY_CODE.UP_ARROW:
								return d();
							case t.KEY_CODE.DOWN_ARROW:
								return s()
							}
						}), m.isMultiple || (i.selectEl.on("click", c), i.selectEl.on("keydown", function(e) {
							(32 == e.keyCode || 13 == e.keyCode) && c()
						}))
					}
				}
				if (!i.target) throw new Error('$mdSelect.show() expected a target element in options.target but got "' + i.target + '"!');
				angular.extend(i, {
					isRemoved: !1,
					target: angular.element(i.target),
					parent: angular.element(i.parent),
					selectEl: a.find("md-select-menu"),
					contentEl: a.find("md-content"),
					backdrop: i.hasBackdrop && angular.element('<md-backdrop class="md-select-backdrop">')
				}), c(), a.removeClass("md-leave");
				var p = i.selectEl[0].getElementsByTagName("md-option");
				return i.loadingAsync && i.loadingAsync.then && i.loadingAsync.then(function() {
					n.$$loadingAsyncDone = !0, o(function() {
						o(function() {
							i.isRemoved || u(n, a, i)
						})
					})
				}), i.disableParentScroll && (i.disableTarget = i.parent.find("md-content"), i.disableTarget.length || (i.disableTarget = i.parent), i.lastOverflow = i.disableTarget.css("overflow"), i.disableTarget.css("overflow", "hidden")), d(m, 75, !1), i.backdrop && (s.inherit(i.backdrop, i.parent), i.parent.append(i.backdrop)), i.parent.append(a), o(function() {
					o(function() {
						i.isRemoved || u(n, a, i)
					})
				}), l.transitionEndPromise(i.selectEl)
			}

			function m(e, t, n) {
				n.isRemoved = !0, t.addClass("md-leave").removeClass("md-clickable"), n.target.attr("aria-expanded", "false"), n.disableParentScroll && l.floatingScrollbars() && (n.disableTarget.css("overflow", n.lastOverflow), delete n.lastOverflow, delete n.disableTarget);
				var a = n.selectEl.controller("mdSelect");
				return a && a.setLabelText(n.selectEl.controller("mdSelectMenu").selectedLabels()), l.transitionEndPromise(t).then(function() {
					t.removeClass("md-active"), n.parent[0].removeChild(t[0]), n.backdrop && n.backdrop.remove(), n.restoreFocus && n.target.focus()
				})
			}

			function u(e, r, s) {
				var d, c = r[0],
				m = s.target[0],
				u = s.parent[0],
				p = s.selectEl[0],
				h = s.contentEl[0],
				f = u.getBoundingClientRect(),
				g = l.clientRect(m, u),
				b = !1,
				v = {
					left: u.scrollLeft + i,
					top: u.scrollTop + i,
					bottom: f.height + u.scrollTop - i,
					right: f.width - u.scrollLeft - i
				},
				E = {
					top: g.top - v.top,
					left: g.left - v.left,
					right: v.right - (g.left + g.width),
					bottom: v.bottom - (g.top + g.height)
				},
				y = f.width - 2 * i,
				$ = h.scrollHeight > h.offsetHeight,
				x = p.querySelector("md-option[selected]"),
				M = p.getElementsByTagName("md-option"),
				w = p.getElementsByTagName("md-optgroup");
				d = x ? x : w.length ? w[0] : M.length ? M[0] : h.firstElementChild || h, h.offsetWidth > y && (h.style["max-width"] = y + "px"), b && (h.style["min-width"] = g.width + "px"), $ && p.classList.add("md-overflow");
				var T = p.getBoundingClientRect(),
				A = a(d);
				if (d) {
					var C = window.getComputedStyle(d);
					A.paddingLeft = parseInt(C["padding-left"], 10), A.paddingRight = parseInt(C["padding-right"], 10)
				}
				var k = d;
				if ("MD-OPTGROUP" === (k.tagName || "").toUpperCase() && (k = M[0] || h.firstElementChild || h), k && (s.focusedNode = k, k.focus()), $) {
					var S = h.offsetHeight / 2;
					h.scrollTop = A.top + A.height / 2 - S, E.top < S ? h.scrollTop = Math.min(A.top, h.scrollTop + S - E.top) : E.bottom < S && (h.scrollTop = Math.max(A.top + A.height - T.height, h.scrollTop - S + E.bottom))
				}
				var N, D, _;
				b ? (N = g.left, D = g.top + g.height, _ = "50% 0", D + T.height > v.bottom && (D = g.top - T.height, _ = "50% 100%")) : (N = g.left + A.left - A.paddingLeft, D = g.top + g.height / 2 - A.height / 2 - A.top + h.scrollTop, _ = A.left + g.width / 2 + "px " + (A.top + A.height / 2 - h.scrollTop) + "px 0px", c.style["min-width"] = g.width + A.paddingLeft + A.paddingRight + "px"), c.style.left = n(v.left, N, v.right) + "px", c.style.top = n(v.top, D, v.bottom) + "px", p.style[t.CSS.TRANSFORM_ORIGIN] = _, p.style[t.CSS.TRANSFORM] = "scale(" + Math.min(g.width / T.width, 1) + "," + Math.min(g.height / T.height, 1) + ")", o(function() {
					r.addClass("md-active"), p.style[t.CSS.TRANSFORM] = ""
				})
			}
			return {
				parent: "body",
				onShow: c,
				onRemove: m,
				hasBackdrop: !0,
				disableParentScroll: l.floatingScrollbars(),
				themable: !0
			}
		}

		function n(e, t, n) {
			return Math.min(n, Math.max(t, e))
		}

		function a(e) {
			return e ? {
				left: e.offsetLeft,
				top: e.offsetTop,
				width: e.offsetWidth,
				height: e.offsetHeight
			} : {
				left: 0,
				top: 0,
				width: 0,
				height: 0
			}
		}
		return t.$inject = ["$mdSelect", "$mdConstant", "$$rAF", "$mdUtil", "$mdTheming", "$timeout"], e("$mdSelect").setDefaults({
			methods: ["target"],
			options: t
		})
	}

	function r(e) {
		for (var t = [], n = 0; n < e.length; ++n) t.push(e.item(n));
		return t
	}
	var i = 8,
	l = 0;
	angular.module("material.components.select", ["material.core", "material.components.backdrop"]).directive("mdSelect", e).directive("mdSelectMenu", t).directive("mdOption", n).directive("mdOptgroup", a).provider("$mdSelect", o), e.$inject = ["$mdSelect", "$mdUtil", "$mdTheming", "$interpolate", "$compile", "$parse"], t.$inject = ["$parse", "$mdUtil", "$mdTheming"], n.$inject = ["$mdInkRipple", "$mdUtil"], o.$inject = ["$$interimElementProvider"]
}(),
function() {
	"use strict";

	function e(e, t) {
		return function(n) {
			var a = "SideNav '" + n + "' is not available!",
			o = e.get(n);
			return o || e.notFoundError(n), {
				isOpen: function() {
					return o && o.isOpen()
				},
				isLockedOpen: function() {
					return o && o.isLockedOpen()
				},
				toggle: function() {
					return o ? o.toggle() : t.reject(a)
				},
				open: function() {
					return o ? o.open() : t.reject(a)
				},
				close: function() {
					return o ? o.close() : t.reject(a)
				}
			}
		}
	}

	function t(e, t, n, a, o, r, i, l, s) {
		function d(d, c, m, u) {
			function p(e, n) {
				d.isLockedOpen = e, e === n ? c.toggleClass("md-locked-open", !!e) : t[e ? "addClass" : "removeClass"](c, "md-locked-open"), x.toggleClass("md-locked-open", !!e)
			}

			function h(e) {
				var n = c.parent();
				return n[e ? "on" : "off"]("keydown", g), x[e ? "on" : "off"]("click", b), e && (v = s[0].activeElement), E = l.all([t[e ? "enter" : "leave"](x, n), t[e ? "removeClass" : "addClass"](c, "md-closed").then(function() {
					d.isOpen && c.focus()
				})])
			}

			function f(t) {
				if (d.isOpen == t) return l.when(!0);
				var n = l.defer();
				return d.isOpen = t, e(function() {
					E.then(function(e) {
						d.isOpen || (v && v.focus(), v = null), n.resolve(e)
					})
				}, 0, !1), n.promise
			}

			function g(e) {
				var t = e.keyCode === o.KEY_CODE.ESCAPE;
				return t ? b(e) : l.when(!0)
			}

			function b(e) {
				return e.preventDefault(), e.stopPropagation(), u.close()
			}
			var v = null,
			E = l.when(!0),
			y = n(m.mdIsLockedOpen),
			$ = function() {
				return y(d.$parent, {
					$media: a
				})
			},
			x = r('<md-backdrop class="md-sidenav-backdrop md-opaque ng-enter">')(d);
			c.on("$destroy", u.destroy), i.inherit(x, c), d.$watch($, p), d.$watch("isOpen", h), u.$toggleOpen = f
		}
		return {
			restrict: "E",
			scope: {
				isOpen: "=?mdIsOpen"
			},
			controller: "$mdSidenavController",
			compile: function(e) {
				return e.addClass("md-closed"), e.attr("tabIndex", "-1"), d
			}
		}
	}

	function n(e, t, n, a, o) {
		var r = this;
		r.$toggleOpen = function() {
			return o.when(e.isOpen)
		}, r.isOpen = function() {
			return !!e.isOpen
		}, r.isLockedOpen = function() {
			return !!e.isLockedOpen
		}, r.open = function() {
			return r.$toggleOpen(!0)
		}, r.close = function() {
			return r.$toggleOpen(!1)
		}, r.toggle = function() {
			return r.$toggleOpen(!e.isOpen)
		}, r.destroy = a.register(r, n.mdComponentId)
	}
	angular.module("material.components.sidenav", ["material.core", "material.components.backdrop"]).factory("$mdSidenav", e).directive("mdSidenav", t).controller("$mdSidenavController", n), e.$inject = ["$mdComponentRegistry", "$q"], t.$inject = ["$timeout", "$animate", "$parse", "$mdMedia", "$mdConstant", "$compile", "$mdTheming", "$q", "$document"], n.$inject = ["$scope", "$element", "$attrs", "$mdComponentRegistry", "$q"]
}(),
function() {
	"use strict";

	function e(e, t, n, a, o, r, i, l) {
		function s(e) {
			return e.attr({
				tabIndex: 0,
				role: "slider"
			}), n.expect(e, "aria-label"), d
		}

		function d(n, s, d, c) {
			function m() {
				b(), $(), g()
			}

			function u(e) {
				Y = parseFloat(e), s.attr("aria-valuemin", e), m()
			}

			function p(e) {
				K = parseFloat(e), s.attr("aria-valuemax", e), m()
			}

			function h(e) {
				W = parseFloat(e), g()
			}

			function f(e) {
				s.attr("aria-disabled", !!e)
			}

			function g() {
				if (angular.isDefined(d.mdDiscrete)) {
					var e = Math.floor((K - Y) / W);
					if (!X) {
						var n = t.getComputedStyle(q[0]);
						X = angular.element('<canvas style="position:absolute;">'), Z = X[0].getContext("2d"), Z.fillStyle = n.backgroundColor || "black", q.append(X)
					}
					var a = v();
					X[0].width = a.width, X[0].height = a.height;
					for (var o, r = 0; e >= r; r++) o = Math.floor(a.width * (r / e)), Z.fillRect(o - 1, 0, 2, a.height)
				}
			}

			function b() {
				Q = L[0].getBoundingClientRect()
			}

			function v() {
				return G(), Q
			}

			function E(e) {
				if (!s[0].hasAttribute("disabled")) {
					var t;
					e.keyCode === o.KEY_CODE.LEFT_ARROW ? t = -W : e.keyCode === o.KEY_CODE.RIGHT_ARROW && (t = W), t && ((e.metaKey || e.ctrlKey || e.altKey) && (t *= 4), e.preventDefault(), e.stopPropagation(), n.$evalAsync(function() {
						y(c.$viewValue + t)
					}))
				}
			}

			function y(e) {
				c.$setViewValue(x(M(e)))
			}

			function $() {
				isNaN(c.$viewValue) && (c.$viewValue = c.$modelValue);
				var e = (c.$viewValue - Y) / (K - Y);
				n.modelValue = c.$viewValue, s.attr("aria-valuenow", c.$viewValue), w(e), O.text(c.$viewValue)
			}

			function x(e) {
				return angular.isNumber(e) ? Math.max(Y, Math.min(K, e)) : void 0
			}

			function M(e) {
				return angular.isNumber(e) ? Math.round(e / W) * W : void 0
			}

			function w(e) {
				F.css("width", 100 * e + "%"), R.css("left", 100 * e + "%"), s.toggleClass("md-min", 0 === e)
			}

			function T(e) {
				if (!U()) {
					s.addClass("active"), s[0].focus(), b();
					var t = P(j(e.pointer.x)),
					a = x(M(t));
					n.$apply(function() {
						y(a), w(H(a))
					})
				}
			}

			function A(e) {
				if (!U()) {
					s.removeClass("dragging active");
					var t = P(j(e.pointer.x)),
					a = x(M(t));
					n.$apply(function() {
						y(a), $()
					})
				}
			}

			function C(e) {
				U() || (J = !0, e.stopPropagation(), s.addClass("dragging"), N(e))
			}

			function k(e) {
				J && (e.stopPropagation(), N(e))
			}

			function S(e) {
				J && (e.stopPropagation(), J = !1)
			}

			function N(e) {
				et ? _(e.pointer.x) : D(e.pointer.x)
			}

			function D(e) {
				n.$evalAsync(function() {
					y(P(j(e)))
				})
			}

			function _(e) {
				var t = P(j(e)),
				n = x(M(t));
				w(j(e)), O.text(n)
			}

			function j(e) {
				return Math.max(0, Math.min(1, (e - Q.left) / Q.width))
			}

			function P(e) {
				return Y + e * (K - Y)
			}

			function H(e) {
				return (e - Y) / (K - Y)
			}
			r(s), c = c || {
				$setViewValue: function(e) {
					this.$viewValue = e, this.$viewChangeListeners.forEach(function(e) {
						e()
					})
				},
				$parsers: [],
				$formatters: [],
				$viewChangeListeners: []
			};
			var I = d.ngDisabled && l(d.ngDisabled),
			U = I ? function() {
				return I(n.$parent)
			} : angular.noop,
			B = angular.element(s[0].querySelector(".md-thumb")),
			O = angular.element(s[0].querySelector(".md-thumb-text")),
			R = B.parent(),
			L = angular.element(s[0].querySelector(".md-track-container")),
			F = angular.element(s[0].querySelector(".md-track-fill")),
			q = angular.element(s[0].querySelector(".md-track-ticks")),
			G = a.throttle(b, 5e3);
				d.min ? d.$observe("min", u) : u(0), d.max ? d.$observe("max", p) : p(100), d.step ? d.$observe("step", h) : h(1);
				var V = angular.noop;
				d.ngDisabled && (V = n.$parent.$watch(d.ngDisabled, f)), i.register(s, "drag"), s.on("keydown", E).on("$md.pressdown", T).on("$md.pressup", A).on("$md.dragstart", C).on("$md.drag", k).on("$md.dragend", S), setTimeout(m);
				var z = e.throttle(m);
				angular.element(t).on("resize", z), n.$on("$destroy", function() {
					angular.element(t).off("resize", z), V()
				}), c.$render = $, c.$viewChangeListeners.push($), c.$formatters.push(x), c.$formatters.push(M);
				var Y, K, W, X, Z, Q = {};
				b();
				var J = !1,
				et = angular.isDefined(d.mdDiscrete)
		}
		return {
			scope: {},
			require: "?ngModel",
			template: '<div class="md-slider-wrapper">        <div class="md-track-container">          <div class="md-track"></div>          <div class="md-track md-track-fill"></div>          <div class="md-track-ticks"></div>        </div>        <div class="md-thumb-container">          <div class="md-thumb"></div>          <div class="md-focus-thumb"></div>          <div class="md-focus-ring"></div>          <div class="md-sign">            <span class="md-thumb-text"></span>          </div>          <div class="md-disabled-thumb"></div>        </div>      </div>',
			compile: s
		}
	}
	angular.module("material.components.slider", ["material.core"]).directive("mdSlider", e), e.$inject = ["$$rAF", "$window", "$mdAria", "$mdUtil", "$mdConstant", "$mdTheming", "$mdGesture", "$parse"]
}(),
function() {
	"use strict";

	function e(e, t, n, a, o) {
		function r(e) {
			function n(e, t) {
				t.addClass("md-sticky-clone"), t.css("top", h + "px");
				var n = {
						element: e,
						clone: t
				};
				return p.items.push(n), m.parent().prepend(n.clone), u(),
				function() {
					p.items.forEach(function(t, n) {
						t.element[0] === e[0] && (p.items.splice(n, 1), t.clone.remove())
					}), u()
				}
			}

			function o() {
				p.items.forEach(r), p.items = p.items.sort(function(e, t) {
					return e.top < t.top ? -1 : 1
				});
				for (var e, t = m.prop("scrollTop"), n = p.items.length - 1; n >= 0; n--)
					if (t > p.items[n].top) {
						e = p.items[n];
						break
					}
				s(e)
			}

			function r(e) {
				var t = e.element[0];
				for (e.top = 0, e.left = 0; t && t !== m[0];) e.top += t.offsetTop, e.left += t.offsetLeft, t = t.offsetParent;
				e.height = e.element.prop("offsetHeight"), e.clone.css("margin-left", e.left + "px")
			}

			function i() {
				var e = m.prop("scrollTop"),
				t = e > (i.prevScrollTop || 0);
				i.prevScrollTop = e, 0 === e ? s(null) : t && p.next ? p.next.top - e <= 0 ? s(p.next) : p.current && (p.next.top - e <= p.next.height ? c(p.current, p.next.top - p.next.height - e) : c(p.current, null)) : !t && p.current && (e < p.current.top && s(p.prev), p.current && p.next && (e >= p.next.top - p.current.height ? c(p.current, p.next.top - e - p.current.height) : c(p.current, null)))
			}

			function s(e) {
				if (p.current !== e) {
					p.current && (c(p.current, null), d(p.current, null)), e && d(e, "active"), p.current = e;
					var t = p.items.indexOf(e);
					p.next = p.items[t + 1], p.prev = p.items[t - 1], d(p.next, "next"), d(p.prev, "prev")
				}
			}

			function d(e, t) {
				e && e.state !== t && (e.state && (e.clone.attr("sticky-prev-state", e.state), e.element.attr("sticky-prev-state", e.state)), e.clone.attr("sticky-state", t), e.element.attr("sticky-state", t), e.state = t)
			}

			function c(e, n) {
				e && (null === n || void 0 === n ? e.translateY && (e.translateY = null, e.clone.css(t.CSS.TRANSFORM, "")) : (e.translateY = n, e.clone.css(t.CSS.TRANSFORM, "translate3d(" + e.left + "px," + n + "px,0)")))
			}
			var m = e.$element,
			u = a.throttle(o);
			l(m), m.on("$scrollstart", u), m.on("$scroll", i);
			var p, h = m.prop("offsetTop");
			return p = {
					prev: null,
					current: null,
					next: null,
					items: [],
					add: n,
					refreshElements: o
			}
		}

		function i() {
			var t, n = angular.element("<div>");
			e[0].body.appendChild(n[0]);
			for (var a = ["sticky", "-webkit-sticky"], o = 0; o < a.length; ++o)
				if (n.css({
					position: a[o],
					top: 0,
					"z-index": 2
				}), n.css("position") == a[o]) {
					t = a[o];
					break
				}
			return n.remove(), t
		}

		function l(e) {
			function t() {
				+o.now() - r > i ? (n = !1, e.triggerHandler("$scrollend")) : (e.triggerHandler("$scroll"), a(t))
			}
			var n, r, i = 200;
			e.on("scroll touchmove", function() {
				n || (n = !0, a(t), e.triggerHandler("$scrollstart")), e.triggerHandler("$scroll"), r = +o.now()
			})
		}
		var s = i();
		return function(e, t, n) {
			var a = t.controller("mdContent");
			if (a)
				if (s) t.css({
					position: s,
					top: 0,
					"z-index": 2
				});
				else {
					var o = a.$element.data("$$sticky");
					o || (o = r(a), a.$element.data("$$sticky", o));
					var i = o.add(t, n || t.clone());
					e.$on("$destroy", i)
				}
		}
	}
	angular.module("material.components.sticky", ["material.core", "material.components.content"]).factory("$mdSticky", e), e.$inject = ["$document", "$mdConstant", "$compile", "$$rAF", "$mdUtil"]
}(),
function() {
	"use strict";

	function e(e, t, n) {
		return {
			restrict: "E",
			replace: !0,
			transclude: !0,
			template: '<h2 class="md-subheader"><span class="md-subheader-content"></span></h2>',
			compile: function(a, o, r) {
				var i = a[0].outerHTML;
				return function(a, o) {
					function l(e) {
						return angular.element(e[0].querySelector(".md-subheader-content"))
					}
					n(o), r(a, function(e) {
						l(o).append(e)
					}), r(a, function(r) {
						var s = t(angular.element(i))(a);
						n(s), l(s).append(r), e(a, o, s)
					})
				}
			}
		}
	}
	angular.module("material.components.subheader", ["material.core", "material.components.sticky"]).directive("mdSubheader", e), e.$inject = ["$mdSticky", "$compile", "$mdTheming"]
}(),
function() {
	"use strict";
	var e = angular.module("material.components.swipe", []);
	["SwipeLeft", "SwipeRight"].forEach(function(t) {
		var n = "md" + t,
		a = "$md." + t.toLowerCase();
		e.directive(n, ["$parse", function(e) {
			function t(t, o, r) {
				var i = e(r[n]);
				o.on(a, function(e) {
					t.$apply(function() {
						i(t, {
							$event: e
						})
					})
				})
			}
			return {
				restrict: "A",
				link: t
			}
		}])
	})
}(),
function() {
	"use strict";

	function e(e, t, n, a, o, r, i, l) {
		function s(e, t) {
			var a = d.compile(e, t);
			return e.addClass("md-dragging"),
			function(e, t, s, d) {
				function c(n) {
					h(e) || (n.stopPropagation(), t.addClass("md-dragging"), b = {
						width: f.prop("offsetWidth")
					}, t.removeClass("transition"))
				}

				function m(e) {
					if (b) {
						e.stopPropagation(), e.srcEvent && e.srcEvent.preventDefault();
						var t = e.pointer.distanceX / b.width,
						n = d.$viewValue ? 1 + t : t;
						n = Math.max(0, Math.min(1, n)), f.css(o.CSS.TRANSFORM, "translate3d(" + 100 * n + "%,0,0)"), b.translate = n
					}
				}

				function u(e) {
					if (b) {
						e.stopPropagation(), t.removeClass("md-dragging"), f.css(o.CSS.TRANSFORM, "");
						var n = d.$viewValue ? b.translate < .5 : b.translate > .5;
						n && p(!d.$viewValue), b = null
					}
				}

				function p(t) {
					e.$apply(function() {
						d.$setViewValue(t), d.$render()
					})
				}
				d = d || n.fakeNgModel();
				var h = r(s.ngDisabled),
				f = angular.element(t[0].querySelector(".md-thumb-container")),
				g = angular.element(t[0].querySelector(".md-container"));
				i(function() {
					t.removeClass("md-dragging")
				}), a(e, t, s, d), angular.isDefined(s.ngDisabled) && e.$watch(h, function(e) {
					t.attr("tabindex", e ? -1 : 0)
				}), l.register(g, "drag"), g.on("$md.dragstart", c).on("$md.drag", m).on("$md.dragend", u);
				var b
			}
		}
		var d = e[0];
		return {
			restrict: "E",
			transclude: !0,
			template: '<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',
			require: "?ngModel",
			compile: s
		}
	}
	angular.module("material.components.switch", ["material.core", "material.components.checkbox"]).directive("mdSwitch", e), e.$inject = ["mdCheckboxDirective", "$mdTheming", "$mdUtil", "$document", "$mdConstant", "$parse", "$$rAF", "$mdGesture"]
}(),
function() {
	"use strict";
	angular.module("material.components.tabs", ["material.core", "material.components.icon"])
}(),
function() {
	"use strict";

	function e(e, t, n, a) {
		return {
			restrict: "E",
			replace: !0,
			scope: {
				fid: "@?mdFid",
				label: "@?",
				value: "=ngModel"
			},
			compile: function(o, r) {
				return a.warn("<md-text-float> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"), angular.isUndefined(r.mdFid) && (r.mdFid = t.nextUid()), {
					pre: function(e, t, a) {
						var o = n(a.ngDisabled);
						e.isDisabled = function() {
							return o(e.$parent)
						}, e.inputType = a.type || "text"
					},
					post: e
				}
			},
			template: '<md-input-group tabindex="-1"> <label for="{{fid}}" >{{label}}</label> <md-input id="{{fid}}" ng-disabled="isDisabled()" ng-model="value" type="{{inputType}}"></md-input></md-input-group>'
		}
	}

	function t(e) {
		return {
			restrict: "CE",
			controller: ["$element", function(t) {
				e.warn("<md-input-group> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"), this.setFocused = function(e) {
					t.toggleClass("md-input-focused", !!e)
				}, this.setHasValue = function(e) {
					t.toggleClass("md-input-has-value", e)
				}
			}]
		}
	}

	function n(e, t) {
		return {
			restrict: "E",
			replace: !0,
			template: "<input >",
			require: ["^?mdInputGroup", "?ngModel"],
			link: function(e, n, a, o) {
				function r(e) {
					return e = angular.isUndefined(e) ? n.val() : e, angular.isDefined(e) && null !== e && "" !== e.toString().trim()
				}
				if (o[0]) {
					t.warn("<md-input> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer");
					var i = o[0],
					l = o[1];
					e.$watch(e.isDisabled, function(e) {
						n.attr("aria-disabled", !!e), n.attr("tabindex", !!e)
					}), n.attr("type", a.type || n.parent().attr("type") || "text"), l && l.$formatters.push(function(e) {
						return i.setHasValue(r(e)), e
					}), n.on("input", function() {
						i.setHasValue(r())
					}).on("focus", function() {
						i.setFocused(!0)
					}).on("blur", function() {
						i.setFocused(!1), i.setHasValue(r())
					}), e.$on("$destroy", function() {
						i.setFocused(!1), i.setHasValue(!1)
					})
				}
			}
		}
	}
	angular.module("material.components.textField", ["material.core"]).directive("mdInputGroup", t).directive("mdInput", n).directive("mdTextFloat", e), e.$inject = ["$mdTheming", "$mdUtil", "$parse", "$log"], t.$inject = ["$log"], n.$inject = ["$mdUtil", "$log"]
}(),
function() {
	"use strict";

	function e() {
		return {
			restrict: "E"
		}
	}

	function t(e) {
		function t(e, t, a) {
			function o(o, r, l) {
				return n = l.content, r.addClass(l.position.split(" ").map(function(e) {
					return "md-" + e
				}).join(" ")), l.parent.addClass(i(l.position)), l.onSwipe = function(t) {
					r.addClass("md-" + t.type.replace("$md.", "")), e(a.cancel)
				}, r.on("$md.swipeleft $md.swiperight", l.onSwipe), t.enter(r, l.parent)
			}

			function r(e, n, a) {
				return n.off("$md.swipeleft $md.swiperight", a.onSwipe), a.parent.removeClass(i(a.position)), t.leave(n)
			}

			function i(e) {
				return "md-toast-open-" + (e.indexOf("top") > -1 ? "top" : "bottom")
			}
			return {
				onShow: o,
				onRemove: r,
				position: "bottom left",
				themable: !0,
				hideDelay: 3e3
			}
		}
		var n, a = e("$mdToast").setDefaults({
			methods: ["position", "hideDelay", "capsule"],
			options: t
		}).addPreset("simple", {
			argOption: "content",
			methods: ["content", "action", "highlightAction", "theme"],
			options: ["$mdToast", "$mdTheming", function(e, t) {
				var a = {
						template: ['<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">', "<span flex>{{ toast.content }}</span>", '<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">', "{{ toast.action }}", "</md-button>", "</md-toast>"].join(""),
						controller: ["$scope", function(t) {
							var a = this;
							t.$watch(function() {
								return n
							}, function() {
								a.content = n
							}), this.resolve = function() {
								e.hide()
							}
						}],
						theme: t.defaultTheme(),
						controllerAs: "toast",
						bindToController: !0
				};
				return a
			}]
		}).addMethod("updateContent", function(e) {
			n = e
		});
		return t.$inject = ["$timeout", "$animate", "$mdToast"], a
	}
	angular.module("material.components.toast", ["material.core", "material.components.button"]).directive("mdToast", e).provider("$mdToast", t), t.$inject = ["$$interimElementProvider"]
}(),
function() {
	"use strict";

	function e(e, t, n, a) {
		return {
			restrict: "E",
			controller: angular.noop,
			link: function(o, r, i) {
				function l() {
					function a(t, n) {
						r.parent()[0] === n.parent()[0] && (c && c.off("scroll", h), n.on("scroll", h), n.attr("scroll-shrink", "true"), c = n, e(l))
					}

					function l() {
						d = r.prop("offsetHeight"), c.css("margin-top", -d * p + "px"), s()
					}

					function s(e) {
						var n = e ? e.target.scrollTop : u;
						f(), m = Math.min(d / p, Math.max(0, m + n - u)), r.css(t.CSS.TRANSFORM, "translate3d(0," + -m * p + "px,0)"), c.css(t.CSS.TRANSFORM, "translate3d(0," + (d - m) * p + "px,0)"), u = n
					}
					var d, c, m = 0,
					u = 0,
					p = i.mdShrinkSpeedFactor || .5,
					h = e.throttle(s),
					f = n.debounce(l, 5e3);
					o.$on("$mdContentLoaded", a)
				}
				a(r), angular.isDefined(i.mdScrollShrink) && l()
			}
		}
	}
	angular.module("material.components.toolbar", ["material.core", "material.components.content"]).directive("mdToolbar", e), e.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming"]
}(),
function() {
	"use strict";

	function e(e, t, n, a, o, r, i, l, s) {
		function d(d, u, p) {
			function h(t) {
				h.value = !!t, h.queued || (t ? (h.queued = !0, e(function() {
					d.visible = h.value, h.queued = !1
				}, d.delay)) : e(function() {
					d.visible = !1
				}))
			}

			function f() {
				v.attr("aria-describedby", u.attr("id")), M.append(u), b(), l.addClass(u, "md-show"), l.addClass(E, "md-show"), l.addClass(y, "md-show")
			}

			function g() {
				v.removeAttr("aria-describedby"), s.all([l.removeClass(y, "md-show"), l.removeClass(E, "md-show"), l.removeClass(u, "md-show")]).then(function() {
					d.visible || u.detach()
				})
			}

			function b() {
				function e() {
					var e = "left" === $ || "right" === $ ? 2 * Math.sqrt(Math.pow(a.width, 2) + Math.pow(a.height / 2, 2)) : 2 * Math.sqrt(Math.pow(a.width / 2, 2) + Math.pow(a.height, 2)),
							t = "left" === $ ? {
						left: 100,
						top: 50
					} : "right" === $ ? {
						left: 0,
						top: 50
					} : "top" === $ ? {
						left: 50,
						top: 100
					} : {
						left: 50,
						top: 0
					};
					E.css({
						width: e + "px",
						height: e + "px",
						left: t.left + "%",
						top: t.top + "%"
					})
				}

				function t(e) {
					var t = {
							left: e.left,
							top: e.top
					};
					return t.left = Math.min(t.left, M.prop("scrollWidth") - a.width - m), t.left = Math.max(t.left, m), t.top = Math.min(t.top, M.prop("scrollHeight") - a.height - m), t.top = Math.max(t.top, m), t
				}

				function n(e) {
					return "left" === e ? {
						left: r.left - a.width - m,
						top: r.top + r.height / 2 - a.height / 2
					} : "right" === e ? {
						left: r.left + r.width + m,
						top: r.top + r.height / 2 - a.height / 2
					} : "top" === e ? {
						left: r.left + r.width / 2 - a.width / 2,
						top: r.top - a.height - m
					} : {
						left: r.left + r.width / 2 - a.width / 2,
						top: r.top + r.height + m
					}
				}
				var a = o.offsetRect(u, M),
				r = o.offsetRect(v, M),
				i = n($);
				$ ? i = t(i) : i.top > M.prop("scrollHeight") - a.height - m && (i = t(n("top"))), u.css({
					top: i.top + "px",
					left: i.left + "px"
				}), e()
			}
			r(u);
			for (var v = u.parent(), E = angular.element(u[0].getElementsByClassName("md-background")[0]), y = angular.element(u[0].getElementsByClassName("md-content")[0]), $ = p.mdDirection;
			"none" == t.getComputedStyle(v[0])["pointer-events"];) v = v.parent();
			for (var x = u.parent()[0]; x && x !== i[0] && x !== document.body && (!x.tagName || "md-content" != x.tagName.toLowerCase());) x = x.parentNode;
			var M = angular.element(x || document.body);
			angular.isDefined(p.mdDelay) || (d.delay = c), u.detach(), u.attr("role", "tooltip"), u.attr("id", p.id || "tooltip_" + o.nextUid()), v.on("focus mouseenter touchstart", function() {
				h(!0)
			}), v.on("blur mouseleave touchend touchcancel", function() {
				a[0].activeElement !== v[0] && h(!1)
			}), d.$watch("visible", function(e) {
				e ? f() : g()
			});
			var w = n.throttle(function() {
				d.visible && b()
			});
			angular.element(t).on("resize", w), d.$on("$destroy", function() {
				d.visible = !1, u.remove(), angular.element(t).off("resize", w)
			})
		}
		var c = 0,
		m = 8;
		return {
			restrict: "E",
			transclude: !0,
			template: '<div class="md-background"></div><div class="md-content" ng-transclude></div>',
			scope: {
				visible: "=?mdVisible",
				delay: "=?mdDelay"
			},
			link: d
		}
	}
	angular.module("material.components.tooltip", ["material.core"]).directive("mdTooltip", e), e.$inject = ["$timeout", "$window", "$$rAF", "$document", "$mdUtil", "$mdTheming", "$rootElement", "$animate", "$q"]
}(),
function() {
	"use strict";
	angular.module("material.components.whiteframe", [])
}(),
function() {
	"use strict";

	function e(e, t, n, a, o) {
		function r() {
			s(), i()
		}

		function i() {
			var e = angular.element(w.ul),
			t = angular.element(w.input),
			n = e.attr("id") || "ul_" + a.nextUid();
			e.attr("id", n), t.attr("aria-owns", n)
		}

		function l(e) {
			if (e) {
				var t = {};
				return $.itemName && (t[$.itemName] = e), t
			}
		}

		function s() {
			var t = parseInt(e.delay, 10) || 0;
			e.$watch("searchText", t ? a.debounce(d, t) : d), e.$watch("selectedItem", function(t, n) {
				e.itemChange && t !== n && e.itemChange(l(t))
			})
		}

		function d(t, n) {
			if ($.index = -1, !t || t.length < Math.max(parseInt(e.minLength, 10), 1)) return $.loading = !1, $.matches = [], $.hidden = g(), m(), void 0;
			var a = t.toLowerCase();
			T && T.cancel && (T.cancel(), T = null), !e.noCache && A[a] ? ($.matches = A[a], m()) : $.fetch(t), $.hidden = g(), e.textChange && t !== n && e.textChange(l(e.selectedItem))
		}

		function c(t) {
			function a(n) {
				A[r] = n, t === e.searchText && (T = null, $.loading = !1, $.matches = n, $.hidden = g(), m())
			}
			var o = e.$parent.$eval(M),
			r = t.toLowerCase();
			angular.isArray(o) ? a(o) : ($.loading = !0, T = n.when(o).then(a))
		}

		function m() {
			if (!$.hidden) switch ($.matches.length) {
			case 0:
				return $.messages.splice(0);
			case 1:
				return $.messages.push({
					display: "There is 1 match available."
				});
			default:
				return $.messages.push({
					display: "There are " + $.matches.length + " matches available."
				})
			}
		}

		function u() {
			$.messages.push({
				display: b()
			})
		}

		function p() {
			$.hidden = !0
		}

		function h(e) {
			switch (e.keyCode) {
			case o.KEY_CODE.DOWN_ARROW:
				if ($.loading) return;
				e.preventDefault(), $.index = Math.min($.index + 1, $.matches.length - 1), y(), u();
				break;
			case o.KEY_CODE.UP_ARROW:
				if ($.loading) return;
				e.preventDefault(), $.index = Math.max(0, $.index - 1), y(), u();
				break;
			case o.KEY_CODE.ENTER:
				if ($.loading || $.index < 0) return;
				e.preventDefault(), E($.index);
				break;
			case o.KEY_CODE.ESCAPE:
				$.matches = [], $.hidden = !0, $.index = -1;
				break;
			case o.KEY_CODE.TAB:
			}
		}

		function f() {
			e.searchText = "", E(-1), w.input.focus()
		}

		function g() {
			return 1 === $.matches.length && e.searchText === v($.matches[0])
		}

		function b() {
			return v($.matches[$.index])
		}

		function v(t) {
			return t && e.itemText ? e.itemText(l(t)) : t
		}

		function E(t) {
			e.selectedItem = $.matches[t], e.searchText = v(e.selectedItem) || e.searchText, $.hidden = !0, $.index = -1, $.matches = []
		}

		function y() {
			var e = 41 * $.index,
			t = e + 41,
			n = 225.5;
			e < w.ul.scrollTop ? w.ul.scrollTop = e : t > w.ul.scrollTop + n && (w.ul.scrollTop = t - n)
		}
		var $ = this,
		x = e.itemsExpr.split(/ in /i),
		M = x[1],
		w = {
			main: t[0],
			ul: t[0].getElementsByTagName("ul")[0],
			input: t[0].getElementsByTagName("input")[0]
		},
		T = null,
		A = {};
		return $.scope = e, $.parent = e.$parent, $.itemName = x[0], $.matches = [], $.loading = !1, $.hidden = !0, $.index = 0, $.keydown = h, $.blur = p, $.clear = f, $.select = E, $.getCurrentDisplayValue = b, $.fetch = a.debounce(c), $.messages = [], r()
	}
	angular.module("material.components.autocomplete").controller("MdAutocompleteCtrl", e), e.$inject = ["$scope", "$element", "$q", "$mdUtil", "$mdConstant"]
}(),
function() {
	"use strict";

	function e() {
		return {
			template: '        <md-autocomplete-wrap role="listbox">          <input type="text"              ng-disabled="isDisabled"              ng-model="searchText"              ng-keydown="$mdAutocompleteCtrl.keydown($event)"              ng-blur="$mdAutocompleteCtrl.blur()"              placeholder="{{placeholder}}"              aria-label="{{placeholder}}"              aria-autocomplete="list"              aria-haspopup="true"              aria-activedescendant=""              aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>          <button              type="button"              ng-if="searchText"              ng-click="$mdAutocompleteCtrl.clear()">            <md-icon md-svg-icon="cancel"></md-icon>            <span class="visually-hidden">Clear</span>          </button>          <md-progress-linear              ng-if="$mdAutocompleteCtrl.loading"              md-mode="indeterminate"></md-progress-linear>        </md-autocomplete-wrap>        <ul role="presentation">          <li ng-repeat="(index, item) in $mdAutocompleteCtrl.matches"              ng-class="{ selected: index === $mdAutocompleteCtrl.index }"              ng-show="searchText && !$mdAutocompleteCtrl.hidden"              ng-click="$mdAutocompleteCtrl.select(index)"              ng-transclude              md-autocomplete-list-item="$mdAutocompleteCtrl.itemName">          </li>        </ul>        <aria-status            class="visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages">{{message.display}}</p>        </aria-status>',
			transclude: !0,
			controller: "MdAutocompleteCtrl",
			controllerAs: "$mdAutocompleteCtrl",
			scope: {
				searchText: "=mdSearchText",
				selectedItem: "=mdSelectedItem",
				itemsExpr: "@mdItems",
				itemText: "&mdItemText",
				placeholder: "@placeholder",
				noCache: "=mdNoCache",
				itemChange: "&mdSelectedItemChange",
				textChange: "&mdSearchTextChange",
				isDisabled: "=ngDisabled",
				minLength: "=mdMinLength",
				delay: "=mdDelay"
			}
		}
	}
	angular.module("material.components.autocomplete").directive("mdAutocomplete", e)
}(),
function() {
	"use strict";

	function e(e, t, n) {
		function a(e) {
			return e ? e.replace(/[\*\[\]\(\)\{\}\\\^\$]/g, "\\$&") : e
		}
		var o = t.attr("md-highlight-text"),
		r = n(t.text())(e),
		i = e.$watch(o, function(e) {
			var n = new RegExp("^" + a(e), "i"),
			o = r.replace(n, '<span class="highlight">$&</span>');
			t.html(o)
		});
		t.on("$destroy", function() {
			i()
		})
	}
	angular.module("material.components.autocomplete").controller("MdHighlightCtrl", e), e.$inject = ["$scope", "$element", "$interpolate"]
}(),
function() {
	"use strict";

	function e() {
		return {
			terminal: !0,
			scope: !1,
			controller: "MdHighlightCtrl"
		}
	}
	angular.module("material.components.autocomplete").directive("mdHighlightText", e)
}(),
function() {
	"use strict";

	function e(e, t) {
		function n(n, a, o, r) {
			var i = r.parent.$new(!1, r.parent),
			l = r.scope.$eval(o.mdAutocompleteListItem);
			i[l] = n.item, e(a.contents())(i), a.attr({
				role: "option",
				id: "item_" + t.nextUid()
			})
		}
		return {
			require: "^?mdAutocomplete",
			terminal: !0,
			link: n,
			scope: !1
		}
	}
	angular.module("material.components.autocomplete").directive("mdAutocompleteListItem", e), e.$inject = ["$compile", "$mdUtil"]
}(),
function() {
	"use strict";

	function e(e) {
		function t(t, a, o, r) {
			function i() {
				var e = s.getSelectedItem(),
				o = !e || s.count() < 2 || l;
				if (a.css("display", o ? "none" : "block"), !o && t.pagination && t.pagination.tabData) {
					var r = s.getSelectedIndex(),
					i = t.pagination.tabData.tabs[r] || {
						left: 0,
						right: 0,
						width: 0
					},
					d = a.parent().prop("offsetWidth") - i.right,
					c = ["md-transition-left", "md-transition-right", "md-no-transition"],
					m = n > r ? 0 : r > n ? 1 : 2;
					a.removeClass(c.join(" ")).addClass(c[m]).css({
						left: i.left + "px",
						right: d + "px"
					}), n = r
				}
			}
			var l = !!r[0],
			s = r[1],
			d = e.throttle(i);
			s.inkBarElement = a, t.$on("$mdTabsPaginationChanged", d)
		}
		var n = 0;
		return {
			restrict: "E",
			require: ["^?mdNoBar", "^mdTabs"],
			link: t
		}
	}
	angular.module("material.components.tabs").directive("mdTabsInkBar", e), e.$inject = ["$$rAF"]
}(),
function() {
	"use strict";

	function e(e, t, n, a, o, r) {
		function i(i, s, d, c) {
			function m(e, t) {
				if (e) {
					var n = b(e);
					M.active && n !== M.page ? (t && t.element.blur(), v(n).then(function() {
						x = !1, e.element.focus()
					})) : e.element.focus()
				}
			}

			function u(e) {
				var t = M.tabData,
				n = Math.max(0, Math.min(t.pages.length - 1, M.page + e)),
				a = t.pages[n][e > 0 ? "firstTabIndex" : "lastTabIndex"],
				o = c.itemAt(a);
				x = !0, m(o)
			}

			function p() {
				function e() {
					$.css("width", "9999px"), angular.forEach(r.tabs, function(e) {
						angular.element(e.element).css("margin-left", e.filler + "px")
					}), v(b(c.getSelectedItem()))
				}

				function t() {
					h(0), $.css("width", ""), a.css("width", ""), a.css("margin-left", ""), M.page = null, M.active = !1
				}

				function n() {
					return d || i.$watch(function() {
						o(function() {
							s[0].offsetParent && (angular.isFunction(d) && d(), y(), d = null)
						}, 0, !1)
					})
				}
				if (s.prop("offsetParent")) {
					var a = s.find("md-tab");
					t();
					var r = M.tabData = g(),
					l = M.active = r.pages.length > 1;
					l && e(), i.$evalAsync(function() {
						i.$broadcast("$mdTabsPaginationChanged")
					})
				} else var d = n()
			}

			function h(t) {
				function n(t) {
					t.target === $[0] && ($.off(e.CSS.TRANSITIONEND, n), o.resolve())
				}
				if (c.pagingOffset === t) return a.when();
				var o = a.defer();
				return c.$$pagingOffset = t, $.css(e.CSS.TRANSFORM, "translate3d(" + t + "px,0,0)"), $.on(e.CSS.TRANSITIONEND, n), o.promise
			}

			function f() {
				switch (i.stretchTabs) {
				case "never":
					return !1;
				case "always":
					return !0;
				default:
					return r("sm")
				}
			}

			function g(e) {
				function t() {
					var e = 1 === m.length ? a : o,
							t = Math.min(Math.floor(e / d), E.length),
							n = Math.floor(e / t);
					return r.css("width", n + "px"), g(!0)
				}
				var n, a = s.parent().prop("offsetWidth"),
				o = a - l - 1,
				r = angular.element(E),
				i = 0,
				d = 0,
				c = [],
				m = [];
				return r.css("max-width", ""), angular.forEach(E, function(e, t) {
					var r = Math.min(o, e.offsetWidth),
					l = {
						element: e,
						left: i,
						width: r,
						right: i + r,
						filler: 0
					};
					l.page = Math.ceil(l.right / (1 === m.length && t === E.length - 1 ? a : o)) - 1, l.page >= m.length ? (l.filler = o * l.page - l.left, l.right += l.filler, l.left += l.filler, n = {
							left: l.left,
							firstTabIndex: t,
							lastTabIndex: t,
							tabs: [l]
					}, m.push(n)) : (n.lastTabIndex = t, n.tabs.push(l)), i = l.right, d = Math.max(d, r), c.push(l)
				}), r.css("max-width", o + "px"), !e && f() ? t() : {
					width: i,
					max: d,
					tabs: c,
					pages: m,
					tabElements: E
				}
			}

			function b(e) {
				var t = c.indexOf(e);
				if (-1 === t) return 0;
				var n = M.tabData;
				return n ? n.tabs[t].page : 0
			}

			function v(e) {
				if (e !== M.page) {
					var t = M.tabData.pages.length - 1;
					return 0 > e && (e = 0), e > t && (e = t), M.hasPrev = e > 0, M.hasNext = t > e, M.page = e, i.$broadcast("$mdTabsPaginationChanged"), h(-M.tabData.pages[e].left)
				}
			}
			var E = s[0].getElementsByTagName("md-tab"),
			y = n.throttle(p),
			$ = s.children(),
			x = !1,
			M = i.pagination = {
				page: -1,
				active: !1,
				clickNext: function() {
					x || u(1)
				},
				clickPrevious: function() {
					x || u(-1)
				}
			};
			i.$on("$mdTabsChanged", y), angular.element(t).on("resize", y), i.$on("$destroy", function() {
				angular.element(t).off("resize", y)
			}), i.$watch(function() {
				return c.tabToFocus
			}, m)
		}
		var l = 64;
		return {
			restrict: "A",
			require: "^mdTabs",
			link: i
		}
	}
	angular.module("material.components.tabs").directive("mdTabsPagination", e), e.$inject = ["$mdConstant", "$window", "$$rAF", "$$q", "$timeout", "$mdMedia"]
}(),
function() {
	"use strict";

	function e(e, t, n, a, o, r, i, l) {
		function s() {
			return b(e.$parent)
		}

		function d(t, n) {
			f.content.length && (f.contentContainer.append(f.content), f.contentScope = e.$parent.$new(), t.append(f.contentContainer), a(f.contentContainer)(f.contentScope), n === !0 && l(function() {
				r.disconnectScope(f.contentScope)
			}, 0, !1))
		}

		function c() {
			o.leave(f.contentContainer).then(function() {
				f.contentScope && f.contentScope.$destroy(), f.contentScope = null
			})
		}

		function m(e) {
			f.contentContainer[e ? "addClass" : "removeClass"]("md-transition-rtl")
		}

		function u(n) {
			r.reconnectScope(f.contentScope), t.addClass("active").attr({
				"aria-selected": !0,
				tabIndex: 0
			}).on("$md.swipeleft $md.swiperight", h), m(n), o.removeClass(f.contentContainer, "ng-hide"), e.onSelect()
		}

		function p(n) {
			r.disconnectScope(f.contentScope), t.removeClass("active").attr({
				"aria-selected": !1,
				tabIndex: -1
			}).off("$md.swipeleft $md.swiperight", h), m(n), o.addClass(f.contentContainer, "ng-hide"), e.onDeselect()
		}

		function h(t) {
			e.$apply(function() {
				/left/.test(t.type) ? g.select(g.next()) : g.select(g.previous())
			})
		}
		var f = this,
		g = t.controller("mdTabs");
		f.contentContainer = angular.element('<div class="md-tab-content ng-hide">'), f.element = t, f.isDisabled = s, f.onAdd = d, f.onRemove = c, f.onSelect = u, f.onDeselect = p;
		var b = i(n.ngDisabled)
	}
	angular.module("material.components.tabs").controller("$mdTab", e), e.$inject = ["$scope", "$element", "$attrs", "$compile", "$animate", "$mdUtil", "$parse", "$timeout"]
}(),
function() {
	"use strict";

	function e(e, t, n, a, o) {
		function r(r, i) {
			var l = r.find("md-tab-label");
			l.length ? l.remove() : l = angular.isDefined(i.label) ? angular.element("<md-tab-label>").html(i.label) : angular.element("<md-tab-label>").append(r.contents().remove());
			var s = r.contents().remove();
			return function(r, i, d, c) {
				function m() {
					var e = l.clone();
					i.append(e), t(e)(r.$parent), v.content = s.clone()
				}

				function u() {
					r.$apply(function() {
						E.select(v), E.focus(v)
					})
				}

				function p(e) {
					e.keyCode == a.KEY_CODE.SPACE || e.keyCode == a.KEY_CODE.ENTER ? (i.triggerHandler("click"), e.preventDefault()) : e.keyCode === a.KEY_CODE.LEFT_ARROW ? r.$evalAsync(function() {
						E.focus(E.previous(v))
					}) : e.keyCode === a.KEY_CODE.RIGHT_ARROW && r.$evalAsync(function() {
						E.focus(E.next(v))
					})
				}

				function h() {
					r.$watch("$parent.$index", function(e) {
						E.move(v, e)
					})
				}

				function f() {
					function e(e) {
						var t = E.getSelectedItem() === v;
						e && !t ? E.select(v) : !e && t && E.deselect(v)
					}
					var t = r.$parent.$watch("!!(" + d.mdActive + ")", e);
					r.$on("$destroy", t)
				}

				function g() {
					function e(e) {
						i.attr("aria-disabled", e);
						var t = E.getSelectedItem() === v;
						t && e && E.select(E.next() || E.previous())
					}
					r.$watch(v.isDisabled, e)
				}

				function b() {
					var e = d.id || "tab_" + n.nextUid();
					if (i.attr({
						id: e,
						role: "tab",
						tabIndex: -1
					}), s.length) {
						var t = "content_" + e;
						i.attr("aria-controls") || i.attr("aria-controls", t), v.contentContainer.attr({
							id: t,
							role: "tabpanel",
							"aria-labelledby": e
						})
					}
				}
				var v = c[0],
				E = c[1];
				o(i.addClass.bind(i, "md-tab-themed"), 0, !1), r.$watch(function() {
					return d.label
				}, function() {
					o(function() {
						E.scope.$broadcast("$mdTabsChanged")
					}, 0, !1)
				}), m(), b(), e.attachTabBehavior(r, i, {
					colorElement: E.inkBarElement
				}), E.add(v), r.$on("$destroy", function() {
					E.remove(v)
				}), i.on("$destroy", function() {
					o(function() {
						E.scope.$broadcast("$mdTabsChanged")
					}, 0, !1)
				}), angular.isDefined(d.ngClick) || i.on("click", u), i.on("keydown", p), angular.isNumber(r.$parent.$index) && h(), angular.isDefined(d.mdActive) && f(), g()
			}
		}
		return {
			restrict: "E",
			require: ["mdTab", "^mdTabs"],
			controller: "$mdTab",
			scope: {
				onSelect: "&mdOnSelect",
				onDeselect: "&mdOnDeselect",
				label: "@"
			},
			compile: r
		}
	}
	angular.module("material.components.tabs").directive("mdTab", e), e.$inject = ["$mdInkRipple", "$compile", "$mdUtil", "$mdConstant", "$timeout"]
}(),
function() {
	"use strict";

	function e(e, t, n) {
		function a() {
			return b(e.selectedIndex)
		}

		function o() {
			return e.selectedIndex
		}

		function r(t, n) {
			h.add(t, n), angular.isDefined(t.element.attr("md-active")) || -1 !== e.selectedIndex && angular.isNumber(e.selectedIndex) && e.selectedIndex !== f.indexOf(t) ? t.onAdd(f.contentArea, !0) : (t.onAdd(f.contentArea, !1), f.select(t)), e.$broadcast("$mdTabsChanged")
		}

		function i(t, n) {
			if (h.contains(t) && !n) {
				var o = a() === t,
				r = u() || m();
				c(t), h.remove(t), t.onRemove(), e.$broadcast("$mdTabsChanged"), o && s(r)
			}
		}

		function l(t, n) {
			var o = a() === t;
			h.remove(t), h.add(t, n), o && s(t), e.$broadcast("$mdTabsChanged")
		}

		function s(t, n) {
			!t || t.isSelected || t.isDisabled() || h.contains(t) && (angular.isDefined(n) || (n = g(t) < e.selectedIndex), c(a(), n), e.selectedIndex = g(t), t.isSelected = !0, t.onSelect(n), e.$broadcast("$mdTabsChanged"))
		}

		function d(e) {
			f.tabToFocus = e
		}

		function c(t, n) {
			t && t.isSelected && h.contains(t) && (e.selectedIndex = -1, t.isSelected = !1, t.onDeselect(n))
		}

		function m(e, t) {
			return h.next(e || a(), t || p)
		}

		function u(e, t) {
			return h.previous(e || a(), t || p)
		}

		function p(e) {
			return e && !e.isDisabled()
		}
		var h = n.iterator([], !1),
		f = this;
		f.$element = t, f.scope = e;
		var g = (f.contentArea = angular.element(t[0].querySelector(".md-tabs-content")), f.inRange = h.inRange, f.indexOf = h.indexOf),
		b = f.itemAt = h.itemAt;
		f.count = h.count, f.getSelectedItem = a, f.getSelectedIndex = o, f.add = r, f.remove = i, f.move = l, f.select = s, f.focus = d, f.deselect = c, f.next = m, f.previous = u, e.$on("$destroy", function() {
			c(a());
			for (var e = h.count() - 1; e >= 0; e--) i(h[e], !0)
		})
	}
	angular.module("material.components.tabs").controller("$mdTabs", e), e.$inject = ["$scope", "$element", "$mdUtil", "$timeout"]
}(),
function() {
	"use strict";

	function e(e) {
		function t(t, n, a, o, r) {
			function i() {
				n.attr("role", "tablist")
			}

			function l() {
				t.$watch("selectedIndex", function(e, t) {
					if (t != e) {
						var n = t > e;
						if (o.deselect(o.itemAt(t), n), o.inRange(e)) {
							for (var a = o.itemAt(e); a && a.isDisabled();) a = e > t ? o.next(a) : o.previous(a);
							o.select(a, n)
						}
					}
				})
			}
			t.stretchTabs = a.hasOwnProperty("mdStretchTabs") ? a.mdStretchTabs || "always" : "auto", e(n), i(), l(), r(t.$parent, function(e) {
				angular.element(n[0].querySelector(".md-header-items")).append(e)
			})
		}
		return {
			restrict: "E",
			controller: "$mdTabs",
			require: "mdTabs",
			transclude: !0,
			scope: {
				selectedIndex: "=?mdSelected"
			},
			template: '<section class="md-header" ng-class="{\'md-paginating\': pagination.active}"><button class="md-paginator md-prev" ng-if="pagination.active && pagination.hasPrev" ng-click="pagination.clickPrevious()" aria-hidden="true"><md-icon md-svg-icon="tabs-arrow"></md-icon></button><div class="md-header-items-container" md-tabs-pagination><div class="md-header-items"><md-tabs-ink-bar></md-tabs-ink-bar></div></div><button class="md-paginator md-next" ng-if="pagination.active && pagination.hasNext" ng-click="pagination.clickNext()" aria-hidden="true"><md-icon md-svg-icon="tabs-arrow"></md-icon></button></section><section class="md-tabs-content"></section>',
			link: t
		}
	}
	angular.module("material.components.tabs").directive("mdTabs", e), e.$inject = ["$mdTheming"]
}(),
function() {
	angular.module("material.core").constant("$MD_THEME_CSS", "md-autocomplete {  background: '{{background-50}}'; }  md-autocomplete button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete button:after {    background: '{{background-600-0.3}}'; }  md-autocomplete ul {    background: '{{background-50}}'; }    md-autocomplete ul li {      border-top: 1px solid '{{background-400}}';      color: '{{background-900}}'; }      md-autocomplete ul li .highlight {        color: '{{background-600}}'; }      md-autocomplete ul li:hover, md-autocomplete ul li.selected {        background: '{{background-200}}'; }md-backdrop.md-opaque.md-THEME_NAME-theme {  background-color: '{{foreground-4-0.5}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }md-toolbar .md-button.md-THEME_NAME-theme.md-fab {  background-color: white; }.md-button.md-THEME_NAME-theme {  border-radius: 3px; }  .md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):focus {    background-color: '{{background-500-0.2}}'; }  .md-button.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {      color: '{{primary-contrast}}';      background-color: '{{primary-color}}'; }      .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):focus {        background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):focus {      background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-raised {    color: '{{background-contrast}}';    background-color: '{{background-50}}'; }    .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):focus {      background-color: '{{background-200}}'; }  .md-button.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {      color: '{{warn-contrast}}';      background-color: '{{warn-color}}'; }      .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):focus {        background-color: '{{warn-700}}'; }  .md-button.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {      color: '{{accent-contrast}}';      background-color: '{{accent-color}}'; }      .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):focus {        background-color: '{{accent-700}}'; }  .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {    color: '{{foreground-3}}';    background-color: transparent;    cursor: not-allowed; }md-card.md-THEME_NAME-theme {  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-content.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-3}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }md-icon.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }md-icon.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }md-icon.md-THEME_NAME-theme.md-danger {  color: '{{danger-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled], [disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-4}}' 0%, '{{foreground-4}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-4}}' 100%); }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {  border-color: '{{foreground-3}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {  border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme:focus:not(:empty) {  border-color: '{{foreground-1}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label.md-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-label {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-label {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-label {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-label.md-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme .md-select-label {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-label.md-placeholder {    color: '{{foreground-2}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  background-color: '{{primary-50}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    background-color: '{{primary-100}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    background-color: '{{accent-50}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      background-color: '{{accent-100}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  border-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-hue-3}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-switch.md-THEME_NAME-theme:focus .md-label:not(:empty) {  border-color: '{{foreground-1}}';  border-style: dotted; }md-tabs.md-THEME_NAME-theme .md-header {  background-color: transparent; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent .md-header {  background-color: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]) {  color: '{{accent-100}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]).active {    color: '{{accent-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-primary .md-header {  background-color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab:not([disabled]) {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab:not([disabled]).active {    color: '{{primary-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab:focus {    color: '{{primary-contrast}}';    background-color: '{{primary-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab.active {    color: '{{primary-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab .md-ripple-container {    color: '{{primary-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-warn .md-header {  background-color: '{{warn-color}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]) {  color: '{{warn-100}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]).active {    color: '{{warn-contrast}}'; }md-tabs.md-THEME_NAME-theme md-tabs-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme md-tab:focus {    color: '{{foreground-1}}'; }  md-tabs.md-THEME_NAME-theme md-tab.active {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  text-shadow: '{{foreground-shadow}}'; }  md-input-group.md-THEME_NAME-theme input::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme input::-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-ms-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme label {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused input, md-input-group.md-THEME_NAME-theme.md-input-focused textarea {  border-color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused label {  color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent input, md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent textarea {  border-color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-has-value:not(.md-input-focused) label {  color: '{{foreground-2}}'; }md-input-group.md-THEME_NAME-theme .md-input[disabled] {  border-bottom-color: '{{foreground-4}}';  color: '{{foreground-3}}'; }md-toast.md-THEME_NAME-theme {  background-color: '{{foreground-1}}';  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-toolbar.md-THEME_NAME-theme {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }")
}();
var DocsApp = angular.module("docsApp", ["ngMaterial", "ngRoute", "angularytics", "ngMessages","ngMdIcons"])
.config(["AngularyticsProvider", function(e) {
	e.setEventHandlers(["Console", "GoogleUniversal"])
}]).run(["Angularytics", "$rootScope", "$timeout", function(e) {
	e.init()
}])


.directive("menuLink", function() {
	return {
		scope: {
			section: "="
		},
		templateUrl: "partials/menu-link.tmpl.html",
		link: function(e, t) {
			var n = t.parent().controller();
			e.isSelected = function() {
				return n.isSelected(e.section)
			}, e.focusSection = function() {
				n.autoFocusContent = !0
			}
		}
	}
}).directive("menuToggle", function() {
	return {
		scope: {
			section: "="
		},
		templateUrl: "partials/menu-toggle.tmpl.html",
		link: function(e, t) {
			var n = t.parent().controller();
			e.isOpen = function() {
				return n.isOpen(e.section)
			}, e.toggle = function() {
				n.toggleOpen(e.section)
			};
			var a = t[0].parentNode.parentNode.parentNode;
			if (a.classList.contains("parent-list-item")) {
				var o = a.querySelector("h2");
				t[0].firstChild.setAttribute("aria-describedby", o.id)
			}
		}
	}
}).controller("DocsCtrl", ["$scope", "COMPONENTS", "BUILDCONFIG", "$mdSidenav", "$timeout", "$mdDialog", "menu", "$location", "$rootScope", "$log", function(e, t, n, a, o, r, i, l, s) {	
	function d() {
		o(function() {
			a("left").close()
		})
	}

	function c() {
		o(function() {
			a("left").open()
		})
	}

	function m() {
		return l.path()
	}

	function u() {
		i.selectPage(null, null), l.path("/")
	}

	function p() {
		e.closeMenu(), E.autoFocusContent && (h(), E.autoFocusContent = !1)
	}

	function h(e) {
		e && e.preventDefault(), y.focus()
	}

	function f(e) {
		return i.isPageSelected(e)
	}

	function g(e) {
		var t = !1,
		n = i.openedSection;
		return n === e ? t = !0 : e.children && e.children.forEach(function(e) {
			e === n && (t = !0)
		}), t
	}

	function b(e) {
		return i.isSectionSelected(e)
	}

	function v(e) {
		i.toggleSelectSection(e)
	}
	var E = this;
	e.COMPONENTS = t, e.BUILDCONFIG = n, e.menu = i, e.path = m, e.goHome = u, e.openMenu = c, e.closeMenu = d, e.isSectionSelected = g, s.$on("$locationChangeSuccess", p), e.focusMainContent = h, this.isOpen = b, this.isSelected = f, this.toggleOpen = v, this.autoFocusContent = !1;
	var y = document.querySelector("[role='main']");
	e.appLoaded = true;

}]).controller("HomeCtrl", ["$scope", "$rootScope", "$http", function(e, t, n) {
	/*
	t.currentComponent = t.currentDoc = null, e.version = "", e.versionURL = "";
	Math.round((new Date).getTime() / 1e3);
	n.get("version.json").then(function(t) {
		var n = t.data.sha || "",
		a = t.data.url;
		n && (e.versionURL = a + n, e.version = n.substr(0, 6))
	})
	*/
}]).controller("GuideCtrl", ["$rootScope", function(e) {
	e.currentComponent = e.currentDoc = null
}]).controller("LayoutCtrl", ["$scope", "$attrs", "$location", "$rootScope", function(e, t, n, a) {
	a.currentComponent = a.currentDoc = null, e.layoutDemo = {
			mainAxis: "center",
			crossAxis: "center",
			direction: "row"
	}, e.layoutAlign = function() {
		return e.layoutDemo.mainAxis + " " + e.layoutDemo.crossAxis
	}
}]).controller("ComponentDocCtrl", ["$scope", "doc", "component", "$rootScope", "$templateCache", "$http", "$q", function(e, t, n, a) {
	a.currentComponent = n, a.currentDoc = t
}]).controller("DemoCtrl", ["$rootScope", "$scope", "component", "demos", "$http", "$templateCache", "$q", function(e, t, n, a, o, r) {
	/*
	e.currentComponent = n, e.currentDoc = null, t.demos = [], angular.forEach(a, function(e) {
		var n = [e.index].concat(e.js || []).concat(e.css || []).concat(e.html || []);
		n.forEach(function(e) {
			e.httpPromise = o.get(e.outputPath, {
				cache: r
			}).then(function(t) {
				return e.contents = t.data.replace("<head/>", ""), e.contents
			})
		}), e.$files = n, t.demos.push(e)
	}), t.demos = t.demos.sort(function(e, t) {
		return e.name > t.name ? 1 : -1
	})
	*/
}]).filter("nospace", function() {
	return function(e) {
		return e ? e.replace(/ /g, "") : ""
	}
}).filter("humanizeDoc", function() {
	return function(e) {
		return e ? "directive" === e.type ? e.name.replace(/([A-Z])/g, function(e) {
			return "-" + e.toLowerCase()
		}) : e.label || e.name : void 0
	}
}).filter("directiveBrackets", function() {
	return function(e) {
		return e.indexOf("-") > -1 ? "<" + e + ">" : e
	}
})
;
DocsApp.constant("BUILDCONFIG", {
	/*
	ngVersion: "1.3.2",
	version: "0.8.2",
	repository: "https://github.com/angular/material",
	commit: "fbe8c622e89bfdde27dd3f26e8acbbe9226e0a29",
	date: "2015-03-01 13:32:06 -0800"
	*/
})
, DocsApp.constant("COMPONENTS", [

{
	name: "material.components.bottomSheet",
	type: "module",
	outputPath: "partials/api/material.components.bottomSheet/index.html",
	url: "api/material.components.bottomSheet",
	label: "material.components.bottomSheet",
	hasDemo: !1,
	module: ".",
	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
	docs: [{
		name: "$mdBottomSheet",
		type: "service",
		outputPath: "partials/api/material.components.bottomSheet/service/$mdBottomSheet.html",
		url: "api/material.components.bottomSheet/service/$mdBottomSheet",
		label: "$mdBottomSheet",
		hasDemo: !1,
		module: "material.components.bottomSheet",
		githubUrl: "https://github.com/angular/material/blob/master/src/components/bottomSheet/bottomSheet.js"
	}]
}
//, {
//	name: "material.components.button",
//	type: "module",
//	outputPath: "partials/api/material.components.button/index.html",
//	url: "api/material.components.button",
//	label: "material.components.button",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdButton",
//		type: "directive",
//		outputPath: "partials/api/material.components.button/directive/mdButton.html",
//		url: "api/material.components.button/directive/mdButton",
//		label: "mdButton",
//		hasDemo: !0,
//		module: "material.components.button",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/button/button.js"
//	}]
//}, {
//	name: "material.components.card",
//	type: "module",
//	outputPath: "partials/api/material.components.card/index.html",
//	url: "api/material.components.card",
//	label: "material.components.card",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdCard",
//		type: "directive",
//		outputPath: "partials/api/material.components.card/directive/mdCard.html",
//		url: "api/material.components.card/directive/mdCard",
//		label: "mdCard",
//		hasDemo: !0,
//		module: "material.components.card",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/card/card.js"
//	}]
//}, {
//	name: "material.components.checkbox",
//	type: "module",
//	outputPath: "partials/api/material.components.checkbox/index.html",
//	url: "api/material.components.checkbox",
//	label: "material.components.checkbox",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdCheckbox",
//		type: "directive",
//		outputPath: "partials/api/material.components.checkbox/directive/mdCheckbox.html",
//		url: "api/material.components.checkbox/directive/mdCheckbox",
//		label: "mdCheckbox",
//		hasDemo: !0,
//		module: "material.components.checkbox",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/checkbox/checkbox.js"
//	}]
//}, {
//	name: "material.components.content",
//	type: "module",
//	outputPath: "partials/api/material.components.content/index.html",
//	url: "api/material.components.content",
//	label: "material.components.content",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdContent",
//		type: "directive",
//		outputPath: "partials/api/material.components.content/directive/mdContent.html",
//		url: "api/material.components.content/directive/mdContent",
//		label: "mdContent",
//		hasDemo: !0,
//		module: "material.components.content",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/content/content.js"
//	}]
//}, {
//	name: "material.components.dialog",
//	type: "module",
//	outputPath: "partials/api/material.components.dialog/index.html",
//	url: "api/material.components.dialog",
//	label: "material.components.dialog",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "$mdDialog",
//		type: "service",
//		outputPath: "partials/api/material.components.dialog/service/$mdDialog.html",
//		url: "api/material.components.dialog/service/$mdDialog",
//		label: "$mdDialog",
//		hasDemo: !1,
//		module: "material.components.dialog",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/dialog/dialog.js"
//	}]
//}, {
//	name: "material.components.divider",
//	type: "module",
//	outputPath: "partials/api/material.components.divider/index.html",
//	url: "api/material.components.divider",
//	label: "material.components.divider",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdDivider",
//		type: "directive",
//		outputPath: "partials/api/material.components.divider/directive/mdDivider.html",
//		url: "api/material.components.divider/directive/mdDivider",
//		label: "mdDivider",
//		hasDemo: !0,
//		module: "material.components.divider",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/divider/divider.js"
//	}]
//}, {
//	name: "material.components.gridList",
//	type: "module",
//	outputPath: "partials/api/material.components.gridList/index.html",
//	url: "api/material.components.gridList",
//	label: "material.components.gridList",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdGridList",
//		type: "directive",
//		outputPath: "partials/api/material.components.gridList/directive/mdGridList.html",
//		url: "api/material.components.gridList/directive/mdGridList",
//		label: "mdGridList",
//		hasDemo: !0,
//		module: "material.components.gridList",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/gridList/gridList.js"
//	}, {
//		name: "mdGridTile",
//		type: "directive",
//		outputPath: "partials/api/material.components.gridList/directive/mdGridTile.html",
//		url: "api/material.components.gridList/directive/mdGridTile",
//		label: "mdGridTile",
//		hasDemo: !0,
//		module: "material.components.gridList",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/gridList/gridList.js"
//	}]
//}, {
//	name: "material.components.icon",
//	type: "module",
//	outputPath: "partials/api/material.components.icon/index.html",
//	url: "api/material.components.icon",
//	label: "material.components.icon",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdIcon",
//		type: "directive",
//		outputPath: "partials/api/material.components.icon/directive/mdIcon.html",
//		url: "api/material.components.icon/directive/mdIcon",
//		label: "mdIcon",
//		hasDemo: !0,
//		module: "material.components.icon",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/icon/icon.js"
//	}, {
//		name: "$mdIconProvider",
//		type: "service",
//		outputPath: "partials/api/material.components.icon/service/$mdIconProvider.html",
//		url: "api/material.components.icon/service/$mdIconProvider",
//		label: "$mdIconProvider",
//		hasDemo: !1,
//		module: "material.components.icon",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/icon/icon.js"
//	}, {
//		name: "$mdIcon",
//		type: "service",
//		outputPath: "partials/api/material.components.icon/service/$mdIcon.html",
//		url: "api/material.components.icon/service/$mdIcon",
//		label: "$mdIcon",
//		hasDemo: !1,
//		module: "material.components.icon",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/icon/icon.js"
//	}]
//}, {
//	name: "material.components.input",
//	type: "module",
//	outputPath: "partials/api/material.components.input/index.html",
//	url: "api/material.components.input",
//	label: "material.components.input",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdInputContainer",
//		type: "directive",
//		outputPath: "partials/api/material.components.input/directive/mdInputContainer.html",
//		url: "api/material.components.input/directive/mdInputContainer",
//		label: "mdInputContainer",
//		hasDemo: !0,
//		module: "material.components.input",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/input/input.js"
//	}, {
//		name: "mdInput",
//		type: "directive",
//		outputPath: "partials/api/material.components.input/directive/mdInput.html",
//		url: "api/material.components.input/directive/mdInput",
//		label: "mdInput",
//		hasDemo: !0,
//		module: "material.components.input",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/input/input.js"
//	}]
//}, {
//	name: "material.components.list",
//	type: "module",
//	outputPath: "partials/api/material.components.list/index.html",
//	url: "api/material.components.list",
//	label: "material.components.list",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdList",
//		type: "directive",
//		outputPath: "partials/api/material.components.list/directive/mdList.html",
//		url: "api/material.components.list/directive/mdList",
//		label: "mdList",
//		hasDemo: !0,
//		module: "material.components.list",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/list/list.js"
//	}, {
//		name: "mdItem",
//		type: "directive",
//		outputPath: "partials/api/material.components.list/directive/mdItem.html",
//		url: "api/material.components.list/directive/mdItem",
//		label: "mdItem",
//		hasDemo: !0,
//		module: "material.components.list",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/list/list.js"
//	}]
//}, {
//	name: "material.components.progressCircular",
//	type: "module",
//	outputPath: "partials/api/material.components.progressCircular/index.html",
//	url: "api/material.components.progressCircular",
//	label: "material.components.progressCircular",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdProgressCircular",
//		type: "directive",
//		outputPath: "partials/api/material.components.progressCircular/directive/mdProgressCircular.html",
//		url: "api/material.components.progressCircular/directive/mdProgressCircular",
//		label: "mdProgressCircular",
//		hasDemo: !0,
//		module: "material.components.progressCircular",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/progressCircular/progressCircular.js"
//	}]
//}, {
//	name: "material.components.progressLinear",
//	type: "module",
//	outputPath: "partials/api/material.components.progressLinear/index.html",
//	url: "api/material.components.progressLinear",
//	label: "material.components.progressLinear",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdProgressLinear",
//		type: "directive",
//		outputPath: "partials/api/material.components.progressLinear/directive/mdProgressLinear.html",
//		url: "api/material.components.progressLinear/directive/mdProgressLinear",
//		label: "mdProgressLinear",
//		hasDemo: !0,
//		module: "material.components.progressLinear",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/progressLinear/progressLinear.js"
//	}]
//}, {
//	name: "material.components.radioButton",
//	type: "module",
//	outputPath: "partials/api/material.components.radioButton/index.html",
//	url: "api/material.components.radioButton",
//	label: "material.components.radioButton",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdRadioGroup",
//		type: "directive",
//		outputPath: "partials/api/material.components.radioButton/directive/mdRadioGroup.html",
//		url: "api/material.components.radioButton/directive/mdRadioGroup",
//		label: "mdRadioGroup",
//		hasDemo: !0,
//		module: "material.components.radioButton",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/radioButton/radioButton.js"
//	}, {
//		name: "mdRadioButton",
//		type: "directive",
//		outputPath: "partials/api/material.components.radioButton/directive/mdRadioButton.html",
//		url: "api/material.components.radioButton/directive/mdRadioButton",
//		label: "mdRadioButton",
//		hasDemo: !0,
//		module: "material.components.radioButton",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/radioButton/radioButton.js"
//	}]
//}, {
//	name: "material.components.select",
//	type: "module",
//	outputPath: "partials/api/material.components.select/index.html",
//	url: "api/material.components.select",
//	label: "material.components.select",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdSelect",
//		type: "directive",
//		outputPath: "partials/api/material.components.select/directive/mdSelect.html",
//		url: "api/material.components.select/directive/mdSelect",
//		label: "mdSelect",
//		hasDemo: !0,
//		module: "material.components.select",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/select/select.js"
//	}]
//}, {
//	name: "material.components.sidenav",
//	type: "module",
//	outputPath: "partials/api/material.components.sidenav/index.html",
//	url: "api/material.components.sidenav",
//	label: "material.components.sidenav",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "$mdSidenav",
//		type: "service",
//		outputPath: "partials/api/material.components.sidenav/service/$mdSidenav.html",
//		url: "api/material.components.sidenav/service/$mdSidenav",
//		label: "$mdSidenav",
//		hasDemo: !1,
//		module: "material.components.sidenav",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/sidenav/sidenav.js"
//	}, {
//		name: "mdSidenav",
//		type: "directive",
//		outputPath: "partials/api/material.components.sidenav/directive/mdSidenav.html",
//		url: "api/material.components.sidenav/directive/mdSidenav",
//		label: "mdSidenav",
//		hasDemo: !0,
//		module: "material.components.sidenav",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/sidenav/sidenav.js"
//	}]
//}, {
//	name: "material.components.slider",
//	type: "module",
//	outputPath: "partials/api/material.components.slider/index.html",
//	url: "api/material.components.slider",
//	label: "material.components.slider",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdSlider",
//		type: "directive",
//		outputPath: "partials/api/material.components.slider/directive/mdSlider.html",
//		url: "api/material.components.slider/directive/mdSlider",
//		label: "mdSlider",
//		hasDemo: !0,
//		module: "material.components.slider",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/slider/slider.js"
//	}]
//}, {
//	name: "material.components.subheader",
//	type: "module",
//	outputPath: "partials/api/material.components.subheader/index.html",
//	url: "api/material.components.subheader",
//	label: "material.components.subheader",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdSubheader",
//		type: "directive",
//		outputPath: "partials/api/material.components.subheader/directive/mdSubheader.html",
//		url: "api/material.components.subheader/directive/mdSubheader",
//		label: "mdSubheader",
//		hasDemo: !0,
//		module: "material.components.subheader",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/subheader/subheader.js"
//	}]
//}, {
//	name: "material.components.swipe",
//	type: "module",
//	outputPath: "partials/api/material.components.swipe/index.html",
//	url: "api/material.components.swipe",
//	label: "material.components.swipe",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdSwipeLeft",
//		type: "directive",
//		outputPath: "partials/api/material.components.swipe/directive/mdSwipeLeft.html",
//		url: "api/material.components.swipe/directive/mdSwipeLeft",
//		label: "mdSwipeLeft",
//		hasDemo: !0,
//		module: "material.components.swipe",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/swipe/swipe.js"
//	}, {
//		name: "mdSwipeRight",
//		type: "directive",
//		outputPath: "partials/api/material.components.swipe/directive/mdSwipeRight.html",
//		url: "api/material.components.swipe/directive/mdSwipeRight",
//		label: "mdSwipeRight",
//		hasDemo: !0,
//		module: "material.components.swipe",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/swipe/swipe.js"
//	}]
//}, {
//	name: "material.components.switch",
//	type: "module",
//	outputPath: "partials/api/material.components.switch/index.html",
//	url: "api/material.components.switch",
//	label: "material.components.switch",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdSwitch",
//		type: "directive",
//		outputPath: "partials/api/material.components.switch/directive/mdSwitch.html",
//		url: "api/material.components.switch/directive/mdSwitch",
//		label: "mdSwitch",
//		hasDemo: !0,
//		module: "material.components.switch",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/switch/switch.js"
//	}]
//}, {
//	name: "material.components.toast",
//	type: "module",
//	outputPath: "partials/api/material.components.toast/index.html",
//	url: "api/material.components.toast",
//	label: "material.components.toast",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "$mdToast",
//		type: "service",
//		outputPath: "partials/api/material.components.toast/service/$mdToast.html",
//		url: "api/material.components.toast/service/$mdToast",
//		label: "$mdToast",
//		hasDemo: !1,
//		module: "material.components.toast",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/toast/toast.js"
//	}]
//}, {
//	name: "material.components.toolbar",
//	type: "module",
//	outputPath: "partials/api/material.components.toolbar/index.html",
//	url: "api/material.components.toolbar",
//	label: "material.components.toolbar",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdToolbar",
//		type: "directive",
//		outputPath: "partials/api/material.components.toolbar/directive/mdToolbar.html",
//		url: "api/material.components.toolbar/directive/mdToolbar",
//		label: "mdToolbar",
//		hasDemo: !0,
//		module: "material.components.toolbar",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/toolbar/toolbar.js"
//	}]
//}, {
//	name: "material.components.tooltip",
//	type: "module",
//	outputPath: "partials/api/material.components.tooltip/index.html",
//	url: "api/material.components.tooltip",
//	label: "material.components.tooltip",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdTooltip",
//		type: "directive",
//		outputPath: "partials/api/material.components.tooltip/directive/mdTooltip.html",
//		url: "api/material.components.tooltip/directive/mdTooltip",
//		label: "mdTooltip",
//		hasDemo: !0,
//		module: "material.components.tooltip",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/tooltip/tooltip.js"
//	}]
//}, {
//	name: "material.components.autocomplete",
//	type: "module",
//	outputPath: "partials/api/material.components.autocomplete/index.html",
//	url: "api/material.components.autocomplete",
//	label: "material.components.autocomplete",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdAutocomplete",
//		type: "directive",
//		outputPath: "partials/api/material.components.autocomplete/directive/mdAutocomplete.html",
//		url: "api/material.components.autocomplete/directive/mdAutocomplete",
//		label: "mdAutocomplete",
//		hasDemo: !0,
//		module: "material.components.autocomplete",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/autocomplete/autocomplete.js"
//	}, {
//		name: "mdHighlightText",
//		type: "directive",
//		outputPath: "partials/api/material.components.autocomplete/directive/mdHighlightText.html",
//		url: "api/material.components.autocomplete/directive/mdHighlightText",
//		label: "mdHighlightText",
//		hasDemo: !0,
//		module: "material.components.autocomplete",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/autocomplete/autocomplete.js"
//	}]
//}, {
//	name: "material.components.tabs",
//	type: "module",
//	outputPath: "partials/api/material.components.tabs/index.html",
//	url: "api/material.components.tabs",
//	label: "material.components.tabs",
//	hasDemo: !1,
//	module: ".",
//	githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
//	docs: [{
//		name: "mdTab",
//		type: "directive",
//		outputPath: "partials/api/material.components.tabs/directive/mdTab.html",
//		url: "api/material.components.tabs/directive/mdTab",
//		label: "mdTab",
//		hasDemo: !0,
//		module: "material.components.tabs",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/tabs/tabs.js"
//	}, {
//		name: "mdTabs",
//		type: "directive",
//		outputPath: "partials/api/material.components.tabs/directive/mdTabs.html",
//		url: "api/material.components.tabs/directive/mdTabs",
//		label: "mdTabs",
//		hasDemo: !0,
//		module: "material.components.tabs",
//		githubUrl: "https://github.com/angular/material/blob/master/src/components/tabs/tabs.js"
//	}]
//}
]), DocsApp.constant("PAGES", {
	Theming: [{
		name: "Introduction and Terms",
		outputPath: "partials/Theming/01_introduction.html",
		url: "/Theming/01_introduction",
		label: "Introduction and Terms"
	}, {
		name: "Declarative Syntax",
		outputPath: "partials/Theming/02_declarative_syntax.html",
		url: "/Theming/02_declarative_syntax",
		label: "Declarative Syntax"
	}, {
		name: "Configuring a Theme",
		outputPath: "partials/Theming/03_configuring_a_theme.html",
		url: "/Theming/03_configuring_a_theme",
		label: "Configuring a Theme"
	}, {
		name: "Multiple Themes",
		outputPath: "partials/Theming/04_multiple_themes.html",
		url: "/Theming/04_multiple_themes",
		label: "Multiple Themes"
	}]
}), 
angular.module("docsApp").constant("DEMOS", [{}]),
///////////////////////
/*
angular.module("docsApp").constant("DEMOS", [{
	name: "material.components.autocomplete",
	label: "Autocomplete",
	demos: [{
		id: "autocompletedemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/autocomplete/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/autocomplete/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.autocomplete",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/autocomplete/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "autocompleteDemo",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.autocomplete"
}, {
	name: "material.components.bottomSheet",
	label: "Bottom Sheet",
	demos: [{
		id: "bottomSheetdemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/bottomSheet/demoBasicUsage/style.css"
		}],
		html: [{
			name: "bottom-sheet-grid-template.html",
			label: "bottom-sheet-grid-template.html",
			fileType: "html",
			outputPath: "demo-partials/bottomSheet/demoBasicUsage/bottom-sheet-grid-template.html"
		}, {
			name: "bottom-sheet-list-template.html",
			label: "bottom-sheet-list-template.html",
			fileType: "html",
			outputPath: "demo-partials/bottomSheet/demoBasicUsage/bottom-sheet-list-template.html"
		}],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/bottomSheet/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.bottomSheet",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/bottomSheet/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "bottomSheetDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.bottomSheet"
}, {
	name: "material.components.button",
	label: "Button",
	demos: [{
		id: "buttondemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/button/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/button/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.button",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/button/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "buttonsDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.button"
}, {
	name: "material.components.card",
	label: "Card",
	demos: [{
		id: "carddemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/card/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/card/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.card",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/card/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "cardDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.card"
}, {
	name: "material.components.checkbox",
	label: "Checkbox",
	demos: [{
		id: "checkboxdemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/checkbox/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/checkbox/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.checkbox",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/checkbox/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "checkboxDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.checkbox"
}, {
	name: "material.components.content",
	label: "Content",
	demos: [{
		id: "contentdemoBasicUsage",
		css: [],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/content/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.content",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/content/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "contentDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.content"
}, {
	name: "material.components.dialog",
	label: "Dialog",
	demos: [{
		id: "dialogdemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/dialog/demoBasicUsage/style.css"
		}],
		html: [{
			name: "dialog1.tmpl.html",
			label: "dialog1.tmpl.html",
			fileType: "html",
			outputPath: "demo-partials/dialog/demoBasicUsage/dialog1.tmpl.html"
		}],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/dialog/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.dialog",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/dialog/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "dialogDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.dialog"
}, {
	name: "material.components.divider",
	label: "Divider",
	demos: [{
		id: "dividerdemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/divider/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/divider/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.divider",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/divider/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "dividerDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.divider"
}, {
	name: "material.components.gridList",
	label: "Grid List",
	demos: [{
		id: "gridListdemoBasicUsage",
		css: [{
			name: "styles.css",
			label: "styles.css",
			fileType: "css",
			outputPath: "demo-partials/gridList/demoBasicUsage/styles.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/gridList/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.gridList",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/gridList/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "gridListDemo1",
			dependencies: ["ngMaterial"]
		}
	}, {
		id: "gridListdemoDynamicTiles",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/gridList/demoDynamicTiles/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/gridList/demoDynamicTiles/script.js"
		}],
		moduleName: "material.components.gridList",
		name: "demoDynamicTiles",
		label: "Dynamic Tiles",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/gridList/demoDynamicTiles/index.html"
		},
		ngModule: {
			module: "gridListDemoApp",
			dependencies: ["ngMaterial"]
		}
	}, {
		id: "gridListdemoResponsiveUsage",
		css: [],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/gridList/demoResponsiveUsage/script.js"
		}],
		moduleName: "material.components.gridList",
		name: "demoResponsiveUsage",
		label: "Responsive Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/gridList/demoResponsiveUsage/index.html"
		},
		ngModule: {
			module: "gridListDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.gridList"
}, {
	name: "material.components.icon",
	label: "Icon",
	demos: [{
		id: "icondemoFontIcons",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/icon/demoFontIcons/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/icon/demoFontIcons/script.js"
		}],
		moduleName: "material.components.icon",
		name: "demoFontIcons",
		label: "Font Icons",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/icon/demoFontIcons/index.html"
		},
		ngModule: {
			module: "appDemoFontIcons",
			dependencies: ["ngMaterial"]
		}
	}, {
		id: "icondemoLoadSvgIconsFromUrl",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/icon/demoLoadSvgIconsFromUrl/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/icon/demoLoadSvgIconsFromUrl/script.js"
		}],
		moduleName: "material.components.icon",
		name: "demoLoadSvgIconsFromUrl",
		label: "Load Svg Icons From Url",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/icon/demoLoadSvgIconsFromUrl/index.html"
		},
		ngModule: {
			module: "appDemoSvgIcons",
			dependencies: ["ngMaterial"]
		}
	}, {
		id: "icondemoSvgIconSets",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/icon/demoSvgIconSets/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/icon/demoSvgIconSets/script.js"
		}],
		moduleName: "material.components.icon",
		name: "demoSvgIconSets",
		label: "Svg Icon Sets",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/icon/demoSvgIconSets/index.html"
		},
		ngModule: {
			module: "appSvgIconSets",
			dependencies: ["ngMaterial"]
		}
	}, {
		id: "icondemoUsingTemplateCache",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/icon/demoUsingTemplateCache/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/icon/demoUsingTemplateCache/script.js"
		}],
		moduleName: "material.components.icon",
		name: "demoUsingTemplateCache",
		label: "Using Template Cache",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/icon/demoUsingTemplateCache/index.html"
		},
		ngModule: {
			module: "appUsingTemplateCache",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.icon"
}, {
	name: "material.components.input",
	label: "Input",
	demos: [{
		id: "inputdemoBasicUsage",
		css: [],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/input/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.input",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/input/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "inputBasicDemo",
			dependencies: ["ngMaterial", "ngMessages"]
		}
	}, {
		id: "inputdemoErrors",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/input/demoErrors/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/input/demoErrors/script.js"
		}],
		moduleName: "material.components.input",
		name: "demoErrors",
		label: "Errors",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/input/demoErrors/index.html"
		},
		ngModule: {
			module: "inputErrorsApp",
			dependencies: ["ngMaterial", "ngMessages"]
		}
	}],
	url: "/demo/material.components.input"
}, {
	name: "material.components.list",
	label: "List",
	demos: [{
		id: "listdemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/list/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/list/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.list",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/list/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "listDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.list"
}, {
	name: "material.components.progressCircular",
	label: "Progress Circular",
	demos: [{
		id: "progressCirculardemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/progressCircular/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/progressCircular/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.progressCircular",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/progressCircular/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "progressCircularDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.progressCircular"
}, {
	name: "material.components.progressLinear",
	label: "Progress Linear",
	demos: [{
		id: "progressLineardemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/progressLinear/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/progressLinear/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.progressLinear",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/progressLinear/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "progressLinearDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.progressLinear"
}, {
	name: "material.components.radioButton",
	label: "Radio Button",
	demos: [{
		id: "radioButtondemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/radioButton/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/radioButton/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.radioButton",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/radioButton/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "radioDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.radioButton"
}, {
	name: "material.components.select",
	label: "Select",
	demos: [{
		id: "selectdemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/select/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/select/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.select",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/select/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "selectDemoBasic",
			dependencies: ["ngMaterial"]
		}
	}, {
		id: "selectdemoOptionGroups",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/select/demoOptionGroups/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/select/demoOptionGroups/script.js"
		}],
		moduleName: "material.components.select",
		name: "demoOptionGroups",
		label: "Option Groups",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/select/demoOptionGroups/index.html"
		},
		ngModule: {
			module: "selectDemoOptGroups",
			dependencies: ["ngMaterial"]
		}
	}, {
		id: "selectdemoOptionsWithAsyncSearch",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/select/demoOptionsWithAsyncSearch/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/select/demoOptionsWithAsyncSearch/script.js"
		}],
		moduleName: "material.components.select",
		name: "demoOptionsWithAsyncSearch",
		label: "Options With Async Search",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/select/demoOptionsWithAsyncSearch/index.html"
		},
		ngModule: {
			module: "selectDemoOptionsAsync",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.select"
}, {
	name: "material.components.sidenav",
	label: "Sidenav",
	demos: [{
		id: "sidenavdemoBasicUsage",
		css: [],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/sidenav/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.sidenav",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/sidenav/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "sidenavDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.sidenav"
}, {
	name: "material.components.slider",
	label: "Slider",
	demos: [{
		id: "sliderdemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/slider/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/slider/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.slider",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/slider/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "sliderDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.slider"
}, {
	name: "material.components.subheader",
	label: "Subheader",
	demos: [{
		id: "subheaderdemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/subheader/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/subheader/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.subheader",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/subheader/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "subheaderBasicDemo",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.subheader"
}, {
	name: "material.components.switch",
	label: "Switch",
	demos: [{
		id: "switchdemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/switch/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/switch/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.switch",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/switch/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "switchDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.switch"
}, {
	name: "material.components.tabs",
	label: "Tabs",
	demos: [{
		id: "tabsdemoDynamicTabs",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/tabs/demoDynamicTabs/style.css"
		}],
		html: [{
			name: "readme.html",
			label: "readme.html",
			fileType: "html",
			outputPath: "demo-partials/tabs/demoDynamicTabs/readme.html"
		}],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/tabs/demoDynamicTabs/script.js"
		}],
		moduleName: "material.components.tabs",
		name: "demoDynamicTabs",
		label: "Dynamic Tabs",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/tabs/demoDynamicTabs/index.html"
		},
		ngModule: {
			module: "tabsDemo2",
			dependencies: ["ngMaterial"]
		}
	}, {
		id: "tabsdemoStaticTabs",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/tabs/demoStaticTabs/style.css"
		}],
		html: [{
			name: "readme.html",
			label: "readme.html",
			fileType: "html",
			outputPath: "demo-partials/tabs/demoStaticTabs/readme.html"
		}],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/tabs/demoStaticTabs/script.js"
		}],
		moduleName: "material.components.tabs",
		name: "demoStaticTabs",
		label: "Static Tabs",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/tabs/demoStaticTabs/index.html"
		},
		ngModule: {
			module: "tabsDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.tabs"
}, {
	name: "material.components.toast",
	label: "Toast",
	demos: [{
		id: "toastdemoBasicUsage",
		css: [],
		html: [{
			name: "toast-template.html",
			label: "toast-template.html",
			fileType: "html",
			outputPath: "demo-partials/toast/demoBasicUsage/toast-template.html"
		}],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/toast/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.toast",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/toast/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "toastDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.toast"
}, {
	name: "material.components.toolbar",
	label: "Toolbar",
	demos: [{
		id: "toolbardemoBasicUsage",
		css: [],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/toolbar/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.toolbar",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/toolbar/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "toolbarDemo1",
			dependencies: ["ngMaterial"]
		}
	}, {
		id: "toolbardemoScrollShrink",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/toolbar/demoScrollShrink/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/toolbar/demoScrollShrink/script.js"
		}],
		moduleName: "material.components.toolbar",
		name: "demoScrollShrink",
		label: "Scroll Shrink",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/toolbar/demoScrollShrink/index.html"
		},
		ngModule: {
			module: "toolbarDemo2",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.toolbar"
}, {
	name: "material.components.tooltip",
	label: "Tooltip",
	demos: [{
		id: "tooltipdemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/tooltip/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/tooltip/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.tooltip",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/tooltip/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "tooltipDemo1",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.tooltip"
}, {
	name: "material.components.whiteframe",
	label: "Whiteframe",
	demos: [{
		id: "whiteframedemoBasicUsage",
		css: [{
			name: "style.css",
			label: "style.css",
			fileType: "css",
			outputPath: "demo-partials/whiteframe/demoBasicUsage/style.css"
		}],
		html: [],
		js: [{
			name: "script.js",
			label: "script.js",
			fileType: "js",
			outputPath: "demo-partials/whiteframe/demoBasicUsage/script.js"
		}],
		moduleName: "material.components.whiteframe",
		name: "demoBasicUsage",
		label: "Basic Usage",
		index: {
			name: "index.html",
			label: "index.html",
			fileType: "html",
			outputPath: "demo-partials/whiteframe/demoBasicUsage/index.html"
		},
		ngModule: {
			module: "whiteframeBasicUsage",
			dependencies: ["ngMaterial"]
		}
	}],
	url: "/demo/material.components.whiteframe"
}]),
*/
///////////////////////


DocsApp.directive("layoutAlign", function() {
	return angular.noop
}).directive("layout", function() {
	return angular.noop
}).directive("docsDemo", ["$mdUtil", function() {
	function e(e, t, n, a) {
		function o(e) {
			switch (e) {
			case "index.html":
				return "HTML";
			case "script.js":
				return "JS";
			case "style.css":
				return "CSS";
			default:
				return e
			}
		}
		var r = this;
		r.interpolateCode = angular.isDefined(n.interpolateCode), r.demoId = a(n.demoId || "")(e.$parent), r.demoTitle = a(n.demoTitle || "")(e.$parent), r.demoModule = a(n.demoModule || "")(e.$parent), r.files = {
			css: [],
			js: [],
			html: []
		}, r.addFile = function(e, t) {
			var n = {
					name: o(e),
					contentsPromise: t,
					fileType: e.split(".").pop()
			};
			t.then(function(e) {
				n.contents = e
			}), "index.html" === e ? r.files.index = n : "readme.html" === e ? r.demoDescription = n : (r.files[n.fileType] = r.files[n.fileType] || [], r.files[n.fileType].push(n)), r.orderedFiles = [].concat(r.files.index || []).concat(r.files.js || []).concat(r.files.css || []).concat(r.files.html || [])
		}
	}
	return {
		restrict: "E",
		scope: !0,
		templateUrl: "partials/docs-demo.tmpl.html",
		transclude: !0,
		controller: ["$scope", "$element", "$attrs", "$interpolate", e],
		controllerAs: "demoCtrl",
		bindToController: !0
	}
}]).directive("demoFile", ["$q", "$interpolate", function(e, t) {
	function n(n, a) {
		var o = a.contents,
		r = n.html(),
		i = a.name;
		return n.contents().remove(),
		function(n, a, l, s) {
			s.addFile(t(i)(n), e.when(n.$eval(o) || r)), a.remove()
		}
	}
	return {
		restrict: "E",
		require: "^docsDemo",
		compile: n
	}
}]).filter("toHtml", ["$sce", function(e) {
	return function(t) {
		return e.trustAsHtml(t)
	}
}]), DocsApp.directive("demoInclude", ["$q", "$http", "$compile", "$templateCache", "$timeout", function(e, t, n, a, o) {
	function r(t, a, r) {
		function i() {
			c.index.contentsPromise.then(function(o) {
				d = angular.element('<div class="demo-content ' + m + '">');
				var r, i, c = !!m;
				c ? (angular.bootstrap(d[0], [m]), r = d.scope(), i = d.injector().get("$compile"), t.$on("$destroy", function() {
					r.$destroy()
				})) : (r = t.$new(), i = n), e.all([l(), s()]).finally(function() {
					r.$evalAsync(function() {
						a.append(d), d.html(o), i(d.contents())(r)
					})
				})
			})
		}

		function l() {
			return e.all(c.css.map(function(e) {
				return e.contentsPromise
			})).then(function(e) {
				e = e.join("\n");
				var n = angular.element("<style>" + e + "</style>");
				document.body.appendChild(n[0]), t.$on("$destroy", function() {
					n.remove()
				})
			})
		}

		function s() {
			return e.all(c.html.map(function(e) {
				return e.contentsPromise.then(function(n) {
					var a = d.injector().get("$templateCache");
					a.put(e.name, n), t.$on("$destroy", function() {
						a.remove(e.name)
					})
				})
			}))
		}
		var d, c = t.$eval(r.files) || {},
		m = t.$eval(r.module) || "";
		o(i)
	}
	return {
		restrict: "E",
		link: r
	}
}]), angular.module("docsApp").run(["$templateCache", function(e) {
	e.put("partials/demo.tmpl.html", '<docs-demo ng-repeat="demo in demos" \n  demo-id="{{demo.id}}" demo-title="{{demo.label}}" demo-module="{{demo.ngModule.module}}">\n  <demo-file ng-repeat="file in demo.$files"\n             name="{{file.name}}" contents="file.httpPromise">\n  </demo-file>\n</docs-demo>\n')
}]), angular.module("docsApp").run(["$templateCache", function(e) {
	e.put("partials/docs-demo.tmpl.html", '<div layout="column" class="doc-content">\n  <div flex layout="column" style="z-index:1">\n\n    <div class="doc-description" ng-bind-html="demoCtrl.demoDescription.contents | toHtml"></div>\n\n    <div ng-transclude></div>\n\n    <section class="demo-container"\n      ng-class="{\'show-source\': demoCtrl.$showSource}" >\n\n      <md-toolbar class="demo-toolbar">\n        <div class="md-toolbar-tools">\n          <span>{{demoCtrl.demoTitle}}</span>\n          <span flex></span>\n          <md-button\n            style="min-width: 72px;"\n            layout="row" layout-align="center center"\n            ng-click="demoCtrl.$showSource = !demoCtrl.$showSource">\n            <md-icon md-svg-src="img/icons/ic_visibility_24px.svg"\n               style="margin: 0 4px 0 0;">\n            </md-icon>\n            Source\n          </md-button>\n        </div>\n      </md-toolbar>\n\n      <!-- Source views -->\n      <md-tabs style="border-top: solid 1px #00ADC3;"\n        class="demo-source-tabs" ng-show="demoCtrl.$showSource">\n        <md-tab ng-repeat="file in demoCtrl.orderedFiles" label="{{file.name}}">\n          <md-content md-scroll-y class="demo-source-container">\n            <hljs code="file.contentsPromise" lang="{{file.fileType}}" should-interpolate="demoCtrl.interpolateCode">\n            </hljs>\n          </md-c>\n        </md-tab>\n      </md-tabs>\n\n      <!-- Live Demos -->\n      <demo-include files="demoCtrl.files" module="demoCtrl.demoModule" class="md-whiteframe-z1 {{demoCtrl.demoId}}">\n      </demo-include>\n    </section>\n\n  </div>\n</div>\n')
}]), angular.module("docsApp").run(["$templateCache", function(e) {
	e.put("partials/getting-started.tmpl.html", '<div ng-controller="GuideCtrl" layout="column" class="doc-content">\n  <md-content class="extraPad">\n    <p><em>New to Angular.js? Before getting into Angular Material, it might be helpful to <a href="https://egghead.io/articles/new-to-angularjs-start-learning-here" target="_blank" title="Link opens in a new window">read about the framework</a>.</em></p>\n\n    <h2>How do I start?</h2>\n    <ul style="margin-bottom: 2em;">\n      <li><a href="http://codepen.io/collection/AxKKgY/" target="_blank" title="Link opens in a new window">Fork a Codepen</a></li>\n      <li><a href="https://github.com/angular/material-start" target="_blank" title="Link opens in a new window">Clone a Github Starter Project</a></li>\n    </ul>\n\n    <h3>Including Angular Material and its dependencies</h3>\n    <ul style="margin-bottom: 2em;">\n      <li><a href="https://github.com/angular/material#bower">Using Bower</a></li>\n      <li><a href="https://github.com/angular/material#cdn">Using a CDN</a> (example below)</li>\n    </ul>\n\n    <iframe height=\'280\' scrolling=\'no\' data-default-tab="html" src=\'//codepen.io/marcysutton/embed/OPbpKm?default-tab=html\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'http://codepen.io/marcysutton/pen/OPbpKm/\'>Angular Material Dependencies</a> on <a href=\'http://codepen.io\'>CodePen</a>.\n    </iframe>\n\n    <md-divider></md-divider>\n\n    <h2>Contributing to Angular Material</h2>\n    <ul style="margin-bottom: 2em;">\n      <li>To contribute, fork our GitHub <a href="https://github.com/angular/material">repository</a>.</li>\n      <li>Please read our <a href="https://github.com/angular/material#contributing">contributor guidelines</a>.</li>\n      <li>For problems,\n          <a href="https://github.com/angular/material/issues?q=is%3Aissue+is%3Aopen" target="_blank">\n              search the issues\n          </a> and/or\n          <a href="https://github.com/angular/material/issues/new" target="_blank">\n              create a new issue\n          </a>.\n      </li>\n      <li>For questions,\n          <a href="https://groups.google.com/forum/#!forum/ngmaterial" target="_blank">\n              search the forum\n          </a> and/or post a new message.\n      </li>\n    </ul>\n  </md-content>\n</div>\n')
}]), angular.module("docsApp").run(["$templateCache", function(e) {
	e.put("partials/home.tmpl.html", '<div ng-controller="HomeCtrl" layout="column" class="doc-content">\n    <md-content class="extraPad">\n        <p>The <strong>Angular Material</strong> project is an implementation of Material Design in Angular.js. This project provides a set of reusable, well-tested, and accessible UI components based on the Material Design system.</p>\n\n        <p>Similar to the\n            <a href="http://www.polymer-project.org/">Polymer</a> project\'s\n            <a href="http://www.polymer-project.org/docs/elements/paper-elements.html">Paper elements</a> collection, Angular Material is supported internally at Google by the Angular.js, Material Design UX and other product teams.\n        </p>\n\n     <h2>What is Material Design?</h2>\n        <p>\n            <a href="http://www.google.com/design/spec/material-design/">Material Design</a> is a specification for a\n            unified system of visual, motion, and interaction design that adapts across different devices and different\n            screen sizes.\n\n            Below is a brief video that presents the Material Design system:\n        </p>\n\n        <md-content layout="row" layout-align="center center" style="padding-bottom: 25px;" >\n            <iframe width="560" height="315" title="Material Design" src="//www.youtube.com/embed/Q8TXgCzxEnw"\n                    frameborder="0" allowfullscreen></iframe>\n        </md-content>\n        <ul>\n            <li>These docs were generated from source in the `master` branch:\n                <ul style="padding-top:5px;">\n                    <li>\n                        at commit <a ng-href="{{BUILDCONFIG.repository}}/commit/{{BUILDCONFIG.commit}}" target="_blank">\n                        v{{BUILDCONFIG.version}}  -  SHA {{BUILDCONFIG.commit.substring(0,7)}}\n                    </a>.\n                    </li>\n                    <li>\n                        on {{BUILDCONFIG.date}} GMT.\n                    </li>\n                </ul>\n\n            </li>\n        </ul>\n        <br/>\n        <br/>\n    </md-content>\n</div>\n\n')
}]), angular.module("docsApp").run(["$templateCache", function(e) {
	e.put("partials/layout-alignment.tmpl.html", '<div ng-controller="LayoutCtrl" layout="column" layout-fill class="layout-content">\n\n  <p>\n    The <code>layout-align</code> attribute takes two words.\n    The first word says how the children will be aligned in the layout\'s direction, and the second word says how the children will be aligned perpindicular to the layout\'s direction.\n    <br/>\n    Only one word is required for the attribute. For example, <code>layout="row" layout-align="center"</code> would make the elements center horizontally and use the default behavior vertically.\n    <br/>\n    <code>layout="column" layout-align="center end"</code> would make\n    children align along the center vertically and along the end (right) horizontally.\n  </p>\n  <table>\n    <tr>\n      <td>layout-align</td>\n      <td>Sets child alignment.</td>\n    </tr>\n    <tr>\n      <td>layout-align-sm</td>\n      <td>Sets child alignment on devices less than 600px wide.</td>\n    </tr>\n    <tr>\n      <td>layout-align-gt-sm</td>\n      <td>Sets child alignment on devices greater than 600px wide.</td>\n    </tr>\n    <tr>\n      <td>layout-align-md</td>\n      <td>Sets child alignment on devices between 600px and 960px wide.</td>\n    </tr>\n    <tr>\n      <td>layout-align-gt-md</td>\n      <td>Sets child alignment on devices greater than 960px wide.\n    </tr>\n    <tr>\n      <td>layout-align-lg</td>\n      <td>Sets child alignment on devices between 960px and 1200px wide.</td>\n    </tr>\n    <tr>\n      <td>layout-align-gt-lg</td>\n      <td>Sets child alignment on devices greater than 1200px wide.</td>\n    </tr>\n  </table>\n  <p>\n   See below for more examples:\n  </p>\n\n  <section class="layout-panel-parent">\n    <div ng-panel="layoutDemo">\n      <docs-demo demo-title=\'layout="{{layoutDemo.direction}}" layout-align="{{layoutAlign()}}"\' class="small-demo" interpolate-code="true">\n        <demo-file name="index.html">\n          <div layout="{{layoutDemo.direction}}" layout-align="{{layoutAlign()}}">\n            <div>one</div>\n            <div>two</div>\n            <div>three</div>\n          </div>\n        </demo-file>\n      </docs-demo>\n    </div>\n  </section>\n\n  <div layout="column" layout-gt-sm="row" layout-align="space-around">\n\n    <div>\n      <md-subheader>Layout Direction</md-subheader>\n      <md-radio-group ng-model="layoutDemo.direction">\n        <md-radio-button value="row">row</md-radio-button>\n        <md-radio-button value="column">column</md-radio-button>\n      </md-radio-group>\n    </div>\n    <div>\n      <md-subheader>Alignment in Layout Direction ({{layoutDemo.direction == \'row\' ? \'horizontal\' : \'vertical\'}})</md-subheader>\n      <md-radio-group ng-model="layoutDemo.mainAxis">\n        <md-radio-button value="start">start</md-radio-button>\n        <md-radio-button value="center">center</md-radio-button>\n        <md-radio-button value="end">end</md-radio-button>\n        <md-radio-button value="space-around">space-around</md-radio-button>\n        <md-radio-button value="space-between">space-between</md-radio-button>\n      </md-radio-group>\n    </div>\n    <div>\n      <md-subheader>Alignment in Perpendicular Direction ({{layoutDemo.direction == \'column\' ? \'horizontal\' : \'vertical\'}})</md-subheader>\n      <md-radio-group ng-model="layoutDemo.crossAxis">\n        <md-radio-button value="start">start</md-radio-button>\n        <md-radio-button value="center">center</md-radio-button>\n        <md-radio-button value="end">end</md-radio-button>\n      </md-radio-group>\n    </div>\n\n  </div>\n</div>\n')
}]), angular.module("docsApp").run(["$templateCache", function(e) {
	e.put("partials/layout-container.tmpl.html", '<div ng-controller="LayoutCtrl" layout="column" layout-fill class="layout-content">\n\n  <h3 class="layout-title">Overview</h3>\n  <p>\n    Angular Material\'s responsive CSS layout is built on\n    <a href="http://www.w3.org/TR/css3-flexbox/">flexbox</a>.\n  </p>\n\n  <p>\n    The layout system is based upon element attributes rather than CSS classes.\n    Attributes provide an easy way to set a value (eg `layout="row"`), and additionally\n    helps us separate concerns: attributes define layout, and classes define styling.\n  </p>\n\n  <md-divider></md-divider>\n  <h3 class="layout-title">Layout Attribute</h3>\n  <p>\n    Use the <code>layout</code> attribute on an element to arrange its children\n    horizontally in a row (<code>layout="row"</code>), or vertically in\n    a column (<code>layout="column"</code>). \n  </p>\n\n  <hljs lang="html">\n    <div layout="row">\n      <div>I\'m left.</div>\n      <div>I\'m right.</div>\n    </div>\n    <div layout="column">\n      <div>I\'m above.</div>\n      <div>I\'m below.</div>\n    </div>\n  </hljs>\n\n  <p>\n    See <a href="#/layout/options">Layout Options</a> for information on responsive layouts and other options.\n  </p>\n\n  <!--\n  <md-divider>\n  <docs-demo demo-title="Example App Layout" class="small-demo">\n    <demo-file name="index.html">\n      <div layout="column" layout-fill class="layout-demo">\n        <header>\n          Header\n        </header>\n\n        <section flex layout="column" layout-gt-sm="row">\n          <aside flex flex-gt-sm="20">\n            Menu<br />\n            flex flex-gt-sm="20"\n          </aside>\n          <main flex>\n            Main<br />flex\n          </main>\n        </section>\n\n        <footer>\n          Footer\n        </footer>\n      </div>\n    </demo-file>\n  </docs-demo>\n  <p>\n    In this layout, the header and footer are both using their normal height, while the main\n    content area is flexing, or stretching, to fill the remaining area.\n    <br/><gr/>\n    The app container is a vertical layout, while the main area is a responsive row/column\n    layout, depending upon the screen size. \n    The aside menu is above on mobile, and to the left on larger devices.\n  </p>\n  -->\n</div>\n\n</div>\n')
}]), angular.module("docsApp").run(["$templateCache", function(e) {
	e.put("partials/layout-grid.tmpl.html", '<div ng-controller="LayoutCtrl" layout="column" layout-fill class="layout-content">\n\n  <p>\n    To customize the size and position of elements in a layout, use the\n    <code>flex</code>, <code>offset</code>, and <code>flex-order</code> attributes.\n  </p>\n\n  <md-divider></md-divider>\n\n  <docs-demo demo-title="Flex Attribute" class="small-demo">\n    <demo-file name="index.html">\n      <div layout="row">\n        <div flex>\n          [flex]\n        </div>\n        <div flex>\n          [flex]\n        </div>\n        <div flex hide-sm>\n          [flex]\n        </div>\n      </div>\n    </demo-file>\n  </docs-demo>\n  <p>\n    Add the <code>flex</code> attribute to a layout\'s child element, and it\n    will flex (stretch) to fill the available area.\n  </p>\n\n\n  <md-divider></md-divider>\n\n  <docs-demo demo-title="Flex Percent Values" class="small-demo">\n    <demo-file name="index.html">\n      <div layout="row" layout-wrap>\n        <div flex="33">\n          [flex="33"]\n        </div>\n        <div flex="55">\n          [flex="55"]\n        </div>\n        <div flex>\n          [flex]\n        </div>\n        <div flex="66">\n          [flex]\n        </div>\n        <div flex="33">\n          [flex]\n        </div>\n      </div>\n    </demo-file>\n  </docs-demo>\n  <p>\n    A layout child\'s <code>flex</code> attribute can be given an integer value from 0-100.\n    The element will stretch to the percentage of available space matching the value.\n    <br/><br/>\n    The <code>flex</code> attribute value is restricted to 33, 66, and multiples\n    of five.\n    <br/>\n    For example: <code>flex="5", flex="20", "flex="33", flex="50", flex="66", flex="75", ...</code>.\n  </p>\n  <p>\n  See the <a href="#/layout/options">layout options page</a> for more information on responsive flex attributes.\n  </p>\n\n  <md-divider></md-divider>\n  <docs-demo demo-title="Flex Order Attribute" class="small-demo">\n    <demo-file name="index.html">\n      <div layout="row" layout-margin>\n        <div flex flex-order="3">\n          [flex-order="3"]\n        </div>\n        <div flex flex-order="2">\n          [flex-order="2"]\n        </div>\n        <div flex flex-order="1">\n          [flex-order="1"]\n        </div>\n      </div>\n    </demo-file>\n  </docs-demo>\n  <p>\n    Add the <code>flex-order</code> attribute to a layout child to set its\n    position within the layout. Any value from 0-9 is accepted.\n  </p>\n  <table>\n    <tr>\n      <td>flex-order</td>\n      <td>Sets element order.</td>\n    </tr>\n    <tr>\n      <td>flex-order-sm</td>\n      <td>Sets element order on devices less than 600px wide.</td>\n    </tr>\n    <tr>\n      <td>flex-order-gt-sm</td>\n      <td>Sets element order on devices greater than 600px wide.</td>\n    </tr>\n    <tr>\n      <td>flex-order-md</td>\n      <td>Sets element order on devices between 600px and 960px wide.</td>\n    </tr>\n    <tr>\n      <td>flex-order-gt-md</td>\n      <td>Sets element order on devices greater than 960px wide.\n    </tr>\n    <tr>\n      <td>flex-order-lg</td>\n      <td>Sets element order on devices between 960px and 1200px wide.</td>\n    </tr>\n    <tr>\n      <td>flex-order-gt-lg</td>\n      <td>Sets element order on devices greater than 1200px wide.</td>\n    </tr>\n  </table>\n</div>\n\n')
}]), angular.module("docsApp").run(["$templateCache", function(e) {
	e.put("partials/layout-options.tmpl.html", '<div ng-controller="LayoutCtrl" layout="column" layout-fill class="layout-content layout-options">\n\n  <docs-demo demo-title="Responsive Layout" class="small-demo">\n    <demo-file name="index.html">\n      <div layout="row" layout-sm="column">\n        <div flex>\n          I\'m above on mobile, and to the left on larger devices.\n        </div>\n        <div flex>\n          I\'m below on mobile, and to the right on larger devices.\n        </div>\n      </div>\n    </demo-file>\n  </docs-demo>\n\n  <p>\n    See the <a href="#/layout/container">Layout Container</a> page for a basic explanation\n    of layout attributes.\n    <br/>\n    To make your layout change depending upon the device size, there are\n    other <code>layout</code> attributes available:\n  </p>\n\n  <table>\n    <tr>\n      <td>layout</td>\n      <td>Sets the default layout on all devices.</td>\n    </tr>\n    <tr>\n      <td>layout-sm</td>\n      <td>Sets the layout on devices less than 600px wide (phones).</td>\n    </tr>\n    <tr>\n      <td>layout-gt-sm</td>\n      <td>Sets the layout on devices greater than 600px wide (bigger than phones).</td>\n    </tr>\n    <tr>\n      <td>layout-md</td>\n      <td>Sets the layout on devices between 600px and 960px wide (tablets in portrait).</td>\n    </tr>\n    <tr>\n      <td>layout-gt-md</td>\n      <td>Sets the layout on devices greater than 960px wide (bigger than tablets in portrait).</td>\n    </tr>\n    <tr>\n      <td>layout-lg</td>\n      <td>Sets the layout on devices between 960 and 1200px wide (tablets in landscape).</td>\n    </tr>\n    <tr>\n      <td>layout-gt-lg</td>\n      <td>Sets the layout on devices greater than 1200px wide (computers and large screens).</td>\n    </tr>\n  </table>\n  <br/>\n\n  <md-divider></md-divider>\n\n  <docs-demo demo-title="Layout Margin, Padding and Fill" class="small-demo">\n    <demo-file name="index.html">\n      <div layout="row" layout-margin layout-fill layout-padding>\n        <div flex>I\'m on the left, and there\'s an empty area around me.</div>\n        <div flex>I\'m on the right, and there\'s an empty area around me.</div>\n      </div>\n    </demo-file>\n  </docs-demo>\n\n  <p>\n    <code>layout-margin</code> adds margin around each <code>flex</code> child. It also adds a margin to the layout container itself.\n    <br/>\n    <code>layout-padding</code> adds padding inside each <code>flex</code> child. It also adds padding to the layout container itself.\n    <br/>\n    <code>layout-fill</code> forces the layout element to fill its parent container.\n  </p>\n\n  <br/>\n\n  <md-divider></md-divider>\n\n  <docs-demo demo-title="Wrap" class="small-demo">\n    <demo-file name="index.html">\n      <div layout="row" layout-wrap>\n        <div flex="33">[flex=33]</div>\n        <div flex="66">[flex=66]</div>\n        <div flex="66">[flex=66]</div>\n        <div flex="33">[flex=33]</div>\n      </div>\n    </demo-file>\n  </docs-demo>\n  <p>\n    <code>layout-wrap</code> allows <code>flex</code> children to wrap within the container if the elements use more than 100%.\n    <br/>\n  </p>\n\n  <br/>\n\n  <md-divider></md-divider>\n\n  <docs-demo demo-title="Responsive Flex & Offset Attributes" class="small-demo">\n    <demo-file name="index.html">\n      <div layout="row">\n        <div flex="66" flex-sm="33">\n          I flex to one-third of the space on mobile, and two-thirds on other devices.\n        </div>\n        <div flex="33" flex-sm="66">\n          I flex to two-thirds of the space on mobile, and one-third on other devices.\n        </div>\n      </div>\n    </demo-file>\n  </docs-demo>\n\n  <p>\n    See the <a href="#/layout/grid">Layout Grid</a> page for a basic explanation\n    of flex and offset attributes.\n  </p>\n\n  <table>\n    <tr>\n      <td>flex</td>\n      <td>Sets flex.</td>\n    </tr>\n    <tr>\n      <td>flex-sm</td>\n      <td>Sets flex on devices less than 600px wide.</td>\n    </tr>\n    <tr>\n      <td>flex-gt-sm</td>\n      <td>Sets flex on devices greater than 600px wide.</td>\n    </tr>\n    <tr>\n      <td>flex-md</td>\n      <td>Sets flex on devices between 600px and 960px wide..</td>\n    </tr>\n    <tr>\n      <td>flex-gt-md</td>\n      <td>Sets flex on devices greater than 960px wide.\n    </tr>\n    <tr>\n      <td>flex-lg</td>\n      <td>Sets flex on devices between 960px and 1200px.</td>\n    </tr>\n    <tr>\n      <td>flex-gt-lg</td>\n      <td>Sets flex on devices greater than 1200px wide.</td>\n    </tr>\n  </table>\n\n  <md-divider></md-divider>\n\n  <docs-demo demo-title="Hide and Show Attributes" class="small-demo">\n    <demo-file name="index.html">\n      <div layout layout-align="center center">\n        <md-subheader hide-sm>\n          I\'m hidden on mobile and shown on larger devices.\n        </md-subheader>\n        <md-subheader hide-gt-sm>\n          I\'m shown on mobile and hidden on larger devices.\n        </md-subheader>\n      </div>\n    </demo-file>\n  </docs-demo>\n  <br/>\n  <table>\n    <tr>\n      <td>hide</td>\n      <td><code>display: none</code></td>\n    </tr>\n    <tr>\n      <td>hide-sm</td>\n      <td><code>display: none</code> on devices less than 600px wide.</td>\n    </tr>\n    <tr>\n      <td>hide-gt-sm</td>\n      <td><code>display: none</code> on devices greater than 600px wide.</td>\n    </tr>\n    <tr>\n      <td>hide-md</td>\n      <td><code>display: none</code> on devices between 600px and 960px wide.</td>\n    </tr>\n    <tr>\n      <td>hide-gt-md</td>\n      <td><code>display: none</code> on devices greater than 960px wide.\n    </tr>\n    <tr>\n      <td>hide-lg</td>\n      <td><code>display: none</code> on devices between 960px and 1200px.</td>\n    </tr>\n    <tr>\n      <td>hide-gt-lg</td>\n      <td><code>display: none</code> on devices greater than 1200px wide.</td>\n    </tr>\n    <tr>\n      <td>show</td>\n      <td>Negates hide.</td>\n    </tr>\n    <tr>\n      <td>show-sm</td>\n      <td>Negates hide on devices less than 600px wide.</td>\n    </tr>\n    <tr>\n      <td>show-gt-sm</td>\n      <td>Negates hide on devices greater than 600px wide.</td>\n    </tr>\n    <tr>\n      <td>show-md</td>\n      <td>Negates hide on devices between 600px and 960px wide..</td>\n    </tr>\n    <tr>\n      <td>show-gt-md</td>\n      <td>Negates hide on devices greater than 960px wide.\n    </tr>\n    <tr>\n      <td>show-lg</td>\n      <td>Negates hide on devices between 960px and 1200px.</td>\n    </tr>\n    <tr>\n      <td>show-gt-lg</td>\n      <td>Negates hide on devices greater than 1200px wide.</td>\n    </tr>\n  </table>\n\n</div>\n')
}]), angular.module("docsApp").run(["$templateCache", function(e) {
	e.put("partials/menu-link.tmpl.html", '<md-button ng-class="{\'active\' : isSelected()}"\n  ng-href="#{{section.url}}" ng-click="focusSection()">\n  {{section | humanizeDoc}}\n  <span class="visually-hidden"\n    ng-if="isSelected()">\n    current page\n  </span>\n</md-button>\n')
}]), angular.module("docsApp").run(["$templateCache", function(e) {
	e.put("partials/menu-toggle.tmpl.html", '<md-button class="md-button-toggle"\n  ng-click="toggle()"\n  aria-controls="docs-menu-{{section.name | nospace}}"\n  flex layout="row"\n  aria-expanded="{{isOpen()}}">\n  {{section.name}}\n  <span aria-hidden="true" class="md-toggle-icon"\n  ng-class="{\'toggled\' : isOpen()}"></span>\n  <span class="visually-hidden">\n    Toggle {{isOpen()? \'expanded\' : \'collapsed\'}}\n  </span>\n</md-button>\n\n<ul ng-show="isOpen()" id="docs-menu-{{section.name | nospace}}" class="menu-toggle-list">\n  <li ng-repeat="page in section.pages">\n    <menu-link section="page"></menu-link>\n  </li>\n</ul>\n')
}]), angular.module("docsApp").run(["$templateCache", function(e) {
	e.put("partials/view-source.tmpl.html", '<md-dialog class="view-source-dialog">\n\n  <md-tabs>\n    <md-tab ng-repeat="file in files"\n                  active="file === data.selectedFile"\n                  ng-click="data.selectedFile = file" >\n        <span class="window_label">{{file.viewType}}</span>\n    </md-tab>\n  </md-tabs>\n\n  <div class="md-content" md-scroll-y flex>\n    <div ng-repeat="file in files">\n      <hljs code="file.content"\n        lang="{{file.fileType}}"\n        ng-show="file === data.selectedFile" >\n      </hljs>\n    </div>\n  </div>\n\n  <div class="md-actions" layout="horizontal">\n    <md-button class="md-button-light" ng-click="$hideDialog()">\n      Done\n    </md-button>\n  </div>\n</md-dialog>\n')
}]), DocsApp.directive("hljs", ["$timeout", "$q", "$interpolate", function(e, t, n) {
	return {
		restrict: "E",
		compile: function(a, o) {
			var r;
			return o.code || (r = a.html(), a.empty()),
			function(a, o, i) {
				function l(e, t) {
					var n = t.find("code"),
					a = e.split("\n");
					a = a.filter(function(e) {
						return e.trim().length
					});
					var o = a[0].match(/^\s*/)[0],
					r = new RegExp("^" + o);
					a = a.map(function(e) {
						return e.replace(r, "").replace(/\s+$/, "")
					});
					var l = hljs.highlight(i.language || i.lang, a.join("\n"), !0);
					l.value = l.value.replace(/=<span class="hljs-value">""<\/span>/gi, "").replace("<head>", "").replace("<head/>", ""), n.append(l.value).addClass("highlight")
				}
				i.code && (r = a.$eval(i.code));
				var s = a.$eval(i.shouldInterpolate);
				t.when(r).then(function(t) {
					if (t) {
						s && (t = n(t)(a));
						var r = angular.element('<pre><code class="highlight" ng-non-bindable></code></pre>');
						o.append(r), e(function() {
							l(t, r)
						}, 34, !1)
					}
				})
			}
		}
	}
}]);
var hljs = new function() {
	function e(e) {
		return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
	}

	function t(e) {
		return e.nodeName.toLowerCase()
	}

	function n(e, t) {
		var n = e && e.exec(t);
		return n && 0 == n.index
	}

	function a(e) {
		var t = (e.className + " " + (e.parentNode ? e.parentNode.className : "")).split(/\s+/);
		return t = t.map(function(e) {
			return e.replace(/^lang(uage)?-/, "")
		}), t.filter(function(e) {
			return b(e) || "no-highlight" == e
		})[0]
	}

	function o(e, t) {
		var n = {};
		for (var a in e) n[a] = e[a];
		if (t)
			for (var a in t) n[a] = t[a];
		return n
	}

	function r(e) {
		var n = [];
		return function a(e, o) {
			for (var r = e.firstChild; r; r = r.nextSibling) 3 == r.nodeType ? o += r.nodeValue.length : "br" == t(r) ? o += 1 : 1 == r.nodeType && (n.push({
				event: "start",
				offset: o,
				node: r
			}), o = a(r, o), n.push({
				event: "stop",
				offset: o,
				node: r
			}));
			return o
		}(e, 0), n
	}

	function i(n, a, o) {
		function r() {
			return n.length && a.length ? n[0].offset != a[0].offset ? n[0].offset < a[0].offset ? n : a : "start" == a[0].event ? n : a : n.length ? n : a
		}

		function i(n) {
			function a(t) {
				return " " + t.nodeName + '="' + e(t.value) + '"'
			}
			c += "<" + t(n) + Array.prototype.map.call(n.attributes, a).join("") + ">"
		}

		function l(e) {
			c += "</" + t(e) + ">"
		}

		function s(e) {
			("start" == e.event ? i : l)(e.node)
		}
		for (var d = 0, c = "", m = []; n.length || a.length;) {
			var u = r();
			if (c += e(o.substr(d, u[0].offset - d)), d = u[0].offset, u == n) {
				m.reverse().forEach(l);
				do s(u.splice(0, 1)[0]), u = r(); while (u == n && u.length && u[0].offset == d);
				m.reverse().forEach(i)
			} else "start" == u[0].event ? m.push(u[0].node) : m.pop(), s(u.splice(0, 1)[0])
		}
		return c + e(o.substr(d))
	}

	function l(e) {
		function t(e) {
			return e && e.source || e
		}

		function n(n, a) {
			return RegExp(t(n), "m" + (e.cI ? "i" : "") + (a ? "g" : ""))
		}

		function a(r, i) {
			if (!r.compiled) {
				if (r.compiled = !0, r.k = r.k || r.bK, r.k) {
					var l = {},
					s = function(t, n) {
						e.cI && (n = n.toLowerCase()), n.split(" ").forEach(function(e) {
							var n = e.split("|");
							l[n[0]] = [t, n[1] ? Number(n[1]) : 1]
						})
					};
					"string" == typeof r.k ? s("keyword", r.k) : Object.keys(r.k).forEach(function(e) {
						s(e, r.k[e])
					}), r.k = l
				}
				r.lR = n(r.l || /\b[A-Za-z0-9_]+\b/, !0), i && (r.bK && (r.b = "\\b(" + r.bK.split(" ").join("|") + ")\\b"), r.b || (r.b = /\B|\b/), r.bR = n(r.b), r.e || r.eW || (r.e = /\B|\b/), r.e && (r.eR = n(r.e)), r.tE = t(r.e) || "", r.eW && i.tE && (r.tE += (r.e ? "|" : "") + i.tE)), r.i && (r.iR = n(r.i)), void 0 === r.r && (r.r = 1), r.c || (r.c = []);
				var d = [];
				r.c.forEach(function(e) {
					e.v ? e.v.forEach(function(t) {
						d.push(o(e, t))
					}) : d.push("self" == e ? r : e)
				}), r.c = d, r.c.forEach(function(e) {
					a(e, r)
				}), r.starts && a(r.starts, i);
				var c = r.c.map(function(e) {
					return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
				}).concat([r.tE, r.i]).map(t).filter(Boolean);
				r.t = c.length ? n(c.join("|"), !0) : {
					exec: function() {
						return null
					}
				}, r.continuation = {}
			}
		}
		a(e)
	}

	function s(t, a, o, r) {
		function i(e, t) {
			for (var a = 0; a < t.c.length; a++)
				if (n(t.c[a].bR, e)) return t.c[a]
		}

		function c(e, t) {
			return n(e.eR, t) ? e : e.eW ? c(e.parent, t) : void 0
		}

		function m(e, t) {
			return !o && n(t.iR, e)
		}

		function u(e, t) {
			var n = x.cI ? t[0].toLowerCase() : t[0];
			return e.k.hasOwnProperty(n) && e.k[n]
		}

		function p(e, t, n, a) {
			var o = a ? "" : v.classPrefix,
					r = '<span class="' + o,
					i = n ? "" : "</span>";
					return r += e + '">', r + t + i
		}

		function h() {
			if (!M.k) return e(A);
			var t = "",
			n = 0;
			M.lR.lastIndex = 0;
			for (var a = M.lR.exec(A); a;) {
				t += e(A.substr(n, a.index - n));
				var o = u(M, a);
				o ? (C += o[1], t += p(o[0], e(a[0]))) : t += e(a[0]), n = M.lR.lastIndex, a = M.lR.exec(A)
			}
			return t + e(A.substr(n))
		}

		function f() {
			if (M.sL && !E[M.sL]) return e(A);
			var t = M.sL ? s(M.sL, A, !0, M.continuation.top) : d(A);
			return M.r > 0 && (C += t.r), "continuous" == M.subLanguageMode && (M.continuation.top = t.top), p(t.language, t.value, !1, !0)
		}

		function g() {
			return void 0 !== M.sL ? f() : h()
		}

		function y(t, n) {
			var a = t.cN ? p(t.cN, "", !0) : "";
			t.rB ? (w += a, A = "") : t.eB ? (w += e(n) + a, A = "") : (w += a, A = n), M = Object.create(t, {
				parent: {
					value: M
				}
			})
		}

		function $(t, n) {
			if (A += t, void 0 === n) return w += g(), 0;
			var a = i(n, M);
			if (a) return w += g(), y(a, n), a.rB ? 0 : n.length;
			var o = c(M, n);
			if (o) {
				var r = M;
				r.rE || r.eE || (A += n), w += g();
				do M.cN && (w += "</span>"), C += M.r, M = M.parent; while (M != o.parent);
				return r.eE && (w += e(n)), A = "", o.starts && y(o.starts, ""), r.rE ? 0 : n.length
			}
			if (m(n, M)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (M.cN || "<unnamed>") + '"');
			return A += n, n.length || 1
		}
		var x = b(t);
		if (!x) throw new Error('Unknown language: "' + t + '"');
		l(x);
		for (var M = r || x, w = "", T = M; T != x; T = T.parent) T.cN && (w += p(T.cN, w, !0));
		var A = "",
		C = 0;
		try {
			for (var k, S, N = 0;;) {
				if (M.t.lastIndex = N, k = M.t.exec(a), !k) break;
				S = $(a.substr(N, k.index - N), k[0]), N = k.index + S
			}
			$(a.substr(N));
			for (var T = M; T.parent; T = T.parent) T.cN && (w += "</span>");
			return {
				r: C,
				value: w,
				language: t,
				top: M
			}
		} catch (D) {
			if (-1 != D.message.indexOf("Illegal")) return {
				r: 0,
				value: e(a)
			};
			throw D
		}
	}

	function d(t, n) {
		n = n || v.languages || Object.keys(E);
		var a = {
				r: 0,
				value: e(t)
		},
		o = a;
		return n.forEach(function(e) {
			if (b(e)) {
				var n = s(e, t, !1);
				n.language = e, n.r > o.r && (o = n), n.r > a.r && (o = a, a = n)
			}
		}), o.language && (a.second_best = o), a
	}

	function c(e) {
		return v.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, t) {
			return t.replace(/\t/g, v.tabReplace)
		})), v.useBR && (e = e.replace(/\n/g, "<br>")), e
	}

	function m(e) {
		var t = v.useBR ? e.innerHTML.replace(/\n/g, "").replace(/<br>|<br [^>]*>/g, "\n").replace(/<[^>]*>/g, "") : e.textContent,
				n = a(e);
		if ("no-highlight" != n) {
			var o = n ? s(n, t, !0) : d(t),
					l = r(e);
			if (l.length) {
				var m = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
				m.innerHTML = o.value, o.value = i(l, r(m), t)
			}
			o.value = c(o.value), e.innerHTML = o.value, e.className += " hljs " + (!n && o.language || ""), e.result = {
				language: o.language,
				re: o.r
			}, o.second_best && (e.second_best = {
					language: o.second_best.language,
					re: o.second_best.r
			})
		}
	}

	function u(e) {
		v = o(v, e)
	}

	function p() {
		if (!p.called) {
			p.called = !0;
			var e = document.querySelectorAll("pre code");
			Array.prototype.forEach.call(e, m)
		}
	}

	function h() {
		addEventListener("DOMContentLoaded", p, !1), addEventListener("load", p, !1)
	}

	function f(e, t) {
		var n = E[e] = t(this);
		n.aliases && n.aliases.forEach(function(t) {
			y[t] = e
		})
	}

	function g() {
		return Object.keys(E)
	}

	function b(e) {
		return E[e] || E[y[e]]
	}
	var v = {
			classPrefix: "hljs-",
			tabReplace: null,
			useBR: !1,
			languages: void 0
	},
	E = {},
	y = {};
	this.highlight = s, this.highlightAuto = d, this.fixMarkup = c, this.highlightBlock = m, this.configure = u, this.initHighlighting = p, this.initHighlightingOnLoad = h, this.registerLanguage = f, this.listLanguages = g, this.getLanguage = b, this.inherit = o, this.IR = "[a-zA-Z][a-zA-Z0-9_]*", this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*", this.NR = "\\b\\d+(\\.\\d+)?", this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", this.BNR = "\\b(0b[01]+)", this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", this.BE = {
			b: "\\\\[\\s\\S]",
			r: 0
	}, this.ASM = {
			cN: "string",
			b: "'",
			e: "'",
			i: "\\n",
			c: [this.BE]
	}, this.QSM = {
			cN: "string",
			b: '"',
			e: '"',
			i: "\\n",
			c: [this.BE]
	}, this.PWM = {
			b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
	}, this.CLCM = {
			cN: "comment",
			b: "//",
			e: "$",
			c: [this.PWM]
	}, this.CBCM = {
			cN: "comment",
			b: "/\\*",
			e: "\\*/",
			c: [this.PWM]
	}, this.HCM = {
			cN: "comment",
			b: "#",
			e: "$",
			c: [this.PWM]
	}, this.NM = {
			cN: "number",
			b: this.NR,
			r: 0
	}, this.CNM = {
			cN: "number",
			b: this.CNR,
			r: 0
	}, this.BNM = {
			cN: "number",
			b: this.BNR,
			r: 0
	}, this.CSSNM = {
			cN: "number",
			b: this.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
			r: 0
	}, this.RM = {
			cN: "regexp",
			b: /\//,
			e: /\/[gim]*/,
			i: /\n/,
			c: [this.BE, {
				b: /\[/,
					e: /\]/,
					r: 0,
					c: [this.BE]
			}]
	}, this.TM = {
			cN: "title",
			b: this.IR,
			r: 0
	}, this.UTM = {
			cN: "title",
			b: this.UIR,
			r: 0
	}
};
hljs.registerLanguage("javascript", function(e) {
	return {
		aliases: ["js"],
		k: {
			keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
			literal: "true false null undefined NaN Infinity",
			built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"
		},
		c: [{
			cN: "pi",
			b: /^\s*('|")use strict('|")/,
			r: 10
		}, e.ASM, e.QSM, e.CLCM, e.CBCM, e.CNM, {
			b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
			k: "return throw case",
			c: [e.CLCM, e.CBCM, e.RM, {
				b: /</,
				e: />;/,
				r: 0,
				sL: "xml"
			}],
			r: 0
		}, {
			cN: "function",
			bK: "function",
			e: /\{/,
			eE: !0,
			c: [e.inherit(e.TM, {
				b: /[A-Za-z$_][0-9A-Za-z$_]*/
			}), {
				cN: "params",
				b: /\(/,
				e: /\)/,
				c: [e.CLCM, e.CBCM],
				i: /["'\(]/
			}],
			i: /\[|%/
		}, {
			b: /\$[(.]/
		}, {
			b: "\\." + e.IR,
			r: 0
		}]
	}
}), hljs.registerLanguage("css", function(e) {
	var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
	n = {
			cN: "function",
			b: t + "\\(",
			rB: !0,
			eE: !0,
			e: "\\("
	};
	return {
		cI: !0,
		i: "[=/|']",
		c: [e.CBCM, {
			cN: "id",
			b: "\\#[A-Za-z0-9_-]+"
		}, {
			cN: "class",
			b: "\\.[A-Za-z0-9_-]+",
			r: 0
		}, {
			cN: "attr_selector",
			b: "\\[",
			e: "\\]",
			i: "$"
		}, {
			cN: "pseudo",
			b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
		}, {
			cN: "at_rule",
			b: "@(font-face|page)",
			l: "[a-z-]+",
			k: "font-face page"
		}, {
			cN: "at_rule",
			b: "@",
			e: "[{;]",
			c: [{
				cN: "keyword",
				b: /\S+/
			}, {
				b: /\s/,
				eW: !0,
				eE: !0,
				r: 0,
				c: [n, e.ASM, e.QSM, e.CSSNM]
			}]
		}, {
			cN: "tag",
			b: t,
			r: 0
		}, {
			cN: "rules",
			b: "{",
			e: "}",
			i: "[^\\s]",
			r: 0,
			c: [e.CBCM, {
				cN: "rule",
				b: "[^\\s]",
				rB: !0,
				e: ";",
				eW: !0,
				c: [{
					cN: "attribute",
					b: "[A-Z\\_\\.\\-]+",
					e: ":",
					eE: !0,
					i: "[^\\s]",
					starts: {
						cN: "value",
						eW: !0,
						eE: !0,
						c: [n, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
							cN: "hexcolor",
							b: "#[0-9A-Fa-f]+"
						}, {
							cN: "important",
							b: "!important"
						}]
					}
				}]
			}]
		}]
	}
}), hljs.registerLanguage("xml", function() {
	var e = "[A-Za-z0-9\\._:-]+",
	t = {
			b: /<\?(php)?(?!\w)/,
			e: /\?>/,
			sL: "php",
			subLanguageMode: "continuous"
	},
	n = {
			eW: !0,
			i: /</,
			r: 0,
			c: [t, {
				cN: "attribute",
				b: e,
				r: 0
			}, {
				b: "=",
				r: 0,
				c: [{
					cN: "value",
					v: [{
						b: /"/,
						e: /"/
					}, {
						b: /'/,
						e: /'/
					}, {
						b: /[^\s\/>]+/
					}]
				}]
			}]
	};
	return {
		aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
		cI: !0,
		c: [{
			cN: "doctype",
			b: "<!DOCTYPE",
			e: ">",
			r: 10,
			c: [{
				b: "\\[",
				e: "\\]"
			}]
		}, {
			cN: "comment",
			b: "<!--",
			e: "-->",
			r: 10
		}, {
			cN: "cdata",
			b: "<\\!\\[CDATA\\[",
			e: "\\]\\]>",
			r: 10
		}, {
			cN: "tag",
			b: "<style(?=\\s|>|$)",
			e: ">",
			k: {
				title: "style"
			},
			c: [n],
			starts: {
				e: "</style>",
				rE: !0,
				sL: "css"
			}
		}, {
			cN: "tag",
			b: "<script(?=\\s|>|$)",
			e: ">",
			k: {
				title: "script"
			},
			c: [n],
			starts: {
				e: "</script>",
				rE: !0,
				sL: "javascript"
			}
		}, {
			b: "<%",
			e: "%>",
			sL: "vbscript"
		}, t, {
			cN: "pi",
			b: /<\?\w+/,
			e: /\?>/,
			r: 10
		}, {
			cN: "tag",
			b: "</?",
			e: "/?>",
			c: [{
				cN: "title",
				b: "[^ /><]+",
				r: 0
			}, n]
		}]
	}
}), DocsApp.directive("ngPanel", ["$animate", function(e) {
	return {
		restrict: "EA",
		transclude: "element",
		terminal: !0,
		compile: function(t, n) {
			var a = n.ngPanel || n["for"],
			o = /^(\S+)(?:\s+track by (.+?))?$/,
			r = o.exec(a),
			i = !0,
			l = r[1],
			s = r[2];
			return s ? i = !1 : s = r[1],
					function(t, n, a, o, r) {
				var d, c;
				t[i ? "$watchCollection" : "$watch"](s, function(a) {
					d && e.leave(d), c && (c.$destroy(), c = null);
					i ? a : t.$eval(l);
					c = t.$new(), r(c, function(t) {
						d = t, e.enter(t, null, n)
					})
				})
			}
		}
	}
}]);