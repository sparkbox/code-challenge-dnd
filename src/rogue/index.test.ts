import Rogue from '.';

describe('Rogue', () => {
  describe('#talk', () => {
    xit('greets you with their name', () => {
      // const character = new Rogue('Ted');
      // expect(character.talk('Bill')).toBe("Nice to meet you, Bill! I'm Ted");
    });
  });

  describe('#attack', () => {
    xit('reduces the character\'s health by 1', () => {
      // const character = new Rogue('Balthazar');
      // character.attack(1);
      // expect(character.health).toBe(49);
    });

    xit('returns 1 point damage when attacked', () => {
      // const character = new Rogue('Balthazar');
      // const counterDamage = character.attack(1);
      // expect(counterDamage).toBe(1);
    });
  });

  describe('#bribe', () => {
    xit('takes offense if the amount is too low', () => {
      // const character = new Rogue('Balthazar');
      // const response = character.bribe(9);
      // expect(response).toBe('HOW DARE YOU?!');
      // expect(character.coins).toBe(50);
    });

    xit('tells you a secret when the amount is high enough', () => {
      // const character = new Rogue('Balthazar');
      // const response = character.bribe(10);
      // expect(response).toBe("Psst... you don't really need semicolons.");
      // expect(character.coins).toBe(60);
    });

    xit('silently refuses the bribe when they already have enough coins', () => {
      // const character = new Rogue('Balthazar');
      // character.bribe(10);
      // character.bribe(10);
      // character.bribe(10);
      // character.bribe(10);
      // character.bribe(10);
      // const response = character.bribe(10);
      // expect(response).toBe('');
      // expect(character.coins).toBe(100);
    });
  });
});
