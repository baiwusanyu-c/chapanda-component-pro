import { Button } from "antd";
import React from "react";
import '../styles/table-pro/index.css'
import {ChapandaTableProProps} from "./types.ts";
import {TitleArea} from "./components/TitleArea.tsx";

function ChaPandaTablePro<dataSource extends Record<string, any>, U = any>(
  props: ChapandaTableProProps<dataSource, U>
)  {

  const {
    formType = 'form',
    searchTitle
  } = props

  return <div className="cbd-table-pro">
    {
      searchTitle ? <TitleArea
        title={searchTitle.title}
        tooltip={searchTitle.tooltip}
      /> : <></>
    }

  </div>
}

export { ChaPandaTablePro }
