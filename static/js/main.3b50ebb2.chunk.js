(this["webpackJsonpnetwork-mini"]=this["webpackJsonpnetwork-mini"]||[]).push([[0],{13:function(e,t,n){e.exports={header:"Header_header__3PeU9",header__input:"Header_header__input__18a68",header__buttons:"Header_header__buttons__12XHI",notification__img:"Header_notification__img__1eo4I",message__img:"Header_message__img__3arKd",btn__avatar:"Header_btn__avatar__1ivrb",avatar__img:"Header_avatar__img__3VvXp",btn__login:"Header_btn__login__3UwYe"}},16:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3MNNM",dialogs_names:"Dialogs_dialogs_names__3kuxF",name:"Dialogs_name__1cI8p",messages:"Dialogs_messages__19LUJ",message:"Dialogs_message__3Zfqn"}},21:function(e,t,n){e.exports={pagination:"Users_pagination__2eZCI",selectedPage:"Users_selectedPage__2wAM3",unSelectedPage:"Users_unSelectedPage__270WT",grid:"Users_grid__16iPF",userPic:"Users_userPic__3iIwE",status:"Users_status__vQaPY"}},24:function(e,t,n){e.exports={content:"MyPosts_content__2RleL",content__title:"MyPosts_content__title__3-YRQ",content__btn:"MyPosts_content__btn__1R8_R",posts:"MyPosts_posts__XENMa",item:"MyPosts_item__36OWQ"}},29:function(e,t,n){e.exports={wrapper:"Login_wrapper___hm5e",title:"Login_title__1NFlx",form:"Login_form__2I8Bm"}},33:function(e,t,n){e.exports={item:"Post_item__2Oyc_",image:"Post_image__30-km"}},47:function(e,t,n){e.exports={profile:"ProfileInfo_profile__1NBqv"}},55:function(e,t,n){},6:function(e,t,n){e.exports={aside:"Aside_aside__2dMK5",logo:"Aside_logo__StOba",logo__link:"Aside_logo__link__2UqMW",logo__img:"Aside_logo__img__3pr0s",nav:"Aside_nav__2LYnC",item:"Aside_item__tns0j",active:"Aside_active__39TTp"}},79:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(27),c=n.n(i),r=n(8),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))},u=(n(55),n(7)),l=n(4),d=n(6),g=n.n(d),h=n.p+"static/media/follow-us.9fa44bc7.svg",f=n(0),j=function(){return Object(f.jsxs)("aside",{className:g.a.aside,children:[Object(f.jsx)("div",{className:g.a.logo,children:Object(f.jsx)("a",{className:g.a.logo__link,href:"#!",onClick:function(e){return e.preventDefault()},children:Object(f.jsx)("img",{className:g.a.logo__img,src:h,alt:"logo"})})}),Object(f.jsxs)("nav",{className:g.a.nav,children:[Object(f.jsx)(u.b,{to:"/profile",className:g.a.item,activeClassName:g.a.active,children:"Profile"}),Object(f.jsx)(u.b,{to:"/dialogs",className:g.a.item,activeClassName:g.a.active,children:"Messages"}),Object(f.jsx)(u.b,{to:"/users",className:g.a.item,activeClassName:g.a.active,children:"Users"}),Object(f.jsx)("div",{className:g.a.item,children:"Album"}),Object(f.jsx)("div",{className:g.a.item,children:"Events"}),Object(f.jsx)("div",{className:g.a.item,children:"Games"})]})]})},p=n(14),b=n(16),O=n.n(b),m=function(e){var t=e.id,n=e.name,s="/dialogs/".concat(t);return Object(f.jsx)("div",{className:"".concat(O.a.name," ").concat(O.a.active),children:Object(f.jsx)(u.b,{to:s,children:n})})},v=function(e){var t=e.message;return Object(f.jsx)("div",{className:O.a.message,children:t})},P=n(2),x=n(45),w=["isAuth"],A=function(e){return{isAuth:e.auth.isAuth}};function C(e){return Object(r.b)(A)((function(t){var n=t.isAuth,s=Object(x.a)(t,w);return n?Object(f.jsx)(e,Object(P.a)({},s)):Object(f.jsx)(l.a,{to:"/login"})}))}var T=n(15),E={dialogs:[{id:1,name:"Alex"},{id:2,name:"Bob"},{id:3,name:"Dylan"},{id:4,name:"Erica"},{id:5,name:"Felix"},{id:6,name:"Roman1"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"Element =)"}],newMessageBody:""},S=Object(p.c)(Object(r.b)((function(e){return{messagesPage:e.messagesPage,isAuth:e.auth.isAuth}}),(function(e){return{updateNewMessageBody:function(t){e({type:"UPDATE-NEW-MESSAGE-BODY",newMessage:t})},sendMessage:function(){e({type:"SEND-MESSAGE"})}}})),C)((function(e){var t=e.messagesPage,n=e.sendMessage,s=e.updateNewMessageBody,a=t.dialogs.map((function(e){return Object(f.jsx)(m,{name:e.name,id:e.id},e.id)})),i=t.messages.map((function(e){return Object(f.jsx)(v,{message:e.message},e.id)}));return Object(f.jsxs)("div",{className:O.a.dialogs,children:[Object(f.jsx)("div",{className:O.a.dialogs_names,children:a}),Object(f.jsxs)("div",{className:O.a.messages,children:[Object(f.jsx)("div",{children:i}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("textarea",{value:t.newMessageBody,onChange:function(e){return s(e.currentTarget.value)},placeholder:"enter your message"})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"button",onClick:function(){return n()},children:"send"})})]})]})]})})),y=n(17),F=n(18),D=n(19),L=n(20),M=n(13),Y=n.n(M),N=n.p+"static/media/bell.4b504bba.svg",W=n.p+"static/media/chat.1a4e32ad.svg",X=n.p+"static/media/img-1-1.1e7eb5e5.jpg",U=function(e){var t=e.login,n=e.isAuth;return Object(f.jsxs)("div",{className:Y.a.header,children:[Object(f.jsx)("input",{className:Y.a.header__input,type:"text",placeholder:"Search for Friends , Videos and more.."}),Object(f.jsxs)("div",{className:Y.a.header__buttons,children:[Object(f.jsx)("button",{type:"button",className:Y.a.btn__messages,children:Object(f.jsx)("img",{className:Y.a.message__img,src:W,alt:"chat icon"})}),Object(f.jsx)("button",{type:"button",className:Y.a.btn__notifications,children:Object(f.jsx)("img",{className:Y.a.notification__img,src:N,alt:"bell icon"})}),Object(f.jsx)("button",{type:"button",className:Y.a.btn__avatar,children:Object(f.jsx)("img",{className:Y.a.avatar__img,src:X,alt:"avatar pic"})}),Object(f.jsx)("div",{className:Y.a.btn__login,children:n?t:Object(f.jsx)(u.b,{to:"/login",children:"Login"})})]})]})},B=n(46),k=n.n(B).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"3468efd3-2f7f-4b93-a6e1-e707ecfdc4e1"}}),G=function(){return k.get("auth/me").then((function(e){return e.data}))},_=function(e){return k.get("profile/".concat(e)).then((function(e){return e.data}))},I=function(e){return k.get("profile/status/".concat(e)).then((function(e){return e.data}))},K=function(e){return k.put("profile/status",{status:e}).then((function(e){return e.data}))},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return k.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},J=function(e){return k.delete("follow/".concat(e)).then((function(e){return e.data}))},H=function(e){return k.post("follow/".concat(e)).then((function(e){return e.data}))},R=function(e){return _(e)},V={email:"",id:null,login:"",isAuth:!1},Z=function(e){Object(D.a)(n,e);var t=Object(L.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(f.jsx)(U,Object(P.a)({},this.props))}}]),n}(a.a.Component),Q=Object(r.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){G().then((function(t){if(0===t.resultCode){var n=t.data,s=n.email,a=n.id,i=n.login;e(function(e,t,n){return{type:"SET_USER_DATA",data:{email:e,userId:t,login:n}}}(s,a,i))}}))}}})(Z),q=n(29),$=n.n(q),ee=function(){return Object(f.jsxs)("div",{className:$.a.wrapper,children:[Object(f.jsx)("h3",{className:$.a.title,children:"Sign In"}),Object(f.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:$.a.form,children:[Object(f.jsxs)("label",{htmlFor:"loginEmail",children:[Object(f.jsx)("div",{children:"E-mail:"}),Object(f.jsx)("input",{id:"loginEmail",type:"email"})]}),Object(f.jsxs)("label",{htmlFor:"loginPassword",children:[Object(f.jsx)("div",{children:"Password:"}),Object(f.jsx)("input",{id:"loginPassword",type:"password",autoComplete:"on"})]}),Object(f.jsx)("button",{type:"submit",children:"Login"})]})]})},te=n(24),ne=n.n(te),se=n(33),ae=n.n(se),ie=function(e){var t=e.id,n=e.likesCount,s=e.postText;return Object(f.jsxs)("div",{className:ae.a.item,children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:["Post ",t]}),Object(f.jsxs)("span",{children:[" | ",n," likes"]})]}),Object(f.jsx)("img",{className:ae.a.image,src:"https://picsum.photos/180?random=",alt:""}),Object(f.jsx)("p",{children:s})]})},ce={newPostText:"",profile:null,posts:[{id:1,postText:"Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing.",likesCount:12},{id:2,postText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti?",likesCount:101},{id:3,postText:"Lorem ipsum dolor",likesCount:3},{id:4,postText:"Deleniti?",likesCount:0}],status:""},re=function(e){return{type:"SET_STATUS",status:e}},oe=Object(r.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){e({type:"UPDATE-NEW-POST-TEXT",newText:t})},addPost:function(t){e({type:"ADD-POST",postText:t})}}}))((function(e){var t=e.posts,n=e.addPost,s=e.newPostText,a=e.updateNewPostText,i=t.map((function(e){return Object(f.jsx)(ie,{id:e.id,postText:e.postText,likesCount:e.likesCount},e.id)}));return Object(f.jsxs)("div",{className:ne.a.content,children:[Object(f.jsx)("h2",{className:ne.a.content__title,children:"My Posts"}),Object(f.jsx)("div",{children:Object(f.jsx)("textarea",{value:s,onChange:function(e){a(e.currentTarget.value)}})}),Object(f.jsxs)("button",{type:"button",className:ne.a.content__btn,onClick:function(){return n(s)},children:[" ","+ New Post"]}),Object(f.jsx)("div",{className:ne.a.posts,children:i})]})})),ue=n.p+"static/media/spinner3.b51df3f3.gif",le=function(){return Object(f.jsx)("img",{style:{width:"60px"},src:ue,alt:"pre loader"})},de=n(47),ge=n.n(de),he=function(e){Object(D.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(y.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.activateEditMode=function(){e.setState({editMode:!0})},e}return Object(F.a)(n,[{key:"componentDidUpdate",value:function(e){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:this.state.editMode?Object(f.jsx)("div",{children:Object(f.jsx)("input",{onChange:this.onStatusChange,onBlur:this.deactivateEditMode,type:"text",value:this.props.status,autoFocus:!0})}):Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"-------"})})})}}]),n}(a.a.Component),fe=function(e){var t=e.profile,n=e.status,s=e.updateStatus;return t?Object(f.jsx)("div",{className:ge.a.profile,children:Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"status: "}),Object(f.jsx)(he,{status:n,updateStatus:s})]})}):Object(f.jsx)(le,{})},je=function(e){var t=e.profile,n=e.status,s=e.updateStatus;return Object(f.jsxs)("div",{children:[Object(f.jsx)(fe,{profile:t,status:n,updateStatus:s}),Object(f.jsx)(oe,{})]})},pe=function(e){Object(D.a)(n,e);var t=Object(L.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=Number("20613")),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(f.jsx)(je,Object(P.a)(Object(P.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(a.a.Component),be=Object(p.c)(Object(r.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){R(e).then((function(e){t({type:"SET_USER_PROFILE",profile:e})}))}},getStatus:function(e){return function(t){I(e).then((function(e){t(re(e))}))}},updateStatus:function(e){return function(t){K(e).then((function(n){0===n.data.resultcode&&t(re(e))}))}}}),l.g)(pe),Oe=n(21),me=n.n(Oe),ve=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s+=1)n.push(s);return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:me.a.pagination,children:n.map((function(t){return Object(f.jsx)("button",{type:"button",className:e.currentPage===t?me.a.selectedPage:me.a.unSelectedPage,onClick:function(){return e.onPageChanged(t)},children:t},(new Date).toLocaleDateString())}))}),Object(f.jsx)("div",{className:me.a.grid,children:e.users.map((function(t){return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(u.b,{to:"/profile/".concat(t.id),children:Object(f.jsx)("img",{src:null!==t.photos.small?t.photos.small:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAMAAABKCk6nAAAC91BMVEUAAAAcovcbovcomvgfoPcao/ctl/ginfcfn/cmm/cknPcjnfc5j/k0kvkzk/gyk/gqmPcomvchnvcgn/YeoPcYpPY5j/kyk/gsl/ceoPYYpPYhnvc3kfkulvgcofY7jvk6j/kvlfgcofYVpvYxlPgxlfgao/YWpfYnm/czk/gyk/gXpPYVpvY0kvg2kfgYpPY3kfgUpvZAi/k4kPgXpfY6j/hGh/oXpPZUf/s7jvkWpfZDifpDifo9jfk+jPkTp/ZAi/kUpvYUp/ZCiflMg/pMg/pEiPlKhfoUpvZGh/lTf/tIhvoTp/VkdPxWfftJhfoTp/VQgftVfvtRgPtLhPpOgvpQgfpRgfpRgPplrflTf/pSm/qIwvuXx/u82/zJ4fzY5/37+/5gsPlGo/mz0vyu1fxUf/pJk/lwtPqjzvw4nvhUfvp6vPrv9f6KsvtnnftSqflcefxVfvtWfftXfftYfPuVuvxbevtypftZe/t6o/tocvzF1f1pcvywxv1bevtelPpSjvpjdfxcefvx9P5jdfxeePtubv1mc/xpcfxgd/thdvvk7f1vbf1jdfxidvykvvx0a/1pcf3O3v2dtfxldPxZiPq6zvxybP1xlvxncvyGpvxpcfxrcPzo6/5ojvuYqv1xbf1tbvzU2/1vbvyruvxvbf3Ayv11av1vbf1wbf17kPyJXf9xbf2DmvxybP18Zv5za/15aP55aP51af1/ZP58Zf5zh/x3aP15Z/2QoP3e4/65wP57Zv18Zf18Zf59Zf5ufPyIXv/N0f6Klfx/ZP6vuP2gwfuBYv6BY/6CYv6EYf6BjfyGX/6OWv+JXf+mr/2OWv+OWv+IXv6PWf9ghPtngfuKXf+PWf9/gP2Xjf2PhP19cv21tP3b1v7s6f7Fx/6Ym/3l3/7z8v6OWv+MXP+wqf3Nwv6ipP2NW/+unP6QWf+OWv+PWf+QWf+PWf++r/6QWf+RdP63pP6giP6QWf+QWf/Fuf6QWf+Laf6afv6okf7Wy/5J5RPuAAAA+XRSTlMAEEBQgLDAwND///9AgJDw//////CQYNL//2BwsP//MKD/oDD////AIP//8FD/////oOD/4P9Q/xD///DA///Q///w/3PQ/5Dg/7D//yBg//CgMO///////////////////////////////////////9D///////D////A/5D/////UP//oP+AQOD///8w////cPD//////2D//////////7D/////QP+g////EP///1D/8ND/wED//////////////4D//////7D//////9DA/1BA//D///9g//////////////+Q/////6D/MP+wwHD/IP///6D//+BbeZqXAAAg3klEQVR4AezYU2JEMRiG4RwEY9u2vf+N9avdJmc88z/XuXtjdrMs23Zc1+VCSuV74X8ReKKklBxDHNu22JUgVtAJhYWIRGMf+H4uDPEXiaSUKde55NJUNh0SmWz0jUlhSADklHTz1PmyBAthEcm+2LMwEj9KylTBZmdHgqFipgRZ0CkMeoWhXFbcPVtlUklXM7XSi6MURmJQ9XyDkZMv3EgNwGth0CwMydMtZVIpiCa0Wp8Kw9+FwXthaLc7hWOvZNJNFyNN0C0MByuMxO0kz3fZkZBgONOD/jkLg0rZ7NCI5VQjPbiAwjCoDy12MMRKF0ePLqcw8PyhGlPd8Rh1fygMZyh8yMYEdZ+MXlxSYZjwPPOMBKuRKVx04clgZjMPSDc0X8DPhUGnsPnHtHlhWLpdZoakiws4V2EwKAy0VRvphiOr1eqaCsMg1WU6yLq4ArPCrWMVBt3Cmw0fsn+QbXq+e2DfLnDtBmIoDOuR8D5hmQVl5svMzMn+V9JTch5OY3UUxR7/W/gUmBwFtpkJ88cll3D5ix2c/nFvrpSQMGFEwmW7U1/f4yclxBB2ftS643FcYgijjzY6XVWhWqvVfArzD8R+hNHzK4/GxitH2PEgLhvx5W59qgPXJYxkCeN9y1wTXpRWGAkQJmKrcBu6XoRRnoRR49B4q81mnYT/lFIY5V249Txs4sfgRZqFW8/DPTS9eAJchzA6JyxiXKLjEgm3Pob56aN4WgFtOmEkVhjE7eODAF+dKx3AChFG/yMM4nvBvVt1UEDCYb1tFZ9Aly+cs+mBJYw+HoTi263AVrwwYgq374dxNOr1+52MhBFT2P/0QMKoof/IVBz0kVs4IdYxH5Iwunmg2/fbJ+gyhCWOS27h4RvNl+8D0IYkjC4Jt04O1F6+lVHflzASK9zWeREXxyPkXxhJE8ZFrPLyRXxhpGc+bOm8iOnyTSese1zSeREXPk1GSVcJEzF/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",alt:"avatar",className:me.a.userPic})})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{type:"button",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(f.jsx)("button",{type:"button",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){return e.follow(t.id)},children:"Follow"})}),Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{className:me.a.status,children:t.status}),Object(f.jsx)("div",{children:"u.location.country"}),Object(f.jsx)("div",{children:"u.location.city"})]},t.id)}))})]})},Pe={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},xe=function(e){return{type:"SET_USERS",users:e}},we=function(e){return{type:"SET_TOTAL_COUNT",count:e}},Ae=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Ce=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},Te=function(e){Object(D.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(y.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsersThunkCreator(t,e.props.pageSize)},e}return Object(F.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(le,{}):null,Object(f.jsx)(ve,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),Ee=Object(p.c)(C,Object(r.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(Ce(!0,e)),H(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(Ce(!1,e))}))}},unfollow:function(e){return function(t){t(Ce(!0,e)),J(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(Ce(!1,e))}))}},setUsers:xe,setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},setUsersTotalCount:we,toggleIsFetching:Ae,toggleIsFollowingProgress:Ce,getUsersThunkCreator:function(e,t){return function(n){n(Ae(!0)),z(e,t).then((function(e){n(Ae(!1)),n(xe(e.items)),n(we(e.totalCount))}))}}}))(Te),Se=function(){return Object(f.jsx)(u.a,{children:Object(f.jsx)(l.d,{children:Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)(j,{}),Object(f.jsxs)("main",{className:"main",children:[Object(f.jsx)(Q,{}),Object(f.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(f.jsx)(l.a,{to:"/profile"})}}),Object(f.jsx)(l.b,{path:"/profile/:userId?",render:function(){return Object(f.jsx)(be,{})}}),Object(f.jsx)(l.b,{path:"/dialogs",render:function(){return Object(f.jsx)(S,{})}}),Object(f.jsx)(l.b,{path:"/users",render:function(){return Object(f.jsx)(Ee,{})}}),Object(f.jsx)(l.b,{path:"/login",render:function(){return Object(f.jsx)(ee,{})}})]})]})})})},ye=n(48),Fe={users:[]},De=Object(p.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,postText:t.postText,likesCount:0};return Object(P.a)(Object(P.a)({},e),{},{posts:[].concat(Object(T.a)(e.posts),[n]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(P.a)(Object(P.a)({},e),{},{newPostText:t.newText});case"SET_USER_PROFILE":return Object(P.a)(Object(P.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(P.a)(Object(P.a)({},e),{},{status:t.status});default:return e}},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-BODY":return Object(P.a)(Object(P.a)({},e),{},{newMessageBody:t.newMessage});case"SEND-MESSAGE":var n=e.newMessageBody;return Object(P.a)(Object(P.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(T.a)(e.messages),[{id:6,message:n}])});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_COUNT":return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(T.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;return"SET_USER_DATA"===t.type?Object(P.a)(Object(P.a)(Object(P.a)({},e),t.data),{},{isAuth:!0}):e},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(P.a)(Object(P.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(P.a)(Object(P.a)({},e),{},{users:[].concat(Object(T.a)(e.users),Object(T.a)(t.users))});default:return e}}}),Le=Object(p.d)(De,Object(p.a)(ye.a));window.store=Le;var Me=Le;c.a.render(Object(f.jsx)(r.a,{store:Me,children:Object(f.jsx)(Se,{})}),document.getElementById("root")),o()}},[[79,1,2]]]);
//# sourceMappingURL=main.3b50ebb2.chunk.js.map