// ==UserScript==
// @name           Iconos SVG
// @description    Descarga todos los iconos de Uxwing
// @author         GioCodex
// @include        https://uxwing.com/*
// @version        1.0
// ==/UserScript==

/* PREPARACION DE SECUENCIA
var eLinks = document.getElementsByClassName("widget_categories clearfix")[0].getElementsByTagName("a");
var links = Array();

for (let i = 0; i < eLinks.length; i++) {
    links.push(eLinks[i].getAttribute("href"));
}

localStorage.setItem("iconos_svg_links", JSON.stringify(links));
localStorage.setItem("iconos_svg_ultimo_link", links[0]);
*/

window.addEventListener("load", () => {



var bd = Array();
if (localStorage.getItem("iconos_svg_2")) bd = JSON.parse(localStorage.getItem("iconos_svg_2"));

if (!document.getElementById("descarga")) {
    let e = document.createElement("A");
    e.setAttribute("download", "");
    e.setAttribute("id", "descarga");
    document.body.appendChild(e);
}

var descarga = document.getElementById("descarga");

var svgs = document.querySelectorAll(`img[src]`);

var i = 0;
var loop = setInterval(()=>{
    if (i < svgs.length) {
        let a = svgs[i].getAttribute("src").split("/");
        a = a[a.length-1];
        
        if (bd.indexOf(a) === -1 && svgs[i].getAttribute("src").split(".").indexOf("svg") + 1) {
            bd.push(a);
            descarga.setAttribute("href", svgs[i].getAttribute("src"));
            descarga.click();
            localStorage.setItem("iconos_svg_2", JSON.stringify(bd));
        } else {
            console.log(svgs[i].getAttribute("src").split(".")[2]);
        }

        i++;
    } else {
        var eSigPag = document.getElementsByClassName("screen-reader-text");

        if (eSigPag.length && eSigPag[eSigPag.length-1].innerText === "Next page") {
	    eSigPag[eSigPag.length-1].click();
        } else {
            var siguiente = JSON.parse(localStorage.getItem("iconos_svg_links")).indexOf(localStorage.getItem("iconos_svg_ultimo_link"));

            if (siguiente != -1 && JSON.parse(localStorage.getItem("iconos_svg_links"))[siguiente+1]) {
                localStorage.setItem("iconos_svg_ultimo_link", JSON.parse(localStorage.getItem("iconos_svg_links"))[siguiente+1])
                window.location.href = localStorage.getItem("iconos_svg_ultimo_link");
            }

            clearInterval(loop);
        }
    }
}, 100);



});
