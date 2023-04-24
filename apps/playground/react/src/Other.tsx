/**
 * @description
 * @author 阿怪
 * @date 2023/4/24 15:16
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { MDivider, MLoading } from '@shuimo-design/react/index';
export default function Other(){

  const loading = <div className="loading">
    <MLoading></MLoading>
    <MDivider></MDivider>
    <div style={{height:'200px'}}>
      <MDivider vertical></MDivider>
    </div>
  </div>

  return <div className="flex">
    {loading}
  </div>
}
