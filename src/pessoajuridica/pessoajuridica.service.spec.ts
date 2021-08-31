import { Test, TestingModule } from '@nestjs/testing'
import { PessoaJuridicaService } from './pessoajuridica.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PessoaJuridica } from './entities/pessoa-juridica.entity'
import { CreatePessoaJuridicaDto } from './dto/create-pessoajuridica.dto'
const ormconfig = require('../../ormconfig')

describe('Pessoa Juridica Service', () => {
  let idNew = 0
  let service: PessoaJuridicaService
  let add: CreatePessoaJuridicaDto = new CreatePessoaJuridicaDto()
  add.razaoSocial = 'Company Test'
  add.cnpj = '87756702000188'
  add.email = 'teste@empresa.com.br'
  add.telefone = '11 1234-4323'
  add.celular = '11 12345-1234'
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
        TypeOrmModule.forFeature([PessoaJuridica]),
      ],
      providers: [PessoaJuridicaService],
    }).compile()

    service = module.get<PessoaJuridicaService>(PessoaJuridicaService)
  })

  describe('create', () => {
    it('novo registro', async () => {
      const info = await service.create(add)
      idNew = info.id
      expect(info.razaoSocial).toBe(add.razaoSocial)
    })
  })

  describe('findAll', () => {
    it('obter todos os registros de pessoa juridica', async () => {
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
      add.razaoSocial = 'Company Test Update'
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
