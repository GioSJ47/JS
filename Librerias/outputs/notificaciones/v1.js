/*
    Script creado el 01/07/2021 (dd/mm/aaaa) por GioSJ
    Código en GitHub: https://github.com/GioSJ47/JS/tree/master/Librerias/outputs/notificaciones/v1.js
*/

///////////////////////////
// FUNCIONES PRINCIPALES //
///////////////////////////

  //FUNCION PARA ENVIAR NOTIFICACIONES CON AUTOLIMPIEZA (AUTODESTRUCCION)
  function notifiTemporal(msg, titulo="", icono="", t=5000) {
    var opciones = {
        body: msg,
        icon: icono
    }
    if(notiPermiso()) var n = new Notification(titulo,opciones);
    setTimeout(n.close.bind(n), t);
  }
  
  //FUNCION PARA EMITIR NOTIFICACION
  function notifi(msg, titulo="", icono=""){
    var opciones = {
        body: msg,
        icon: icono
    }
    if(notiPermiso()) var n = new Notification(titulo, opciones);
  }





////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONES QUE PERMITEN EL CORRECTO FUNCIONAMIENTO DE LAS FUNCIONES ANTERIORMENE DECLARADAS //
////////////////////////////////////////////////////////////////////////////////////////////////

  //FUNCION PARA PEDIR PERMISO DE NOTIFICACION AL USUARIO
  function notiPermiso(){
    if (window.Notification && Notification.permission !== "granted"){
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status)
          Notification.permission = status;
          return true;
      });
      return false;
    } else return true;
  }
  
  //FUNCION PARA VER SI LA PAGINA YA TIENE PERSMISO DE NOTIFICAR
  function notiSiPermiso(){
    if (window.Notification && Notification.permission === "granted") return true;
    else return false;
  }
