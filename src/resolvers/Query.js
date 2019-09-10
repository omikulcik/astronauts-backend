const Query = {
    astronauts(parent, args, { prisma }, info) {
        return prisma.query.astronauts({}, info)
    }
}

export { Query as default }