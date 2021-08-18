import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CreatePessoaFisicaDto } from './dto/create-pessoafisica.dto';
import { UpdatePessoaFisicaDto } from './dto/update-pessoafisica.dto';
import { PessoafisicaService } from './pessoafisica.service';


@Controller('pessoafisica')
export class PessoafisicaController {

    constructor(
        private pessoaFisicaService: PessoafisicaService
    ) { }
    /**
     ** Lista todos os registros de Pessoa Fisica.
     * @returns Array 
     */
    @Get()
    findAll() {
        return this.pessoaFisicaService.findAll()
    }

    /**
     ** Localizar o registro por id
     * @param id 
     * @returns Array
     */
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.pessoaFisicaService.findOne(id)
    }
    /**
     ** Adiciona um novo registro de pessoa fisica
     * @param createDto 
     * @returns 
     */
    @Post()
    create(@Body() createDto: CreatePessoaFisicaDto) {
        return this.pessoaFisicaService.create(createDto)
    }

    /**
     ** Altera os dados do registro da pessoa fisica
     * @param id 
     * @param updateDto 
     * @returns Array 
     */
    @Put(':id')
    update(@Param('id') id: string, @Body() updateDto: UpdatePessoaFisicaDto) {
        return this.pessoaFisicaService.update(parseInt(id), updateDto)
    }

    /**
     ** Deleta o registro de pessoa fisica e seus endereços cadastrados
     * @param id 
     * @returns 
     */
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.pessoaFisicaService.remove(parseInt(id))
    }

}
