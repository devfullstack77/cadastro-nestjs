import { PartialType } from '@nestjs/mapped-types';
import { CreatePessoaFisicaDto } from './create-pessoafisica.dto';

export class UpdatePessoaFisicaDto extends PartialType(CreatePessoaFisicaDto) {

}

