import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function swagerConfig(app) {
  const config = new DocumentBuilder()
    .setTitle('eTrips')
    .setDescription('The eTrips API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
