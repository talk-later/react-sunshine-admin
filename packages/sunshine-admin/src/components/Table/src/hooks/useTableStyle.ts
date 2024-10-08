import type { BasicTableProps, TableCustomRecord } from '../types/table';
import { isFunction } from 'lodash-es';

export const useTableStyle = (props: BasicTableProps, prefixCls: string) => {
  const getRowClassName = (record: TableCustomRecord, index: number) => {
    const { striped, rowClassName } = props;
    const classNames: string[] = [];
    if (striped) {
      classNames.push((index || 0) % 2 === 1 ? `${prefixCls}-row__striped` : '');
    }
    if (rowClassName && isFunction(rowClassName)) {
      classNames.push(rowClassName(record, index));
    }
    return classNames.filter((cls) => !!cls).join(' ');
  };

  return { getRowClassName };
};
