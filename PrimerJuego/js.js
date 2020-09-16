//FUNCIONES DE INPUT (RECURSOS)
	var dimenciones = {
		ancho: 0,
		alto: 0,
		iniciar: function() {
			window.addEventListener("resize", function(evento) {
				dimenciones.ancho = window.innerWidth || document.documentElement.clientWidth || docuemnt.body.cientWidth;
				dimenciones.alto = window.innerHeight || document.documentElement.clientHeight || docuemnt.body.cientHeight;
				console.log("Ancho: " + dimenciones.ancho + " | Alto: " + dimenciones.alto);
			});
		}
	};


//FUNCIONES DE PROCESAMIENTO
	//DIBUJOS
	function rectangulo(x, y, ancho, alto){
		this.x = x;
		this.y = y;
		this.alto = alto;
		this.ancho = ancho;
		
		this.id = "r" + x + y;
		
	}
	
	rectangulo.prototype.insertarDOM = function(){
		var div = '<div id="'+ this.id +'"></div>';
	}
	
	//TECLADO
	var teclado = {
		teclas: new Array(),
		iniciar: function() {
			document.onkeydown = teclado.guardarTecla;
		},
		guardarTecla: function(e){
			teclado.teclas.push(e.key);
			console.log("Tecla: " + e.key);
		},
		teclaPulsada: function(codigoTecla){
			return (teclado.teclas.indexOf(codigoTecla) !== -1) ? true : false;
		},
		reiniciar: function() {
			teclado.teclas = new Array();
		}
	};
	

	var buclePrincipal = {
		idEjecucion: null,
		ultimoRegistro: 0,
		aps: 0,
		fps: 0,
		iterar: function(registroTemporal){
			buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
			
			buclePrincipal.actualizar(registroTemporal);
			buclePrincipal.dibujar();
			
			if(registroTemporal - buclePrincipal.ultimoRegistro > 999){
				buclePrincipal.ultimoRegistro = registroTemporal;
				console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
				buclePrincipal.aps = 0;
				buclePrincipal.fps = 0;
			}
		},
		detener: function(){
			
		},
		actualizar: function(registroTemporal){
			teclado.reiniciar();
			buclePrincipal.aps++;
		},
		dibujar: function(registroTemporal){
			buclePrincipal.fps++;
		}	
	};


//INICIALIZAR JUEGO
	document.addEventListener('DOMContentLoaded', function(){
		inicio.iniciarJuego();
	}, false);

	var inicio = {
		iniciarJuego: function(){
			console.log("Juego iniciado");
			teclado.iniciar();
			dimenciones.iniciar();
			buclePrincipal.iterar();
		}
	};
