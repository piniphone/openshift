import { ArticleEntity } from '../article/article.entity';
export declare class UserEntity {
    id: number;
    username: string;
    email: string;
    bio: string;
    image: string;
    password: string;
    hashPassword(): Promise<void>;
    favorites: ArticleEntity[];
    articles: ArticleEntity[];
}
