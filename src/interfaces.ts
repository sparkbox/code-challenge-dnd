export interface Conversable {
  name: string,
  talk: (name: string) => string,
}

export interface Attackable {
  health: number,
  attack: (damage: number) => number,
}

export interface CharacterInterface extends Conversable, Attackable {}
