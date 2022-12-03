"use strict";(self.webpackChunkreact_monkey_blogging_boilerplate=self.webpackChunkreact_monkey_blogging_boilerplate||[]).push([[952,333],{8080:function(n,e,t){t.r(e);var r,a=t(168),i=(t(2791),t(6871)),o=t(6031),s=t(184),c=o.ZP.div(r||(r=(0,a.Z)(["\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: ",";\n  color: white;\n  .page-content {\n    max-width: 1000px;\n    margin: 0 auto;\n    text-align: center;\n  }\n  .logo {\n    display: inline-block;\n    margin-bottom: 40px;\n  }\n  .heading {\n    font-size: 60px;\n    font-weight: bold;\n    margin-bottom: 20px;\n  }\n  .description {\n    max-width: 800px;\n    margin: 0 auto 40px;\n  }\n  .back {\n    display: inline-block;\n    padding: 15px 30px;\n    color: white;\n    background-image: linear-gradient(\n      to right top,\n      ",",\n      ","\n    );\n    border-radius: 8px;\n    font-weight: 500;\n  }\n  .image {\n    max-width: 250px;\n    margin: 0 auto 40px;\n  }\n"])),(function(n){return n.theme.black}),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary}));e.default=function(){var n=(0,i.s0)();return(0,s.jsx)(c,{children:(0,s.jsxs)("div",{className:"page-content",children:[(0,s.jsx)("img",{src:"/404.png",alt:"notfound",className:"image"}),(0,s.jsx)("h1",{className:"heading",children:"404 - Looks like you're lost."}),(0,s.jsx)("p",{className:"description",children:"Maybe this page used to exist or you just spelled something wrong. Chances are your spelled something wrong, so can you double check the URL?"}),(0,s.jsx)("button",{onClick:function(){return n("/")},className:"back",children:"Go back"})]})})}},9952:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,i=t(1413),o=t(5861),s=t(9439),c=t(168),d=t(7757),l=t.n(d),m=t(6031),u=t(2791),p=t(7386),h=t(1199),x=t(9062),f=t(9748),g=t(184),v=function(n){var e=n.categoryId,t=void 0===e?"":e,r=(0,u.useState)([]),a=(0,s.Z)(r,2),o=a[0],c=a[1];return(0,u.useEffect)((function(){var n=(0,x.IO)((0,x.hJ)(h.db,"posts"),(0,x.ar)("categoryId","==",t));(0,x.cf)(n,(function(n){var e=[];n.forEach((function(n){e.push((0,i.Z)({id:n.id},n.data()))})),c(e)}))}),[t]),!t||o.length<=0?null:(0,g.jsxs)("div",{className:"post-related mx-auto",children:[(0,g.jsx)(p.Z,{children:"B\xe0i vi\u1ebft li\xean quan"}),(0,g.jsx)("div",{className:"grid-layout grid-layout--primary",children:o.map((function(n){return(0,g.jsx)(f.Z,{data:n},n.id)}))})]})},b=t(6795),_=t(7149),j=t(238),y=t(8080),w=t(2185),N=function(n){var e=n.userId,t=void 0===e?"":e,r=(0,u.useState)({}),a=(0,s.Z)(r,2),i=a[0],c=a[1];return(0,u.useEffect)((function(){function n(){return(n=(0,o.Z)(l().mark((function n(){var e,r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,x.JU)(h.db,"users",t),n.next=3,(0,x.QT)(e);case 3:(r=n.sent).data()&&c(r.data());case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),t&&i.username?(0,g.jsxs)("div",{className:"author",children:[(0,g.jsx)("div",{className:"author-image",children:(0,g.jsx)("img",{src:null===i||void 0===i?void 0:i.avatar,alt:""})}),(0,g.jsxs)("div",{className:"author-content",children:[(0,g.jsx)("h3",{className:"author-name",children:null===i||void 0===i?void 0:i.fullname}),(0,g.jsx)("p",{className:"author-desc",children:null===i||void 0===i?void 0:i.description})]})]}):null},k=t(3504),Z=t(6871),I=t(9808),E=t(3585),z=t(4167),S=t(6431),C=t.n(S),D=function(n){var e,t=n.comment,r=n.user,a=n.postId,i=function(){var n=(0,o.Z)(l().mark((function n(e){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm("Are you sure to delete this comment?")||r.uid!==(null===t||void 0===t?void 0:t.userId)){n.next=10;break}return n.prev=2,n.next=5,(0,x.oe)((0,x.JU)(h.db,"posts",a,"comments",e));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[2,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,g.jsxs)("div",{className:"post-comment__item",children:[(0,g.jsx)("div",{className:"post-comment__item__avatar",children:(0,g.jsx)("img",{src:t.avatar,alt:""})}),(0,g.jsxs)("div",{className:"post-comment__item__content relative mb-5",children:[(0,g.jsxs)("div",{className:"post-comment__item__content__info",children:[(0,g.jsx)("h4",{className:"post-comment__item__content__info__name",children:t.username}),(0,g.jsx)("span",{className:"post-comment__item__content__info__date",children:(0,g.jsx)(C(),{className:"text-sm",fromNow:!0,children:null===(e=t.timestamp)||void 0===e?void 0:e.toDate()})})]}),(0,g.jsxs)("div",{className:"post-comment__item__content__text flex flex-col gap-y-5",children:[(0,g.jsx)("p",{children:t.comment}),(0,g.jsx)("div",{className:"post-comment__action absolute right-0 top-[100%] z-10",children:(null===r||void 0===r?void 0:r.uid)===(null===t||void 0===t?void 0:t.userId)&&(0,g.jsx)("button",{className:"btn-action",onClick:function(){return i(t.id)},children:"X\xf3a"})})]})]})]})},J=m.ZP.div(r||(r=(0,c.Z)(["\n  .post-comment {\n    max-width: 1000px;\n    margin: 100px auto;\n    &__heading {\n      margin-bottom: 2rem;\n      font-weight: 600;\n    }\n    &__form {\n      margin-bottom: 2rem;\n      form {\n        .form-group {\n          textarea {\n            width: 100%;\n            height: 200px;\n            border: 1px solid #ccc;\n            border-radius: 8px;\n            padding: 1rem;\n            resize: none;\n          }\n        }\n      }\n    }\n    &__list {\n      .post-comment__item {\n        display: flex;\n        align-items: flex-start;\n        margin-bottom: 2rem;\n        border-radius: 8px;\n        &:last-child {\n          margin-bottom: 0;\n        }\n        &__avatar {\n          margin-right: 1rem;\n          width: 52px;\n          height: 52px;\n          img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            border-radius: 100rem;\n          }\n        }\n        &__content {\n          padding: 1rem;\n          background-color: ",";\n          border-radius: 8px;\n          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n          flex: 1;\n          &__info {\n            display: flex;\n            align-items: center;\n            margin-bottom: 1rem;\n            &__name {\n              font-weight: 600;\n              margin-right: 1rem;\n            }\n            &__date {\n              color: #999;\n            }\n          }\n          &__text {\n            p {\n              color: #333;\n            }\n          }\n        }\n      }\n    }\n  }\n  .btn {\n    display: block;\n    margin-left: auto;\n    &--primary {\n      background-color: ",";\n      color: #fff;\n      padding: 1rem 2rem;\n      border-radius: 8px;\n      border: none;\n      cursor: pointer;\n      transition: all 0.3s;\n      &:hover {\n        background-color: ",";\n        color: #fff;\n        opacity: 0.8;\n      }\n    }\n    &-action {\n      border: none;\n      color: ",";\n      transform: translate(-50%, 50%);\n    }\n  }\n  @media screen and (max-width: 1023.98px) {\n    .post-comment {\n      &__form {\n        form {\n          .form-group {\n            textarea {\n              height: 100px;\n            }\n          }\n        }\n      }\n    }\n    &__list {\n      .post-comment__item {\n        &__avatar {\n          max-width: 40px;\n          margin-right: 1rem;\n        }\n      }\n    }\n    .btn {\n      &--primary {\n        padding: 15px 20px;\n      }\n    }\n  }\n"])),(function(n){return n.theme.grayF3}),(function(n){return n.theme.primary}),(function(n){return n.theme.primary}),(function(n){return n.theme.black})),L=function(n){var e=n.postId,t=n.user,r=u.useState(""),a=(0,s.Z)(r,2),c=a[0],d=a[1],m=u.useState([]),p=(0,s.Z)(m,2),f=p[0],v=p[1],b=u.useState(!1),_=(0,s.Z)(b,2),j=_[0],y=_[1];(0,u.useEffect)((function(){var n=(0,x.hJ)(h.db,"posts",e,"comments");(0,x.cf)(n,(function(n){var e=n.docs.map((function(n){return(0,i.Z)({id:n.id},n.data())}));v(e)}))}),[e]);var w=function(){var n=(0,o.Z)(l().mark((function n(r){var a;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),y(!0),a=c,d(""),n.next=6,(0,x.ET)((0,x.hJ)(h.db,"posts",e,"comments"),{comment:a,username:t.fullname,avatar:t.avatar,userId:t.uid,timestamp:(0,x.Bt)()});case 6:y(!1);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,g.jsx)(J,{children:(0,g.jsxs)("div",{className:"post-comment",children:[(0,g.jsx)("div",{className:"post-comment__heading",children:(0,g.jsx)("h3",{className:"heading",children:"B\xecnh lu\u1eadn"})}),(0,g.jsx)("div",{className:"post-comment__form",children:(0,g.jsxs)("form",{children:[(0,g.jsx)("div",{className:"form-group",children:(0,g.jsx)("textarea",{placeholder:"Nh\u1eadp b\xecnh lu\u1eadn c\u1ee7a b\u1ea1n",value:c,onChange:function(n){return d(n.target.value)}})}),(0,g.jsx)("div",{className:"form-group",children:(0,g.jsx)(z.z,{type:"submit",onClick:w,className:"btn btn--primary",isLoading:j,disabled:!c.trim(),children:"G\u1eedi b\xecnh lu\u1eadn"})})]})}),f.length>0&&(0,g.jsx)("div",{className:"post-comment__list",children:f.map((function(n){return(0,g.jsx)(D,{comment:n,user:t,postId:e},n.id)}))})]})})},U=m.ZP.div(a||(a=(0,c.Z)(["\n  padding-bottom: 100px;\n  .post {\n    &-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      gap: 40px;\n      margin: 40px 0;\n    }\n    &-feature {\n      width: 100%;\n      max-width: 640px;\n      height: 466px;\n      border-radius: 20px;\n    }\n    &-heading {\n      font-weight: bold;\n      font-size: 36px;\n      margin-bottom: 16px;\n    }\n    &-info {\n      flex: 1;\n    }\n    &-content {\n      max-width: 800px;\n      margin: 80px auto;\n    }\n  }\n  .author {\n    margin-top: 40px;\n    margin-bottom: 80px;\n    display: flex;\n    border-radius: 20px;\n    background-color: ",";\n    &-image {\n      width: 200px;\n      height: 200px;\n      flex-shrink: 0;\n      border-radius: inherit;\n    }\n    &-image img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      border-radius: inherit;\n    }\n    &-content {\n      flex: 1;\n      padding: 20px;\n    }\n    &-name {\n      font-weight: bold;\n      margin-bottom: 10px;\n      font-size: 20px;\n    }\n    &-desc {\n      font-size: 14px;\n      line-height: 2;\n    }\n  }\n  @media screen and (max-width: 1023.98px) {\n    padding-bottom: 40px;\n    .post {\n      &-header {\n        flex-direction: column;\n      }\n      &-feature {\n        height: auto;\n      }\n      &-heading {\n        font-size: 26px;\n      }\n      &-content {\n        margin: 40px 0;\n      }\n    }\n    .author {\n      flex-direction: column;\n      &-image {\n        width: 100%;\n        height: auto;\n      }\n    }\n  }\n"])),(function(n){return n.theme.grayF3})),A=function(){var n,e,t,r,a,c=(0,Z.UO)().slug,d=(0,u.useState)({}),m=(0,s.Z)(d,2),p=m[0],f=m[1];(0,u.useEffect)((function(){function n(){return(n=(0,o.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c){n.next=2;break}return n.abrupt("return");case 2:e=(0,x.IO)((0,x.hJ)(h.db,"posts"),(0,x.ar)("slug","==",c)),(0,x.cf)(e,(function(n){n.forEach((function(n){n.data()&&f((0,i.Z)({id:n.id},n.data()))}))}));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[c]),(0,u.useEffect)((function(){document.body.scrollIntoView({behavior:"smooth",block:"start"})}),[c]);var z=(0,I.a)().userInfo;if(!c)return(0,g.jsx)(y.default,{});if(!p.title)return null;var S=p.user,C=null!==p&&void 0!==p&&null!==(n=p.createdAt)&&void 0!==n&&n.seconds?new Date(1e3*(null===p||void 0===p||null===(e=p.createdAt)||void 0===e?void 0:e.seconds)):new Date,D=new Date(C).toLocaleDateString("vi-VI");return(0,g.jsx)(U,{children:(0,g.jsx)(w.Z,{children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsxs)("div",{className:"post-header",children:[(0,g.jsx)(_.Z,{url:p.image,className:"post-feature"}),(0,g.jsxs)("div",{className:"post-info",children:[(0,g.jsx)(j.Z,{className:"mb-6",to:null===(t=p.category)||void 0===t?void 0:t.slug,children:null===(r=p.category)||void 0===r?void 0:r.name}),(0,g.jsx)("h1",{className:"post-heading",children:p.title}),(0,g.jsx)(b.Z,{authorName:p.user.fullname,date:D}),(null===z||void 0===z?void 0:z.role)===E.xZ.ADMIN&&(0,g.jsx)(k.rU,{to:"/manage/update-post?id=".concat(p.id),className:"inline-block px-4 py-2 mt-5 text-sm border border-gray-400 rounded-md",children:"Edit post"})]})]}),(0,g.jsxs)("div",{className:"post-content",children:[(0,g.jsx)("div",{className:"entry-content",dangerouslySetInnerHTML:{__html:p.content||""}}),(0,g.jsx)(N,{userId:S.id})]}),(0,g.jsx)(v,{categoryId:null===p||void 0===p||null===(a=p.category)||void 0===a?void 0:a.id}),(0,g.jsx)(L,{postId:null===p||void 0===p?void 0:p.id,user:z})]})})})}}}]);
//# sourceMappingURL=952.373a1fbb.chunk.js.map