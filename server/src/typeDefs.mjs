import apollo from 'apollo-server';
const { gql } = apollo;

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
    deleteSkill(id: ID!): String!
  }
`;

export default typeDefs;
