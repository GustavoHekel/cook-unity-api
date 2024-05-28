"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.index = void 0;
const client_1 = require("@prisma/client");
const index = (req, res) => {
    const prisma = new client_1.PrismaClient({});
    const users = yield prisma.user;
};
exports.index = index;
const get = (req, res) => {
    res.send({
        foo: 'bar'
    });
};
exports.get = get;
