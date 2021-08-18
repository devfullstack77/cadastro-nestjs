import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoafisicaController } from './pessoafisica/pessoafisica.controller';
import { PessoafisicaService } from './pessoafisica/pessoafisica.service';
import { PessoafisicaModule } from './pessoafisica/pessoafisica.module';
import { PessoaFisica } from './pessoafisica/entities/pessoafisica.entity';
import { PessoaJuridica } from './pessoajuridica/entities/pessoa-juridica.entity';
import { PessoajuridicaController } from './pessoajuridica/pessoajuridica.controller';
import { PessoaJuridicaService } from './pessoajuridica/pessoajuridica.service';
import { PessoajuridicaModule } from './pessoajuridica/pessoajuridica.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([PessoaFisica, PessoaJuridica]),
    PessoafisicaModule,
    PessoajuridicaModule
  ],
  controllers: [AppController, PessoafisicaController, PessoajuridicaController],
  providers: [AppService, PessoafisicaService, PessoaJuridicaService],
})
export class AppModule { }
