const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const fs = require('fs')
var answer = JSON.parse(fs.readFileSync("answer.json"))
const updateJsonFile = require('update-json-file')
const filePath = 'answer.json'
const sha1 = require('sha1')

var letters = {
    caracteres: answer.cifrado.split(''),
    indexes: [],
    indiceOriginal: function(a,c) {
        this.caracteres.forEach(i => {
            if ( a.indexOf(i) != -1 ) {
                let index = a.indexOf(i) - c
                if (index < 26 && index >= 0 ) {
                    this.indexes.push(a[index])
                } else if ( index < 0) {
                    this.indexes.push(a[index + 26])
                }            
            } else {
                this.indexes.push(' ')
            }
        })
        return this.indexes.join('')
    }
}

updateJsonFile(filePath, (data) => {
    data.decifrado = letters.indiceOriginal(alfabeto, 5)
    data.resumo_criptografico = sha1(letters.indiceOriginal(alfabeto, 5))
    return data
})


console.log( sha1('the best engineers i know are artists at heart. the best designers i know are secretly technicians as well. andrei herasimchuk') )