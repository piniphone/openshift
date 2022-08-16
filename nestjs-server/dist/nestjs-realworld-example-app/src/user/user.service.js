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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const jwt = require('jsonwebtoken');
const config_1 = require("../config");
const class_validator_1 = require("class-validator");
const http_exception_1 = require("@nestjs/common/exceptions/http.exception");
const common_2 = require("@nestjs/common");
const argon2 = require("argon2");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne({ email, password }) {
        const user = await this.userRepository.findOne({ email });
        if (!user) {
            return null;
        }
        if (await argon2.verify(user.password, password)) {
            return user;
        }
        return null;
    }
    async create(dto) {
        const { username, email, password } = dto;
        const qb = await (0, typeorm_2.getRepository)(user_entity_1.UserEntity)
            .createQueryBuilder('user')
            .where('user.username = :username', { username })
            .orWhere('user.email = :email', { email });
        const user = await qb.getOne();
        if (user) {
            const errors = { username: 'Username and email must be unique.' };
            throw new http_exception_1.HttpException({ message: 'Input data validation failed', errors }, common_2.HttpStatus.BAD_REQUEST);
        }
        let newUser = new user_entity_1.UserEntity();
        newUser.username = username;
        newUser.email = email;
        newUser.password = password;
        newUser.articles = [];
        const errors = await (0, class_validator_1.validate)(newUser);
        if (errors.length > 0) {
            const _errors = { username: 'Userinput is not valid.' };
            throw new http_exception_1.HttpException({ message: 'Input data validation failed', _errors }, common_2.HttpStatus.BAD_REQUEST);
        }
        else {
            const savedUser = await this.userRepository.save(newUser);
            return this.buildUserRO(savedUser);
        }
    }
    async update(id, dto) {
        let toUpdate = await this.userRepository.findOne(id);
        delete toUpdate.password;
        delete toUpdate.favorites;
        let updated = Object.assign(toUpdate, dto);
        return await this.userRepository.save(updated);
    }
    async delete(email) {
        return await this.userRepository.delete({ email: email });
    }
    async findById(id) {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            const errors = { User: ' not found' };
            throw new http_exception_1.HttpException({ errors }, 401);
        }
        return this.buildUserRO(user);
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOne({ email: email });
        return this.buildUserRO(user);
    }
    generateJWT(user) {
        let today = new Date();
        let exp = new Date(today);
        exp.setDate(today.getDate() + 60);
        return jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email,
            exp: exp.getTime() / 1000,
        }, config_1.SECRET);
    }
    ;
    buildUserRO(user) {
        const userRO = {
            id: user.id,
            username: user.username,
            email: user.email,
            bio: user.bio,
            token: this.generateJWT(user),
            image: user.image
        };
        return { user: userRO };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map