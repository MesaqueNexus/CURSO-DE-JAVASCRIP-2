const escola = 'Mesaque'
console.log(escola.charAt(4))
console.log(escola.charCodeAt(4)) // numero UNICOD
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(0, 'K'))
console.log('mesaque,Mendonça,de,Souza'.split(','))

console.log('---------------------------------------------------')

let nomeCompleto = 'Mesaque,Mendonça,de,Souza'.split(',')
console.log(nomeCompleto[0].split(','))