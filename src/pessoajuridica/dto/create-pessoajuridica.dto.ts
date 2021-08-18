import { CreatePessoaJuridicaEnderecoDto } from "./create-pessoajuridica-endereco.dto"
export class CreatePessoaJuridicaDto {
    id: number
    razaoSocial: string
    cnpj: string
    email: string
    telefone: string
    celular: string
    foto: string
    enderecos: Array<CreatePessoaJuridicaEnderecoDto>
}
