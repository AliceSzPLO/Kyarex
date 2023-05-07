import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CharacterModule } from './character/character.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Character } from './character/entities/character.entity';

@Module({
  imports: [UsersModule, CharacterModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'kyarex',
    entities: [Character],
    synchronize: true,
    autoLoadEntities: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
