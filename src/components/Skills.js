import { useQuery, gql } from '@apollo/client';

const GET_SKILLS = gql`
  query GetSkills {
    skills {
      id
      title
      strength
    }
  }
`;

const Skills = () => {
  const { loading, error, data } = useQuery(GET_SKILLS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.skills.map(({ title, strength, id }) => (
    <div key={id}>
      <p>
        {title}: {strength}
      </p>
    </div>
  ));
};
export default Skills;
