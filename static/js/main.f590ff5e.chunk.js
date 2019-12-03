(this["webpackJsonpsharon-yi-project-five"]=this["webpackJsonpsharon-yi-project-five"]||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/backgroundImage.2cace332.svg"},15:function(e,a,t){e.exports=t(27)},20:function(e,a,t){},21:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(13),r=t.n(c),l=(t(20),t(1)),h=t(2),s=t(4),o=t(3),d=t(5),u=(t(21),t(14)),m=t.n(u),b=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Habit Tracker"),i.a.createElement("h2",null,"Hello! Let's keep track of your daily habits below."),i.a.createElement("img",{src:m.a,alt:"",className:"backgroundImage"}),i.a.createElement("div",{className:"datesContainer"},i.a.createElement("div",{className:"dates"},i.a.createElement("h3",{className:"dateName"},"S"),i.a.createElement("h3",{className:"dateName"},"M"),i.a.createElement("h3",{className:"dateName"},"T"),i.a.createElement("h3",{className:"dateName"},"W"),i.a.createElement("h3",{className:"dateName"},"T"),i.a.createElement("h3",{className:"dateName"},"F"),i.a.createElement("h3",{className:"dateName"},"S"))))}}]),a}(n.Component),p=t(8),f=t.n(p);t(23);f.a.initializeApp({apiKey:"AIzaSyAGQAWV2ab2nyKVFlrgiC0iM31eJHBY9qg",authDomain:"sharon-yi-project-five.firebaseapp.com",databaseURL:"https://sharon-yi-project-five.firebaseio.com",projectId:"sharon-yi-project-five",storageBucket:"sharon-yi-project-five.appspot.com",messagingSenderId:"904259431353",appId:"1:904259431353:web:eb9005fae3099c4792e468",measurementId:"G-6JYB1TDCRD"});var k=f.a,y=(t(26),t(6)),v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).handleCheckOnChange=function(e){var a=e.target.id,n=k.database().ref();n.child(t.props.habitValue.habitId).child(a).once("value").then((function(e){n.child(t.props.habitValue.habitId).child(a).set(!e.val())}))},t}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("form",{className:"checkDate"},i.a.createElement(y.Checkbox,{plain:!0,shape:"round",color:"warning-o",icon:i.a.createElement("i",{className:"fas fa-check-circle"}),animation:"tada",id:"sunday",className:"individualCheckbox",checked:this.props.habitValue.habitName.sunday,onChange:this.handleCheckOnChange}),i.a.createElement(y.Checkbox,{plain:!0,shape:"round",color:"warning-o",icon:i.a.createElement("i",{className:"fas fa-check-circle"}),animation:"tada",id:"monday",className:"individualCheckbox",checked:this.props.habitValue.habitName.monday,onChange:this.handleCheckOnChange}),i.a.createElement(y.Checkbox,{plain:!0,shape:"round",color:"warning-o",icon:i.a.createElement("i",{className:"fas fa-check-circle"}),animation:"tada",id:"tuesday",className:"individualCheckbox",checked:this.props.habitValue.habitName.tuesday,onChange:this.handleCheckOnChange}),i.a.createElement(y.Checkbox,{plain:!0,shape:"round",color:"warning-o",icon:i.a.createElement("i",{className:"fas fa-check-circle"}),animation:"tada",id:"wednesday",className:"individualCheckbox",checked:this.props.habitValue.habitName.wednesday,onChange:this.handleCheckOnChange}),i.a.createElement(y.Checkbox,{plain:!0,shape:"round",color:"warning-o",icon:i.a.createElement("i",{className:"fas fa-check-circle"}),animation:"tada",id:"thursday",className:"individualCheckbox",checked:this.props.habitValue.habitName.thursday,onChange:this.handleCheckOnChange}),i.a.createElement(y.Checkbox,{plain:!0,shape:"round",color:"warning-o",icon:i.a.createElement("i",{className:"fas fa-check-circle"}),animation:"tada",id:"friday",className:"individualCheckbox",checked:this.props.habitValue.habitName.friday,onChange:this.handleCheckOnChange}),i.a.createElement(y.Checkbox,{plain:!0,shape:"round",color:"warning-o",icon:i.a.createElement("i",{className:"fas fa-check-circle"}),animation:"tada",id:"saturday",className:"individualCheckbox",checked:this.props.habitValue.habitName.saturday,onChange:this.handleCheckOnChange}))}}]),a}(n.Component),C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).handleOnClear=function(e){var a=k.database().ref();t.props.habitTracker.forEach((function(e){a.child(e.habitId).child("sunday").set(!1),a.child(e.habitId).child("monday").set(!1),a.child(e.habitId).child("tuesday").set(!1),a.child(e.habitId).child("wednesday").set(!1),a.child(e.habitId).child("thursday").set(!1),a.child(e.habitId).child("friday").set(!1),a.child(e.habitId).child("saturday").set(!1)}))},t}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{className:"resetWeeks",onClick:this.handleOnClear},"Start new week"))}}]),a}(n.Component),N=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(o.a)(a).call(this))).handleChange=function(a){e.setState({userInput:a.target.value})},e.handleSubmit=function(a){a.preventDefault();var t=e.state.userInput,n=k.database().ref();if(""!==t){var i={habitName:t,sunday:!1,monday:!1,tuesday:!1,wednesday:!1,thursday:!1,friday:!1,saturday:!1};n.push(i),e.setState({userInput:""})}},e.deleteHabit=function(e){k.database().ref().child(e).remove()},e.state={habitTracker:[],userInput:""},e}return Object(d.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.database().ref().on("value",(function(a){var t=a.val(),n=[];for(var i in t){var c={habitId:i,habitName:t[i]};n.push(c)}e.setState({habitTracker:n})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("ul",null,this.state.habitTracker.map((function(a,t){return i.a.createElement("div",{className:"habitAndDelete",key:t},i.a.createElement("span",{id:a.habitId,className:"deleteHabit",onClick:function(){return e.deleteHabit(a.habitId)}},i.a.createElement("i",{className:"fas fa-trash-alt"})),i.a.createElement("ul",null,i.a.createElement("li",{className:"habitItem"},a.habitName.habitName,i.a.createElement(v,{habitValue:a}))))}))),i.a.createElement("form",{onSubmit:this.handleSubmit,className:"addHabitInput"},i.a.createElement("label",{htmlFor:"habitName"}),i.a.createElement("input",{id:"habitName",type:"text",onChange:this.handleChange,value:this.state.userInput}),i.a.createElement("button",{type:"submit"},"Add habit")),i.a.createElement(C,{habitTracker:this.state.habitTracker}))}}]),a}(n.Component),E=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,null),i.a.createElement(N,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f590ff5e.chunk.js.map