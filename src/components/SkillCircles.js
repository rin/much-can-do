import React from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
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

const CIRCLE_COLORS = [
  '#9b5de5',
  '#f15bb5',
  '#fee440',
  '#00bbf9',
  '#00f5d4',
  '#85CB33',
  '#D81E5B',
];

const SkillCircles = () => {
  // Amelia Wattenberger has some good thoughts on how to combine React and D3
  // -> https://wattenberger.com/blog/react-and-d3
  // but for now I use https://github.com/weknowinc/react-bubble-chart-d3/

  const { loading, error, data } = useQuery(GET_SKILLS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="pb-6 w-full">
      <BubbleChart
        graph={{ zoom: 0.5, offsetX: 0, offsetY: 0 }}
        showLegend={false}
        valueFont={{ size: 0 }}
        // TODO: this having a fixed size is not great –
        // should use something like https://github.com/bvaughn/react-virtualized-auto-sizer
        width={1000}
        height={400}
        legendPercentage={0}
        labelFont={{
          family: 'Helvetica',
          size: 18,
          color: '#fff',
          weight: 'normal',
        }}
        // bubbleClickFunc={this.bubbleClick}
        data={data.skills.map(({ title, strength }, index) => ({
          label: title,
          value: strength,
          color: CIRCLE_COLORS[index],
        }))}
      />
    </div>
  );
};

export default SkillCircles;
