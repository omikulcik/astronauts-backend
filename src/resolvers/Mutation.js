const Mutation = {
    createAstronaut(parent, args, { prisma }, info) {
        return prisma.mutation.createAstronaut({
            data: {
                ...args.data,
            }
        })
    },
    deleteAstronaut(parent, args, { prisma }, info) {
        return prisma.mutation.deleteAstronaut({
            where: {
                id: args.id
            }
        }, info)
    },
    updateAstronaut(parent, args, { prisma }, info) {
        return prisma.mutation.updateAstronaut({
            where: {
                id: args.id
            },
            data: {
                ...args.data
            }
        })
    }
}

export { Mutation as default }