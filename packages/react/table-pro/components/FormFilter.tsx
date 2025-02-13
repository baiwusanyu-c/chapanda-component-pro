import React, {CSSProperties, useEffect, useMemo, useState} from 'react'
import { ChapandaTableProProps } from "../types.ts";
import { Button, Form, Input, Select } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
export interface FormFilterProps<DataSource, U> {
  columns?: ChapandaTableProProps<DataSource, U>['columns']
  onSubmit?: (params: U) => void
  onReset?: (params: U) => void
  canRender: (isRender: boolean) => void
}

export function FormFilter<dataSource extends Record<string, any>, U = any>(
  props: FormFilterProps<dataSource, U>
) {
  const { columns, onSubmit, onReset, canRender } = props;
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
    }).filter(r => !!r )
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
    form
      .validateFields()
      .then((data) => {
        onReset && onReset(data)
      })
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
    // 初始化时，搜索一遍
    handleSubmit()
  }, [])

  const [isHasItemWrapped, setHasItemWrapped] = useState(false)
  useEffect(() => {
   function handleItemWrapped(){
     const formEl = document.querySelector('.cbd-table-pro-form-filter--form');
     const formItemEls = document.querySelectorAll('.cbd-table-pro-form-filter--item');
     if(formEl && formItemEls && formItemEls.length > 0){
       const len = formItemEls.length
       if(len){
         let isWrapped = false;
         let prevTop: number | null = null;
         formItemEls.forEach((child) => {
           const rect = child.getBoundingClientRect();
           const currentTop = rect.top;

           // 如果当前子元素的 top 值与前一个不同，说明换行了
           if (prevTop !== null && currentTop !== prevTop) {
             isWrapped = true;
           }
           prevTop = currentTop; // 更新前一个元素的 top 值
         });
         setHasItemWrapped(isWrapped)
       }
     }
   }
    handleItemWrapped()
    window.addEventListener('resize', handleItemWrapped)
    return () => {
      window.removeEventListener('resize', handleItemWrapped)
    }
  }, [isHidden])

  useEffect(() => {
    if(renderFormItem?.length){
      canRender(true)
    } else {
      canRender(false)
    }
  }, [renderFormItem]);
  return <>
    {
      renderFormItem?.length ? <div className="cbd-table-pro-form-filter">
        <div className='filter-area'>
          <Form
            className='cbd-table-pro-form-filter--form'
            layout='inline'
            form={form}
            style={formStyle}
          >
            {renderFormItem}
          </Form>
          {
            isHasItemWrapped ?  <Button type="link"
                                        iconPosition='end'
                                        onClick={handleExpand} icon={ isHidden ? <DownOutlined /> : <UpOutlined />}>
              { isHidden ? '展开' : '收起' }
            </Button> : <></>
          }

        </div>
        <div className="operation-area">
          <Button onClick={handleSubmit} type="primary">搜索</Button>
          <Button onClick={handleReset}>重置</Button>
        </div>
      </div> : <></>
    }
  </>

}
