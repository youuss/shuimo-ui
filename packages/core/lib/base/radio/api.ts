/**
 * @description radio api
 * @author 阿怪
 * @date 2023/4/23 11:45
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { MCOPO } from '@shuimo-design/types';
import { RadioProps } from './index';

export const props: MCOPO<RadioProps> = {
  label: { type: [String, Number], default: '' },
  name: { type: String, default: undefined },
  checked: { type: Boolean, default: undefined },
  value: { type: [String, Number], default: '' },
  modelValue: { type: null, default: '' }
};
