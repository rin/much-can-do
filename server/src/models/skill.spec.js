import Skill from './skill.mjs';

describe('Creating a skill', () => {
  it('should have strength and title', () => {
    const skill = new Skill({ title: 'Writing Tests', strength: 7 });
    expect(skill.title).toEqual('Writing Tests');
    expect(skill.strength).toEqual(7);
  });
});

describe('Validations', () => {
  xit('should validate uniqueness of title', () => {
    new Skill({ title: 'Writing Tests', strength: 7 });
    expect(new Skill({ title: 'Writing Tests', strength: 3 })).toThrowError(
      'A skill with this title already exists',
    );
  });

  it('should validate existence of title', () => {
    expect(
      new Skill({ strength: 1 }).validateSync().errors['title'].message,
    ).toEqual('What can you do?');
  });

  it('should validate existence of strength', () => {
    expect(
      new Skill({ title: 'Woof' }).validateSync().errors['strength'].message,
    ).toEqual('Yeah but how much exactly?');
  });

  it('should validate range of strength', () => {
    const worseThanWorst = new Skill({ title: 'Writing Tests', strength: -1 });
    expect(worseThanWorst.validateSync().errors['strength'].message).toEqual(
      'Must be between 1 and 9',
    );
    const betterThanBest = new Skill({ title: 'Breaking Tests', strength: 10 });
    expect(betterThanBest.validateSync().errors['strength'].message).toEqual(
      'Must be between 1 and 9',
    );
  });
});
