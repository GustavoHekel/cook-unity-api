import {Request, Response} from "express";
import {Card} from '@prisma/client'
import {Pokemon} from "../../../classes/Pokemon";
import {CardRepository} from "../../../repositories/cardRepository";

export class CardController {

    repository

    constructor() {
        this.repository = new CardRepository('card')
    }

    index = async (req: Request, res: Response) => {

        let filters: Record<string, any> = {}

        if (req.query.type) {
            filters['typeId'] = Number(req.query.type)
        }

        if (req.query.rarity) {
            filters['rarityId'] = Number(req.query.rarity)
        }

        const cards = await this.repository.all({
            where: {...filters},
            include: {
                type: true,
                rarity: true
            }
        })

        res.send({
            data: cards
        })
    }

    get = async (req: Request, res: Response) => {

        const card = await this.repository.find({
            where: {id: Number(req.params.id)},
            include: {
                type: true,
                rarity: true
            }
        })

        res.send({
            data: card
        })
    }

    create = async (req: Request, res: Response) => {

        const card = await this.repository.create({
            name: req.body.name,
            attackName: req.body.attackName,
            attackValue: req.body.attackValue,
            hp: req.body.hp,
            typeId: req.body.typeId,
            weaknessValue: req.body.weaknessValue,
            weaknessTypeId: req.body.weaknessTypeId,
            resistanceValue: req.body.resistanceValue,
            resistanceTypeId: req.body.resistanceTypeId,
            expansion: req.body.expansion,
            rarityId: req.body.rarityId
        })

        res.status(201).send({
            data: card
        })
    }

    update = async (req: Request, res: Response) => {
        const card = await this.repository.update(Number(req.params.id), {
            name: req.body.name,
            attackName: req.body.attackName,
            attackValue: req.body.attackValue,
            hp: req.body.hp,
            typeId: req.body.typeId,
            weaknessValue: req.body.weaknessValue,
            weaknessTypeId: req.body.weaknessTypeId,
            resistanceValue: req.body.resistanceValue,
            resistanceTypeId: req.body.resistanceTypeId,
            expansion: req.body.expansion,
            rarityId: req.body.rarityId
        })

        res.send({
            data: card
        })
    }

    destroy = async (req: Request, res: Response) => {
        await this.repository.destroy(Number(req.params.id))

        res.status(204).send({})
    }

    stats = async (req: Request, res: Response) => {

        const cards = await this.repository.all()
        const selectedCard = cards.find((card: Card) => String(card.id) === req.params.id)

        const weaknesses = cards.filter((card: Card) => card.typeId === selectedCard.weaknessTypeId)
        const resistances = cards.filter((card: Card) => card.typeId === selectedCard.resistanceTypeId)

        res.send({
            data: {
                card: selectedCard,
                weaknesses,
                resistances
            }
        })

    }

    fight = async (req: Request, res: Response) => {

        const attacker = await this.repository.find({
            where: {id: Number(req.params.attackerId)},
        })

        const defender = await this.repository.find({
            where: {id: Number(req.params.defenderId)},
        })

        const pokemon = new Pokemon(attacker as Card)

        res.send({
            data: {winner: pokemon.attack(defender as Card)}
        })
    }
}