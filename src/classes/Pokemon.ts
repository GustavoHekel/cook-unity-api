import {Card} from "@prisma/client";

export class Pokemon {

    attacker: Card

    constructor(attacker: Card) {
        this.attacker = attacker
    }

    attack(defender: Card) {
        let attackValue = this.attacker.attackValue
        let resistanceValue = 0

        if (this.attacker.typeId === defender.weaknessTypeId) {
            attackValue = attackValue * defender.weaknessValue
        }

        if (this.attacker.typeId === defender.resistanceTypeId) {
            resistanceValue = Number(defender.resistanceValue)
        }

        console.log('Attack value => ' + attackValue)
        console.log('Resistance value => ' + resistanceValue)
        console.log('Defender HP => ' + defender.hp)

        return attackValue >= (defender.hp + resistanceValue)
    }

}