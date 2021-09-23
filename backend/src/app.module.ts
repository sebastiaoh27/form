import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {UserModule} from "./userFolder/user.module";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports:[MongooseModule.forRoot('mongodb+srv://frica:ferrera316@cluster0.rhov7.mongodb.net/exampleDb?retryWrites=true&w=majority'),
      UserModule
  ]
})
export class AppModule {}
