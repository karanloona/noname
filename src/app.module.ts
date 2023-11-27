import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { CompanyModule } from './company/company.module';
import { FilesModule } from './files/files.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    AuthModule,
    CategoryModule,
    CompanyModule,
    FilesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
