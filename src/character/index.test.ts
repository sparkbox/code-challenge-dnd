import Character from '.';

describe('Character', () => {
  describe('#talk', () => {
    it('greets you with their name', () => {
      const character = new Character('Ted');
      expect(character.talk('Bill')).toBe("Nice to meet you, Bill! I'm Ted");
    });
  });

  describe('#attack', () => {
    it('reduces the character\'s health by 1', () => {
      const character = new Character('Balthazar');
      character.attack(1);
      expect(character.health).toBe(49);
    });

    it('returns 1 point damage when attacked', () => {
      const character = new Character('Balthazar');
      const counterDamage = character.attack(1);
      expect(counterDamage).toBe(1);
    });
  });
});
