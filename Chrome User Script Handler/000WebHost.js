// ==UserScript==
// @name           Auto inicio de sesion 000WebHost
// @description    Inicia automaticamente sesion en https://files.000webhost.com
// @author         GC
// @include        https://files.000webhost.com/?authenticated=-1
// @version        1.0
// ==/UserScript==

//CONFIG
  let usuario = "GioCodex";
  let clave   = "";

//FUNCIONES
  function forzarInp(eMsg, msg){
  	//AGREGAR TEXTO A INPUT
  	eMsg.innerHTML = msg.replace(/  /gm,'');
  	eMsg.value = msg.replace(/  /gm,'');
  
  	//FORZAR REFLESH
  	event = document.createEvent("UIEvents");
  	event.initUIEvent("input", true, true, window, 1);
  	eMsg.dispatchEvent(event);
  }

//EVENTOS
  window.onload = () => {
  	forzarInp(document.getElementById("input-username"), usuario);
  	forzarInp(document.getElementById("input-password"), clave);
  
  	setTimeout(()=>{document.querySelector("body > div > div > div > form > p > button").click();}, 300);
  }
