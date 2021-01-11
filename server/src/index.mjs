import apollo from 'apollo-server';
import mongoose from 'mongoose';
import Skill from './models/skill.mjs';

const { ApolloServer, gql } = apollo;
// some oddity when importing ApolloServer,
// see https://github.com/apollographql/apollo-server/issues/1356#issuecomment-565273737

const DEFAULT_DB_URI = 'mongodb://localhost:27017/muchcando';

mongoose.connect(process.env.DB_URI || DEFAULT_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const typeDefs = gql`
  type Query {
    getSkill(id: ID!): Skill
    skills: [Skill]
  }
  type Skill {
    id: ID!
    title: String!
    strength: Int!
  }
  type Mutation {
    createSkill(title: String!, strength: Int!): Skill!
    updateSkill(id: ID!, title: String, strength: Int): Skill!
    deleteSkill(id: ID!): Skill!
  }
`;

const resolvers = {
  Query: {
    skills: () => Skill.find(),
    getSkill: async (_, { id }) => {
      var result = await Skill.findById(id);
      return result;
    },
  },
  Mutation: {
    createSkill: async (_, { title, strength }) => {
      const skill = new Skill({ title, strength });
      await skill.save();
      return skill;
    },
    updateSkill: async (_, { id, title, strength }) => {
      const skill = Skill.findById(id);
      // TODO: update
      await skill.save();
      return skill;
    },
    deleteSkill: async (_, { id }) => {
      await Skill.findByIdAndRemove(id);
      return 'Skill deleted';
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connection.once('open', function () {
  server
    .listen()
    .then(({ url }) => console.log(`Apollo Server is running on ${url}`));
});
