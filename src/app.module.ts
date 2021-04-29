import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DomainsDiModule } from './domains/domains-di.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DomainsDiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
