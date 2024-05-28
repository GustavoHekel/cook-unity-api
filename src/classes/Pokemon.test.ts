import { Card } from "@prisma/client";
import { Pokemon } from "./Pokemon";

describe('Pokemon', () => {
    let attacker: Card;
    let defender: Card;

    beforeEach(() => {
        attacker = {
            id: 1,
            name: 'Pikachu',
            hp: 100,
            attackValue: 80,
            typeId: 1,
            weaknessTypeId: 2,
            weaknessValue: 2,
            resistanceTypeId: 3,
            resistanceValue: 10,
            expansion: 'Mock exp',
            rarityId: 1,
            attackName: 'Mock attack',
            createdAt: new Date(),
            updatedAt: new Date(),
            imageURL: 'Mock image'
        };

        defender = {
            id: 2,
            name: 'Bulbasaur',
            hp: 60,
            attackValue: 30,
            typeId: 2,
            weaknessTypeId: 3,
            weaknessValue: 2,
            resistanceTypeId: 1,
            resistanceValue: 10,
            expansion: 'Mock exp',
            rarityId: 1,
            attackName: 'Mock attack',
            createdAt: new Date(),
            updatedAt: new Date(),
            imageURL: 'Mock image'
        };
    });

    test('should defeat defender when attack value is greater than defender hp plus resistance', () => {
        const pokemon = new Pokemon(attacker);
        const result = pokemon.attack(defender);
        expect(result).toBe(true);
    });

    test('should not defeat defender when attack value is less than defender hp plus resistance', () => {
        attacker.attackValue = 40;
        const pokemon = new Pokemon(attacker);
        const result = pokemon.attack(defender);
        expect(result).toBe(false);
    });

    test('should apply weakness multiplier if attacker type matches defender weakness type', () => {
        attacker.typeId = defender.weaknessTypeId;
        const pokemon = new Pokemon(attacker);
        const result = pokemon.attack(defender);
        expect(result).toBe(true);
    });

    test('should handle scenario where both weakness multiplier and resistance apply', () => {
        defender.weaknessTypeId = 1;
        defender.resistanceTypeId = 1;
        attacker.typeId = 1;
        const pokemon = new Pokemon(attacker);
        const result = pokemon.attack(defender);
        expect(result).toBe(true);
    });
});
