// ==UserScript==
// @name           Y2Mate
// @description    Auto descarga
// @author         GioCodex
// @include        https://www.y2mate.com/*
// @version        1.0
// ==/UserScript==

function get_mget (url = window.location.href) {
  if (url.indexOf("?")) {
    url = url.split("?")[1];
    if (url) {
      if (url.indexOf("&")) url = url.split("&");
    } else return {};
  }
  
  let res = {};

  for (let i = 0; i < url.length; i++) {
      let ram = url[i].split("=");
      res[ram[0]] = decodeURIComponent(ram[1]);
  }

  return res;
}

function mensajeDescarga() {
    document.body.innerHTML += `<div style="z-index: 1201; position: absolute; width: 100%; height: 100%; top: 0; left: 0; background: #333; color: #aaa; display: flex; justify-content: center; align-items: center;"><div>AGUARDE MIENTRAS SE DESCARGA SU ARCHIVO<span id="Puntos"></span></div></div>`;
    document.querySelector("#bootstrap-themes > div:nth-child(2) > a > div").remove();
    var punto = 1;
    
    setInterval(()=>{
        let e = document.getElementById("Puntos");
        let res = String();
        for (let i = 0; i < punto; i++) {
            res += '.';
        }
        e.innerText = res;
        punto++;
        if (punto > 3) punto = 0;
    }, 500);
}



if (get_mget().mp3 === "true") {
	mensajeDescarga();
	console.log("MP3");
	let loopA = setInterval(() => {
		if (document.querySelector("#selectTab > li:nth-child(2) > a")) {
			document.querySelector("#selectTab > li:nth-child(2) > a").click();



			let loopB = setInterval(() => {
				if (document.querySelector("#audio")) {
					let opciones = document.querySelector("#audio").children[0].children[1].children;
					let pos = -1;
					for (let i = 0; (pos === -1 && i < opciones.length); i++) {
						console.log(opciones[i].innerText.search("MP3 -"));
						if (opciones[i].innerText.search("MP3 -")+1) pos = i;
					}

					console.log("POS "+pos);
					if (pos+1) {
						opciones[pos].children[2].children[0].click();

						let loopC = setInterval(() => {
							if (document.querySelector("#process-result > div > a")) {
								document.querySelector("#process-result > div > a").click();

								setTimeout(()=>{window.close();}, 2000);
								clearInterval(loopC);
							}
						}, 30);
					}
					clearInterval(loopB);
				}
			}, 30);
			
			clearInterval(loopA);
		}
	}, 30);
}

else if (get_mget().mp4 === "true") {
	mensajeDescarga();
	console.log("MP4");
	let loopA = setInterval(() => {
		if (document.getElementsByClassName("table table-bordered")) {
			let opciones = document.querySelector("#mp4 > table").children[1].children;
			let pos = -1;
			for (let i = 0; (pos === -1 && i < opciones.length); i++) {
				if (opciones[i].innerText.search("360p ")+1) pos = i;
			}
		
			console.log("POS "+pos);
			if (pos+1) {
				opciones[pos].children[2].children[0].click();

				let loopC = setInterval(() => {
					if (document.querySelector("#process-result > div > a")) {
						document.querySelector("#process-result > div > a").click();

						setTimeout(()=>{window.close();}, 2000);
						clearInterval(loopC);
					}
				}, 30);
			}
			
			clearInterval(loopA);
		}
	}, 30);
}
