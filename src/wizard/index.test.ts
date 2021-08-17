import Wizard from '.';

describe('Wizard', () => {
  describe('#talk', () => {
    xit('greets you with their name', () => {
      // const character = new Wizard('Ted');
      // expect(character.talk('Bill')).toBe("Nice to meet you, Bill! I'm Ted");
    });
  });

  describe('#attack', () => {
    xit('reduces the character\'s health by 1', () => {
      // const character = new Wizard('Balthazar');
      // character.attack(1);
      // expect(character.health).toBe(49);
    });

    xit('returns 1 point damage when attacked', () => {
      // const character = new Wizard('Balthazar');
      // const counterDamage = character.attack(1);
      // expect(counterDamage).toBe(1);
    });
  });

  describe('#cast', () => {
    xit('casts a protection spell when asked nicely', () => {
      // const character = new Wizard('Balthazar');

      // // argument must include the words `please` and `protection`
      // const response = character.cast('Please cast me a protection spell.');
      // expect(response).toBe('Protection spell cast');
      // expect(character.magic).toBe(20);
    });

    xit('does not cast a protection spell if not asked nicely', () => {
      // const character = new Wizard('Balthazar');
      // const response = character.cast('Cast me a protection spell.');
      // expect(response).toBe('You did not say the magic word.');
      // expect(character.magic).toBe(25);
    });

    xit('does not cast a protection spell if there is not enough magic', () => {
      // const character = new Wizard('Balthazar');
      // character.cast('Please cast me a protection spell.');
      // character.cast('Please cast me a protection spell.');
      // character.cast('Please cast me a protection spell.');
      // character.cast('Please cast me a protection spell.');
      // character.cast('Please cast me a protection spell.');
      // const response = character.cast('Please cast me a protection spell.');
      // expect(response).toBe('I do not have enough magic.');
      // expect(character.magic).toBe(0);
    });
  });
});
