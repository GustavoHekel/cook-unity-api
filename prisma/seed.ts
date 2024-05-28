import {PrismaClient} from '@prisma/client'
import {type as CardTypes} from '../constants/type'
import {rarity as RarityTypes} from '../constants/rarity'

const prisma = new PrismaClient()

async function main() {

    // Create rarity types
    await prisma.rarity.createMany({
        data: [
            {id: RarityTypes.COMMON, name: 'Common'},
            {id: RarityTypes.UNCOMMON, name: 'Uncommon'},
            {id: RarityTypes.RARE, name: 'Rare'},
        ]
    })

    // Create card types
    await prisma.type.createMany({
        data: [
            {id: CardTypes.FIRE, name: 'Fire'}, {id: CardTypes.WATER, name: 'Water'}, {
                id: CardTypes.NORMAL,
                name: 'Normal'
            },
            {id: CardTypes.ELECTRIC, name: 'Electric'}, {id: CardTypes.GRASS, name: 'Grass'}, {
                id: CardTypes.ICE,
                name: 'Ice'
            },
            {id: CardTypes.FIGHTING, name: 'Fighting'}, {id: CardTypes.POISON, name: 'Poison'}, {
                id: CardTypes.GROUND,
                name: 'Ground'
            },
            {id: CardTypes.FLYING, name: 'Flying'}, {id: CardTypes.PSYCHIC, name: 'Psychic'}, {
                id: CardTypes.BUG,
                name: 'Bug'
            },
            {id: CardTypes.ROCK, name: 'Rock'}, {id: CardTypes.GHOST, name: 'Ghost'}, {
                id: CardTypes.DRAGON,
                name: 'Dragon'
            },
            {id: CardTypes.DARK, name: 'Dark'}, {id: CardTypes.STEEL, name: 'Steel'}, {
                id: CardTypes.FAIRY,
                name: 'Fairy'
            }
        ]
    })

    // Create cards
    await prisma.card.createMany({
        data: [
            {
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
            {
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
            {
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
            {
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
            {
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
            {
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
            {
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
        ]
    })
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