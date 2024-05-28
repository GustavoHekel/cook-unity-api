import joi from 'joi'
import {Request, Response, NextFunction} from "express";
import {type as CardTypes} from "../../../constants/type";
import {rarity as RarityTypes} from "../../../constants/rarity"

const getTypes = () => {
    return Object.values(CardTypes).filter(val => typeof val === 'number');
}

const getRarities = () => {
    return Object.values(RarityTypes).filter(val => typeof val === 'number');
}

const schema = joi.object({
    name: joi.string().required(),
    attackName: joi.string().required(),
    attackValue: joi.number().required(),
    hp: joi.number().required(),
    typeId: joi.number().valid(...getTypes()),
    expansion: joi.string().required(),
    rarityId: joi.number().valid(...getRarities())
})

export const validateCreateCardRequest = (req: Request, res: Response, next: NextFunction) => {

    const {error} = schema.validate(req.body, {
        allowUnknown: true
    })

    if (error) {
        return res.status(400).send(error.details);
    }

    next()

}