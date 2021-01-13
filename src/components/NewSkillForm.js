import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_SKILL = gql`
  mutation AddSkill($title: String!, $strength: Int!) {
    createSkill(title: $title, strength: $strength) {
      id
      title
      strength
    }
  }
`;

const NewSkillForm = () => {
  const [addSkill] = useMutation(ADD_SKILL, {
    update(cache, { data: { createSkill } }) {
      cache.modify({
        fields: {
          skills(existingSkills = []) {
            const newSkillRef = cache.writeFragment({
              data: createSkill,
              fragment: gql`
                fragment NewSkill on Skill {
                  id
                  title
                  strength
                }
              `,
            });
            return [...existingSkills, newSkillRef];
          },
        },
      });
    },
  });
  const [title, setTitle] = useState('');
  const [strength, setStrength] = useState('');

  // TODO: Add loading spinner …?
  // if (loading) return <p>Loading...</p>;

  // TODO: Add error handling
  // if (error) return <p>Error :(</p>;

  const handleClick = () => {
    if (strength && title) {
      addSkill({ variables: { strength, title } });
      setTitle('');
      setStrength('');
    }
  };

  const buttonDisabled = strength === '' || title === '';

  return (
    <div className="w-96 rounded-md shadow-md mb-8 mx-auto">
      <div className="pt-4 px-4 pb-4">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="E.g. barking, napping, fetching sticks …"
        />
      </div>
      <div className="px-4">
        <label htmlFor="strength" className="sr-only">
          Strength
        </label>
        <input
          id="strength"
          name="strength"
          required
          value={strength}
          onChange={(e) => setStrength(parseInt(e.target.value))}
          type="number"
          className="appearance-none rounded-none w-full relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="How good are you on a scale from 1 to 9?"
        />
      </div>
      <div className="p-4 w-full">
        <div>
          <button
            onClick={handleClick}
            className={`inline-flex items-center w-full justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white ${
              buttonDisabled
                ? 'bg-indigo-400'
                : 'bg-indigo-600 hover:bg-indigo-700'
            } `}
            disabled={buttonDisabled}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewSkillForm;
