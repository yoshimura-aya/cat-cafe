import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'sqlite',
    database: 'cat_cafe',
    autoLoadModels: true,
    synchronize: true,
  }),CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
