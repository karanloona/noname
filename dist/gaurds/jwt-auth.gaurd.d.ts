import { ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
export declare const API_BEARER_AUTH_NAME = "JWT-Auth";
declare const JwtAuthGaurd_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGaurd extends JwtAuthGaurd_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
