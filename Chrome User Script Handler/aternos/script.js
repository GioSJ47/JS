// ==UserScript==
// @name           Mecanicas Aternos
// @description    Calcula el valor de cada item, facilita los comandos, configura autorun y autostop.
// @author         GioCodex
// @include        https://aternos.org/*
// @version        1.0
// ==/UserScript==

function importHTML(url){ let tipo = url.split("."); tipo = tipo[tipo.length-1]; if (tipo == "css" && !document.querySelector("link[href='"+url+"']")) { let e = document.createElement("link"); e.setAttribute("rel"  , "stylesheet");e.setAttribute("type" , "text/css");e.setAttribute("media", "all");e.setAttribute("href" , url);document.head.insertBefore(e, null);return e;}if (tipo == "js" && !document.querySelector("script[src='"+url+"']")) {let e = document.createElement("script");e.setAttribute("src", url);document.head.insertBefore(e, null);return e;}return false;}

importHTML("https://milibreria.neocities.org/proyectos/aternos/mecanicas_v1.1.js");
importHTML("https://milibreria.neocities.org/proyectos/aternos/mecanicas_v1.1.css");
