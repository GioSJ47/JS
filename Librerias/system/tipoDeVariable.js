// FUNCION QUE DEVUELVE UN STRING INDICANDO EL TIPO DE LA VARIABLE INGRESADA

function tipoDeVariable(x) {
    if (Number.isInteger(x))
        return "int";
        
    else if (Number.isFinite(x))
        return "float";

    else if (Number.isNaN(x))
        return "NaN";

    else if (x === undefined)
        return "undefined";

    else if (Array.isArray(x))
        return "array";

    else if (typeof x == "object")
        return "objet";

    else if (typeof x == "boolean")
        return "boolean";

    else if (typeof x === "string")
        return "string";

    return "error";
}
