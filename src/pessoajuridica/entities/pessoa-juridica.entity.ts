import { PessoaJuridicaEndereco } from "./pessoa-juridica-endereco.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class PessoaJuridica {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ nullable: false })
    razaoSocial: string

    @Column({ nullable: false })
    cnpj: string

    @Column({ nullable: true })
    email: string

    @Column({ nullable: true })
    telefone: string

    @Column({ nullable: false })
    celular: string

    @Column({ nullable: false })
    foto: string

    @OneToMany(() => PessoaJuridicaEndereco, pessoaJuridicaEndereco => pessoaJuridicaEndereco.pessoaFisica, {
        eager: true,
        cascade: true
    })
    enderecos: PessoaJuridicaEndereco[]

}

