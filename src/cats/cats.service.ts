import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  create(cat: Cat) {
    // cat create logic
  }

  findAll(): Cat[] {
    // get cat logic
    return [];
  }
}
