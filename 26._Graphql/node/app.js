import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  }),
});

const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.all('/graphql', createHandler({ schema }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });