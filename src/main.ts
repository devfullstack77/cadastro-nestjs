import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle('Cadastro Pessoa Fisica/Juridica')
    .setDescription('Api para cadastro simples Pessoa Fisica/Juridica')
    .setVersion('1.0')
    .addTag('Cadastro')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, { explorer: true });

  await app.listen(3000)
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap();
