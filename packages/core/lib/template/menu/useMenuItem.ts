/**
 * @description shuimo menu-item core hook
 * @author 阿怪
 * @date 2023/1/5 01:23
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import useLi from '../../base/list/li/useLi';
import { MNodeSlot, MNodeTemplate } from '../../../types';
import style from './menuItem.pcss?inline';
import { MenuItemProps } from './index';

export default function useMenuItem() {

  const li = useLi();

  const template: MNodeTemplate = {
    type: 'li',
    props: { class: 'm-menu-item m-li' },
    slots: new Map([
      ['default', {}],
      ['sub', { if: false }]
    ])
  };

  const initProps = (_props: MenuItemProps) => {
    if (!template.props) {return;}
    const slots = template.slots as Map<string, MNodeSlot> | undefined;
    if (slots) {
      slots.get('sub')!.if = _props.active ?? false;
      slots.get('default')!.props = {
        onClick: () => {
          _props.active = !_props.active;
        }
      };
    }
    template.props.class = ['m-menu-item m-li', _props.active ? 'm-active' : undefined].join(' ');
  };

  return {
    template,
    props: li.props,
    style: li.style + style,
    initProps
  };

}
