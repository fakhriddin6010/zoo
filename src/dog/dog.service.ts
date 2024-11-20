import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello():string{
        return 'WWOWW'
    }

    public introduce():string{
        return 'My name is Rex'
    }
}
