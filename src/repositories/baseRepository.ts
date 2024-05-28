import {Prisma, PrismaClient} from "@prisma/client";

/**
 * Note:
 * Even though that by adding the Repository Pattern won't leverage from Typescript that much, I'm still
 * sticking with it as a way to demonstrate the theory behind it. Of course, I could've used something
 * like NestJS, which already provides this, but it felt like an overkill for something so simple
 */

export abstract class BaseRepository {

    private model: Uncapitalize<Prisma.ModelName>
    private prisma = new PrismaClient({})

    constructor(model: Uncapitalize<Prisma.ModelName>) {
        this.model = model
    }

    all(filters = {}) {
        return (this.prisma[this.model] as any).findMany(
            filters
        )
    }

    find(findCriteria: any) {
        return (this.prisma[this.model] as any).findFirst(findCriteria)
    }

    create(data: any) {
        return (this.prisma[this.model] as any).create({
            data: {...data}
        })
    }

    update(id: number, data: any) {
        return (this.prisma[this.model] as any).update({
            where: {id},
            data: {...data}
        })
    }

    destroy(id: number) {
        return (this.prisma[this.model] as any).delete({
            where: {id}
        })
    }


}