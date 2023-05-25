import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopsModule } from './shops/shops.module';
import { ProductsModule } from './products/products.module';
import * as fs from 'fs';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.NF_POSTGRESDB_HOST,
      port: parseInt(process.env.NF_POSTGRESDB_PORT),
      username: process.env.NF_POSTGRESDB_USERNAME,
      password: process.env.NF_POSTGRESDB_PASSWORD,
      database: process.env.NF_POSTGRESDB_DATABASE,
      ssl: {
        ca: fs.readFileSync(process.env.SSL_CA_CERTIFICATES),
      },

      autoLoadEntities: true,

      // Only enable this option if your application is in development,
      // otherwise use TypeORM migrations to sync entity schemas:
      // https://typeorm.io/#/migrations
      //synchronize: true,
    }),
    ShopsModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
