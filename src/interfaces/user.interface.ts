import { Roles } from '../enums/roles.enum';

interface UserAddress {
    country: string;
    city: string;
    streetName: string;
    buildingNumber: number;
    apartmentNumber?: number
}

export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    birthday: Date;
    address?: Array<UserAddress>;
    role: Roles
}