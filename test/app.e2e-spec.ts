import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
const ormconfig = require('../ormconfig')

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          "name": "default",
          "type": ormconfig.type,
          "host": ormconfig.host,
          "port": ormconfig.port,
          "username": ormconfig.username,
          "password": ormconfig.password,
          "database": ormconfig.database,
          "autoLoadEntities": ormconfig.autoLoadEntities,
          "entities": ["src/**/*.entity{.ts,.js}"],
          "synchronize": ormconfig.synchronize,
        }),
        AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Cadastro simples de Pessoa Fisica/Juridica!');
  });

  it('/pessoafisica (GET)', () => {
    return request(app.getHttpServer())
      .get('/pessoafisica')
      .expect(200)
    // .expect([]);
  });

  it('/pessoajuridica (GET)', () => {
    return request(app.getHttpServer())
      .get('/pessoajuridica')
      .expect(200)
    // .expect([]);
  });

});
