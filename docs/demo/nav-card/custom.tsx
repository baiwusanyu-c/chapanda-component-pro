import { NavCard } from '@chapanda/component-pro';
import { Col, Row} from "antd";

const IconDataPlate = <svg
  style={{marginTop: '10px'}}
  width="36"
  height="36"
  viewBox="0 0 36 36"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="36" height="36" rx="10" fill="#6ACC48" />
  <g clipPath="url(#clip0_2155_13761)">
    <path
      d="M27.6847 8.71393H8.32577C7.9742 8.71409 7.63707 8.85381 7.38848 9.10241C7.13988 9.35101 7.00015 9.68813 7 10.0397V17.4057H12.4994C12.6189 17.4059 12.7362 17.4379 12.8392 17.4985C12.9422 17.5591 13.0272 17.6461 13.0854 17.7505L14.0292 19.4659L17.3464 12.7601C17.6062 12.2326 18.3592 12.2298 18.6243 12.7549L21.0957 17.6842H29.0105V10.0397C29.0104 9.68812 28.8706 9.35097 28.622 9.10236C28.3734 8.85376 28.0363 8.71405 27.6847 8.71393Z"
      fill="white"
      fillOpacity="0.6"
    />
    <path
      d="M20.0933 18.6441L17.988 14.4492L14.6948 21.1074C14.4403 21.6244 13.7058 21.6403 13.43 21.1338L12.1095 18.7314H7V23.8278C7.00015 24.1794 7.13987 24.5165 7.38847 24.7651C7.63707 25.0137 7.97419 25.1534 8.32577 25.1536H17.3385V25.9603H12.6817C12.4658 25.9603 12.2905 26.2573 12.2905 26.6232C12.2905 26.9891 12.4658 27.286 12.6817 27.286H23.321C23.5369 27.286 23.7122 26.9892 23.7122 26.6232C23.7122 26.2571 23.537 25.9603 23.321 25.9603H18.6642V25.1536H27.6847C28.0363 25.1535 28.3734 25.0138 28.622 24.7651C28.8706 24.5165 29.0104 24.1794 29.0105 23.8278V19.0099H20.6899C20.5664 19.0101 20.4452 18.976 20.3399 18.9114C20.2345 18.8468 20.1492 18.7543 20.0933 18.6441Z"
      fill="white"
    />
  </g>
  <defs>
    <clipPath id="clip0_2155_13761">
      <rect
        width="22"
        height="22"
        fill="white"
        transform="translate(7 7)"
      />
    </clipPath>
  </defs>
</svg>

export default function RenderNavCard() {
  return <div style={{ backgroundColor: 'rgba(102,102,102,0.12)', padding: '10px' }}>
    <Row gutter={[20, 20]}>
      <Col span={6}>
        <NavCard
          title='白雾三语'
          isATag={true}
          extra='baiwusanyu-c'
          titleIcon={IconDataPlate}
          description='点燃星亲手点燃黑暗森林的火星, 蒙昧初醒'/>
      </Col>
      <Col span={6}>
        <NavCard
          title='白雾三语'
          isATag={true}
          extra='baiwusanyu-c'
          titleIcon={IconDataPlate}
          description='点燃星亲手点燃黑暗森林的火星, 蒙昧初醒'/>
      </Col>
      <Col span={6}>
        <NavCard
          title='白雾三语'
          isATag={true}
          extra='baiwusanyu-c'
          titleIcon={IconDataPlate}
          description='点燃星亲手点燃黑暗森林的火星, 蒙昧初醒'/>
      </Col>
      <Col span={6}>
        <NavCard
          title='白雾三语'
          isATag={true}
          extra='baiwusanyu-c'
          titleIcon={IconDataPlate}
          description='点燃星亲手点燃黑暗森林的火星, 蒙昧初醒'/>
      </Col>
    </Row>
  </div>
}
