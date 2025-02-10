import React, {useMemo} from 'react'
import { Tooltip } from 'antd';
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
      return <Tooltip title={tooltip}>

        <h1 className='cbd-table-pro--title-content'>
          <div className='cbd-table-pro--title-bar'></div>
          {title}
        </h1>
      </Tooltip>
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
