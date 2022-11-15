import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('int')
  age: number;

  @Column('boolean')
  isEstimationAge: boolean;

  @Column('text')
  breed: string;
}