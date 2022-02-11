(()=>{var t={275:(t,e,i)=>{const s=i(884);t.exports=class{constructor(){this.carrier=s("carrier",5,[]),this.battleship=s("battleship",4,[]),this.cruiser=s("cruiser",3,[]),this.submarine=s("submarine",3,[]),this.destroyer=s("destroyer",2,[]),this.ships=[this.carrier,this.battleship,this.cruiser,this.submarine,this.destroyer],this.boardMatrix=this.#t(),this.allSunk=this.#e()}#e(){for(const t of this.ships)if(!1===t.shipHasSunk)return!1;return!0}#t(){let t=[];for(let e=0;e<10;e++)t.push([0,0,0,0,0,0,0,0,0,0]);return t}#i(t){return 1===t?"carrier":2===t?"battleship":3===t?"cruiser":4===t?"submarine":5===t?"destroyer":void 0}placeShip(t,e,i){let s=this.ships[0].shipLength;for(;s>0;)"carrier"===this.ships[0].shipName?this.boardMatrix[t][e]=1:"battleship"===this.ships[0].shipName?this.boardMatrix[t][e]=2:"cruiser"===this.ships[0].shipName?this.boardMatrix[t][e]=3:"submarine"===this.ships[0].shipName?this.boardMatrix[t][e]=4:"destroyer"===this.ships[0].shipName&&(this.boardMatrix[t][e]=5),"x"===i&&e++,"y"===i&&t++,s--}receiveAttack(t,e){if(0===this.boardMatrix[t][e])this.boardMatrix[t][e]=6;else if(0!==this.boardMatrix[t][e]&&6!==this.boardMatrix[t][e]){let i=this.#i(this.boardMatrix[t][e]);const s=this.ships.findIndex((t=>t.shipName===i));this.ships[s].hit({row:t,column:e}),this.boardMatrix[t][e]=7}}}},62:(t,e,i)=>{i(884);const s=i(275);t.exports=class{constructor(t){this.name=t,this.isMyTurn="computer"!==t}computerMove(){if("computer"===this.name){const t=new s;let e,i;do{e=Math.floor(11*Math.random()),i=Math.floor(11*Math.random())}while(!1===this.#s(e,i,t));t.receiveAttack(e,i)}}#s(t,e,i){if("computer"===this.name)return!(i[t][e]>=6)}}},884:t=>{t.exports=function(t,e,i=[],s=!1){return{shipName:(t=>t.toLowerCase())(t),shipLength:e,shipDamageSpots:i,shipHasSunk:s,hit:t=>{i.push(t)},isSunk:()=>i.length===e}}}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}(()=>{"use strict";function t(t){let e=1e-4,i=setInterval((function(){t.style.visibility="visible",e>=1&&clearInterval(i),t.style.opacity=e,t.style.filter="alpha(opacity="+100*e+")",e+=.1*e}),10)}function e(t){for(var i=[],s=0;s<t[0];++s)i.push(1==t.length?0:e(t.slice(1)));return i}function s(){let t=document.getElementById("axis-btn");const i=document.querySelectorAll(".column-placing");let s=Array.from(i),r=e([10,10]),n=0;for(let t=0;t<10;t++)for(let e=0;e<10;e++)r[t][e]=s[n],n++;for(let e=0;e<10;e++)for(let i=0;i<10;i++)r[e][i].addEventListener("mouseenter",(()=>{let s="AXIS: X"===t.textContent?i:e;for(let n=s;n<s+5&&n<10;n++)if("AXIS: X"===t.textContent){if(i>5){r[e][i].style.cursor="not-allowed",r[e][i].style.background="red";break}r[e][n].style.background="white"}else if("AXIS: Y"===t.textContent){if(e>5){r[e][i].style.cursor="not-allowed",r[e][i].style.background="red";break}r[n][i].style.background="white"}})),r[e][i].addEventListener("mouseleave",(()=>{let s="AXIS: X"===t.textContent?i:e;for(let n=s;n<s+5&&n<10;n++)"AXIS: X"===t.textContent?r[e][n].style.background="none":"AXIS: Y"===t.textContent&&(r[n][i].style.background="none")}))}i(884),i(275),i(62),function(){const e=document.querySelector(".input-container"),i=document.getElementById("start-game"),r=document.querySelector("main");t(e),i.addEventListener("click",(()=>{!function(t){let e=1,i=setInterval((function(){e<=.1&&(clearInterval(i),t.style.display="none"),t.style.opacity=e,t.style.filter="alpha(opacity="+100*e+")",e-=.1*e}),50)}(e),setTimeout((()=>{!function(t){for(;t.lastChild;)t.removeChild(t.lastChild)}(r)}),3e3),setTimeout((()=>{!function(){const e=document.querySelector("main"),i=document.createElement("div");i.className="placing-container";const r=document.createElement("h1");r.textContent="FAROUK, PLACE YOUR CARRIER";let n=document.createElement("button");n.id="axis-btn",n.textContent="AXIS: X";const o=document.createElement("div");o.className="grid",i.appendChild(r),i.appendChild(n),i.appendChild(o);for(let t=0;t<100;t++){let t=document.createElement("div");t.className="column-placing",o.appendChild(t)}e.style.visibility="hidden",e.appendChild(i),t(e),function(t){t.addEventListener("click",(()=>{"AXIS: X"===t.textContent?t.textContent="AXIS: Y":"AXIS: Y"===t.textContent&&(t.textContent="AXIS: X"),s()}))}(n),s()}()}),3e3)}))}()})()})();