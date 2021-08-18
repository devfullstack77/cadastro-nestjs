export class CreatePessoaFisicaDto {
    id: number
    nome: string
    cpf: string
    sexo: string
    dataNascimento: Date
    email: string
    telefone: string
    celular: string
    foto: string
    enderecos: []
}
