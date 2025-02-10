import React  from 'react'
import '../../styles/table-pro/index.css'
import {TitleArea} from "./TitleArea.tsx";
import { ChapandaTableProProps } from "../types.ts";

export function HeaderFilterTable<dataSource extends Record<string, any>, U = any>(
  props: ChapandaTableProProps<dataSource, U>) {
  const {
    searchTitle
  } = props
  return <>
    {
      searchTitle ? <TitleArea
        title={searchTitle.title}
        tooltip={searchTitle.tooltip}
      /> : <></>
    }
  </>
}
