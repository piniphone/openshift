"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swagerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
function swagerConfig(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('eTrips')
        .setDescription('The eTrips API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
}
exports.swagerConfig = swagerConfig;
//# sourceMappingURL=swagger.js.map