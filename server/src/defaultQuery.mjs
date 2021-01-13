// Default Query that is displayed in the GraphQL Playground

const defaultQuery = `# Get all skills
query Query {
  skills {
    id
    title
    strength
  }
}

# mutation AddSkill {
#  createSkill(title: "Eating", strength: 9){ id
#   title strength }
# }
#
# mutation UpdateSkill {
#  updateSkill(id: "5ffc2deb673a5dce35b0fe6f", title: "Feeding", strength: 4) {
#    id
#    title
#    strength
#  }
# }
#
# mutation deleteSkill {
#  deleteSkill(id: "5ffc7ba75e53d323551708e1")
# }
`;

export default defaultQuery;
