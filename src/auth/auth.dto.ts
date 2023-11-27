import { ApiProperty } from "@nestjs/swagger";

export class userType {
    superAdmin: 'superadmin';
    admin: 'admin';
    member: 'member'
}

export class LoginDTO {
    @ApiProperty({example: "superadmin@gmail.com"})
    username: string;

    @ApiProperty({example: "superadmin"})
    password: string;
}

export class CreateUserDTO extends LoginDTO {
    @ApiProperty()
    userType: userType | string;
}

export class CheckUser {
    @ApiProperty()
    companyId: string;
    
    @ApiProperty()
    userId: string;
}