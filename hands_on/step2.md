# 概要
データベースのモジュールを、[TypeORM](https://typeorm.io/)から[Sequelize](https://sequelize.org/)に変更しよう。

## 手順

### 1. パッケージをインストールする
```console
$ npm install --save @nestjs/sequelize sequelize sequelize-typescript
```

### 2. src/app.module.tsを修正する
```diff
+ import { SequelizeModule } from '@nestjs/sequelize';
- import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
+ imports: [SequelizeModule.forRoot({
+ dialect: 'sqlite',
- imports: [TypeOrmModule.forRoot({
- type: 'sqlite',
  database: 'cat_cafe',
+ autoLoadModels: true,
- autoLoadEntities: true,
```

### 3. src/cats/cats.module.tsを修正する
```diff
+ import { SequelizeModule } from '@nestjs/sequelize';
- import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
+ imports: [SequelizeModule.forFeature([Cat])],
- imports: [TypeOrmModule.forFeature([Cat])],
```

### 4. src/app.service.tsを修正する
```diff
+ import { Sequelize } from 'sequelize-typescript';
@Injectable()
export class AppService {
+ constructor(private sequelize: Sequelize) {}
```

### 5. src/cats/cats.service.tsを修正する
```diff
- import { InjectRepository } from '@nestjs/typeorm';
- import { Repository } from 'typeorm';
+ import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CatsService {
constructor(
- @InjectRepository(CatEntity)
- private catRepository: Repository<CatEntity>,
+ @InjectModel(CatEntity)
+ private readonly catModel: typeof CatEntity,
) {}

async create(cat: Cat) {
- this.catRepository.save(cat);
+ this.catModel.create({...cat});
}

async findAll(): Promise<Cat[]> {
- return this.catRepository.find();
+ return this.catModel.findAll();
}

async findById(id: number): Promise<Cat> {
- return this.catRepository.findOneBy({id});
+ return this.catModel.findOne({where: {id}});
}
```

### 6. src/cats/cat.entity.tsを修正する
```diff
-  import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; 
+ import { Column, Model, Table, Length } from 'sequelize-typescript';

+ @Table
+ export class Cat extends Model {
+ @Column({primaryKey: true, autoIncrement:true})
- @Entity()
- export class Cat {
- @PrimaryGeneratedColumn()
id: number;

+ @Length({ min: 1, max: 50 })
+ @Column
- @Column({ length: 50 })
name: string;

+ @Column
- @Column('int')
age: number;

+ @Column
- @Column('boolean')
isEstimationAge: boolean;

+ @Column
- @Column('text')
breed: string;
```

### 7. 動作するか試してみましょう
http://localhost:3000/api


## うまくいかなかった場合
h_databaseブランチに全ての変更が入っているので差分をチェックしてみてください
```console
$ git diff main..origin/h_database
```