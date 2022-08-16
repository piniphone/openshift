"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorController = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const operator_service_1 = require("./operator.service");
const dto_1 = require("./dto");
let OperatorController = class OperatorController {
    constructor(operatorService) {
        this.operatorService = operatorService;
    }
    async createOperator(body) {
        return await this.operatorService.create(body);
    }
    async updateOperator(body, id) {
        console.log('id', id);
        console.log('body', body);
        return null;
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./operator.schema").Operator }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.OperatorCreateDTO]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "createOperator", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./operator.schema").Operator }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.OperatorUpdateDTO, Number]),
    __metadata("design:returntype", Promise)
], OperatorController.prototype, "updateOperator", null);
OperatorController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('operator'),
    (0, common_1.Controller)('operator'),
    __metadata("design:paramtypes", [operator_service_1.OperatorService])
], OperatorController);
exports.OperatorController = OperatorController;
//# sourceMappingURL=operator.controller.js.map