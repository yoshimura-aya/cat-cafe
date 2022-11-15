import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat as CatEntity } from './cat.entity';
import { Cat } from './interfaces/cat.interface';


@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private catRepository: Repository<CatEntity>,
  ) {}

  async create(cat: Cat) {
    // cat create logic
    this.catRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    // get cat logic
    return this.catRepository.find();
  }

  async findById(id: number): Promise<Cat> {
    // get cat logic
    return this.catRepository.findOneBy({id});
  }
}