(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[476],{1866:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/update-review-orders",function(){return n(8479)}])},8479:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),a=n(1110),s=n(7821),i=n(1802),l=n(338),o=n(5136),c=n(2294),u=n(7294),d=n(4710),m=n(1163);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(){var e=(0,u.useState)({}),t=e[0],n=e[1],a=(0,u.useState)({}),s=a[0],f=a[1],p=(0,u.useState)(!1),x=p[0],b=p[1],j=[],N=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];(0,u.useEffect)((function(){var e=JSON.parse(localStorage.getItem("orders")||"{}");f(e);var t={};N.map((function(n){var r,a=null===(r=e[n])||void 0===r?void 0:r.reduce((function(e,t){return e+(t.Quantity||0)}),0);t[n]=a||0})),n(t)}),[]);var y=function(e){var t=(j=j.includes(e)?j.filter((function(t){return t!==e})):h(j).concat([e])).length>0;b(t),localStorage.setItem("isPausedItemsStatusChanged",t?"1":"0")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"font-semibold block",children:"From: Rockstar Bakers - ORD11"}),(0,r.jsx)("span",{className:"text-gray-500 text-sm",children:"Minimal Order: \xa350"}),(0,r.jsx)("div",{className:"w-full mt-2",children:u.Children.toArray(N.map((function(e){return(0,r.jsx)(l.z,{left:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("span",{className:"block text-sm text-gray-500",children:(t[e]||0)+" Products"})]}),right:(0,r.jsx)(i.z,{onClick:function(){},className:"h-8 w-full pt-1 mt-2 rounded",children:"Edit"}),expanded:(0,r.jsx)(d.O,{orders:s[e],isStandingOrder:!0,onPauseButtonClick:y})})})))}),(0,r.jsx)("section",{children:"\xa0"}),(0,r.jsxs)("div",{className:"w-full inline-block mt-4",children:["First Day Delivery:",(0,r.jsx)("input",{type:"date",className:"p-2 block mt-2 rounded-lg border-1",min:(new Date).toISOString().split("T")[0]})]}),(0,r.jsxs)("div",{className:"w-full inline-block mt-4",children:["Note to supplier:",(0,r.jsx)("textarea",{className:"p-2 block mt-2 rounded-lg border-1",cols:38,rows:5})]}),(0,r.jsxs)("div",{className:"w-full inline-block text-center",children:[(0,r.jsx)(o.s,{}),(0,r.jsx)("p",{className:"text-gray-500 text-sm mt-4 mb-2",children:"Items from suppliers that don't meet minimum order requirements will be omitted from the checkout but will be saved in the shopping basket."})]}),(0,r.jsx)(i.z,{onClick:function(){return m.default.push(c.F.CONFIRMATION_PAGE_UPDATED)},className:"mt-6",children:"Update Standing Order"}),(0,r.jsxs)("div",{className:"flex mt-6 space-x-2",children:[(0,r.jsx)(i.z,{onClick:function(){return window.location.pathname=c.F.UPDATE_STANDING_ORDER_CANCEL_PAGE},className:"bg-black",children:"Cancel Order"}),(0,r.jsx)(i.z,{onClick:function(){return window.location.pathname=c.F.UPDATE_STANDING_ORDER_PAUSE_PAGE},className:"bg-black",children:x?"Pause Products":"Pause Order"})]})]})},x=function(){return(0,u.useEffect)((function(){localStorage.setItem("isPausedItemsStatusChanged","0")}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-full h-full bg-egray",children:[(0,r.jsx)(a.D,{title:"Update Standing Order",showTabs:!0}),(0,r.jsx)("div",{className:"p-4 space-y-4 h-5/6 overflow-auto",children:(0,r.jsx)(p,{})}),(0,r.jsx)("section",{className:"mt-10",children:"\xa0"}),(0,r.jsx)(s._,{})]})})}}},function(e){e.O(0,[419,101,774,888,179],(function(){return t=1866,e(e.s=t);var t}));var t=e.O();_N_E=t}]);