(()=>{"use strict";const e=document.getElementById("loginBtn"),t=document.getElementById("registerBtn"),n=document.getElementById("logoutBtn");function s(){sessionStorage.getItem("token")?(e.style.display="none",t.style.display="none",n.style.display=""):(e.style.display="",t.style.display="",n.style.display="none")}sessionStorage.removeItem("token"),null==e||e.addEventListener("mousedown",(function(){sessionStorage.setItem("token","qwerty"),s()})),null==n||n.addEventListener("mousedown",(function(){sessionStorage.removeItem("token"),s()})),s()})();