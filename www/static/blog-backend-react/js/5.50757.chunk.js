(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{615:function(e,t,a){"use strict";a.r(t);a(363);var n=a(176),i=(a(358),a(80)),r=(a(359),a(163)),l=(a(86),a(24)),o=a(30),s=(a(160),a(91)),c=a(25),d=a(26),h=a(29),p=a(27),u=a(28),g=(a(162),a(55)),m=a(1),f=a.n(m),b=a(195),y=a(175),E=a(73),S=a(336),C=a(41),v=function(e){return{type:S.a,data:e}};var w=a(159),k=a(205),z=g.a.Option,O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={tableLoading:!1,editVisible:!1,editTag:{},delModelVisible:!1,pageSize:10,page:1},a.onEdit=function(e){console.log("record",e),a.setState({editTag:e,editVisible:!0})},a.onDelete=function(e){Object(w.d)({id:e.id}).then(function(e){s.a.success("\u5220\u9664\u6210\u529f\uff01"),a.props.fetchData()}).catch(function(e){s.a.error(e)})},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchData({pageSize:this.state.pageSize,page:this.state.page})}},{key:"onPageChange",value:function(e){this.setState({page:e}),this.fetch({page:e,pageSize:this.state.pageSize})}},{key:"onShowSizeChange",value:function(e){this.setState({pageSize:e}),this.fetch({page:1,pageSize:e})}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;console.log("this.props",this.props);var a=this.props.data.data&&this.props.data.data.map(function(e,t){return Object(o.a)({},e,{key:t})})||[],s=[{title:"ID",dataIndex:"id",key:"id",width:200,render:function(e){return f.a.createElement("span",{className:"resetTd"},e)}},{title:"\u6807\u7b7e\u540d\u79f0",dataIndex:"name",key:"name",width:200,render:function(e){return f.a.createElement("span",{className:"resetTd TdWidth200"},e)}},{title:"\u6807\u7b7e\u7c7b\u578b",dataIndex:"type",key:"type",width:200,render:function(e){return f.a.createElement("span",{className:"resetTd TdWidth200"},e)}},{title:"\u64cd\u4f5c",dataIndex:"operate",key:"operate",width:200,render:function(t,a){return f.a.createElement("div",null,f.a.createElement(l.a,{style:{marginRight:"10px"},onClick:e.onEdit.bind(e,a),type:"primary"},"\u7f16\u8f91"),f.a.createElement(l.a,{style:{marginRight:"10px"},type:"danger",onClick:function(){e.onDelete(a)}},"\u5220\u9664"))}}];return f.a.createElement("div",null,f.a.createElement(l.a,{style:{float:"right"}},"\u65b0\u589e\u6807\u7b7e"),f.a.createElement(b.a,{columns:s,data:a,tableWidth:"1365",tableLoading:this.state.tableLoading}),f.a.createElement(y.a,{handleConfirm:this.handleConfirm,handleCancel:function(){e.setState({delModelVisible:!1})},visible:this.state.delModelVisible,title:"\u5220\u9664",content:"\u786e\u8ba4\u5220\u9664\u8fd9\u4e2a\u6807\u7b7e\u561b\uff1f"}),f.a.createElement(k.a,{onShowSizeChange:this.onShowSizeChange.bind(this),onPageChange:this.onPageChange.bind(this),total:this.props.total,pageSize:this.state.pageSize,current:this.state.page}),f.a.createElement(n.a,{visible:this.state.editVisible,title:"\u7f16\u8f91\u6807\u7b7e"},f.a.createElement(i.a,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},f.a.createElement(i.a.Item,null,t("id",{initialValue:this.state.editTag.id})(f.a.createElement(r.a,{disabled:!0}))),f.a.createElement(i.a.Item,null,t("name",{initialValue:this.state.editTag.name})(f.a.createElement(r.a,null))),f.a.createElement(i.a.Item,null,t("type",{initialValue:this.state.editTag.type})(f.a.createElement(g.a,{onChange:this.onChangeCate},f.a.createElement(z,{value:"category"},"category"),f.a.createElement(z,{value:"tag"},"category")))))))}}]),t}(f.a.Component),j=i.a.create({name:"tag-form"})(O),T=Object(E.b)(function(e){return{data:e.tag.data,total:e.tag.data.count}},function(e){return{fetchData:function(t){e(function(e){return function(t){return Object(C.a)({url:"/api/meta",method:"get",data:e}).then(function(e){t(v(e))}).catch(function(e){console.error("err",e)})}}(Object(o.a)({},t)))}}});t.default=T(j)}}]);