// ==UserScript==
// @name           YT Descargas
// @description    Descarga musica y/o video
// @author         GioCodex
// @include        https://www.youtube.com/watch?v=*
// @include        https://www.youtube.com/watch?*
// @version        1.0
// ==/UserScript==

console.log("Iniciando miScript");

function importHTML(url){ let tipo = url.split("."); tipo = tipo[tipo.length-1]; if (tipo == "css" && !document.querySelector("link[href='"+url+"']")) { let e = document.createElement("link"); e.setAttribute("rel"  , "stylesheet");e.setAttribute("type" , "text/css");e.setAttribute("media", "all");e.setAttribute("href" , url);document.head.insertBefore(e, null);return e;}if (tipo == "js" && !document.querySelector("script[src='"+url+"']")) {let e = document.createElement("script");e.setAttribute("src", url);document.head.insertBefore(e, null);return e;}return false;}

importHTML("https://milibreria.neocities.org/html/metodoGet.js");
importHTML("https://milibreria.neocities.org/html/link.js");
//importHTML("https://milibreria.neocities.org/proyectos/youtube/descargar.js");


if (true) {
	let e = document.createElement("div");
	e.setAttribute("id", "miScript");
	e.innerHTML = `
		<style>
			#Descarga {
				display: flex;
			}

			#Descarga > div {
				display: inline-block;

				padding: 10px;
				margin: 10px 0 10px 10px;

				border: solid 1px #000;
				border-radius: 100px;

				background: #f1f1f1;
				color: #0f0f0f;

				cursor: pointer;
			}
		</style>
		
		<div id="Descarga">
			<div onclick="abrir('https://www.y2mate.com/youtube/'+get_mget(window.location.href).v+'?mp3=true')">MP3</div>
			<div onclick="abrir('https://www.y2mate.com/youtube/'+get_mget(window.location.href).v+'?mp4=true')">MP4</div>
		</div>
	`;
	
	let loop = setInterval(()=>{
		if (document.getElementById("owner")) {
			document.getElementById("owner").appendChild(e);
			console.log("miScript", e);
			clearInterval(loop);
		}
	}, 100);
}
