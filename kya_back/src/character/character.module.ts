import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { CharacterSchema } from './entities/character.schema';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterSchema])],
  controllers: [CharacterController],
  providers: [CharacterService],
  
})
export class CharacterModule {}
