(this.webpackJsonpmagnetontech=this.webpackJsonpmagnetontech||[]).push([[0],{184:function(e){e.exports=JSON.parse("{}")},185:function(e){e.exports=JSON.parse("{}")},188:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i(0),r=i.n(n),o=i(12),s=i.n(o),c=(i(71),i(26)),l=i(4),d=(i(41),i(59)),j=i(60),h=i(64),u=i(63),M=i(17),b=i.n(M),g=i(61),m=i.n(g),p=(i(88),i(40)),O=Object(p.extendMoment)(b.a),T=function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(e,n){var r;Object(d.a)(this,i),(r=t.call(this,e,n)).onSelect=function(e,t){r.setState({value:e,states:t}),r.props.selectDateRange(e)},r.onToggle=function(){r.setState({isOpen:!r.state.isOpen})},r.renderSelectionValue=function(){return Object(a.jsx)("div",{})};O();return r.state={isOpen:!1,startDate:null,endDate:null,visible:!1,value:""},r}return Object(j.a)(i,[{key:"componentDidUpdate",value:function(e){e!==this.state&&this.props.initdate(this.state.startDate,this.state.endDate)}},{key:"componentDidMount",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json",accept:"application/json","x-auth-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXBOUUdrN3ljWG45NmpDa1BEQmRoc00yVjhhVnlVZ1B1VFdhdW1PV2FLS01SNzU2YVREbzUxM1BPb2xPVTlCbndUN3pZQk9PZVBDN1c1RXl0VldIb0NRQkgzRHUyeHhUUmk0TGdCUnh3SnhOaHB3PT0iLCJpc3MiOiJyYWh1bGt1bWFyIiwiZXhwIjoxNjEyNjk0NDEyLCJpYXQiOjE2MTI2MDgwMTIsImp0aSI6IjI0ODFjODI4YjhkMGU4MWE0YWE3OGM0ZGFhNDZiZGU4MmRiZjZlZGQ5MjAxMmNiZDBmMGRmYzEwZjJlM2M1NGE3MzE2OTUxYzc4YTllNWMxZjFlMTgxZWM2NmE5YTA3ZDQ2MTNmMDBiMjQwZDg1M2VmNGY3ODU1NDdhZGZjZTc2ZTEwYTkwNzIyM2ZhNTllYmQyYTY1Y2EwZWFkYTliMzBiZGJjMzUzZGY2MzkxYTBmMzQzMzZmMWU2NmJmN2ZmMmMyMzM2OTJjNmMxNzRlN2ZhMmYyMzcyMzdhMzQwYjhmM2YxN2IwYjQyZDA0YzQ2YzliMTQ0MzRhYjAyOTQ3YWYifQ.1DVKkblfARo3AXXHTYBMoaxbopx1_egRADkBTQBEt8g"},body:JSON.stringify({organization:"DemoTest",view:"Auction"})};fetch("https://sigviewauth.sigmoid.io/api/v1/getDateRange",t).then((function(e){return e.json()})).then((function(t){console.log("date result",t.result.startDate),e.setState({startDate:O(new Date(parseInt(t.result.startDate))),endDate:O(new Date(parseInt(t.result.endDate)))})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:this.renderSelectionValue()}),null!==this.state.startDate?Object(a.jsx)(m.a,{value:this.state.value,onSelect:this.onSelect,singleDateRange:!1,minimumDate:this.state.startDate,maximumDate:this.state.endDate,initialDate:this.state.startDate._d.getDate(),initialMonth:this.state.startDate._d.getMonth(),initialYear:this.state.startDate._d.getFullYear()}):""]})}}]),i}(r.a.Component),D=i(13),Y=(i(184),function(e){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"CHART - 2"}),Object(a.jsx)("div",{children:Object(a.jsx)(D.Bar,{data:e.chartData2,options:{responsive:!0,scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}})})]})}),N=(i(185),function(e){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"CHART - 3"}),Object(a.jsx)("div",{children:Object(a.jsx)(D.Pie,{data:e.chartData3,options:{responsive:!0,scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}})})]})}),Z=i(202);var y=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(Z.a,{style:{marginLeft:40,position:"relative",top:-20,left:-30,cursor:"pointer"},onClick:function(){window.location.reload(!1)},variant:"contained",children:"Refresh"})})},x=i(27),z=function(e){return x.chartObject.requestParam.dateRange.startDate="1493577000000",x.chartObject.requestParam.dateRange.endDate="1496255400000",console.log(x.chartObject.requestParam.dateRange.startDate),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"CHART - 1"}),Object(a.jsx)("div",{children:Object(a.jsx)(D.Bar,{data:e.chartData1,options:{responsive:!0,scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}})})]})};var k=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),i=t[0],r=t[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),d=s[0],j=s[1],h=Object(n.useState)(""),u=Object(l.a)(h,2),M=u[0],b=u[1],g=Object(n.useState)(""),m=Object(l.a)(g,2),p=m[0],O=m[1],D=Object(n.useState)(""),Z=Object(l.a)(D,2),x=Z[0],k=Z[1],f=Object(n.useState)(""),J=Object(l.a)(f,2),I=J[0],S=J[1],G=Object(n.useState)(""),R=Object(l.a)(G,2),U=R[0],v=R[1],C=Object(n.useState)({}),V=Object(l.a)(C,2),w=V[0],A=V[1],F=Object(n.useState)({}),B=Object(l.a)(F,2),W=B[0],Q=B[1],L=["red","blue","green","blue","red","blue","red","blue","green","blue","red","blue","red","blue","green","blue","red","blue","blue","green","blue","red","blue","blue","green","blue","red","blue","blue","green","blue","red","blue","blue","green","blue","red","blue","red","blue","green","blue","red","blue","red","blue","green","blue","red","blue","red","blue","green","blue","red","blue","blue","green","blue","red","blue","blue","green","blue","red","blue","blue","green","blue","red","blue","blue","green","blue","red","blue"];return Object(n.useEffect)((function(){!function(){var e=[{_id:"dashboard1516252439345",emailId:"candidate@sigmoid.com",orgViewReq:{organization:"DemoTest",view:"Auction"},chartObject:{metadata:{title:"chartobject:1516252439345",img_thumbnail:"../img/chart.png",chartType:"table",dataLimit:50},requestParam:{granularity:"hour",timeZone:{name:"UTC (+00:00)",location:"UTC"},dateRange:{startDate:d.toString(),endDate:x.toString()},xAxis:["D044"],yAxis:["M002"],approxCountDistinct:[],specialCalculation:[],filter:[],orderBy:{metricOrdByList:[{id:"M002",desc:!0}]},percentCalList:[]}}}],t={method:"POST",headers:{"Content-Type":"application/json",accept:"application/json","x-auth-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXlMSVFIcTBIVTMzM2NRQk1oTVwvT2psZTlyeUp4cG1hSjJYaTNDNHp2T2dlSGk2QnhRUGRCSnRGVEErRFFqdVhHT2RJbUlvSkZHQk5iUjQzRGRFVnc3OHM2bUdMVkphNTFlcnoySnpnRlJBYzZuZz09IiwiaXNzIjoicmFodWxrdW1hciIsImV4cCI6MTYxMjY5Mjc2NSwiaWF0IjoxNjEyNjA2MzY1LCJqdGkiOiJjZjQzMDBhZTZkMmI2MGZiODY0ODY1N2JmYzIyMWU2Y2JkMjkyNzE2ZThiYTc4M2JlNDFmYTY4OGNhM2VkNjAwYjhlZjk2YWY5M2NjMzM2MWY0NGFjOTZjMzFkNzliMTMwY2E2YzI4OGJhMGRjYzczZDBkODliMmUxMDE3NmM2ZmQ5NjJjOWVjMjY2Yjg2NzE4ZTZiNGVkOGJmYjQ1N2NhMDQ5MzliYWJkNzc0YjY4M2U0M2M0ODBlOTU0MjU3NWQyYWNkODZhZWY5ZGVjNDY0YjgzMjA2ZWMzZTBiOTgwZDFlZmQ5ZTY2Y2Y2NjJiMTBmMGZlM2U3MDBlZGUyMTFiIn0.X6RcT5jaegTmjOYAxMoJpGBbtBRRsH3FQipquU1JiSk"},body:JSON.stringify(e[0])},i=[],a=[];fetch("https://sigviewauth.sigmoid.io/api/v1/getData",t).then((function(e){return e.json()})).then((function(e){console.log(e),r(new Date);var t,n=Object(c.a)(e.result.data);try{for(n.s();!(t=n.n()).done;){var o=t.value;i.push(o.publisherId),a.push(parseInt(o.impressions_offered))}}catch(s){n.e(s)}finally{n.f()}r({labels:i,datasets:[{label:"Data Analysis",data:a,backgroundColor:L,fillColor:"rgba(220,220,220,0.5)",strokeColor:"rgba(220,220,220,0.8)",highlightFill:"rgba(220,220,220,0.75)",highlightStroke:"rgba(220,220,220,1)",borderWidth:4}]})})).catch((function(e){console.log(e)}))}(),function(){var e=[{_id:"Datastory_ChartId_1535224664111",emailId:"candidate@sigmoid.com",orgViewReq:{organization:"DemoTest",view:"Auction"},chartObject:{metadata:{title:"",img_thumbnail:"images/pie.png",chartType:"pie",dataLimit:500},text:[],requestParam:{granularity:"hour",timeZone:{name:"UTC (+00:00)",location:"UTC"},dateRange:{startDate:p.toString(),endDate:U.toString()},xAxis:["D005"],yAxis:[],approxCountDistinct:[],specialCalculation:["CM001"],filter:[],orderBy:{customMetricOrdByList:[{id:"CM001",desc:!0}]},percentCalList:[{id:"CM001"}]}}}],t={method:"POST",headers:{"Content-Type":"application/json",accept:"application/json","x-auth-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXlMSVFIcTBIVTMzM2NRQk1oTVwvT2psZTlyeUp4cG1hSjJYaTNDNHp2T2dlSGk2QnhRUGRCSnRGVEErRFFqdVhHT2RJbUlvSkZHQk5iUjQzRGRFVnc3OHM2bUdMVkphNTFlcnoySnpnRlJBYzZuZz09IiwiaXNzIjoicmFodWxrdW1hciIsImV4cCI6MTYxMjY5Mjc2NSwiaWF0IjoxNjEyNjA2MzY1LCJqdGkiOiJjZjQzMDBhZTZkMmI2MGZiODY0ODY1N2JmYzIyMWU2Y2JkMjkyNzE2ZThiYTc4M2JlNDFmYTY4OGNhM2VkNjAwYjhlZjk2YWY5M2NjMzM2MWY0NGFjOTZjMzFkNzliMTMwY2E2YzI4OGJhMGRjYzczZDBkODliMmUxMDE3NmM2ZmQ5NjJjOWVjMjY2Yjg2NzE4ZTZiNGVkOGJmYjQ1N2NhMDQ5MzliYWJkNzc0YjY4M2U0M2M0ODBlOTU0MjU3NWQyYWNkODZhZWY5ZGVjNDY0YjgzMjA2ZWMzZTBiOTgwZDFlZmQ5ZTY2Y2Y2NjJiMTBmMGZlM2U3MDBlZGUyMTFiIn0.X6RcT5jaegTmjOYAxMoJpGBbtBRRsH3FQipquU1JiSk"},body:JSON.stringify(e[0])},i=[],a=[],n=[];fetch("https://sigview.sigmoid.io/api/v1/getData",t).then((function(e){return e.json()})).then((function(e){console.log(e);var t,r=Object(c.a)(e.result.data);try{for(r.s();!(t=r.n()).done;){var o=t.value;i.push(parseInt(o.cm001)),a.push(o.CM001_percent),n.push(o.advertiserId)}}catch(s){r.e(s)}finally{r.f()}Q({labels:n,datasets:[{label:"Data Analysis",data:a,backgroundColor:L,fillColor:"rgba(220,220,220,0.5)",strokeColor:"rgba(220,220,220,0.8)",highlightFill:"rgba(220,220,220,0.75)",highlightStroke:"rgba(220,220,220,1)",borderWidth:4}]})})).catch((function(e){console.log(e)}))}(),function(){var e=[{_id:"dashboard1516252235693",emailId:"candidate@sigmoid.com",orgViewReq:{organization:"DemoTest",view:"Auction"},chartObject:{metadata:{title:"chartobject:1516252235693",img_thumbnail:"../img/chart.png",chartType:"table",dataLimit:50},requestParam:{granularity:"hour",timeZone:{name:"UTC (+00:00)",location:"UTC"},dateRange:{startDate:M.toString(),endDate:I.toString()},xAxis:["D017"],yAxis:["M002"],approxCountDistinct:[],specialCalculation:[],filter:[],orderBy:{metricOrdByList:[{id:"M002",desc:!0}]},percentCalList:[]}}}],t={method:"POST",headers:{"Content-Type":"application/json",accept:"application/json","x-auth-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyLXlMSVFIcTBIVTMzM2NRQk1oTVwvT2psZTlyeUp4cG1hSjJYaTNDNHp2T2dlSGk2QnhRUGRCSnRGVEErRFFqdVhHT2RJbUlvSkZHQk5iUjQzRGRFVnc3OHM2bUdMVkphNTFlcnoySnpnRlJBYzZuZz09IiwiaXNzIjoicmFodWxrdW1hciIsImV4cCI6MTYxMjY5Mjc2NSwiaWF0IjoxNjEyNjA2MzY1LCJqdGkiOiJjZjQzMDBhZTZkMmI2MGZiODY0ODY1N2JmYzIyMWU2Y2JkMjkyNzE2ZThiYTc4M2JlNDFmYTY4OGNhM2VkNjAwYjhlZjk2YWY5M2NjMzM2MWY0NGFjOTZjMzFkNzliMTMwY2E2YzI4OGJhMGRjYzczZDBkODliMmUxMDE3NmM2ZmQ5NjJjOWVjMjY2Yjg2NzE4ZTZiNGVkOGJmYjQ1N2NhMDQ5MzliYWJkNzc0YjY4M2U0M2M0ODBlOTU0MjU3NWQyYWNkODZhZWY5ZGVjNDY0YjgzMjA2ZWMzZTBiOTgwZDFlZmQ5ZTY2Y2Y2NjJiMTBmMGZlM2U3MDBlZGUyMTFiIn0.X6RcT5jaegTmjOYAxMoJpGBbtBRRsH3FQipquU1JiSk"},body:JSON.stringify(e[0])},i=[],a=[];fetch("https://sigviewauth.sigmoid.io/api/v1/getData",t).then((function(e){return e.json()})).then((function(e){console.log(e);var t,n=Object(c.a)(e.result.data);try{for(n.s();!(t=n.n()).done;){var r=t.value;i.push(r.appSiteId),a.push(parseInt(r.impressions_offered))}}catch(o){n.e(o)}finally{n.f()}A({labels:i,datasets:[{label:"Data Analysis",data:a,backgroundColor:L,fillColor:"rgba(220,220,220,0.5)",strokeColor:"rgba(220,220,220,0.8)",highlightFill:"rgba(220,220,220,0.75)",highlightStroke:"rgba(220,220,220,1)",borderWidth:4}]})})).catch((function(e){console.log(e)}))}()}),[d,x,M,I,p,U]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"blocks",children:[Object(a.jsx)("h4",{children:"Data Analytics Application Dashboard"}),Object(a.jsx)("div",{className:"h4",children:Object(a.jsx)(T,{selectDateRange:function(e){e.end._d&&(j(1e3*Math.floor(new Date(e.start._d).getTime()/1e3)),k(1e3*Math.floor(new Date(e.end._d).getTime()/1e3)),b(1e3*Math.floor(new Date(e.start._d).getTime()/1e3)),S(1e3*Math.floor(new Date(e.end._d).getTime()/1e3)),O(1e3*Math.floor(new Date(e.start._d).getTime()/1e3)),v(1e3*Math.floor(new Date(e.end._d).getTime()/1e3)))},initdate:function(e,t){j(1e3*Math.floor(new Date(e._d).getTime()/1e3)),k(1e3*Math.floor(new Date(t._d).getTime()/1e3))}})}),Object(a.jsx)("div",{className:"refresh",children:Object(a.jsx)(y,{})}),Object(a.jsx)(z,{chartData1:i}),Object(a.jsx)(Y,{chartData2:w}),Object(a.jsx)(N,{chartData3:W})]})})},f=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,203)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;i(e),a(e),n(e),r(e),o(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),f()},27:function(e){e.exports=JSON.parse('{"_id":"dashboard1516252439345","emailId":"candidate@sigmoid.com","orgViewReq":{"organization":"DemoTest","view":"Auction"},"chartObject":{"metadata":{"title":"chartobject:1516252439345","img_thumbnail":"../img/chart.png","chartType":"table","dataLimit":50},"requestParam":{"granularity":"hour","timeZone":{"name":"UTC (+00:00)","location":"UTC"},"dateRange":{"startDate":"1493337600000","endDate":"1493510400000"},"xAxis":["D044"],"yAxis":["M002"],"approxCountDistinct":[],"specialCalculation":[],"filter":[],"orderBy":{"metricOrdByList":[{"id":"M002","desc":true}]},"percentCalList":[]}}}')},41:function(e,t,i){},71:function(e,t,i){}},[[188,1,2]]]);
//# sourceMappingURL=main.7e817b35.chunk.js.map