import { SkeletonPro } from '@chapanda/component-pro';
import React from "react";
export default function RenderSkeletonActive() {
  return <SkeletonPro type='list' active={true} renderNum={4}/>
}
