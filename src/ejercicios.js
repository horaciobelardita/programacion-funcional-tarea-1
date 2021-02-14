export function multiplicarPor10(array) {
    return array.map(item => item * 10)
}

export function soloPares(array) {
    return array.filter(item => item % 2 === 0)
}

export function moverALaDerecha(array) {
    const lastIndex = array.length - 1
    return [
        array[lastIndex],
        ...array.slice(0,lastIndex)
    ]
}

export function soloUnaPalabra(array) {
    return array.filter(word => !word.includes(' '))
}

export function soloArraysPositivos(array) {
   return [...array].filter(nested => nested.every(item => item > 0) )

}

export function soloVocales(array) {
    return array.map(str => str.replace(/[^aeiou]/g, ""))
}

export function todasVocalesIguales(array) {
    return array.filter(word => {
        const firstVowelInWord = [...word].find(char => char.match(/[aeiou]/))
        const vowelsInWord = [...word].filter(char => char.match(/[aeiou]/))
        return vowelsInWord.every(char => char === firstVowelInWord)
    })
}

export function duplicarMatriz(array) {
   return [...array].map(nested => nested.map(item => item * 2))
}

export function mayoresDeEdadValidados(array) {
    return [...array].map(obj => ({
        ...obj,
        mayor: obj.edad > 18
    }))
}

export function transformarObjetoEnArray(objeto) {
    return Object.keys(objeto).map(key => ({
        id: key,
        ...objeto[key]
    }))
}
