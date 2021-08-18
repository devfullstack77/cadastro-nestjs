import { PessoaFisica } from "./pessoafisica.entity";
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class PessoaFisicaEndereco {

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

    @ManyToOne(() => PessoaFisica, pessoaFisica => pessoaFisica.enderecos,
        {
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    )
    pessoaFisica: PessoaFisica


}

