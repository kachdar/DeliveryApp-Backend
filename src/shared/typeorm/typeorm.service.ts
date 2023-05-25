import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as fs from 'fs';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.NF_POSTGRESDB_HOST,
      port: parseInt(process.env.NF_POSTGRESDB_PORT),
      username: process.env.NF_POSTGRESDB_USERNAME,
      password: process.env.NF_POSTGRESDB_PASSWORD,
      database: process.env.NF_POSTGRESDB_DATABASE,
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      ssl: {
        ca: fs.readFileSync(process.env.SSL_CA_CERTIFICATES),
      },
      autoLoadEntities: true,
      //   synchronize: true,
    };
  }
}
