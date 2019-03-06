(function() {
  const $c = function(a) {
    this.w = a || [];
  };
  $c.prototype.set = function(a) {
    this.w[a] = !0;
  };
  $c.prototype.encode = function() {
    for (var a = [], b = 0; b < this.w.length; b++)
      this.w[b] && (a[Math.floor(b / 6)] ^= 1 << b % 6);
    for (b = 0; b < a.length; b++)
      a[
        b
      ] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(
        a[b] || 0
      );
    return `${a.join('')}~`;
  };
  const vd = new $c();
  function J(a) {
    vd.set(a);
  }
  const Td = function(a) {
    a = Dd(a);
    a = new $c(a);
    for (var b = vd.w.slice(), c = 0; c < a.w.length; c++)
      b[c] = b[c] || a.w[c];
    return new $c(b).encode();
  };

  var Dd = function(a) {
    a = a.get(Gd);
    ka(a) || (a = []);
    return a;
  };
  const ea = function(a) {
    return typeof a === 'function';
  };

  var ka = function(a) {
    return Object.prototype.toString.call(Object(a)) == '[object Array]';
  };

  const qa = function(a) {
    return void 0 != a && `${a.constructor}`.indexOf('String') > -1;
  };

  const D = function(a, b) {
    return a.indexOf(b) == 0;
  };

  const sa = function(a) {
    return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : '';
  };

  const ra = function() {
    for (
      var a =
          O.navigator.userAgent +
          (M.cookie ? M.cookie : '') +
          (M.referrer ? M.referrer : ''),
        b = a.length,
        c = O.history.length;
      c > 0;

    )
      a += c-- ^ b++;
    return [
      hd() ^ (La(a) & 2147483647),
      Math.round(new Date().getTime() / 1e3)
    ].join('.');
  };

  const ta = function(a) {
    const b = M.createElement('img');
    b.width = 1;
    b.height = 1;
    b.src = a;
    return b;
  };

  const ua = function() {};

  const K = function(a) {
    if (encodeURIComponent instanceof Function) return encodeURIComponent(a);
    J(28);
    return a;
  };

  const L = function(a, b, c, d) {
    try {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent(`on${b}`, c);
    } catch (e) {
      J(27);
    }
  };

  const f = /^[\w\-:/.?=&%!]+$/;

  const wa = function(a, b, c) {
    a &&
      (c
        ? ((c = ''),
          b && f.test(b) && (c = ` id="${b}"`),
          f.test(a) && M.write(`<script${c} src="${a}">\x3c/script>`))
        : ((c = M.createElement('script')),
          (c.type = 'text/javascript'),
          (c.async = !0),
          (c.src = a),
          b && (c.id = b),
          (a = M.getElementsByTagName('script')[0]),
          a.parentNode.insertBefore(c, a)));
  };

  const be = function(a, b) {
    return E(M.location[b ? 'href' : 'search'], a);
  };

  var E = function(a, b) {
    return (a = a.match(
      `(?:&|#|\\?)${K(b).replace(
        /([.*+?^=!:${}()|\[\]\/\\])/g,
        '\\$1'
      )}=([^&#]*)`
    )) && a.length == 2
      ? a[1]
      : '';
  };

  const xa = function() {
    const a = `${M.location.hostname}`;
    return a.indexOf('www.') == 0 ? a.substring(4) : a;
  };

  const de = function(a, b) {
    const c = a.indexOf(b);
    if (c == 5 || c == 6)
      if (
        ((a = a.charAt(c + b.length)),
        a == '/' || a == '?' || a == '' || a == ':')
      )
        return !0;
    return !1;
  };

  const ya = function(a, b) {
    const c = M.referrer;
    if (/^(https?|android-app):\/\//i.test(c)) {
      if (a) return c;
      a = `//${M.location.hostname}`;
      if (!de(c, a))
        return b &&
          ((b = `${a.replace(/\./g, '-')}.cdn.ampproject.org`), de(c, b))
          ? void 0
          : c;
    }
  };

  const za = function(a, b) {
    if (b.length == 1 && b[0] != null && typeof b[0] === 'object') return b[0];
    for (var c = {}, d = Math.min(a.length + 1, b.length), e = 0; e < d; e++)
      if (typeof b[e] === 'object') {
        for (const g in b[e]) b[e].hasOwnProperty(g) && (c[g] = b[e][g]);
        break;
      } else e < a.length && (c[a[e]] = b[e]);
    return c;
  };
  const ee = function() {
    this.keys = [];
    this.values = {};
    this.m = {};
  };
  ee.prototype.set = function(a, b, c) {
    this.keys.push(a);
    c ? (this.m[`:${a}`] = b) : (this.values[`:${a}`] = b);
  };
  ee.prototype.get = function(a) {
    return this.m.hasOwnProperty(`:${a}`)
      ? this.m[`:${a}`]
      : this.values[`:${a}`];
  };
  ee.prototype.map = function(a) {
    for (let b = 0; b < this.keys.length; b++) {
      const c = this.keys[b];

      const d = this.get(c);
      d && a(c, d);
    }
  };
  var O = window;

  var M = document;

  const va = function(a, b) {
    return setTimeout(a, b);
  };
  const F = window;

  const Ea = document;

  const G = function(a) {
    let b = F._gaUserPrefs;
    if ((b && b.ioo && b.ioo()) || (a && !0 === F[`ga-disable-${a}`]))
      return !0;
    try {
      var c = F.external;
      if (c && c._gaUserPrefs && c._gaUserPrefs == 'oo') return !0;
    } catch (g) {}
    a = [];
    b = Ea.cookie.split(';');
    c = /^\s*AMP_TOKEN=\s*(.*?)\s*$/;
    for (let d = 0; d < b.length; d++) {
      const e = b[d].match(c);
      e && a.push(e[1]);
    }
    for (b = 0; b < a.length; b++)
      if (decodeURIComponent(a[b]) == '$OPT_OUT') return !0;
    return !1;
  };
  const Ca = function(a) {
    const b = [];

    const c = M.cookie.split(';');
    a = new RegExp(`^\\s*${a}=\\s*(.*?)\\s*$`);
    for (let d = 0; d < c.length; d++) {
      const e = c[d].match(a);
      e && b.push(e[1]);
    }
    return b;
  };

  const zc = function(a, b, c, d, e, g) {
    e = G(e)
      ? !1
      : eb.test(M.location.hostname) || (c == '/' && vc.test(d))
        ? !1
        : !0;
    if (!e) return !1;
    b && b.length > 1200 && (b = b.substring(0, 1200));
    c = `${a}=${b}; path=${c}; `;
    g && (c += `expires=${new Date(new Date().getTime() + g).toGMTString()}; `);
    d && d !== 'none' && (c += `domain=${d};`);
    d = M.cookie;
    M.cookie = c;
    if (!(d = d != M.cookie))
      a: {
        a = Ca(a);
        for (d = 0; d < a.length; d++)
          if (b == a[d]) {
            d = !0;
            break a;
          }
        d = !1;
      }
    return d;
  };

  const Cc = function(a) {
    return encodeURIComponent
      ? encodeURIComponent(a)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
      : a;
  };

  var vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/;

  var eb = /(^|\.)doubleclick\.net$/i;
  let oc;

  const Id = /^.*Version\/?(\d+)[^\d].*$/i;

  const ne = function() {
    if (void 0 !== O.__ga4__) return O.__ga4__;
    if (void 0 === oc) {
      let a = O.navigator.userAgent;
      if (a) {
        let b = a;
        try {
          b = decodeURIComponent(a);
        } catch (c) {}
        if (
          (a =
            !(b.indexOf('Chrome') >= 0) &&
            !(b.indexOf('CriOS') >= 0) &&
            (b.indexOf('Safari/') >= 0 || b.indexOf('Safari,') >= 0))
        )
          (b = Id.exec(b)), (a = (b ? Number(b[1]) : -1) >= 11);
        oc = a;
      } else oc = !1;
    }
    return oc;
  };
  let Fa;

  let Ga;

  let fb;

  let Ab;

  const ja = /^https?:\/\/[^/]*cdn\.ampproject\.org\//;

  let Ub = [];

  const ic = function() {
    Z.D([ua]);
  };

  var tc = function(a, b) {
    let c = Ca('AMP_TOKEN');
    if (c.length > 1) return J(55), !1;
    c = decodeURIComponent(c[0] || '');
    if (c == '$OPT_OUT' || c == '$ERROR' || G(b)) return J(62), !1;
    if (!ja.test(M.referrer) && c == '$NOT_FOUND') return J(68), !1;
    if (void 0 !== Ab)
      return (
        J(56),
        va(() => {
          a(Ab);
        }, 0),
        !0
      );
    if (Fa) return Ub.push(a), !0;
    if (c == '$RETRIEVING')
      return (
        J(57),
        va(() => {
          tc(a, b);
        }, 1e4),
        !0
      );
    Fa = !0;
    (c && c[0] != '$') ||
      (xc('$RETRIEVING', 3e4), setTimeout(Mc, 3e4), (c = ''));
    return Pc(c, b) ? (Ub.push(a), !0) : !1;
  };

  var Pc = function(a, b, c) {
    if (!window.JSON) return J(58), !1;
    let d = O.XMLHttpRequest;
    if (!d) return J(59), !1;
    let e = new d();
    if (!('withCredentials' in e)) return J(60), !1;
    e.open(
      'POST',
      `${c ||
        'https://ampcid.google.com/v1/publisher:getClientId'}?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM`,
      !0
    );
    e.withCredentials = !0;
    e.setRequestHeader('Content-Type', 'text/plain');
    e.onload = function() {
      Fa = !1;
      if (e.readyState == 4) {
        try {
          e.status != 200 && (J(61), Qc('', '$ERROR', 3e4));
          const d = JSON.parse(e.responseText);
          d.optOut
            ? (J(63), Qc('', '$OPT_OUT', 31536e6))
            : d.clientId
              ? Qc(d.clientId, d.securityToken, 31536e6)
              : !c && d.alternateUrl
                ? (Ga && clearTimeout(Ga), (Fa = !0), Pc(a, b, d.alternateUrl))
                : (J(64), Qc('', '$NOT_FOUND', 36e5));
        } catch (ca) {
          J(65), Qc('', '$ERROR', 3e4);
        }
        e = null;
      }
    };
    d = { originScope: 'AMP_ECID_GOOGLE' };
    a && (d.securityToken = a);
    e.send(JSON.stringify(d));
    Ga = va(() => {
      J(66);
      Qc('', '$ERROR', 3e4);
    }, 1e4);
    return !0;
  };

  var Mc = function() {
    Fa = !1;
  };

  var xc = function(a, b) {
    if (void 0 === fb) {
      fb = '';
      for (let c = id(), d = 0; d < c.length; d++) {
        const e = c[d];
        if (zc('AMP_TOKEN', encodeURIComponent(a), '/', e, '', b)) {
          fb = e;
          return;
        }
      }
    }
    zc('AMP_TOKEN', encodeURIComponent(a), '/', fb, '', b);
  };

  var Qc = function(a, b, c) {
    Ga && clearTimeout(Ga);
    b && xc(b, c);
    Ab = a;
    b = Ub;
    Ub = [];
    for (c = 0; c < b.length; c++) b[c](a);
  };
  const oe = function() {
    return `${
      Ba || M.location.protocol == 'https:' ? 'https:' : 'http:'
    }//www.google-analytics.com`;
  };

  const Da = function(a) {
    this.name = 'len';
    this.message = `${a}-8192`;
  };

  const ba = function(a, b, c) {
    c = c || ua;
    if (b.length <= 2036) wc(a, b, c);
    else if (b.length <= 8192) x(a, b, c) || wd(a, b, c) || wc(a, b, c);
    else throw (ge('len', b.length), new Da(b.length));
  };

  const pe = function(a, b, c, d) {
    d = d || ua;
    wd(`${a}?${b}`, '', d, c);
  };

  var wc = function(a, b, c) {
    const d = ta(`${a}?${b}`);
    d.onload = d.onerror = function() {
      d.onload = null;
      d.onerror = null;
      c();
    };
  };

  var wd = function(a, b, c, d) {
    const e = O.XMLHttpRequest;
    if (!e) return !1;
    let g = new e();
    if (!('withCredentials' in g)) return !1;
    a = a.replace(/^http:/, 'https:');
    g.open('POST', a, !0);
    g.withCredentials = !0;
    g.setRequestHeader('Content-Type', 'text/plain');
    g.onreadystatechange = function() {
      if (g.readyState == 4) {
        if (d)
          try {
            const a = g.responseText;
            if (a.length < 1) ge('xhr', 'ver', '0'), c();
            else if (a.charAt(0) != '1')
              ge('xhr', 'ver', String(a.length)), c();
            else if (d.count++ > 3) ge('xhr', 'tmr', `${d.count}`), c();
            else if (a.length == 1) c();
            else {
              const b = a.charAt(1);
              if (b == 'd')
                pe('https://stats.g.doubleclick.net/j/collect', d.U, d, c);
              else if (b == 'g') {
                const e = 'https://www.google.%/ads/ga-audiences'.replace(
                  '%',
                  'com'
                );
                wc(e, d.google, c);
                const w = a.substring(2);
                if (w)
                  if (/^[a-z.]{1,6}$/.test(w)) {
                    const ha = 'https://www.google.%/ads/ga-audiences'.replace(
                      '%',
                      w
                    );
                    wc(ha, d.google, ua);
                  } else ge('tld', 'bcc', w);
              } else ge('xhr', 'brc', b), c();
            }
          } catch (ue) {
            ge('xhr', 'rsp'), c();
          }
        else c();
        g = null;
      }
    };
    g.send(b);
    return !0;
  };

  var x = function(a, b, c) {
    return O.navigator.sendBeacon
      ? O.navigator.sendBeacon(a, b)
        ? (c(), !0)
        : !1
      : !1;
  };

  var ge = function(a, b, c) {
    100 * Math.random() >= 1 ||
      G('?') ||
      ((a = ['t=error', `_e=${a}`, '_v=j67', 'sr=1']),
      b && a.push(`_f=${b}`),
      c && a.push(`_m=${K(c.substring(0, 100))}`),
      a.push('aip=1'),
      a.push(`z=${hd()}`),
      wc('https://www.google-analytics.com/u/d', a.join('&'), ua));
  };
  const h = function(a) {
    const b = (O.gaData = O.gaData || {});
    return (b[a] = b[a] || {});
  };
  const Ha = function() {
    this.M = [];
  };
  Ha.prototype.add = function(a) {
    this.M.push(a);
  };
  Ha.prototype.D = function(a) {
    try {
      for (var b = 0; b < this.M.length; b++) {
        const c = a.get(this.M[b]);
        c && ea(c) && c.call(O, a);
      }
    } catch (d) {}
    b = a.get(Ia);
    b != ua && ea(b) && (a.set(Ia, ua, !0), setTimeout(b, 10));
  };
  function Ja(a) {
    if (a.get(Ka) != 100 && La(P(a, Q)) % 1e4 >= 100 * R(a, Ka)) throw 'abort';
  }
  function Ma(a) {
    if (G(P(a, Na))) throw 'abort';
  }
  function Oa() {
    const a = M.location.protocol;
    if (a != 'http:' && a != 'https:') throw 'abort';
  }
  function Pa(a) {
    try {
      O.navigator.sendBeacon
        ? J(42)
        : O.XMLHttpRequest &&
          'withCredentials' in new O.XMLHttpRequest() &&
          J(40);
    } catch (c) {}
    a.set(ld, Td(a), !0);
    a.set(Ac, R(a, Ac) + 1);
    const b = [];
    Qa.map((c, d) => {
      d.F &&
        ((c = a.get(c)),
        void 0 != c &&
          c != d.defaultValue &&
          (typeof c === 'boolean' && (c *= 1), b.push(`${d.F}=${K(`${c}`)}`)));
    });
    b.push(`z=${Bd()}`);
    a.set(Ra, b.join('&'), !0);
  }
  function Sa(a) {
    let b = P(a, gd) || `${oe()}/collect`;

    let c = a.get(qe);

    let d = P(a, fa);
    !d && a.get(Vd) && (d = 'beacon');
    if (c) pe(b, P(a, Ra), c, a.get(Ia));
    else if (d) {
      c = d;
      d = P(a, Ra);
      let e = a.get(Ia);
      e = e || ua;
      c == 'image'
        ? wc(b, d, e)
        : (c == 'xhr' && wd(b, d, e)) ||
          (c == 'beacon' && x(b, d, e)) ||
          ba(b, d, e);
    } else ba(b, P(a, Ra), a.get(Ia));
    b = a.get(Na);
    b = h(b);
    c = b.hitcount;
    b.hitcount = c ? c + 1 : 1;
    b = a.get(Na);
    delete h(b).pending_experiments;
    a.set(Ia, ua, !0);
  }
  function Hc(a) {
    (O.gaData = O.gaData || {}).expId &&
      a.set(Nc, (O.gaData = O.gaData || {}).expId);
    (O.gaData = O.gaData || {}).expVar &&
      a.set(Oc, (O.gaData = O.gaData || {}).expVar);
    let b = a.get(Na);
    if ((b = h(b).pending_experiments)) {
      const c = [];
      for (d in b)
        b.hasOwnProperty(d) &&
          b[d] &&
          c.push(`${encodeURIComponent(d)}.${encodeURIComponent(b[d])}`);
      var d = c.join('!');
    } else d = void 0;
    d && a.set(m, d, !0);
  }
  function cd() {
    if (O.navigator && O.navigator.loadPurpose == 'preview') throw 'abort';
  }
  function yd(a) {
    const b = O.gaDevIds;
    ka(b) && b.length != 0 && a.set('&did', b.join(','), !0);
  }
  function vb(a) {
    if (!a.get(Na)) throw 'abort';
  }
  var hd = function() {
    return Math.round(2147483647 * Math.random());
  };

  var Bd = function() {
    try {
      const a = new Uint32Array(1);
      O.crypto.getRandomValues(a);
      return a[0] & 2147483647;
    } catch (b) {
      return hd();
    }
  };
  function Ta(a) {
    let b = R(a, Ua);
    b >= 500 && J(15);
    let c = P(a, Va);
    if (c != 'transaction' && c != 'item') {
      c = R(a, Wa);
      const d = new Date().getTime();

      let e = R(a, Xa);
      e == 0 && a.set(Xa, d);
      e = Math.round((2 * (d - e)) / 1e3);
      e > 0 && ((c = Math.min(c + e, 20)), a.set(Xa, d));
      if (c <= 0) throw 'abort';
      a.set(Wa, --c);
    }
    a.set(Ua, ++b);
  }
  const Ya = function() {
    this.data = new ee();
  };

  var Qa = new ee();

  const Za = [];
  Ya.prototype.get = function(a) {
    const b = $a(a);

    let c = this.data.get(a);
    b &&
      void 0 == c &&
      (c = ea(b.defaultValue) ? b.defaultValue() : b.defaultValue);
    return b && b.Z ? b.Z(this, a, c) : c;
  };
  var P = function(a, b) {
    a = a.get(b);
    return void 0 == a ? '' : `${a}`;
  };

  var R = function(a, b) {
    a = a.get(b);
    return void 0 == a || a === '' ? 0 : 1 * a;
  };
  Ya.prototype.set = function(a, b, c) {
    if (a)
      if (typeof a === 'object')
        for (const d in a) a.hasOwnProperty(d) && ab(this, d, a[d], c);
      else ab(this, a, b, c);
  };
  var ab = function(a, b, c, d) {
    if (void 0 != c)
      switch (b) {
        case Na:
          wb.test(c);
      }
    const e = $a(b);
    e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d);
  };

  const bb = function(a, b, c, d, e) {
    this.name = a;
    this.F = b;
    this.Z = d;
    this.o = e;
    this.defaultValue = c;
  };

  var $a = function(a) {
    let b = Qa.get(a);
    if (!b)
      for (let c = 0; c < Za.length; c++) {
        const d = Za[c];

        const e = d[0].exec(a);
        if (e) {
          b = d[1](e);
          Qa.set(b.name, b);
          break;
        }
      }
    return b;
  };

  const yc = function(a) {
    let b;
    Qa.map((c, d) => {
      d.F == a && (b = d);
    });
    return b && b.name;
  };

  const S = function(a, b, c, d, e) {
    a = new bb(a, b, c, d, e);
    Qa.set(a.name, a);
    return a.name;
  };

  const cb = function(a, b) {
    Za.push([new RegExp(`^${a}$`), b]);
  };

  const T = function(a, b, c) {
    return S(a, b, c, void 0, db);
  };

  var db = function() {};
  const gb =
    (qa(window.GoogleAnalyticsObject) && sa(window.GoogleAnalyticsObject)) ||
    'ga';

  const jd = /^(?:utma\.)?\d+\.\d+$/;

  const kd = /^amp-[\w.-]{22,64}$/;

  var Ba = !1;

  const hb = T('apiVersion', 'v');

  const ib = T('clientVersion', '_v');
  S('anonymizeIp', 'aip');
  const jb = S('adSenseId', 'a');

  var Va = S('hitType', 't');

  var Ia = S('hitCallback');

  var Ra = S('hitPayload');
  S('nonInteraction', 'ni');
  S('currencyCode', 'cu');
  S('dataSource', 'ds');
  var Vd = S('useBeacon', void 0, !1);

  var fa = S('transport');
  S('sessionControl', 'sc', '');
  S('sessionGroup', 'sg');
  S('queueTime', 'qt');
  var Ac = S('_s', '_s');
  S('screenName', 'cd');
  const kb = S('location', 'dl', '');

  const lb = S('referrer', 'dr');

  const mb = S('page', 'dp', '');
  S('hostname', 'dh');
  const nb = S('language', 'ul');

  const ob = S('encoding', 'de');
  S('title', 'dt', () => M.title || void 0);
  cb('contentGroup([0-9]+)', a => new bb(a[0], `cg${a[1]}`));
  const pb = S('screenColors', 'sd');

  const qb = S('screenResolution', 'sr');

  const rb = S('viewportSize', 'vp');

  const sb = S('javaEnabled', 'je');

  const tb = S('flashVersion', 'fl');
  S('campaignId', 'ci');
  S('campaignName', 'cn');
  S('campaignSource', 'cs');
  S('campaignMedium', 'cm');
  S('campaignKeyword', 'ck');
  S('campaignContent', 'cc');
  const ub = S('eventCategory', 'ec');

  const xb = S('eventAction', 'ea');

  const yb = S('eventLabel', 'el');

  const zb = S('eventValue', 'ev');

  const Bb = S('socialNetwork', 'sn');

  const Cb = S('socialAction', 'sa');

  const Db = S('socialTarget', 'st');

  const Eb = S('l1', 'plt');

  const Fb = S('l2', 'pdt');

  const Gb = S('l3', 'dns');

  const Hb = S('l4', 'rrt');

  const Ib = S('l5', 'srt');

  const Jb = S('l6', 'tcp');

  const Kb = S('l7', 'dit');

  const Lb = S('l8', 'clt');

  const Mb = S('timingCategory', 'utc');

  const Nb = S('timingVar', 'utv');

  const Ob = S('timingLabel', 'utl');

  const Pb = S('timingValue', 'utt');
  S('appName', 'an');
  S('appVersion', 'av', '');
  S('appId', 'aid', '');
  S('appInstallerId', 'aiid', '');
  S('exDescription', 'exd');
  S('exFatal', 'exf');
  var Nc = S('expId', 'xid');

  var Oc = S('expVar', 'xvar');

  var m = S('exp', 'exp');

  const Rc = S('_utma', '_utma');

  const Sc = S('_utmz', '_utmz');

  const Tc = S('_utmht', '_utmht');

  var Ua = S('_hc', void 0, 0);

  var Xa = S('_ti', void 0, 0);

  var Wa = S('_to', void 0, 20);
  cb('dimension([0-9]+)', a => new bb(a[0], `cd${a[1]}`));
  cb('metric([0-9]+)', a => new bb(a[0], `cm${a[1]}`));
  S('linkerParam', void 0, void 0, Bc, db);
  var ld = S('usage', '_u');

  var Gd = S('_um');
  S(
    'forceSSL',
    void 0,
    void 0,
    () => Ba,
    (a, b, c) => {
      J(34);
      Ba = !!c;
    }
  );
  const ed = S('_j1', 'jid');

  const ia = S('_j2', 'gjid');
  cb('\\&(.*)', a => {
    const b = new bb(a[0], a[1]);

    const c = yc(a[0].substring(1));
    c &&
      ((b.Z = function(a) {
        return a.get(c);
      }),
      (b.o = function(a, b, g, ca) {
        a.set(c, g, ca);
      }),
      (b.F = void 0));
    return b;
  });
  const Qb = T('_oot');

  const dd = S('previewTask');

  const Rb = S('checkProtocolTask');

  const md = S('validationTask');

  const Sb = S('checkStorageTask');

  const Uc = S('historyImportTask');

  const Tb = S('samplerTask');

  const Vb = S('_rlt');

  const Wb = S('buildHitTask');

  const Xb = S('sendHitTask');

  const Vc = S('ceTask');

  const zd = S('devIdTask');

  const Cd = S('timingTask');

  const Ld = S('displayFeaturesTask');

  const oa = S('customTask');

  const V = T('name');

  var Q = T('clientId', 'cid');

  const n = T('clientIdTime');

  const xd = T('storedClientId');

  const Ad = S('userId', 'uid');

  var Na = T('trackingId', 'tid');

  const U = T('cookieName', void 0, '_ga');

  const W = T('cookieDomain');

  const Yb = T('cookiePath', void 0, '/');

  const Zb = T('cookieExpires', void 0, 63072e3);

  const Hd = T('cookieUpdate', void 0, !0);

  const $b = T('legacyCookieDomain');

  const Wc = T('legacyHistoryImport', void 0, !0);

  const ac = T('storage', void 0, 'cookie');

  const bc = T('allowLinker', void 0, !1);

  const cc = T('allowAnchor', void 0, !0);

  var Ka = T('sampleRate', 'sf', 100);

  const dc = T('siteSpeedSampleRate', void 0, 1);

  const ec = T('alwaysSendReferrer', void 0, !1);

  const I = T('_gid', '_gid');

  const la = T('_gcn');

  const Kd = T('useAmpClientId');

  const ce = T('_gclid');

  const fe = T('_gt');

  const he = T('_ge', void 0, 7776e6);

  const ie = T('_gclsrc');

  const je = T('storeGac', void 0, !0);

  var gd = S('transportUrl');

  const Md = S('_r', '_r');

  var qe = S('_dp');
  function X(a, b, c, d) {
    b[a] = function() {
      try {
        return d && J(d), c.apply(this, arguments);
      } catch (e) {
        throw (ge('exc', a, e && e.name), e);
      }
    };
  }
  const Od = function() {
    this.V = 100;
    this.$ = this.fa = !1;
    this.oa = 'detourexp';
    this.ea = 1;
  };

  const Ed = function(a) {
    const b = new Od();

    let c;
    if (b.fa && b.$) return 0;
    b.$ = !0;
    if (a) {
      if (b.oa && void 0 !== a.get(b.oa)) return R(a, b.oa);
      if (a.get(dc) == 0) return 0;
    }
    if (b.V == 0) return 0;
    void 0 === c && (c = Bd());
    return c % b.V == 0 ? (Math.floor(c / b.V) % b.ea) + 1 : 0;
  };
  function fc() {
    let a;
    let b;
    if ((b = (b = O.navigator) ? b.plugins : null) && b.length)
      for (let c = 0; c < b.length && !a; c++) {
        const d = b[c];
        d.name.indexOf('Shockwave Flash') > -1 && (a = d.description);
      }
    if (!a)
      try {
        var e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7');
        a = e.GetVariable('$version');
      } catch (g) {}
    if (!a)
      try {
        (e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6')),
          (a = 'WIN 6,0,21,0'),
          (e.AllowScriptAccess = 'always'),
          (a = e.GetVariable('$version'));
      } catch (g) {}
    if (!a)
      try {
        (e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')),
          (a = e.GetVariable('$version'));
      } catch (g) {}
    a &&
      (e = a.match(/[\d]+/g)) &&
      e.length >= 3 &&
      (a = `${e[0]}.${e[1]} r${e[2]}`);
    return a || void 0;
  }
  const aa = function(a) {
    const b = Math.min(R(a, dc), 100);
    return La(P(a, Q)) % 100 >= b ? !1 : !0;
  };

  var gc = function(a) {
    const b = {};
    if (Ec(b) || Fc(b)) {
      const c = b[Eb];
      void 0 == c ||
        Infinity == c ||
        isNaN(c) ||
        (c > 0
          ? (Y(b, Gb),
            Y(b, Jb),
            Y(b, Ib),
            Y(b, Fb),
            Y(b, Hb),
            Y(b, Kb),
            Y(b, Lb),
            va(() => {
              a(b);
            }, 10))
          : L(
              O,
              'load',
              () => {
                gc(a);
              },
              !1
            ));
    }
  };

  var Ec = function(a) {
    let b = O.performance || O.webkitPerformance;
    b = b && b.timing;
    if (!b) return !1;
    const c = b.navigationStart;
    if (c == 0) return !1;
    a[Eb] = b.loadEventStart - c;
    a[Gb] = b.domainLookupEnd - b.domainLookupStart;
    a[Jb] = b.connectEnd - b.connectStart;
    a[Ib] = b.responseStart - b.requestStart;
    a[Fb] = b.responseEnd - b.responseStart;
    a[Hb] = b.fetchStart - c;
    a[Kb] = b.domInteractive - c;
    a[Lb] = b.domContentLoadedEventStart - c;
    return !0;
  };

  var Fc = function(a) {
    if (O.top != O) return !1;
    const b = O.external;

    let c = b && b.onloadT;
    b && !b.isValidLoadTime && (c = void 0);
    c > 2147483648 && (c = void 0);
    c > 0 && b.setPageReadyTime();
    if (void 0 == c) return !1;
    a[Eb] = c;
    return !0;
  };

  var Y = function(a, b) {
    const c = a[b];
    if (isNaN(c) || Infinity == c || c < 0) a[b] = void 0;
  };

  const Fd = function(a) {
    return function(b) {
      if (b.get(Va) == 'pageview' && !a.I) {
        a.I = !0;
        const c = aa(b);

        const d = E(b.get(kb), 'gclid').length > 0;
        (c || d) &&
          gc(b => {
            c && a.send('timing', b);
            d && a.send('adtiming', b);
          });
      }
    };
  };
  let hc = !1;

  const mc = function(a) {
    if (P(a, ac) == 'cookie') {
      if (a.get(Hd) || P(a, xd) != P(a, Q)) {
        var b = 1e3 * R(a, Zb);
        ma(a, Q, U, b);
      }
      ma(a, I, la, 864e5);
      if (a.get(je)) {
        let c = a.get(ce);
        if (c) {
          let d = Math.min(R(a, he), 1e3 * R(a, Zb));
          d = Math.min(d, 1e3 * R(a, fe) + d - new Date().getTime());
          a.data.set(he, d);
          b = {};
          const e = a.get(fe);

          const g = a.get(ie);

          const ca = kc(P(a, Yb));

          const l = lc(P(a, W));

          const k = P(a, Na);
          g && g != 'aw.ds'
            ? b && (b.ua = !0)
            : ((c = ['1', e, Cc(c)].join('.')),
              d > 0 && (b && (b.ta = !0), zc(`_gac_${Cc(k)}`, c, ca, l, k, d)));
          le(b);
        }
      } else J(75);
      if ((a = lc(P(a, W)) === 'none'))
        (a = M.location.hostname), (a = eb.test(a) || vc.test(a));
      a && J(30);
    }
  };

  var ma = function(a, b, c, d) {
    let e = nd(a, b);
    if (e) {
      c = P(a, c);
      const g = kc(P(a, Yb));

      let ca = lc(P(a, W));

      const l = P(a, Na);
      if (ca != 'auto') zc(c, e, g, ca, l, d) && (hc = !0);
      else {
        J(32);
        for (let k = id(), w = 0; w < k.length; w++)
          if (
            ((ca = k[w]),
            a.data.set(W, ca),
            (e = nd(a, b)),
            zc(c, e, g, ca, l, d))
          ) {
            hc = !0;
            return;
          }
        a.data.set(W, 'auto');
      }
    }
  };

  const nc = function(a) {
    if (P(a, ac) == 'cookie' && !hc && (mc(a), !hc)) throw 'abort';
  };

  const Yc = function(a) {
    if (a.get(Wc)) {
      let b = P(a, W);

      const c = P(a, $b) || xa();

      const d = Xc('__utma', c, b);
      d &&
        (J(19),
        a.set(Tc, new Date().getTime(), !0),
        a.set(Rc, d.R),
        (b = Xc('__utmz', c, b)) && d.hash == b.hash && a.set(Sc, b.R));
    }
  };

  var nd = function(a, b) {
    b = Cc(P(a, b));
    let c = lc(P(a, W)).split('.').length;
    a = jc(P(a, Yb));
    a > 1 && (c += `-${a}`);
    return b ? ['GA1', c, b].join('.') : '';
  };

  const Xd = function(a, b) {
    return na(b, P(a, W), P(a, Yb));
  };

  var na = function(a, b, c) {
    if (!a || a.length < 1) J(12);
    else {
      for (var d = [], e = 0; e < a.length; e++) {
        let g = a[e];
        let ca = g.split('.');
        const l = ca.shift();
        (l == 'GA1' || l == '1') && ca.length > 1
          ? ((g = ca.shift().split('-')),
            g.length == 1 && (g[1] = '1'),
            (g[0] *= 1),
            (g[1] *= 1),
            (ca = { H: g, s: ca.join('.') }))
          : (ca = kd.test(g) ? { H: [0, 0], s: g } : void 0);
        ca && d.push(ca);
      }
      if (d.length == 1) return J(13), d[0].s;
      if (d.length == 0) J(12);
      else {
        J(14);
        d = Gc(d, lc(b).split('.').length, 0);
        if (d.length == 1) return d[0].s;
        d = Gc(d, jc(c), 1);
        d.length > 1 && J(41);
        return d[0] && d[0].s;
      }
    }
  };

  var Gc = function(a, b, c) {
    for (var d = [], e = [], g, ca = 0; ca < a.length; ca++) {
      const l = a[ca];
      l.H[c] == b
        ? d.push(l)
        : void 0 == g || l.H[c] < g
          ? ((e = [l]), (g = l.H[c]))
          : l.H[c] == g && e.push(l);
    }
    return d.length > 0 ? d : e;
  };

  var lc = function(a) {
    return a.indexOf('.') == 0 ? a.substr(1) : a;
  };

  var id = function() {
    const a = [];

    const b = xa().split('.');
    if (b.length == 4) {
      var c = b[b.length - 1];
      if (parseInt(c, 10) == c) return ['none'];
    }
    for (c = b.length - 2; c >= 0; c--) a.push(b.slice(c).join('.'));
    a.push('none');
    return a;
  };

  var kc = function(a) {
    if (!a) return '/';
    a.length > 1 &&
      a.lastIndexOf('/') == a.length - 1 &&
      (a = a.substr(0, a.length - 1));
    a.indexOf('/') != 0 && (a = `/${a}`);
    return a;
  };

  var jc = function(a) {
    a = kc(a);
    return a == '/' ? 1 : a.split('/').length;
  };

  var le = function(a) {
    a.ta && J(77);
    a.na && J(74);
    a.pa && J(73);
    a.ua && J(69);
  };
  function Xc(a, b, c) {
    b == 'none' && (b = '');
    const d = [];

    const e = Ca(a);
    a = a == '__utma' ? 6 : 2;
    for (let g = 0; g < e.length; g++) {
      const ca = `${e[g]}`.split('.');
      ca.length >= a && d.push({ hash: ca[0], R: e[g], O: ca });
    }
    if (d.length != 0)
      return d.length == 1 ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0];
  }
  function Zc(a, b) {
    if (a == null) var c = (a = 1);
    else (c = La(a)), (a = La(D(a, '.') ? a.substring(1) : `.${a}`));
    for (let d = 0; d < b.length; d++)
      if (b[d].hash == c || b[d].hash == a) return b[d];
  }
  const od = new RegExp(/^https?:\/\/([^\/:]+)/);

  const pd = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;

  const me = /(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;
  function Bc(a) {
    let b = a.get(Q);

    let c = a.get(I) || '';
    b = `_ga=2.${K(`${pa(c + b, 0)}.${c}-${b}`)}`;
    if ((c = a.get(ce)) && a.get(je)) {
      const d = R(a, fe);
      1e3 * d + R(a, he) <= new Date().getTime()
        ? (J(76), (a = ''))
        : (J(44), (a = `&_gac=1.${K([pa(c, 0), d, c].join('.'))}`));
    } else a = '';
    return b + a;
  }
  function Ic(a, b) {
    const c = new Date();

    const d = O.navigator;

    const e = d.plugins || [];
    a = [
      a,
      d.userAgent,
      c.getTimezoneOffset(),
      c.getYear(),
      c.getDate(),
      c.getHours(),
      c.getMinutes() + b
    ];
    for (b = 0; b < e.length; ++b) a.push(e[b].description);
    return La(a.join('.'));
  }
  function pa(a, b) {
    const c = new Date();

    const d = O.navigator;

    const e = c.getHours() + Math.floor((c.getMinutes() + b) / 60);
    return La(
      [
        a,
        d.userAgent,
        d.language || '',
        c.getTimezoneOffset(),
        c.getYear(),
        c.getDate() + Math.floor(e / 24),
        (24 + e) % 24,
        (60 + c.getMinutes() + b) % 60
      ].join('.')
    );
  }
  const Dc = function(a) {
    J(48);
    this.target = a;
    this.T = !1;
  };
  Dc.prototype.ca = function(a, b) {
    if (a.tagName) {
      if (a.tagName.toLowerCase() == 'a') {
        a.href && (a.href = qd(this, a.href, b));
        return;
      }
      if (a.tagName.toLowerCase() == 'form') return rd(this, a);
    }
    if (typeof a === 'string') return qd(this, a, b);
  };
  var qd = function(a, b, c) {
    let d = pd.exec(b);
    d && d.length >= 3 && (b = d[1] + (d[3] ? d[2] + d[3] : ''));
    (d = me.exec(b)) && d.length >= 3 && (b = d[1] + (d[3] ? d[2] + d[3] : ''));
    a = a.target.get('linkerParam');
    const e = b.indexOf('?');
    d = b.indexOf('#');
    c
      ? (b += (d == -1 ? '#' : '&') + a)
      : ((c = e == -1 ? '?' : '&'),
        (b =
          d == -1 ? b + (c + a) : b.substring(0, d) + c + a + b.substring(d)));
    b = b.replace(/&+_ga=/, '&_ga=');
    return (b = b.replace(/&+_gac=/, '&_gac='));
  };

  var rd = function(a, b) {
    if (b && b.action)
      if (b.method.toLowerCase() == 'get') {
        a = a.target.get('linkerParam').split('&');
        for (let c = 0; c < a.length; c++) {
          let d = a[c].split('=');

          const e = d[1];
          d = d[0];
          for (var g = b.childNodes || [], ca = !1, l = 0; l < g.length; l++)
            if (g[l].name == d) {
              g[l].setAttribute('value', e);
              ca = !0;
              break;
            }
          ca ||
            ((g = M.createElement('input')),
            g.setAttribute('type', 'hidden'),
            g.setAttribute('name', d),
            g.setAttribute('value', e),
            b.appendChild(g));
        }
      } else b.method.toLowerCase() == 'post' && (b.action = qd(a, b.action));
  };
  Dc.prototype.S = function(a, b, c) {
    function d(c) {
      try {
        c = c || O.event;
        a: {
          let d = c.target || c.srcElement;
          for (c = 100; d && c > 0; ) {
            if (d.href && d.nodeName.match(/^a(?:rea)?$/i)) {
              var g = d;
              break a;
            }
            d = d.parentNode;
            c--;
          }
          g = {};
        }
        (g.protocol == 'http:' || g.protocol == 'https:') &&
          sd(a, g.hostname || '') &&
          g.href &&
          (g.href = qd(e, g.href, b));
      } catch (k) {
        J(26);
      }
    }
    var e = this;
    this.T || ((this.T = !0), L(M, 'mousedown', d, !1), L(M, 'keyup', d, !1));
    c &&
      L(M, 'submit', b => {
        b = b || O.event;
        if ((b = b.target || b.srcElement) && b.action) {
          const c = b.action.match(od);
          c && sd(a, c[1]) && rd(e, b);
        }
      });
  };
  function sd(a, b) {
    if (b == M.location.hostname) return !1;
    for (let c = 0; c < a.length; c++)
      if (a[c] instanceof RegExp) {
        if (a[c].test(b)) return !0;
      } else if (b.indexOf(a[c]) >= 0) return !0;
    return !1;
  }
  function ke(a, b) {
    return (
      b != Ic(a, 0) &&
      b != Ic(a, -1) &&
      b != Ic(a, -2) &&
      b != pa(a, 0) &&
      b != pa(a, -1) &&
      b != pa(a, -2)
    );
  }
  const p = /^(GTM|OPT)-[A-Z0-9]+$/;

  const q = /;_gaexp=[^;]*/g;

  const r = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g;

  const Aa = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/;

  const t = function(a) {
    function b(a, b) {
      b && (c += `&${a}=${K(b)}`);
    }
    var c = `https://www.google-analytics.com/gtm/js?id=${K(a.id)}`;
    a.B != 'dataLayer' && b('l', a.B);
    b('t', a.target);
    b('cid', a.clientId);
    b('cidt', a.ka);
    b('gac', a.la);
    b('aip', a.ia);
    a.sync && b('m', 'sync');
    b('cycle', a.G);
    a.qa && b('gclid', a.qa);
    Aa.test(M.referrer) && b('cb', String(hd()));
    return c;
  };
  const Jd = function(a, b, c) {
    this.aa = b;
    (b = c) ||
      (b =
        (b = P(a, V)) && b != 't0'
          ? Wd.test(b)
            ? `_gat_${Cc(P(a, Na))}`
            : `_gat_${Cc(b)}`
          : '_gat');
    this.Y = b;
    this.ra = null;
  };

  const Rd = function(a, b) {
    const c = b.get(Wb);
    b.set(Wb, b => {
      Pd(a, b, ed);
      Pd(a, b, ia);
      const d = c(b);
      Qd(a, b);
      return d;
    });
    const d = b.get(Xb);
    b.set(Xb, b => {
      const c = d(b);
      if (b.get(ed)) {
        if (ne() !== H(a, b)) {
          J(80);
          const e = { U: re(a, b, 1), google: re(a, b, 2), count: 0 };
          pe('https://stats.g.doubleclick.net/j/collect', e.U, e);
        } else ta(re(a, b, 0));
        b.set(ed, '', !0);
      }
      return c;
    });
  };

  var Pd = function(a, b, c) {
    b.get(c) ||
      (Ca(a.Y)[0] == '1' ? b.set(c, '', !0) : b.set(c, `${hd()}`, !0));
  };

  var Qd = function(a, b) {
    b.get(ed) && zc(a.Y, '1', b.get(Yb), b.get(W), b.get(Na), 6e4);
  };

  var re = function(a, b, c) {
    const d = new ee();

    const e = function(a) {
      $a(a).F && d.set($a(a).F, b.get(a));
    };
    e(hb);
    e(ib);
    e(Na);
    e(Q);
    e(ed);
    if (c == 0 || c == 1) e(Ad), e(ia), e(I);
    d.set($a(ld).F, Td(b));
    let g = '';
    d.map((a, b) => {
      g += `${K(a)}=`;
      g += `${K(`${b}`)}&`;
    });
    g += `z=${hd()}`;
    c == 0
      ? (g = a.aa + g)
      : c == 1
        ? (g = `t=dc&aip=1&_r=3&${g}`)
        : c == 2 && (g = `t=sr&aip=1&_r=4&slf_rd=1&${g}`);
    return g;
  };

  var H = function(a, b) {
    a.ra === null && ((a.ra = Ed(b) === 1), a.ra && J(33));
    return a.ra;
  };

  var Wd = /^gtm\d+$/;
  const fd = function(a, b) {
    a = a.b;
    if (!a.get('dcLoaded')) {
      const c = new $c(Dd(a));
      c.set(29);
      a.set(Gd, c.w);
      b = b || {};
      let d;
      b[U] && (d = Cc(b[U]));
      b = new Jd(
        a,
        'https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&',
        d
      );
      Rd(b, a);
      a.set('dcLoaded', !0);
    }
  };
  const Sd = function(a) {
    if (!a.get('dcLoaded') && a.get(ac) == 'cookie') {
      const b = new Jd(a);
      Pd(b, a, ed);
      Pd(b, a, ia);
      Qd(b, a);
      if (a.get(ed)) {
        const c = ne() !== H(b, a);
        a.set(Md, 1, !0);
        c
          ? (J(79),
            a.set(gd, `${oe()}/j/collect`, !0),
            a.set(qe, { U: re(b, a, 1), google: re(b, a, 2), count: 0 }, !0))
          : a.set(gd, `${oe()}/r/collect`, !0);
      }
    }
  };
  const Lc = function() {
    const a = (O.gaGlobal = O.gaGlobal || {});
    return (a.hid = a.hid || hd());
  };
  let ad;

  const bd = function(a, b, c) {
    if (!ad) {
      let d = M.location.hash;
      let e = O.name;

      const g = /^#?gaso=([^&]*)/;
      if (
        (e =
          (d = (d = (d && d.match(g)) || (e && e.match(g)))
            ? d[1]
            : Ca('GASO')[0] || '') &&
          d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))
      )
        zc('GASO', `${d}`, c, b, a, 0),
          window._udo || (window._udo = b),
          window._utcp || (window._utcp = c),
          (a = e[1]),
          wa(
            `https://www.google.com/analytics/web/inpage/pub/inpage.js?${
              a ? `prefix=${a}&` : ''
            }${hd()}`,
            '_gasojs'
          );
      ad = !0;
    }
  };
  var wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/;

  const pc = function(a) {
    function b(a, b) {
      d.b.data.set(a, b);
    }
    function c(a, c) {
      b(a, c);
      d.filters.add(a);
    }
    var d = this;
    this.b = new Ya();
    this.filters = new Ha();
    b(V, a[V]);
    b(Na, sa(a[Na]));
    b(U, a[U]);
    b(W, a[W] || xa());
    b(Yb, a[Yb]);
    b(Zb, a[Zb]);
    b(Hd, a[Hd]);
    b($b, a[$b]);
    b(Wc, a[Wc]);
    b(bc, a[bc]);
    b(cc, a[cc]);
    b(Ka, a[Ka]);
    b(dc, a[dc]);
    b(ec, a[ec]);
    b(ac, a[ac]);
    b(Ad, a[Ad]);
    b(n, a[n]);
    b(Kd, a[Kd]);
    b(je, a[je]);
    b(hb, 1);
    b(ib, 'j67');
    c(Qb, Ma);
    c(oa, ua);
    c(dd, cd);
    c(Rb, Oa);
    c(md, vb);
    c(Sb, nc);
    c(Uc, Yc);
    c(Tb, Ja);
    c(Vb, Ta);
    c(Vc, Hc);
    c(zd, yd);
    c(Ld, Sd);
    c(Wb, Pa);
    c(Xb, Sa);
    c(Cd, Fd(this));
    Kc(this.b);
    Jc(this.b, a[Q]);
    this.b.set(jb, Lc());
    bd(this.b.get(Na), this.b.get(W), this.b.get(Yb));
  };

  var Jc = function(a, b) {
    let c = P(a, U);
    a.data.set(la, c == '_ga' ? '_gid' : `${c}_gid`);
    if (P(a, ac) == 'cookie') {
      hc = !1;
      c = Ca(P(a, U));
      c = Xd(a, c);
      if (!c) {
        c = P(a, W);
        var d = P(a, $b) || xa();
        c = Xc('__utma', d, c);
        void 0 != c ? (J(10), (c = `${c.O[1]}.${c.O[2]}`)) : (c = void 0);
      }
      c && (hc = !0);
      if ((d = c && !a.get(Hd)))
        if (((d = c.split('.')), d.length != 2)) d = !1;
        else if ((d = Number(d[1]))) {
          var e = R(a, Zb);
          d = d + e < new Date().getTime() / 1e3;
        } else d = !1;
      d && (c = void 0);
      c &&
        (a.data.set(xd, c),
        a.data.set(Q, c),
        (c = Ca(P(a, la))),
        (c = Xd(a, c)) && a.data.set(I, c));
      if (
        a.get(je) &&
        ((c = a.get(ce)), (d = a.get(ie)), !c || (d && d != 'aw.ds'))
      ) {
        c = {};
        if (M) {
          d = [];
          e = M.cookie.split(';');
          for (
            var g = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, ca = 0;
            ca < e.length;
            ca++
          ) {
            const l = e[ca].match(g);
            l && d.push({ ja: l[1], value: l[2] });
          }
          e = {};
          if (d && d.length)
            for (g = 0; g < d.length; g++)
              ((ca = d[g].value.split('.')), ca[0] != '1' || ca.length != 3)
                ? c && (c.na = !0)
                : ca[1] &&
                  (e[d[g].ja] ? c && (c.pa = !0) : (e[d[g].ja] = []),
                  e[d[g].ja].push({
                    timestamp: ca[1],
                    qa: ca[2]
                  }));
          d = e;
        } else d = {};
        d = d[P(a, Na)];
        le(c);
        d &&
          d.length != 0 &&
          ((c = d[0]), a.data.set(fe, c.timestamp), a.data.set(ce, c.qa));
      }
    }
    if (a.get(Hd))
      a: if ((d = be('_ga', a.get(cc))))
        if (a.get(bc))
          if (((c = d.indexOf('.')), c == -1)) J(22);
          else {
            e = d.substring(0, c);
            g = d.substring(c + 1);
            c = g.indexOf('.');
            d = g.substring(0, c);
            g = g.substring(c + 1);
            if (e == '1') {
              if (((c = g), ke(c, d))) {
                J(23);
                break a;
              }
            } else if (e == '2') {
              c = g.indexOf('-');
              e = '';
              c > 0
                ? ((e = g.substring(0, c)), (c = g.substring(c + 1)))
                : (c = g.substring(1));
              if (ke(e + c, d)) {
                J(53);
                break a;
              }
              e && (J(2), a.data.set(I, e));
            } else {
              J(22);
              break a;
            }
            J(11);
            a.data.set(Q, c);
            if ((c = be('_gac', a.get(cc))))
              (c = c.split('.')),
                c[0] != '1' || c.length != 4
                  ? J(72)
                  : ke(c[3], c[1])
                    ? J(71)
                    : (a.data.set(ce, c[3]), a.data.set(fe, c[2]), J(70));
          }
        else J(21);
    b && (J(9), a.data.set(Q, K(b)));
    a.get(Q) ||
      ((b =
        (b = O.gaGlobal && O.gaGlobal.vid) && b.search(jd) != -1 ? b : void 0)
        ? (J(17), a.data.set(Q, b))
        : (J(8), a.data.set(Q, ra())));
    a.get(I) || (J(3), a.data.set(I, ra()));
    mc(a);
  };

  var Kc = function(a) {
    let b = O.navigator;

    let c = O.screen;

    let d = M.location;
    a.set(lb, ya(a.get(ec), a.get(Kd)));
    if (d) {
      var e = d.pathname || '';
      e.charAt(0) != '/' && (J(31), (e = `/${e}`));
      a.set(kb, `${d.protocol}//${d.hostname}${e}${d.search}`);
    }
    c && a.set(qb, `${c.width}x${c.height}`);
    c && a.set(pb, `${c.colorDepth}-bit`);
    c = M.documentElement;
    const g = (e = M.body) && e.clientWidth && e.clientHeight;

    let ca = [];
    c &&
    c.clientWidth &&
    c.clientHeight &&
    (M.compatMode === 'CSS1Compat' || !g)
      ? (ca = [c.clientWidth, c.clientHeight])
      : g && (ca = [e.clientWidth, e.clientHeight]);
    c = ca[0] <= 0 || ca[1] <= 0 ? '' : ca.join('x');
    a.set(rb, c);
    a.set(tb, fc());
    a.set(ob, M.characterSet || M.charset);
    a.set(
      sb,
      (b && typeof b.javaEnabled === 'function' && b.javaEnabled()) || !1
    );
    a.set(nb, ((b && (b.language || b.browserLanguage)) || '').toLowerCase());
    a.data.set(ce, be('gclid', !0));
    a.data.set(ie, be('gclsrc', !0));
    a.data.set(fe, Math.round(new Date().getTime() / 1e3));
    if (d && a.get(cc) && (b = M.location.hash)) {
      b = b.split(/[?&#]+/);
      d = [];
      for (c = 0; c < b.length; ++c)
        (D(b[c], 'utm_id') ||
          D(b[c], 'utm_campaign') ||
          D(b[c], 'utm_source') ||
          D(b[c], 'utm_medium') ||
          D(b[c], 'utm_term') ||
          D(b[c], 'utm_content') ||
          D(b[c], 'gclid') ||
          D(b[c], 'dclid') ||
          D(b[c], 'gclsrc')) &&
          d.push(b[c]);
      d.length > 0 && ((b = `#${d.join('&')}`), a.set(kb, a.get(kb) + b));
    }
  };
  pc.prototype.get = function(a) {
    return this.b.get(a);
  };
  pc.prototype.set = function(a, b) {
    this.b.set(a, b);
  };
  const qc = {
    pageview: [mb],
    event: [ub, xb, yb, zb],
    social: [Bb, Cb, Db],
    timing: [Mb, Nb, Pb, Ob]
  };
  pc.prototype.send = function(a) {
    if (!(arguments.length < 1)) {
      if (typeof arguments[0] === 'string') {
        var b = arguments[0];
        var c = [].slice.call(arguments, 1);
      } else (b = arguments[0] && arguments[0][Va]), (c = arguments);
      b &&
        ((c = za(qc[b] || [], c)),
        (c[Va] = b),
        this.b.set(c, void 0, !0),
        this.filters.D(this.b),
        (this.b.data.m = {}));
    }
  };
  pc.prototype.ma = function(a, b) {
    const c = this;
    u(a, c, b) ||
      (v(a, () => {
        u(a, c, b);
      }),
      y(String(c.get(V)), a, void 0, b, !0));
  };
  const rc = function(a) {
    if (M.visibilityState == 'prerender') return !1;
    a();
    return !0;
  };

  const z = function(a) {
    if (!rc(a)) {
      J(16);
      let b = !1;

      var c = function() {
        if (!b && rc(a)) {
          b = !0;
          const d = c;

          const e = M;
          e.removeEventListener
            ? e.removeEventListener('visibilitychange', d, !1)
            : e.detachEvent && e.detachEvent('onvisibilitychange', d);
        }
      };
      L(M, 'visibilitychange', c);
    }
  };
  const td = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/;

  const sc = function(a) {
    if (ea(a[0])) this.u = a[0];
    else {
      let b = td.exec(a[0]);
      b != null &&
        b.length == 4 &&
        ((this.c = b[1] || 't0'),
        (this.K = b[2] || ''),
        (this.C = b[3]),
        (this.a = [].slice.call(a, 1)),
        this.K ||
          ((this.A = this.C == 'create'),
          (this.i = this.C == 'require'),
          (this.g = this.C == 'provide'),
          (this.ba = this.C == 'remove')),
        this.i &&
          (this.a.length >= 3
            ? ((this.X = this.a[1]), (this.W = this.a[2]))
            : this.a[1] &&
              (qa(this.a[1]) ? (this.X = this.a[1]) : (this.W = this.a[1]))));
      b = a[1];
      a = a[2];
      if (!this.C) throw 'abort';
      if (this.i && (!qa(b) || b == '')) throw 'abort';
      if (this.g && (!qa(b) || b == '' || !ea(a))) throw 'abort';
      if (ud(this.c) || ud(this.K)) throw 'abort';
      if (this.g && this.c != 't0') throw 'abort';
    }
  };
  function ud(a) {
    return a.indexOf('.') >= 0 || a.indexOf(':') >= 0;
  }
  let Yd;
  let Zd;
  let $d;
  let A;
  Yd = new ee();
  $d = new ee();
  A = new ee();
  Zd = { ec: 45, ecommerce: 46, linkid: 47 };
  var u = function(a, b, c) {
    b == N || b.get(V);
    const d = Yd.get(a);
    if (!ea(d)) return !1;
    b.plugins_ = b.plugins_ || new ee();
    if (b.plugins_.get(a)) return !0;
    b.plugins_.set(a, new d(b, c || {}));
    return !0;
  };

  var y = function(a, b, c, d, e) {
    if (!ea(Yd.get(b)) && !$d.get(b)) {
      Zd.hasOwnProperty(b) && J(Zd[b]);
      if (p.test(b)) {
        J(52);
        a = N.j(a);
        if (!a) return !0;
        c = d || {};
        d = {
          id: b,
          B: c.dataLayer || 'dataLayer',
          ia: !!a.get('anonymizeIp'),
          sync: e,
          G: !1
        };
        a.get('&gtm') == b && (d.G = !0);
        const g = String(a.get('name'));
        g != 't0' && (d.target = g);
        G(String(a.get('trackingId'))) ||
          ((d.clientId = String(a.get(Q))),
          (d.ka = Number(a.get(n))),
          (c = c.palindrome ? r : q),
          (c = (c = M.cookie.replace(/^|(; +)/g, ';').match(c))
            ? c
                .sort()
                .join('')
                .substring(1)
            : void 0),
          (d.la = c),
          (d.qa = E(a.b.get(kb) || '', 'gclid')));
        a = d.B;
        c = new Date().getTime();
        O[a] = O[a] || [];
        c = { 'gtm.start': c };
        e || (c.event = 'gtm.js');
        O[a].push(c);
        c = t(d);
      }
      !c && Zd.hasOwnProperty(b) ? (J(39), (c = `${b}.js`)) : J(43);
      c &&
        ((c && c.indexOf('/') >= 0) ||
          (c = `${
            Ba || M.location.protocol == 'https:' ? 'https:' : 'http:'
          }//www.google-analytics.com/plugins/ua/${c}`),
        (d = ae(c)),
        (a = d.protocol),
        (c = M.location.protocol),
        (a == 'https:' || a == c || (a != 'http:' ? 0 : c == 'http:')) &&
          B(d) &&
          (wa(d.url, void 0, e), $d.set(b, !0)));
    }
  };

  var v = function(a, b) {
    const c = A.get(a) || [];
    c.push(b);
    A.set(a, c);
  };

  const C = function(a, b) {
    Yd.set(a, b);
    b = A.get(a) || [];
    for (let c = 0; c < b.length; c++) b[c]();
    A.set(a, []);
  };

  var B = function(a) {
    let b = ae(M.location.href);
    if (D(a.url, 'https://www.google-analytics.com/gtm/js?id=')) return !0;
    if (a.query || a.url.indexOf('?') >= 0 || a.path.indexOf('://') >= 0)
      return !1;
    if (a.host == b.host && a.port == b.port) return !0;
    b = a.protocol == 'http:' ? 80 : 443;
    return a.host == 'www.google-analytics.com' &&
      (a.port || b) == b &&
      D(a.path, '/plugins/')
      ? !0
      : !1;
  };

  var ae = function(a) {
    function b(a) {
      const b = (a.hostname || '').split(':')[0].toLowerCase();

      let c = (a.protocol || '').toLowerCase();
      c = 1 * a.port || (c == 'http:' ? 80 : c == 'https:' ? 443 : '');
      a = a.pathname || '';
      D(a, '/') || (a = `/${a}`);
      return [b, `${c}`, a];
    }
    const c = M.createElement('a');
    c.href = M.location.href;
    let d = (c.protocol || '').toLowerCase();

    const e = b(c);

    const g = c.search || '';

    const ca = `${d}//${e[0]}${e[1] ? `:${e[1]}` : ''}`;
    D(a, '//')
      ? (a = d + a)
      : D(a, '/')
        ? (a = ca + a)
        : !a || D(a, '?')
          ? (a = ca + e[2] + (a || g))
          : a.split('/')[0].indexOf(':') < 0 &&
            (a = `${ca + e[2].substring(0, e[2].lastIndexOf('/'))}/${a}`);
    c.href = a;
    d = b(c);
    return {
      protocol: (c.protocol || '').toLowerCase(),
      host: d[0],
      port: d[1],
      path: d[2],
      query: c.search || '',
      url: a || ''
    };
  };
  var Z = {
    ga() {
      Z.f = [];
    }
  };
  Z.ga();
  Z.D = function(a) {
    let b = Z.J(...arguments);
    b = Z.f.concat(b);
    for (
      Z.f = [];
      b.length > 0 && !Z.v(b[0]) && !(b.shift(), Z.f.length > 0);

    );
    Z.f = Z.f.concat(b);
  };
  Z.J = function(a) {
    for (var b = [], c = 0; c < arguments.length; c++)
      try {
        const d = new sc(arguments[c]);
        d.g
          ? C(d.a[0], d.a[1])
          : (d.i && (d.ha = y(d.c, d.a[0], d.X, d.W)), b.push(d));
      } catch (e) {}
    return b;
  };
  Z.v = function(a) {
    try {
      if (a.u) a.u.call(O, N.j('t0'));
      else {
        let b = a.c == gb ? N : N.j(a.c);
        if (a.A) {
          if (a.c == 't0' && ((b = N.create(...a.a)), b === null)) return !0;
        } else if (a.ba) N.remove(a.c);
        else if (b)
          if (a.i) {
            if ((a.ha && (a.ha = y(a.c, a.a[0], a.X, a.W)), !u(a.a[0], b, a.W)))
              return !0;
          } else if (a.K) {
            const c = a.C;

            const d = a.a;

            const e = b.plugins_.get(a.K);
            e[c](...d);
          } else b[a.C](...a.a);
      }
    } catch (g) {}
  };
  var N = function(a) {
    J(1);
    Z.D.apply(Z, [arguments]);
  };
  N.h = {};
  N.P = [];
  N.L = 0;
  N.answer = 42;
  const uc = [Na, W, V];
  N.create = function(a) {
    let b = za(uc, [].slice.call(arguments));
    b[V] || (b[V] = 't0');
    const c = `${b[V]}`;
    if (N.h[c]) return N.h[c];
    a: {
      if (b[Kd]) {
        J(67);
        if (b[ac] && b[ac] != 'cookie') {
          var d = !1;
          break a;
        }
        if (void 0 !== Ab) b[Q] || (b[Q] = Ab);
        else {
          b: {
            d = String(b[W] || xa());
            const e = String(b[Yb] || '/');

            const g = Ca(String(b[U] || '_ga'));
            d = na(g, d, e);
            if (!d || jd.test(d)) d = !0;
            else if (((d = Ca('AMP_TOKEN')), d.length == 0)) d = !0;
            else {
              if (
                d.length == 1 &&
                ((d = decodeURIComponent(d[0])),
                d == '$RETRIEVING' ||
                  d == '$OPT_OUT' ||
                  d == '$ERROR' ||
                  d == '$NOT_FOUND')
              ) {
                d = !0;
                break b;
              }
              d = !1;
            }
          }
          if (d && tc(ic, String(b[Na]))) {
            d = !0;
            break a;
          }
        }
      }
      d = !1;
    }
    if (d) return null;
    b = new pc(b);
    N.h[c] = b;
    N.P.push(b);
    return b;
  };
  N.remove = function(a) {
    for (let b = 0; b < N.P.length; b++)
      if (N.P[b].get(V) == a) {
        N.P.splice(b, 1);
        N.h[a] = null;
        break;
      }
  };
  N.j = function(a) {
    return N.h[a];
  };
  N.getAll = function() {
    return N.P.slice(0);
  };
  N.N = function() {
    gb != 'ga' && J(49);
    let a = O[gb];
    if (!a || a.answer != 42) {
      N.L = a && a.l;
      N.loaded = !0;
      let b = (O[gb] = N);
      X('create', b, b.create);
      X('remove', b, b.remove);
      X('getByName', b, b.j, 5);
      X('getAll', b, b.getAll, 6);
      b = pc.prototype;
      X('get', b, b.get, 7);
      X('set', b, b.set, 4);
      X('send', b, b.send);
      X('requireSync', b, b.ma);
      b = Ya.prototype;
      X('get', b, b.get);
      X('set', b, b.set);
      if (M.location.protocol != 'https:' && !Ba) {
        a: {
          b = M.getElementsByTagName('script');
          for (let c = 0; c < b.length && c < 100; c++) {
            const d = b[c].src;
            if (
              d &&
              d.indexOf('https://www.google-analytics.com/analytics') == 0
            ) {
              b = !0;
              break a;
            }
          }
          b = !1;
        }
        b && (Ba = !0);
      }
      (O.gaplugins = O.gaplugins || {}).Linker = Dc;
      b = Dc.prototype;
      C('linker', Dc);
      X('decorate', b, b.ca, 20);
      X('autoLink', b, b.S, 25);
      C('displayfeatures', fd);
      C('adfeatures', fd);
      a = a && a.q;
      ka(a) ? Z.D.apply(N, a) : J(50);
    }
  };
  N.da = function() {
    for (let a = N.getAll(), b = 0; b < a.length; b++) a[b].get(V);
  };
  const da = N.N;

  const Nd = O[gb];
  Nd && Nd.r ? da() : z(da);
  z(() => {
    Z.D(['provide', 'render', ua]);
  });
  function La(a) {
    let b = 1;

    let c;
    if (a)
      for (b = 0, c = a.length - 1; c >= 0; c--) {
        let d = a.charCodeAt(c);
        b = ((b << 6) & 268435455) + d + (d << 14);
        d = b & 266338304;
        b = d != 0 ? b ^ (d >> 21) : b;
      }
    return b;
  }
})(window);
