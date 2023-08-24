// ==UserScript==
// @name           Aternos Consola
// @description    Colorea palabras clave para mayor comodidad
// @author         GioCodex
// @include        https://aternos.org/console
// @version        1.0
// ==/UserScript==

console.log("> SCRIPT");

let eStyle = document.createElement("style");
eStyle.innerHTML = `
	.t {
		color: #ad0000;
	}

	.comando {
		color: #5d5dff;
	}

	.txt {

	}

	.t, .comando, .txt {
	}


	.dios {
		color: red;
	}

	.mata_un_mob {
		color: #5ec957;
	}

	.despedida {
		color: orange;
	}
`;
document.head.appendChild(eStyle);

function reemplazar(cadena, obj) {
  Object.keys(obj).forEach(el => {
    const reg=new RegExp(el, "gi");
    cadena=cadena.replace(reg, obj[el]);
  });
  return cadena;
}

function colorear(e) {
	if (e.getAttribute("coloreado") != "true") {
		let Remplazo = {
			"Adios":"<span class='despedida'><b>Dios</b></span>",
"Dios":"<span class='dios'><b>Dios</b></span>",
			"dios":"<span class='dios'><b>Dios</b></span>",
			"DIOS":"<span class='dios'><b>Dios</b></span>",
			
			"Named entity":"<span class='mata_un_mob'>Named entity</span>"
		};

		let txt = e.innerText.split(": ");
		let res = String();

		for (let i = 0; i < txt.length; i++) {
			if (!i) {
				let info = txt[0].split("] [");
				console.log(info)
				res = "<span class='t'>" + info[0] + "]</span> <span class='comando'>[" + info[1] + "</span>";
			} else if (i == 1) {
				res += ": <span class='txt'>" + reemplazar(txt[1], Remplazo);
			} else {
				res += ":" + reemplazar(txt[1], Remplazo);
			}
		}

		res += "</span>";

		e.innerHTML = res;

		e.setAttribute("coloreado", "true");
	} else {
		return false;
	}
}
window.addEventListener("load", () => {
	console.log("> SCRIPT LOAD");

	setTimeout(()=>{
		var lineas = document.getElementsByClassName("line");

		for (let i = 0; i < lineas.length; i++) {
			colorear(lineas[i]);
		}

		setInterval(() => {
			for (let i = lineas.length-1; i >= 0; i--) {
				if (lineas[i].getAttribute("coloreado") !== "true") colorear(lineas[i]);
				else break;
			}
		}, 400);
	}, 1000);
});
