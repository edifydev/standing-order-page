(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{7834:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/review-orders",function(){return t(5798)}])},5798:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var n=t(5893),r=t(1110),a=t(7821),l=t(1802),i=t(338),c=t(5136),d=t(2294),o=t(7294),u=t(1163),m=t(4710),x=function(){var e=(0,o.useState)({}),s=e[0],t=e[1],r=(0,o.useState)({}),a=r[0],x=r[1],h=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];(0,o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("orders")||"{}");x(e);var s={};h.map((function(t){var n,r=null===(n=e[t])||void 0===n?void 0:n.reduce((function(e,s){return e+(s.Quantity||0)}),0);s[t]=r||0})),t(s)}),[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"font-semibold block",children:"From: Rockstar Bakers - ORD11"}),(0,n.jsx)("span",{className:"text-gray-500 text-sm",children:"Minimal Order: \xa350"}),(0,n.jsx)("div",{className:"w-full mt-2",children:o.Children.toArray(h.map((function(e){return(0,n.jsx)(i.z,{left:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("span",{className:"block text-sm text-gray-500",children:(s[e]||0)+" Products"})]}),expanded:(0,n.jsx)(m.O,{orders:a[e]})})})))}),(0,n.jsx)("section",{children:"\xa0"}),(0,n.jsxs)("div",{className:"w-full inline-block mt-4",children:["First Day Delivery:",(0,n.jsx)("input",{type:"date",className:"p-2 block mt-2 rounded-lg border-1",min:(new Date).toISOString().split("T")[0]})]}),(0,n.jsxs)("div",{className:"w-full inline-block mt-4",children:["Note to supplier:",(0,n.jsx)("textarea",{className:"p-2 block mt-2 rounded-lg border-1",cols:38,rows:5})]}),(0,n.jsxs)("div",{className:"w-full inline-block text-center",children:[(0,n.jsx)(c.s,{}),(0,n.jsx)("p",{className:"text-gray-500 text-sm mt-4 mb-2",children:"Items from suppliers that don't meet minimum order requirements will be omitted from the checkout but will be saved in the shopping basket."})]}),(0,n.jsx)(l.z,{onClick:function(){return u.default.push(d.F.CONFIRMATION_PAGE_COMPLETE)},className:"mt-6",children:"Confirm Standing Order"})]})},h=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"w-full h-full bg-egray",children:[(0,n.jsx)(r.D,{title:"New Standing Order",showTabs:!0}),(0,n.jsx)("div",{className:"p-4 space-y-4 h-5/6 overflow-auto",children:(0,n.jsx)(x,{})}),(0,n.jsx)("section",{className:"mt-10",children:"\xa0"}),(0,n.jsx)(a._,{})]})})}}},function(e){e.O(0,[419,101,774,888,179],(function(){return s=7834,e(e.s=s);var s}));var s=e.O();_N_E=s}]);