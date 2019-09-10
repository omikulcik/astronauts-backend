import { extractFragmentReplacements } from 'prisma-binding'
import Query from './Query'
import Mutation from './Mutation'
import Subscription from './Subscription'
import Astronaut from './Astronaut'

const resolvers = {
    Query,
    Mutation,
    // Subscription,
    Astronaut
}

const fragmentReplacements = extractFragmentReplacements(resolvers)

export { resolvers, fragmentReplacements }