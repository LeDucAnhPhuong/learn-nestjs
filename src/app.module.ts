import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModules } from './modules/products/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TagModule } from './modules/tags/tag.module';
import { SizeModule } from './modules/size/size.module';
@Module({
  imports: [
    ProductModules,
    MongooseModule.forRoot(
      'mongodb+srv://product:wOTnFBUeupvciNTc@product.n4h40wo.mongodb.net/?retryWrites=true&w=majority&appName=product',
    ),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TagModule,
    SizeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
