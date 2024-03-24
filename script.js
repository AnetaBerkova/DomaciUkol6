const cenaJustFood = 100
const cenaYourMama = 200
const cenaFlavourHaven = 300

const justFood = (pocetOsob) => {
    const cena = pocetOsob * cenaJustFood
    return `Catering od Just Food pro ${pocetOsob} osob za ${cena} Kč.`
}

const yourMama = (pocetOsob) => {
    const cena = pocetOsob * cenaYourMama
    return `Catering od Your Mama pro ${pocetOsob} lidí za ${cena} Kč`
}

const flavourHaven = (pocetOsob) => {
    const cena = pocetOsob * cenaFlavourHaven
    return `Catering od Flavour Haven pro ${pocetOsob} osob za ${cena} Kč.`
}

console.log(justFood(100))
console.log(yourMama(100))
console.log(flavourHaven(100))

const createEvent = (nazevAkce, pocetOsob, catering) => {
    const cena = catering(pocetOsob)
    return `Událost ${nazevAkce} s cateringem od ${catering.nazev} pro ${pocetOsob} osob za ${cena} Kč.`
}

console.log(createEvent("Velkolepá svatba", 1000, flavourHaven))