(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // http-import:https://esm.sh/v94/kaboom@2000.2.9/deno/kaboom.js
  var fn = Object.defineProperty;
  var Hn = Object.defineProperties;
  var zn = Object.getOwnPropertyDescriptors;
  var nn = Object.getOwnPropertySymbols;
  var Jn = Object.prototype.hasOwnProperty;
  var Qn = Object.prototype.propertyIsEnumerable;
  var qr = /* @__PURE__ */ __name((t, i, c) => i in t ? fn(t, i, { enumerable: true, configurable: true, writable: true, value: c }) : t[i] = c, "qr");
  var k = /* @__PURE__ */ __name((t, i) => {
    for (var c in i || (i = {}))
      Jn.call(i, c) && qr(t, c, i[c]);
    if (nn)
      for (var c of nn(i))
        Qn.call(i, c) && qr(t, c, i[c]);
    return t;
  }, "k");
  var N = /* @__PURE__ */ __name((t, i) => Hn(t, zn(i)), "N");
  var l = /* @__PURE__ */ __name((t, i) => fn(t, "name", { value: i, configurable: true }), "l");
  var x = /* @__PURE__ */ __name((t, i, c) => (qr(t, typeof i != "symbol" ? i + "" : i, c), c), "x");
  var Zn = /* @__PURE__ */ __name((t, i, c) => new Promise((V, w) => {
    var f = /* @__PURE__ */ __name((q) => {
      try {
        M(c.next(q));
      } catch (B) {
        w(B);
      }
    }, "f"), X = /* @__PURE__ */ __name((q) => {
      try {
        M(c.throw(q));
      } catch (B) {
        w(B);
      }
    }, "X"), M = /* @__PURE__ */ __name((q) => q.done ? V(q.value) : Promise.resolve(q.value).then(f, X), "M");
    M((c = c.apply(t, i)).next());
  }), "Zn");
  var _n = (() => {
    for (var t = new Uint8Array(128), i = 0; i < 64; i++)
      t[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
    return (c) => {
      for (var V = c.length, w = new Uint8Array((V - (c[V - 1] == "=") - (c[V - 2] == "=")) * 3 / 4 | 0), f = 0, X = 0; f < V; ) {
        var M = t[c.charCodeAt(f++)], q = t[c.charCodeAt(f++)], B = t[c.charCodeAt(f++)], W = t[c.charCodeAt(f++)];
        w[X++] = M << 2 | q >> 4, w[X++] = q << 4 | B >> 2, w[X++] = B << 6 | W;
      }
      return w;
    };
  })();
  var ee = /* @__PURE__ */ __name(class extends Map {
    constructor(...t) {
      super(...t), x(this, "_lastID"), this._lastID = 0;
    }
    push(t) {
      let i = this._lastID;
      return this.set(i, t), this._lastID++, i;
    }
    pushd(t) {
      let i = this.push(t);
      return () => this.delete(i);
    }
  }, "ee");
  l(ee, "IDList");
  function Nr(t, i) {
    let c = typeof t, V = typeof i;
    if (c !== V)
      return false;
    if (c === "object" && V === "object") {
      let w = Object.keys(t), f = Object.keys(i);
      if (w.length !== f.length)
        return false;
      for (let X of w) {
        let M = t[X], q = i[X];
        if (!(typeof M == "function" && typeof q == "function") && !Nr(M, q))
          return false;
      }
      return true;
    }
    return t === i;
  }
  __name(Nr, "Nr");
  l(Nr, "deepEq");
  function Mr(t, i) {
    let c = document.createElement("a");
    document.body.appendChild(c), c.setAttribute("style", "display: none"), c.href = t, c.download = i, c.click(), document.body.removeChild(c);
  }
  __name(Mr, "Mr");
  l(Mr, "downloadURL");
  function pn(t, i) {
    let c = URL.createObjectURL(t);
    Mr(c, i), URL.revokeObjectURL(c);
  }
  __name(pn, "pn");
  l(pn, "downloadBlob");
  function Vn(t) {
    return t.match(/^data:\w+\/\w+;base64,.+/);
  }
  __name(Vn, "Vn");
  l(Vn, "isDataURL");
  var $n = (() => {
    let t = 0;
    return () => t++;
  })();
  var sn = /* @__PURE__ */ new Set();
  function D(t, i) {
    sn.has(t) || (sn.add(t), console.warn(`${t} is deprecated. Use ${i} instead.`));
  }
  __name(D, "D");
  l(D, "deprecateMsg");
  var b = l((t, i, c) => (...V) => (D(t, i), c(...V)), "deprecate");
  function he(t) {
    return t * Math.PI / 180;
  }
  __name(he, "he");
  l(he, "deg2rad");
  function Ir(t) {
    return t * 180 / Math.PI;
  }
  __name(Ir, "Ir");
  l(Ir, "rad2deg");
  function _(t, i, c) {
    return i > c ? _(t, c, i) : Math.min(Math.max(t, i), c);
  }
  __name(_, "_");
  l(_, "clamp");
  function et(t, i, c) {
    return t + (i - t) * c;
  }
  __name(et, "et");
  l(et, "lerp");
  function Xt(t, i, c, V, w) {
    return V + (t - i) / (c - i) * (w - V);
  }
  __name(Xt, "Xt");
  l(Xt, "map");
  function mn(t, i, c, V, w) {
    return _(Xt(t, i, c, V, w), V, w);
  }
  __name(mn, "mn");
  l(mn, "mapc");
  var O = /* @__PURE__ */ __name(class {
    constructor(t = 0, i = t) {
      x(this, "x", 0), x(this, "y", 0), this.x = t, this.y = i;
    }
    static fromAngle(t) {
      let i = he(t);
      return new O(Math.cos(i), Math.sin(i));
    }
    clone() {
      return new O(this.x, this.y);
    }
    add(...t) {
      let i = d(...t);
      return new O(this.x + i.x, this.y + i.y);
    }
    sub(...t) {
      let i = d(...t);
      return new O(this.x - i.x, this.y - i.y);
    }
    scale(...t) {
      let i = d(...t);
      return new O(this.x * i.x, this.y * i.y);
    }
    dist(...t) {
      let i = d(...t);
      return Math.sqrt((this.x - i.x) * (this.x - i.x) + (this.y - i.y) * (this.y - i.y));
    }
    len() {
      return this.dist(new O(0, 0));
    }
    unit() {
      return this.scale(1 / this.len());
    }
    normal() {
      return new O(this.y, -this.x);
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    angle(...t) {
      let i = d(...t);
      return Ir(Math.atan2(this.y - i.y, this.x - i.x));
    }
    lerp(t, i) {
      return new O(et(this.x, t.x, i), et(this.y, t.y, i));
    }
    toFixed(t) {
      return new O(Number(this.x.toFixed(t)), Number(this.y.toFixed(t)));
    }
    eq(t) {
      return this.x === t.x && this.y === t.y;
    }
    toString() {
      return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
    str() {
      return this.toString();
    }
  }, "O");
  var S = O;
  l(S, "Vec2"), x(S, "LEFT", new O(-1, 0)), x(S, "RIGHT", new O(1, 0)), x(S, "UP", new O(0, -1)), x(S, "DOWN", new O(0, 1));
  function d(...t) {
    if (t.length === 1) {
      if (t[0] instanceof S)
        return d(t[0].x, t[0].y);
      if (Array.isArray(t[0]) && t[0].length === 2)
        return d.apply(null, t[0]);
    }
    return new S(...t);
  }
  __name(d, "d");
  l(d, "vec2");
  var Gr = /* @__PURE__ */ __name(class {
    constructor(t, i, c) {
      x(this, "x", 0), x(this, "y", 0), x(this, "z", 0), this.x = t, this.y = i, this.z = c;
    }
    xy() {
      return d(this.x, this.y);
    }
  }, "Gr");
  l(Gr, "Vec3");
  var Ve = l((t, i, c) => new Gr(t, i, c), "vec3");
  var me = /* @__PURE__ */ __name(class {
    constructor(t, i, c) {
      x(this, "r", 255), x(this, "g", 255), x(this, "b", 255), this.r = _(t, 0, 255), this.g = _(i, 0, 255), this.b = _(c, 0, 255);
    }
    static fromArray(t) {
      return new me(t[0], t[1], t[2]);
    }
    clone() {
      return new me(this.r, this.g, this.b);
    }
    lighten(t) {
      return new me(this.r + t, this.g + t, this.b + t);
    }
    darken(t) {
      return this.lighten(-t);
    }
    invert() {
      return new me(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(t) {
      return new me(this.r * t.r / 255, this.g * t.g / 255, this.b * t.b / 255);
    }
    eq(t) {
      return this.r === t.r && this.g === t.g && this.b === t.b;
    }
    str() {
      return D("str()", "toString()"), `(${this.r}, ${this.g}, ${this.b})`;
    }
    toString() {
      return `(${this.r}, ${this.g}, ${this.b})`;
    }
    static fromHSL(t, i, c) {
      if (i == 0)
        return v(255 * c, 255 * c, 255 * c);
      let V = l((B, W, K) => (K < 0 && (K += 1), K > 1 && (K -= 1), K < 1 / 6 ? B + (W - B) * 6 * K : K < 1 / 2 ? W : K < 2 / 3 ? B + (W - B) * (2 / 3 - K) * 6 : B), "hue2rgb"), w = c < 0.5 ? c * (1 + i) : c + i - c * i, f = 2 * c - w, X = V(f, w, t + 1 / 3), M = V(f, w, t), q = V(f, w, t - 1 / 3);
      return new me(Math.round(X * 255), Math.round(M * 255), Math.round(q * 255));
    }
  }, "me");
  var E = me;
  l(E, "Color"), x(E, "RED", v(255, 0, 0)), x(E, "GREEN", v(0, 255, 0)), x(E, "BLUE", v(0, 0, 255)), x(E, "YELLOW", v(255, 255, 0)), x(E, "MAGENTA", v(255, 0, 255)), x(E, "CYAN", v(0, 255, 255)), x(E, "WHITE", v(255, 255, 255)), x(E, "BLACK", v(0, 0, 0));
  function v(...t) {
    if (t.length === 0)
      return new E(255, 255, 255);
    if (t.length === 1) {
      if (t[0] instanceof E)
        return t[0].clone();
      if (Array.isArray(t[0]) && t[0].length === 3)
        return E.fromArray(t[0]);
    }
    return new E(...t);
  }
  __name(v, "v");
  l(v, "rgb");
  var es = l((t, i, c) => E.fromHSL(t, i, c), "hsl2rgb");
  var z = /* @__PURE__ */ __name(class {
    constructor(t, i, c, V) {
      x(this, "x", 0), x(this, "y", 0), x(this, "w", 1), x(this, "h", 1), this.x = t, this.y = i, this.w = c, this.h = V;
    }
    scale(t) {
      return new z(this.x + this.w * t.x, this.y + this.h * t.y, this.w * t.w, this.h * t.h);
    }
    clone() {
      return new z(this.x, this.y, this.w, this.h);
    }
    eq(t) {
      return this.x === t.x && this.y === t.y && this.w === t.w && this.h === t.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  }, "z");
  l(z, "Quad");
  function gn(t, i, c, V) {
    return new z(t, i, c, V);
  }
  __name(gn, "gn");
  l(gn, "quad");
  var R = /* @__PURE__ */ __name(class {
    constructor(t) {
      x(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), t && (this.m = t);
    }
    clone() {
      return new R(this.m);
    }
    mult(t) {
      let i = [];
      for (let c = 0; c < 4; c++)
        for (let V = 0; V < 4; V++)
          i[c * 4 + V] = this.m[0 * 4 + V] * t.m[c * 4 + 0] + this.m[1 * 4 + V] * t.m[c * 4 + 1] + this.m[2 * 4 + V] * t.m[c * 4 + 2] + this.m[3 * 4 + V] * t.m[c * 4 + 3];
      return new R(i);
    }
    multVec4(t) {
      return { x: t.x * this.m[0] + t.y * this.m[4] + t.z * this.m[8] + t.w * this.m[12], y: t.x * this.m[1] + t.y * this.m[5] + t.z * this.m[9] + t.w * this.m[13], z: t.x * this.m[2] + t.y * this.m[6] + t.z * this.m[10] + t.w * this.m[14], w: t.x * this.m[3] + t.y * this.m[7] + t.z * this.m[11] + t.w * this.m[15] };
    }
    multVec3(t) {
      let i = this.multVec4({ x: t.x, y: t.y, z: t.z, w: 1 });
      return Ve(i.x, i.y, i.z);
    }
    multVec2(t) {
      return d(t.x * this.m[0] + t.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], t.x * this.m[1] + t.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
    }
    static translate(t) {
      return new R([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t.x, t.y, 0, 1]);
    }
    static scale(t) {
      return new R([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(t) {
      return t = he(-t), new R([1, 0, 0, 0, 0, Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1]);
    }
    static rotateY(t) {
      return t = he(-t), new R([Math.cos(t), 0, Math.sin(t), 0, 0, 1, 0, 0, -Math.sin(t), 0, Math.cos(t), 0, 0, 0, 0, 1]);
    }
    static rotateZ(t) {
      return t = he(-t), new R([Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(t) {
      return this.mult(R.translate(t));
    }
    scale(t) {
      return this.mult(R.scale(t));
    }
    rotateX(t) {
      return this.mult(R.rotateX(t));
    }
    rotateY(t) {
      return this.mult(R.rotateY(t));
    }
    rotateZ(t) {
      return this.mult(R.rotateZ(t));
    }
    invert() {
      let t = [], i = this.m[10] * this.m[15] - this.m[14] * this.m[11], c = this.m[9] * this.m[15] - this.m[13] * this.m[11], V = this.m[9] * this.m[14] - this.m[13] * this.m[10], w = this.m[8] * this.m[15] - this.m[12] * this.m[11], f = this.m[8] * this.m[14] - this.m[12] * this.m[10], X = this.m[8] * this.m[13] - this.m[12] * this.m[9], M = this.m[6] * this.m[15] - this.m[14] * this.m[7], q = this.m[5] * this.m[15] - this.m[13] * this.m[7], B = this.m[5] * this.m[14] - this.m[13] * this.m[6], W = this.m[4] * this.m[15] - this.m[12] * this.m[7], K = this.m[4] * this.m[14] - this.m[12] * this.m[6], Tt = this.m[5] * this.m[15] - this.m[13] * this.m[7], it = this.m[4] * this.m[13] - this.m[12] * this.m[5], nt = this.m[6] * this.m[11] - this.m[10] * this.m[7], st = this.m[5] * this.m[11] - this.m[9] * this.m[7], ge = this.m[5] * this.m[10] - this.m[9] * this.m[6], we = this.m[4] * this.m[11] - this.m[8] * this.m[7], xe = this.m[4] * this.m[10] - this.m[8] * this.m[6], J = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      t[0] = this.m[5] * i - this.m[6] * c + this.m[7] * V, t[4] = -(this.m[4] * i - this.m[6] * w + this.m[7] * f), t[8] = this.m[4] * c - this.m[5] * w + this.m[7] * X, t[12] = -(this.m[4] * V - this.m[5] * f + this.m[6] * X), t[1] = -(this.m[1] * i - this.m[2] * c + this.m[3] * V), t[5] = this.m[0] * i - this.m[2] * w + this.m[3] * f, t[9] = -(this.m[0] * c - this.m[1] * w + this.m[3] * X), t[13] = this.m[0] * V - this.m[1] * f + this.m[2] * X, t[2] = this.m[1] * M - this.m[2] * q + this.m[3] * B, t[6] = -(this.m[0] * M - this.m[2] * W + this.m[3] * K), t[10] = this.m[0] * Tt - this.m[1] * W + this.m[3] * it, t[14] = -(this.m[0] * B - this.m[1] * K + this.m[2] * it), t[3] = -(this.m[1] * nt - this.m[2] * st + this.m[3] * ge), t[7] = this.m[0] * nt - this.m[2] * we + this.m[3] * xe, t[11] = -(this.m[0] * st - this.m[1] * we + this.m[3] * J), t[15] = this.m[0] * ge - this.m[1] * xe + this.m[2] * J;
      let ot = this.m[0] * t[0] + this.m[1] * t[4] + this.m[2] * t[8] + this.m[3] * t[12];
      for (let ye = 0; ye < 4; ye++)
        for (let ve = 0; ve < 4; ve++)
          t[ye * 4 + ve] *= 1 / ot;
      return new R(t);
    }
    toString() {
      return this.m.toString();
    }
  }, "R");
  l(R, "Mat4");
  function Ur(t, i, c, V = Math.sin) {
    return t + (V(c) + 1) / 2 * (i - t);
  }
  __name(Ur, "Ur");
  l(Ur, "wave");
  var ts = 1103515245;
  var rs = 12345;
  var on = 2147483648;
  var qt = /* @__PURE__ */ __name(class {
    constructor(t) {
      x(this, "seed"), this.seed = t;
    }
    gen(...t) {
      if (t.length === 0)
        return this.seed = (ts * this.seed + rs) % on, this.seed / on;
      if (t.length === 1) {
        if (typeof t[0] == "number")
          return this.gen(0, t[0]);
        if (t[0] instanceof S)
          return this.gen(d(0, 0), t[0]);
        if (t[0] instanceof E)
          return this.gen(v(0, 0, 0), t[0]);
      } else if (t.length === 2) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.gen() * (t[1] - t[0]) + t[0];
        if (t[0] instanceof S && t[1] instanceof S)
          return d(this.gen(t[0].x, t[1].x), this.gen(t[0].y, t[1].y));
        if (t[0] instanceof E && t[1] instanceof E)
          return v(this.gen(t[0].r, t[1].r), this.gen(t[0].g, t[1].g), this.gen(t[0].b, t[1].b));
      }
    }
  }, "qt");
  l(qt, "RNG");
  var Kr = new qt(Date.now());
  function wn(t) {
    return D("rng()", "new RNG()"), new qt(t);
  }
  __name(wn, "wn");
  l(wn, "rng");
  function xn(t) {
    return t != null && (Kr.seed = t), Kr.seed;
  }
  __name(xn, "xn");
  l(xn, "randSeed");
  function tt(...t) {
    return Kr.gen(...t);
  }
  __name(tt, "tt");
  l(tt, "rand");
  function Lr(...t) {
    return Math.floor(tt(...t));
  }
  __name(Lr, "Lr");
  l(Lr, "randi");
  function yn(t) {
    return tt() <= t;
  }
  __name(yn, "yn");
  l(yn, "chance");
  function vn(t) {
    return t[Lr(t.length)];
  }
  __name(vn, "vn");
  l(vn, "choose");
  function En(t, i) {
    return t.p2.x >= i.p1.x && t.p1.x <= i.p2.x && t.p2.y >= i.p1.y && t.p1.y <= i.p2.y;
  }
  __name(En, "En");
  l(En, "testRectRect2");
  function Yr(t, i) {
    return t.p2.x > i.p1.x && t.p1.x < i.p2.x && t.p2.y > i.p1.y && t.p1.y < i.p2.y;
  }
  __name(Yr, "Yr");
  l(Yr, "testRectRect");
  function Dr(t, i) {
    if (t.p1.x === t.p2.x && t.p1.y === t.p2.y || i.p1.x === i.p2.x && i.p1.y === i.p2.y)
      return null;
    let c = (i.p2.y - i.p1.y) * (t.p2.x - t.p1.x) - (i.p2.x - i.p1.x) * (t.p2.y - t.p1.y);
    if (c === 0)
      return null;
    let V = ((i.p2.x - i.p1.x) * (t.p1.y - i.p1.y) - (i.p2.y - i.p1.y) * (t.p1.x - i.p1.x)) / c, w = ((t.p2.x - t.p1.x) * (t.p1.y - i.p1.y) - (t.p2.y - t.p1.y) * (t.p1.x - i.p1.x)) / c;
    return V < 0 || V > 1 || w < 0 || w > 1 ? null : V;
  }
  __name(Dr, "Dr");
  l(Dr, "testLineLineT");
  function le(t, i) {
    let c = Dr(t, i);
    return c ? d(t.p1.x + c * (t.p2.x - t.p1.x), t.p1.y + c * (t.p2.y - t.p1.y)) : null;
  }
  __name(le, "le");
  l(le, "testLineLine");
  function Ut(t, i) {
    return ae(t, i.p1) || ae(t, i.p2) ? true : !!le(i, new Pe(t.p1, d(t.p2.x, t.p1.y))) || !!le(i, new Pe(d(t.p2.x, t.p1.y), t.p2)) || !!le(i, new Pe(t.p2, d(t.p1.x, t.p2.y))) || !!le(i, new Pe(d(t.p1.x, t.p2.y), t.p1));
  }
  __name(Ut, "Ut");
  l(Ut, "testRectLine");
  function ae(t, i) {
    return i.x > t.p1.x && i.x < t.p2.x && i.y > t.p1.y && i.y < t.p2.y;
  }
  __name(ae, "ae");
  l(ae, "testRectPoint");
  function Or(t, i) {
    let c = Math.max(t.p1.x, Math.min(i.center.x, t.p2.x)), V = Math.max(t.p1.y, Math.min(i.center.y, t.p2.y));
    return d(c, V).dist(i.center) <= i.radius;
  }
  __name(Or, "Or");
  l(Or, "testRectCircle");
  function Kt(t, i) {
    return St(i, [t.p1, d(t.p2.x, t.p1.y), t.p2, d(t.p1.x, t.p2.y)]);
  }
  __name(Kt, "Kt");
  l(Kt, "testRectPolygon");
  function Wr(t, i) {
    return false;
  }
  __name(Wr, "Wr");
  l(Wr, "testLinePoint");
  function jr(t, i) {
    return false;
  }
  __name(jr, "jr");
  l(jr, "testLineCircle");
  function rt(t, i) {
    if (Se(i, t.p1) || Se(i, t.p2))
      return true;
    for (let c = 0; c < i.length; c++) {
      let V = i[c], w = i[(c + 1) % i.length];
      if (le(t, { p1: V, p2: w }))
        return true;
    }
    return false;
  }
  __name(rt, "rt");
  l(rt, "testLinePolygon");
  function Pt(t, i) {
    return t.center.dist(i) < t.radius;
  }
  __name(Pt, "Pt");
  l(Pt, "testCirclePoint");
  function Hr(t, i) {
    return t.center.dist(i.center) < t.radius + i.radius;
  }
  __name(Hr, "Hr");
  l(Hr, "testCircleCircle");
  function zr(t, i) {
    return false;
  }
  __name(zr, "zr");
  l(zr, "testCirclePolygon");
  function St(t, i) {
    for (let c = 0; c < t.length; c++) {
      let V = { p1: t[c], p2: t[(c + 1) % t.length] };
      if (rt(V, i))
        return true;
    }
    return false;
  }
  __name(St, "St");
  l(St, "testPolygonPolygon");
  function Se(t, i) {
    let c = false;
    for (let V = 0, w = t.length - 1; V < t.length; w = V++)
      t[V].y > i.y != t[w].y > i.y && i.x < (t[w].x - t[V].x) * (i.y - t[V].y) / (t[w].y - t[V].y) + t[V].x && (c = !c);
    return c;
  }
  __name(Se, "Se");
  l(Se, "testPolygonPoint");
  function Fn(t, i) {
    return t.eq(i);
  }
  __name(Fn, "Fn");
  l(Fn, "testPointPoint");
  function Bt(t, i) {
    switch (t.shape) {
      case "rect":
        return Yr(i, t);
      case "line":
        return Ut(i, t);
      case "circle":
        return Or(i, t);
      case "polygon":
        return Kt(i, t.pts);
      case "point":
        return ae(i, t.pt);
    }
    throw new Error(`Unknown area shape: ${t.shape}`);
  }
  __name(Bt, "Bt");
  l(Bt, "testAreaRect");
  function Jr(t, i) {
    switch (t.shape) {
      case "rect":
        return Ut(t, i);
      case "line":
        return Boolean(le(t, i));
      case "circle":
        return jr(i, t);
      case "polygon":
        return rt(i, t.pts);
      case "point":
        return Wr(i, t.pt);
    }
    throw new Error(`Unknown area shape: ${t.shape}`);
  }
  __name(Jr, "Jr");
  l(Jr, "testAreaLine");
  function Qr(t, i) {
    switch (t.shape) {
      case "rect":
        return Or(t, i);
      case "line":
        return jr(t, i);
      case "circle":
        return Hr(t, i);
      case "polygon":
        return zr(i, t.pts);
      case "point":
        return Pt(i, t.pt);
    }
    throw new Error(`Unknown area shape: ${t.shape}`);
  }
  __name(Qr, "Qr");
  l(Qr, "testAreaCircle");
  function Zr(t, i) {
    switch (t.shape) {
      case "rect":
        return Kt(t, i);
      case "line":
        return rt(t, i);
      case "circle":
        return zr(t, i);
      case "polygon":
        return St(i, t.pts);
      case "point":
        return Se(i, t.pt);
    }
    throw new Error(`Unknown area shape: ${t.shape}`);
  }
  __name(Zr, "Zr");
  l(Zr, "testAreaPolygon");
  function Rt(t, i) {
    switch (t.shape) {
      case "rect":
        return ae(t, i);
      case "line":
        return Wr(t, i);
      case "circle":
        return Pt(t, i);
      case "polygon":
        return Se(t.pts, i);
      case "point":
        return Fn(t.pt, i);
    }
    throw new Error(`Unknown area shape: ${t.shape}`);
  }
  __name(Rt, "Rt");
  l(Rt, "testAreaPoint");
  function Pr(t, i) {
    switch (i.shape) {
      case "rect":
        return Bt(t, i);
      case "line":
        return Jr(t, i);
      case "circle":
        return Qr(t, i);
      case "polygon":
        return Zr(t, i.pts);
      case "point":
        return Rt(t, i.pt);
    }
    throw new Error(`Unknown area shape: ${i.shape}`);
  }
  __name(Pr, "Pr");
  l(Pr, "testAreaArea");
  function Ct(t, i) {
    return { p1: d(t.p1.x - i.p2.x, t.p1.y - i.p2.y), p2: d(t.p2.x - i.p1.x, t.p2.y - i.p1.y) };
  }
  __name(Ct, "Ct");
  l(Ct, "minkDiff");
  var Pe = /* @__PURE__ */ __name(class {
    constructor(t, i) {
      x(this, "p1"), x(this, "p2"), this.p1 = t, this.p2 = i;
    }
  }, "Pe");
  l(Pe, "Line");
  var Sr = /* @__PURE__ */ __name(class {
    constructor(t, i) {
      x(this, "p1"), x(this, "p2"), this.p1 = t, this.p2 = i;
    }
  }, "Sr");
  l(Sr, "Rect");
  var bn = /* @__PURE__ */ __name(class {
    constructor(t, i) {
      x(this, "center"), x(this, "radius"), this.center = t, this.radius = i;
    }
  }, "bn");
  l(bn, "Circle");
  var Cn = /* @__PURE__ */ __name(class {
    constructor() {
      x(this, "buf", []), x(this, "timer", 0), x(this, "fps", 0);
    }
    tick(t) {
      this.buf.push(1 / t), this.timer += t, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(this.buf.reduce((i, c) => i + c) / this.buf.length), this.buf = []);
    }
  }, "Cn");
  l(Cn, "FPSCounter");
  var $e = /* @__PURE__ */ __name(class {
    constructor(t, i) {
      x(this, "time"), x(this, "action"), x(this, "finished", false), x(this, "paused", false), this.time = t, this.action = i;
    }
    tick(t) {
      return this.finished || this.paused ? false : (this.time -= t, this.time <= 0 ? (this.action(), this.finished = true, this.time = 0, true) : false);
    }
    reset(t) {
      this.time = t, this.finished = false;
    }
  }, "$e");
  l($e, "Timer");
  var is = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1cAAAFyCAMAAAAu4tBuAAAAAXNSR0IArs4c6QAAAE5QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////kJcbLQAAABl0Uk5TABAgLzBAUF9gb3B/gI+Qn6CvsL/Az9Df77brr10AAEaZSURBVHja7V3ZgqQosxaO2JRJuSS/Dbz/i54LN9QICEytrJwmrma6LAshvtiIpSgyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKYE4y3uQKdPFqDLOfedtyJTpUtLOOSffvgyhlOTv341SiETtXRJWXWaL4J8j45xz7dth5ZxzJsZ+rJJyx/fXcqx2zpkkeD+cFbFnvhPf+W/ZSzzj6mZcuTJ8Ato555xruW/EmvLCM3apyvvhnNOEb8vAgunLOtfzfxpXZbV8PxfsFlyJ2BGMZKv53zrnnGXvw9XDOedM5CHpMrBCW+OafxlXD+dsufwngU0eZlgf+jKaxXHFYyw80wSsKoZGJptW61ZV/BZc0diitCQj9591QiLcx8s095SxT8IVc4vFw0ky5ts59/RBUb+Eq8qHlbN8XTuuLoRef0PL63HFrXPO/SXCr88wgjcmIBhZrUeh1ArqO7+se5AspGYw1hrdVOyduOIrriTlN7jP8tw551RIpH8755xTdYXJJuOcc1bxUtoF1jIIA/a9gSJFxSbiSlMNvMa5mGD5h9VVQDCa9fiIXtgj7qcXRVFI7832m/8KXCnKb3TOOTf4cqkOCCWf/4dWIvpsZGFunXM2qq74X7cjW16LKxn3CTcItNkSBNWVJJn+zv657EyYTha5P4CrhvIbg/MiZUPoYyuzB4Az1f4h5R2AmkTSuIeYGjzAarEeL8IVM3Sfe7QY2wwlSF0xEqxICn88kxiuuEkXuT+Aq47wG8z36Mf/YSRrbfpOBqk/7ukuMR8LD8pC51opFn2or8TVI0XS1XTd9s/Q5DJjnPR1ZAtBOpPoc2dE7i/BlfAFjMDtNfbXgcTjuJLBU5lEkhEbnciuw9UoGmXSNusMpr1xjApGPl2r2EZKNT1qSOcXw9UDYjj9Gbiq/Xte5fzYILS3E6lWDzBaas/k+x5fHVRXfGc4T6dUXYcrSbm62gua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";
  var ns = "data:image/png;base64,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";
  var ss = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAACAAQMAAADOEv75AAAAAXNSR0IArs4c6QAAAAZQTFRFAAAA////pdmf3QAAAAF0Uk5TAEDm2GYAAASQSURBVDjLVZVNTBtHFMffrk0YHLc21JVQuwrrdQOOFdVwa0NktlYl3FRVCRLnUvWSICJhuKStIoa1CYs5uAdOyELWlqTWumoFB4RItXJIJCMqxe2x4mIKjRGH2imHGkzsvlljKHPY3Z//M+9rnp7hBBrrKYXXWZd7w4THBlR1I5y1dzuM0iMKtaJx/PNiaFNTH6Jy3agUEfTfo6iMJMYUezfR0tMGGiDuLIDD2H6Dwrlpu/n8urDIXg4VaAd90XtPpCbk7y+ubt8bU0g4l4Cj1yurN3fKkfZYlwC145WH2w88RSP2gwBHZWO19yv3M1QCkJ/8pVariXhmIwDU2TDNBwCi82KnvSeGtnkG33xilfsJgBXBSIaI/LlqAnWNRUHuD1jyKNLANRuVb6HiRCuuVy0gy6SbAXVJnbSHgpMXz7IB9hmeCVwuBMIZIFYBVFVpI1JMxG0SqDTqyfExiXh2eEhN2UPe6LgIMkRBVXjVG53Ng8gRUKPSsVdVpfa3/gSYKCZasiScIcRKztywWGAsLhwWE3O7muJNwGxIixFJpVpkVIN1bzJGRJUuKT8i+MW53Ptluqb4NIjsJ9k2dUm5poHiNc+oGoNxv3C4L8wV0HUCLqxXOeHYq8f8axEFIObVJAQxKU8zSCIMukVZpfCPX5Cu+txBkV2e4lUQBqKik0FIkySfqpowlUq4N1xqfO0yDVz0002AWCilyTwrJIIVKIisoq2/CndzC8uRx55PBYDr2sJ7nZt0TcLkuP3k3B6mvSSlNOBHtQXrFawBAy4t3H3Oz+1r7zTyEaD5gj/BQ93sLZsVFadbYTl9xcz0OzHWBlujyaCZHMg2zFQIXvVJklOkdti6wyPc3kNwwXLq5oeYjz/hoW1AzVbgMvhwQ8vQCDYa+4WWAGz6pTpMlSH4aKSlDpETpjiVvnzVEvm3imdkMUhExSrPVFGhsoRAxHgNz8i0rQGoAN8ADnwAJjhqwCv6JThTmnwOMK3VlY547qRqoWh6qMnXlzH7qbkKuqJP5k3AcFCplUzgyqDTBmAKb3+ROS+eLfm/Sp4qjsy5YqllefxwOQ46cBDUMiIMAwFfB+0zoWQq8dopMKUO6HRoADqmSrsYHosgaUKWsAhOlU2Vy5QaSk7dzQ+DfHsA3uze3aKWYYCkmGKwSVkEp0qOsls5VTLAyXUFr4MNB8lUcNA5jMoBZcq7EbqT02JdhCmpj+lhwTXom2cR/Kaplb+EiQJhEXyJHb+vl3GmoLLiveHMGWVFYgrrt8ZKEb5eE7w5bsBmAci4BvHejiAV7BK4lzd0hLGpAbnLsBTXY0zZ4nFUnkJlrwniRmsuwc5UDninEvhghkgI4edNTl64r2CfcWcTSOAdT9FZO5fxi83COPkIRl78NJGH8gxh8OT7dj3Zi9NRR6i8tFd2YKyujOSMcL//j1vzEgK6h0tUbZIGGTQL4HgCTTDITGPBzDtmTnsiQrogcM/sDL7NGse6PrG3GGQpFH1p/GtITa4jlP8OhD/T0vsPWKaVoqHatKPQJNsWzvrQ+mxo8jyF7TuTWKr/ABVF/mebwsnnAAAAAElFTkSuQmCC";
  var os = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAA8AgMAAADTWFpWAAAAAXNSR0IArs4c6QAAAAlQTFRFAAAAAAAA////g93P0gAAAAF0Uk5TAEDm2GYAAANeSURBVDjLjVVLruQoEMQLfAMsuU7DEVgklux1YulxGi84AgftiAS/eeqZUTcl47IJ8hMZpJ1zPgYJyUcnIfrkU4hZ3Dv4b4277s8mWa+0PtvzSbcCbmPRCTjb1Usrj3/2FJ6rrS+gTUDtt+SnpDXtbnlqP2CajvxjgCCw0LZ0io8EXK1253htyQB8OHSPNzwScOshPtHCTlcM6Gy1nVLgkTFkWeP6cOV008L+HKnoBQvMgkv0vsbipgXyIBIYFniwbQb7h5B/jZcJ7A0xMCDJwjue08thwKq72icyrQVcXGDgQsIvhztWXNEtFs3qW5GCQPlDiNG3LBueneoaubxJRaoZy3yzxi3VDtAA+La2U7m4wMGwsKOmCzYaYEtcFOz1D9joEADfCTYmxHAIOESI9L7Ca8CWD6zWvlElzICxQw2NZUZWzcctLpplRyyOuTN7ZwzAuPGAIhkP33T9PsKPv9iVsStPS4LZC4bjZEwiY3ivMxZFuGtHQo5BG5NnG/yBSSFNEAvpcl/9C3d3W3okAUQnQhC5loYV/aIhAmojo/Wpzw03axStiS5u8ySk6NsCyYpqFjB3AmYFGQN3MYb5BABiuB4Yn1ngybIYs44sLPPJg4ynycbk4Y9j7GZFON45Q885WiWGf9YU8Vli9F9xImq0g/fmcMgAMA/IB2fqiGczgFpSlj0AJN6DBWqhqLkYaRJwtltxxlE+xbkGozxYg6hs/O0PLQASFZ1hNhGw19QIxglJ9/gnJS7tiNZEwB6iGGpcERZVzixw0qxvQHrBGKMaeQm6DHlwvFyWPzPp02iGnLzwxo5JHieArUZHtG7rvFFR6uo3AHUouIIGdLmAE45+C3Ue0DprhHw/7QZRl7Iel97oF2svEN6XvXcL9lK9VA/OKJS8Ra8V1N/2Hk4u0ySP7+6GJqlqAlgnkt2nBdkBpiaFMLmtjLSgM4Znd8HUwJ3eZutXwTTJb0Zwn0Y9XZiX/9bkePEXUrUzH/+vI2B8oIYazRL8Mwb0qZ+q3qEnaJKfE2TALPqr6mJ5nKjImm5aAAfkARZe0ULVrdgHwaIYB/Vqu3tFS+kNCxYOLajLuoPsIdqrnzMGAzAGVL9t3T5rjY209pGFAVB/hX6Sl1eTn5blBw8yFfc7m+/4BR+d4KDrSif0AAAAAElFTkSuQmCC";
  var us = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA2CAMAAABAzG8wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEyUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcPCw4ICA4dFw4eFg4eFxAQEBUsIhUtIhwPDxwQEBw8LR07LR08LSAgICNKOCNLOCRKOCRLOCoXFypZQypaQytZQytaQzAwMDFoTjFoTzFpTzgfHzh3WTh3Wjh4Wjl3WTl3Wjl4Wj+GZUBAQECGZECGZUCHZUYnJ0aVcEeVcE2ke06ke06kfFBQUFQuLlSzhlUuLlWzhlvCkVzCkVzCkmBgYGM2NmPRnWrgqHA+PnBwcHHvs35FRYCAgIxNTY1NTZCQkJtUVJtVVZ+fn6CgoKlcXKldXbdkZL+/v8Vra8VsbNDQ0NNzc9/f3+F7e////ysmAfQAAAAVdFJOUwAQIDBAUGBvcH+AkJ+gr7C/z9Df74JQjt0AAAO5SURBVEjHnVfrQtowFKaADC1qu9I6YSBecIKoOHAD2bhssMpc6zqn010c0/H+r7CcJG2TFAru/LCYnu/kO9ekkUiIxBJyStXSOhJNVeRkPPIIiS8qGMlJWklE50PLQbArKzN5SIuaHiraQjjc3/zZ7lHHtGwHiTXs1XYz7ovUdEc8uLHfsRxRhq1MOIn4U4reMZ0pYpaIyuIk/BMKP7GdELEyUyxIK/PAQU4mWogS+ocz4RALTCLJ749zZ5ghMLteMHQ9VzapG2kuF5h/Dgfe7lbQe6NQ5dJgFbz0rlvOEJnSFTZ9GI/p1w1Ps+ybeGOwtVR3Tnknoh5+mNF5TSJVoRrLzgtwQnINaIQY2kisW2KhzKwcUHIGQyEBSx2k+JpVbNK96P7ZLFk/v9uGh/mKiQIQKAl4/WB8SzTJ8vYDNZAdP8DjnQ1/o34EkQNd/P7WtTAe32EDFsGPvfVror/l+QAEXiICEL/sH19xfA6hcdrwT/Nh7DLAVBBh8CHlRgAiiHfSL8dN14VLEhobZ3D7+j1Zb4JjBiWssgQwJ6RJwqx//4yLxm8fVk4dsqGG8As0AkgOWR0cQQO/sLYEPN7PgV/IwDJNAUhH2MvoTXxB8NSARFLlVnyJVVwf+q1QMgJWiYEEdTSoKUwGu7P7HOZky12lMVhFjyO+b3tHm5ub+61Zk8EkpZhmPXiUtHAdxIDrf+GdIoImcAh2/guPeyEWkdHfWrimdWa2G7VKpVDkRlSbxFCBxgpiLLPdrlUrhVyGnUQ5VgeKS45EVPT46K8OKkUew9eVkAPoZkiCny8r/FgtCQRWUSHDOu9XQDY2jvv9Pb9jfM14wECXxVx8ufr26/f9X5BRnieAGxQPA94AdoFiOPngTl0qZW+eaTwziN+PIP7KnQFU8JRcwuNM5dMIzdgP4EdrfMcNdDpL6DRoCMkZifi8N1qIowZzMibR7wKTHQjOMY+/3+MdIBNugT3UmMbt6aITBH/on+2GHwAQqOWqUCD62xHPnylicvj5eHKsDZkmwwTzX+n2F2v+uQ1vqyKeHqx24A6U79/8vPm0pnP4YS6Ij8Q5lUnHQMl2ryjkwpsQbkeyLpQZvUW5LXjK3zG0WOB6pmK9BjeaM8Jotut0RZYmXG9Vcgq0bWE0o6suWRpU6YzQJl+1JZluV+4GZ7k9qLp00kvStDtywruh54q1rnvDPus2Kjn/a2E6HCpyOXwYzYBjE0vTvxPSSnzOLxV10geGHJfm/1aS4klZUQgXTVtJJWeA/wFPmR833RRQSAAAAABJRU5ErkJggg==";
  var as = _n("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var ls = "data:image/png;base64,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";
  var hs = "data:image/png;base64,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";
  var un = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
  var an = ["left", "middle", "right", "back", "forward"];
  var cs = ["space", "left", "right", "up", "down", "tab", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "s"];
  var ln = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var As = " \u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0";
  var hn = 0;
  var cn = 3;
  var ds = 0;
  var fs = 3;
  var ps = -1200;
  var Vs = 1200;
  var Ze = "topleft";
  var An = 1600;
  var bt = 65536;
  var dn = 64;
  var ms = "apl386o";
  var Xr = "sink";
  var _e = 9;
  var gs = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var ws = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var Br = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var Rr = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var xs = /* @__PURE__ */ new Set(["id", "require"]);
  var ys = /* @__PURE__ */ new Set(["add", "load", "update", "draw", "destroy", "inspect"]);
  function Tr(t) {
    return t === "pressed" || t === "rpressed" ? "down" : t === "released" ? "up" : t;
  }
  __name(Tr, "Tr");
  l(Tr, "processButtonState");
  function Xn(t) {
    t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen();
  }
  __name(Xn, "Xn");
  l(Xn, "enterFullscreen");
  function Bn() {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
  }
  __name(Bn, "Bn");
  l(Bn, "exitFullscreen");
  function Rn() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  __name(Rn, "Rn");
  l(Rn, "getFullscreenElement");
  function Ke(t) {
    switch (t) {
      case "topleft":
        return d(-1, -1);
      case "top":
        return d(0, -1);
      case "topright":
        return d(1, -1);
      case "left":
        return d(-1, 0);
      case "center":
        return d(0, 0);
      case "right":
        return d(1, 0);
      case "botleft":
        return d(-1, 1);
      case "bot":
        return d(0, 1);
      case "botright":
        return d(1, 1);
      default:
        return t;
    }
  }
  __name(Ke, "Ke");
  l(Ke, "originPt");
  function kr() {
    return new AudioBuffer({ length: 1, numberOfChannels: 1, sampleRate: 44100 });
  }
  __name(kr, "kr");
  l(kr, "createEmptyAudioBuffer");
  var vs = l((t = {}) => {
    let i = (() => {
      var e, r, n;
      let a = (e = t.root) != null ? e : document.body;
      a === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
      let o = (r = t.canvas) != null ? r : (() => {
        let h = document.createElement("canvas");
        return a.appendChild(h), h;
      })(), s = (n = t.scale) != null ? n : 1;
      t.width && t.height && !t.stretch && !t.letterbox ? (o.width = t.width * s, o.height = t.height * s) : (o.width = o.parentElement.offsetWidth, o.height = o.parentElement.offsetHeight);
      let u = ["outline: none", "cursor: default"];
      t.crisp && (u.push("image-rendering: pixelated"), u.push("image-rendering: crisp-edges")), o.style = u.join(";"), o.setAttribute("tabindex", "0");
      let A = o.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
      return { canvas: o, scale: s, gl: A, keyStates: {}, mouseStates: {}, charInputted: [], isMouseMoved: false, isKeyPressed: false, isKeyPressedRepeat: false, isKeyReleased: false, mousePos: d(0, 0), mouseDeltaPos: d(0, 0), time: 0, realTime: 0, skipTime: false, dt: 0, numFrames: 0, isTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0, loopID: null, stopped: false, paused: false, fpsCounter: new Cn(), loaded: false };
    })(), c = (() => {
      var e, r;
      let n = i.gl, a = Nt(Br, Rr), o = ke(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), s = (e = t.background) != null ? e : v(0, 0, 0);
      if (t.background) {
        let p = E.fromArray(t.background);
        n.clearColor(p.r / 255, p.g / 255, p.b / 255, (r = t.background[3]) != null ? r : 1);
      }
      n.enable(n.BLEND), n.enable(n.SCISSOR_TEST), n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
      let u = n.createBuffer();
      n.bindBuffer(n.ARRAY_BUFFER, u), n.vertexAttribPointer(0, 3, n.FLOAT, false, _e * 4, 0), n.enableVertexAttribArray(0), n.vertexAttribPointer(1, 2, n.FLOAT, false, _e * 4, 12), n.enableVertexAttribArray(1), n.vertexAttribPointer(2, 4, n.FLOAT, false, _e * 4, 20), n.enableVertexAttribArray(2), n.bufferData(n.ARRAY_BUFFER, bt * 4, n.DYNAMIC_DRAW), n.bindBuffer(n.ARRAY_BUFFER, null);
      let A = n.createBuffer();
      n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, A), n.bufferData(n.ELEMENT_ARRAY_BUFFER, bt * 2, n.DYNAMIC_DRAW), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, null);
      let h = ke(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: a, curShader: a, defTex: o, curTex: o, curUniform: {}, vbuf: u, ibuf: A, vqueue: [], iqueue: [], transform: new R(), transformStack: [], bgTex: h, width: t.width, height: t.height, viewport: { x: 0, y: 0, width: n.drawingBufferWidth, height: n.drawingBufferHeight } };
    })();
    jt();
    let V = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(), r = e.createGain();
      r.connect(e.destination);
      let n = { buf: kr() };
      return e.decodeAudioData(as.buffer.slice(0), (a) => {
        n.buf = a;
      }, () => {
        throw new Error("Failed to load burp.");
      }), { ctx: e, masterNode: r, burpSnd: n };
    })(), w = { numLoading: 0, numLoaded: 0, urlPrefix: "", sprites: {}, sounds: {}, shaders: {}, fonts: {} }, f = { events: {}, objEvents: {}, root: Zt([]), timers: new ee(), layers: {}, defLayer: null, gravity: An, on(e, r) {
      return this.events[e] || (this.events[e] = new ee()), this.events[e].pushd(r);
    }, trigger(e, ...r) {
      this.events[e] && this.events[e].forEach((n) => n(...r));
    }, scenes: {}, logs: [], cam: { pos: ze(), scale: d(1), angle: 0, shake: 0, transform: new R() } };
    function X(e) {
      return w.numLoading++, new Promise((r, n) => {
        e.then(r).catch((a) => {
          C.error(a), n(a);
        }).finally(() => {
          w.numLoading--, w.numLoaded++;
        });
      });
    }
    __name(X, "X");
    l(X, "load");
    function M() {
      return w.numLoaded / (w.numLoading + w.numLoaded);
    }
    __name(M, "M");
    l(M, "loadProgress");
    function q(e) {
      return e !== void 0 && (w.urlPrefix = e), w.urlPrefix;
    }
    __name(q, "q");
    l(q, "loadRoot");
    function B(e) {
      let r = w.urlPrefix + e;
      return fetch(r).then((n) => {
        if (!n.ok)
          throw new Error(`Failed to fetch ${r}`);
        return n;
      });
    }
    __name(B, "B");
    l(B, "fetchURL");
    function W(e) {
      let r = new Image();
      return r.src = Vn(e) ? e : w.urlPrefix + e, r.crossOrigin = "anonymous", new Promise((n, a) => {
        r.onload = () => n(r), r.onerror = () => a(`Failed to load image from "${e}"`);
      });
    }
    __name(W, "W");
    l(W, "loadImg");
    function K(e, r, n, a, o = {}) {
      return X(W(r).then((s) => {
        var u;
        let A = ti(ke(s, o), n, a, (u = o.chars) != null ? u : ln);
        return e && (w.fonts[e] = A), A;
      }));
    }
    __name(K, "K");
    l(K, "loadFont");
    function Tt(e) {
      var r;
      return (r = w.sprites[e]) != null ? r : null;
    }
    __name(Tt, "Tt");
    l(Tt, "getSprite");
    function it(e) {
      var r;
      return (r = w.sounds[e]) != null ? r : null;
    }
    __name(it, "it");
    l(it, "getSound");
    function nt(e) {
      var r;
      return (r = w.fonts[e]) != null ? r : null;
    }
    __name(nt, "nt");
    l(nt, "getFont");
    function st(e) {
      var r;
      return (r = w.shaders[e]) != null ? r : null;
    }
    __name(st, "st");
    l(st, "getShader");
    function ge(e = 1, r = 1, n = 0, a = 0, o = 1, s = 1) {
      let u = [], A = o / e, h = s / r;
      for (let p = 0; p < r; p++)
        for (let g = 0; g < e; g++)
          u.push(new z(n + g * A, a + p * h, A, h));
      return u;
    }
    __name(ge, "ge");
    l(ge, "slice");
    function we(e, r) {
      return X(typeof r == "string" ? B(r).then((n) => n.json()).then((n) => we(e, n)) : J(null, e).then((n) => {
        let a = {}, o = n.tex.width, s = n.tex.height;
        for (let u in r) {
          let A = r[u], h = { tex: n.tex, frames: ge(A.sliceX, A.sliceY, A.x / o, A.y / s, A.width / o, A.height / s), anims: A.anims };
          w.sprites[u] = h, a[u] = h;
        }
        return a;
      }));
    }
    __name(we, "we");
    l(we, "loadSpriteAtlas");
    function xe(e, r, n = {}) {
      let a = ke(r, n), o = ge(n.sliceX || 1, n.sliceY || 1), s = { tex: a, frames: o, anims: n.anims || {} };
      return e && (w.sprites[e] = s), s;
    }
    __name(xe, "xe");
    l(xe, "loadRawSprite");
    function J(e, r, n = { sliceX: 1, sliceY: 1, anims: {} }) {
      return X(new Promise((a, o) => {
        if (!r)
          return o(`Expected sprite src for "${e}"`);
        typeof r == "string" ? W(r).then((s) => a(xe(e, s, n))).catch(o) : a(xe(e, r, n));
      }));
    }
    __name(J, "J");
    l(J, "loadSprite");
    function ot(e, r) {
      return X(new Promise((n, a) => {
        B(r).then((o) => o.json()).then((o) => Zn(this, null, function* () {
          let s = yield Promise.all(o.frames.map(W)), u = document.createElement("canvas");
          u.width = o.width, u.height = o.height * o.frames.length;
          let A = u.getContext("2d");
          return s.forEach((h, p) => {
            A.drawImage(h, 0, p * o.height);
          }), J(e, u, { sliceY: o.frames.length, anims: o.anims });
        })).then(n).catch(a);
      }));
    }
    __name(ot, "ot");
    l(ot, "loadPedit");
    function ye(e, r, n) {
      return X(new Promise((a, o) => {
        J(e, r).then((s) => {
          B(n).then((u) => u.json()).then((u) => {
            let A = u.meta.size;
            s.frames = u.frames.map((h) => new z(h.frame.x / A.w, h.frame.y / A.h, h.frame.w / A.w, h.frame.h / A.h));
            for (let h of u.meta.frameTags)
              h.from === h.to ? s.anims[h.name] = h.from : s.anims[h.name] = { from: h.from, to: h.to, speed: 10, loop: true };
            a(s);
          }).catch(o);
        }).catch(o);
      }));
    }
    __name(ye, "ye");
    l(ye, "loadAseprite");
    function ve(e, r, n, a = false) {
      function o(s, u, A) {
        let h = Nt(u, A);
        return s && (w.shaders[s] = h), h;
      }
      __name(o, "o");
      return l(o, "loadRawShader"), X(new Promise((s, u) => {
        if (!r && !n)
          return u("no shader");
        function A(h) {
          return h ? B(h).then((p) => p.text()).catch(u) : new Promise((p) => p(null));
        }
        __name(A, "A");
        if (l(A, "resolveUrl"), a)
          Promise.all([A(r), A(n)]).then(([h, p]) => {
            s(o(e, h, p));
          }).catch(u);
        else
          try {
            s(o(e, r, n));
          } catch (h) {
            u(h);
          }
      }));
    }
    __name(ve, "ve");
    l(ve, "loadShader");
    function _r(e, r) {
      return X(new Promise((n, a) => {
        if (!r)
          return a(`expected sound src for "${e}"`);
        typeof r == "string" && B(r).then((o) => o.arrayBuffer()).then((o) => new Promise((s, u) => V.ctx.decodeAudioData(o, s, u))).then((o) => {
          let s = { buf: o };
          e && (w.sounds[e] = s), n(s);
        }).catch(a);
      }));
    }
    __name(_r, "_r");
    l(_r, "loadSound");
    function $r(e = "bean") {
      return J(e, us);
    }
    __name($r, "$r");
    l($r, "loadBean");
    function ei(e) {
      return e !== void 0 && (V.masterNode.gain.value = _(e, hn, cn)), V.masterNode.gain.value;
    }
    __name(ei, "ei");
    l(ei, "volume");
    function Te(e, r = { loop: false, volume: 1, speed: 1, detune: 0, seek: 0 }) {
      var n;
      if (typeof e == "string") {
        let m = Te({ buf: kr() });
        return pe(() => {
          let y = w.sounds[e];
          if (!y)
            throw new Error(`Sound not found: "${e}"`);
          let F = Te(y, r);
          for (let P in F)
            m[P] = F[P];
        }), m;
      }
      let a = V.ctx, o = false, s = a.createBufferSource();
      s.buffer = e.buf, s.loop = !!r.loop;
      let u = a.createGain();
      s.connect(u), u.connect(V.masterNode);
      let A = (n = r.seek) != null ? n : 0;
      s.start(0, A);
      let h = a.currentTime - A, p = null, g = { stop() {
        o || (this.pause(), h = a.currentTime);
      }, play(m) {
        if (!o)
          return;
        let y = s;
        s = a.createBufferSource(), s.buffer = y.buffer, s.loop = y.loop, s.playbackRate.value = y.playbackRate.value, s.detune && (s.detune.value = y.detune.value), s.connect(u);
        let F = m != null ? m : this.time();
        s.start(0, F), h = a.currentTime - F, o = false, p = null;
      }, pause() {
        o || (s.stop(), o = true, p = a.currentTime);
      }, isPaused() {
        return o;
      }, paused() {
        return D("paused()", "isPaused()"), this.isPaused();
      }, isStopped() {
        return o;
      }, stopped() {
        return D("stopped()", "isStopped()"), this.isStopped();
      }, speed(m) {
        return m !== void 0 && (s.playbackRate.value = _(m, ds, fs)), s.playbackRate.value;
      }, detune(m) {
        return s.detune ? (m !== void 0 && (s.detune.value = _(m, ps, Vs)), s.detune.value) : 0;
      }, volume(m) {
        return m !== void 0 && (u.gain.value = _(m, hn, cn)), u.gain.value;
      }, loop() {
        s.loop = true;
      }, unloop() {
        s.loop = false;
      }, duration() {
        return e.buf.duration;
      }, time() {
        return o ? p - h : a.currentTime - h;
      } };
      return g.speed(r.speed), g.detune(r.detune), g.volume(r.volume), g;
    }
    __name(Te, "Te");
    l(Te, "play");
    function kt(e) {
      return Te(V.burpSnd, e);
    }
    __name(kt, "kt");
    l(kt, "burp");
    function ke(e, r = {}) {
      let n = i.gl, a = n.createTexture();
      n.bindTexture(n.TEXTURE_2D, a), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, e);
      let o = (() => {
        var u;
        switch ((u = r.filter) != null ? u : t.texFilter) {
          case "linear":
            return n.LINEAR;
          case "nearest":
            return n.NEAREST;
          default:
            return n.NEAREST;
        }
      })(), s = (() => {
        switch (r.wrap) {
          case "repeat":
            return n.REPEAT;
          case "clampToEdge":
            return n.CLAMP_TO_EDGE;
          default:
            return n.CLAMP_TO_EDGE;
        }
      })();
      return n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, o), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, o), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, s), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, s), n.bindTexture(n.TEXTURE_2D, null), { width: e.width, height: e.height, bind() {
        n.bindTexture(n.TEXTURE_2D, a);
      }, unbind() {
        n.bindTexture(n.TEXTURE_2D, null);
      } };
    }
    __name(ke, "ke");
    l(ke, "makeTex");
    function Nt(e = Br, r = Rr) {
      let n = i.gl, a, o = gs.replace("{{user}}", e != null ? e : Br), s = ws.replace("{{user}}", r != null ? r : Rr), u = n.createShader(n.VERTEX_SHADER), A = n.createShader(n.FRAGMENT_SHADER);
      if (n.shaderSource(u, o), n.shaderSource(A, s), n.compileShader(u), n.compileShader(A), a = n.getShaderInfoLog(u))
        throw new Error(a);
      if (a = n.getShaderInfoLog(A))
        throw new Error(a);
      let h = n.createProgram();
      if (n.attachShader(h, u), n.attachShader(h, A), n.bindAttribLocation(h, 0, "a_pos"), n.bindAttribLocation(h, 1, "a_uv"), n.bindAttribLocation(h, 2, "a_color"), n.linkProgram(h), (a = n.getProgramInfoLog(h)) && a !== `
`)
        throw new Error(a);
      return { bind() {
        n.useProgram(h);
      }, unbind() {
        n.useProgram(null);
      }, send(p) {
        this.bind();
        for (let g in p) {
          let m = p[g], y = n.getUniformLocation(h, g);
          typeof m == "number" ? n.uniform1f(y, m) : m instanceof R ? n.uniformMatrix4fv(y, false, new Float32Array(m.m)) : m instanceof E ? n.uniform4f(y, m.r, m.g, m.b, m.a) : m instanceof Gr ? n.uniform3f(y, m.x, m.y, m.z) : m instanceof S && n.uniform2f(y, m.x, m.y);
        }
        this.unbind();
      } };
    }
    __name(Nt, "Nt");
    l(Nt, "makeShader");
    function ti(e, r, n, a) {
      let o = e.width / r, s = e.height / n, u = 1 / o, A = 1 / s, h = {}, p = a.split("").entries();
      for (let [g, m] of p)
        h[m] = d(g % o * u, Math.floor(g / o) * A);
      return { tex: e, map: h, qw: u, qh: A };
    }
    __name(ti, "ti");
    l(ti, "makeFont");
    function ut(e, r, n, a = c.defTex, o = c.defShader, s = {}) {
      a = a != null ? a : c.defTex, o = o != null ? o : c.defShader, (a !== c.curTex || o !== c.curShader || !Nr(c.curUniform, s) || c.vqueue.length + e.length * _e > bt || c.iqueue.length + r.length > bt) && Mt();
      for (let u of e) {
        let A = n ? c.transform : f.cam.transform.mult(c.transform), h = ri(A.multVec2(u.pos.xy()));
        c.vqueue.push(h.x, h.y, u.pos.z, u.uv.x, u.uv.y, u.color.r / 255, u.color.g / 255, u.color.b / 255, u.opacity);
      }
      for (let u of r)
        c.iqueue.push(u + c.vqueue.length / _e - e.length);
      c.curTex = a, c.curShader = o, c.curUniform = s;
    }
    __name(ut, "ut");
    l(ut, "drawRaw");
    function Mt() {
      if (!c.curTex || !c.curShader || c.vqueue.length === 0 || c.iqueue.length === 0)
        return;
      let e = i.gl;
      c.curShader.send(c.curUniform), e.bindBuffer(e.ARRAY_BUFFER, c.vbuf), e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(c.vqueue)), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, c.ibuf), e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(c.iqueue)), c.curShader.bind(), c.curTex.bind(), e.drawElements(e.TRIANGLES, c.iqueue.length, e.UNSIGNED_SHORT, 0), c.curTex.unbind(), c.curShader.unbind(), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), c.iqueue = [], c.vqueue = [], c.drawCalls++;
    }
    __name(Mt, "Mt");
    l(Mt, "flush");
    function Ne() {
      i.gl.clear(i.gl.COLOR_BUFFER_BIT), t.background || ce({ width: I(), height: G(), quad: new z(0, 0, I() * i.scale / dn, G() * i.scale / dn), tex: c.bgTex, fixed: true }), c.drawCalls = 0, c.transformStack = [], c.transform = new R();
    }
    __name(Ne, "Ne");
    l(Ne, "frameStart");
    function Me() {
      Mt(), c.lastDrawCalls = c.drawCalls;
    }
    __name(Me, "Me");
    l(Me, "frameEnd");
    function qn() {
      return c.lastDrawCalls;
    }
    __name(qn, "qn");
    l(qn, "drawCalls");
    function ri(e) {
      return d(e.x / I() * 2 - 1, -e.y / G() * 2 + 1);
    }
    __name(ri, "ri");
    l(ri, "screen2ndc");
    function Un(e) {
      return d((e.x + 1) / 2 * I(), -(e.y - 1) / 2 * G());
    }
    __name(Un, "Un");
    l(Un, "ndc2screen");
    function Kn(e) {
      c.transform = e.clone();
    }
    __name(Kn, "Kn");
    l(Kn, "applyMatrix");
    function T(...e) {
      if (e[0] === void 0)
        return;
      let r = d(...e);
      r.x === 0 && r.y === 0 || (c.transform = c.transform.translate(r));
    }
    __name(T, "T");
    l(T, "pushTranslate");
    function te(...e) {
      if (e[0] === void 0)
        return;
      let r = d(...e);
      r.x === 1 && r.y === 1 || (c.transform = c.transform.scale(r));
    }
    __name(te, "te");
    l(te, "pushScale");
    function Pn(e) {
      !e || (c.transform = c.transform.rotateX(e));
    }
    __name(Pn, "Pn");
    l(Pn, "pushRotateX");
    function Sn(e) {
      !e || (c.transform = c.transform.rotateY(e));
    }
    __name(Sn, "Sn");
    l(Sn, "pushRotateY");
    function Ie(e) {
      !e || (c.transform = c.transform.rotateZ(e));
    }
    __name(Ie, "Ie");
    l(Ie, "pushRotateZ");
    function re() {
      c.transformStack.push(c.transform.clone());
    }
    __name(re, "re");
    l(re, "pushTransform");
    function ie() {
      c.transformStack.length > 0 && (c.transform = c.transformStack.pop());
    }
    __name(ie, "ie");
    l(ie, "popTransform");
    function ce(e) {
      var r;
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let n = e.width, a = e.height, o = Ke(e.origin || Ze).scale(d(n, a).scale(-0.5)), s = e.quad || new z(0, 0, 1, 1), u = e.color || v(255, 255, 255), A = (r = e.opacity) != null ? r : 1;
      re(), T(e.pos), Ie(e.angle), te(e.scale), T(o), ut([{ pos: Ve(-n / 2, a / 2, 0), uv: d(e.flipX ? s.x + s.w : s.x, e.flipY ? s.y : s.y + s.h), color: u, opacity: A }, { pos: Ve(-n / 2, -a / 2, 0), uv: d(e.flipX ? s.x + s.w : s.x, e.flipY ? s.y + s.h : s.y), color: u, opacity: A }, { pos: Ve(n / 2, -a / 2, 0), uv: d(e.flipX ? s.x : s.x + s.w, e.flipY ? s.y + s.h : s.y), color: u, opacity: A }, { pos: Ve(n / 2, a / 2, 0), uv: d(e.flipX ? s.x : s.x + s.w, e.flipY ? s.y : s.y + s.h), color: u, opacity: A }], [0, 1, 3, 1, 2, 3], e.fixed, e.tex, e.shader, e.uniform), ie();
    }
    __name(ce, "ce");
    l(ce, "drawUVQuad");
    function ii(e) {
      var r;
      if (!e.tex)
        throw new Error('drawTexture() requires property "tex".');
      let n = (r = e.quad) != null ? r : new z(0, 0, 1, 1), a = e.tex.width * n.w, o = e.tex.height * n.h, s = d(1);
      if (e.tiled) {
        let u = Math.ceil((e.width || a) / a), A = Math.ceil((e.height || o) / o), h = Ke(e.origin || Ze).add(d(1, 1)).scale(0.5).scale(u * a, A * o);
        for (let p = 0; p < u; p++)
          for (let g = 0; g < A; g++)
            ce(N(k({}, e), { pos: (e.pos || d(0)).add(d(a * p, o * g)).sub(h), scale: s.scale(e.scale || d(1)), tex: e.tex, quad: n, width: a, height: o, origin: "topleft" }));
      } else
        e.width && e.height ? (s.x = e.width / a, s.y = e.height / o) : e.width ? (s.x = e.width / a, s.y = s.x) : e.height && (s.y = e.height / o, s.x = s.y), ce(N(k({}, e), { scale: s.scale(e.scale || d(1)), tex: e.tex, quad: n, width: a, height: o }));
    }
    __name(ii, "ii");
    l(ii, "drawTexture");
    let It = /* @__PURE__ */ new Set();
    function Gt(e) {
      var r, n;
      if (!e.sprite)
        throw new Error('drawSprite() requires property "sprite"');
      let a = Wt(e.sprite, w.sprites);
      if (!a)
        if (typeof e.sprite == "string") {
          It.has(e.sprite) || (It.add(e.sprite), J(e.sprite, e.sprite).then((s) => It.delete(e.sprite)));
          return;
        } else
          throw new Error(`sprite not found: "${e.sprite}"`);
      let o = a.frames[(r = e.frame) != null ? r : 0];
      if (!o)
        throw new Error(`frame not found: ${(n = e.frame) != null ? n : 0}`);
      ii(N(k({}, e), { tex: a.tex, quad: o.scale(e.quad || new z(0, 0, 1, 1)), uniform: e.uniform }));
    }
    __name(Gt, "Gt");
    l(Gt, "drawSprite");
    function Ee(e, r, n, a, o, s = 1) {
      a = he(a % 360), o = he(o % 360), o <= a && (o += Math.PI * 2);
      let u = Math.ceil(Math.max(Math.sqrt(r + n) * 3 * (s || 1), 16)), A = (o - a) / u, h = [];
      for (let p = a; p < o; p += A)
        h.push(e.add(r * Math.cos(p), n * Math.sin(p)));
      return h.push(e.add(r * Math.cos(o), n * Math.sin(o))), h;
    }
    __name(Ee, "Ee");
    l(Ee, "getArcPts");
    function Q(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let r = e.width, n = e.height, a = Ke(e.origin || Ze).add(1, 1).scale(d(r, n).scale(-0.5)), o = [d(0, 0), d(r, 0), d(r, n), d(0, n)];
      if (e.radius) {
        let s = Math.min(Math.min(r, n) / 2, e.radius);
        o = [d(s, 0), d(r - s, 0), ...Ee(d(r - s, s), s, s, 270, 360), d(r, s), d(r, n - s), ...Ee(d(r - s, n - s), s, s, 0, 90), d(r - s, n), d(s, n), ...Ee(d(s, n - s), s, s, 90, 180), d(0, n - s), d(0, s), ...Ee(d(s, s), s, s, 180, 270)];
      }
      Ge(N(k({}, e), { offset: a, pts: o }));
    }
    __name(Q, "Q");
    l(Q, "drawRect");
    function Fe(e) {
      let { p1: r, p2: n } = e;
      if (!r || !n)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let a = e.width || 1, o = n.sub(r).unit().normal().scale(a * 0.5), s = [r.sub(o), r.add(o), n.add(o), n.sub(o)].map((u) => {
        var A, h;
        return { pos: Ve(u.x, u.y, 0), uv: d(0), color: (A = e.color) != null ? A : E.WHITE, opacity: (h = e.opacity) != null ? h : 1 };
      });
      ut(s, [0, 1, 3, 1, 2, 3], e.fixed, c.defTex, e.shader, e.uniform);
    }
    __name(Fe, "Fe");
    l(Fe, "drawLine");
    function Lt(e) {
      let r = e.pts;
      if (!r)
        throw new Error('drawLines() requires property "pts".');
      if (!(r.length < 2))
        if (e.radius && r.length >= 3) {
          let n = r[0].dist(r[1]);
          for (let o = 1; o < r.length - 1; o++)
            n = Math.min(r[o].dist(r[o + 1]), n);
          let a = Math.min(e.radius, n / 2);
          Fe(N(k({}, e), { p1: r[0], p2: r[1] }));
          for (let o = 1; o < r.length - 2; o++) {
            let s = r[o], u = r[o + 1];
            Fe(N(k({}, e), { p1: s, p2: u }));
          }
          Fe(N(k({}, e), { p1: r[r.length - 2], p2: r[r.length - 1] }));
        } else
          for (let n = 0; n < r.length - 1; n++)
            Fe(N(k({}, e), { p1: r[n], p2: r[n + 1] }));
    }
    __name(Lt, "Lt");
    l(Lt, "drawLines");
    function Yt(e) {
      if (!e.p1 || !e.p2 || !e.p3)
        throw new Error('drawPolygon() requires properties "p1", "p2" and "p3".');
      return Ge(N(k({}, e), { pts: [e.p1, e.p2, e.p3] }));
    }
    __name(Yt, "Yt");
    l(Yt, "drawTriangle");
    function at(e) {
      if (!e.radius)
        throw new Error('drawCircle() requires property "radius".');
      e.radius !== 0 && Dt(N(k({}, e), { radiusX: e.radius, radiusY: e.radius, angle: 0 }));
    }
    __name(at, "at");
    l(at, "drawCircle");
    function Dt(e) {
      var r, n;
      if (e.radiusX === void 0 || e.radiusY === void 0)
        throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      e.radiusX === 0 || e.radiusY === 0 || Ge(N(k({}, e), { pts: Ee(d(0), e.radiusX, e.radiusY, (r = e.start) != null ? r : 0, (n = e.end) != null ? n : 360, e.resolution), radius: 0 }));
    }
    __name(Dt, "Dt");
    l(Dt, "drawEllipse");
    function Ge(e) {
      var r, n;
      if (!e.pts)
        throw new Error('drawPolygon() requires property "pts".');
      let a = e.pts.length;
      if (!(a < 3)) {
        if (re(), T(e.pos), te(e.scale), Ie(e.angle), T(e.offset), e.fill !== false) {
          let o = (r = e.color) != null ? r : E.WHITE, s = e.pts.map((A) => {
            var h;
            return { pos: Ve(A.x, A.y, 0), uv: d(0, 0), color: o, opacity: (h = e.opacity) != null ? h : 1 };
          }), u = [...Array(a - 2).keys()].map((A) => [0, A + 1, A + 2]).flat();
          ut(s, (n = e.indices) != null ? n : u, e.fixed, c.defTex, e.shader, e.uniform);
        }
        e.outline && Lt({ pts: [...e.pts, e.pts[0]], radius: e.radius, width: e.outline.width, color: e.outline.color, uniform: e.uniform, fixed: e.fixed }), ie();
      }
    }
    __name(Ge, "Ge");
    l(Ge, "drawPolygon");
    function Ot(e, r) {
      r.pos && (e.pos = e.pos.add(r.pos)), r.scale && (e.scale = e.scale.scale(d(r.scale))), r.angle && (e.angle += r.angle), r.color && (e.color = e.color.mult(r.color)), r.opacity && (e.opacity *= r.opacity);
    }
    __name(Ot, "Ot");
    l(Ot, "applyCharTransform");
    let ni = new RegExp("\\[(?<text>[^\\]]*)\\]\\.(?<style>[\\w\\.]+)+", "g");
    function si(e) {
      let r = {}, n = e.replace(ni, "$1"), a = 0;
      for (let o of e.matchAll(ni)) {
        let s = o.groups.style.split("."), u = o.index - a;
        for (let A = u; A < o.index + o.groups.text.length; A++)
          r[A] = { localIdx: A - u, styles: s };
        a += 3 + o.groups.style.length;
      }
      return { charStyleMap: r, text: n };
    }
    __name(si, "si");
    l(si, "compileStyledText");
    function Wt(e, r, n) {
      if (e)
        return typeof e == "string" ? r[e] : e;
      if (n)
        return r[n];
    }
    __name(Wt, "Wt");
    l(Wt, "findAsset");
    function Ae(e) {
      var r, n, a;
      if (e.text === void 0)
        throw new Error('formatText() requires property "text".');
      let o = Wt((r = e.font) != null ? r : t.font, w.fonts, ms);
      if (!o)
        throw new Error(`Font not found: ${e.font}`);
      let { charStyleMap: s, text: u } = si(e.text + ""), A = u.split(""), h = o.qw * o.tex.width, p = o.qh * o.tex.height, g = e.size || p, m = d(g / p).scale(d(e.scale || 1)), y = m.x * h + ((n = e.letterSpacing) != null ? n : 0), F = m.y * p + ((a = e.lineSpacing) != null ? a : 0), P = 0, U = F, $ = 0, se = [], Y = [], oe = null, L = 0;
      for (; L < A.length; ) {
        let ue = A[L];
        ue === `
` ? (U += F, P = 0, oe = null, Y.push(ue), se.push(Y), Y = []) : e.width && P + y > e.width && (U += F, P = 0, oe != null && (L -= Y.length - oe, ue = A[L], Y = Y.slice(0, oe)), oe = null, se.push(Y), Y = []), ue !== `
` && (Y.push(ue), P += y, ue === " " && (oe = Y.length)), $ = Math.max($, P), L++;
      }
      se.push(Y), e.width && ($ = e.width);
      let ne = [], Ue = d(e.pos || 0), Qe = Ke(e.origin || Ze).scale(0.5), Mn = -Qe.x * y - (Qe.x + 0.5) * ($ - y), In = -Qe.y * F - (Qe.y + 0.5) * (U - F), vt = 0;
      return se.forEach((ue, Gn) => {
        let Ln = ($ - ue.length * y) * (Qe.x + 0.5);
        ue.forEach((Et, Yn) => {
          var tn;
          let Fr = o.map[Et], Dn = Yn * y, On = Gn * F;
          if (Fr) {
            let br = { tex: o.tex, quad: new z(Fr.x, Fr.y, o.qw, o.qh), ch: Et, pos: d(Ue.x + Dn + Mn + Ln, Ue.y + On + In), opacity: e.opacity, color: (tn = e.color) != null ? tn : v(255, 255, 255), scale: m, angle: 0, uniform: e.uniform, fixed: e.fixed };
            if (e.transform) {
              let Ft = typeof e.transform == "function" ? e.transform(vt, Et) : e.transform;
              Ft && Ot(br, Ft);
            }
            if (s[vt]) {
              let { styles: Ft, localIdx: Wn } = s[vt];
              for (let jn of Ft) {
                let Cr = e.styles[jn], rn = typeof Cr == "function" ? Cr(Wn, Et) : Cr;
                rn && Ot(br, rn);
              }
            }
            ne.push(br);
          }
          vt += 1;
        });
      }), { width: $, height: U, chars: ne };
    }
    __name(Ae, "Ae");
    l(Ae, "formatText");
    function oi(e) {
      de(Ae(e));
    }
    __name(oi, "oi");
    l(oi, "drawText");
    function de(e) {
      for (let r of e.chars)
        ce({ tex: r.tex, width: r.tex.width * r.quad.w, height: r.tex.height * r.quad.h, pos: r.pos, scale: r.scale, angle: r.angle, color: r.color, opacity: r.opacity, quad: r.quad, origin: "center", uniform: r.uniform, fixed: r.fixed });
    }
    __name(de, "de");
    l(de, "drawFormattedText");
    function jt() {
      let e = i.gl, r = e.drawingBufferWidth, n = e.drawingBufferHeight, a = I(), o = G();
      if (Qt()) {
        let s = window.innerWidth, u = window.innerHeight, A = s / u, h = r / n;
        if (A > h) {
          let p = window.innerHeight * h;
          c.viewport = { x: (s - p) / 2, y: 0, width: p, height: u };
        } else {
          let p = window.innerWidth / h;
          c.viewport = { x: 0, y: (u - p) / 2, width: s, height: p };
        }
        return;
      }
      if (t.letterbox) {
        if (!t.width || !t.height)
          throw new Error("Letterboxing requires width and height defined.");
        let s = r / n, u = t.width / t.height;
        if (s > u) {
          t.stretch || (c.width = n * u, c.height = n);
          let A = n * u, h = n, p = (r - A) / 2;
          e.scissor(p, 0, A, h), e.viewport(p, 0, A, n), c.viewport = { x: p, y: 0, width: A, height: n };
        } else {
          t.stretch || (c.width = r, c.height = r / u);
          let A = r, h = r / u, p = (n - h) / 2;
          e.scissor(0, p, A, h), e.viewport(0, p, r, h), c.viewport = { x: 0, y: p, width: r, height: h };
        }
        return;
      }
      if (t.stretch) {
        if (!t.width || !t.height)
          throw new Error("Stretching requires width and height defined.");
        e.viewport(0, 0, r, n), c.viewport = { x: 0, y: 0, width: r, height: n };
        return;
      }
      c.width = r / i.scale, c.height = n / i.scale, e.viewport(0, 0, r, n), c.viewport = { x: 0, y: 0, width: r, height: n };
    }
    __name(jt, "jt");
    l(jt, "updateViewport");
    function I() {
      return c.width;
    }
    __name(I, "I");
    l(I, "width");
    function G() {
      return c.height;
    }
    __name(G, "G");
    l(G, "height"), i.canvas.addEventListener("mousemove", (e) => {
      i.mousePos = d((e.offsetX - c.viewport.x) * I() / c.viewport.width, (e.offsetY - c.viewport.y) * G() / c.viewport.height), i.mouseDeltaPos = d(e.movementX, e.movementY).scale(1 / i.scale), i.isMouseMoved = true;
    }), i.canvas.addEventListener("mousedown", (e) => {
      let r = an[e.button];
      r && (i.mouseStates[r] = "pressed");
    }), i.canvas.addEventListener("mouseup", (e) => {
      let r = an[e.button];
      r && (i.mouseStates[r] = "released");
    }), i.canvas.addEventListener("keydown", (e) => {
      let r = un[e.key] || e.key.toLowerCase();
      cs.includes(r) && e.preventDefault(), r.length === 1 && i.charInputted.push(e.key), r === "space" && i.charInputted.push(" "), e.repeat ? (i.isKeyPressedRepeat = true, i.keyStates[r] = "rpressed") : (i.isKeyPressed = true, i.keyStates[r] = "pressed");
    }), i.canvas.addEventListener("keyup", (e) => {
      let r = un[e.key] || e.key.toLowerCase();
      i.keyStates[r] = "released", i.isKeyReleased = true;
    }), i.canvas.addEventListener("touchstart", (e) => {
      if (!t.touchToMouse)
        return;
      e.preventDefault();
      let r = e.touches[0];
      i.mousePos = d(r.clientX, r.clientY).scale(1 / i.scale), i.mouseStates.left = "pressed";
    }), i.canvas.addEventListener("touchmove", (e) => {
      if (!t.touchToMouse)
        return;
      e.preventDefault();
      let r = e.touches[0];
      i.mousePos = d(r.clientX, r.clientY).scale(1 / i.scale), i.isMouseMoved = true;
    }), i.canvas.addEventListener("touchend", (e) => {
      !t.touchToMouse || (i.mouseStates.left = "released");
    }), i.canvas.addEventListener("touchcancel", (e) => {
      !t.touchToMouse || (i.mouseStates.left = "released");
    }), i.canvas.addEventListener("touchstart", (e) => {
      [...e.changedTouches].forEach((r) => {
        f.trigger("onTouchStart", r.identifier, d(r.clientX, r.clientY).scale(1 / i.scale));
      });
    }), i.canvas.addEventListener("touchmove", (e) => {
      [...e.changedTouches].forEach((r) => {
        f.trigger("onTouchMove", r.identifier, d(r.clientX, r.clientY).scale(1 / i.scale));
      });
    }), i.canvas.addEventListener("touchend", (e) => {
      [...e.changedTouches].forEach((r) => {
        f.trigger("onTouchEnd", r.identifier, d(r.clientX, r.clientY).scale(1 / i.scale));
      });
    }), i.canvas.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    }), document.addEventListener("visibilitychange", () => {
      switch (document.visibilityState) {
        case "visible":
          i.skipTime = true, V.ctx.resume();
          break;
        case "hidden":
          V.ctx.suspend();
          break;
      }
    });
    function j() {
      return i.mousePos.clone();
    }
    __name(j, "j");
    l(j, "mousePos");
    function Ht() {
      return i.mouseDeltaPos.clone();
    }
    __name(Ht, "Ht");
    l(Ht, "mouseDeltaPos");
    function be(e = "left") {
      return i.mouseStates[e] === "pressed";
    }
    __name(be, "be");
    l(be, "isMousePressed");
    function Le(e = "left") {
      return i.mouseStates[e] === "pressed" || i.mouseStates[e] === "down";
    }
    __name(Le, "Le");
    l(Le, "isMouseDown");
    function Ye(e = "left") {
      return i.mouseStates[e] === "released";
    }
    __name(Ye, "Ye");
    l(Ye, "isMouseReleased");
    function lt() {
      return i.isMouseMoved;
    }
    __name(lt, "lt");
    l(lt, "isMouseMoved");
    function Ce(e) {
      return e === void 0 ? i.isKeyPressed : i.keyStates[e] === "pressed";
    }
    __name(Ce, "Ce");
    l(Ce, "isKeyPressed");
    function ht(e) {
      return e === void 0 ? i.isKeyPressedRepeat : i.keyStates[e] === "pressed" || i.keyStates[e] === "rpressed";
    }
    __name(ht, "ht");
    l(ht, "isKeyPressedRepeat");
    function ct(e) {
      return i.keyStates[e] === "pressed" || i.keyStates[e] === "rpressed" || i.keyStates[e] === "down";
    }
    __name(ct, "ct");
    l(ct, "isKeyDown");
    function De(e) {
      return e === void 0 ? i.isKeyReleased : i.keyStates[e] === "released";
    }
    __name(De, "De");
    l(De, "isKeyReleased");
    function ui() {
      return [...i.charInputted];
    }
    __name(ui, "ui");
    l(ui, "charInputted");
    function Oe() {
      return i.time;
    }
    __name(Oe, "Oe");
    l(Oe, "time");
    function zt() {
      return i.canvas.toDataURL();
    }
    __name(zt, "zt");
    l(zt, "screenshot");
    function Jt(e) {
      return e && (i.canvas.style.cursor = e), i.canvas.style.cursor;
    }
    __name(Jt, "Jt");
    l(Jt, "cursor");
    function ai(e = true) {
      e ? Xn(i.canvas) : Bn();
    }
    __name(ai, "ai");
    l(ai, "fullscreen");
    function Qt() {
      return Boolean(Rn());
    }
    __name(Qt, "Qt");
    l(Qt, "isFullscreen");
    function li() {
      cancelAnimationFrame(i.loopID), i.stopped = true;
    }
    __name(li, "li");
    l(li, "quit");
    let C = { inspect: false, timeScale: 1, showLog: true, fps: () => i.fpsCounter.fps, objCount() {
      return f.root.children.length;
    }, stepFrame: xr, drawCalls: () => c.drawCalls, clearLog: () => f.logs = [], log: (e) => f.logs.unshift(`[${Oe().toFixed(2)}].time [${e}].info`), error: (e) => f.logs.unshift(`[${Oe().toFixed(2)}].time [${e}].error`), curRecording: null, get paused() {
      return i.paused;
    }, set paused(e) {
      i.paused = e, e ? V.ctx.suspend() : V.ctx.resume();
    } };
    function Z() {
      return i.dt * C.timeScale;
    }
    __name(Z, "Z");
    l(Z, "dt");
    function hi() {
      return D("mouseWorldPos()", "toWorld(mousePos())"), At(j());
    }
    __name(hi, "hi");
    l(hi, "mouseWorldPos");
    function ci(e, r) {
      e.forEach((n, a) => {
        f.layers[n] = a + 1;
      }), r && (f.defLayer = r);
    }
    __name(ci, "ci");
    l(ci, "layers");
    function Ai(...e) {
      return e.length > 0 && (f.cam.pos = d(...e)), f.cam.pos.clone();
    }
    __name(Ai, "Ai");
    l(Ai, "camPos");
    function di(...e) {
      return e.length > 0 && (f.cam.scale = d(...e)), f.cam.scale.clone();
    }
    __name(di, "di");
    l(di, "camScale");
    function fi(e) {
      return e !== void 0 && (f.cam.angle = e), f.cam.angle;
    }
    __name(fi, "fi");
    l(fi, "camRot");
    function pi(e = 12) {
      f.cam.shake = e;
    }
    __name(pi, "pi");
    l(pi, "shake");
    function We(e) {
      return f.cam.transform.multVec2(e);
    }
    __name(We, "We");
    l(We, "toScreen");
    function At(e) {
      return f.cam.transform.invert().multVec2(e);
    }
    __name(At, "At");
    l(At, "toWorld");
    function Zt(e) {
      let r = /* @__PURE__ */ new Map(), n = {}, a = {}, o = { _id: $n(), hidden: false, paused: false, children: [], parent: null, add(s) {
        if (this !== f.root)
          throw new Error("Children game object not supported yet");
        let u = Zt(s);
        return u.parent = this, u.trigger("add"), pe(() => u.trigger("load")), this.children.push(u), u;
      }, readd(s) {
        return this.remove(s), this.children.push(s), s;
      }, remove(s) {
        let u = this.children.indexOf(s);
        u !== -1 && (s.parent = null, s.trigger("destroy"), this.children.splice(u, 1));
      }, removeAll(s) {
        this.every(s, (u) => this.remove(u));
      }, update() {
        this.paused || (this.revery((s) => s.update()), this.trigger("update"));
      }, draw() {
        this.hidden || (re(), T(this.pos), te(this.scale), Ie(this.angle), this.every((s) => s.draw()), this.trigger("draw"), ie());
      }, use(s) {
        if (!s)
          return;
        if (typeof s == "string")
          return this.use({ id: s });
        s.id && (this.unuse(s.id), r.set(s.id, {}));
        let u = s.id ? r.get(s.id) : n;
        u.cleanups = [];
        for (let h in s)
          if (!xs.has(h)) {
            if (typeof s[h] == "function") {
              let p = s[h].bind(this);
              if (ys.has(h)) {
                u.cleanups.push(this.on(h, p)), u[h] = p;
                continue;
              } else
                u[h] = p;
            } else
              u[h] = s[h];
            this[h] === void 0 && Object.defineProperty(this, h, { get: () => u[h], set: (p) => u[h] = p, configurable: true, enumerable: true });
          }
        let A = l(() => {
          if (s.require) {
            for (let h of s.require)
              if (!this.c(h))
                throw new Error(`comp '${s.id}' requires comp '${h}'`);
          }
        }, "checkDeps");
        this.exists() ? (s.add && s.add.call(this), s.load && pe(() => s.load.call(this)), A()) : s.require && u.cleanups.push(this.on("add", A));
      }, unuse(s) {
        if (r.has(s)) {
          let u = r.get(s);
          u.cleanups.forEach((A) => A());
          for (let A in u)
            delete u[A];
        }
        r.delete(s);
      }, c(s) {
        return r.get(s);
      }, get(s) {
        return this.children.filter((u) => s ? u.is(s) : true).sort((u, A) => {
          var h, p, g, m, y, F;
          let P = (p = f.layers[(h = u.layer) != null ? h : f.defLayer]) != null ? p : 0, U = (m = f.layers[(g = A.layer) != null ? g : f.defLayer]) != null ? m : 0;
          return P == U ? ((y = u.z) != null ? y : 0) - ((F = A.z) != null ? F : 0) : P - U;
        });
      }, every(s, u) {
        if (typeof s == "function" && u === void 0)
          return this.get().forEach((A) => s(A));
        if (typeof s == "string" || Array.isArray(s))
          return this.get(s).forEach((A) => u(A));
      }, revery(s, u) {
        if (typeof s == "function" && u === void 0)
          return this.get().reverse().forEach((A) => s(A));
        if (typeof s == "string" || Array.isArray(s))
          return this.get(s).reverse().forEach((A) => u(A));
      }, exists() {
        var s;
        return this.parent === f.root ? true : (s = this.parent) == null ? void 0 : s.exists();
      }, is(s) {
        if (s === "*")
          return true;
        if (Array.isArray(s)) {
          for (let u of s)
            if (!this.c(u))
              return false;
          return true;
        } else
          return this.c(s) != null;
      }, on(s, u) {
        return a[s] || (a[s] = new ee()), a[s].pushd(u);
      }, action(...s) {
        return console.warn("action() is deprecated. Use onUpdate() instead"), this.onUpdate(...s);
      }, trigger(s, ...u) {
        a[s] && a[s].forEach((h) => h.call(this, ...u));
        let A = f.objEvents[s];
        A && A.forEach((h) => {
          this.is(h.tag) && h.cb(this, ...u);
        });
      }, destroy() {
        var s;
        (s = this.parent) == null || s.remove(this);
      }, inspect() {
        let s = {};
        for (let [u, A] of r)
          s[u] = A.inspect ? A.inspect() : null;
        return s;
      }, onUpdate(s) {
        return this.on("update", s);
      }, onDraw(s) {
        return this.on("draw", s);
      }, onDestroy(s) {
        return this.on("destroy", s);
      }, clearEvents() {
        a = {};
      } };
      for (let s of e)
        o.use(s);
      return o;
    }
    __name(Zt, "Zt");
    l(Zt, "make");
    function Xe(e, r, n) {
      return f.objEvents[e] || (f.objEvents[e] = new ee()), f.objEvents[e].pushd({ tag: r, cb: n });
    }
    __name(Xe, "Xe");
    l(Xe, "on");
    function Be(e, r) {
      if (typeof e == "function" && r === void 0)
        return f.root.onUpdate(e);
      if (typeof e == "string")
        return Xe("update", e, r);
    }
    __name(Be, "Be");
    l(Be, "onUpdate");
    function _t(e, r) {
      if (typeof e == "function" && r === void 0)
        return f.root.onDraw(e);
      if (typeof e == "string")
        return Xe("draw", e, r);
    }
    __name(_t, "_t");
    l(_t, "onDraw");
    function $t(e, r, n) {
      let a = Xe("collide", e, (u, A, h) => A.is(r) && n(u, A, h)), o = Xe("collide", r, (u, A, h) => A.is(e) && n(A, u, h)), s = Be(e, (u) => {
        if (!u.area)
          throw new Error("onCollide() requires the object to have area() component");
        u._checkCollisions(r, (A) => {
          n(u, A);
        });
      });
      return () => [a, o, s].forEach((u) => u());
    }
    __name($t, "$t");
    l($t, "onCollide");
    function er(e, r) {
      return typeof e == "function" ? Vt(e) : Be(e, (n) => {
        if (!n.area)
          throw new Error("onClick() requires the object to have area() component");
        n.isClicked() && r(n);
      });
    }
    __name(er, "er");
    l(er, "onClick");
    function tr(e, r, n) {
      return Be(e, (a) => {
        if (!a.area)
          throw new Error("onHover() requires the object to have area() component");
        a.isHovering() ? r(a) : n && n(a);
      });
    }
    __name(tr, "tr");
    l(tr, "onHover");
    function rr(e, r) {
      return new Promise((n) => {
        f.timers.push(new $e(e, () => {
          r && r(), n();
        }));
      });
    }
    __name(rr, "rr");
    l(rr, "wait");
    function Vi(e, r) {
      let n = false, a = l(() => {
        n || (r(), rr(e, a));
      }, "newF");
      return a(), () => n = true;
    }
    __name(Vi, "Vi");
    l(Vi, "loop");
    function dt(e, r) {
      if (Array.isArray(e)) {
        let n = e.map((a) => dt(a, r));
        return () => n.forEach((a) => a());
      }
      return f.on("input", () => ct(e) && r());
    }
    __name(dt, "dt");
    l(dt, "onKeyDown");
    function H(e, r) {
      if (Array.isArray(e)) {
        let n = e.map((a) => H(a, r));
        return () => n.forEach((a) => a());
      } else
        return typeof e == "function" ? f.on("input", () => Ce() && e()) : f.on("input", () => Ce(e) && r());
    }
    __name(H, "H");
    l(H, "onKeyPress");
    function ft(e, r) {
      if (Array.isArray(e)) {
        let n = e.map((a) => ft(a, r));
        return () => n.forEach((a) => a());
      } else
        return typeof e == "function" ? f.on("input", () => Ce() && e()) : f.on("input", () => ht(e) && r());
    }
    __name(ft, "ft");
    l(ft, "onKeyPressRepeat");
    function pt(e, r) {
      if (Array.isArray(e)) {
        let n = e.map((a) => pt(a, r));
        return () => n.forEach((a) => a());
      } else
        return typeof e == "function" ? f.on("input", () => De() && e()) : f.on("input", () => De(e) && r());
    }
    __name(pt, "pt");
    l(pt, "onKeyRelease");
    function ir(e, r) {
      return typeof e == "function" ? f.on("input", () => Le() && e(j())) : f.on("input", () => Le(e) && r(j()));
    }
    __name(ir, "ir");
    l(ir, "onMouseDown");
    function Vt(e, r) {
      return typeof e == "function" ? f.on("input", () => be() && e(j())) : f.on("input", () => be(e) && r(j()));
    }
    __name(Vt, "Vt");
    l(Vt, "onMousePress");
    function nr(e, r) {
      return typeof e == "function" ? f.on("input", () => Ye() && e(j())) : f.on("input", () => Ye(e) && r(j()));
    }
    __name(nr, "nr");
    l(nr, "onMouseRelease");
    function sr(e) {
      return f.on("input", () => lt() && e(j(), Ht()));
    }
    __name(sr, "sr");
    l(sr, "onMouseMove");
    function or(e) {
      return f.on("input", () => ui().forEach((r) => e(r)));
    }
    __name(or, "or");
    l(or, "onCharInput");
    function ur(e) {
      return f.on("onTouchStart", e);
    }
    __name(ur, "ur");
    l(ur, "onTouchStart");
    function ar(e) {
      return f.on("onTouchMove", e);
    }
    __name(ar, "ar");
    l(ar, "onTouchMove");
    function lr(e) {
      return f.on("onTouchEnd", e);
    }
    __name(lr, "lr");
    l(lr, "onTouchEnd");
    function hr() {
      H("f1", () => {
        C.inspect = !C.inspect;
      }), H("f2", () => {
        C.clearLog();
      }), H("f8", () => {
        C.paused = !C.paused;
      }), H("f7", () => {
        C.timeScale = fe(_(C.timeScale - 0.2, 0, 2), 1);
      }), H("f9", () => {
        C.timeScale = fe(_(C.timeScale + 0.2, 0, 2), 1);
      }), H("f10", () => {
        C.stepFrame();
      }), H("f5", () => {
        Mr(zt(), "kaboom.png");
      }), H("f6", () => {
        C.curRecording ? (C.curRecording.download(), C.curRecording = null) : C.curRecording = mr();
      });
    }
    __name(hr, "hr");
    l(hr, "enterDebugMode");
    function cr() {
      H("b", kt);
    }
    __name(cr, "cr");
    l(cr, "enterBurpMode");
    function Ar(e) {
      return e !== void 0 && (f.gravity = e), f.gravity;
    }
    __name(Ar, "Ar");
    l(Ar, "gravity");
    function mi(e, r) {
    }
    __name(mi, "mi");
    l(mi, "regCursor");
    function dr(e, r) {
      return { target: e, displacement: r, isTop: () => r.y > 0, isBottom: () => r.y < 0, isLeft: () => r.x > 0, isRight: () => r.x < 0 };
    }
    __name(dr, "dr");
    l(dr, "makeCollision");
    function je(...e) {
      return { id: "pos", pos: d(...e), moveBy(...r) {
        var n;
        let a = d(...r), o = a.x, s = a.y, u = null;
        if (this.solid && ((n = this.area) == null ? void 0 : n.shape) === "rect") {
          let A = this.worldArea();
          f.root.every((h) => {
            var p;
            if (!this.exists() || h === this || !h.solid || ((p = h.area) == null ? void 0 : p.shape) !== "rect")
              return;
            let g = h.worldArea(), m = Ct(g, A);
            if (ae(m, d(0))) {
              let L = Math.min(Math.abs(m.p1.x), Math.abs(m.p2.x), Math.abs(m.p1.y), Math.abs(m.p2.y)), ne = (() => {
                switch (L) {
                  case Math.abs(m.p1.x):
                    return d(L, 0);
                  case Math.abs(m.p2.x):
                    return d(-L, 0);
                  case Math.abs(m.p1.y):
                    return d(0, L);
                  case Math.abs(m.p2.y):
                    return d(0, -L);
                }
              })();
              this.pos = this.pos.sub(ne), A = this.worldArea(), m = Ct(g, A);
            }
            let y = { p1: d(0), p2: d(o, s) }, F = 1, P = m.p1, U = d(m.p1.x, m.p2.y), $ = m.p2, se = d(m.p2.x, m.p1.y), Y = 0, oe = { right: { p1: P, p2: U }, top: { p1: U, p2: $ }, left: { p1: $, p2: se }, bottom: { p1: se, p2: P } };
            for (let L in oe) {
              let ne = oe[L];
              if (o === 0 && ne.p1.x === 0 && ne.p2.x === 0 || s === 0 && ne.p1.y === 0 && ne.p2.y === 0) {
                F = 1;
                break;
              }
              let Ue = Dr(y, ne);
              Ue != null && (Y++, Ue < F && (F = Ue));
            }
            if (F < 1 && !(F === 0 && Y == 1 && !ae(m, d(o, s)))) {
              let L = d(-o * (1 - F), -s * (1 - F));
              o *= F, s *= F, u = dr(h, L);
            }
          });
        }
        return this.pos.x += o, this.pos.y += s, u && (this.trigger("collide", u.target, u), u.target.trigger("collide", this, dr(this, u.displacement.scale(-1)))), u;
      }, move(...r) {
        return this.moveBy(d(...r).scale(Z()));
      }, moveTo(...r) {
        if (typeof r[0] == "number" && typeof r[1] == "number")
          return this.moveTo(d(r[0], r[1]), r[2]);
        let n = r[0], a = r[1];
        if (a === void 0) {
          this.pos = d(n);
          return;
        }
        let o = n.sub(this.pos);
        if (o.len() <= a * Z()) {
          this.pos = d(n);
          return;
        }
        this.move(o.unit().scale(a));
      }, screenPos() {
        return this.fixed ? this.pos : We(this.pos);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      } };
    }
    __name(je, "je");
    l(je, "pos");
    function He(...e) {
      return e.length === 0 ? He(1) : { id: "scale", scale: d(...e), scaleTo(...r) {
        this.scale = d(...r);
      }, inspect() {
        return typeof this.scale == "number" ? `${fe(this.scale, 2)}` : `(${fe(this.scale.x, 2)}, ${fe(this.scale.y, 2)})`;
      } };
    }
    __name(He, "He");
    l(He, "scale");
    function gi(e) {
      return { id: "rotate", angle: e != null ? e : 0, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    __name(gi, "gi");
    l(gi, "rotate");
    function wi(...e) {
      return { id: "color", color: v(...e), inspect() {
        return this.color.str();
      } };
    }
    __name(wi, "wi");
    l(wi, "color");
    function fe(e, r) {
      return Number(e.toFixed(r));
    }
    __name(fe, "fe");
    l(fe, "toFixed");
    function xi(e) {
      return { id: "opacity", opacity: e != null ? e : 1, inspect() {
        return `${fe(this.opacity, 2)}`;
      } };
    }
    __name(xi, "xi");
    l(xi, "opacity");
    function mt(e) {
      if (!e)
        throw new Error("please define an origin");
      return { id: "origin", origin: e, inspect() {
        return typeof this.origin == "string" ? this.origin : this.origin.str();
      } };
    }
    __name(mt, "mt");
    l(mt, "origin");
    function yi(e) {
      return { id: "layer", layer: e, inspect() {
        var r;
        return (r = this.layer) != null ? r : f.defLayer;
      } };
    }
    __name(yi, "yi");
    l(yi, "layer");
    function vi(e) {
      return { id: "z", z: e, inspect() {
        return `${this.z}`;
      } };
    }
    __name(vi, "vi");
    l(vi, "z");
    function Ei(e, r) {
      return { id: "follow", require: ["pos"], follow: { obj: e, offset: r != null ? r : d(0) }, add() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    __name(Ei, "Ei");
    l(Ei, "follow");
    function Fi(e, r) {
      let n = typeof e == "number" ? S.fromAngle(e) : e.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(n.scale(r));
      } };
    }
    __name(Fi, "Fi");
    l(Fi, "move");
    function gt(e = {}) {
      let r = 0, n = false;
      return { id: "outview", require: ["pos", "area"], isOutOfView() {
        var a;
        let o = d((a = e.offset) != null ? a : 0), s = new Sr(d(0, 0).sub(o), d(I(), G()).add(o));
        return !Bt(this.screenArea(), s);
      }, onExitView(a) {
        return this.on("exitView", a);
      }, onEnterView(a) {
        return this.on("enterView", a);
      }, update() {
        if (this.isOutOfView()) {
          if (n || (this.trigger("exitView"), n = true), e.delay && (r += Z(), r < e.delay))
            return;
          e.hide && (this.hidden = true), e.pause && (this.paused = true), e.destroy && this.destroy();
        } else
          n && (this.trigger("enterView"), n = false), r = 0, e.hide && (this.hidden = false), e.pause && (this.paused = false);
      }, inspect() {
        return this.isOutOfView();
      } };
    }
    __name(gt, "gt");
    l(gt, "outview");
    function bi(e = {}) {
      return typeof e == "number" ? (D("clean(time)", "cleanup({ delay: time })"), N(k({}, gt({ destroy: true, delay: e })), { id: "cleanup" })) : N(k({}, gt({ destroy: true, onExitView: e.onCleanup, offset: e.offset, delay: e.delay })), { id: "cleanup" });
    }
    __name(bi, "bi");
    l(bi, "cleanup");
    function Ci(e = {}) {
      var r, n;
      let a = {};
      return { id: "area", add() {
        this.area.cursor && this.onHover(() => Jt(this.area.cursor));
      }, area: { shape: "rect", offset: (r = e.offset) != null ? r : d(0), width: e.width, height: e.height, scale: (n = e.scale) != null ? n : d(1), cursor: e.cursor }, isClicked() {
        return be() && this.isHovering();
      }, isHovering() {
        let o = this.fixed ? j() : At(j());
        return this.hasPoint(o);
      }, isColliding(o) {
        if (!o.area || !o.exists())
          return false;
        let s = this.worldArea(), u = o.worldArea();
        return Pr(s, u);
      }, isTouching(o) {
        if (!o.area || !o.exists())
          return false;
        let s = this.worldArea(), u = o.worldArea();
        return En(s, u);
      }, onClick(o) {
        return this.onUpdate(() => {
          this.isClicked() && o();
        });
      }, onHover(o, s) {
        return this.onUpdate(() => {
          this.isHovering() ? o() : s && s();
        });
      }, onCollide(o, s) {
        let u = this.onUpdate(() => this._checkCollisions(o, s)), A = this.on("collide", (h, p) => h.is(o) && s(h, p));
        return () => [u, A].forEach((h) => h());
      }, clicks(...o) {
        return D("clicks()", "onClick()"), this.onClick(...o);
      }, hovers(...o) {
        return D("hovers()", "onHover()"), this.onHover(...o);
      }, collides(...o) {
        return D("collides()", "onCollide()"), this.onCollide(...o);
      }, hasPoint(o) {
        return Rt(this.worldArea(), o);
      }, pushOut(o) {
        var s;
        if (o === this || ((s = o.area) == null ? void 0 : s.shape) !== "rect")
          return null;
        let u = this.worldArea(), A = o.worldArea(), h = Ct(u, A);
        if (!ae(h, d(0)))
          return null;
        let p = Math.min(Math.abs(h.p1.x), Math.abs(h.p2.x), Math.abs(h.p1.y), Math.abs(h.p2.y)), g = (() => {
          switch (p) {
            case Math.abs(h.p1.x):
              return d(p, 0);
            case Math.abs(h.p2.x):
              return d(-p, 0);
            case Math.abs(h.p1.y):
              return d(0, p);
            case Math.abs(h.p2.y):
              return d(0, -p);
          }
        })();
        this.pos = this.pos.add(g);
      }, pushOutAll() {
        f.root.every(this.pushOut);
      }, _checkCollisions(o) {
        f.root.every(o, (s) => {
          this === s || !this.exists() || a[s._id] || this.isColliding(s) && (this.trigger("collide", s, null), a[s._id] = s);
        });
        for (let s in a) {
          let u = a[s];
          this.isColliding(u) || delete a[s];
        }
      }, worldArea() {
        var o, s, u, A;
        let h = (o = this.area.width) != null ? o : this.width, p = (s = this.area.height) != null ? s : this.height;
        if (h == null || p == null)
          throw new Error("failed to get area dimension");
        let g = d((u = this.scale) != null ? u : 1).scale(this.area.scale);
        h *= g.x, p *= g.y;
        let m = Ke(this.origin || Ze), y = ((A = this.pos) != null ? A : d(0)).add(this.area.offset).sub(m.add(1, 1).scale(0.5).scale(h, p));
        return { shape: "rect", p1: y, p2: d(y.x + h, y.y + p) };
      }, screenArea() {
        let o = this.worldArea();
        return this.fixed ? o : { shape: "rect", p1: We(o.p1), p2: We(o.p2) };
      } };
    }
    __name(Ci, "Ci");
    l(Ci, "area");
    function Re(e) {
      return { color: e.color, opacity: e.opacity, origin: e.origin, outline: e.outline, fixed: e.fixed, shader: w.shaders[e.shader], uniform: e.uniform };
    }
    __name(Re, "Re");
    l(Re, "getRenderProps");
    function wt(e, r = {}) {
      var n;
      let a = null, o = null;
      function s(u, A, h, p) {
        let g = d(1, 1);
        return h && p ? (g.x = h / (u.width * A.w), g.y = p / (u.height * A.h)) : h ? (g.x = h / (u.width * A.w), g.y = g.x) : p && (g.y = p / (u.height * A.h), g.x = g.y), g;
      }
      __name(s, "s");
      return l(s, "calcTexScale"), { id: "sprite", width: 0, height: 0, frame: r.frame || 0, quad: r.quad || new z(0, 0, 1, 1), animSpeed: (n = r.animSpeed) != null ? n : 1, load() {
        if (typeof e == "string" ? a = w.sprites[e] : a = e, !a)
          throw new Error(`sprite not found: "${e}"`);
        let u = a.frames[0].clone();
        r.quad && (u = u.scale(r.quad));
        let A = s(a.tex, u, r.width, r.height);
        this.width = a.tex.width * u.w * A.x, this.height = a.tex.height * u.h * A.y, r.anim && this.play(r.anim);
      }, draw() {
        Gt(N(k({}, Re(this)), { sprite: a, frame: this.frame, quad: this.quad, flipX: r.flipX, flipY: r.flipY, tiled: r.tiled, width: r.width, height: r.height }));
      }, update() {
        if (!o)
          return;
        let u = a.anims[o.name];
        if (typeof u == "number") {
          this.frame = u;
          return;
        }
        if (u.speed === 0)
          throw new Error("sprite anim speed cannot be 0");
        o.timer += Z() * this.animSpeed, o.timer >= 1 / o.speed && (o.timer = 0, u.from > u.to ? (this.frame--, this.frame < u.to && (o.loop ? this.frame = u.from : (this.frame++, o.onEnd(), this.stop()))) : (this.frame++, this.frame > u.to && (o.loop ? this.frame = u.from : (this.frame--, o.onEnd(), this.stop()))));
      }, play(u, A = {}) {
        var h, p, g, m, y, F, P;
        if (!a) {
          pe(() => {
            this.play(u);
          });
          return;
        }
        let U = a.anims[u];
        if (U == null)
          throw new Error(`anim not found: ${u}`);
        o && this.stop(), o = { name: u, timer: 0, loop: (p = (h = A.loop) != null ? h : U.loop) != null ? p : false, pingpong: (m = (g = A.pingpong) != null ? g : U.pingpong) != null ? m : false, speed: (F = (y = A.speed) != null ? y : U.speed) != null ? F : 10, onEnd: (P = A.onEnd) != null ? P : () => {
        } }, typeof U == "number" ? this.frame = U : this.frame = U.from, this.trigger("animPlay", u), this.trigger("animStart", u);
      }, stop() {
        if (!o)
          return;
        let u = o.name;
        o = null, this.trigger("animEnd", u);
      }, numFrames() {
        return a ? a.frames.length : 0;
      }, curAnim() {
        return o == null ? void 0 : o.name;
      }, flipX(u) {
        r.flipX = u;
      }, flipY(u) {
        r.flipY = u;
      }, onAnimEnd(u, A) {
        return this.on("animEnd", (h) => {
          h === u && A();
        });
      }, onAnimStart(u, A) {
        return this.on("animStart", (h) => {
          h === u && A();
        });
      }, inspect() {
        let u = "";
        return typeof e == "string" ? u += JSON.stringify(e) : u += "[blob]", u;
      } };
    }
    __name(wt, "wt");
    l(wt, "sprite");
    function Xi(e, r = {}) {
      function n(a) {
        var o, s;
        let u = Ae(N(k({}, Re(a)), { text: a.text + "", size: a.textSize, font: a.font, width: r.width && a.width, letterSpacing: a.letterSpacing, lineSpacing: a.lineSpacing, transform: a.transform, styles: a.styles }));
        return a.width = u.width / (((o = a.scale) == null ? void 0 : o.x) || 1), a.height = u.height / (((s = a.scale) == null ? void 0 : s.y) || 1), u;
      }
      __name(n, "n");
      return l(n, "update"), { id: "text", text: e, textSize: r.size, font: r.font, width: r.width, height: 0, lineSpacing: r.lineSpacing, letterSpacing: r.letterSpacing, transform: r.transform, styles: r.styles, load() {
        n(this);
      }, draw() {
        de(n(this));
      } };
    }
    __name(Xi, "Xi");
    l(Xi, "text");
    function Bi(e, r, n = {}) {
      return { id: "rect", width: e, height: r, radius: n.radius || 0, draw() {
        Q(N(k({}, Re(this)), { width: this.width, height: this.height, radius: this.radius }));
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Bi, "Bi");
    l(Bi, "rect");
    function Ri(e, r) {
      return { id: "rect", width: e, height: r, draw() {
        ce(N(k({}, Re(this)), { width: this.width, height: this.height }));
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Ri, "Ri");
    l(Ri, "uvquad");
    function qi(e) {
      return { id: "circle", radius: e, draw() {
        at(N(k({}, Re(this)), { radius: this.radius }));
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    __name(qi, "qi");
    l(qi, "circle");
    function Ui(e = 1, r = v(0, 0, 0)) {
      return { id: "outline", outline: { width: e, color: r } };
    }
    __name(Ui, "Ui");
    l(Ui, "outline");
    function fr(e, r) {
      let n = new ee();
      return e && r && n.pushd(new $e(e, r)), { id: "timer", wait(a, o) {
        return n.pushd(new $e(a, o));
      }, update() {
        n.forEach((a, o) => {
          a.tick(Z()) && n.delete(o);
        });
      } };
    }
    __name(fr, "fr");
    l(fr, "timer");
    let Tn = 640, kn = 65536;
    function Ki(e = {}) {
      var r, n, a;
      let o = 0, s = null, u = null, A = true;
      return { id: "body", require: ["pos", "area"], jumpForce: (r = e.jumpForce) != null ? r : Tn, weight: (n = e.weight) != null ? n : 1, solid: (a = e.solid) != null ? a : true, update() {
        var h;
        let p = false;
        if (s) {
          let g = this.worldArea(), m = s.worldArea(), y = g.p2.y, F = m.p1.y, P = g.p1.x, U = g.p2.x, $ = m.p1.x, se = m.p2.x;
          !s.exists() || y !== F || U < $ || P > se ? (this.trigger("fall", s), s = null, u = null, p = true) : u && s.pos && (this.pos = this.pos.add(s.pos.sub(u)), u = s.pos.clone());
        }
        if (!s) {
          let g = this.move(0, o);
          if (g)
            if (g.isBottom()) {
              s = g.target;
              let m = o;
              o = 0, s.pos && (u = s.pos.clone()), p || (this.trigger("ground", s), A = true);
            } else
              g.isTop() && (o = 0, this.trigger("headbutt", g.target));
          o += Ar() * this.weight * Z(), o = Math.min(o, (h = e.maxVel) != null ? h : kn);
        }
      }, curPlatform() {
        return s;
      }, isGrounded() {
        return s !== null;
      }, grounded() {
        return D("grounded()", "isGrounded()"), this.isGrounded();
      }, isFalling() {
        return o > 0;
      }, falling() {
        return D("falling()", "isFalling()"), this.isFalling();
      }, jump(h) {
        s = null, u = null, o = -h || -this.jumpForce;
      }, doubleJump(h) {
        this.isGrounded() ? this.jump(h) : A && (A = false, this.jump(h), this.trigger("doubleJump"));
      }, onGround(h) {
        return this.on("ground", h);
      }, onFall(h) {
        return this.on("fall", h);
      }, onHeadbutt(h) {
        return this.on("headbutt", h);
      }, onDoubleJump(h) {
        return this.on("doubleJump", h);
      } };
    }
    __name(Ki, "Ki");
    l(Ki, "body");
    function Pi(e, r = {}) {
      let n = w.shaders[e];
      return { id: "shader", shader: e, uniform: r };
    }
    __name(Pi, "Pi");
    l(Pi, "shader");
    function Si() {
      return { id: "solid", require: ["area"], solid: true };
    }
    __name(Si, "Si");
    l(Si, "solid");
    function Ti() {
      return { id: "fixed", fixed: true };
    }
    __name(Ti, "Ti");
    l(Ti, "fixed");
    function xt() {
      return { id: "stay", stay: true };
    }
    __name(xt, "xt");
    l(xt, "stay");
    function ki(e) {
      if (e == null)
        throw new Error("health() requires the initial amount of hp");
      return { id: "health", hurt(r = 1) {
        this.setHP(e - r), this.trigger("hurt");
      }, heal(r = 1) {
        this.setHP(e + r), this.trigger("heal");
      }, hp() {
        return e;
      }, setHP(r) {
        e = r, e <= 0 && this.trigger("death");
      }, onHurt(r) {
        return this.on("hurt", r);
      }, onHeal(r) {
        return this.on("heal", r);
      }, onDeath(r) {
        return this.on("death", r);
      }, inspect() {
        return `${e}`;
      } };
    }
    __name(ki, "ki");
    l(ki, "health");
    function Ni(e, r = {}) {
      var n;
      if (e == null)
        throw new Error("lifespan() requires time");
      let a = 0, o = (n = r.fade) != null ? n : 0, s = Math.max(e - o, 0);
      return { id: "lifespan", update() {
        a += Z(), a >= s && (this.opacity = Xt(a, s, e, 1, 0)), a >= e && this.destroy();
      } };
    }
    __name(Ni, "Ni");
    l(Ni, "lifespan");
    function Mi(e, r, n) {
      if (!e)
        throw new Error("state() requires an initial state");
      let a = {};
      function o(A) {
        a[A] || (a[A] = { enter: [], leave: [], update: [], draw: [] });
      }
      __name(o, "o");
      l(o, "initStateHook");
      function s(A, h, p) {
        o(h), a[h][A].push(p);
      }
      __name(s, "s");
      l(s, "on");
      function u(A, h, ...p) {
        o(h), a[h][A].forEach((g) => g(...p));
      }
      __name(u, "u");
      return l(u, "trigger"), { id: "state", state: e, enterState(A, ...h) {
        if (r && !r.includes(A))
          throw new Error(`State not found: ${A}`);
        let p = this.state;
        if (n) {
          if (!(n == null ? void 0 : n[p]))
            return;
          let g = typeof n[p] == "string" ? [n[p]] : n[p];
          if (!g.includes(A))
            throw new Error(`Cannot transition state from "${p}" to "${A}". Available transitions: ${g.map((m) => `"${m}"`).join(", ")}`);
        }
        u("leave", p, ...h), this.state = A, u("enter", A, ...h), u("enter", `${p} -> ${A}`, ...h);
      }, onStateTransition(A, h, p) {
        s("enter", `${A} -> ${h}`, p);
      }, onStateEnter(A, h) {
        s("enter", A, h);
      }, onStateUpdate(A, h) {
        s("update", A, h);
      }, onStateDraw(A, h) {
        s("draw", A, h);
      }, onStateLeave(A, h) {
        s("leave", A, h);
      }, update() {
        u("update", this.state);
      }, draw() {
        u("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    __name(Mi, "Mi");
    l(Mi, "state");
    function pe(e) {
      i.loaded ? e() : f.on("load", e);
    }
    __name(pe, "pe");
    l(pe, "onLoad");
    function Ii(e, r) {
      f.scenes[e] = r;
    }
    __name(Ii, "Ii");
    l(Ii, "scene");
    function Gi(e, ...r) {
      if (!f.scenes[e])
        throw new Error(`scene not found: ${e}`);
      let n = f.on("updateStart", () => {
        f.events = {}, f.objEvents = { add: new ee(), update: new ee(), draw: new ee(), destroy: new ee() }, f.root.every((a) => {
          a.is("stay") || f.root.remove(a);
        }), f.root.clearEvents(), f.timers = new ee(), f.cam = { pos: ze(), scale: d(1), angle: 0, shake: 0, transform: new R() }, f.layers = {}, f.defLayer = null, f.gravity = An, f.scenes[e](...r), t.debug !== false && hr(), t.burp && cr(), n();
      });
    }
    __name(Gi, "Gi");
    l(Gi, "go");
    function Li(e, r) {
      try {
        return JSON.parse(window.localStorage[e]);
      } catch (e2) {
        return r ? (pr(e, r), r) : null;
      }
    }
    __name(Li, "Li");
    l(Li, "getData");
    function pr(e, r) {
      window.localStorage[e] = JSON.stringify(r);
    }
    __name(pr, "pr");
    l(pr, "setData");
    function Vr(e) {
      let r = e(qe);
      for (let n in r)
        qe[n] = r[n], t.global !== false && (window[n] = r[n]);
      return qe;
    }
    __name(Vr, "Vr");
    l(Vr, "plug");
    function ze() {
      return d(I() / 2, G() / 2);
    }
    __name(ze, "ze");
    l(ze, "center");
    function Yi(e, r) {
      return { id: "grid", gridPos: r.clone(), setGridPos(...n) {
        let a = d(...n);
        this.gridPos = a.clone(), this.pos = d(e.offset().x + this.gridPos.x * e.gridWidth(), e.offset().y + this.gridPos.y * e.gridHeight());
      }, moveLeft() {
        this.setGridPos(this.gridPos.add(d(-1, 0)));
      }, moveRight() {
        this.setGridPos(this.gridPos.add(d(1, 0)));
      }, moveUp() {
        this.setGridPos(this.gridPos.add(d(0, -1)));
      }, moveDown() {
        this.setGridPos(this.gridPos.add(d(0, 1)));
      } };
    }
    __name(Yi, "Yi");
    l(Yi, "grid");
    function Di(e, r) {
      if (!r.width || !r.height)
        throw new Error("Must provide level grid width & height.");
      let n = [], a = d(r.pos || d(0)), o = 0, s = { offset() {
        return a.clone();
      }, gridWidth() {
        return r.width;
      }, gridHeight() {
        return r.height;
      }, getPos(...u) {
        let A = d(...u);
        return d(a.x + A.x * r.width, a.y + A.y * r.height);
      }, spawn(u, ...A) {
        let h = d(...A), p = (() => {
          if (r[u]) {
            if (typeof r[u] != "function")
              throw new Error("level symbol def must be a function returning a component list");
            return r[u](h);
          } else if (r.any)
            return r.any(u, h);
        })();
        if (!p)
          return;
        let g = d(a.x + h.x * r.width, a.y + h.y * r.height);
        for (let y of p)
          if (y.id === "pos") {
            g.x += y.pos.x, g.y += y.pos.y;
            break;
          }
        p.push(je(g)), p.push(Yi(this, h));
        let m = f.root.add(p);
        return n.push(m), m;
      }, width() {
        return o * r.width;
      }, height() {
        return e.length * r.height;
      }, destroy() {
        for (let u of n)
          u.destroy();
      } };
      return e.forEach((u, A) => {
        let h = u.split("");
        o = Math.max(h.length, o), h.forEach((p, g) => {
          s.spawn(p, d(g, A));
        });
      }), s;
    }
    __name(Di, "Di");
    l(Di, "addLevel");
    function mr(e) {
      let r = i.canvas.captureStream(e), n = V.ctx.createMediaStreamDestination();
      V.masterNode.connect(n);
      let a = n.stream, [o] = a.getAudioTracks(), s = new MediaRecorder(r), u = [];
      return s.ondataavailable = (A) => {
        A.data.size > 0 && u.push(A.data);
      }, s.onerror = (A) => {
        V.masterNode.disconnect(n), r.getTracks().forEach((h) => h.stop());
      }, s.start(), { resume() {
        s.resume();
      }, pause() {
        s.pause();
      }, download(A = "kaboom.mp4") {
        s.onstop = () => {
          pn(new Blob(u, { type: "video/mp4" }), A);
        }, s.stop(), V.masterNode.disconnect(n), r.getTracks().forEach((h) => h.stop());
      } };
    }
    __name(mr, "mr");
    l(mr, "record");
    function Oi() {
      D("focus()", "canvas.focus()"), i.canvas.focus();
    }
    __name(Oi, "Oi");
    l(Oi, "focus");
    function gr() {
      return document.activeElement === i.canvas;
    }
    __name(gr, "gr");
    l(gr, "isFocused");
    function yt(e) {
      return f.root.add(e);
    }
    __name(yt, "yt");
    l(yt, "add");
    function Wi(e) {
      return f.root.readd(e);
    }
    __name(Wi, "Wi");
    l(Wi, "readd");
    function Je(e) {
      return f.root.remove(e);
    }
    __name(Je, "Je");
    l(Je, "destroy");
    function ji(e) {
      return f.root.removeAll(e);
    }
    __name(ji, "ji");
    l(ji, "destroyAll");
    function Hi(...e) {
      return f.root.get(...e);
    }
    __name(Hi, "Hi");
    l(Hi, "get");
    function zi(...e) {
      return f.root.every(...e);
    }
    __name(zi, "zi");
    l(zi, "every");
    function Ji(...e) {
      return f.root.revery(...e);
    }
    __name(Ji, "Ji");
    l(Ji, "revery");
    function wr(e = 2, r = 1) {
      let n = 0;
      return { id: "explode", require: ["scale"], update() {
        let a = Math.sin(n * e) * r;
        a < 0 && Je(this), this.scale = d(a), n += Z();
      } };
    }
    __name(wr, "wr");
    l(wr, "explode");
    let Qi = null, Zi = null;
    J(null, ls).then((e) => Qi = e), J(null, hs).then((e) => Zi = e);
    function _i(e, r = {}) {
      var n, a;
      let o = (r.speed || 1) * 5, s = r.scale || 1, u = yt([je(e), wt(Zi), He(0), xt(), mt("center"), wr(o, s), ...((n = r.boomComps) != null ? n : () => [])()]), A = yt([je(e), wt(Qi), He(0), xt(), mt("center"), fr(0.4 / o, () => A.use(wr(o, s))), ...((a = r.kaComps) != null ? a : () => [])()]);
      return { destroy() {
        Je(A), Je(u);
      } };
    }
    __name(_i, "_i");
    l(_i, "addKaboom");
    function Nn() {
      return i.numFrames;
    }
    __name(Nn, "Nn");
    l(Nn, "frames");
    function xr() {
      f.trigger("updateStart"), f.timers.forEach((e, r) => {
        e.time -= Z(), e.time <= 0 && (e.action(), f.timers.delete(r));
      }), f.root.update();
    }
    __name(xr, "xr");
    l(xr, "updateFrame");
    function $i() {
      let e = f.cam, r = S.fromAngle(tt(0, 360)).scale(e.shake);
      e.shake = et(e.shake, 0, 5 * Z()), e.transform = new R().translate(ze()).scale(e.scale).rotateZ(e.angle).translate(e.pos.scale(-1).add(r)), f.root.draw();
    }
    __name($i, "$i");
    l($i, "drawFrame");
    function en() {
      let e = M();
      if (e === 1)
        i.loaded = true, f.trigger("load");
      else {
        let r = I() / 2, n = 24 / i.scale, a = d(I() / 2, G() / 2).sub(d(r / 2, n / 2));
        Q({ pos: d(0), width: I(), height: G(), color: v(0, 0, 0) }), Q({ pos: a, width: r, height: n, fill: false, outline: { width: 4 / i.scale } }), Q({ pos: a, width: r * e, height: n });
      }
    }
    __name(en, "en");
    l(en, "drawLoadScreen");
    function yr(e, r) {
      let n = d(8);
      re(), T(e), te(1 / i.scale);
      let a = Ae({ text: r, font: w.fonts[Xr], size: 16, pos: n, color: v(255, 255, 255), fixed: true }), o = a.width + n.x * 2, s = a.height + n.x * 2;
      e.x + o / i.scale >= I() && T(d(-o, 0)), e.y + s / i.scale >= G() && T(d(0, -s)), Q({ width: o, height: s, color: v(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), de(a), ie();
    }
    __name(yr, "yr");
    l(yr, "drawInspectText");
    function vr() {
      var e, r;
      if (C.inspect) {
        let n = null, a = E.fromArray((e = t.inspectColor) != null ? e : [0, 0, 255]);
        if (f.root.every((o) => {
          if (!o.area || o.hidden)
            return;
          n || o.isHovering() && (n = o);
          let s = n === o ? 8 : 4, u = o.worldArea(), A = u.p2.x - u.p1.x, h = u.p2.y - u.p1.y;
          Q({ pos: u.p1, width: A, height: h, outline: { width: s, color: a }, fill: false, fixed: o.fixed });
        }), n) {
          let o = [], s = n.inspect();
          for (let u in s)
            s[u] ? o.push(`${u}: ${s[u]}`) : o.push(`${u}`);
          yr(j(), o.join(`
`));
        }
        yr(d(8 / i.scale), `FPS: ${C.fps()}`);
      }
      if (C.paused) {
        re(), T(I(), 0), te(1 / i.scale), T(-8, 8);
        let n = 32;
        Q({ width: n, height: n, origin: "topright", color: v(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let a = 1; a <= 2; a++)
          Q({ width: 4, height: n * 0.6, origin: "center", pos: d(-n / 3 * a, n * 0.5), color: v(255, 255, 255), radius: 2, fixed: true });
        ie();
      }
      if (C.timeScale !== 1) {
        re(), T(I(), G()), te(1 / i.scale), T(-8, -8);
        let n = 8, a = Ae({ text: C.timeScale.toFixed(1), font: w.fonts[Xr], size: 16, color: v(255, 255, 255), pos: d(-n), origin: "botright", fixed: true });
        Q({ width: a.width + n * 2 + n * 4, height: a.height + n * 2, origin: "botright", color: v(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let o = 0; o < 2; o++) {
          let s = C.timeScale < 1;
          Yt({ p1: d(-a.width - n * (s ? 2 : 3.5), -n), p2: d(-a.width - n * (s ? 2 : 3.5), -n - a.height), p3: d(-a.width - n * (s ? 3.5 : 2), -n - a.height / 2), pos: d(-o * n * 1 + (s ? -n * 0.5 : 0), 0), color: v(255, 255, 255), fixed: true });
        }
        de(a), ie();
      }
      if (C.curRecording && (re(), T(0, G()), te(1 / i.scale), T(24, -24), at({ radius: 12, color: v(255, 0, 0), opacity: Ur(0, 1, Oe() * 4), fixed: true }), ie()), C.showLog && f.logs.length > 0) {
        re(), T(0, G()), te(1 / i.scale), T(8, -8);
        let n = 8, a = (r = t.logMax) != null ? r : 1;
        f.logs.length > a && (f.logs = f.logs.slice(0, a));
        let o = Ae({ text: f.logs.join(`
`), font: w.fonts[Xr], pos: d(n, -n), origin: "botleft", size: 16, width: I() * i.scale * 0.6, lineSpacing: n / 2, fixed: true, styles: { time: { color: v(127, 127, 127) }, info: { color: v(255, 255, 255) }, error: { color: v(255, 0, 127) } } });
        Q({ width: o.width + n * 2, height: o.height + n * 2, origin: "botleft", color: v(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), de(o), ie();
      }
    }
    __name(vr, "vr");
    l(vr, "drawDebug"), t.debug !== false && hr(), t.burp && cr(), window.addEventListener("error", (e) => {
      C.error(`Error: ${e.error.message}`), li(), Er(() => {
        M() === 1 && (Ne(), vr(), Me());
      });
    });
    function Er(e) {
      let r = l((n) => {
        if (document.visibilityState !== "visible") {
          i.loopID = requestAnimationFrame(r);
          return;
        }
        let a = n / 1e3, o = a - i.realTime;
        i.realTime = a, i.skipTime || (i.dt = o, i.time += i.dt, i.fpsCounter.tick(i.dt)), i.skipTime = false, i.numFrames++, e();
        for (let s in i.keyStates)
          i.keyStates[s] = Tr(i.keyStates[s]);
        for (let s in i.mouseStates)
          i.mouseStates[s] = Tr(i.mouseStates[s]);
        i.charInputted = [], i.isMouseMoved = false, i.isKeyPressed = false, i.isKeyPressedRepeat = false, i.isKeyReleased = false, i.loopID = requestAnimationFrame(r);
      }, "frame");
      i.stopped = false, i.loopID = requestAnimationFrame(r);
    }
    __name(Er, "Er");
    l(Er, "run"), Er(() => {
      jt(), i.loaded ? (f.trigger("input"), C.paused || xr(), Ne(), $i(), t.debug !== false && vr(), Me()) : (Ne(), en(), Me());
    }), K("apl386", is, 45, 74), K("apl386o", ns, 45, 74), K("sink", ss, 6, 8, { chars: "\u2588\u263A\u263B\u2665\u2666\u2663\u2660\u25CF\u25CB\u25AA\u25A1\u25A0\u25D8\u266A\u266B\u2261\u25BA\u25C4\u2302\xDE\xC0\xDF\xD7\xA5\u2191\u2193\u2192\u2190\u25CC\u25CF\u25BC\u25B2 !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u03A7\u2591\u2592\u2593\u1E00\u1E01\u1E02\u2502\u252C\u2524\u250C\u2510\u1E03\u1E04\u253C\u1E05\u1E06\u1E07\u1E08\u1E09\u1E0A\u1E0B\u1E0C\u2500\u251C\u2534\u2514\u2518\u1E0D\u1E0E\u205E\u1E0F\u1E10\u1E11\u1E12\u1E13\u1E14\u1E15\u1E16\u1E17\u1E18\u2584\u1E19\u1E1A\u1E1B\u1E1C\u2026\u1E1D\u1E1E\u1E1F\u1E20\u1E21\u1E22\u1E23\u1E24\u1E25\u1E26\u258C\u2590\u1E27\u1E28\u1E29\u1E2A\u1E2B\u1E2C\u1E2D\u1E2E\u1E2F\u1E30\u1E31\u1E32\u1E33\u1E34\u1E35\u1E36\u1E37\u1E38\u1E39\u1E3A\u1E3B\u1E3C\u1E3D\u1E3E\u1E3F\u1E40\u1E41\u1E42\u1E43\u1E44\u1E45\u1E46\u1E47\u1E48\u1E49\u1E4A\u1E4B\u1E4C\u1E4D\u1E4E\u1E4F\u1E50\u1E51\u1E52\u1E53\u1E54\u1E55\u1E56\u1E57\u1E58\u1E59\u1E5A\u1E5B\u1E5C\u1E5D\u1E5E\u1E5F\u1E60\u1E61\u1E62\u1E63\u1E64\u1E65\u1E66\u1E67\u1E68\u1E69\u1E6A\u1E6B\u1E6C\u1E6D\u1E6E\u1E6F\u1E70\u1E71\u1E72\u1E73\u1E74\u1E75\u1E76\u1E77\u1E78\u1E79\u1E7A\u1E7B\u1E7C" }), K("sinko", os, 8, 10), Ne(), Me();
    let qe = { loadRoot: q, loadSprite: J, loadSpriteAtlas: we, loadSound: _r, loadFont: K, loadShader: ve, loadAseprite: ye, loadPedit: ot, loadBean: $r, load: X, width: I, height: G, center: ze, dt: Z, time: Oe, screenshot: zt, record: mr, isFocused: gr, focus: Oi, cursor: Jt, regCursor: mi, fullscreen: ai, isFullscreen: Qt, onLoad: pe, isTouch: () => i.isTouch, layers: ci, camPos: Ai, camScale: di, camRot: fi, shake: pi, toScreen: We, toWorld: At, gravity: Ar, add: yt, readd: Wi, destroy: Je, destroyAll: ji, get: Hi, every: zi, revery: Ji, pos: je, scale: He, rotate: gi, color: wi, opacity: xi, origin: mt, layer: yi, area: Ci, sprite: wt, text: Xi, rect: Bi, circle: qi, uvquad: Ri, outline: Ui, body: Ki, shader: Pi, timer: fr, solid: Si, fixed: Ti, stay: xt, health: ki, lifespan: Ni, z: vi, move: Fi, outview: gt, cleanup: bi, follow: Ei, state: Mi, on: Xe, onUpdate: Be, onDraw: _t, onCollide: $t, onClick: er, onHover: tr, onKeyDown: dt, onKeyPress: H, onKeyPressRepeat: ft, onKeyRelease: pt, onMouseDown: ir, onMousePress: Vt, onMouseRelease: nr, onMouseMove: sr, onCharInput: or, onTouchStart: ur, onTouchMove: ar, onTouchEnd: lr, mousePos: j, mouseWorldPos: hi, mouseDeltaPos: Ht, isKeyDown: ct, isKeyPressed: Ce, isKeyPressedRepeat: ht, isKeyReleased: De, isMouseDown: Le, isMousePressed: be, isMouseReleased: Ye, isMouseMoved: lt, loop: Vi, wait: rr, play: Te, volume: ei, burp: kt, audioCtx: V.ctx, Timer: $e, Line: Pe, Rect: Sr, Circle: bn, Vec2: S, Color: E, Mat4: R, Quad: z, RNG: qt, rng: wn, rand: tt, randi: Lr, randSeed: xn, vec2: d, rgb: v, hsl2rgb: es, quad: gn, choose: vn, chance: yn, lerp: et, map: Xt, mapc: mn, wave: Ur, deg2rad: he, rad2deg: Ir, testAreaRect: Bt, testAreaLine: Jr, testAreaCircle: Qr, testAreaPolygon: Zr, testAreaPoint: Rt, testAreaArea: Pr, testLineLine: le, testRectRect: Yr, testRectLine: Ut, testRectPoint: ae, testPolygonPoint: Se, testLinePolygon: rt, testPolygonPolygon: St, testCircleCircle: Hr, testCirclePoint: Pt, testRectPolygon: Kt, drawSprite: Gt, drawText: oi, formatText: Ae, drawRect: Q, drawLine: Fe, drawLines: Lt, drawTriangle: Yt, drawCircle: at, drawEllipse: Dt, drawUVQuad: ce, drawPolygon: Ge, drawFormattedText: de, pushTransform: re, popTransform: ie, pushTranslate: T, pushRotate: Ie, pushScale: te, debug: C, scene: Ii, go: Gi, addLevel: Di, getData: Li, setData: pr, plug: Vr, ASCII_CHARS: ln, CP437_CHARS: As, canvas: i.canvas, addKaboom: _i, LEFT: S.LEFT, RIGHT: S.RIGHT, UP: S.UP, DOWN: S.DOWN, RED: E.RED, GREEN: E.GREEN, BLUE: E.BLUE, YELLOW: E.YELLOW, MAGENTA: E.MAGENTA, CYAN: E.CYAN, WHITE: E.WHITE, BLACK: E.BLACK, keyIsDown: b("keyIsDown()", "isKeyDown()", ct), keyIsPressed: b("keyIsPressed()", "isKeyPressed()", Ce), keyIsPressedRep: b("keyIsPressedRep()", "isKeyPressedRepeat()", ht), keyIsReleased: b("keyIsReleased()", "isKeyReleased()", De), mouseIsDown: b("mouseIsDown()", "isMouseDown()", Le), mouseIsClicked: b("mouseIsClicked()", "isMousePressed()", be), mouseIsReleased: b("mouseIsReleased()", "isMouseReleased()", Ye), mouseIsMoved: b("mouseIsMoved()", "isMouseMoved()", lt), dir: b("dir()", "Vec2.fromAngle()", S.fromAngle), action: b("action()", "onUpdate()", Be), render: b("render()", "onDraw()", _t), collides: b("collides()", "onCollide()", $t), clicks: b("clicks()", "onClick()", er), hovers: b("hovers()", "onHover()", tr), keyDown: b("keyDown()", "onKeyDown()", dt), keyPress: b("keyPress()", "onKeyPress()", H), keyPressRep: b("keyPressRep()", "onKeyPressRepeat()", ft), keyRelease: b("keyRelease()", "onKeyRelease()", pt), mouseDown: b("mouseDown()", "onMouseDown()", ir), mouseClick: b("mouseClick()", "onMousePress()", Vt), mouseRelease: b("mouseRelease()", "onMouseRelease()", nr), mouseMove: b("mouseMove()", "onMouseMove()", sr), charInput: b("charInput()", "onCharInput()", or), touchStart: b("touchStart()", "onTouchStart()", ur), touchMove: b("touchMove()", "onTouchMove()", ar), touchEnd: b("touchEnd()", "onTouchEnd()", lr), focused: b("focused()", "isFocused()", gr), ready: b("ready()", "onLoad()", pe) };
    if (t.plugins && t.plugins.forEach(Vr), t.global !== false)
      for (let e in qe)
        window[e] = qe[e];
    return qe;
  }, "default");

  // code/main.ts
  vs({
    burp: true
  });
  loadSprite("bean", "./sprites/bean.png");
  add([
    sprite("bean"),
    color(BLUE),
    pos(30, 404)
  ]);
})();
//# sourceMappingURL=game.js.map
