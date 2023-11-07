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

window.addEventListener('keydown', ev => {
    ev.preventDefault();
    console.log(ev);
    if (ev.code === 'ControlRight') {
        let e;
        if (document.getElementById("btnTema")) document.getElementById("btnTema").remove();
        else {
            e = document.createElement("DIV");
            e.setAttribute('onclick', `if (localStorage.getItem("temaOscuro") === "true") { temaOscuro(false); localStorage.setItem("temaOscuro", "false"); } else {temaOscuro(true); localStorage.setItem("temaOscuro", "true"); }`);
            e.setAttribute("style", "z-index: 10000; position: fixed; background-color: #151c75 !important; color: #fff !important; padding: 5px; margin: 10px; top: 0; right: 0; border: solid 2px; border-radius: 3px; cursor: pointer;");
            e.setAttribute("id", "btnTema");
            e.innerHTML = "Tema Oscuro";
            document.body.appendChild(e);
        }
    }
});
    
