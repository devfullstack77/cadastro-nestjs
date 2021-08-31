import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PessoaFisica } from './entities/pessoafisica.entity'
import { Repository } from 'typeorm'
import { CreatePessoaFisicaDto } from './dto/create-pessoafisica.dto'
import { UpdatePessoaFisicaDto } from './dto/update-pessoafisica.dto'

@Injectable()
export class PessoafisicaService {
  constructor(
    @InjectRepository(PessoaFisica)
    private pessoaFisicaRepo: Repository<PessoaFisica>,
  ) {}

  findAll(): Promise<PessoaFisica[]> {
    return this.pessoaFisicaRepo.find()
  }

  create(createDto: CreatePessoaFisicaDto) {
    return this.pessoaFisicaRepo.save(createDto)
  }

  async findOne(id: number) {
    return await this.pessoaFisicaRepo.findOne(id)
  }

  update(id: number, updateDto: UpdatePessoaFisicaDto) {
    delete updateDto.id
    const enderecos = updateDto.enderecos
    delete updateDto.enderecos
    const dados = updateDto
    return this.pessoaFisicaRepo.update(id, dados)
  }

  async remove(id: number) {
    const status = { affected: 0 }
    const record = await this.pessoaFisicaRepo.findOne(id)
    if (record) {
      this.pessoaFisicaRepo.remove(record)
      status.affected = 1
    }
    return status
  }
}
