import { SkeletonPro } from '@chapanda/component-pro';
import React from "react";
export default function RenderSkeletonBasic() {
  return <SkeletonPro type='list' active={false} renderNum={4}/>
}
