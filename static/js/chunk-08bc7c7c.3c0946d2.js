(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08bc7c7c"],{"08e4":function(t,e,s){},7497:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"higtlight"},[s("section",{staticClass:"about-bg"},[s("img",{staticClass:"bg-img",attrs:{src:t.$staticUrl+t.banners[3].url}}),s("div",{staticClass:"bg"}),s("p",{staticClass:"mgs-title"},[t._v("Say Hello~")]),s("div",{staticClass:"input-main"},[s("div",{staticClass:"input-box main"},[s("div",{staticClass:"userbox"},[s("div",{staticClass:"user-img"},[s("img",{attrs:{src:t.user.avatar_url||"https://avatars.dicebear.com/v2/identicon/id-"+t.user.id+".svg"}}),s("h4",[t._v(t._s(t.user.name||"未登录"))])])]),s("div",{staticClass:"textbox"},[s("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:8},maxlength:400,placeholder:t.textarea},model:{value:t.message.content,callback:function(e){t.$set(t.message,"content",e)},expression:"message.content"}}),s("div",{staticClass:"submit-box"},[s("Button",{attrs:{type:"primary"},on:{click:t.submitMessage}},[s("Icon",{attrs:{type:"ios-create"}}),t._v("\n              提交评论\n            ")],1)],1)],1)])])]),t.loading?s("MyLoading"):s("section",{staticClass:"main"},[t._l(t.messageList,function(e,a){return s("div",{key:a,staticClass:"commentList"},[s("div",{staticClass:"user-ava"},[e.user?s("img",{attrs:{src:e.user.avatar_url||"https://avatars.dicebear.com/v2/identicon/id-"+e.user.id+".svg",onerror:"this.src='https://avatars.dicebear.com/v2/identicon/id-undefined.svg'",alt:"hasLogin"}}):s("img",{attrs:{src:"https://avatars.dicebear.com/v2/identicon/id-undefined.svg",alt:"unLogin"}})]),s("div",{staticClass:"comment-box animate03"},[s("div",{staticClass:"username"},[s("span",[s("Icon",{attrs:{type:"md-person"}}),t._v("\n            "+t._s(e.user?e.user.name:e.name?"游客（"+e.name+"）":"游客")+" \n            "),s("em",[t._v(t._s(1==e.user_id?"(博主)":""))]),s("span",{staticClass:"created"},[s("i",{staticClass:"el-icon-time"}),t._v(t._s(e.created_at))])],1),s("span",{staticClass:"floor"},[t._v(t._s(e.id)+"楼")])]),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"com_detail",domProps:{innerHTML:t._s(e.content)}}),s("div",{staticClass:"delete"},[s("Poptip",{attrs:{confirm:"",placement:"left",title:"是否删除该留言?"},on:{"on-ok":function(s){return t.deleteComment(e)}}},[e.user_id==t.user.id&&e.user_id?s("Icon",{attrs:{type:"md-trash"}}):t._e()],1)],1)])])}),t.pageModel.sumCount>10?s("MyPage",{attrs:{pageModel:t.pageModel},on:{selectList:t.selectRoleList}}):t._e()],2)],1)},i=[],n=(s("8e6e"),s("456d"),s("ac6a"),s("bd86")),c=s("2f62"),o=s("0e54"),r=s.n(o);s("bc07");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(s,!0).forEach(function(e){Object(n["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var d={data:function(){return{textarea:"支持markdown语法，尾部2个空格后回车才会换行，最长400个字",autofocus:!1,loading:!0,messageList:[],message:{content:"",ykname:""},pageModel:{page:1,sumCount:10},page:2,hasMore:!0}},computed:l({},Object(c["c"])(["user","banners"]),{compiledMarkdown:function(){return r()(this.detail.content,{sanitize:!1})}}),created:function(){this.getMessage()},methods:{getMessage:function(){var t=this;this.$post("/apis/message/list",this.pageModel).then(function(e){t.loading=!1,t.pageModel.sumCount=e.data.total,t.messageList=e.data.data,t.messageList.forEach(function(t){t.content=r()(t.content,{sanitize:!1})})}).catch(function(){})},selectRoleList:function(){this.getMessage()},submitMessage:function(){var t=this;this.$post("/apis/message/add",this.message).then(function(e){t.getMessage(),t.$Message.success(e.message),t.message={content:"",name:""}}).catch(function(){})},deleteComment:function(t){var e=this;this.$post("/apis/message/delete",{id:t.id}).then(function(s){e.messageList.splice(e.messageList.indexOf(t),1),e.$Message.success(s.message)}).catch(function(){})},reply:function(t){this.autofocus=!0,this.message.content="",this.message.reply_id=t,this.textarea="回复 ".concat(t,"楼")}}},m=d,g=(s("ff43"),s("2877")),p=Object(g["a"])(m,a,i,!1,null,"3fca931a",null);e["default"]=p.exports},bc07:function(t,e,s){},ff43:function(t,e,s){"use strict";var a=s("08e4"),i=s.n(a);i.a}}]);