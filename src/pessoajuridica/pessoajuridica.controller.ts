import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common'
import { CreatePessoaJuridicaDto } from './dto/create-pessoajuridica.dto'
import { UpdatePessoaJuridicaDto } from './dto/update-pessoajuridicadto'
import { PessoaJuridicaService } from './pessoajuridica.service'

@Controller('pessoajuridica')
export class PessoajuridicaController {
  constructor(private pessoaJuridicaService: PessoaJuridicaService) {}

  @Get()
  findAll() {
    return this.pessoaJuridicaService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pessoaJuridicaService.findOne(id)
  }

  @Post()
  create(@Body() createDto: CreatePessoaJuridicaDto) {
    return this.pessoaJuridicaService.create(createDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdatePessoaJuridicaDto) {
    return this.pessoaJuridicaService.update(parseInt(id), updateDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaJuridicaService.remove(parseInt(id))
  }
}
