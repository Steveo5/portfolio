(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{203:function(e,t,n){"use strict";n.r(t);var r={props:{explanation:{type:String,required:!0},involvementDesc:{type:String,required:!0},involvementList:{type:Array,default:[]},projectUrl:{type:String,required:!0},sourceUrl:{type:String,default:""}}},o=n(33),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col justify-between flex-grow"},[n("div",[n("p",[e._v(e._s(e.explanation))]),e._v(" "),e._m(0),e._v(" "),n("p",[e._v(e._s(e.involvementDesc))]),e._v(" "),n("ul",{staticClass:"list-disc my-4 ml-4"},e._l(e.involvementList,(function(t){return n("li",[e._v(e._s(t))])})),0)]),e._v(" "),n("div",{staticClass:"pt-4 flex"},[n("a",{staticClass:"text-blue-600 underline",attrs:{href:e.projectUrl,target:"_blank"}},[e._v("Project website")]),e._v(" "),n("div",{staticClass:"ml-4"},[""!==e.sourceUrl?n("a",{staticClass:"text-blue-600 underline",attrs:{href:e.sourceUrl,target:"_blank"}},[e._v("Source")]):n("p",{staticClass:"text-gray-400 underline"},[e._v("Source not available")])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-7 mb-4"},[n("h3",{staticClass:"text-xl font-semibold"},[e._v("What was my involvement in the project?")])])}],!1,null,null,null);t.default=component.exports},204:function(e,t,n){"use strict";n.r(t);var r={props:{title:{type:String,required:!0},imageUrl:{type:String,required:!0},imageAlt:{type:String,required:!0}}},o=n(33),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"max-w-5xl mx-auto px-6 py-20"},[n("div",{staticClass:"grid grid-cols-12"},[n("div",{staticClass:"col-span-7 pr-10 flex flex-col"},[n("div",{staticClass:"mb-5"},[n("h1",{staticClass:"text-4xl font-bold"},[e._v(e._s(e.title))])]),e._v(" "),e._t("default")],2),e._v(" "),n("div",{staticClass:"col-span-5"},[n("img",{staticClass:"rounded-2xl object-cover shadow-xl w-full",attrs:{src:e.imageUrl,alt:e.imageAlt}})])])])}),[],!1,null,null,null);t.default=component.exports},205:function(e,t,n){var content=n(207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(56).default)("bad8e090",content,!0,{sourceMap:!1})},206:function(e,t,n){"use strict";n(205)},207:function(e,t,n){var r=n(55)((function(i){return i[1]}));r.push([e.i,'.container{\n  margin:0 auto;\n  min-height:100vh;\n  display:flex;\n  justify-content:center;\n  align-items:center\n}\n.title{\n  font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  display:block;\n  font-weight:300;\n  font-size:100px;\n  color:#35495e;\n  letter-spacing:1px\n}\n.subtitle{\n  font-weight:300;\n  font-size:42px;\n  color:#526488;\n  word-spacing:5px;\n  padding-bottom:15px\n}\n.links{\n  padding-top:15px\n}',""]),r.locals={},e.exports=r},208:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(203),l=n(204),c=r.a.extend({components:{Project:l.default,ProjectDetails:o.default}}),d=(n(206),n(33)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("project",{attrs:{title:"Waxeye","image-url":"/images/waxeye-project.jpg","image-alt":"Waxeye website"}},[n("project-details",{attrs:{"project-url":"https://waxeye.co.nz",explanation:"Waxeye is a digital agency centered around web design/development, VR, AR, MR. The website showcases their case studies from various clients they have worked with over the years. Waxeye website features several pages through its hamburger menu and a complex CMS driven case study component implementation.","involvement-desc":"Initially the project was migrated / rebuilt from a previous system, I worked with design and test to produce a product which included:","involvement-list":["Layout system which included header, footer an elaborate hamburger menu that resizes properly depending on the device","Contact page with frontend / backend validation, reCaptcha and sending success emails","Complex component based case studies, these allow for putting a library of components on the page in any order. This also included dark "]}})],1),e._v(" "),e._m(1),e._v(" "),n("project",{attrs:{title:"Chorus consumer","image-url":"/images/chorus-consumer-project.jpg","image-alt":"Chorus consumer website"}},[n("project-details",{attrs:{"project-url":"https://chorus.co.nz",explanation:"Chorus provides the backbone to New Zealand internet, their consumer website puts a face to the name with many pages, tools, apps encompassing a large ecosystem.","involvement-desc":"I've worked since 2017 rebuilding, refactoring and adding components to the site. These are some of the things I did:","involvement-list":["Hamburger menu with submenus and responsive mobile design","Worked on several standalone apps in different frontend and backend libraries. These were on the /data-calculator and /speed-test amongst other pages.","Creating blocks and components in the CMS to display on the page. These are all over the site","Create and learn new processes for testing, best practices and start to finish ticketing using Jira and other tools"]}})],1),e._v(" "),e._m(2),e._v(" "),n("project",{attrs:{title:"Chorus service providers","image-url":"/images/chorus-service-providers-project.jpg","image-alt":"Chorus service providers website"}},[n("project-details",{attrs:{"project-url":"https://sp.chorus.co.nz",explanation:"Chorus provides the backbone to New Zealand internet, their service providers website has information for partners in New Zealand wanting to provision their lines, such as Vodafone, Spark etc.","involvement-desc":"Like Chorus Consumer, I've worked since 2017 refactoring and making additions to the site, I've had less involvement building the site in the beginning but have made many changes since, including:","involvement-list":["Making changes to existing components to fit new designs. Also updating content in non-CMSable components","Building a few new pages and forms, including their Feedback form (purple tab on the right of the page)","Adjusting CMSable parts of the page (adding new editable parts and removing some others)"]}})],1),e._v(" "),e._m(3),e._v(" "),n("project",{attrs:{title:"Chorus company","image-url":"/images/chorus-company-project.jpg","image-alt":"Chorus company website"}},[n("project-details",{attrs:{"project-url":"https://company.chorus.co.nz",explanation:"Chorus provides the backbone to New Zealand internet, the company website is for their service providers.","involvement-desc":"Like Chorus Consumer and SP, I've worked since 2017 mostly keeping it up to date and adding pages here and there, some of things I specifically worked on:","involvement-list":["Updating the core components to newer versions","Adding / adjusting existing components in the CMS to fit new designs and requirements","Creating new pages with CMSable components"]}})],1),e._v(" "),e._m(4),e._v(" "),n("project",{attrs:{title:"Chorus HyperFibre","image-url":"/images/chorus-hyperfibre-project.jpg","image-alt":"Chorus HyperFibre website"}},[n("project-details",{attrs:{"project-url":"https://hyperfibre.chorus.co.nz",explanation:"Chorus HyperFibre gives out information on the HyperFibre rollout in New Zealand. They have several pages dedicated to sharing information such as downloads, news, release dates etc","involvement-desc":"During the setup I helped create the website, I worked on several pages and have helped keep it up to date since","involvement-list":["Worked on the video on the home page (I didn't create this but have updated parts of it)","I helped create the rollouts page and the FAQs page, including updating content since"]}})],1),e._v(" "),e._m(5),e._v(" "),n("project",{attrs:{title:"Sneakers","image-url":"/images/sneakers-project.jpg","image-alt":"Sneakers website"}},[n("project-details",{attrs:{"project-url":"https://sneakersmedia.co.nz",explanation:"Sneakers are a media design company, their website shows some information about them and their work.","involvement-desc":"I mostly worked on this website alone during the end of 2020. Some of the main difficulties I had during development were the reactive slider and learning headless CMS. Some of the main things I worked on (not everything):","involvement-list":["Learning and connecting the frontend to a headless cms backend. This allowed for content on some of the pages to be editable","The slider which is reactive / mobile friendly. This was difficult to get right","Contact form submission to the CMS and sending emails"]}})],1),e._v(" "),e._m(6),e._v(" "),n("project",{attrs:{title:"Chorus Fibre lab","image-url":"/images/chorus-fibre-lab-project.jpg","image-alt":"Chorus Fibre lab"}},[n("project-details",{attrs:{"project-url":"https://sp.chorus.co.nz/training/chorus-fibre-lab",explanation:"Chorus Fibre lab is a virtual tour / experience with tracking inside the users service providers account.","involvement-desc":"This project is inside the Chorus service providers website but was technically seperate. During this time I worked on the menu system inside the Unity game engine. The was a difficult task as I had to partly learn Unity in order to work on it.","involvement-list":["Menus with tracking inside the users account"]}})],1),e._v(" "),e._m(7),e._v(" "),n("project",{attrs:{title:"Ecotricity","image-url":"/images/ecotricity-project.jpg","image-alt":"Ecotricity website"}},[n("project-details",{attrs:{"project-url":"https://ecotricity.co.nz/",explanation:"Ecotricity is an electricity company sporting clean and green power. The website has several pages","involvement-desc":"Initially I created the home page, its mostly still the same. Some of the things specifically I worked on (but not all) are:","involvement-list":["Layout with header and footer sections (this includes the blue background component underneath)","Component 'Why switch to Ecotricity' which has a left and right section and a check list","Simple image and text component"]}})],1),e._v(" "),e._m(8),e._v(" "),n("project",{attrs:{title:"BiomeCraft community forum","image-url":"/images/biomecraft-project.jpg","image-alt":"BiomeCraft community forum website"}},[n("project-details",{attrs:{"project-url":"https://biomecraft.com",explanation:"BiomeCraft community is a forum aimed for players of the server. Its still heavily in development so much of the design is still changing and ideas are being fleshed out. It has the potential to be quite complex so I am trying to simplify the ideas","involvement-desc":"I created this website using Laravel as the backend and Vue as the frontend. It also has an admin panel that uses a custom service provider, the service provider registers what I call 'books' and works by having a layout with predefined fields. This setup allows me to create a class and simply set its fields and link it to any Laravel model for CRUD operations.","involvement-list":["The home page has several components including an image slider","The forum index has many discussions that would be created by users","The forum post includes information about the post itself and a list of comments","The users dashboard allows making changes to the profile picture, description etc"],"source-url":"https://github.com/Steveo5/biomecraft-website"}})],1)],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-center justify-center bg-gray-900 sm:items-center py-64"},[n("div",[n("p",{staticClass:"text-white opacity-90 text-5xl mb-1"},[e._v("Lorem ipsum")]),e._v(" "),n("p",{staticClass:"text-white opacity-90 text-5xl mb-1"},[e._v("Contrary to popular")]),e._v(" "),n("p",{staticClass:"text-white opacity-90 text-5xl"},[e._v("simply random")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"max-w-6xl mx-auto"},[t("hr")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"max-w-6xl mx-auto"},[t("hr")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"max-w-6xl mx-auto"},[t("hr")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"max-w-6xl mx-auto"},[t("hr")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"max-w-6xl mx-auto"},[t("hr")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"max-w-6xl mx-auto"},[t("hr")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"max-w-6xl mx-auto"},[t("hr")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"max-w-6xl mx-auto"},[t("hr")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ProjectDetails:n(203).default,Project:n(204).default})}}]);