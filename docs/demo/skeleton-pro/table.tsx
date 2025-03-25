import { SkeletonPro } from '@chapanda/component-pro';
import React from "react";
export default function RenderSkeletonTable() {
  return <div style={{ border: '1px solid rgba(102,102,102,0.12)',padding: '10px' }}>
    <SkeletonPro type='table' renderNum={6} />
  </div>
}
