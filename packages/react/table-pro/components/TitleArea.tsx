import React, {useMemo} from 'react'
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons'
import '../../styles/table-pro/index.css'
export interface TitleAreaProps {
  title?: string
  tooltip?: string
  children?: React.ReactNode
}
export function TitleArea(props: TitleAreaProps) {
  const {title, tooltip} = props
  const renderTitle = useMemo(() => {
    if (title) {
      return <h1 className='cbd-table-pro--title-content'>
          <div className='cbd-table-pro--title-bar'></div>
          {title}
          <Tooltip title={tooltip}>
            <InfoCircleOutlined className='cbd-table-pro--title-icon'/>
          </Tooltip>
        </h1>
    } else {
      return <></>
    }

  }, [title, tooltip])
  return <>
    <div className="title-area">
      { renderTitle }
      {props.children}
    </div>
  </>
}
