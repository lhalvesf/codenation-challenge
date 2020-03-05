const alf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var resposta = {
    "numero_casas": 5,
    "token": "7a58e9f44be8d1d98f73f57fd8461b831031f46e",
    "cifrado": "ymj gjxy jslnsjjwx n pstb fwj fwynxyx fy mjfwy. ymj gjxy ijxnlsjwx n pstb fwj xjhwjyqd yjhmsnhnfsx fx bjqq. fsiwjn mjwfxnrhmzp",
    "decifrado": "",
    "resumo_criptografico": ""
}

var letters = resposta.cifrado.split('')

function encontraLetra(l,c) {
    var letterPosition = alf.indexOf(l)+c
    if (letterPosition > 26) {
        return converteLetra(letterPosition - 26)
    } else {
        return converteLetra(letterPosition)
    }
}


function converteLetra(l) {
    var texto = []
    if (l == undefined) {
        return texto.push(" ")
    } else {
        return texto.push(alf[l])
    }
    console.log(texto)
}
function roda(c) {
    letters.forEach(element => {
        encontraLetra(element,c)
    })
}

roda(0)

// console.log(encontraLetra(letters,1))
