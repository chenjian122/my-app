import { Injectable } from '@angular/core';

import { Gundam } from '../models/gundam';

@Injectable()
export class GundamService{
    // 获得全部数据
    getGundams(): Gundam[] {
        return GUNDAMS;
    }

    // 将gundam转换成字符串
    parseGundamToString(gundam: Gundam): string {
        return gundam.name + '&' + gundam.type;
    }

    // 根据Id查询
    getGundamById(id: number): Gundam {
        return this.getGundams().find( gundam => gundam.id === id );
    }
}

export const GUNDAMS: Gundam[] = [
    {id:1,name: '海牛高达', type: 'NewType'},
    {id:2,name: '巴巴托斯', type: '近战'},
    {id:3,name: '力天使', type: '射击'}
];