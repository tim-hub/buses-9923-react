(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(9),i=n.n(o),c=n(1),r=n(2),u=n(4),l=n(3),g=n(5);function h(e){return s.a.createElement("button",{className:"square"},s.a.createElement("b",null,e.value))}var m=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(r.a)(t,[{key:"renderSquare",value:function(e){return s.a.createElement(h,{value:e})}},{key:"getBusSymbol",value:function(e){return"NORTH"===e?"^":"EAST"===e?">":"SOUTH"===e?"v":"WEST"===e?"<":""}},{key:"renderARow",value:function(e){for(var t=this,n=[],a=function(a){var s=" ",o=t.props.buses.find(function(t){return t.x===a&&t.y===e});o&&(s=t.getBusSymbol(o.facing)),n.push(t.renderSquare(s))},s=0;s<5;s++)a(s);return n}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"board-row"},this.renderARow(4)),s.a.createElement("div",{className:"board-row"},this.renderARow(3)),s.a.createElement("div",{className:"board-row"},this.renderARow(2)),s.a.createElement("div",{className:"board-row"},this.renderARow(1)),s.a.createElement("div",{className:"board-row"},this.renderARow(0)))}}]),t}(s.a.Component);function f(e){return s.a.createElement("div",null,e.log.message," ",s.a.createElement("br",null))}var v=function(e){return s.a.createElement("div",{className:"Log"},s.a.createElement("h4",null,"Logs"),function(e){var t=[];return e.forEach(function(e){t.push(s.a.createElement(f,{log:e}))}),t}(e.logs))},d=n(6),b=["NORTH","EAST","SOUTH","WEST"],E=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"NORTH";Object(c.a)(this,e),this.x=t,this.y=n,this.setFacing(a)}return Object(r.a)(e,[{key:"setFacing",value:function(e){if("string"!==typeof e||!b.includes(e.toUpperCase()))throw new TypeError("Error, the direction is not correct, bus cannot be initialized.");this._facing=b.indexOf(e.toUpperCase())}},{key:"turnRight",value:function(){3===this._facing?this._facing=0:this._facing++}},{key:"turnLeft",value:function(){0===this._facing?this._facing=3:this._facing--}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y,",").concat(b[this._facing])}},{key:"facing",get:function(){return b[this._facing]},set:function(e){this.setFacing(e)}}]),e}(),p=n(7),y=new(function(){function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["alert","logging"];Object(c.a)(this,e),this.msg_types=n,this._logs=[],this._stdout=t}return Object(r.a)(e,[{key:"log",value:function(e){this.log("logging",e)}},{key:"log",value:function(e,t){var n=(new Date).toISOString();this._logs=[].concat(Object(p.a)(this._logs),[{timestamp:n,msg_type:e,message:t}]),this.stdout&&this.msg_types.includes(e)&&console.log("".concat(n," - ").concat(e," - ").concat(t))}},{key:"latest",value:function(){return Object.assign({},this._logs[this._logs.length-1])}},{key:"logs",get:function(){return Object(p.a)(this._logs)}},{key:"stdout",get:function(){return this._stdout},set:function(e){this._stdout=e}}]),e}()),O=function(){function e(t,n){Object(c.a)(this,e),this.width=t,this.length=n,this._buses=[]}return Object(r.a)(e,[{key:"getCountOfBuses",value:function(){return this.buses.length}},{key:"getBus",value:function(e){return e<0?null:this.buses[e]}},{key:"getLatestBus",value:function(){return this.getBus(this.getCountOfBuses()-1)}},{key:"place",value:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.getCountOfBuses();if(this.getCountOfBuses()>=k*w)y.log("alert","The park is already full, cannot be parked here - (".concat(e,", ").concat(t,")"));else if(e>=k||e<0||t>=w||t<0)y.log("alert","You cannot park to (".concat(e,", ").concat(t,") - outside of car park, you will get a ticket!!!"));else if(this.buses.find(function(n){return n.x===e&&n.y===t}))y.log("alert","There is a bus already here - (".concat(e,", ").concat(t,"), cannot be parked here."));else{y.log("logging","Parked at (".concat(e,", ").concat(t,")"));var s=new E(e,t,n);this.buses=Object.assign([],this.buses,Object(d.a)({},a,s))}}},{key:"turn",value:function(e,t){if(e>=0){var n=this.getBus(e);!0===t?(n.turnRight(),y.log("logging","Turn Right")):(n.turnLeft(),y.log("logging","Turn Left")),this.buses=Object.assign([],this.buses,Object(d.a)({},e,n))}else y.log("alert","Command ignore, you cannot turn any bus before you park one")}},{key:"left",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCountOfBuses()-1;this.turn(e,!1)}},{key:"right",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCountOfBuses()-1;this.turn(e,!0)}},{key:"move",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCountOfBuses()-1;if(e>=0){var t=this.getBus(e),n=t.x,a=t.y,s=t.facing;"NORTH"===s&&a++,"SOUTH"===s&&a--,"EAST"===s&&n++,"WEST"===s&&n--,this.place(n,a,s,e)}else y.log("alert","Command ignore, you cannot move any bus before you park one")}},{key:"clear",value:function(){this._buses=[]}},{key:"toString",value:function(){return"Car Park ".concat(this.width,"x").concat(this.length,": \n ").concat(this.buses)}},{key:"buses",get:function(){return Object.assign([],this._buses)},set:function(e){this._buses=e}}]),e}(),k=5,w=5,T=new O(k,w),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={x:0,y:0,facing:"NORTH",engine:T,buses:[],show_report:!0,show_log:!1},n}return Object(g.a)(t,e),Object(r.a)(t,[{key:"setBuses",value:function(){this.setState({buses:T.buses})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(m,{buses:this.state.buses}),s.a.createElement("hr",null),s.a.createElement("div",{className:"board-row"},s.a.createElement("select",{className:"command",value:this.state.x,onChange:function(t){e.setState({x:parseInt(t.target.value,10)})}},s.a.createElement("option",{value:"0"},"0"),s.a.createElement("option",{value:"1"},"1"),s.a.createElement("option",{value:"2"},"2"),s.a.createElement("option",{value:"3"},"3"),s.a.createElement("option",{value:"4"},"4")),s.a.createElement("select",{className:"command",value:this.state.y,onChange:function(t){e.setState({y:parseInt(t.target.value,10)})}},s.a.createElement("option",{value:"0"},"0"),s.a.createElement("option",{value:"1"},"1"),s.a.createElement("option",{value:"2"},"2"),s.a.createElement("option",{value:"3"},"3"),s.a.createElement("option",{value:"4"},"4")),s.a.createElement("select",{className:"command",value:this.state.facing,onChange:function(t){e.setState({facing:t.target.value})}},s.a.createElement("option",{value:"NORTH"},"NORTH"),s.a.createElement("option",{value:"EAST"},"EAST"),s.a.createElement("option",{value:"SOUTH"},"SOUTH"),s.a.createElement("option",{value:"WEST"},"WEST")),s.a.createElement("button",{className:"command",onClick:function(){e.state.engine.place(e.state.x,e.state.y,e.state.facing),e.setBuses()}},"Place")),s.a.createElement("hr",null),s.a.createElement("div",{className:"board-row"},s.a.createElement("button",{className:"command",onClick:function(){e.state.engine.move(),e.setBuses()}},"Move"),s.a.createElement("button",{className:"command",onClick:function(){e.state.engine.left(),e.setBuses()}},"Turn Left"),s.a.createElement("button",{className:"command",onClick:function(){e.state.engine.right(),e.setBuses()}},"Turn Right"),s.a.createElement("button",{className:"command",disabled:!this.state.show_report,onClick:function(){alert("Do not need to click `Report` button, because result is displayed in UI after data changing."),e.setState({show_report:!1})}},"Report")),s.a.createElement("hr",null),s.a.createElement("div",{className:"board-row"},s.a.createElement("button",{className:"command",onClick:function(){e.setState({show_log:!e.state.show_log})}},"Toggle Log")),s.a.createElement("hr",null),this.state.show_log?s.a.createElement(v,{logs:y.logs}):null)}}]),t}(s.a.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("h1",null,"\ud83d\ude8c A Bus Park \ud83d\ude8c"),s.a.createElement("b",null,"Try Give Some Commands To Run!"),s.a.createElement(_,null))}}]),t}(s.a.Component),j=(n(16),document.getElementById("root"));i.a.render(s.a.createElement(S,null),j)}},[[10,1,2]]]);
//# sourceMappingURL=main.6681421e.chunk.js.map