import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cat as CatEntity } from './cat.entity';
import { Cat } from './interfaces/cat.interface';


@Injectable()
export class CatsService {
  constructor(
    @InjectModel(CatEntity)
    private readonly catModel: typeof CatEntity,
  ) {}

  async create(cat: Cat) {
    // cat create logic
    this.catModel.create({...cat});
  }

  async findAll(): Promise<Cat[]> {
    // get cat logic
    return this.catModel.findAll();
  }

  async findById(id: number): Promise<Cat> {
    // get cat logic
    return this.catModel.findOne({where: {id}});
  }
}