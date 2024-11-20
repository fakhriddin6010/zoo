import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService){}

    @Get()
    public getHello(): string{
        return this.catService.getHello()
    }

    @Get('great')
    public introduce(): string{
        return this.catService.introduce()
    }
}
