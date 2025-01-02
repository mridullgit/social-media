const ADJECIVE = [
    'Strike',
    'Mystic',
    'Elite',
    'Phoenix',
    'Endeavour',
    'Candor',
    'Frivolous',
    'Cogent',
    'BRood',
    'Confate'
]
const OBJECT = [
    'Incognto',
    'Combat',
    'Bucolic',
    'Claggy',
    'Epitome',
    'Magenta',
    'Rigorous',
    'VErtex',
]
function getrandomUsername() {
    const adj  = ADJECIVE[Math.floor(Math.random()*10)]
    const obj = OBJECT[Math.floor(Math.random()*8)]
    return adj+"-"+obj
}

module.exports = {
    getrandomUsername
}