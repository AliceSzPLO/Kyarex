import { EntitySchema } from 'typeorm';
import { Character } from './character.entity';

export const CharacterSchema = new EntitySchema<Character>({
  name: 'Character',
  target: Character,
  columns: {
    cid: {
      type: Number,
      primary: true,
      generated: true
    },
    name: {
      type: String,
      unique: true
    },
    role: {
      type: String,
    },
    position: {
      type: String,
    },
  },
});