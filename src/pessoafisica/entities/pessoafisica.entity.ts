import { PessoaFisicaEndereco } from "./pessoa-fisica-endereco.entity";
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from "typeorm";

@Entity()
export class PessoaFisica {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ nullable: false })
    nome: string

    @Column({ nullable: false })
    cpf: string

    @Column({ nullable: false })
    sexo: string

    @Column({ nullable: false })
    dataNascimento: Date

    @Column({ nullable: true })
    email: string

    @Column({ nullable: true })
    telefone: string

    @Column({ nullable: false })
    celular: string

    @Column({ nullable: false })
    foto: string

    @OneToMany(() => PessoaFisicaEndereco, pessoaFisicaEndereco => pessoaFisicaEndereco.pessoaFisica, {
        eager: true,
        cascade: true
    })
    enderecos: PessoaFisicaEndereco[]

}

