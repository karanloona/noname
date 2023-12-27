import { ObjectId } from "mongodb";
export declare class CreateCompanyDTO {
    userId: ObjectId;
    categoryId: ObjectId;
    name: string;
    email: string;
    password: string;
    city: string;
}
export declare class UpdateCompanyDTO {
    categoryId: ObjectId;
    name: string;
    city: string;
}
export declare class DeleteCompanyDTO {
    userId: string;
}
