/**
   * returns a response when spoken to
   * @param name - the name of the character speaking to this character
   * @returns - the character's response
  */
export function talk(name: string): string {
  return `Nice to meet you, ${name}! I'm ${this.name}`;
}

/**
   * reduces the character's health and returns counter-attacks
   * @param damage - the amount of damage inflicted by the attacker
   * @returns - the amount of counter damage the character returns when attacked
   */
export function attack(damage: number) : number {
  this.health -= damage;
  return 1;
}
