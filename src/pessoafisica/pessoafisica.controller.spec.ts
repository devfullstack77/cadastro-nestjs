import { Test, TestingModule } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PessoaFisica } from './entities/pessoafisica.entity'
import { PessoafisicaController } from './pessoafisica.controller'
import { PessoafisicaService } from './pessoafisica.service'
const ormconfig = require('../../ormconfig')

describe('Pessoa Fisica Controller', () => {
  let controller: PessoafisicaController

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          name: 'default',
          type: ormconfig.type,
          host: ormconfig.host,
          port: ormconfig.port,
          username: ormconfig.username,
          password: ormconfig.password,
          database: ormconfig.database,
          autoLoadEntities: ormconfig.autoLoadEntities,
          entities: ['src/**/*.entity{.ts,.js}'],
          synchronize: ormconfig.synchronize,
        }),
        TypeOrmModule.forFeature([PessoaFisica]),
      ],
      controllers: [PessoafisicaController],
      providers: [PessoafisicaService],
    }).compile()

    controller = module.get<PessoafisicaController>(PessoafisicaController)
  })

  it('deve ser definido', () => {
    expect(controller).toBeDefined()
  })

  it('listar todos registros', () => {
    expect(controller.findAll()).toBeDefined()
  })
})
