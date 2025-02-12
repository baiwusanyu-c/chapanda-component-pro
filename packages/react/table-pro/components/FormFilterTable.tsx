import React from 'react'
import '../../styles/table-pro/index.css'
import { TitleArea } from "./TitleArea.tsx";
import { FormFilter } from "./FormFilter.tsx";
import { ChapandaTableProProps } from "../types.ts";

export function FormFilterTable<dataSource extends Record<string, any>, U = any>(
  props: ChapandaTableProProps<dataSource, U>) {
  const {
    searchTitle,
    columns,
    request,
    params
  } = props

  return <>
    {
      searchTitle ? <TitleArea
        title={searchTitle.title}
        tooltip={searchTitle.tooltip}
      /> : <></>
    }
    <FormFilter<dataSource, U>
      columns={columns}/>
    FormFilterTable
  </>
}
