import {PrismaClient} from '@prisma/client'
import {type as CardTypes} from '../src/constants/type'
import {rarity as RarityTypes} from '../src/constants/rarity'

const prisma = new PrismaClient()

async function main() {

    // Create rarity types
    await Promise.all([
        prisma.rarity.upsert({
            where: {id: RarityTypes.COMMON},
            update: {},
            create: {
                id: RarityTypes.COMMON,
                name: 'Common'
            }
        }),
        prisma.rarity.upsert({
            where: {id: RarityTypes.UNCOMMON},
            update: {},
            create: {
                id: RarityTypes.UNCOMMON,
                name: 'Uncommon'
            }
        }),
        prisma.rarity.upsert({
            where: {id: RarityTypes.RARE},
            update: {},
            create: {
                id: RarityTypes.RARE,
                name: 'Rare'
            }
        })
    ])

    // Create card types
    await Promise.all([
        prisma.type.upsert({
            where: {id: CardTypes.FIRE},
            update: {},
            create: {id: CardTypes.FIRE, name: 'Fire'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.WATER},
            update: {},
            create: {id: CardTypes.WATER, name: 'Water'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.NORMAL},
            update: {},
            create: {id: CardTypes.NORMAL, name: 'Normal'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.ELECTRIC},
            update: {},
            create: {id: CardTypes.ELECTRIC, name: 'Electric'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.GRASS},
            update: {},
            create: {id: CardTypes.GRASS, name: 'Grass'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.ICE},
            update: {},
            create: {id: CardTypes.ICE, name: 'Ice'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.FIGHTING},
            update: {},
            create: {id: CardTypes.FIGHTING, name: 'Fighting'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.POISON},
            update: {},
            create: {id: CardTypes.POISON, name: 'Poison'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.GROUND},
            update: {},
            create: {id: CardTypes.GROUND, name: 'Ground'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.FLYING},
            update: {},
            create: {id: CardTypes.FLYING, name: 'Flying'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.PSYCHIC},
            update: {},
            create: {id: CardTypes.PSYCHIC, name: 'Psychic'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.BUG},
            update: {},
            create: {id: CardTypes.BUG, name: 'Bug'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.ROCK},
            update: {},
            create: {id: CardTypes.ROCK, name: 'Rock'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.GHOST},
            update: {},
            create: {id: CardTypes.GHOST, name: 'Ghost'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.DRAGON},
            update: {},
            create: {id: CardTypes.DRAGON, name: 'Dragon'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.DARK},
            update: {},
            create: {id: CardTypes.DARK, name: 'Dark'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.STEEL},
            update: {},
            create: {id: CardTypes.STEEL, name: 'Steel'}
        }),
        prisma.type.upsert({
            where: {id: CardTypes.FAIRY},
            update: {},
            create: {id: CardTypes.FAIRY, name: 'Fairy'}
        })
    ])

    // Create cards
    await Promise.all([
        prisma.card.upsert({
            where: {name: 'Pikachu'},
            update: {},
            create: {
                name: 'Pikachu',
                attackName: 'Gnaw',
                attackValue: 20,
                hp: 60,
                typeId: CardTypes.ELECTRIC,
                weaknessValue: 2,
                weaknessTypeId: CardTypes.FIGHTING,
                resistanceValue: 20,
                resistanceTypeId: CardTypes.STEEL,
                expansion: 'Unified Minds',
                rarityId: RarityTypes.COMMON,
                imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
            },
        }),
        prisma.card.upsert({
            where: {name: 'Charizard'},
            update: {},
            create: {
                name: 'Charizard',
                attackName: 'Fire Blast',
                attackValue: 120,
                hp: 180,
                typeId: CardTypes.FIRE,
                weaknessValue: 2,
                weaknessTypeId: CardTypes.WATER,
                expansion: 'Flashfire',
                rarityId: RarityTypes.RARE,
                imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
            },
        }),
        prisma.card.upsert({
            where: {name: 'Onix'},
            update: {},
            create: {
                name: 'Onix',
                attackName: 'Body Slam',
                attackValue: 40,
                hp: 90,
                typeId: CardTypes.FIGHTING,
                weaknessValue: 1,
                weaknessTypeId: CardTypes.GRASS,
                expansion: 'Southern Islands',
                rarityId: RarityTypes.COMMON,
                imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png'
            },
        }),
        prisma.card.upsert({
            where: {name: 'Feraligatr'},
            update: {},
            create: {
                name: 'Feraligatr',
                attackName: 'Giant Wave',
                attackValue: 160,
                hp: 180,
                typeId: CardTypes.WATER,
                weaknessValue: 2,
                weaknessTypeId: CardTypes.ELECTRIC,
                expansion: 'Temporal Forces',
                rarityId: RarityTypes.RARE,
                imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png'
            },
        }),
        prisma.card.upsert({
            where: {name: 'Sneasel'},
            update: {},
            create: {
                name: 'Sneasel',
                attackName: 'Dig Claws',
                attackValue: 20,
                hp: 70,
                typeId: CardTypes.DARK,
                weaknessValue: 2,
                weaknessTypeId: CardTypes.GRASS,
                expansion: 'Paldea Evolved',
                rarityId: RarityTypes.COMMON,
                imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png'
            },
        }),
        prisma.card.upsert({
            where: {name: 'Scizor'},
            update: {},
            create: {
                name: 'Scizor',
                attackName: 'Special Blow',
                attackValue: 60,
                hp: 120,
                typeId: CardTypes.STEEL,
                weaknessValue: 2,
                weaknessTypeId: CardTypes.FIRE,
                resistanceValue: 20,
                resistanceTypeId: CardTypes.PSYCHIC,
                expansion: 'Lost Thunder',
                rarityId: RarityTypes.RARE,
                imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png'
            },
        }),
        prisma.card.upsert({
            where: {name: 'Treecko'},
            update: {},
            create: {
                name: 'Treecko',
                attackName: 'Shining Claws',
                attackValue: 10,
                hp: 40,
                typeId: CardTypes.PSYCHIC,
                weaknessValue: 1,
                weaknessTypeId: CardTypes.FIRE,
                resistanceValue: 30,
                resistanceTypeId: CardTypes.WATER,
                expansion: 'Crystal Guardians',
                rarityId: RarityTypes.COMMON,
                imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png'
            }
        })
    ])
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })