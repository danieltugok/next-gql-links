import { Resolvers } from './resolvers-types';

export const resolvers:Resolvers = {
  Query: {
    links: async (parent, args, ctx) => await ctx.prisma.link.findMany()
  }

}