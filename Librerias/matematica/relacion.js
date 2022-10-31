/*  ESTA FUNCION ENCUENTRA LA RELACION ENTRE ANCHO Y ALTO.
    LA FUNCION DEVUELVE UN ARRAY CON LA RELACION.
    
    EJ: LA RELACION ENTRE 4 Y 10 ES DE 2:5
*/

function relacion(a, b) {
    let bool = true;

    while (bool) {
        bool = false;
        for (let i = 2; i<10; i++) {
            if (a % i == 0 && b % i == 0) {
                a /= i;
                b /= i;
                bool = true;
                break;
            }
        }
    }

    return [a, b];
}
