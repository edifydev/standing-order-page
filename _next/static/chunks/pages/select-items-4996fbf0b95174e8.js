(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[292],{5070:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/select-items",function(){return n(3200)}])},2383:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var r=n(5893),a=n(7294),i=function(e){var t=e.data;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"w-full h-10 overflow-x-auto no-scrollbar",children:a.Children.toArray(t.map((function(e,t){return(0,r.jsx)("span",{className:"bg-white text-black px-6 p-1 rounded-full text-sm ".concat(t>0&&"ml-2"),children:e})})))})})}},7559:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n(5893),a=function(e){var t=e.left,n=e.right,a=e.onClick,i=e.id;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"shadow-sm bg-white rounded-lg w-full mt-2 ".concat(a&&"cursor-pointer"),children:(0,r.jsxs)("div",{onClick:function(){a&&a(i)},children:[(0,r.jsx)("div",{className:"inline-block p-2",children:t}),(0,r.jsx)("div",{className:"flex h-14 p-2 float-right",children:(0,r.jsx)("div",{className:"m-auto",children:n})})]})})})}},8637:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(5893),a=n(7294),i=function(e){var t=e.className,n=e.onChange,i=e.id,l=e.defaultValue,s=(0,a.useState)(0),c=s[0],o=s[1];(0,a.useEffect)((function(){o(l||0)}),[l]);var u=function(e){e>=0&&(o(e),i&&n&&n(i,e))};return(0,r.jsxs)("div",{className:"space-x-2",onClick:function(e){return e.stopPropagation()},children:[(0,r.jsx)("div",{className:"inline-block",onClick:function(){return u(c-1)},children:(0,r.jsx)("div",{className:"flex relative w-8 h-8 bg-gray-200 justify-center items-center rounded-full text-xl",children:"-"})}),(0,r.jsx)("input",{type:"number",className:"".concat(t," inline-block w-14 h-8 bg-gray-100 text-center mb-6 rounded-md text-sm border-1"),value:c.toString(),onChange:function(e){u(+(e.target.value||"0"))}}),(0,r.jsx)("div",{className:"inline-block",onClick:function(){return u(c+1)},children:(0,r.jsx)("div",{className:"flex relative w-8 h-8 bg-gray-200 justify-center items-center rounded-full text-xl",children:"+"})})]})}},9006:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(5893),a=n(7294),i=function(e){var t=e.className,n=e.optionsClassName,i=e.placeholder,l=e.listItems,s=(0,a.useState)(!1),c=s[0],o=s[1],u=(0,a.useState)(i),d=u[0],f=u[1],m=function(e){var t=e.currentTarget.getAttribute("data-value")||i;f(t),o(!1)};return(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsxs)("button",{className:"py-2 leading-tight inline-block whitespace-nowrap h-10 w-full rounded-full px-4 ".concat(t),onClick:function(){return o(!c)},children:[(0,r.jsx)("span",{className:"float-left",children:d}),(0,r.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2 float-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,r.jsx)("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),(0,r.jsx)("ul",{className:"w-full absolute text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding ".concat(!c&&"hidden"," ").concat(n),children:a.Children.toArray(l.map((function(e){return(0,r.jsx)("li",{"data-value":e,onClick:m,children:(0,r.jsx)("a",{className:"text-sm py-1 px-4 font-normal block w-full whitespace-nowrap bg-transparent",href:"#",children:e})})})))})]})}},6068:function(e,t,n){"use strict";n.d(t,{w:function(){return l}});var r=n(5893),a=function(e){var t=e.className;return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 stroke-red-600 inline-block ".concat(t),viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[(0,r.jsx)("path",{d:"M12.208 16.472C13.6744 15.8488 14.9231 14.8049 15.7961 13.472C16.6692 12.1392 17.1274 10.5773 17.1128 8.98399C17.0982 7.39072 16.6114 5.83774 15.7141 4.5211C14.8168 3.20446 13.5492 2.18347 12.0716 1.58726C10.594 0.991053 8.97279 0.846309 7.41298 1.17149C5.85318 1.49667 4.42482 2.27696 3.30855 3.41392C2.19229 4.55089 1.43824 5.99343 1.14177 7.55894C0.84531 9.12446 1.01976 10.7427 1.64303 12.2091C2.05673 13.1828 2.65818 14.0655 3.41305 14.8067C4.16791 15.548 5.06142 16.1333 6.0425 16.5292C7.02358 16.925 8.07302 17.1236 9.13091 17.1139C10.1888 17.1041 11.2344 16.8859 12.208 16.472V16.472Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M14.7531 14.7451L21.001 20.9941",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})},i=n(9006),l=function(e){var t=e.listItems,n=e.className;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-full ".concat(n," flex"),children:[(0,r.jsx)("div",{className:"w-5/6",children:(0,r.jsx)(i.L,{placeholder:"Filter Suppliers...",listItems:t,className:"bg-black text-white",optionsClassName:"bg-black text-white"})}),(0,r.jsx)("div",{className:"bg-black h-10 w-10 rounded-full inline-block ml-2 text-center",children:(0,r.jsx)(a,{className:"mt-2"})})]})})}},3200:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),a=n(1110),i=n(6068),l=n(2383),s=n(7821),c=n(7559),o=n(7294),u=n(2294),d=n(8637),f=n(1802);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function g(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(e){var t=e.list,n=(0,o.useState)({}),a=n[0],i=n[1],l=function(){window.location.pathname=u.F.SELECT_DAYS_PAGE},s=function(e,n){var r,l=t.find((function(t){return t.Id===e})),s=((null===l||void 0===l?void 0:l.Price)||0)*n;i(x({},a,h({},e,s)));var c=localStorage.getItem("activeDay")||"",o=JSON.parse(localStorage.getItem("orders")||"{}"),u=x({},l,{Quantity:n}),d=(null===(r=o[c])||void 0===r?void 0:r.filter((function(e){return e.Id!==u.Id})))||[];d=g(d).concat([u]),localStorage.setItem("orders",JSON.stringify(x({},o,h({},c,d))))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"font-semibold",children:"Rockstar Bakers"}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"text-gray-500",children:"Monday"}),(0,r.jsx)("div",{className:"w-full mt-2",children:o.Children.toArray(t.map((function(e,t){return(0,r.jsx)(c.f,{onClick:l,left:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:e.Name}),(0,r.jsx)("span",{className:"block text-sm text-gray-500",children:e.ProductDetails})]}),right:(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(d.g,{id:e.Id,onChange:s})})})})))}),"\xa0",(0,r.jsxs)(f.z,{onClick:l,children:["Add to Standing Order - \xa3",Object.values(a).reduce((function(e,t){return e+t}),0).toFixed(2)]})]})},v=[{Id:"1",Name:"Croissant",ProductDetails:"\xa30.70 - 1 (Each)",Price:.7},{Id:"2",Name:"Pain Aux Choc",ProductDetails:"\xa30.65 - 1 (Each)",Price:.65},{Id:"3",Name:"Sourdough Bread",ProductDetails:"\xa33.35 - 1 Loaf (1.5 kg)",Price:3.35},{Id:"4",Name:"White Bloomer Small",ProductDetails:"\xa30.50 - 1 (90 g)",Price:.5},{Id:"5",Name:"Banana Bread",ProductDetails:"\xa313.65 - 1 Loaf",Price:13.65}],j=function(){var e=v;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-full h-full bg-egray overflow-auto",children:[(0,r.jsx)(a.D,{title:"Select Supplier"}),(0,r.jsxs)("div",{className:"p-4 mt-4 space-y-4",children:[(0,r.jsx)(i.w,{listItems:["Rockstar Bakers"]}),(0,r.jsx)(l.a,{data:["All","Bakery","Packaging","Alcohol","Dairy"]})]}),(0,r.jsx)("div",{className:"border-b-1 border-gray-300"}),(0,r.jsx)("div",{className:"p-4 space-y-4",children:(0,r.jsx)(p,{list:e})}),(0,r.jsx)("section",{className:"mt-10",children:"\xa0"}),(0,r.jsx)(s._,{})]})})}}},function(e){e.O(0,[419,774,888,179],(function(){return t=5070,e(e.s=t);var t}));var t=e.O();_N_E=t}]);