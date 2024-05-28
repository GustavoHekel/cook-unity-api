"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cardController_1 = require("../app/Http/Controllers/cardController");
const router = express_1.default.Router();
router.get('/', cardController_1.index);
router.get('/:id', cardController_1.get);
exports.default = router;
