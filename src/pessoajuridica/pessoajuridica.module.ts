import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PessoaJuridica } from './entities/pessoa-juridica.entity'
import { PessoajuridicaController } from './pessoajuridica.controller'
import { PessoaJuridicaService } from './pessoajuridica.service'

@Module({
  imports: [TypeOrmModule.forFeature([PessoaJuridica])],
  controllers: [PessoajuridicaController],
  providers: [PessoaJuridicaService],
})
export class PessoajuridicaModule {}
