import { Options } from './types';
import { init as initZzd } from './zhezhengding/init';
import { Config as ConfigZzd } from './zhezhengding/type';
import { init as initZlb } from './zheliban/init';
import { Config as ConfigZlb } from './zheliban/type';

export default {
    initZhezhengding: (config: ConfigZzd) => initZzd(config),
    initZheliban: (config: ConfigZlb) => initZlb(config),
} as Options;
