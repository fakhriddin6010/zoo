import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { DogService } from './dog.service';
import { Request } from 'express';

@Controller('dog')
export class DogController {
    constructor(private readonly dogService: DogService){}

    @Get()
    public getHello(): string{
        return this.dogService.getHello()
    }

    @Get('great/:id')
    public introduce(@Query() query: any, @Param() params:any): string{
        console.log('params:',params);
        console.log('query:', query);
        return this.dogService.introduce()
    }
    @Post('edit')
    public modifyDetail(@Body() body: any): string{
        console.log('body:', body);
        return this.dogService.modifyDetail()
    }


}
