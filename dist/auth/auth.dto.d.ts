export declare class userType {
    superAdmin: 'superadmin';
    admin: 'admin';
    member: 'member';
}
export declare class LoginDTO {
    username: string;
    password: string;
}
export declare class CreateUserDTO extends LoginDTO {
    userType: userType | string;
}
export declare class CheckUser {
    companyId: string;
    userId: string;
}
export declare class PasswordDTO {
    userId: string;
    password: string;
}
