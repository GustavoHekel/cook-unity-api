import joi from 'joi'
import {Request, Response, NextFunction} from "express";
import {type as CardTypes} from "../../../../constants/type";
import {rarity as RarityTypes} from "../../../../constants/rarity"

const getTypes = () => {
    return Object.values(CardTypes).filter(val => typeof val === 'number');
}

const getRarities = () => {
    return Object.values(RarityTypes).filter(val => typeof val === 'number');
}

const schema = joi.object({
    id: joi.number().required(),
    name: joi.string(),
    attackName: joi.string(),
    attackValue: joi.number(),
    hp: joi.number(),
    typeId: joi.number().valid(...getTypes()),
    expansion: joi.string(),
    rarityId: joi.number().valid(...getRarities())
})

export const validateUpdateCardRequest = (req: Request, res: Response, next: NextFunction) => {
    const {error} = schema.validate({
        id: req.params.id,
        ...req.body
    }, {
        allowUnknown: true
    })

    if (error) {
        return res.status(400).send(error.details);
    }

    next()

}