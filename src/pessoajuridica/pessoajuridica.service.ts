import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaJuridica } from './entities/pessoa-juridica.entity';
import { Repository } from 'typeorm';
import { CreatePessoaJuridicaDto } from './dto/create-pessoajuridica.dto';
import { UpdatePessoaJuridicaDto } from './dto/update-pessoajuridicadto';

@Injectable()
export class PessoaJuridicaService {

    constructor(
        @InjectRepository(PessoaJuridica)
        private PessoaJuridicaRepo: Repository<PessoaJuridica>
    ) { }

    findAll(): Promise<PessoaJuridica[]> {
        return this.PessoaJuridicaRepo.find()
    }

    create(createDto: CreatePessoaJuridicaDto) {
        return this.PessoaJuridicaRepo.save(createDto)
    }

    async findOne(id: number) {
        return await this.PessoaJuridicaRepo.findOne(id)
    }

    update(id: number, updateDto: UpdatePessoaJuridicaDto) {
        delete updateDto.id
        const enderecos = updateDto.enderecos
        delete updateDto.enderecos
        const dados = updateDto

        return this.PessoaJuridicaRepo.update(id, dados)
    }

    async remove(id: number) {
        const status = { affected: 0 }
        const record = await this.PessoaJuridicaRepo.findOne(id)
        if (record) {
            this.PessoaJuridicaRepo.remove(record)
            status.affected = 1
        }
        return status
    }

}
