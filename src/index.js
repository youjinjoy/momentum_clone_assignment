// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const title=document.querySelector("h2");
/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

// Object는 key에 대한 value로 함수를 가질 수 있다!
const superEventHandler = {  
    'handleMouseClick':()=>{
        title.innerText="Mouse Click";
        title.style.color=colors[0];
    },
    'handleMouseEnter':()=>{
        title.innerText="Mouse Enter";
        title.style.color=colors[1];
    },
    'handleMouseLeave':()=>{
        title.innerText="Mouse Leave";
        title.style.color=colors[2];
    },   
    'handleWindowResize':()=>{
        title.innerText="Window Resize";
        title.style.color=colors[3];
    },
    // 주의: title에 이벤트 리스너를 주는게 아닌 window에 주어야.
    // 마우스 우클릭
    'handleContextMenu':()=>{
        title.innerText="Context Menu";
        title.style.color=colors[4];
    },
};

title.addEventListener("click",superEventHandler.handleMouseClick);
title.addEventListener("mouseenter",superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave",superEventHandler.handleMouseLeave);
window.addEventListener("resize",superEventHandler.handleWindowResize);
title.addEventListener("contextmenu",superEventHandler.handleContextMenu);  