(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var r=s.apply(null,t);r&&e.push(r)}}else if("object"===a){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var o in t)i.call(t,o)&&t[o]&&e.push(o)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0!==(t=(function(){return s}).apply(n,[]))&&(e.exports=t)}()},8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7537)}])},7537:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var i=t(5893);t(4494);var s=t(4184),a=t.n(s),r=t(7294);let o=["as","disabled"];function c({tagName:e,disabled:n,href:t,target:i,rel:s,role:a,onClick:r,tabIndex:o=0,type:c}){e||(e=null!=t||null!=i||null!=s?"a":"button");let l={tagName:e};if("button"===e)return[{type:c||"button",disabled:n},l];let d=i=>{var s;if(!n&&("a"!==e||(s=t)&&"#"!==s.trim())||i.preventDefault(),n){i.stopPropagation();return}null==r||r(i)};return"a"===e&&(t||(t="#"),n&&(t=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:n?void 0:o,href:t,target:"a"===e?i:void 0,"aria-disabled":n||void 0,rel:"a"===e?s:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},l]}let l=r.forwardRef((e,n)=>{let{as:t,disabled:s}=e,a=function(e,n){if(null==e)return{};var t,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,o),[r,{tagName:l}]=c(Object.assign({tagName:t,disabled:s},a));return(0,i.jsx)(l,Object.assign({},a,r,{ref:n}))});l.displayName="Button";let d=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:u,Provider:_}=d,m=r.forwardRef(({as:e,bsPrefix:n,variant:t="primary",size:s,active:o=!1,disabled:l=!1,className:u,..._},m)=>{let x=function(e,n){let{prefixes:t}=(0,r.useContext)(d);return e||t[n]||n}(n,"btn"),[v,{tagName:g}]=c({tagName:e,disabled:l,..._});return(0,i.jsx)(g,{...v,..._,ref:m,disabled:l,className:a()(u,x,o&&"active",t&&`${x}-${t}`,s&&`${x}-${s}`,_.href&&l&&"disabled")})});m.displayName="Button";var x=t(4164),v=t.n(x),g=e=>{let{documentLink:n,actionText:t,gettingStartedText:s,collaborativeWorkflowsTex:a,midjourneyBotText:o,exploreNowText:c,propLineHeight:l,propLeft:d}=e,u=(0,r.useMemo)(()=>({lineHeight:l}),[l]),_=(0,r.useMemo)(()=>({left:d}),[d]);return(0,i.jsxs)("div",{className:v().card,children:[(0,i.jsx)("img",{className:v().imageIcon,alt:"",src:n}),(0,i.jsxs)("div",{className:v().content,children:[(0,i.jsx)("img",{className:v().contentChild,alt:"",src:"/rectangle-80.svg"}),(0,i.jsx)(m,{className:v().darkcardbutton,variant:"outline-primary",children:t}),(0,i.jsxs)("div",{className:v().text,children:[(0,i.jsx)("div",{className:v().usingDiscord,style:u,children:s}),(0,i.jsxs)("div",{className:v().text1,children:[(0,i.jsx)("div",{className:v().masteringTheArt,children:a}),(0,i.jsx)("div",{className:v().promptWritingInvolves,children:o})]})]}),(0,i.jsxs)("div",{className:v().line,children:[(0,i.jsx)("div",{className:v().line1}),(0,i.jsx)("div",{className:v().line2})]})]}),(0,i.jsxs)("div",{className:v().polygonIcons,children:[(0,i.jsx)("img",{className:v().polygonIconsChild,alt:"",src:"/polygon-6.svg"}),(0,i.jsx)("div",{className:v().div,style:_,children:c})]})]})},p=t(3890),h=t.n(p),N=()=>(0,i.jsxs)("div",{className:h().cards,children:[(0,i.jsxs)("div",{className:h().card,children:[(0,i.jsx)("img",{className:h().imageIcon,alt:"",src:"/image@2x.png"}),(0,i.jsxs)("div",{className:h().content,children:[(0,i.jsx)("img",{className:h().contentChild,alt:"",src:"/rectangle-80.svg"}),(0,i.jsx)("div",{className:h().darkcardbutton,children:(0,i.jsxs)("div",{className:h().button,children:[(0,i.jsx)("div",{className:h().div,children:"\uDBC0\uDC6C"}),(0,i.jsx)("div",{className:h().exploreNow,children:"Join Discord"})]})}),(0,i.jsxs)("div",{className:h().text,children:[(0,i.jsx)("div",{className:h().usingDiscord,children:"Using Discord"}),(0,i.jsxs)("div",{className:h().text1,children:[(0,i.jsx)("div",{className:h().masteringTheArt,children:"Mastering the Art of Prompt Writing"}),(0,i.jsx)("div",{className:h().promptWritingInvolves,children:"Prompt writing involves crafting clear and engaging prompts, while using images to create a visual representation of the idea or concept."})]})]}),(0,i.jsxs)("div",{className:h().line,children:[(0,i.jsx)("div",{className:h().line1}),(0,i.jsx)("div",{className:h().line2})]})]}),(0,i.jsxs)("div",{className:h().polygonIcons,children:[(0,i.jsx)("img",{className:h().polygonIconsChild,alt:"",src:"/polygon-6.svg"}),(0,i.jsx)("div",{className:h().div1,children:"\uDBC5\uDC89"})]})]}),(0,i.jsx)(g,{documentLink:"/image1@2x.png",actionText:"Explore Now",gettingStartedText:"Getting Started",collaborativeWorkflowsTex:"Streamlining Collaborative Workflows",midjourneyBotText:"Use the Midjourney Bot on Discord to effortlessly generate designs and artworks for your project. Simply enter a command and the bot will respond with a prompt or image. The collaborative feature /blend allows you to blend two images together to create a unique design. It's a user-friendly and effective way to bring your ideas to life",exploreNowText:"\uDBC3\uDC19",propLineHeight:"36px",propLeft:"26.56%"}),(0,i.jsx)(g,{documentLink:"/image2@2x.png",actionText:"View Documents",gettingStartedText:"User Guide",collaborativeWorkflowsTex:"Unraveling the Mystery of Version",midjourneyBotText:"Explore key concepts like versions and parameters when using Midjourney. Versions refer to different variations of a design, allowing you to experiment with different styles and features. Parameters are the specific settings and options that can be adjusted to customize your design, such as color, texture, and font.",exploreNowText:"\uDBC2\uDED7",propLineHeight:"130%",propLeft:"29.69%"})]}),j=t(1372),b=t.n(j),f=()=>(0,i.jsxs)("div",{className:b().title,children:[(0,i.jsxs)("div",{className:b().update,children:[(0,i.jsx)("img",{className:b().unionIcon,alt:"",src:"/union.svg"}),(0,i.jsx)("div",{className:b().introducingImageFeature,children:"Introducing Image Feature"})]}),(0,i.jsx)("div",{className:b().imagineWithSerendipity,children:"Imagine with Serendipity"}),(0,i.jsx)("div",{className:b().discoverAVibrant,children:"Discover a vibrant community of creators on Serendipity! Connect with thousands of like-minded individuals on Discord or the web and unleash your imagination through collaborative storytelling. From vivid worlds to unforgettable characters, bring your short text descriptions to life in new and exciting ways. Join Serendipity today and embark on a journey of endless creativity!"}),(0,i.jsx)("div",{className:b().button,children:(0,i.jsx)("div",{className:b().darkherobutton,children:(0,i.jsx)("div",{className:b().button1,children:(0,i.jsxs)("div",{className:b().button2,children:[(0,i.jsx)("img",{className:b().vectorIcon,alt:"",src:"/vector.svg"}),(0,i.jsx)("div",{className:b().generateImages,children:"Generate Images"})]})})})})]}),y=t(7567),w=t.n(y),I=()=>(0,i.jsxs)("div",{className:w().updateLayout,children:[(0,i.jsx)("img",{className:w().linesIcon,alt:"",src:"/lines.svg"}),(0,i.jsxs)("div",{className:w().listParent,children:[(0,i.jsxs)("div",{className:w().list,children:[(0,i.jsxs)("div",{className:w().buttonList,children:[(0,i.jsx)("div",{className:w().buttonListChild}),(0,i.jsx)("div",{className:w().waveform,children:"\uDBC0\uDC66"})]}),(0,i.jsxs)("div",{className:w().titleParent,children:[(0,i.jsx)("div",{className:w().title,children:"Upload Image"}),(0,i.jsx)("div",{className:w().subtitle,children:"New Feature - Apr 30, 2023"})]})]}),(0,i.jsxs)("div",{className:w().list,children:[(0,i.jsxs)("div",{className:w().buttonList1,children:[(0,i.jsx)("div",{className:w().buttonListChild}),(0,i.jsx)("div",{className:w().waveform1,children:"\uDBC3\uDC2C"})]}),(0,i.jsxs)("div",{className:w().titleParent,children:[(0,i.jsx)("div",{className:w().title,children:"Permutation"}),(0,i.jsx)("div",{className:w().subtitle,children:"New Feature - Apr 21, 2023"})]})]}),(0,i.jsxs)("div",{className:w().list,children:[(0,i.jsxs)("div",{className:w().buttonList1,children:[(0,i.jsx)("div",{className:w().buttonListChild}),(0,i.jsx)("div",{className:w().waveform,children:"\uDBC3\uDC34"})]}),(0,i.jsxs)("div",{className:w().titleParent,children:[(0,i.jsx)("div",{className:w().title,children:"Status Page"}),(0,i.jsx)("div",{className:w().subtitle,children:"New content - Apr 16, 2023"})]})]}),(0,i.jsxs)("div",{className:w().list,children:[(0,i.jsxs)("div",{className:w().buttonList1,children:[(0,i.jsx)("div",{className:w().buttonListChild}),(0,i.jsx)("div",{className:w().waveform3,children:"\uDBC2\uDFEE"})]}),(0,i.jsxs)("div",{className:w().titleParent,children:[(0,i.jsx)("div",{className:w().title,children:"V2.1 Release"}),(0,i.jsx)("div",{className:w().subtitle,children:"New Release - Apr 15, 2023"})]})]}),(0,i.jsxs)("div",{className:w().list,children:[(0,i.jsxs)("div",{className:w().buttonList1,children:[(0,i.jsx)("div",{className:w().buttonListChild}),(0,i.jsx)("div",{className:w().waveform4,children:"\uDBC2\uDD83"})]}),(0,i.jsxs)("div",{className:w().titleParent,children:[(0,i.jsx)("div",{className:w().title,children:"Linked Roles"}),(0,i.jsx)("div",{className:w().subtitle,children:"New Feature - Apr 10, 2023"})]})]})]}),(0,i.jsx)("div",{className:w().updates,children:"Updates"}),(0,i.jsx)(m,{className:w().darkcardbutton,variant:"outline-primary",children:"View more"})]}),k=t(4409),C=t.n(k),D=()=>(0,i.jsx)("div",{className:C().landingPageDarkMode,children:(0,i.jsxs)("div",{className:C().desktop,children:[(0,i.jsx)("img",{className:C().aksonvadyDataTechnologyFutuIcon,alt:"",src:"/aksonvady-data-technology-futuristic-illustration-31@2x.png"}),(0,i.jsx)("div",{className:C().backgroundBlur}),(0,i.jsx)("div",{className:C().backgroundBlur1}),(0,i.jsx)("div",{className:C().backgroundBlur2}),(0,i.jsxs)("div",{className:C().separator,children:[(0,i.jsx)("div",{className:C().line}),(0,i.jsx)("div",{className:C().line1}),(0,i.jsx)("img",{className:C().outlineIcon,alt:"",src:"/outline.svg"})]}),(0,i.jsx)(N,{}),(0,i.jsx)(f,{}),(0,i.jsxs)("div",{className:C().topMenu,children:[(0,i.jsxs)("div",{className:C().buttonlogo,children:[(0,i.jsx)("img",{className:C().logoIcon,alt:"",src:"/logo.svg"}),(0,i.jsx)("img",{className:C().serendipityIcon,alt:"",src:"/serendipity.svg"})]}),(0,i.jsxs)("div",{className:C().menu,children:[(0,i.jsxs)("button",{className:C().menuButtonAnimation,children:[(0,i.jsx)("div",{className:C().button,children:(0,i.jsx)("div",{className:C().item,children:"Home"})}),(0,i.jsx)("div",{className:C().menuButtonAnimationChild})]}),(0,i.jsx)(m,{className:C().menuButtonAnimation1,variant:"outline-primary",children:"Browse"}),(0,i.jsx)(m,{className:C().menuButtonAnimation1,variant:"outline-primary",children:"Button"}),(0,i.jsx)(m,{className:C().menuButtonAnimation1,variant:"outline-primary",children:"Pricing"}),(0,i.jsx)(m,{className:C().menuButtonAnimation1,variant:"outline-primary",name:"sinup",id:"signupid",children:"Sign Up"})]})]}),(0,i.jsx)(I,{})]})})},4494:function(){},4164:function(e){e.exports={contentChild:"card-container_contentChild__fqgch",imageIcon:"card-container_imageIcon__dCFI9",darkcardbutton:"card-container_darkcardbutton__KiX86",masteringTheArt:"card-container_masteringTheArt__uO5NV",usingDiscord:"card-container_usingDiscord__Rqy7O",promptWritingInvolves:"card-container_promptWritingInvolves__U_yil",text1:"card-container_text1__XDiq6",line1:"card-container_line1__tK4xu",text:"card-container_text__NUppB",content:"card-container_content__R6x4_",line:"card-container_line__OLxMK",line2:"card-container_line2__Ga2nz",polygonIconsChild:"card-container_polygonIconsChild__CvOXp",div:"card-container_div__nuyLX",polygonIcons:"card-container_polygonIcons__YQt0_",card:"card-container_card__g_vnr"}},3890:function(e){e.exports={contentChild:"container-buttons_contentChild__zeDiL",imageIcon:"container-buttons_imageIcon__h_GTe",div:"container-buttons_div__fUTHm",exploreNow:"container-buttons_exploreNow__wwnTz",button:"container-buttons_button__RvBDS",darkcardbutton:"container-buttons_darkcardbutton__7d5rS",masteringTheArt:"container-buttons_masteringTheArt__9p8Wq",usingDiscord:"container-buttons_usingDiscord__uWLu4",promptWritingInvolves:"container-buttons_promptWritingInvolves__kReex",text1:"container-buttons_text1__9I3sf",line1:"container-buttons_line1__MZVjL",text:"container-buttons_text__NA_s4",content:"container-buttons_content__27fl_",line:"container-buttons_line__GDWhX",line2:"container-buttons_line2__mL3vY",polygonIconsChild:"container-buttons_polygonIconsChild__3usDu",div1:"container-buttons_div1__iGZuz",polygonIcons:"container-buttons_polygonIcons__04HpW",card:"container-buttons_card__1OYwv",cards:"container-buttons_cards__Cq6Hb"}},1372:function(e){e.exports={unionIcon:"serendipity-container_unionIcon__WUHU5",introducingImageFeature:"serendipity-container_introducingImageFeature___fx9l",update:"serendipity-container_update__yM0Ik",imagineWithSerendipity:"serendipity-container_imagineWithSerendipity__lqcJT",discoverAVibrant:"serendipity-container_discoverAVibrant__3tMMk",vectorIcon:"serendipity-container_vectorIcon__Un7ah",generateImages:"serendipity-container_generateImages__fyp3X",button1:"serendipity-container_button1__bS45l",button2:"serendipity-container_button2__F4DMX",darkherobutton:"serendipity-container_darkherobutton__2QeqZ",button:"serendipity-container_button__fFozc",title:"serendipity-container_title__wSp8X"}},7567:function(e){e.exports={buttonListChild:"update-container_buttonListChild__Rn9sS",linesIcon:"update-container_linesIcon__iEgd2",waveform:"update-container_waveform__QLr2A",buttonList:"update-container_buttonList__4M0uh",title:"update-container_title__3UenO",subtitle:"update-container_subtitle__pTbLd",list:"update-container_list__2SdFT",titleParent:"update-container_titleParent__UNQLE",waveform1:"update-container_waveform1__Xvv8J",buttonList1:"update-container_buttonList1__brnM_",waveform3:"update-container_waveform3__8FHEf",waveform4:"update-container_waveform4__1vxqY",listParent:"update-container_listParent__BL8zO",updates:"update-container_updates__CjfP2",darkcardbutton:"update-container_darkcardbutton__j19jo",updateLayout:"update-container_updateLayout__BrAg2"}},4409:function(e){e.exports={aksonvadyDataTechnologyFutuIcon:"index_aksonvadyDataTechnologyFutuIcon__OFCHI",backgroundBlur:"index_backgroundBlur__QuAZr",backgroundBlur1:"index_backgroundBlur1__c6nUL",backgroundBlur2:"index_backgroundBlur2__hinq3",line:"index_line__hJtCL",line1:"index_line1__6GP53",outlineIcon:"index_outlineIcon__Nhgsf",separator:"index_separator__3p9e5",logoIcon:"index_logoIcon__U0ILV",serendipityIcon:"index_serendipityIcon__pxQBj",buttonlogo:"index_buttonlogo__GKhHw",item:"index_item__bnOxH",button:"index_button__g8ljY",menuButtonAnimationChild:"index_menuButtonAnimationChild__dV4Lz",menuButtonAnimation:"index_menuButtonAnimation__CUBkQ",menuButtonAnimation1:"index_menuButtonAnimation1__cKz12",menu:"index_menu__EzpaR",topMenu:"index_topMenu__W0Dxw",desktop:"index_desktop__cegdy",landingPageDarkMode:"index_landingPageDarkMode__DrZ3c"}}},function(e){e.O(0,[942,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);