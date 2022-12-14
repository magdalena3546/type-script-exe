import { Tags } from '../enums/tags.enum';

export interface Product {
    id?: string;
    name: string;
    price: number;
    tags: Array<Tags>;
    createdAt?: Date;
    updatedAt?: Date;
}