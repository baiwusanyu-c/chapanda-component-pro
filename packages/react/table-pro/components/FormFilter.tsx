import React, {CSSProperties, useEffect, useMemo, useState} from 'react'
import { ChapandaTableProProps } from "../types.ts";
import { Button, Form, Input, Select } from 'antd';
export interface FormFilterProps<DataSource, U> {
  columns?: ChapandaTableProProps<DataSource, U>['columns']
  onSubmit?: (params: U) => void
  onReset?: () => void
}

export function FormFilter<dataSource extends Record<string, any>, U = any>(
  props: FormFilterProps<dataSource, U>
) {
  const { columns, onSubmit, onReset } = props;
  const [form] = Form.useForm();
  const renderFormItem = useMemo(() => {
    return columns?.map(column => {
       const {
         title,
         dataIndex,
         searchType,
         searchIndex,
         searchLabel,
         searchEnum = {},
         searchLabelKey = 'label',
         searchValueKey = 'value',
         formComponentProps,
       } = column;
       if(searchType) {
         const resolveName = searchIndex || (dataIndex as string);
         const resolveLabel = searchLabel || (title as string);
         let formComp = <></>

         if(searchType === 'input') {
           formComp = <Input
             {...formComponentProps} style={{ width: 200 }}
           />
         }
         if(searchType === 'select') {
           const options = Object.keys(searchEnum).map(key => {
             return (searchEnum)[key]
           })
           formComp = <Select
             {...formComponentProps}
             style={{ width: 200 }}
             fieldNames={{
               label:searchLabelKey,
               value:searchValueKey,
               ...(formComponentProps || {}).fieldNames
             }}
             options={options}
           />
         }
         return <Form.Item
           className='cbd-table-pro-form-filter--item'
           name={resolveName}
           label={resolveLabel}
           key={resolveName}>
           {formComp}
         </Form.Item>
       }
    })
  }, [columns])

  // 展开、收起
  const [isHidden, setHidden] = useState(true);
  const formStyle = useMemo(() => {
    let style: CSSProperties =  { maxWidth: 'none' }
    if(isHidden){
      style =  { maxWidth: 'none', overflowY: 'hidden', height: '32px'  }
    }
    return style
  }, [isHidden])

  function handleExpand(){
    setHidden(!isHidden)
  }

  function handleReset(){
    initForm()
    onReset && onReset()
  }

  function handleSubmit(){
    form
      .validateFields()
      .then((data) => {
        onSubmit && onSubmit(data)
      })
  }

  function initForm(){
    if(columns){
      columns?.forEach(column => {
        const {
          dataIndex,
          searchType,
          searchIndex,
          defaultSearchValue,
        } = column;
        if(searchType){
          const resolveName = searchIndex || (dataIndex as string);
          form.setFieldValue(resolveName, defaultSearchValue)
        }
      })
    }
  }

  useEffect(() => {
    initForm()
  }, [])

  return <div className="cbd-table-pro-form-filter">
    <div className='filter-area'>
      <Form
        layout='inline'
        form={form}
        style={formStyle}
      >
        {renderFormItem}
      </Form>
      <Button type="link"  onClick={handleExpand}>{
        isHidden ? '展开' : '收起'
      }</Button>
    </div>
    <div className="operation-area">
      <Button onClick={handleSubmit} type="primary">搜索</Button>
      <Button onClick={handleReset}>重置</Button>
    </div>
  </div>
}

// TODO: 隐藏展开收起按钮
