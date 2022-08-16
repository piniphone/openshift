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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const dto_1 = require("./dto");
const http_exception_1 = require("@nestjs/common/exceptions/http.exception");
const user_decorator_1 = require("./user.decorator");
const validation_pipe_1 = require("../shared/pipes/validation.pipe");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async findMe(email) {
        return await this.userService.findByEmail(email);
    }
    async update(userId, userData) {
        return await this.userService.update(userId, userData);
    }
    async create(userData) {
        return this.userService.create(userData);
    }
    async delete(params) {
        return await this.userService.delete(params.slug);
    }
    async login(loginUserDto) {
        const _user = await this.userService.findOne(loginUserDto);
        const errors = { User: ' not found' };
        if (!_user)
            throw new http_exception_1.HttpException({ errors }, 401);
        const token = await this.userService.generateJWT(_user);
        const { email, username, bio, image } = _user;
        const user = { email, token, username, bio, image };
        return { user };
    }
};
__decorate([
    (0, common_1.Get)('user'),
    __param(0, (0, user_decorator_1.User)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findMe", null);
__decorate([
    (0, common_1.Put)('user'),
    __param(0, (0, user_decorator_1.User)('id')),
    __param(1, (0, common_1.Body)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.UsePipes)(new validation_pipe_1.ValidationPipe()),
    (0, common_1.Post)('users'),
    __param(0, (0, common_1.Body)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('users/:slug'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
__decorate([
    (0, common_1.UsePipes)(new validation_pipe_1.ValidationPipe()),
    (0, common_1.Post)('users/login'),
    __param(0, (0, common_1.Body)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
UserController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map