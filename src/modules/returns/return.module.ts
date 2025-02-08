import { Module } from '@nestjs/common';
import { ReturnService } from './return.service';
import { ReturnController } from './return.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Return } from './return.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Return])],
  providers: [ReturnService],
  controllers: [ReturnController],
})
export class ReturnModule {}