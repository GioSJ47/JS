// H O A G
function trig (datos, formato, out=false){
	
	formato = formato.toUpperCase().split("");

	let h = (arr, buscar)=>{ return arr.indexOf(buscar)+1 }
	let m = (buscar)=>{ return datos[formato.indexOf(buscar)] }
	
	let x;
	if(out){
		for(i in datos){
			if(!datos[i])x=formato[i]
		}
	} else {
		x=out;
	}
  
	//SENO O COSENO
  if(h(formato, "H") || h(out, "H")){
    //SENO
		if(h(formato, "O") || h(out, "O")){
      if(x=="H"){
				return m("O") / Math.sin(m("G"))
			}
			if(x=="O"){
				return m("H") * Math.sin(m("G"))
			}
			if(x=="G"){
				return Math.asin(m("O") / m("H"))
			}
    } else

		//COSENO
		if(h(formato, "A") || h(out, "A")){
			if(x=="H"){
				return m("A") / Math.cos(m("G"))
			}
			if(x=="A"){
				return m("H") * Math.cos(m("G"))
			}
			if(x=="G"){
				return Math.acos(m("A") / m("H"))
			}
		}		
  } else

	//TANGENTE
	if((h(formato, "A")||h(out, "A")) && (h(formato, "O")||h(out, "O"))){
    if(x=="A"){
				return m("O") / Math.tan(m("G"))
			}
			if(x=="O"){
				return m("A") * Math.tan(m("G"))
			}
			if(x=="G"){
				return Math.atan(m("O") / m("A"))
			}
  }

	else {
		return false;
	}
}
