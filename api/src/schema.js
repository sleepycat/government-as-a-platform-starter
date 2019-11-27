const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      description: 'hello world',
      type: GraphQLString,
      resolve: () => 'world',
    },
  }),
})

module.exports.schema = new GraphQLSchema({ query })
