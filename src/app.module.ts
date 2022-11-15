import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root8888',
    database: 'cat_cafe',
    autoLoadEntities: true,
    synchronize: true,
  }),CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
