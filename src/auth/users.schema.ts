import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export class userType {
    superAdmin: 'superadmin';
    admin: 'admin';
    member: 'member'
}

@Schema({ timestamps: true })
export class Users {
    @Prop({ type: String, required: true})
    username: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: String, required: true })
    userType: userType;
}

export const UsersSchema = SchemaFactory.createForClass(Users);