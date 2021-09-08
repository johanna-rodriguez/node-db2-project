// STRETCH
const cars = [
    {
        vin: '1G1PG5SC9C7191727',
        make: 'toyota',
        model: 'rav4',
        mileage: 250000,
        title: 'clean',
        transmission: 'Automatic',
    },
    {
        vin: '1FUYDSEBXSP556994',
        make: 'toyota',
        model: '4Runner',
        mileage: 50000,
        title: 'salvage',
    },
    {
        vin: 'JNKCV54E64M808593',
        make: 'jeep',
        model: 'grand cherokee',
        mileage: 5000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
  }
