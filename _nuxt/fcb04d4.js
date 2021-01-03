(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{459:function(t,e,n){"use strict";n.r(e);n(41),n(42),n(48);var r=n(420),o=n.n(r);var c={data:function(){return{person:o.a.load("\nWork Experience 👔:\n- name: EDF Trading\n  description: Short Term Power Analyst\n  Time: April 2018\n  url: https://www.edftrading.com/\n  picture: /pictures/edf.png\n  color: green\n\n- name: ETH Zurich\n  description: Master Thesis\n  Time: September 2017\n  url: https://ethz.ch/en.html\n  picture: /pictures/eth.png\n\nPublications 📝:\n- name: IEEE General Meeting Power& Energy Society\n  description: A Modular and Efficient Modeling Library for Power Flow Network Steady-State Analysis and Optimization\n  Time: August 2018\n  url: https://ieeexplore.ieee.org/document/8586605\n  picture: /pictures/ieee.png\n  color: red\n\nEducations 📚:\n- name: ETH Zurich\n  description: Master Electrical Engineering and Information Technology\n  Time: March 2018\n  url: https://ethz.ch/en.html\n  picture: /pictures/eth.png\n\n- name: CentraleSupelec\n  description: Information Sciences, Energy and Systems\n  Time: March 2018\n  url: https://ethz.ch/en.html\n  picture: /pictures/cs.png\n  color: green\n\nMOOC 📰:\n- name: edX - ColumbiaX\n  description: Machine Learning\n  Time: December 2020\n  url: https://github.com/salomonelli/best-resume-ever\n  picture: /pictures/edX.png\n\nScholarship 💰:\n- name: ETH Zurich\n  description: Birkigt Scholarship\n  Time: November 2017\n  url: https://ethz.ch/students/en/studies/financial/scholarships.html\n  picture: /pictures/eth.png\n\nCertifications 📜:\n- name: TOEFL IBT\n  description: 105/120\n  Time: January 2016\n  url: https://www.ets.org/fr/toefl\n  picture: /pictures/toefl.png\n\n- name: SprachDiplom Goethe Institut\n  description: B2\n  Time: September 2011\n  picture: /pictures/goethe.png\n  color: green\n\nComputer Science 💻:\n- name: Professional \n  Time: Python, VueJS\n  color: red\n\n- name: Beginner\n  Time: Rust, Go\n\n"),projects:o.a.load("\n- name: 🏘️ Community Detection Package in Go \n  description: Currently Switching to Rust\n  text: Package to run different community detection algorithms on graphs. Currently implementing the Louvain algorithm. Planning on adding Spectral clustering and Infomap.\n  url: https://github.com/MBaltzinger/go-community\n- name: 🚀  Power Network Modeling Stack\n  description: Contributed to three packages PFNET/GRIDOPT/OPTALG for power network modeling\n  text: PFNET is a C library for modeling and analyzing electric power networks. It provides data parsers, network analysis and manipulation routines, and fast and customizable constraint and objective function evaluators for constructing network optimization problems.\n  url: https://github.com/ttinoco/PFNET\n- name: ⚡ Running Community Detections in the Browser\n  description: Combine a Rust based community detection library with a front end using WASM\n  text: \n"),field:{}}},methods:{updateButton:function(t){this.field[t]=!this.field[t],console.log(this.field)},createField:function(){var t=this;Object.keys(this.person).forEach((function(element){t.$set(t.field,element,!1)}))}},created:function(){this.createField()}},l=n(82),d=n(127),m=n.n(d),v=n(461),h=n(455),f=n(174),_=n(394),w=n(175),C=n(140),y=n(401),T=n(402),k=n(105),x=n(171),E=n(232),S=n(405),V=n(456),P=n(457),M=n(458),B=n(452),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"start",align:"start"}},[n("v-col",{attrs:{md:"4","offset-md":"1"}},[n("v-card",[n("v-img",{attrs:{height:"250",src:"/pictures/test.jpeg"}},[n("v-row",{staticClass:"mx-0 my-0",staticStyle:{height:"100%"},attrs:{"no-gutters":""}},[n("v-col",{attrs:{"align-self":"start",cols:"12"}},[n("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[n("v-app-bar-nav-icon",{attrs:{color:"white"}}),t._v(" "),n("v-toolbar-title",{staticClass:"title white--text"},[t._v("\n              Virtual Card\n            ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"white",icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{"align-self":"end",cols:"12"}},[n("v-card-title",{staticClass:"white--text"},[n("v-avatar",{attrs:{size:"100"}},[n("v-img",{attrs:{src:"/pictures/edin.jpeg"}})],1),t._v(" "),n("p",{staticClass:"ml-8"},[t._v("\n              Martin Baltzinger\n            ")])],1)],1)],1)],1),t._v(" "),t._l(t.person,(function(e,r){return n("v-card-text",{key:r},[t._v("\n          "+t._s(r)+"\n          "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.updateButton(r)}}},[n("v-icon",[t._v(t._s(t.field[r]?"mdi-chevron-up":"mdi-chevron-down"))])],1),t._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.field[r],expression:"field[key]"}]},[n("v-divider"),t._v(" "),n("v-timeline",{attrs:{"align-top":"",dense:""}},t._l(t.person[r],(function(e){return n("v-timeline-item",{key:e.description,attrs:{small:"",color:e.color}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v(t._s(e.name))]),t._v("  - "+t._s(e.Time)+" \n                ")]),t._v(" "),n("div",[t._v(t._s(e.description))]),t._v(" "),n("v-avatar",[e.picture?n("v-img",{attrs:{contain:"",src:e.picture}}):t._e()],1),t._v(" "),n("div",[e.url?n("a",{attrs:{href:e.url,target:"_blank"}},[n("i",{staticClass:"fa fa-link",attrs:{"aria-hidden":"true"}})]):t._e()])],1)])})),1)],1)])],1)}))],2)],1),t._v(" "),n("v-col",{attrs:{"offset-md":"1",md:"5"}},[n("v-card",{staticClass:"mx-auto"},[n("v-app-bar",{attrs:{dark:"",color:"blue lighten-3"}},[n("v-app-bar-nav-icon"),t._v(" "),n("v-toolbar-title",[t._v("Projects")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1)],1),t._v(" "),t._l(t.projects,(function(p){return n("v-card",{key:p.name,staticClass:"mt-2",attrs:{outlined:"",elevation:"4"}},[n("v-card-title",{staticClass:"justify-center"},[t._v("\n            "+t._s(p.name)+"\n          ")]),t._v(" "),n("v-card-subtitle",{staticClass:"text-center",domProps:{textContent:t._s(p.description)}}),t._v(" "),n("v-card-text",{staticClass:"text-center",domProps:{textContent:t._s(p.text)}}),t._v(" "),p.url?n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{color:"deep-purple lighten-2",text:"",href:p.url,target:"_blank"}},[t._v("\n        Checkout\n      ")])],1):t._e()],1)}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VAppBar:v.a,VAppBarNavIcon:h.a,VAvatar:f.a,VBtn:_.a,VCard:w.a,VCardActions:C.a,VCardSubtitle:C.b,VCardText:C.c,VCardTitle:C.d,VCol:y.a,VDivider:T.a,VExpandTransition:k.a,VIcon:x.a,VImg:E.a,VRow:S.a,VSpacer:V.a,VTimeline:P.a,VTimelineItem:M.a,VToolbarTitle:B.a})}}]);