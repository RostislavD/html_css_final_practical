(() => {
  var e = {
      765: () => {
        document
          .getElementById("registrationForm")
          .addEventListener("submit", function (e) {
            e.preventDefault(),
              this.reset(),
              (document.getElementById("message-box").style.display = "block"),
              setTimeout(function () {
                document.getElementById("message-box").style.display = "none";
              }, 5e3);
          });
      },
    },
    t = {};
  function l(o) {
    var i = t[o];
    if (void 0 !== i) return i.exports;
    var n = (t[o] = { exports: {} });
    return e[o](n, n.exports, l), n.exports;
  }
  (() => {
    "use strict";
    const e = {
        windowEl: window,
        documentEl: document,
        htmlEl: document.documentElement,
        bodyEl: document.body,
      },
      t = () => {
        var t;
        const l =
            null === (t = document) || void 0 === t
              ? void 0
              : t.querySelectorAll(".fixed-block"),
          o = (document.body, parseInt(e.bodyEl.dataset.position, 10));
        l.forEach((e) => {
          e.style.paddingRight = "0px";
        }),
          (e.bodyEl.style.paddingRight = "0px"),
          (e.bodyEl.style.top = "auto"),
          e.bodyEl.classList.remove("dis-scroll"),
          window.scroll({ top: o, left: 0 }),
          e.bodyEl.removeAttribute("data-position"),
          (e.htmlEl.style.scrollBehavior = "smooth");
      };
    !(function () {
      var l, o, i, n;
      const d =
          null === (l = document) || void 0 === l
            ? void 0
            : l.querySelector("[data-burger]"),
        s =
          null === (o = document) || void 0 === o
            ? void 0
            : o.querySelector("[data-menu]"),
        a =
          null === (i = document) || void 0 === i
            ? void 0
            : i.querySelectorAll("[data-menu-item]"),
        r =
          null === (n = document) || void 0 === n
            ? void 0
            : n.querySelector("[data-menu-overlay]");
      null == d ||
        d.addEventListener("click", (l) => {
          null == d || d.classList.toggle("burger--active"),
            null == s || s.classList.toggle("menu--active"),
            null != s && s.classList.contains("menu--active")
              ? (null == d || d.setAttribute("aria-expanded", "true"),
                null == d || d.setAttribute("aria-label", "Закрыть меню"),
                (() => {
                  var t;
                  const l =
                      null === (t = document) || void 0 === t
                        ? void 0
                        : t.querySelectorAll(".fixed-block"),
                    o = window.scrollY,
                    i = window.innerWidth - e.bodyEl.offsetWidth + "px";
                  (e.htmlEl.style.scrollBehavior = "none"),
                    l.forEach((e) => {
                      e.style.paddingRight = i;
                    }),
                    (e.bodyEl.style.paddingRight = i),
                    e.bodyEl.classList.add("dis-scroll"),
                    (e.bodyEl.dataset.position = o),
                    (e.bodyEl.style.top = `-${o}px`);
                })())
              : (null == d || d.setAttribute("aria-expanded", "false"),
                null == d || d.setAttribute("aria-label", "Открыть меню"),
                t());
        }),
        null == r ||
          r.addEventListener("click", () => {
            null == d || d.setAttribute("aria-expanded", "false"),
              null == d || d.setAttribute("aria-label", "Открыть меню"),
              d.classList.remove("burger--active"),
              s.classList.remove("menu--active"),
              t();
          }),
        null == a ||
          a.forEach((e) => {
            e.addEventListener("click", () => {
              null == d || d.setAttribute("aria-expanded", "false"),
                null == d || d.setAttribute("aria-label", "Открыть меню"),
                d.classList.remove("burger--active"),
                s.classList.remove("menu--active"),
                t();
            });
          });
    })(),
      l(765);
  })();
})();
