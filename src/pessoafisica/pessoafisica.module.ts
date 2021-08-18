import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaFisica } from './entities/pessoafisica.entity';
import { PessoafisicaController } from './pessoafisica.controller';
import { PessoafisicaService } from './pessoafisica.service';

@Module({
    imports: [TypeOrmModule.forFeature([PessoaFisica])],
    controllers: [PessoafisicaController],
    providers: [PessoafisicaService]
})

export class PessoafisicaModule {

}
