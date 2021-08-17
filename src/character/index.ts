import { CharacterInterface } from '../interfaces';
import { talk, attack } from '../behaviors';

export default class Character implements CharacterInterface {
  name: string;

  health: number;

  constructor(name = '') {
    this.name = name;
    this.health = 50;
  }

  talk = talk;

  attack = attack;
}
