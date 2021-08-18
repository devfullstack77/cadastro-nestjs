import { MigrationInterface, QueryRunner } from "typeorm";

export class Create1629261246731 implements MigrationInterface {
    name = 'CreateTable1629261246731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pessoa_fisica" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "sexo" character varying NOT NULL, "dataNascimento" TIMESTAMP NOT NULL, "email" character varying, "telefone" character varying, "celular" character varying NOT NULL, "foto" character varying NOT NULL, CONSTRAINT "PK_72e64d3132e629005d6073da51c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pessoa_fisica_endereco" ("id" SERIAL NOT NULL, "endereco" character varying, "numero" character varying, "complemento" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "cep" character varying NOT NULL, "pessoaFisicaId" integer, CONSTRAINT "PK_f45b56d3faf02db6ad30e1c5442" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pessoa_juridica" ("id" SERIAL NOT NULL, "razaoSocial" character varying NOT NULL, "cnpj" character varying NOT NULL, "email" character varying, "telefone" character varying, "celular" character varying NOT NULL, "foto" character varying NOT NULL, CONSTRAINT "PK_27c075bd2f3ee41456083626169" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pessoa_juridica_endereco" ("id" SERIAL NOT NULL, "endereco" character varying, "numero" character varying, "complemento" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "cep" character varying NOT NULL, "pessoaFisicaId" integer, CONSTRAINT "PK_cac89cac65d7b5b145d5575be92" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pessoa_fisica_endereco" ADD CONSTRAINT "FK_b18334451e8f0bcfdf0c4f94704" FOREIGN KEY ("pessoaFisicaId") REFERENCES "pessoa_fisica"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pessoa_juridica_endereco" ADD CONSTRAINT "FK_1c152d359025006ca04b5d0de25" FOREIGN KEY ("pessoaFisicaId") REFERENCES "pessoa_juridica"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pessoa_juridica_endereco" DROP CONSTRAINT "FK_1c152d359025006ca04b5d0de25"`);
        await queryRunner.query(`ALTER TABLE "pessoa_fisica_endereco" DROP CONSTRAINT "FK_b18334451e8f0bcfdf0c4f94704"`);
        await queryRunner.query(`DROP TABLE "pessoa_juridica_endereco"`);
        await queryRunner.query(`DROP TABLE "pessoa_juridica"`);
        await queryRunner.query(`DROP TABLE "pessoa_fisica_endereco"`);
        await queryRunner.query(`DROP TABLE "pessoa_fisica"`);
    }

}
