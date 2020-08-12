(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n);t(4);a.default=function(e){return s.a.createElement("div",{className:"imgContainer"},s.a.createElement("div",{className:"col m4 s3 l6"},s.a.createElement("div",{className:"card",id:e.id},s.a.createElement("div",{className:"card-image"},s.a.createElement("img",{onClick:e.onClick,src:t(16)("".concat(e.url)),alt:"placeholder"})))))}},,,function(e,a,t){},,,,function(e){e.exports=JSON.parse('[{"id":1,"url":"./Images/Alchemist.png","alreadyGuessed":false},{"id":2,"url":"./Images/Axe.png","alreadyGuessed":false},{"id":3,"url":"./Images/Dazzle.png","alreadyGuessed":false},{"id":4,"url":"./Images/Witch_Doctor.png","alreadyGuessed":false},{"id":5,"url":"./Images/Ember_Spirit.png","alreadyGuessed":false},{"id":6,"url":"./Images/Invoker.png","alreadyGuessed":false},{"id":7,"url":"./Images/Lich.png","alreadyGuessed":false},{"id":8,"url":"./Images/Lycan.png","alreadyGuessed":false},{"id":9,"url":"./Images/Necro.png","alreadyGuessed":false},{"id":10,"url":"./Images/Pudge.png","alreadyGuessed":false},{"id":11,"url":"./Images/Pugna.png","alreadyGuessed":false},{"id":12,"url":"./Images/Sven.png","alreadyGuessed":false}]')},,,function(e,a,t){e.exports=t(33)},,,,,function(e,a,t){var n={".":1,"./":1,"./Images/Alchemist.png":17,"./Images/Axe.png":18,"./Images/Dazzle.png":19,"./Images/Dragon_Knight.jpeg":20,"./Images/Ember_Spirit.png":21,"./Images/Invoker.png":22,"./Images/Lich.png":23,"./Images/Lycan.png":24,"./Images/Necro.png":25,"./Images/Puck.png":26,"./Images/Pudge.png":27,"./Images/Pugna.png":28,"./Images/Sven.png":29,"./Images/Windrunner.png":30,"./Images/Witch_Doctor.png":31,"./index":1,"./index.js":1,"./style.css":4};function s(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=16},function(e,a,t){e.exports=t.p+"static/media/Alchemist.dc51a2b3.png"},function(e,a,t){e.exports=t.p+"static/media/Axe.07347827.png"},function(e,a,t){e.exports=t.p+"static/media/Dazzle.98138694.png"},function(e,a,t){e.exports=t.p+"static/media/Dragon_Knight.ab803806.jpeg"},function(e,a,t){e.exports=t.p+"static/media/Ember_Spirit.f1afdc0e.png"},function(e,a,t){e.exports=t.p+"static/media/Invoker.2bc3299d.png"},function(e,a,t){e.exports=t.p+"static/media/Lich.81b165ca.png"},function(e,a,t){e.exports=t.p+"static/media/Lycan.2b3c7699.png"},function(e,a,t){e.exports=t.p+"static/media/Necro.6efe3b8d.png"},function(e,a,t){e.exports=t.p+"static/media/Puck.466f55f4.png"},function(e,a,t){e.exports=t.p+"static/media/Pudge.cc48327d.png"},function(e,a,t){e.exports=t.p+"static/media/Pugna.8455cf48.png"},function(e,a,t){e.exports=t.p+"static/media/Sven.af917d4d.png"},function(e,a,t){e.exports=t.p+"static/media/Windrunner.ef21b4f7.png"},function(e,a,t){e.exports=t.p+"static/media/Witch_Doctor.4d2a0944.png"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(5),i=t.n(r),c=t(2),l=t(6),o=t(7),u=t(10),m=t(9),d=t(1);var g=function(e){return s.a.createElement("nav",{className:"navbar bg-primary"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"navbar-header"},s.a.createElement("h1",{className:"nav navbar-nav navbar-left"},"Dota 2 Memory Game")),s.a.createElement("h1",{className:"nav navbar-nav navbar-right"},"Score: ",e.score)))};t(32);var p=function(e){return s.a.createElement("div",{class:"jumbotron jumbotron-fluid"},s.a.createElement("div",{class:"container"},s.a.createElement("h1",{class:"display-4"},"Click on the images of the Dota 2 heroes below to earn points, but don't click any more than once!"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",{class:"lead"},e.message)))},f=t(8),h=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={score:0,images:f,message:"Click any hero image to begin the game"},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.shuffle()}},{key:"handleGuess",value:function(e){var a,t=Object(c.a)(this.state.images);try{for(t.s();!(a=t.n()).done;){var n=a.value;n.id===e&&(n.alreadyGuessed?this.handleIncorrectGuess():this.handleCorrectGuess(e))}}catch(s){t.e(s)}finally{t.f()}}},{key:"handleIncorrectGuess",value:function(){this.setState({message:"Oh no! You guessed incorrectly, your score has been reset to 0"}),this.reset()}},{key:"handleCorrectGuess",value:function(e){this.setState({message:"Correct!"});var a,t=Object(c.a)(this.state.images);try{for(t.s();!(a=t.n()).done;){var n=a.value;if(n.id===e){n.alreadyGuessed=!0,this.setState({images:this.state.images});var s=this.state.score;s+=1,this.setState({score:s}),12===s?this.handleWin():this.shuffle()}}}catch(r){t.e(r)}finally{t.f()}}},{key:"reset",value:function(){this.setState({score:0});var e,a=Object(c.a)(this.state.images);try{for(a.s();!(e=a.n()).done;){e.value.alreadyGuessed=!1}}catch(t){a.e(t)}finally{a.f()}this.setState({images:this.state.images}),this.shuffle()}},{key:"shuffle",value:function(){for(var e=[],a=this.state.images,t=0;t<12;t+=1){var n=Math.floor(a.length*Math.random());e.push(a[n]),a.splice(n,1)}this.setState({images:e})}},{key:"handleWin",value:function(){this.setState({message:"Congratulations! You won! Refresh the page to play again."})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(g,{score:this.state.score}),s.a.createElement(p,{message:this.state.message}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},this.state.images.map((function(a){return s.a.createElement(d.default,{onClick:function(){return e.handleGuess(a.id)},url:a.url,key:a.id})})))))}}]),t}(s.a.Component);var v=function(){return s.a.createElement(h,null)};i.a.render(s.a.createElement(v,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.e8e97325.chunk.js.map