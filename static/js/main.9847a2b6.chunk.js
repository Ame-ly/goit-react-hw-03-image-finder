(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1edWL",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__ren98"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2FtVZ",Modal:"Modal_Modal__26rPJ"}},23:function(e,t,a){e.exports={App:"App_App__ftl_W"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3ouXB"}},27:function(e,t,a){e.exports={Button:"Button_Button__1VseJ"}},29:function(e,t,a){e.exports={Loader:"Loader_Loader__20RvC"}},34:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(9),c=a.n(o),i=(a(34),a(14)),s=a(4),u=a(5),l=a(7),m=a(6),g=a(23),h=a.n(g),b=a(11),p=a.n(b),d=a(24),_=a(25),j=a.n(_),f="&image_type=photo&orientation=horizontal&per_page=".concat(12),y=function(){var e=Object(d.a)(p.a.mark((function e(t){var a,r,n,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query,r=void 0===a?"":a,n=t.pageNumber,o=void 0===n?1:n,e.next=3,j.a.get("".concat("https://pixabay.com/api/","?key=").concat("21200739-c1a4d2f91a97c5d854a9d8dd6","&q=").concat(r,"&page=").concat(o).concat(f));case 3:return c=e.sent,console.log(c.data.hits),e.abrupt("return",c.data.hits);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=a(8),O=a.n(v),S=a(0),I=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.changeSearchQuery=function(t){return e.setState({searchQuery:t.currentTarget.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(S.jsx)("header",{className:O.a.Searchbar,children:Object(S.jsxs)("form",{className:O.a.SearchForm,onSubmit:this.onSubmit,children:[Object(S.jsx)("button",{type:"submit",className:O.a.SearchForm__button,children:Object(S.jsx)("span",{className:O.a.SearchForm__button__label,children:"Search"})}),Object(S.jsx)("input",{value:this.state.searchQuery,className:O.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.changeSearchQuery})]})})}}]),a}(r.Component);I.defaultProps={onSubmit:function(){}};var x=I,k=a(12),L=a.n(k),w=function(e){var t=e.makeLargeImg;return e.images.map((function(e){var a=e.id,r=e.webformatURL,n=e.largeImageURL,o=e.tags;return Object(S.jsx)("li",{className:L.a.ImageGalleryItem,children:Object(S.jsx)("img",{className:L.a.ImageGalleryItem__image,src:r,alt:o,onClick:function(){return t(n,o)}})},a)}))},N=a(26),C=a.n(N),F=function(e){var t=e.images,a=e.makeLargeImg;return Object(S.jsx)("ul",{className:C.a.ImageGallery,children:Object(S.jsx)(w,{makeLargeImg:a,images:t})})},G=a(13),U=a.n(G),q=document.querySelector("#modal-root"),M=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).onKeyDown=function(t){"Escape"===t.code&&e.props.makeLargeImg()},e.onClickModal=function(t){t.currentTarget===t.target&&e.props.makeLargeImg()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(Object(S.jsx)("div",{className:U.a.Overlay,onClick:this.onClickModal,children:Object(S.jsx)("div",{className:U.a.Modal,children:e})}),q)}}]),a}(r.Component),A=a(27),Q=a.n(A),D=function(e){var t=e.onClick;return Object(S.jsx)("button",{className:Q.a.Button,type:"button",onClick:function(){return t()},children:"Load more..."})},R=a(28),B=a.n(R),E=(a(75),a(29)),J=a.n(E),T=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(S.jsx)(B.a,{className:J.a.Loader,timeout:3e3,type:"ThreeDots",color:"rgb(61, 61, 61)",height:80,width:80})}}]),a}(r.Component),W=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!1,largeURL:"",images:[],query:"",pageNumber:1,error:null,tags:""},e.makeLargeImg=function(t,a){return console.log(t,a),e.setState({largeURL:t,tags:a})},e.onSubmit=function(t){e.setState({query:t,images:[],pageNumber:1,largeURL:"",error:null,tags:""})},e.getImages=function(){var t=e.state,a=t.query,r=t.pageNumber;e.setState({isLoading:!0}),y({query:a,pageNumber:r}).then((function(t){return e.setState((function(e){var a=e.images,r=e.pageNumber;return{images:[].concat(Object(i.a)(a),Object(i.a)(t)),pageNumber:r+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.query!==t.query&&this.getImages(),this.state.pageNumber>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,r=e.largeURL,n=e.error,o=e.tags;return Object(S.jsxs)("div",{className:h.a.App,children:[n&&Object(S.jsxs)("span",{style:{color:"red",fontSize:46},children:["Something went wrong:",n.message]}),Object(S.jsx)(x,{onSubmit:this.onSubmit}),Object(S.jsx)(F,{makeLargeImg:this.makeLargeImg,images:t}),t.length>0&&!a&&Object(S.jsx)(D,{onClick:this.getImages}),a&&Object(S.jsx)(T,{}),r&&Object(S.jsx)(M,{makeLargeImg:this.makeLargeImg,children:Object(S.jsx)("img",{src:r,alt:o})})]})}}]),a}(r.Component);a(76);c.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(W,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__21ZbA",SearchForm:"Searchbar_SearchForm__1JWCa",SearchForm__button:"Searchbar_SearchForm__button__1zoZu",SearchForm__button__label:"Searchbar_SearchForm__button__label__1N0HU",SearchForm__input:"Searchbar_SearchForm__input__1QnU7"}}},[[77,1,2]]]);
//# sourceMappingURL=main.9847a2b6.chunk.js.map