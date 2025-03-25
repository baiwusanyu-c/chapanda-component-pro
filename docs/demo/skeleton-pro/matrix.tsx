import { SkeletonPro } from '@chapanda/component-pro';
import React from "react";
export default function RenderSkeletonMatrix() {
  return <div style={{ backgroundColor: 'rgba(102,102,102,0.12)', padding: '10px' }}>
    <SkeletonPro
      type='matrix'
      renderNum={8}
      rowProps={{ gutter: [20, 20]}}
      colProps={{ span: 6 }}/>
  </div>
}
