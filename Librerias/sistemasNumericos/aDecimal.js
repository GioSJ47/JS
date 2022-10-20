/*  DESCRIPCION: LA FUNCION aDecimal PASA DE UN SISTEMA NUMERICO NO DECIMAL A DECIMAL.

    PRIMER PARAMETRO: NUMERO A SER TRANSFORMADO. SI LLEBA LETRAS DEBE ESTAR ENTRE COMILLAS PERO SI SOLO LLEBA NUMEROS PUEDE ESATR SIN COMILLAS.
    SEGUNDO PARAMETRO: BASE NUMERICO DEL NUMERO INGRESADO.
    
    POR EJEMPLO PARA PASAR EL NUMERO OCTAL 3461 A SISTEMA DECIMAL: aDecimal(3461, 8);
*/

function aDecimal(numero, base) {
    numero = Array.from(String(numero).toUpperCase());
    base = parseInt(base);
    var valor = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ];

    if (base > 1 && base < valor.length + 1) {
        var res = 0;
        var peso = 1;

        for (let i = numero.length - 1; i >= 0; i--) {
            let a = valor.indexOf(numero[i]);

            if (a != -1 && a < base) {
                res  += a * peso;
                peso *= base;
            } else {
                return false;
            }
        }

        return res;
    }
    
    return undefined;
}
