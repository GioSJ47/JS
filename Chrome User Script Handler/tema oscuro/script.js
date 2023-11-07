// ==UserScript==
// @name           Tema Oscuro
// @description    Aplica un tema oscuro desde la consola.
// @author         GioCodex
// @include        http://*
// @include        https://*
// @version        1.0
// ==/UserScript==

function temaOscuro(bool = true) {
	var e;
	if (document.getElementById("temaOscuro")) e = document.getElementById("temaOscuro");
	else {
		e = document.createElement("STYLE");
		e.setAttribute("id", "temaOscuro");
		document.head.appendChild(e);
	}

	if (bool) {
		e.innerHTML = "*, input, textarea {color: #aaa !important; background-color: #333 !important;}";
		localStorage.setItem("temaOscuro", "true");
	}

	else {
		e.innerHTML = "";
		localStorage.setItem("temaOscuro", "false");
	}
}

if (true) {
	let e = document.createElement("script");
	e.innerHTML = `
		function temaOscuro(bool = true) {
			var e;
			if (document.getElementById("temaOscuro")) e = document.getElementById("temaOscuro");
			else {
				e = document.createElement("STYLE");
				e.setAttribute("id", "temaOscuro");
				document.head.appendChild(e);
			}

			if (bool) {
				e.innerHTML = "*, input, textarea {color: #aaa !important; background-color: #333 !important;}";
				localStorage.setItem("temaOscuro", "true");
			}

			else {
				e.innerHTML = "";
				localStorage.setItem("temaOscuro", "false");
			}
		}
	`;
	e.setAttribute("id", "scriptTemaOscuro");
	document.body.appendChild(e);
}

setTimeout(()=>{
	if (localStorage.getItem("temaOscuro") === "true") {
		temaOscuro(true);
	}

	else {
		temaOscuro(false);
	}
}, 200);
