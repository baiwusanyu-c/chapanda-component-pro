import { NavCard } from '@chapanda/component-pro';
import { Col, Row} from "antd";
export default function RenderNavCard() {
  return <div style={{ backgroundColor: 'rgba(102,102,102,0.12)', padding: '10px' }}>
    <Row gutter={[20, 20]}>
      <Col span={6}>
        <NavCard
          title='白雾三语'
          extra='baiwusanyu-c'
          description='点燃星亲手点燃黑暗森林的火星, 蒙昧初醒'/>
      </Col>
      <Col span={6}>
        <NavCard
          title='白雾三语'
          extra='baiwusanyu-c'
          description='点燃星亲手点燃黑暗森林的火星, 蒙昧初醒'/>
      </Col>
      <Col span={6}>
        <NavCard
          title='白雾三语'
          extra='baiwusanyu-c'
          description='点燃星亲手点燃黑暗森林的火星, 蒙昧初醒'/>
      </Col>
      <Col span={6}>
        <NavCard
          title='白雾三语'
          extra='baiwusanyu-c'
          description='点燃星亲手点燃黑暗森林的火星, 蒙昧初醒'/>
      </Col>
    </Row>
  </div>
}
