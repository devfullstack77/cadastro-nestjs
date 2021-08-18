import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaJuridica } from './entities/pessoa-juridica.entity';
import { PessoajuridicaController } from './pessoajuridica.controller';
import { PessoaJuridicaService } from './pessoajuridica.service';
const ormconfig = require('../../ormconfig')

describe('Pessoa Juridica Controller', () => {
  let controller: PessoajuridicaController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
        TypeOrmModule.forFeature([PessoaJuridica])
      ],
      controllers: [PessoajuridicaController],
      providers: [PessoaJuridicaService]
    }).compile()

    controller = module.get<PessoajuridicaController>(PessoajuridicaController);
  });

  it('deve ser definido', () => {
    expect(controller).toBeDefined();
  });

  it('listar todos registros', () => {
    expect(controller.findAll()).toBeDefined();
  });

});
