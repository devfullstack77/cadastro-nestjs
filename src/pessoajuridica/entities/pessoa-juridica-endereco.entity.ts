import { PessoaJuridica } from './pessoa-juridica.entity'
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity()
export class PessoaJuridicaEndereco {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ nullable: true })
  endereco: string

  @Column({ nullable: true })
  numero: string

  @Column({ nullable: false })
  complemento: string

  @Column({ nullable: false })
  bairro: string

  @Column({ nullable: false })
  cidade: string

  @Column({ nullable: false })
  estado: string

  @Column({ nullable: false })
  cep: string

  @ManyToOne(
    () => PessoaJuridica,
    (pessoaJuridica) => pessoaJuridica.enderecos,
    {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  pessoaFisica: PessoaJuridica
}
