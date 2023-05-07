import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {}

  create(createCharacterDto: CreateCharacterDto) {
    return this.characterRepository.save(createCharacterDto);
  }

  findAll(): Promise<Character[]> {
    return this.characterRepository.find();
  }

  findOne(name: string): Promise<Character | null> {
    return this.characterRepository.findOneBy({ name });
  }

  update(cid: number, updateCharacterDto: UpdateCharacterDto) {
    return this.characterRepository.update(cid,updateCharacterDto);
  }

  async remove(cid: number): Promise<void> {
    await this.characterRepository.delete(cid);
  }
}
