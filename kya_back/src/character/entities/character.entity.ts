import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    cid: number;
  
    @Column()
    name: string;
  
    @Column()
    role: string;

    @Column()
    position: string;
}
