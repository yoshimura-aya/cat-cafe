import { Column, Model, Table, Length } from 'sequelize-typescript';

@Table
export class Cat extends Model {
  @Column({ primaryKey: true, autoIncrement:true })
  id: number;

  @Length({ min: 1, max: 50 })
  @Column
  name: string;

  @Column
  age: number;

  @Column
  isEstimationAge: boolean;

  @Column
  breed: string;
}