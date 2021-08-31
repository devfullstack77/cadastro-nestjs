import { Test, TestingModule } from '@nestjs/testing'
import { PessoafisicaService } from './pessoafisica.service'
import { PessoaFisica } from './entities/pessoafisica.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CreatePessoaFisicaDto } from './dto/create-pessoafisica.dto'
import { parse } from 'path/posix'
const ormconfig = require('../../ormconfig')

describe('Pessoa Fisica Service', () => {
  let service: PessoafisicaService
  let idNew = 0
  let add: CreatePessoaFisicaDto = new CreatePessoaFisicaDto()
  add.nome = 'Fulano'
  add.cpf = '18068520040'
  add.sexo = 'M'
  add.email = 'teste@teste.com.br'
  add.telefone = '11 1234-4323'
  add.celular = '11 12345-1234'
  add.dataNascimento = new Date('2001-01-11')
  add.foto = ''

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
      providers: [PessoafisicaService],
    }).compile()

    service = module.get<PessoafisicaService>(PessoafisicaService)
  })

  describe('create', () => {
    it('novo registro', async () => {
      const info = await service.create(add)
      idNew = info.id
      expect(info.nome).toBe(add.nome)
    })
  })

  describe('findAll', () => {
    it('obter todos os registros de pessoa fisica', async () => {
      const info = await service.findAll()
      if (info) expect(info.length).toBeGreaterThan(1)
      else expect(info.length).toBeGreaterThan(0)
    })
  })

  describe('findOne', () => {
    it('localizar registro por id ' + idNew, async () => {
      const info = await service.findOne(idNew)
      expect(info.id).toEqual(idNew)
    })
  })

  describe('update', () => {
    it('alterar razão social ', async () => {
      add.nome = 'Fulano Update'
      const info = await service.update(idNew, add)
      expect(info.affected).toBe(1)
    })
  })

  // describe('remove', () => {
  //   it('deltear o registro criado ', async () => {
  //     await service.remove(idNew)
  //     // const info = await service.remove(idNew)
  //     // console.log('alt', info)
  //     // expect(info.id).toBe(idNew)
  //   })
  // })
})
