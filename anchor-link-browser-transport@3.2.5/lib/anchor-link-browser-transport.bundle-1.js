/**
 * Anchor Link Browser Transport v3.2.5
 * https://github.com/greymass/anchor-link-browser-transport
 *
 * @license
 * Copyright (c) 2020 Greymass Inc. All Rights Reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 *  1. Redistribution of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 * 
 *  2. Redistribution in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 * 
 *  3. Neither the name of the copyright holder nor the names of its contributors
 *     may be used to endorse or promote products derived from this software without
 *     specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * YOU ACKNOWLEDGE THAT THIS SOFTWARE IS NOT DESIGNED, LICENSED OR INTENDED FOR USE
 * IN THE DESIGN, CONSTRUCTION, OPERATION OR MAINTENANCE OF ANY MILITARY FACILITY.
 */
var AnchorLinkBrowserTransport = function (t) {
    "use strict";

    function e(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function n(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(r), !0).forEach((function (e) {
                s(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function r(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                s = c.value
        } catch (t) {
            return void n(t)
        }
        c.done ? e(s) : Promise.resolve(s).then(r, o)
    }

    function o(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise((function (o, i) {
                var a = t.apply(e, n);

                function c(t) {
                    r(a, o, i, c, s, "next", t)
                }

                function s(t) {
                    r(a, o, i, c, s, "throw", t)
                }
                c(void 0)
            }))
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function c(t, e, n) {
        return e && a(t.prototype, e), n && a(t, n), t
    }

    function s(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function u(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null == n) return;
            var r, o, i = [],
                a = !0,
                c = !1;
            try {
                for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
            } catch (t) {
                c = !0, o = t
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw o
                }
            }
            return i
        }(t, e) || l(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(t, e) {
        if (t) {
            if ("string" == typeof t) return f(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
        }
    }

    function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function h(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = l(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    },
                    e: function (t) {
                        throw t
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            c = !1;
        return {
            s: function () {
                n = n.call(t)
            },
            n: function () {
                var t = n.next();
                return a = t.done, t
            },
            e: function (t) {
                c = !0, i = t
            },
            f: function () {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
        }
    }
    var p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    ! function (t) {
        var e = function (t) {
            var e, n = Object.prototype,
                r = n.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                i = o.iterator || "@@iterator",
                a = o.asyncIterator || "@@asyncIterator",
                c = o.toStringTag || "@@toStringTag";

            function s(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                s({}, "")
            } catch (t) {
                s = function (t, e, n) {
                    return t[e] = n
                }
            }

            function u(t, e, n, r) {
                var o = e && e.prototype instanceof v ? e : v,
                    i = Object.create(o.prototype),
                    a = new A(r || []);
                return i._invoke = function (t, e, n) {
                    var r = f;
                    return function (o, i) {
                        if (r === p) throw new Error("Generator is already running");
                        if (r === d) {
                            if ("throw" === o) throw i;
                            return T()
                        }
                        for (n.method = o, n.arg = i;;) {
                            var a = n.delegate;
                            if (a) {
                                var c = S(a, n);
                                if (c) {
                                    if (c === g) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === f) throw r = d, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = p;
                            var s = l(t, e, n);
                            if ("normal" === s.type) {
                                if (r = n.done ? d : h,
                                    s.arg === g) continue;
                                return {
                                    value: s.arg,
                                    done: n.done
                                }
                            }
                            "throw" === s.type && (r = d, n.method = "throw", n.arg = s.arg)
                        }
                    }
                }(t, n, a), i
            }

            function l(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = u;
            var f = "suspendedStart",
                h = "suspendedYield",
                p = "executing",
                d = "completed",
                g = {};

            function v() {}

            function m() {}

            function y() {}
            var w = {};
            w[i] = function () {
                return this
            };
            var b = Object.getPrototypeOf,
                x = b && b(b(O([])));
            x && x !== n && r.call(x, i) && (w = x);
            var E = y.prototype = v.prototype = Object.create(w);

            function C(t) {
                ["next", "throw", "return"].forEach((function (e) {
                    s(t, e, (function (t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function k(t, e) {
                function n(o, i, a, c) {
                    var s = l(t[o], t, i);
                    if ("throw" !== s.type) {
                        var u = s.arg,
                            f = u.value;
                        return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then((function (t) {
                            n("next", t, a, c)
                        }), (function (t) {
                            n("throw", t, a, c)
                        })) : e.resolve(f).then((function (t) {
                            u.value = t, a(u)
                        }), (function (t) {
                            return n("throw", t, a, c)
                        }))
                    }
                    c(s.arg)
                }
                var o;
                this._invoke = function (t, r) {
                    function i() {
                        return new e((function (e, o) {
                            n(t, r, e, o)
                        }))
                    }
                    return o = o ? o.then(i, i) : i()
                }
            }

            function S(t, n) {
                var r = t.iterator[n.method];
                if (r === e) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (t.iterator.return && (n.method = "return", n.arg = e, S(t, n), "throw" === n.method)) return g;
                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return g
                }
                var o = l(r, t.iterator, n.arg);
                if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, g;
                var i = o.arg;
                return i ? i.done ? (n[t.resultName] = i.value,
                    n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, g) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
            }

            function L(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function P(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function A(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(L, this), this.reset(!0)
            }

            function O(t) {
                if (t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                return {
                    next: T
                }
            }

            function T() {
                return {
                    value: e,
                    done: !0
                }
            }
            return m.prototype = E.constructor = y, y.constructor = m, m.displayName = s(y, c, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, s(t, c, "GeneratorFunction")), t.prototype = Object.create(E), t
            }, t.awrap = function (t) {
                return {
                    __await: t
                }
            }, C(k.prototype), k.prototype[a] = function () {
                return this
            }, t.AsyncIterator = k, t.async = function (e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(u(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? a : a.next().then((function (t) {
                    return t.done ? t.value : a.next()
                }))
            }, C(E), s(E, c, "Generator"), E[i] = function () {
                return this
            }, E.toString = function () {
                return "[object Generator]"
            }, t.keys = function (t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(),
                    function n() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return n.value = r, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, t.values = O, A.prototype = {
                constructor: A,
                reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(P),
                        !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function (t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var s = r.call(a, "catchLoc"),
                                u = r.call(a, "finallyLoc");
                            if (s && u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            } else if (s) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(a)
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e), g
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), P(n), g
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                P(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function (t, n, r) {
                    return this.delegate = {
                        iterator: O(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), g
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = e
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(e)
        }
    }({
        exports: {}
    });
    var d = function (t) {
            return t && t.Math == Math && t
        },
        g = d("object" == typeof globalThis && globalThis) || d("object" == typeof window && window) || d("object" == typeof self && self) || d("object" == typeof p && p) || function () {
            return this
        }() || Function("return this")(),
        v = {},
        m = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        y = !m((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })),
        w = {},
        b = {}.propertyIsEnumerable,
        x = Object.getOwnPropertyDescriptor,
        E = x && !b.call({
            1: 2
        }, 1);
    w.f = E ? function (t) {
        var e = x(this, t);
        return !!e && e.enumerable
    } : b;
    var C = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        k = {}.toString,
        S = function (t) {
            return k.call(t).slice(8, -1)
        },
        L = S,
        P = "".split,
        A = m((function () {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function (t) {
            return "String" == L(t) ? P.call(t, "") : Object(t)
        } : Object,
        O = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        },
        T = A,
        j = O,
        I = function (t) {
            return T(j(t))
        },
        R = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        M = R,
        D = function (t, e) {
            if (!M(t)) return t;
            var n, r;
            if (e && "function" == typeof (n = t.toString) && !M(r = n.call(t))) return r;
            if ("function" == typeof (n = t.valueOf) && !M(r = n.call(t))) return r;
            if (!e && "function" == typeof (n = t.toString) && !M(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        _ = O,
        F = function (t) {
            return Object(_(t))
        },
        B = F,
        q = {}.hasOwnProperty,
        N = Object.hasOwn || function (t, e) {
            return q.call(B(t), e)
        },
        z = R,
        G = g.document,
        H = z(G) && z(G.createElement),
        K = function (t) {
            return H ? G.createElement(t) : {}
        },
        U = K,
        $ = !y && !m((function () {
            return 7 != Object.defineProperty(U("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })),
        Y = y,
        V = w,
        X = C,
        W = I,
        Q = D,
        J = N,
        Z = $,
        tt = Object.getOwnPropertyDescriptor;
    v.f = Y ? tt : function (t, e) {
        if (t = W(t), e = Q(e, !0), Z) try {
            return tt(t, e)
        } catch (t) {}
        if (J(t, e)) return X(!V.f.call(t, e), t[e])
    };
    var et = {},
        nt = R,
        rt = function (t) {
            if (!nt(t)) throw TypeError(String(t) + " is not an object");
            return t
        },
        ot = y,
        it = $,
        at = rt,
        ct = D,
        st = Object.defineProperty;
    et.f = ot ? st : function (t, e, n) {
        if (at(t), e = ct(e, !0), at(n), it) try {
            return st(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    };
    var ut = et,
        lt = C,
        ft = y ? function (t, e, n) {
            return ut.f(t, e, lt(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        },
        ht = {
            exports: {}
        },
        pt = g,
        dt = ft,
        gt = function (t, e) {
            try {
                dt(pt, t, e)
            } catch (n) {
                pt[t] = e
            }
            return e
        },
        vt = gt,
        mt = "__core-js_shared__",
        yt = g[mt] || vt(mt, {}),
        wt = yt,
        bt = Function.toString;
    "function" != typeof wt.inspectSource && (wt.inspectSource = function (t) {
        return bt.call(t)
    });
    var xt = wt.inspectSource,
        Et = xt,
        Ct = g.WeakMap,
        kt = "function" == typeof Ct && /native code/.test(Et(Ct)),
        St = {
            exports: {}
        },
        Lt = yt;
    (St.exports = function (t, e) {
        return Lt[t] || (Lt[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.15.2",
        mode: "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
    var Pt, At, Ot, Tt = 0,
        jt = Math.random(),
        It = function (t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++Tt + jt).toString(36)
        },
        Rt = St.exports,
        Mt = It,
        Dt = Rt("keys"),
        _t = function (t) {
            return Dt[t] || (Dt[t] = Mt(t))
        },
        Ft = {},
        Bt = kt,
        qt = R,
        Nt = ft,
        zt = N,
        Gt = yt,
        Ht = _t,
        Kt = Ft,
        Ut = "Object already initialized",
        $t = g.WeakMap;
    if (Bt || Gt.state) {
        var Yt = Gt.state || (Gt.state = new $t),
            Vt = Yt.get,
            Xt = Yt.has,
            Wt = Yt.set;
        Pt = function (t, e) {
            if (Xt.call(Yt, t)) throw new TypeError(Ut);
            return e.facade = t, Wt.call(Yt, t, e), e
        }, At = function (t) {
            return Vt.call(Yt, t) || {}
        }, Ot = function (t) {
            return Xt.call(Yt, t)
        }
    } else {
        var Qt = Ht("state");
        Kt[Qt] = !0, Pt = function (t, e) {
            if (zt(t, Qt)) throw new TypeError(Ut);
            return e.facade = t, Nt(t, Qt, e), e
        }, At = function (t) {
            return zt(t, Qt) ? t[Qt] : {}
        }, Ot = function (t) {
            return zt(t, Qt)
        }
    }
    var Jt = {
            set: Pt,
            get: At,
            has: Ot,
            enforce: function (t) {
                return Ot(t) ? At(t) : Pt(t, {})
            },
            getterFor: function (t) {
                return function (e) {
                    var n;
                    if (!qt(e) || (n = At(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            }
        },
        Zt = g,
        te = ft,
        ee = N,
        ne = gt,
        re = xt,
        oe = Jt.get,
        ie = Jt.enforce,
        ae = String(String).split("String");
    (ht.exports = function (t, e, n, r) {
        var o, i = !!r && !!r.unsafe,
            a = !!r && !!r.enumerable,
            c = !!r && !!r.noTargetGet;
        "function" == typeof n && ("string" != typeof e || ee(n, "name") || te(n, "name", e), (o = ie(n)).source || (o.source = ae.join("string" == typeof e ? e : ""))), t !== Zt ? (i ? !c && t[e] && (a = !0) : delete t[e], a ? t[e] = n : te(t, e, n)) : a ? t[e] = n : ne(e, n)
    })(Function.prototype, "toString", (function () {
        return "function" == typeof this && oe(this).source || re(this)
    }));
    var ce = g,
        se = ce,
        ue = g,
        le = function (t) {
            return "function" == typeof t ? t : void 0
        },
        fe = function (t, e) {
            return arguments.length < 2 ? le(se[t]) || le(ue[t]) : se[t] && se[t][e] || ue[t] && ue[t][e]
        },
        he = {},
        pe = Math.ceil,
        de = Math.floor,
        ge = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? de : pe)(t)
        },
        ve = ge,
        me = Math.min,
        ye = function (t) {
            return t > 0 ? me(ve(t), 9007199254740991) : 0
        },
        we = ge,
        be = Math.max,
        xe = Math.min,
        Ee = I,
        Ce = ye,
        ke = function (t, e) {
            var n = we(t);
            return n < 0 ? be(n + e, 0) : xe(n, e)
        },
        Se = function (t) {
            return function (e, n, r) {
                var o, i = Ee(e),
                    a = Ce(i.length),
                    c = ke(r, a);
                if (t && n != n) {
                    for (; a > c;)
                        if ((o = i[c++]) != o) return !0
                } else
                    for (; a > c; c++)
                        if ((t || c in i) && i[c] === n) return t || c || 0;
                return !t && -1
            }
        },
        Le = {
            includes: Se(!0),
            indexOf: Se(!1)
        },
        Pe = N,
        Ae = I,
        Oe = Le.indexOf,
        Te = Ft,
        je = function (t, e) {
            var n, r = Ae(t),
                o = 0,
                i = [];
            for (n in r) !Pe(Te, n) && Pe(r, n) && i.push(n);
            for (; e.length > o;) Pe(r, n = e[o++]) && (~Oe(i, n) || i.push(n));
            return i
        },
        Ie = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Re = je,
        Me = Ie.concat("length", "prototype");
    he.f = Object.getOwnPropertyNames || function (t) {
        return Re(t, Me)
    };
    var De = {};
    De.f = Object.getOwnPropertySymbols;
    var _e, Fe, Be = he,
        qe = De,
        Ne = rt,
        ze = fe("Reflect", "ownKeys") || function (t) {
            var e = Be.f(Ne(t)),
                n = qe.f;
            return n ? e.concat(n(t)) : e
        },
        Ge = N,
        He = ze,
        Ke = v,
        Ue = et,
        $e = function (t, e) {
            for (var n = He(e), r = Ue.f, o = Ke.f, i = 0; i < n.length; i++) {
                var a = n[i];
                Ge(t, a) || r(t, a, o(e, a))
            }
        },
        Ye = m,
        Ve = /#|\.prototype\./,
        Xe = function (t, e) {
            var n = Qe[We(t)];
            return n == Ze || n != Je && ("function" == typeof e ? Ye(e) : !!e)
        },
        We = Xe.normalize = function (t) {
            return String(t).replace(Ve, ".").toLowerCase()
        },
        Qe = Xe.data = {},
        Je = Xe.NATIVE = "N",
        Ze = Xe.POLYFILL = "P",
        tn = Xe,
        en = g,
        nn = v.f,
        rn = ft,
        on = ht.exports,
        an = gt,
        cn = $e,
        sn = tn,
        un = function (t, e) {
            var n, r, o, i, a, c = t.target,
                s = t.global,
                u = t.stat;
            if (n = s ? en : u ? en[c] || an(c, {}) : (en[c] || {}).prototype)
                for (r in e) {
                    if (i = e[r], o = t.noTargetGet ? (a = nn(n, r)) && a.value : n[r],
                        !sn(s ? r : c + (u ? "." : "#") + r, t.forced) && void 0 !== o) {
                        if (typeof i == typeof o) continue;
                        cn(i, o)
                    }(t.sham || o && o.sham) && rn(i, "sham", !0), on(n, r, i, t)
                }
        },
        ln = fe("navigator", "userAgent") || "",
        fn = ln,
        hn = g.process,
        pn = hn && hn.versions,
        dn = pn && pn.v8;
    dn ? Fe = (_e = dn.split("."))[0] < 4 ? 1 : _e[0] + _e[1] : fn && (!(_e = fn.match(/Edge\/(\d+)/)) || _e[1] >= 74) && (_e = fn.match(/Chrome\/(\d+)/)) && (Fe = _e[1]);
    var gn, vn = Fe && +Fe,
        mn = vn,
        yn = m,
        wn = !!Object.getOwnPropertySymbols && !yn((function () {
            var t = Symbol();
            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && mn && mn < 41
        })),
        bn = wn && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        xn = S,
        En = Array.isArray || function (t) {
            return "Array" == xn(t)
        },
        Cn = je,
        kn = Ie,
        Sn = Object.keys || function (t) {
            return Cn(t, kn)
        },
        Ln = et,
        Pn = rt,
        An = Sn,
        On = y ? Object.defineProperties : function (t, e) {
            Pn(t);
            for (var n, r = An(e), o = r.length, i = 0; o > i;) Ln.f(t, n = r[i++], e[n]);
            return t
        },
        Tn = fe("document", "documentElement"),
        jn = rt,
        In = On,
        Rn = Ie,
        Mn = Ft,
        Dn = Tn,
        _n = K,
        Fn = _t("IE_PROTO"),
        Bn = function () {},
        qn = function (t) {
            return "<script>" + t + "</" + "script>"
        },
        Nn = function () {
            try {
                gn = document.domain && new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            Nn = gn ? function (t) {
                t.write(qn("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e
            }(gn) : ((e = _n("iframe")).style.display = "none", Dn.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(qn("document.F=Object")), t.close(),
                t.F);
            for (var n = Rn.length; n--;) delete Nn.prototype[Rn[n]];
            return Nn()
        };
    Mn[Fn] = !0;
    var zn = Object.create || function (t, e) {
            var n;
            return null !== t ? (Bn.prototype = jn(t), n = new Bn, Bn.prototype = null, n[Fn] = t) : n = Nn(), void 0 === e ? n : In(n, e)
        },
        Gn = {},
        Hn = I,
        Kn = he.f,
        Un = {}.toString,
        $n = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    Gn.f = function (t) {
        return $n && "[object Window]" == Un.call(t) ? function (t) {
            try {
                return Kn(t)
            } catch (t) {
                return $n.slice()
            }
        }(t) : Kn(Hn(t))
    };
    var Yn = g,
        Vn = St.exports,
        Xn = N,
        Wn = It,
        Qn = wn,
        Jn = bn,
        Zn = Vn("wks"),
        tr = Yn.Symbol,
        er = Jn ? tr : tr && tr.withoutSetter || Wn,
        nr = function (t) {
            return Xn(Zn, t) && (Qn || "string" == typeof Zn[t]) || (Qn && Xn(tr, t) ? Zn[t] = tr[t] : Zn[t] = er("Symbol." + t)), Zn[t]
        },
        rr = {},
        or = nr;
    rr.f = or;
    var ir = ce,
        ar = N,
        cr = rr,
        sr = et.f,
        ur = et.f,
        lr = N,
        fr = nr("toStringTag"),
        hr = function (t, e, n) {
            t && !lr(t = n ? t : t.prototype, fr) && ur(t, fr, {
                configurable: !0,
                value: e
            })
        },
        pr = function (t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        },
        dr = pr,
        gr = function (t, e, n) {
            if (dr(t), void 0 === e) return t;
            switch (n) {
                case 0:
                    return function () {
                        return t.call(e)
                    };
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        },
        vr = R,
        mr = En,
        yr = nr("species"),
        wr = function (t, e) {
            var n;
            return mr(t) && ("function" != typeof (n = t.constructor) || n !== Array && !mr(n.prototype) ? vr(n) && null === (n = n[yr]) && (n = void 0) : n = void 0),
                new(void 0 === n ? Array : n)(0 === e ? 0 : e)
        },
        br = gr,
        xr = A,
        Er = F,
        Cr = ye,
        kr = wr,
        Sr = [].push,
        Lr = function (t) {
            var e = 1 == t,
                n = 2 == t,
                r = 3 == t,
                o = 4 == t,
                i = 6 == t,
                a = 7 == t,
                c = 5 == t || i;
            return function (s, u, l, f) {
                for (var h, p, d = Er(s), g = xr(d), v = br(u, l, 3), m = Cr(g.length), y = 0, w = f || kr, b = e ? w(s, m) : n || a ? w(s, 0) : void 0; m > y; y++)
                    if ((c || y in g) && (p = v(h = g[y], y, d), t))
                        if (e) b[y] = p;
                        else if (p) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return y;
                    case 2:
                        Sr.call(b, h)
                } else switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        Sr.call(b, h)
                }
                return i ? -1 : r || o ? o : b
            }
        },
        Pr = {
            forEach: Lr(0),
            map: Lr(1),
            filter: Lr(2),
            some: Lr(3),
            every: Lr(4),
            find: Lr(5),
            findIndex: Lr(6),
            filterOut: Lr(7)
        },
        Ar = un,
        Or = g,
        Tr = fe,
        jr = y,
        Ir = wn,
        Rr = bn,
        Mr = m,
        Dr = N,
        _r = En,
        Fr = R,
        Br = rt,
        qr = F,
        Nr = I,
        zr = D,
        Gr = C,
        Hr = zn,
        Kr = Sn,
        Ur = he,
        $r = Gn,
        Yr = De,
        Vr = v,
        Xr = et,
        Wr = w,
        Qr = ft,
        Jr = ht.exports,
        Zr = St.exports,
        to = Ft,
        eo = It,
        no = nr,
        ro = rr,
        oo = function (t) {
            var e = ir.Symbol || (ir.Symbol = {});
            ar(e, t) || sr(e, t, {
                value: cr.f(t)
            })
        },
        io = hr,
        ao = Jt,
        co = Pr.forEach,
        so = _t("hidden"),
        uo = "Symbol",
        lo = no("toPrimitive"),
        fo = ao.set,
        ho = ao.getterFor(uo),
        po = Object.prototype,
        go = Or.Symbol,
        vo = Tr("JSON", "stringify"),
        mo = Vr.f,
        yo = Xr.f,
        wo = $r.f,
        bo = Wr.f,
        xo = Zr("symbols"),
        Eo = Zr("op-symbols"),
        Co = Zr("string-to-symbol-registry"),
        ko = Zr("symbol-to-string-registry"),
        So = Zr("wks"),
        Lo = Or.QObject,
        Po = !Lo || !Lo.prototype || !Lo.prototype.findChild,
        Ao = jr && Mr((function () {
            return 7 != Hr(yo({}, "a", {
                get: function () {
                    return yo(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function (t, e, n) {
            var r = mo(po, e);
            r && delete po[e], yo(t, e, n), r && t !== po && yo(po, e, r)
        } : yo,
        Oo = function (t, e) {
            var n = xo[t] = Hr(go.prototype);
            return fo(n, {
                type: uo,
                tag: t,
                description: e
            }), jr || (n.description = e), n
        },
        To = Rr ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return Object(t) instanceof go
        },
        jo = function (t, e, n) {
            t === po && jo(Eo, e, n), Br(t);
            var r = zr(e, !0);
            return Br(n), Dr(xo, r) ? (n.enumerable ? (Dr(t, so) && t[so][r] && (t[so][r] = !1), n = Hr(n, {
                enumerable: Gr(0, !1)
            })) : (Dr(t, so) || yo(t, so, Gr(1, {})), t[so][r] = !0), Ao(t, r, n)) : yo(t, r, n)
        },
        Io = function (t, e) {
            Br(t);
            var n = Nr(e),
                r = Kr(n).concat(_o(n));
            return co(r, (function (e) {
                jr && !Ro.call(n, e) || jo(t, e, n[e])
            })), t
        },
        Ro = function (t) {
            var e = zr(t, !0),
                n = bo.call(this, e);
            return !(this === po && Dr(xo, e) && !Dr(Eo, e)) && (!(n || !Dr(this, e) || !Dr(xo, e) || Dr(this, so) && this[so][e]) || n)
        },
        Mo = function (t, e) {
            var n = Nr(t),
                r = zr(e, !0);
            if (n !== po || !Dr(xo, r) || Dr(Eo, r)) {
                var o = mo(n, r);
                return !o || !Dr(xo, r) || Dr(n, so) && n[so][r] || (o.enumerable = !0), o
            }
        },
        Do = function (t) {
            var e = wo(Nr(t)),
                n = [];
            return co(e, (function (t) {
                Dr(xo, t) || Dr(to, t) || n.push(t)
            })), n
        },
        _o = function (t) {
            var e = t === po,
                n = wo(e ? Eo : Nr(t)),
                r = [];
            return co(n, (function (t) {
                !Dr(xo, t) || e && !Dr(po, t) || r.push(xo[t])
            })), r
        };
    (Ir || (Jr((go = function () {
        if (this instanceof go) throw TypeError("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            e = eo(t),
            n = function (t) {
                this === po && n.call(Eo, t), Dr(this, so) && Dr(this[so], e) && (this[so][e] = !1), Ao(this, e, Gr(1, t))
            };
        return jr && Po && Ao(po, e, {
            configurable: !0,
            set: n
        }), Oo(e, t)
    }).prototype, "toString", (function () {
        return ho(this).tag
    })), Jr(go, "withoutSetter", (function (t) {
        return Oo(eo(t), t)
    })), Wr.f = Ro, Xr.f = jo, Vr.f = Mo, Ur.f = $r.f = Do, Yr.f = _o, ro.f = function (t) {
        return Oo(no(t), t)
    }, jr && (yo(go.prototype, "description", {
        configurable: !0,
        get: function () {
            return ho(this).description
        }
    }), Jr(po, "propertyIsEnumerable", Ro, {
        unsafe: !0
    }))), Ar({
        global: !0,
        wrap: !0,
        forced: !Ir,
        sham: !Ir
    }, {
        Symbol: go
    }), co(Kr(So), (function (t) {
        oo(t)
    })), Ar({
        target: uo,
        stat: !0,
        forced: !Ir
    }, {
        for: function (t) {
            var e = String(t);
            if (Dr(Co, e)) return Co[e];
            var n = go(e);
            return Co[e] = n, ko[n] = e, n
        },
        keyFor: function (t) {
            if (!To(t)) throw TypeError(t + " is not a symbol");
            if (Dr(ko, t)) return ko[t]
        },
        useSetter: function () {
            Po = !0
        },
        useSimple: function () {
            Po = !1
        }
    }), Ar({
        target: "Object",
        stat: !0,
        forced: !Ir,
        sham: !jr
    }, {
        create: function (t, e) {
            return void 0 === e ? Hr(t) : Io(Hr(t), e)
        },
        defineProperty: jo,
        defineProperties: Io,
        getOwnPropertyDescriptor: Mo
    }), Ar({
        target: "Object",
        stat: !0,
        forced: !Ir
    }, {
        getOwnPropertyNames: Do,
        getOwnPropertySymbols: _o
    }), Ar({
        target: "Object",
        stat: !0,
        forced: Mr((function () {
            Yr.f(1)
        }))
    }, {
        getOwnPropertySymbols: function (t) {
            return Yr.f(qr(t))
        }
    }), vo) && Ar({
        target: "JSON",
        stat: !0,
        forced: !Ir || Mr((function () {
            var t = go();
            return "[null]" != vo([t]) || "{}" != vo({
                a: t
            }) || "{}" != vo(Object(t))
        }))
    }, {
        stringify: function (t, e, n) {
            for (var r, o = [t], i = 1; arguments.length > i;) o.push(arguments[i++]);
            if (r = e, (Fr(e) || void 0 !== t) && !To(t)) return _r(e) || (e = function (t, e) {
                if ("function" == typeof r && (e = r.call(this, t, e)), !To(e)) return e
            }), o[1] = e, vo.apply(null, o)
        }
    });
    go.prototype[lo] || Qr(go.prototype, lo, go.prototype.valueOf), io(go, uo), to[so] = !0;
    var Fo = un,
        Bo = y,
        qo = g,
        No = N,
        zo = R,
        Go = et.f,
        Ho = $e,
        Ko = qo.Symbol;
    if (Bo && "function" == typeof Ko && (!("description" in Ko.prototype) || void 0 !== Ko().description)) {
        var Uo = {},
            $o = function () {
                var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    e = this instanceof $o ? new Ko(t) : void 0 === t ? Ko() : Ko(t);
                return "" === t && (Uo[e] = !0), e
            };
        Ho($o, Ko);
        var Yo = $o.prototype = Ko.prototype;
        Yo.constructor = $o;
        var Vo = Yo.toString,
            Xo = "Symbol(test)" == String(Ko("test")),
            Wo = /^Symbol\((.*)\)[^)]+$/;
        Go(Yo, "description", {
            configurable: !0,
            get: function () {
                var t = zo(this) ? this.valueOf() : this,
                    e = Vo.call(t);
                if (No(Uo, t)) return "";
                var n = Xo ? e.slice(7, -1) : e.replace(Wo, "$1");
                return "" === n ? void 0 : n
            }
        }), Fo({
            global: !0,
            forced: !0
        }, {
            Symbol: $o
        })
    }
    var Qo = {};
    Qo[nr("toStringTag")] = "z";
    var Jo = "[object z]" === String(Qo),
        Zo = Jo,
        ti = S,
        ei = nr("toStringTag"),
        ni = "Arguments" == ti(function () {
            return arguments
        }()),
        ri = Zo ? ti : function (t) {
            var e, n, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), ei)) ? n : ni ? ti(e) : "Object" == (r = ti(e)) && "function" == typeof e.callee ? "Arguments" : r
        },
        oi = ri,
        ii = Jo ? {}.toString : function () {
            return "[object " + oi(this) + "]"
        },
        ai = Jo,
        ci = ht.exports,
        si = ii;
    ai || ci(Object.prototype, "toString", si, {
        unsafe: !0
    });
    var ui = D,
        li = et,
        fi = C,
        hi = m,
        pi = vn,
        di = nr("species"),
        gi = function (t) {
            return pi >= 51 || !hi((function () {
                var e = [];
                return (e.constructor = {})[di] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            }))
        },
        vi = un,
        mi = m,
        yi = En,
        wi = R,
        bi = F,
        xi = ye,
        Ei = function (t, e, n) {
            var r = ui(e);
            r in t ? li.f(t, r, fi(0, n)) : t[r] = n
        },
        Ci = wr,
        ki = gi,
        Si = vn,
        Li = nr("isConcatSpreadable"),
        Pi = 9007199254740991,
        Ai = "Maximum allowed index exceeded",
        Oi = Si >= 51 || !mi((function () {
            var t = [];
            return t[Li] = !1, t.concat()[0] !== t
        })),
        Ti = ki("concat"),
        ji = function (t) {
            if (!wi(t)) return !1;
            var e = t[Li];
            return void 0 !== e ? !!e : yi(t)
        };
    vi({
        target: "Array",
        proto: !0,
        forced: !Oi || !Ti
    }, {
        concat: function (t) {
            var e, n, r, o, i, a = bi(this),
                c = Ci(a, 0),
                s = 0;
            for (e = -1, r = arguments.length; e < r; e++)
                if (ji(i = -1 === e ? a : arguments[e])) {
                    if (s + (o = xi(i.length)) > Pi) throw TypeError(Ai);
                    for (n = 0; n < o; n++, s++) n in i && Ei(c, s, i[n])
                } else {
                    if (s >= Pi) throw TypeError(Ai);
                    Ei(c, s++, i)
                } return c.length = s, c
        }
    });
    var Ii = rt,
        Ri = {},
        Mi = m,
        Di = function (t, e) {
            return RegExp(t, e)
        };
    Ri.UNSUPPORTED_Y = Mi((function () {
        var t = Di("a", "y");
        return t.lastIndex = 2, null != t.exec("abcd")
    })), Ri.BROKEN_CARET = Mi((function () {
        var t = Di("^r", "gy");
        return t.lastIndex = 2, null != t.exec("str")
    }));
    var _i, Fi, Bi = m((function () {
            var t = RegExp(".", "string".charAt(0));
            return !(t.dotAll && t.exec("\n") && "s" === t.flags)
        })),
        qi = m((function () {
            var t = RegExp("(?<a>b)", "string".charAt(5));
            return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
        })),
        Ni = function () {
            var t = Ii(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        },
        zi = Ri,
        Gi = St.exports,
        Hi = zn,
        Ki = Jt.get,
        Ui = Bi,
        $i = qi,
        Yi = RegExp.prototype.exec,
        Vi = Gi("native-string-replace", String.prototype.replace),
        Xi = Yi,
        Wi = (_i = /a/, Fi = /b*/g, Yi.call(_i, "a"), Yi.call(Fi, "a"), 0 !== _i.lastIndex || 0 !== Fi.lastIndex),
        Qi = zi.UNSUPPORTED_Y || zi.BROKEN_CARET,
        Ji = void 0 !== /()??/.exec("")[1];
    (Wi || Ji || Qi || Ui || $i) && (Xi = function (t) {
        var e, n, r, o, i, a, c, s = this,
            u = Ki(s),
            l = u.raw;
        if (l) return l.lastIndex = s.lastIndex, e = Xi.call(l, t), s.lastIndex = l.lastIndex, e;
        var f = u.groups,
            h = Qi && s.sticky,
            p = Ni.call(s),
            d = s.source,
            g = 0,
            v = t;
        if (h && (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"), v = String(t).slice(s.lastIndex), s.lastIndex > 0 && (!s.multiline || s.multiline && "\n" !== t[s.lastIndex - 1]) && (d = "(?: " + d + ")", v = " " + v, g++), n = new RegExp("^(?:" + d + ")", p)), Ji && (n = new RegExp("^" + d + "$(?!\\s)", p)), Wi && (r = s.lastIndex), o = Yi.call(h ? n : s, v), h ? o ? (o.input = o.input.slice(g), o[0] = o[0].slice(g), o.index = s.lastIndex,
                s.lastIndex += o[0].length) : s.lastIndex = 0 : Wi && o && (s.lastIndex = s.global ? o.index + o[0].length : r), Ji && o && o.length > 1 && Vi.call(o[0], n, (function () {
                for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (o[i] = void 0)
            })), o && f)
            for (o.groups = a = Hi(null), i = 0; i < f.length; i++) a[(c = f[i])[0]] = o[c[1]];
        return o
    });
    var Zi = Xi;
    un({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Zi
    }, {
        exec: Zi
    });
    var ta = ht.exports,
        ea = Zi,
        na = m,
        ra = nr,
        oa = ft,
        ia = ra("species"),
        aa = RegExp.prototype,
        ca = function (t, e, n, r) {
            var o = ra(t),
                i = !na((function () {
                    var e = {};
                    return e[o] = function () {
                        return 7
                    }, 7 != "" [t](e)
                })),
                a = i && !na((function () {
                    var e = !1,
                        n = /a/;
                    return "split" === t && ((n = {}).constructor = {}, n.constructor[ia] = function () {
                        return n
                    }, n.flags = "", n[o] = /./ [o]), n.exec = function () {
                        return e = !0, null
                    }, n[o](""), !e
                }));
            if (!i || !a || n) {
                var c = /./ [o],
                    s = e(o, "" [t], (function (t, e, n, r, o) {
                        var a = e.exec;
                        return a === ea || a === aa.exec ? i && !o ? {
                            done: !0,
                            value: c.call(e, n, r)
                        } : {
                            done: !0,
                            value: t.call(n, e, r)
                        } : {
                            done: !1
                        }
                    }));
                ta(String.prototype, t, s[0]), ta(aa, o, s[1])
            }
            r && oa(aa[o], "sham", !0)
        },
        sa = ge,
        ua = O,
        la = function (t) {
            return function (e, n) {
                var r, o, i = String(ua(e)),
                    a = sa(n),
                    c = i.length;
                return a < 0 || a >= c ? t ? "" : void 0 : (r = i.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === c || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? t ? i.charAt(a) : r : t ? i.slice(a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536
            }
        },
        fa = {
            codeAt: la(!1),
            charAt: la(!0)
        },
        ha = fa.charAt,
        pa = function (t, e, n) {
            return e + (n ? ha(t, e).length : 1)
        },
        da = F,
        ga = Math.floor,
        va = "".replace,
        ma = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        ya = /\$([$&'`]|\d{1,2})/g,
        wa = S,
        ba = Zi,
        xa = function (t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                var r = n.call(t, e);
                if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
                return r
            }
            if ("RegExp" !== wa(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return ba.call(t, e)
        },
        Ea = ca,
        Ca = m,
        ka = rt,
        Sa = ye,
        La = ge,
        Pa = O,
        Aa = pa,
        Oa = function (t, e, n, r, o, i) {
            var a = n + t.length,
                c = r.length,
                s = ya;
            return void 0 !== o && (o = da(o), s = ma), va.call(i, s, (function (i, s) {
                var u;
                switch (s.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, n);
                    case "'":
                        return e.slice(a);
                    case "<":
                        u = o[s.slice(1, -1)];
                        break;
                    default:
                        var l = +s;
                        if (0 === l) return i;
                        if (l > c) {
                            var f = ga(l / 10);
                            return 0 === f ? i : f <= c ? void 0 === r[f - 1] ? s.charAt(1) : r[f - 1] + s.charAt(1) : i
                        }
                        u = r[l - 1]
                }
                return void 0 === u ? "" : u
            }))
        },
        Ta = xa,
        ja = nr("replace"),
        Ia = Math.max,
        Ra = Math.min,
        Ma = "$0" === "a".replace(/./, "$0"),
        Da = !!/./ [ja] && "" === /./ [ja]("a", "$0");
    Ea("replace", (function (t, e, n) {
        var r = Da ? "$" : "$0";
        return [function (t, n) {
            var r = Pa(this),
                o = null == t ? void 0 : t[ja];
            return void 0 !== o ? o.call(t, r, n) : e.call(String(r), t, n)
        }, function (t, o) {
            if ("string" == typeof o && -1 === o.indexOf(r) && -1 === o.indexOf("$<")) {
                var i = n(e, this, t, o);
                if (i.done) return i.value
            }
            var a = ka(this),
                c = String(t),
                s = "function" == typeof o;
            s || (o = String(o));
            var u = a.global;
            if (u) {
                var l = a.unicode;
                a.lastIndex = 0
            }
            for (var f = [];;) {
                var h = Ta(a, c);
                if (null === h) break;
                if (f.push(h), !u) break;
                "" === String(h[0]) && (a.lastIndex = Aa(c, Sa(a.lastIndex), l))
            }
            for (var p, d = "", g = 0, v = 0; v < f.length; v++) {
                h = f[v];
                for (var m = String(h[0]), y = Ia(Ra(La(h.index), c.length), 0), w = [], b = 1; b < h.length; b++) w.push(void 0 === (p = h[b]) ? p : String(p));
                var x = h.groups;
                if (s) {
                    var E = [m].concat(w, y, c);
                    void 0 !== x && E.push(x);
                    var C = String(o.apply(void 0, E))
                } else C = Oa(m, c, y, w, x, o);
                y >= g && (d += c.slice(g, y) + C, g = y + m.length)
            }
            return d + c.slice(g)
        }]
    }), !!Ca((function () {
        var t = /./;
        return t.exec = function () {
            var t = [];
            return t.groups = {
                a: "7"
            }, t
        }, "7" !== "".replace(t, "$<a>")
    })) || !Ma || Da);
    var _a = m,
        Fa = un,
        Ba = I,
        qa = [].join,
        Na = A != Object,
        za = function (t, e) {
            var n = [][t];
            return !!n && _a((function () {
                n.call(null, e || function () {
                    throw 1
                }, 1)
            }))
        }("join", ",");
    Fa({
        target: "Array",
        proto: !0,
        forced: Na || !za
    }, {
        join: function (t) {
            return qa.call(Ba(this), void 0 === t ? "," : t)
        }
    });
    var Ga = Pr.map;
    un({
        target: "Array",
        proto: !0,
        forced: !gi("map")
    }, {
        map: function (t) {
            return Ga(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ha = R,
        Ka = S,
        Ua = nr("match"),
        $a = rt,
        Ya = pr,
        Va = nr("species"),
        Xa = function (t, e) {
            var n, r = $a(t).constructor;
            return void 0 === r || null == (n = $a(r)[Va]) ? e : Ya(n)
        },
        Wa = ca,
        Qa = function (t) {
            var e;
            return Ha(t) && (void 0 !== (e = t[Ua]) ? !!e : "RegExp" == Ka(t))
        },
        Ja = rt,
        Za = O,
        tc = Xa,
        ec = pa,
        nc = ye,
        rc = xa,
        oc = Zi,
        ic = m,
        ac = Ri.UNSUPPORTED_Y,
        cc = [].push,
        sc = Math.min,
        uc = 4294967295;
    Wa("split", (function (t, e, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
            var r = String(Za(this)),
                o = void 0 === n ? uc : n >>> 0;
            if (0 === o) return [];
            if (void 0 === t) return [r];
            if (!Qa(t)) return e.call(r, t, o);
            for (var i, a, c, s = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, f = new RegExp(t.source, u + "g");
                (i = oc.call(f, r)) && !((a = f.lastIndex) > l && (s.push(r.slice(l, i.index)), i.length > 1 && i.index < r.length && cc.apply(s, i.slice(1)), c = i[0].length, l = a, s.length >= o));) f.lastIndex === i.index && f.lastIndex++;
            return l === r.length ? !c && f.test("") || s.push("") : s.push(r.slice(l)), s.length > o ? s.slice(0, o) : s
        } : "0".split(void 0, 0).length ? function (t, n) {
            return void 0 === t && 0 === n ? [] : e.call(this, t, n)
        } : e, [function (e, n) {
            var o = Za(this),
                i = null == e ? void 0 : e[t];
            return void 0 !== i ? i.call(e, o, n) : r.call(String(o), e, n)
        }, function (t, o) {
            var i = n(r, this, t, o, r !== e);
            if (i.done) return i.value;
            var a = Ja(this),
                c = String(t),
                s = tc(a, RegExp),
                u = a.unicode,
                l = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (ac ? "g" : "y"),
                f = new s(ac ? "^(?:" + a.source + ")" : a, l),
                h = void 0 === o ? uc : o >>> 0;
            if (0 === h) return [];
            if (0 === c.length) return null === rc(f, c) ? [c] : [];
            for (var p = 0, d = 0, g = []; d < c.length;) {
                f.lastIndex = ac ? 0 : d;
                var v, m = rc(f, ac ? c.slice(d) : c);
                if (null === m || (v = sc(nc(f.lastIndex + (ac ? d : 0)), c.length)) === p) d = ec(c, d, u);
                else {
                    if (g.push(c.slice(p, d)), g.length === h) return g;
                    for (var y = 1; y <= m.length - 1; y++)
                        if (g.push(m[y]), g.length === h) return g;
                    d = p = v
                }
            }
            return g.push(c.slice(p)), g
        }]
    }), !!ic((function () {
        var t = /(?:)/,
            e = t.exec;
        t.exec = function () {
            return e.apply(this, arguments)
        };
        var n = "ab".split(t);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
    })), ac);
    var lc = F,
        fc = Sn;
    un({
        target: "Object",
        stat: !0,
        forced: m((function () {
            fc(1)
        }))
    }, {
        keys: function (t) {
            return fc(lc(t))
        }
    });
    var hc = y,
        pc = et.f,
        dc = Function.prototype,
        gc = dc.toString,
        vc = /^\s*function ([^ (]*)/,
        mc = "name";
    hc && !(mc in dc) && pc(dc, mc, {
        configurable: !0,
        get: function () {
            try {
                return gc.call(this).match(vc)[1]
            } catch (t) {
                return ""
            }
        }
    });
    var yc = g.Promise,
        wc = ht.exports,
        bc = R,
        xc = rt,
        Ec = function (t) {
            if (!bc(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
            return t
        },
        Cc = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, e = !1,
                n = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
            } catch (t) {}
            return function (n, r) {
                return xc(n), Ec(r), e ? t.call(n, r) : n.__proto__ = r, n
            }
        }() : void 0),
        kc = fe,
        Sc = et,
        Lc = y,
        Pc = nr("species"),
        Ac = {},
        Oc = Ac,
        Tc = nr("iterator"),
        jc = Array.prototype,
        Ic = ri,
        Rc = Ac,
        Mc = nr("iterator"),
        Dc = rt,
        _c = rt,
        Fc = function (t) {
            return void 0 !== t && (Oc.Array === t || jc[Tc] === t)
        },
        Bc = ye,
        qc = gr,
        Nc = function (t) {
            if (null != t) return t[Mc] || t["@@iterator"] || Rc[Ic(t)]
        },
        zc = function (t) {
            var e = t.return;
            if (void 0 !== e) return Dc(e.call(t)).value
        },
        Gc = function (t, e) {
            this.stopped = t, this.result = e
        },
        Hc = nr("iterator"),
        Kc = !1;
    try {
        var Uc = 0,
            $c = {
                next: function () {
                    return {
                        done: !!Uc++
                    }
                },
                return: function () {
                    Kc = !0
                }
            };
        $c[Hc] = function () {
            return this
        }, Array.from($c, (function () {
            throw 2
        }))
    } catch (t) {}
    var Yc, Vc, Xc, Wc = /(?:iphone|ipod|ipad).*applewebkit/i.test(ln),
        Qc = "process" == S(g.process),
        Jc = g,
        Zc = m,
        ts = gr,
        es = Tn,
        ns = K,
        rs = Wc,
        os = Qc,
        is = Jc.location,
        as = Jc.setImmediate,
        cs = Jc.clearImmediate,
        ss = Jc.process,
        us = Jc.MessageChannel,
        ls = Jc.Dispatch,
        fs = 0,
        hs = {},
        ps = "onreadystatechange",
        ds = function (t) {
            if (hs.hasOwnProperty(t)) {
                var e = hs[t];
                delete hs[t], e()
            }
        },
        gs = function (t) {
            return function () {
                ds(t)
            }
        },
        vs = function (t) {
            ds(t.data)
        },
        ms = function (t) {
            Jc.postMessage(t + "", is.protocol + "//" + is.host)
        };
    as && cs || (as = function (t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return hs[++fs] = function () {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e)
        }, Yc(fs), fs
    }, cs = function (t) {
        delete hs[t]
    }, os ? Yc = function (t) {
        ss.nextTick(gs(t))
    } : ls && ls.now ? Yc = function (t) {
        ls.now(gs(t))
    } : us && !rs ? (Xc = (Vc = new us).port2, Vc.port1.onmessage = vs, Yc = ts(Xc.postMessage, Xc, 1)) : Jc.addEventListener && "function" == typeof postMessage && !Jc.importScripts && is && "file:" !== is.protocol && !Zc(ms) ? (Yc = ms,
        Jc.addEventListener("message", vs, !1)) : Yc = ps in ns("script") ? function (t) {
        es.appendChild(ns("script")).onreadystatechange = function () {
            es.removeChild(this), ds(t)
        }
    } : function (t) {
        setTimeout(gs(t), 0)
    });
    var ys, ws, bs, xs, Es, Cs, ks, Ss, Ls = {
            set: as,
            clear: cs
        },
        Ps = /web0s(?!.*chrome)/i.test(ln),
        As = g,
        Os = v.f,
        Ts = Ls.set,
        js = Wc,
        Is = Ps,
        Rs = Qc,
        Ms = As.MutationObserver || As.WebKitMutationObserver,
        Ds = As.document,
        _s = As.process,
        Fs = As.Promise,
        Bs = Os(As, "queueMicrotask"),
        qs = Bs && Bs.value;
    qs || (ys = function () {
        var t, e;
        for (Rs && (t = _s.domain) && t.exit(); ws;) {
            e = ws.fn, ws = ws.next;
            try {
                e()
            } catch (t) {
                throw ws ? xs() : bs = void 0, t
            }
        }
        bs = void 0, t && t.enter()
    }, js || Rs || Is || !Ms || !Ds ? Fs && Fs.resolve ? ((ks = Fs.resolve(void 0)).constructor = Fs, Ss = ks.then, xs = function () {
        Ss.call(ks, ys)
    }) : xs = Rs ? function () {
        _s.nextTick(ys)
    } : function () {
        Ts.call(As, ys)
    } : (Es = !0, Cs = Ds.createTextNode(""), new Ms(ys).observe(Cs, {
        characterData: !0
    }), xs = function () {
        Cs.data = Es = !Es
    }));
    var Ns = qs || function (t) {
            var e = {
                fn: t,
                next: void 0
            };
            bs && (bs.next = e), ws || (ws = e, xs()), bs = e
        },
        zs = {},
        Gs = pr,
        Hs = function (t) {
            var e, n;
            this.promise = new t((function (t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            })), this.resolve = Gs(e), this.reject = Gs(n)
        };
    zs.f = function (t) {
        return new Hs(t)
    };
    var Ks, Us, $s, Ys, Vs = rt,
        Xs = R,
        Ws = zs,
        Qs = function (t, e) {
            if (Vs(t), Xs(e) && e.constructor === t) return e;
            var n = Ws.f(t);
            return (0, n.resolve)(e), n.promise
        },
        Js = g,
        Zs = "object" == typeof window,
        tu = un,
        eu = g,
        nu = fe,
        ru = yc,
        ou = ht.exports,
        iu = function (t, e, n) {
            for (var r in e) wc(t, r, e[r], n);
            return t
        },
        au = Cc,
        cu = hr,
        su = function (t) {
            var e = kc(t),
                n = Sc.f;
            Lc && e && !e[Pc] && n(e, Pc, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        },
        uu = R,
        lu = pr,
        fu = function (t, e, n) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return t
        },
        hu = xt,
        pu = function (t, e, n) {
            var r, o, i, a, c, s, u, l = n && n.that,
                f = !(!n || !n.AS_ENTRIES),
                h = !(!n || !n.IS_ITERATOR),
                p = !(!n || !n.INTERRUPTED),
                d = qc(e, l, 1 + f + p),
                g = function (t) {
                    return r && zc(r), new Gc(!0, t)
                },
                v = function (t) {
                    return f ? (_c(t), p ? d(t[0], t[1], g) : d(t[0], t[1])) : p ? d(t, g) : d(t)
                };
            if (h) r = t;
            else {
                if ("function" != typeof (o = Nc(t))) throw TypeError("Target is not iterable");
                if (Fc(o)) {
                    for (i = 0, a = Bc(t.length); a > i; i++)
                        if ((c = v(t[i])) && c instanceof Gc) return c;
                    return new Gc(!1)
                }
                r = o.call(t)
            }
            for (s = r.next; !(u = s.call(r)).done;) {
                try {
                    c = v(u.value)
                } catch (t) {
                    throw zc(r), t
                }
                if ("object" == typeof c && c && c instanceof Gc) return c
            }
            return new Gc(!1)
        },
        du = function (t, e) {
            if (!e && !Kc) return !1;
            var n = !1;
            try {
                var r = {};
                r[Hc] = function () {
                    return {
                        next: function () {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, t(r)
            } catch (t) {}
            return n
        },
        gu = Xa,
        vu = Ls.set,
        mu = Ns,
        yu = Qs,
        wu = function (t, e) {
            var n = Js.console;
            n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
        },
        bu = zs,
        xu = function (t) {
            try {
                return {
                    error: !1,
                    value: t()
                }
            } catch (t) {
                return {
                    error: !0,
                    value: t
                }
            }
        },
        Eu = Jt,
        Cu = tn,
        ku = Zs,
        Su = Qc,
        Lu = vn,
        Pu = nr("species"),
        Au = "Promise",
        Ou = Eu.get,
        Tu = Eu.set,
        ju = Eu.getterFor(Au),
        Iu = ru && ru.prototype,
        Ru = ru,
        Mu = Iu,
        Du = eu.TypeError,
        _u = eu.document,
        Fu = eu.process,
        Bu = bu.f,
        qu = Bu,
        Nu = !!(_u && _u.createEvent && eu.dispatchEvent),
        zu = "function" == typeof PromiseRejectionEvent,
        Gu = "unhandledrejection",
        Hu = !1,
        Ku = Cu(Au, (function () {
            var t = hu(Ru),
                e = t !== String(Ru);
            if (!e && 66 === Lu) return !0;
            if (Lu >= 51 && /native code/.test(t)) return !1;
            var n = new Ru((function (t) {
                    t(1)
                })),
                r = function (t) {
                    t((function () {}), (function () {}))
                };
            return (n.constructor = {})[Pu] = r, !(Hu = n.then((function () {})) instanceof r) || !e && ku && !zu
        })),
        Uu = Ku || !du((function (t) {
            Ru.all(t).catch((function () {}))
        })),
        $u = function (t) {
            var e;
            return !(!uu(t) || "function" != typeof (e = t.then)) && e
        },
        Yu = function (t, e) {
            if (!t.notified) {
                t.notified = !0;
                var n = t.reactions;
                mu((function () {
                    for (var r = t.value, o = 1 == t.state, i = 0; n.length > i;) {
                        var a, c, s, u = n[i++],
                            l = o ? u.ok : u.fail,
                            f = u.resolve,
                            h = u.reject,
                            p = u.domain;
                        try {
                            l ? (o || (2 === t.rejection && Qu(t), t.rejection = 1),
                                !0 === l ? a = r : (p && p.enter(), a = l(r), p && (p.exit(), s = !0)), a === u.promise ? h(Du("Promise-chain cycle")) : (c = $u(a)) ? c.call(a, f, h) : f(a)) : h(r)
                        } catch (t) {
                            p && !s && p.exit(), h(t)
                        }
                    }
                    t.reactions = [], t.notified = !1, e && !t.rejection && Xu(t)
                }))
            }
        },
        Vu = function (t, e, n) {
            var r, o;
            Nu ? ((r = _u.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), eu.dispatchEvent(r)) : r = {
                promise: e,
                reason: n
            }, !zu && (o = eu["on" + t]) ? o(r) : t === Gu && wu("Unhandled promise rejection", n)
        },
        Xu = function (t) {
            vu.call(eu, (function () {
                var e, n = t.facade,
                    r = t.value;
                if (Wu(t) && (e = xu((function () {
                        Su ? Fu.emit("unhandledRejection", r, n) : Vu(Gu, n, r)
                    })), t.rejection = Su || Wu(t) ? 2 : 1, e.error)) throw e.value
            }))
        },
        Wu = function (t) {
            return 1 !== t.rejection && !t.parent
        },
        Qu = function (t) {
            vu.call(eu, (function () {
                var e = t.facade;
                Su ? Fu.emit("rejectionHandled", e) : Vu("rejectionhandled", e, t.value)
            }))
        },
        Ju = function (t, e, n) {
            return function (r) {
                t(e, r, n)
            }
        },
        Zu = function (t, e, n) {
            t.done || (t.done = !0, n && (t = n), t.value = e, t.state = 2, Yu(t, !0))
        },
        tl = function (t, e, n) {
            if (!t.done) {
                t.done = !0, n && (t = n);
                try {
                    if (t.facade === e) throw Du("Promise can't be resolved itself");
                    var r = $u(e);
                    r ? mu((function () {
                        var n = {
                            done: !1
                        };
                        try {
                            r.call(e, Ju(tl, n, t), Ju(Zu, n, t))
                        } catch (e) {
                            Zu(n, e, t)
                        }
                    })) : (t.value = e, t.state = 1, Yu(t, !1))
                } catch (e) {
                    Zu({
                        done: !1
                    }, e, t)
                }
            }
        };
    if (Ku && (Mu = (Ru = function (t) {
            fu(this, Ru, Au), lu(t), Ks.call(this);
            var e = Ou(this);
            try {
                t(Ju(tl, e), Ju(Zu, e))
            } catch (t) {
                Zu(e, t)
            }
        }).prototype, (Ks = function (t) {
            Tu(this, {
                type: Au,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
            })
        }).prototype = iu(Mu, {
            then: function (t, e) {
                var n = ju(this),
                    r = Bu(gu(this, Ru));
                return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = Su ? Fu.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && Yu(n, !1), r.promise
            },
            catch: function (t) {
                return this.then(void 0, t)
            }
        }), Us = function () {
            var t = new Ks,
                e = Ou(t);
            this.promise = t, this.resolve = Ju(tl, e), this.reject = Ju(Zu, e)
        }, bu.f = Bu = function (t) {
            return t === Ru || t === $s ? new Us(t) : qu(t)
        }, "function" == typeof ru && Iu !== Object.prototype)) {
        Ys = Iu.then,
            Hu || (ou(Iu, "then", (function (t, e) {
                var n = this;
                return new Ru((function (t, e) {
                    Ys.call(n, t, e)
                })).then(t, e)
            }), {
                unsafe: !0
            }), ou(Iu, "catch", Mu.catch, {
                unsafe: !0
            }));
        try {
            delete Iu.constructor
        } catch (t) {}
        au && au(Iu, Mu)
    }
    tu({
        global: !0,
        wrap: !0,
        forced: Ku
    }, {
        Promise: Ru
    }), cu(Ru, Au, !1), su(Au), $s = nu(Au), tu({
        target: Au,
        stat: !0,
        forced: Ku
    }, {
        reject: function (t) {
            var e = Bu(this);
            return e.reject.call(void 0, t), e.promise
        }
    }), tu({
        target: Au,
        stat: !0,
        forced: Ku
    }, {
        resolve: function (t) {
            return yu(this, t)
        }
    }), tu({
        target: Au,
        stat: !0,
        forced: Uu
    }, {
        all: function (t) {
            var e = this,
                n = Bu(e),
                r = n.resolve,
                o = n.reject,
                i = xu((function () {
                    var n = lu(e.resolve),
                        i = [],
                        a = 0,
                        c = 1;
                    pu(t, (function (t) {
                        var s = a++,
                            u = !1;
                        i.push(void 0), c++, n.call(e, t).then((function (t) {
                            u || (u = !0, i[s] = t, --c || r(i))
                        }), o)
                    })), --c || r(i)
                }));
            return i.error && o(i.value), n.promise
        },
        race: function (t) {
            var e = this,
                n = Bu(e),
                r = n.reject,
                o = xu((function () {
                    var o = lu(e.resolve);
                    pu(t, (function (t) {
                        o.call(e, t).then(n.resolve, r)
                    }))
                }));
            return o.error && r(o.value), n.promise
        }
    });
    var el = un,
        nl = yc,
        rl = m,
        ol = fe,
        il = Xa,
        al = Qs,
        cl = ht.exports;
    if (el({
            target: "Promise",
            proto: !0,
            real: !0,
            forced: !!nl && rl((function () {
                nl.prototype.finally.call({
                    then: function () {}
                }, (function () {}))
            }))
        }, {
            finally: function (t) {
                var e = il(this, ol("Promise")),
                    n = "function" == typeof t;
                return this.then(n ? function (n) {
                    return al(e, t()).then((function () {
                        return n
                    }))
                } : t, n ? function (n) {
                    return al(e, t()).then((function () {
                        throw n
                    }))
                } : t)
            }
        }), "function" == typeof nl) {
        var sl = ol("Promise").prototype.finally;
        nl.prototype.finally !== sl && cl(nl.prototype, "finally", sl, {
            unsafe: !0
        })
    }
    var ul = zn,
        ll = et,
        fl = nr("unscopables"),
        hl = Array.prototype;
    null == hl[fl] && ll.f(hl, fl, {
        configurable: !0,
        value: ul(null)
    });
    var pl, dl, gl, vl = !m((function () {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })),
        ml = N,
        yl = F,
        wl = vl,
        bl = _t("IE_PROTO"),
        xl = Object.prototype,
        El = wl ? Object.getPrototypeOf : function (t) {
            return t = yl(t),
                ml(t, bl) ? t[bl] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? xl : null
        },
        Cl = m,
        kl = El,
        Sl = ft,
        Ll = N,
        Pl = nr("iterator"),
        Al = !1;
    [].keys && ("next" in (gl = [].keys()) ? (dl = kl(kl(gl))) !== Object.prototype && (pl = dl) : Al = !0), (null == pl || Cl((function () {
        var t = {};
        return pl[Pl].call(t) !== t
    }))) && (pl = {}), Ll(pl, Pl) || Sl(pl, Pl, (function () {
        return this
    }));
    var Ol = {
            IteratorPrototype: pl,
            BUGGY_SAFARI_ITERATORS: Al
        },
        Tl = Ol.IteratorPrototype,
        jl = zn,
        Il = C,
        Rl = hr,
        Ml = Ac,
        Dl = function () {
            return this
        },
        _l = un,
        Fl = function (t, e, n) {
            var r = e + " Iterator";
            return t.prototype = jl(Tl, {
                next: Il(1, n)
            }), Rl(t, r, !1), Ml[r] = Dl, t
        },
        Bl = El,
        ql = Cc,
        Nl = hr,
        zl = ft,
        Gl = ht.exports,
        Hl = Ac,
        Kl = Ol.IteratorPrototype,
        Ul = Ol.BUGGY_SAFARI_ITERATORS,
        $l = nr("iterator"),
        Yl = "keys",
        Vl = "values",
        Xl = "entries",
        Wl = function () {
            return this
        },
        Ql = function (t, e, n, r, o, i, a) {
            Fl(n, e, r);
            var c, s, u, l = function (t) {
                    if (t === o && g) return g;
                    if (!Ul && t in p) return p[t];
                    switch (t) {
                        case Yl:
                        case Vl:
                        case Xl:
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this)
                    }
                },
                f = e + " Iterator",
                h = !1,
                p = t.prototype,
                d = p[$l] || p["@@iterator"] || o && p[o],
                g = !Ul && d || l(o),
                v = "Array" == e && p.entries || d;
            if (v && (c = Bl(v.call(new t)), Kl !== Object.prototype && c.next && (Bl(c) !== Kl && (ql ? ql(c, Kl) : "function" != typeof c[$l] && zl(c, $l, Wl)), Nl(c, f, !0))), o == Vl && d && d.name !== Vl && (h = !0, g = function () {
                    return d.call(this)
                }), p[$l] !== g && zl(p, $l, g), Hl[e] = g, o)
                if (s = {
                        values: l(Vl),
                        keys: i ? g : l(Yl),
                        entries: l(Xl)
                    }, a)
                    for (u in s)(Ul || h || !(u in p)) && Gl(p, u, s[u]);
                else _l({
                    target: e,
                    proto: !0,
                    forced: Ul || h
                }, s);
            return s
        },
        Jl = I,
        Zl = function (t) {
            hl[fl][t] = !0
        },
        tf = Ac,
        ef = Jt,
        nf = Ql,
        rf = "Array Iterator",
        of = ef.set,
        af = ef.getterFor(rf),
        cf = nf(Array, "Array", (function (t, e) {
            of (this, {
                type: rf,
                target: Jl(t),
                index: 0,
                kind: e
            })
        }), (function () {
            var t = af(this),
                e = t.target,
                n = t.kind,
                r = t.index++;
            return !e || r >= e.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: e[r],
                done: !1
            } : {
                value: [r, e[r]],
                done: !1
            }
        }), "values");
    tf.Arguments = tf.Array, Zl("keys"), Zl("values"), Zl("entries");
    var sf = fa.charAt,
        uf = Jt,
        lf = Ql,
        ff = "String Iterator",
        hf = uf.set,
        pf = uf.getterFor(ff);
    lf(String, "String", (function (t) {
        hf(this, {
            type: ff,
            string: String(t),
            index: 0
        })
    }), (function () {
        var t, e = pf(this),
            n = e.string,
            r = e.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (t = sf(n, r), e.index += t.length, {
            value: t,
            done: !1
        })
    }));
    var df = g,
        gf = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        },
        vf = cf,
        mf = ft,
        yf = nr,
        wf = yf("iterator"),
        bf = yf("toStringTag"),
        xf = vf.values;
    for (var Ef in gf) {
        var Cf = df[Ef],
            kf = Cf && Cf.prototype;
        if (kf) {
            if (kf[wf] !== xf) try {
                mf(kf, wf, xf)
            } catch (t) {
                kf[wf] = xf
            }
            if (kf[bf] || mf(kf, bf, Ef), gf[Ef])
                for (var Sf in vf)
                    if (kf[Sf] !== vf[Sf]) try {
                        mf(kf, Sf, vf[Sf])
                    } catch (t) {
                        kf[Sf] = vf[Sf]
                    }
        }
    }
    var Lf = Pr.filter;
    un({
        target: "Array",
        proto: !0,
        forced: !gi("filter")
    }, {
        filter: function (t) {
            return Lf(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    for (var Pf = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, Af = 1, Of = 2, Tf = 4, jf = 8, If = function () {
            function t(e) {
                i(this, t), s(this, "data", void 0), s(this, "mode", void 0), this.mode = Tf, this.data = e
            }
            return c(t, [{
                key: "getLength",
                value: function () {
                    return this.data.length
                }
            }, {
                key: "write",
                value: function (t) {
                    for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
                }
            }]), t
        }(), Rf = function () {
            function t() {
                i(this, t), s(this, "buffer", void 0), s(this, "length", void 0), this.buffer = [], this.length = 0
            }
            return c(t, [{
                key: "get",
                value: function (t) {
                    var e = Math.floor(t / 8);
                    return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                }
            }, {
                key: "put",
                value: function (t, e) {
                    for (var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
                }
            }, {
                key: "getLengthInBits",
                value: function () {
                    return this.length
                }
            }, {
                key: "putBit",
                value: function (t) {
                    var e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            }]), t
        }(), Mf = {
            glog: function (t) {
                if (t < 1) throw new Error("glog(" + t + ")");
                return Mf.LOG_TABLE[t]
            },
            gexp: function (t) {
                for (; t < 0;) t += 255;
                for (; t >= 256;) t -= 255;
                return Mf.EXP_TABLE[t]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, Df = 0; Df < 8; Df++) Mf.EXP_TABLE[Df] = 1 << Df;
    for (var _f = 8; _f < 256; _f++) Mf.EXP_TABLE[_f] = Mf.EXP_TABLE[_f - 4] ^ Mf.EXP_TABLE[_f - 5] ^ Mf.EXP_TABLE[_f - 6] ^ Mf.EXP_TABLE[_f - 8];
    for (var Ff = 0; Ff < 255; Ff++) Mf.LOG_TABLE[Mf.EXP_TABLE[Ff]] = Ff;
    var Bf = function () {
            function t(e, n) {
                if (i(this, t), s(this, "num", void 0), null == e.length) throw new Error(e.length + "/" + n);
                for (var r = 0; r < e.length && 0 == e[r];) r++;
                this.num = new Array(e.length - r + n);
                for (var o = 0; o < e.length - r; o++) this.num[o] = e[o + r]
            }
            return c(t, [{
                key: "get",
                value: function (t) {
                    return this.num[t]
                }
            }, {
                key: "getLength",
                value: function () {
                    return this.num.length
                }
            }, {
                key: "multiply",
                value: function (e) {
                    for (var n = new Array(this.getLength() + e.getLength() - 1), r = 0; r < this.getLength(); r++)
                        for (var o = 0; o < e.getLength(); o++) n[r + o] ^= Mf.gexp(Mf.glog(this.get(r)) + Mf.glog(e.get(o)));
                    return new t(n, 0)
                }
            }, {
                key: "mod",
                value: function (e) {
                    if (this.getLength() - e.getLength() < 0) return this;
                    for (var n = Mf.glog(this.get(0)) - Mf.glog(e.get(0)), r = new Array(this.getLength()), o = 0; o < this.getLength(); o++) r[o] = this.get(o);
                    for (var i = 0; i < e.getLength(); i++) r[i] ^= Mf.gexp(Mf.glog(e.get(i)) + n);
                    return new t(r, 0).mod(e)
                }
            }]), t
        }(),
        qf = function () {
            function t(e, n) {
                i(this, t), s(this, "totalCount", void 0), s(this, "dataCount", void 0), this.totalCount = e, this.dataCount = n
            }
            return c(t, null, [{
                key: "getRSBlocks",
                value: function (e, n) {
                    var r = t.getRsBlockTable(e, n);
                    if (null == r) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + n);
                    for (var o = r.length / 3, i = [], a = 0; a < o; a++)
                        for (var c = r[3 * a + 0], s = r[3 * a + 1], u = r[3 * a + 2], l = 0; l < c; l++) i.push(new t(s, u));
                    return i
                }
            }, {
                key: "getRsBlockTable",
                value: function (e, n) {
                    switch (n) {
                        case Pf.L:
                            return t.RS_BLOCK_TABLE[4 * (e - 1) + 0];
                        case Pf.M:
                            return t.RS_BLOCK_TABLE[4 * (e - 1) + 1];
                        case Pf.Q:
                            return t.RS_BLOCK_TABLE[4 * (e - 1) + 2];
                        case Pf.H:
                            return t.RS_BLOCK_TABLE[4 * (e - 1) + 3];
                        default:
                            return
                    }
                }
            }]), t
        }();
    s(qf, "RS_BLOCK_TABLE", [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ]);
    var Nf = 0,
        zf = 1,
        Gf = 2,
        Hf = 3,
        Kf = 4,
        Uf = 5,
        $f = 6,
        Yf = 7,
        Vf = {
            PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (t) {
                for (var e = t << 10; Vf.getBCHDigit(e) - Vf.getBCHDigit(Vf.G15) >= 0;) e ^= Vf.G15 << Vf.getBCHDigit(e) - Vf.getBCHDigit(Vf.G15);
                return (t << 10 | e) ^ Vf.G15_MASK
            },
            getBCHTypeNumber: function (t) {
                for (var e = t << 12; Vf.getBCHDigit(e) - Vf.getBCHDigit(Vf.G18) >= 0;) e ^= Vf.G18 << Vf.getBCHDigit(e) - Vf.getBCHDigit(Vf.G18);
                return t << 12 | e
            },
            getBCHDigit: function (t) {
                for (var e = 0; 0 != t;) e++, t >>>= 1;
                return e
            },
            getPatternPosition: function (t) {
                return Vf.PATTERN_POSITION_TABLE[t - 1]
            },
            getMask: function (t, e, n) {
                switch (t) {
                    case Nf:
                        return (e + n) % 2 == 0;
                    case zf:
                        return e % 2 == 0;
                    case Gf:
                        return n % 3 == 0;
                    case Hf:
                        return (e + n) % 3 == 0;
                    case Kf:
                        return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                    case Uf:
                        return e * n % 2 + e * n % 3 == 0;
                    case $f:
                        return (e * n % 2 + e * n % 3) % 2 == 0;
                    case Yf:
                        return (e * n % 3 + (e + n) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + t)
                }
            },
            getErrorCorrectPolynomial: function (t) {
                for (var e = new Bf([1], 0), n = 0; n < t; n++) e = e.multiply(new Bf([1, Mf.gexp(n)], 0));
                return e
            },
            getLengthInBits: function (t, e) {
                if (1 <= e && e < 10) switch (t) {
                    case Af:
                        return 10;
                    case Of:
                        return 9;
                    case Tf:
                    case jf:
                        return 8;
                    default:
                        throw new Error("mode:" + t)
                } else if (e < 27) switch (t) {
                    case Af:
                        return 12;
                    case Of:
                        return 11;
                    case Tf:
                        return 16;
                    case jf:
                        return 10;
                    default:
                        throw new Error("mode:" + t)
                } else {
                    if (!(e < 41)) throw new Error("type:" + e);
                    switch (t) {
                        case Af:
                            return 14;
                        case Of:
                            return 13;
                        case Tf:
                            return 16;
                        case jf:
                            return 12;
                        default:
                            throw new Error("mode:" + t)
                    }
                }
            },
            getLostPoint: function (t) {
                for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++)
                    for (var o = 0; o < e; o++) {
                        for (var i = 0, a = t.isDark(r, o), c = -1; c <= 1; c++)
                            if (!(r + c < 0 || e <= r + c))
                                for (var s = -1; s <= 1; s++) o + s < 0 || e <= o + s || 0 == c && 0 == s || a == t.isDark(r + c, o + s) && i++;
                        i > 5 && (n += 3 + i - 5)
                    }
                for (var u = 0; u < e - 1; u++)
                    for (var l = 0; l < e - 1; l++) {
                        var f = 0;
                        t.isDark(u, l) && f++, t.isDark(u + 1, l) && f++, t.isDark(u, l + 1) && f++, t.isDark(u + 1, l + 1) && f++, 0 != f && 4 != f || (n += 3)
                    }
                for (var h = 0; h < e; h++)
                    for (var p = 0; p < e - 6; p++) t.isDark(h, p) && !t.isDark(h, p + 1) && t.isDark(h, p + 2) && t.isDark(h, p + 3) && t.isDark(h, p + 4) && !t.isDark(h, p + 5) && t.isDark(h, p + 6) && (n += 40);
                for (var d = 0; d < e; d++)
                    for (var g = 0; g < e - 6; g++) t.isDark(g, d) && !t.isDark(g + 1, d) && t.isDark(g + 2, d) && t.isDark(g + 3, d) && t.isDark(g + 4, d) && !t.isDark(g + 5, d) && t.isDark(g + 6, d) && (n += 40);
                for (var v = 0, m = 0; m < e; m++)
                    for (var y = 0; y < e; y++) t.isDark(y, m) && v++;
                return n += 10 * (Math.abs(100 * v / e / e - 50) / 5)
            }
        },
        Xf = function () {
            function t(e, n) {
                i(this, t),
                    s(this, "typeNumber", void 0), s(this, "errorCorrectLevel", void 0), s(this, "modules", void 0), s(this, "moduleCount", void 0), s(this, "dataCache", void 0), s(this, "dataList", void 0), this.typeNumber = e, this.errorCorrectLevel = n, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }
            return c(t, [{
                key: "addData",
                value: function (t) {
                    var e = new If(t);
                    this.dataList.push(e), this.dataCache = null
                }
            }, {
                key: "isDark",
                value: function (t, e) {
                    if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
                    return this.modules[t][e]
                }
            }, {
                key: "getModuleCount",
                value: function () {
                    return this.moduleCount
                }
            }, {
                key: "make",
                value: function () {
                    if (this.typeNumber < 1) {
                        var t = 1;
                        for (t = 1; t < 40; t++) {
                            for (var e = qf.getRSBlocks(t, this.errorCorrectLevel), n = new Rf, r = 0, o = 0; o < e.length; o++) r += e[o].dataCount;
                            for (var i = 0; i < this.dataList.length; i++) {
                                var a = this.dataList[i];
                                n.put(a.mode, 4), n.put(a.getLength(), Vf.getLengthInBits(a.mode, t)), a.write(n)
                            }
                            if (n.getLengthInBits() <= 8 * r) break
                        }
                        this.typeNumber = t
                    }
                    this.makeImpl(!1, this.getBestMaskPattern())
                }
            }, {
                key: "makeImpl",
                value: function (e, n) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                    for (var r = 0; r < this.moduleCount; r++) {
                        this.modules[r] = new Array(this.moduleCount);
                        for (var o = 0; o < this.moduleCount; o++) this.modules[r][o] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7),
                        this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, n), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, n)
                }
            }, {
                key: "setupPositionProbePattern",
                value: function (t, e) {
                    for (var n = -1; n <= 7; n++)
                        if (!(t + n <= -1 || this.moduleCount <= t + n))
                            for (var r = -1; r <= 7; r++) e + r <= -1 || this.moduleCount <= e + r || (this.modules[t + n][e + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4)
                }
            }, {
                key: "getBestMaskPattern",
                value: function () {
                    for (var t = 0, e = 0, n = 0; n < 8; n++) {
                        this.makeImpl(!0, n);
                        var r = Vf.getLostPoint(this);
                        (0 == n || t > r) && (t = r, e = n)
                    }
                    return e
                }
            }, {
                key: "setupTimingPattern",
                value: function () {
                    for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                    for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
                }
            }, {
                key: "setupPositionAdjustPattern",
                value: function () {
                    for (var t = Vf.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                        for (var n = 0; n < t.length; n++) {
                            var r = t[e],
                                o = t[n];
                            if (null == this.modules[r][o])
                                for (var i = -2; i <= 2; i++)
                                    for (var a = -2; a <= 2; a++) this.modules[r + i][o + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a
                        }
                }
            }, {
                key: "setupTypeNumber",
                value: function (t) {
                    for (var e = Vf.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                        var r = !t && 1 == (e >> n & 1);
                        this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
                    }
                    for (var o = 0; o < 18; o++) {
                        var i = !t && 1 == (e >> o & 1);
                        this.modules[o % 3 + this.moduleCount - 8 - 3][Math.floor(o / 3)] = i
                    }
                }
            }, {
                key: "setupTypeInfo",
                value: function (t, e) {
                    for (var n = this.errorCorrectLevel << 3 | e, r = Vf.getBCHTypeInfo(n), o = 0; o < 15; o++) {
                        var i = !t && 1 == (r >> o & 1);
                        o < 6 ? this.modules[o][8] = i : o < 8 ? this.modules[o + 1][8] = i : this.modules[this.moduleCount - 15 + o][8] = i
                    }
                    for (var a = 0; a < 15; a++) {
                        var c = !t && 1 == (r >> a & 1);
                        a < 8 ? this.modules[8][this.moduleCount - a - 1] = c : a < 9 ? this.modules[8][15 - a - 1 + 1] = c : this.modules[8][15 - a - 1] = c
                    }
                    this.modules[this.moduleCount - 8][8] = !t
                }
            }, {
                key: "mapData",
                value: function (t, e) {
                    for (var n = -1, r = this.moduleCount - 1, o = 7, i = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                        for (6 == a && a--;;) {
                            for (var c = 0; c < 2; c++)
                                if (null == this.modules[r][a - c]) {
                                    var s = !1;
                                    i < t.length && (s = 1 == (t[i] >>> o & 1)),
                                        Vf.getMask(e, r, a - c) && (s = !s), this.modules[r][a - c] = s, -1 == --o && (i++, o = 7)
                                } if ((r += n) < 0 || this.moduleCount <= r) {
                                r -= n, n = -n;
                                break
                            }
                        }
                }
            }], [{
                key: "createData",
                value: function (e, n, r) {
                    for (var o = qf.getRSBlocks(e, n), i = new Rf, a = 0; a < r.length; a++) {
                        var c = r[a];
                        i.put(c.mode, 4), i.put(c.getLength(), Vf.getLengthInBits(c.mode, e)), c.write(i)
                    }
                    for (var s = 0, u = 0; u < o.length; u++) s += o[u].dataCount;
                    if (i.getLengthInBits() > 8 * s) throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * s + ")");
                    for (i.getLengthInBits() + 4 <= 8 * s && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(!1);
                    for (; !(i.getLengthInBits() >= 8 * s) && (i.put(t.PAD0, 8), !(i.getLengthInBits() >= 8 * s));) i.put(t.PAD1, 8);
                    return t.createBytes(i, o)
                }
            }, {
                key: "createBytes",
                value: function (t, e) {
                    for (var n = 0, r = 0, o = 0, i = new Array(e.length), a = new Array(e.length), c = 0; c < e.length; c++) {
                        var s = e[c].dataCount,
                            u = e[c].totalCount - s;
                        r = Math.max(r, s), o = Math.max(o, u), i[c] = new Array(s);
                        for (var l = 0; l < i[c].length; l++) i[c][l] = 255 & t.buffer[l + n];
                        n += s;
                        var f = Vf.getErrorCorrectPolynomial(u),
                            h = new Bf(i[c], f.getLength() - 1).mod(f);
                        a[c] = new Array(f.getLength() - 1);
                        for (var p = 0; p < a[c].length; p++) {
                            var d = p + h.getLength() - a[c].length;
                            a[c][p] = d >= 0 ? h.get(d) : 0
                        }
                    }
                    for (var g = 0, v = 0; v < e.length; v++) g += e[v].totalCount;
                    for (var m = new Array(g), y = 0, w = 0; w < r; w++)
                        for (var b = 0; b < e.length; b++) w < i[b].length && (m[y++] = i[b][w]);
                    for (var x = 0; x < o; x++)
                        for (var E = 0; E < e.length; E++) x < a[E].length && (m[y++] = a[E][x]);
                    return m
                }
            }]), t
        }();

    function Wf(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "L",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
            r = new Xf(n, Pf[e]),
            o = [];
        r.addData(t), r.make();
        var i, a = r.modules,
            c = a.length,
            s = h(a.entries());
        try {
            for (s.s(); !(i = s.n()).done;) {
                var l, f = u(i.value, 2),
                    p = f[0],
                    d = f[1],
                    g = void 0,
                    v = h(d.entries());
                try {
                    for (v.s(); !(l = v.n()).done;) {
                        var m = u(l.value, 2),
                            y = m[0],
                            w = m[1];
                        w ? (g || (g = {
                            x: y,
                            y: p,
                            width: 0,
                            height: 1
                        }), g.width++) : (g && g.width > 0 && o.push(g), g = void 0)
                    }
                } catch (t) {
                    v.e(t)
                } finally {
                    v.f()
                }
                g && g.width > 0 && o.push(g)
            }
        } catch (t) {
            s.e(t)
        } finally {
            s.f()
        }
        for (var b = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(c, " ").concat(c, '">')], x = 0, E = o; x < E.length; x++) {
            var C = E[x],
                k = C.x,
                S = C.y,
                L = C.width,
                P = C.height;
            b.push('<rect x="'.concat(k, '" y="').concat(S, '" width="').concat(L, '" height="').concat(P, '" />'))
        }
        return b.push("</svg>"), b.join("")
    }
    s(Xf, "PAD0", 236), s(Xf, "PAD1", 17);
    var Qf = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        Jf = O,
        Zf = "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
        th = RegExp("^" + Zf + Zf + "*"),
        eh = RegExp(Zf + Zf + "*$"),
        nh = function (t) {
            return function (e) {
                var n = String(Jf(e));
                return 1 & t && (n = n.replace(th, "")), 2 & t && (n = n.replace(eh, "")), n
            }
        },
        rh = {
            start: nh(1),
            end: nh(2),
            trim: nh(3)
        },
        oh = m,
        ih = Qf,
        ah = rh.trim;
    un({
        target: "String",
        proto: !0,
        forced: function (t) {
            return oh((function () {
                return !!ih[t]() || "​᠎" != "​᠎" [t]() || ih[t].name !== t
            }))
        }("trim")
    }, {
        trim: function () {
            return ah(this)
        }
    });
    var ch = rh.trim,
        sh = Qf,
        uh = g.parseInt,
        lh = /^[+-]?0[Xx]/,
        fh = 8 !== uh(sh + "08") || 22 !== uh(sh + "0x16") ? function (t, e) {
            var n = ch(String(t));
            return uh(n, e >>> 0 || (lh.test(n) ? 16 : 10))
        } : uh;

    function hh(t, e) {
        return ph.apply(this, arguments)
    }

    function ph() {
        return (ph = o(regeneratorRuntime.mark((function t(e, n) {
            return regeneratorRuntime.wrap((function (t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, fetch(e, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: n ? JSON.stringify(n) : void 0
                        });
                    case 2:
                        return t.abrupt("return", t.sent.json());
                    case 3:
                    case "end":
                        return t.stop()
                }
            }), t)
        })))).apply(this, arguments)
    }
    un({
        global: !0,
        forced: parseInt != fh
    }, {
        parseInt: fh
    });

    function dh(t) {
        var e = t.trim().split("/");
        return 2 === e.length && "fuel" === e[0] ? parseInt(e[1]) || 0 : -1
    }

    function gh(t, e, n, r, o) {
        return vh.apply(this, arguments)
    }

    function vh() {
        return (vh = o(regeneratorRuntime.mark((function e(r, o, i, a, c) {
            var s, u, l, f, h;
            return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (mh(r, o),
                            i("Detecting if network resources are required."), s = r.getChainId(), u = a[String(s)]) {
                            e.next = 6;
                            break
                        }
                        throw new Error("Blockchain not supported by this resource provider.");
                    case 6:
                        return e.next = 8, hh(u + "/v1/resource_provider/request_transaction", {
                            ref: c,
                            request: r,
                            signer: o.auth
                        });
                    case 8:
                        if ((l = e.sent) && l.data) {
                            e.next = 11;
                            break
                        }
                        throw new Error("Invalid response from resource provider.");
                    case 11:
                        if (l.data.signatures && l.data.signatures[0]) {
                            e.next = 13;
                            break
                        }
                        throw new Error("No signature returned from resource provider.");
                    case 13:
                        if (402 !== l.code || l.data.fee) {
                            e.next = 15;
                            break
                        }
                        throw new Error("Resource provider returned a response indicating required payment, but provided no fee amount.");
                    case 15:
                        if (f = r.clone(), 402 !== l.code) {
                            e.next = 20;
                            break
                        }
                        if (!r.getInfoKey("no_fee")) {
                            e.next = 19;
                            break
                        }
                        throw new Error("Fee required but sender opted out.");
                    case 19:
                        f.setInfoKey("txfee", l.data.fee);
                    case 20:
                        return l.data.costs && (f.setInfoKey("txfeecpu", l.data.costs.cpu),
                            f.setInfoKey("txfeenet", l.data.costs.net), f.setInfoKey("txfeeram", l.data.costs.ram)), h = l.data.signatures.map((function (e) {
                            return t.Signature.from(e)
                        })), f.setInfoKey("cosig", h, {
                            type: t.Signature,
                            array: !0
                        }), e.next = 25, t.SigningRequest.create({
                            transaction: n({}, l.data.request[1])
                        }, {
                            abiProvider: r.abiProvider
                        });
                    case 25:
                        return f.data.req = e.sent.data.req, e.abrupt("return", f);
                    case 27:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function mh(e, n) {
        if (e.getRawInfoKey("no_modify")) throw new Error("Request cannot be modified.");
        if (e.isIdentity()) throw new Error("Identity requests cannot be co-signed.");
        var r = e.getRawActions()[0];
        if (!r) throw new Error("No actions in request.");
        var o = r.authorization[0];
        if (!r) throw new Error("First authorization missing.");
        if (!o.actor.equals(n.auth.actor) && !o.actor.equals(t.PlaceholderName)) throw new Error("Not first authorizer.")
    }
    var yh = Symbol(),
        wh = Symbol(),
        bh = Symbol(),
        xh = {
            aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906: "https://eos.greymass.com",
            "2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840": "https://jungle3.greymass.com",
            "4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11": "https://telos.greymass.com",
            "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4": "https://wax.greymass.com"
        },
        Eh = function () {
            function t(e) {
                i(this, t)
            }
            var e, n, r;
            return c(t, [{
                key: "write",
                value: (r = o(regeneratorRuntime.mark((function t(e, n) {
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                localStorage.setItem(this.storageKey(e), n);
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function (t, e) {
                    return r.apply(this, arguments)
                })
            }, {
                key: "read",
                value: (n = o(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", localStorage.getItem(this.storageKey(e)));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function (t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "remove",
                value: (e = o(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                localStorage.removeItem(this.storageKey(e));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function (t) {
                    return e.apply(this, arguments)
                })
            }, {
                key: "storageKey",
                value: function (t) {
                    return "".concat(this.keyPrefix, "-").concat(t)
                }
            }]), t
        }(),
        Ch = function () {
            function e(t = {}) {
                i(this, e),
                    s(this, "storage", void 0), s(this, "classPrefix", void 0), s(this, "injectStyles", void 0), s(this, "importantStyles", void 0), s(this, "requestStatus", void 0), s(this, "fuelEnabled", void 0), s(this, "fuelReferrer", void 0), s(this, "supportedChains", void 0), s(this, "activeRequest", void 0), s(this, "activeCancel", void 0), s(this, "containerEl", void 0), s(this, "requestEl", void 0), s(this, "styleEl", void 0), s(this, "countdownTimer", void 0), s(this, "closeTimer", void 0), s(this, "prepareStatusEl", void 0),
                    s(this, "showingManual", void 0), this.classPrefix = t.classPrefix || "anchor-link", this.injectStyles = !(!1 === t.injectStyles), this.importantStyles = !(!1 === t.importantStyles), this.requestStatus = !(!1 === t.requestStatus), this.fuelEnabled = !0 !== t.disableGreymassFuel, this.fuelReferrer = t.fuelReferrer || "teamgreymass", this.storage = new Eh(t.storagePrefix || "anchor-link"), this.supportedChains = t.supportedChains || xh, this.showingManual = !1
            }
            var n, r, a, u;
            return c(e, [{
                key: "closeModal",
                value: function () {
                    this.hide(),
                        this.activeCancel && (this.activeRequest = void 0, this.activeCancel("Modal closed"), this.activeCancel = void 0)
                }
            }, {
                key: "setupElements",
                value: function () {
                    var n = this;
                    if (this.showingManual = !1, this.injectStyles && !this.styleEl) {
                        this.styleEl = document.createElement("style"), this.styleEl.type = "text/css";
                        var r = "\n/* Anchor Link */\n\n.%prefix% * {\n    box-sizing: border-box;\n    line-height: 1;\n    font-variant-numeric: tabular-nums;\n}\n\n.%prefix% {\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',\n        Arial, sans-serif;\n    font-size: 13px;\n    background: rgba(0, 0, 0, 0.65);\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    z-index: 2147483647;\n    display: none;\n    align-items: center;\n    justify-content: center;\n}\n\n.%prefix%-active {\n    display: flex;\n}\n\n.%prefix%-inner {\n    background: #EFF1F7;\n    margin: 20px;\n    padding-top: 50px;\n    border-radius: 20px;\n    box-shadow: 0px 4px 100px rgba(0, 0, 0, .5);\n    width: 340px;\n    position: relative;\n}\n\n.%prefix%-close {\n    display: block;\n    position: absolute;\n    top: 11px;\n    right: 16px;\n    width: 28px;\n    height: 28px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.57 12.1a.96.96 0 000 1.34c.37.36 1 .36 1.34 0L7 8.37l5.09 5.09c.36.35.97.35 1.34-.01a.96.96 0 000-1.34L8.34 7.01l5.08-5.08a.95.95 0 000-1.33.97.97 0 00-1.34-.01L6.99 5.68 1.91.59a.96.96 0 00-1.33 0 .97.97 0 00-.01 1.34l5.09 5.08-5.1 5.1z' fill='%23007AFF'/%3E%3C/svg%3E\");\n    background-size: 14px;\n    background-repeat: no-repeat;\n    background-position: 50% 7px;\n    border-radius: 100%;\n    cursor: pointer;\n}\n\n.%prefix%-close:hover {\n    background-color: white;\n}\n\n.%prefix%-version {\n    position: absolute;\n    top: 19px;\n    left: 20px;\n    cursor: help;\n    color: #B8C0DA;\n    opacity: 0.1;\n}\n\n.%prefix%-version:hover {\n    opacity: 1;\n}\n\n.%prefix%-logo {\n    width: 70px;\n    height: 70px;\n    margin: 0 auto;\n    margin-top: -56px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M18.81 9.19h33.25V59.5H18.81z'/%3E%3Cpath d='M38.45 28.88h-6.9L35 21.77l3.45 7.1z' fill='%233650A2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M35 70a35 35 0 100-70 35 35 0 000 70zm2.36-55.4a2.62 2.62 0 00-4.72 0L21.9 36.75h5.84l1.7-3.5h11.13l1.7 3.5h5.83L37.36 14.6zM48.13 44.2h-5.26a7.76 7.76 0 01-5.24 7v-10.5a2.62 2.62 0 10-5.25 0v10.5a7.76 7.76 0 01-5.25-7h-5.25c.16 7.06 6 12.69 13.12 12.69 7.12 0 12.97-5.63 13.13-12.7z' fill='%233650A2'/%3E%3C/svg%3E\");\n}\n\n.%prefix%-logo.loading {\n    border-radius: 100%;\n    background-color: #3650A2;\n    background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0.5 0.5 45 45' xmlns='http://www.w3.org/2000/svg' stroke='%23fff'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(1 1)' stroke-width='2'%3E%3Ccircle cx='22' cy='22' r='6' stroke-opacity='0'%3E%3Canimate attributeName='r' begin='1.5s' dur='3s' values='6;22' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-opacity' begin='1.5s' dur='3s' values='1;0' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-width' begin='1.5s' dur='3s' values='2;0' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='22' cy='22' r='6' stroke-opacity='0'%3E%3Canimate attributeName='r' begin='3s' dur='3s' values='6;22' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-opacity' begin='3s' dur='3s' values='1;0' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-width' begin='3s' dur='3s' values='2;0' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='22' cy='22' r='8'%3E%3Canimate attributeName='r' begin='0s' dur='1.5s' values='6;1;2;3;4;5;6' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.%prefix%-logo.error {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' fill='none'%3E%3Ccircle cx='35' cy='35' r='35' fill='%23fc3d39'/%3E%3Cpath fill-rule='evenodd' d='M32.88 17.614c.715-.403 1.522-.614 2.343-.614s1.628.212 2.343.614 1.314.983 1.74 1.685l.005.008 13.483 22.508.013.022c.417.722.638 1.541.64 2.375s-.214 1.654-.627 2.378-1.008 1.328-1.727 1.751-1.535.65-2.369.659h-.017-26.983c-.834-.009-1.651-.237-2.369-.659s-1.314-1.027-1.727-1.751-.629-1.544-.627-2.378.223-1.653.64-2.375l.013-.022L31.14 19.299c.426-.702 1.025-1.282 1.74-1.685zm2.343 2.569a1.59 1.59 0 0 0-1.359.763L20.392 43.438a1.59 1.59 0 0 0-.208.782c-.001.278.071.551.209.793a1.59 1.59 0 0 0 1.358.803h26.945a1.59 1.59 0 0 0 1.358-.803 1.59 1.59 0 0 0 .209-.793c-.001-.274-.073-.544-.208-.782L36.584 20.95c-.144-.236-.343-.428-.58-.561a1.59 1.59 0 0 0-.781-.205zm0 6.531a1.59 1.59 0 0 1 1.592 1.592v6.367a1.59 1.59 0 1 1-3.184 0v-6.367a1.59 1.59 0 0 1 1.592-1.592zm-1.592 14.326a1.59 1.59 0 0 1 1.592-1.592h.016a1.59 1.59 0 1 1 0 3.184h-.016a1.59 1.59 0 0 1-1.592-1.592z' fill='%23fff'/%3E%3C/svg%3E\");\n}\n\n.%prefix%-logo.warning {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' fill='none' %3E%3Ccircle cx='35' cy='35' r='35' fill='%23f8b826'/%3E%3Cpath d='M35 20c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zM16.667 35c0-10.125 8.208-18.333 18.333-18.333S53.333 24.875 53.333 35 45.125 53.334 35 53.334 16.667 45.126 16.667 35zM35 26.667c.921 0 1.667.746 1.667 1.667V35A1.67 1.67 0 0 1 35 36.667c-.921 0-1.667-.746-1.667-1.667v-6.667c0-.921.746-1.667 1.667-1.667zm-1.667 15A1.67 1.67 0 0 1 35 40h.017c.921 0 1.667.746 1.667 1.667s-.746 1.667-1.667 1.667H35a1.67 1.67 0 0 1-1.667-1.667z' fill-rule='evenodd' fill='%23fff'/%3E%3C/svg%3E\");\n}\n\n.%prefix%-logo.success {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 70 70'%3E%3Cdefs/%3E%3Ccircle cx='35' cy='35' r='35' fill='%233DC55D'/%3E%3Cpath fill='%23fff' d='M30.9 49.7a2 2 0 001.8-1L48 24.9c.3-.5.4-1 .4-1.4 0-1-.7-1.7-1.7-1.7-.8 0-1.2.3-1.6 1L30.8 45.4 23.5 36c-.5-.6-1-.9-1.6-.9-1 0-1.8.8-1.8 1.8 0 .4.2.9.6 1.3L29 48.7c.6.7 1.1 1 1.9 1z'/%3E%3C/svg%3E\");\n}\n\n.%prefix%-logo.fuel {\n    background-image: url(\"data:image/svg+xml,%3Csvg width='70' height='70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M69.23 30.31l-8.46-11a6.58 6.58 0 00-3.4-2.19L35.91 12.1a7.16 7.16 0 00-1.6-.16 7.73 7.73 0 00-2.18.28l-5.1 1.57a1.76 1.76 0 00-.17-1.4l-1.46-2.5a1.76 1.76 0 00-2.06-.8l-9.98 3.2a1.76 1.76 0 00-1.23 1.74l.13 3.39c.01.27.09.54.22.78l-2.28.7a5.85 5.85 0 00-3.24 2.7L.48 34.23a4.96 4.96 0 00.14 4.53l3.5 5.83a4.49 4.49 0 004.19 2.05l9.29-1.13a4.79 4.79 0 002.54 3.78l3.55 1.68a8.9 8.9 0 003.39.73h.27l8.06-.45c.26.04.5.13.73.28l8.02 8c1 .92 2.3 1.45 3.67 1.47.14 0 .28 0 .42-.03l6.6-.68a2.85 2.85 0 002.5-1.8c.36-1 .1-2.12-.73-3l-2.78-2.96 5.26-1.56a4.35 4.35 0 003-3.64l.41-4.29c.09-.42.26-.82.52-1.16l6-6.66a3.91 3.91 0 00.2-4.9z' fill='%23fff'/%3E%3Cpath d='M49.08 29.96a1.72 1.72 0 00-.92-2.25 1.72 1.72 0 00-1.3 3.17 1.7 1.7 0 002.22-.92zM27.54 26.41a1.02 1.02 0 001-1.23 1.02 1.02 0 00-1.85-.37 1.03 1.03 0 00.46 1.52c.12.05.25.08.39.08zM37.05 21.67a1.03 1.03 0 000-2.06 1.03 1.03 0 000 2.06zM21.54 35c-4.62 0-10.44 2.04-13.52 3.24a.68.68 0 00-.24.16.68.68 0 00-.18.53c.01.1.04.19.1.27l1.28 2.16c.07.1.17.2.28.25.11.06.24.08.37.07l9.15-1.13.45-.03a3.64 3.64 0 013.67 3.55v.3a.67.67 0 00.39.59l2.9 1.38c.42.16.86.26 1.3.28h.05l7.74-.45h.23c1.45.03 2.83.59 3.9 1.58l7.68 7.65c.1.06.22.1.35.12l1.67-.2c.06-.01.12-.03.16-.07a.32.32 0 00.1-.13.33.33 0 00-.03-.33l-.82-1.21a3.22 3.22 0 01-.01-4.58c.4-.4.9-.68 1.45-.82l6.47-1.92a.4.4 0 00.19-.13.41.41 0 00.08-.22l.35-3.53c.01-.06 0-.13-.02-.2a.41.41 0 00-.28-.24.37.37 0 00-.2.01c-2.27.62-6.27 1.6-8.73 1.6C37.4 43.53 29.68 35 21.54 35zm8.97 7.49a.8.8 0 01-.27.28c-.2.13-.45.19-.68.17a1.05 1.05 0 01-.77-1.62.73.73 0 01.28-.28 1.05 1.05 0 011.44 1.45zm17.6 3.72a.76.76 0 01-.27.28 1.05 1.05 0 01-1.17-1.73 1.05 1.05 0 011.32.13 1.04 1.04 0 01.13 1.32z' fill='%23F8B826'/%3E%3Cpath d='M21.54 35c-4.85 0-11.03 2.25-13.96 3.42a.29.29 0 00-.15.16c-.01.03-.02.07-.01.11 0 .04.01.07.03.1L9 41.38c.06.11.16.2.27.26.12.05.25.07.37.06l9.15-1.13c.15-.02.3-.02.46-.03a3.63 3.63 0 013.66 3.54l.02.56c0 .04.02.09.05.13.02.04.06.07.1.1l3.13 1.48c.41.16.85.26 1.3.28h.04l7.74-.45h.23c1.45.03 2.84.59 3.9 1.58l7.68 7.65c.1.06.23.1.35.12l2.22-.27-1.58-1.66c-.82-.88-.7-2.05-.4-3.13a3.28 3.28 0 012.3-2.27l6.71-2 .38-3.8.06-.58c-2.13.59-6.6 1.74-9.3 1.74C37.4 43.54 29.69 35 21.54 35zm8.89 7.62a.38.38 0 01-.07.07c-1.07.77-2.26-.42-1.49-1.5a.25.25 0 01.06-.07c1.08-.77 2.27.42 1.5 1.5zm17.6 3.72a.25.25 0 01-.06.06c-1.07.78-2.26-.42-1.49-1.5a.25.25 0 01.07-.06c1.07-.78 2.26.42 1.49 1.5z' fill='%23E99123'/%3E%3Cpath d='M47.53 34.9c-10.41 0-19.22-4.65-25.54-4.65-4.44 0-11.97 3.38-15.28 5.83a.55.55 0 00-.18.69l.35.78a.55.55 0 00.72.28c2.84-1.18 8.9-3.42 13.94-3.42 8.4 0 16.15 7.48 25.16 7.48 4 0 9.88-1.58 11.41-2.82.67-.7 2.86-3.32 4.4-4.93a.67.67 0 00.1-.8.67.67 0 00-.32-.28.65.65 0 00-.42-.03 64.85 64.85 0 01-14.34 1.86zm-.47 3.95c-.14.3-.38.55-.68.7a1.73 1.73 0 01-2.34-2.36c.14-.3.38-.55.68-.7a1.72 1.72 0 012.04.32 1.75 1.75 0 01.3 2.04z' fill='%23F8B826'/%3E%3Cpath d='M68.34 30.87l-8.46-11a5.52 5.52 0 00-2.77-1.78l-21.46-5.03a7.08 7.08 0 00-3.2.1l-7.55 2.3-.01.01h-.01l-.5-1.3v-.01l1.13-.4a.65.65 0 00.36-.93l-1.47-2.5a.64.64 0 00-.73-.27l-9.98 3.17a.64.64 0 00-.44.63l.13 3.39a.64.64 0 00.63.6c.07 0 .15-.02.22-.04l2.53-.91h.02l.44.87v.02l-6.7 2.05c-1.08.38-2 1.15-2.56 2.15L1.47 34.61a3.8 3.8 0 00.11 3.43l3.5 5.84a3.32 3.32 0 003.1 1.51l10.23-1.26a.2.2 0 01.2.04.2.2 0 01.06.08l.02.1.03.9a3.69 3.69 0 001.9 2.88l3.56 1.69c.98.42 2.05.63 3.12.61l8.06-.44c.58.02 1.13.23 1.57.6l8.03 8a4.38 4.38 0 003.18 1.12l6.6-.69c.77-.07 1.33-.46 1.55-1.07.23-.6.05-1.26-.48-1.82l-4.02-4.26-.01-.01v-.01l7-2.09a3.25 3.25 0 002.2-2.66l.43-4.3a4 4 0 01.8-1.81l6.01-6.67a2.76 2.76 0 00.12-3.45zM15.14 15.2l-.03-.51c0-.08.02-.16.06-.22.04-.07.1-.11.18-.14l7.73-2.5a.35.35 0 01.41.16l.13.23c.03.05.04.1.05.15 0 .05 0 .1-.02.14a.35.35 0 01-.08.13.38.38 0 01-.12.09L15.6 15.5a.34.34 0 01-.31-.04.36.36 0 01-.16-.27zm51.53 17.75l-6 6.66a5.95 5.95 0 00-1.32 3l-.42 4.3a1.22 1.22 0 01-.73.87l-7.32 2.17a1.8 1.8 0 00-1.34 2.28c.1.32.27.6.52.83l3.19 3.37a.4.4 0 01.09.43.42.42 0 01-.14.19.42.42 0 01-.21.08l-5.06.53c-.55 0-1.09-.19-1.51-.54l-8.03-8a4.62 4.62 0 00-3.14-1.2l-8.07.45c-.73.01-1.45-.13-2.12-.41l-3.56-1.7a1.4 1.4 0 01-.72-1.08l-.04-.9a2.35 2.35 0 00-.8-1.68 2.24 2.24 0 00-1.78-.53L7.92 43.32a1.32 1.32 0 01-1.07-.53l-3.49-5.82a1.78 1.78 0 01-.05-1.4L9.8 22.94c.32-.5.78-.89 1.33-1.1l21.94-6.67c.69-.18 1.42-.2 2.12-.07l21.46 5.02c.62.19 1.18.55 1.6 1.03l8.47 11c.08.11.12.25.12.4a.69.69 0 01-.16.39z' fill='%2329363F'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' transform='translate(0 9)' d='M0 0h70v52H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\");\n}\n\n.%prefix%-request {\n    padding: 20px;\n    border-radius: 20px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    background: white;\n}\n\n.%prefix%-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.%prefix%-title {\n    color: #000000;\n    font-size: 25px;\n    margin-top: 14px;\n    font-weight: 700;\n    line-height: 30px;\n    letter-spacing: 0.5px;\n}\n\n.%prefix%-subtitle {\n    margin-top: 14px;\n    color: #5C5C5C;\n    text-align: center;\n    line-height: 1.4;\n    word-break: break-word;\n}\n\n.%prefix%-subtitle a {\n    color: #000000;\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.%prefix%-manual {\n    color: #007AFF;\n    cursor: pointer;\n}\n\n.%prefix%-info hr {\n    border: 0;\n    height: 1px;\n    width: 100%;\n    background: #EFF1F7;\n    margin: 24px 0 14px;\n}\n\n.%prefix%-uri {\n    width: 100%;\n}\n\n.%prefix%-button {\n    color: #007AFF;\n    background: #EFF1F7;\n    border: 1px solid #EFF1F7;\n    text-decoration: none;\n    font-size: 17px;\n    flex-grow: 1;\n    flex: 1;\n    width: 100%;\n    line-height: 1;\n    padding: 20px 18px;\n    border-radius: 12px;\n    font-weight: 400;\n    text-align: center;\n    display: block;\n    margin-top: 21px;\n    cursor: pointer;\n}\n\n.%prefix%-button:hover {\n    border: 1px solid #007AFF;\n}\n\n.%prefix%-qr {\n    position: relative;\n    margin-top: 21px;\n    border: 4px solid #EFF1F7;\n    padding: 11px;\n    border-radius: 12px;\n    background: #FFFFFF;\n    transition: all 400ms ease-in-out;\n    transform: scale(1) translateY(0);\n}\n\n.%prefix%-qr svg {\n    width: 100%;\n    display: block;\n    cursor: zoom-in;\n    shape-rendering: crispEdges;\n}\n\n.%prefix%-qr.zoom {\n    transform: scale(2) translateY(-25px);\n    border: 2px solid #1E89FE;\n    box-sizing: border-box;\n    box-shadow: 0px 4px 154px rgba(0, 0, 0, 0.35);\n    border-radius: 10px;\n    padding: 5px;\n    z-index: 2147483647;\n}\n\n.%prefix%-qr.zoom svg {\n    cursor: zoom-out;\n}\n\n.%prefix%-qr svg rect {\n    fill: black;\n}\n\n.%prefix%-copy {\n    position: absolute;\n    bottom: -10px;\n    left: 0px;\n    width: 100%;\n    color: green;\n    text-align: center;\n    opacity: 1;\n    transition: all 200ms ease-in-out;\n    transition-delay: 400ms;\n}\n\n.%prefix%-qr.zoom .%prefix%-copy {\n    transition-delay: 0ms;\n    background: transparent;\n    opacity: 0;\n}\n\n.%prefix%-copy span,\n.%prefix%-copy a {\n    display: inline-block;\n    background: white;\n    padding: 0 20px;\n    color: #007AFF;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.%prefix%-copy span {\n    display: none;\n    color: #5C5C5C;\n    cursor: default;\n}\n\n.%prefix%-copy.copied a {\n    display: none;\n}\n\n.%prefix%-copy.copied span {\n    display: inline-block;\n}\n\n.%prefix%-copy span:before,\n.%prefix%-copy a:before {\n    content: '';\n    display: inline-block;\n    width: 26px;\n    height: 16px;\n    position: relative;\n    top: 2px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' fill='none'%3E%3Cg clip-path='url(%23A)' stroke='%23157efa' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M13.83 6.5h-6c-.73 0-1.33.6-1.33 1.33v6c0 .74.6 1.34 1.33 1.34h6c.74 0 1.34-.6 1.34-1.34v-6c0-.73-.6-1.33-1.34-1.33z'/%3E%3Cpath d='M3.83 10.5h-.66a1.33 1.33 0 01-1.34-1.33v-6a1.33 1.33 0 011.34-1.34h6a1.33 1.33 0 011.33 1.34v.66' stroke-linecap='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='A'%3E%3Cpath fill='%23fff' transform='translate(.5 .5)' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n}\n\n.%prefix%-copy span:before {\n    background-image: url(\"data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.33 4L6 11.33 2.67 8' stroke='%23157EFA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n    top: 3.5px;\n}\n\n.%prefix%-footnote {\n    text-align: center;\n    width: 100%;\n    position: absolute;\n    bottom: -26px;\n    left: 0;\n    color: white;\n}\n\n.%prefix%-footnote a {\n    color: white;\n    text-decoration: underline;\n}\n\n.%prefix%-wskeepalive {\n    display: none;\n}\n\n@media (prefers-color-scheme: dark) {\n    .%prefix%-info hr,\n    .%prefix%-inner {\n        background: #262D43;\n        color: white;\n    }\n    .%prefix%-request,\n    .%prefix%-qr a,\n    .%prefix%-qr span,\n    .%prefix%-qr {\n        background: #131B33;\n    }\n    .%prefix%-title {\n        color: #FCFCFC;\n    }\n    .%prefix%-qr span,\n    .%prefix%-subtitle {\n        color: #B8C0DA;\n    }\n    .%prefix%-subtitle a {\n        color: #FCFCFC;\n    }\n    .%prefix%-qr svg rect {\n        fill: white;\n    }\n    .%prefix%-version {\n        color: #546AAF;\n    }\n    .%prefix%-qr a,\n    .%prefix%-manual,\n    .%prefix%-button {\n        color: #FCFCFC;\n    }\n    .%prefix%-button {\n        background: #262D43;\n        border: 1px solid #262D43;\n    }\n    .%prefix%-qr {\n        border-color: #262D43;\n    }\n    .%prefix%-qr.zoom {\n        border-color: #131B33;\n    }\n    .%prefix%-copy a:before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' fill='none'%3E%3Cg clip-path='url(%23A)' stroke='%23fff' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M13.83 6.5h-6c-.73 0-1.33.6-1.33 1.33v6c0 .74.6 1.34 1.33 1.34h6c.74 0 1.34-.6 1.34-1.34v-6c0-.73-.6-1.33-1.34-1.33z'/%3E%3Cpath d='M3.83 10.5h-.66a1.33 1.33 0 01-1.34-1.33v-6a1.33 1.33 0 011.34-1.34h6a1.33 1.33 0 011.33 1.34v.66' stroke-linecap='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='A'%3E%3Cpath fill='%23fff' transform='translate(.5 .5)' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\");\n    }\n    .%prefix%-copy span:before {\n        background-image: url(\"data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.33 4L6 11.33 2.67 8' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n    }\n    .%prefix%-button:hover {\n        color: #FCFCFC;\n        border: 1px solid #FCFCFC;\n        background: #333A50;\n    }\n    .%prefix%-close {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.57 12.1a.96.96 0 000 1.34c.37.36 1 .36 1.34 0L7 8.37l5.09 5.09c.36.35.97.35 1.34-.01a.96.96 0 000-1.34L8.34 7.01l5.08-5.08a.95.95 0 000-1.33.97.97 0 00-1.34-.01L6.99 5.68 1.91.59a.96.96 0 00-1.33 0 .97.97 0 00-.01 1.34l5.09 5.08-5.1 5.1z' fill='%23FCFCFC'/%3E%3C/svg%3E\");\n    }\n    .%prefix%-close:hover {\n        background-color: black;\n    }\n}\n\n@media (max-height: 600px) { .%prefix%-inner { transform: scale(0.9); } }\n@media (max-height: 540px) { .%prefix%-inner { transform: scale(0.8); } }\n@media (max-height: 480px) { .%prefix%-inner { transform: scale(0.7); } }\n@media (max-height: 420px) { .%prefix%-inner { transform: scale(0.6); } }\n@media (max-height: 360px) { .%prefix%-inner { transform: scale(0.5); } }\n@media (max-height: 300px) { .%prefix%-inner { transform: scale(0.4); } }\n\n@media (max-width: 600px) and (orientation: portrait) {\n    .%prefix%-qr.zoom {\n        transform: scale(1.5) translateY(-25px);\n    }\n}\n\n@media (max-width: 450px) and (orientation: portrait) {\n    .%prefix%-qr.zoom {\n        transform: scale(1.3) translateY(-25px);\n    }\n}\n\n".replace(/%prefix%/g, this.classPrefix);
                        this.importantStyles && (r = r.split("\n").map((function (t) {
                            return t.replace(/;$/i, " !important;")
                        })).join("\n")), this.styleEl.appendChild(document.createTextNode(r)), document.head.appendChild(this.styleEl)
                    }
                    if (this.containerEl || (this.containerEl = this.createEl(), this.containerEl.className = this.classPrefix, this.containerEl.onclick = function (t) {
                            t.target === n.containerEl && (t.stopPropagation(), n.closeModal())
                        }, document.body.appendChild(this.containerEl)), !this.requestEl) {
                        var o = this.createEl({
                                class: "inner"
                            }),
                            i = this.createEl({
                                class: "close"
                            });
                        i.onclick = function (t) {
                            t.stopPropagation(), n.closeModal()
                        }, this.requestEl = this.createEl({
                            class: "request"
                        }), o.appendChild(this.requestEl), o.appendChild(i);
                        var a = this.createEl({
                            class: "version",
                            text: "".concat(e.version, " (").concat(t.Link.version, ")")
                        });
                        a.onclick = function (t) {
                            t.stopPropagation(), window.open("https://github.com/greymass/anchor-link", "_blank")
                        }, o.appendChild(a), this.containerEl.appendChild(o)
                    }
                }
            }, {
                key: "createEl",
                value: function (t) {
                    t || (t = {});
                    for (var e = document.createElement(t.tag || "div"), n = 0, r = Object.keys(t); n < r.length; n++) {
                        var o = r[n],
                            i = t[o];
                        switch (o) {
                            case "src":
                                e.setAttribute(o, i);
                                break;
                            case "tag":
                                break;
                            case "content":
                                "string" == typeof i ? e.appendChild(document.createTextNode(i)) : e.appendChild(i);
                                break;
                            case "text":
                                e.appendChild(document.createTextNode(i));
                                break;
                            case "class":
                                e.className = "".concat(this.classPrefix, "-").concat(i);
                                break;
                            default:
                                e.setAttribute(o, i)
                        }
                    }
                    return e
                }
            }, {
                key: "hide",
                value: function () {
                    this.containerEl && this.containerEl.classList.remove("".concat(this.classPrefix, "-active")), this.clearTimers()
                }
            }, {
                key: "show",
                value: function () {
                    this.containerEl && this.containerEl.classList.add("".concat(this.classPrefix, "-active"))
                }
            }, {
                key: "showDialog",
                value: function (t) {
                    this.setupElements();
                    var e = this.createEl({
                            class: "info"
                        }),
                        n = this.createEl({
                            class: "title",
                            tag: "span",
                            content: t.title
                        }),
                        r = this.createEl({
                            class: "subtitle",
                            tag: "span",
                            content: t.subtitle
                        });
                    e.appendChild(n), e.appendChild(r);
                    var o = this.createEl({
                        class: "logo"
                    });
                    if (t.type && o.classList.add(t.type), function (t) {
                            for (; t.firstChild;) t.removeChild(t.firstChild)
                        }(this.requestEl), this.requestEl.appendChild(o), this.requestEl.appendChild(e), t.content && this.requestEl.appendChild(t.content), t.action) {
                        var i = this.createEl({
                            tag: "a",
                            class: "button",
                            text: t.action.text
                        });
                        i.addEventListener("click", (function (e) {
                            e.preventDefault(), t.action.callback()
                        })), this.requestEl.appendChild(i)
                    }
                    if (t.footnote) {
                        var a = this.createEl({
                            class: "footnote",
                            content: t.footnote
                        });
                        this.requestEl.appendChild(a)
                    }
                    this.show()
                }
            }, {
                key: "displayRequest",
                value: (u = o(regeneratorRuntime.mark((function t(e, n, r) {
                    var o, i, a, c, s, u, l, f, h, p, d, g, v, m, y, w, b = arguments;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                o = !(b.length > 3 && void 0 !== b[3]) || b[3], i = e.clone(), a = Lh(), i.setInfoKey("same_device", !0), i.setInfoKey("return_path", a), c = i.encode(!0, !1), s = e.encode(!0, !1), u = this.createEl({
                                    class: "qr"
                                });
                                try {
                                    u.innerHTML = Wf(s)
                                } catch (t) {
                                    console.warn("Unable to generate QR code", t)
                                }
                                l = this.createEl({
                                        class: "copy"
                                    }), f = this.createEl({
                                        tag: "a",
                                        text: "Copy request link"
                                    }), h = this.createEl({
                                        tag: "span",
                                        text: "Link copied - Paste in Anchor"
                                    }), l.appendChild(f), l.appendChild(h), u.appendChild(l), f.addEventListener("click", (function (t) {
                                        t.preventDefault(), jh(s), l.classList.add("copied"), setTimeout((function () {
                                            l.classList.remove("copied")
                                        }), 2e3)
                                    })), (p = u.querySelector("svg")) && p.addEventListener("click", (function (t) {
                                        t.preventDefault(),
                                            u.classList.toggle("zoom")
                                    })), d = this.createEl({
                                        class: "uri"
                                    }), g = this.createEl({
                                        tag: "a",
                                        class: "button",
                                        href: s,
                                        text: "Launch Anchor"
                                    }), d.appendChild(g), Ah() || Oh() ? (v = this.createEl({
                                        class: "wskeepalive",
                                        src: "about:blank",
                                        tag: "iframe"
                                    }), d.appendChild(v), g.addEventListener("click", (function (t) {
                                        t.preventDefault(), v.setAttribute("src", c)
                                    }))) : g.addEventListener("click", (function (t) {
                                        t.preventDefault(), window.location.href = c
                                    })), (m = this.createEl({
                                        class: "info"
                                    })).appendChild(u), m.appendChild(d),
                                    o && (y = this.createEl({
                                        text: "Don't have Anchor yet? "
                                    }), w = this.createEl({
                                        tag: "a",
                                        target: "_blank",
                                        href: "https://greymass.com/anchor",
                                        text: "Download now"
                                    }), y.appendChild(w)), this.showDialog({
                                        title: n,
                                        subtitle: r,
                                        footnote: y,
                                        content: m
                                    });
                            case 27:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function (t, e, n) {
                    return u.apply(this, arguments)
                })
            }, {
                key: "showLoading",
                value: (a = o(regeneratorRuntime.mark((function t() {
                    var e;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                e = this.createEl({
                                    tag: "span",
                                    text: "Preparing request..."
                                }), this.prepareStatusEl = e, this.showDialog({
                                    title: "Loading",
                                    subtitle: e,
                                    type: "loading"
                                });
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function () {
                    return a.apply(this, arguments)
                })
            }, {
                key: "onRequest",
                value: function (t, e) {
                    this.clearTimers(), this.activeRequest = t, this.activeCancel = e;
                    var n = t.isIdentity() ? "Login" : "Sign";
                    this.displayRequest(t, n, "Scan the QR-code with Anchor on another device or use the button to open it here.").catch(e)
                }
            }, {
                key: "onSessionRequest",
                value: function (e, n, r) {
                    if (e.metadata.sameDevice && n.setInfoKey("return_path", Lh()), "fallback" === e.type) return this.onRequest(n, r), void(e.metadata.sameDevice && (window.location.href = n.encode()));
                    this.clearTimers(), this.activeRequest = n, this.activeCancel = r;
                    var o, i = e.metadata.timeout || 12e4,
                        a = e.metadata.name;
                    o = a && a.length > 0 ? "Please open Anchor Wallet on “".concat(a, "” to review and sign the transaction.") : "Please review and sign the transaction in the linked wallet.";
                    var c = this.createEl({
                            tag: "span",
                            text: "Sign"
                        }),
                        s = new Date(Date.now() + i),
                        u = function () {
                            c.textContent = "Sign - ".concat(Sh(s))
                        };
                    this.countdownTimer = setInterval(u, 200), u();
                    var l = this.createEl({
                            class: "info"
                        }),
                        f = this.createEl({
                            tag: "hr"
                        }),
                        h = this.createEl({
                            tag: "a",
                            text: "Sign manually or with another device",
                            class: "manual"
                        });
                    h.addEventListener("click", (function (n) {
                            n.preventDefault();
                            var o = new t.SessionError("Manual", "E_TIMEOUT", e);
                            o[bh] = !0, r(o)
                        })), l.appendChild(f), l.appendChild(h), this.showDialog({
                            title: c,
                            subtitle: o,
                            content: l
                        }),
                        e.metadata.sameDevice && (e.metadata.launchUrl ? window.location.href = e.metadata.launchUrl : Ph() && (window.location.href = "anchor://link"))
                }
            }, {
                key: "sendSessionPayload",
                value: function (e, n) {
                    return !(!n.metadata.triggerUrl || !n.metadata.sameDevice) && (!(e.array.length > 700) && (window.location.href = n.metadata.triggerUrl.replace("%s", t.Base64u.encode(e.array)), !0))
                }
            }, {
                key: "clearTimers",
                value: function () {
                    this.closeTimer && (clearTimeout(this.closeTimer), this.closeTimer = void 0),
                        this.countdownTimer && (clearTimeout(this.countdownTimer), this.countdownTimer = void 0)
                }
            }, {
                key: "showFee",
                value: (r = o(regeneratorRuntime.mark((function t(e, n) {
                    var r, o, i, a, c, s, u, l, f, h, p, d, g, v = this;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.activeRequest = e, r = new Promise((function (t, e) {
                                        v.activeCancel = function (t) {
                                            var n;
                                            (n = "string" == typeof t ? new Error(t) : t)[yh] = !0, e(n)
                                        }
                                    })), o = this.createEl({
                                        class: "info"
                                    }), i = this.createEl({
                                        tag: "span",
                                        text: "You can try to "
                                    }),
                                    a = this.createEl({
                                        tag: "a",
                                        text: "proceed without the fee"
                                    }), c = this.createEl({
                                        tag: "span",
                                        text: " or accept the fee shown below to pay for these costs."
                                    }), (s = this.createEl({
                                        class: "subtitle",
                                        tag: "span"
                                    })).appendChild(i), s.appendChild(a), s.appendChild(c), o.appendChild(s), u = this.createEl({
                                        tag: "span",
                                        class: "subtitle",
                                        text: "Offer expires in --:--"
                                    }), o.appendChild(u), l = e.getRawTransaction().expiration.toDate(), f = setInterval((function () {
                                        u.textContent = "Offer expires in ".concat(Sh(l)),
                                            l.getTime() < Date.now() && v.activeCancel("Offer expired")
                                    }), 200), h = this.createEl({
                                        tag: "span",
                                        text: "Resources offered by "
                                    }), p = this.createEl({
                                        tag: "a",
                                        target: "_blank",
                                        href: "https://greymass.com/en/fuel",
                                        text: "Greymass Fuel"
                                    }), h.appendChild(p), d = kh(a, "click").then((function () {
                                        var t = new Error("Skipped fee");
                                        throw t[wh] = !0, t
                                    })), g = new Promise((function (t) {
                                        v.showDialog({
                                            title: "Transaction Fee",
                                            subtitle: "Your account lacks the network resources for this transaction and it cannot be covered for free.",
                                            type: "fuel",
                                            content: o,
                                            action: {
                                                text: "Accept Fee of ".concat(n),
                                                callback: t
                                            },
                                            footnote: h
                                        })
                                    })), t.next = 22, Promise.race([g, d, r]).finally((function () {
                                        clearInterval(f)
                                    }));
                            case 22:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function (t, e) {
                    return r.apply(this, arguments)
                })
            }, {
                key: "showRecovery",
                value: function (t, e) {
                    if (t.data.info = t.data.info.filter((function (t) {
                            return "return_path" !== t.key
                        })), "channel" === e.type) {
                        var n = e;
                        n.addLinkInfo && n.addLinkInfo(t)
                    }
                    this.displayRequest(t, "Sign manually", "Want to sign with another device or didn’t get the signing request in your wallet, scan this QR or copy request and paste in app.", !1), this.showingManual = !0
                }
            }, {
                key: "prepare",
                value: (n = o(regeneratorRuntime.mark((function t(e, n) {
                    var r, o, i, a, c, s = this;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.showLoading(), this.fuelEnabled && n && !e.isIdentity()) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", e);
                            case 3:
                                if (!("string" == typeof n.metadata.cosignerVersion && (u = n.metadata.cosignerVersion, dh(u) >= dh("fuel/2")))) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", e);
                            case 5:
                                return t.prev = 5, r = gh(e, n, (function (t) {
                                    s.prepareStatusEl && (s.prepareStatusEl.textContent = t)
                                }), this.supportedChains, this.fuelReferrer), o = new Promise((function (t) {
                                    return setTimeout(t, 5e3)
                                })).then((function () {
                                    throw new Error("API timeout after 5000ms")
                                })), t.next = 10, Promise.race([r, o]);
                            case 10:
                                if (i = t.sent, !(a = i.getInfoKey("txfee"))) {
                                    t.next = 15;
                                    break
                                }
                                return t.next = 15, this.showFee(i, String(a));
                            case 15:
                                return t.abrupt("return", i);
                            case 18:
                                if (t.prev = 18, t.t0 = t.catch(5), !t.t0[yh]) {
                                    t.next = 25;
                                    break
                                }
                                throw this.hide(), t.t0;
                            case 25:
                                if (console.info("Skipping resource provider: ".concat(t.t0.message || t.t0)), !t.t0[wh]) {
                                    t.next = 30;
                                    break
                                }
                                return (c = e.clone()).setInfoKey("no_fee", !0, "bool"), t.abrupt("return", c);
                            case 30:
                                return t.abrupt("return", e);
                            case 31:
                            case "end":
                                return t.stop()
                        }
                        var u
                    }), t, this, [
                        [5, 18]
                    ])
                }))), function (t, e) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "recoverError",
                value: function (t, e) {
                    var n = this;
                    if (e === this.activeRequest && ("E_DELIVERY" === t.code || "E_TIMEOUT" === t.code) && t.session) {
                        if (this.showingManual) return !0;
                        var r = t.session;
                        if (t[bh]) return this.showRecovery(e, r), !0;
                        var o, i = r.metadata.name;
                        return o = i && i.length > 0 ? "Unable to deliver the request to “".concat(i, "”.") : "Unable to deliver the request to the linked wallet.", o += " ".concat(t.message, "."), this.showDialog({
                            title: "Unable to reach device",
                            subtitle: o,
                            type: "warning",
                            action: {
                                text: "Sign manually",
                                callback: function () {
                                    n.showRecovery(e, r)
                                }
                            }
                        }), !0
                    }
                    return !1
                }
            }, {
                key: "onSuccess",
                value: function (t) {
                    var e = this;
                    t === this.activeRequest && (this.clearTimers(), this.requestStatus ? (this.showDialog({
                        title: "Success!",
                        subtitle: t.isIdentity() ? "Login completed." : "Transaction signed.",
                        type: "success"
                    }), this.closeTimer = setTimeout((function () {
                        e.hide()
                    }), 1500)) : this.hide())
                }
            }, {
                key: "onFailure",
                value: function (e, n) {
                    var r;
                    e === this.activeRequest && "E_CANCEL" !== n.code ? (this.clearTimers(),
                        this.requestStatus ? (r = t.isInstanceOf(n, t.APIError) ? "eosio_assert_message_exception" === n.name ? n.details[0].message : n.details.length > 0 ? n.details.map((function (t) {
                            return t.message
                        })).join("\n") : n.message : n.message || String(n), this.showDialog({
                            title: "Transaction Error",
                            subtitle: r,
                            type: "error"
                        })) : this.hide()) : this.hide()
                }
            }, {
                key: "userAgent",
                value: function () {
                    return "BrowserTransport/".concat(e.version, " ").concat(navigator.userAgent)
                }
            }]), e
        }();

    function kh(t, e, n) {
        return new Promise((function (r, o) {
            var i = function n(o) {
                t.removeEventListener(e, n), r(o)
            };
            t.addEventListener(e, i), n && setTimeout((function () {
                t.removeEventListener(e, i), o(new Error("Timed out waiting for ".concat(e)))
            }), n)
        }))
    }

    function Sh(t) {
        var e = t.getTime() - Date.now();
        return e > 0 ? new Date(e).toISOString().substr(14, 5) : "00:00"
    }

    function Lh() {
        if (/CriOS/.test(navigator.userAgent)) return "googlechrome://";
        if (/FxiOS/.test(navigator.userAgent)) return "firefox:://";
        if (Ph() && Oh()) return "brave://";
        if (Ph()) {
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = window.location.href.split("#")[0] + "#", n = 0; n < 8; n++) e += t.charAt(Math.floor(Math.random() * t.length));
            return e
        }
        return Th() && Ah() ? "android-intent://org.mozilla.firefox" : Th() && /Edg/.test(navigator.userAgent) ? "android-intent://com.microsoft.emmx" : Th() && (/OPR/.test(navigator.userAgent) || /Opera/.test(navigator.userAgent)) ? "android-intent://com.opera.browser" : Th() && Oh() ? "android-intent://com.brave.browser" : Th() && /wv/.test(navigator.userAgent) ? "android-intent://webview" : Th() && /Chrome\/[.0-9]* Mobile/i.test(navigator.userAgent) ? "android-intent://com.android.chrome" : window.location.href
    }

    function Ph() {
        return /iP(ad|od|hone)/i.test(navigator.userAgent)
    }

    function Ah() {
        return /Firefox/i.test(navigator.userAgent)
    }

    function Oh() {
        return navigator.brave && "function" == typeof navigator.brave.isBrave
    }

    function Th() {
        return /Android/.test(navigator.userAgent)
    }

    function jh(t) {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t);
        else {
            var e = document.createElement("textarea");
            try {
                e.setAttribute("contentEditable", ""), e.value = t, document.body.appendChild(e), e.select();
                var n = document.createRange();
                n.selectNodeContents(e);
                var r = window.getSelection();
                r.removeAllRanges(), r.addRange(n), e.setSelectionRange(0, e.value.length), document.execCommand("copy")
            } finally {
                document.body.removeChild(e)
            }
        }
    }
    return s(Ch, "version", "3.2.5"), Ch
}(AnchorLink);
//# sourceMappingURL=anchor-link-browser-transport.bundle.js.map