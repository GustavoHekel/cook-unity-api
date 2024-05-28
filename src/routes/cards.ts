import express from "express";
import {CardController} from '../app/Http/Controllers/cardController'
import {validateCreateCardRequest} from '../app/Http/Requests/createCardRequest'
import {validateUpdateCardRequest} from "../app/Http/Requests/updateCardRequest";

const router = express.Router()
const cardController = new CardController()

router.get('/', cardController.index)
router.post('/', validateCreateCardRequest, cardController.create)
router.get('/:id', cardController.get)
router.put('/:id', validateUpdateCardRequest, cardController.update)
router.delete('/:id', cardController.destroy)

router.get('/:id/stats', cardController.stats)
router.get('/:attackerId/:defenderId', cardController.fight)

export default router