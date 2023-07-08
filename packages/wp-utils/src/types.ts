import { Config as ConfigZzd } from './zhezhengding/type';
import { Config as ConfigZlb } from './zheliban/type';

export interface Options {
    initZhezhengding(config: ConfigZzd): any;
    initZheliban(config: ConfigZlb): any;
}
