import { PartialType } from '@nestjs/mapped-types';
import { CreatePessoaJuridicaDto } from './create-pessoajuridica.dto';

export class UpdatePessoaJuridicaDto extends PartialType(CreatePessoaJuridicaDto) {

}

