!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),a=null;t.addEventListener("click",(function(){a=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.disabled=!0}),1e3)})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.cbc89af0.js.map