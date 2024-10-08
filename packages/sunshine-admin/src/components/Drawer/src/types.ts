import { CSSProperties, ReactNode } from 'react';
import type { ButtonProps } from 'antd';

import type { ScrollContainerOptions } from '@/components/Container';

export interface DrawerInstance {
  setDrawerProps: (props: Partial<DrawerProps>) => void;
  emitOpen?: (open: boolean, uid: string) => void;
}

export interface ReturnMethods extends DrawerInstance {
  openDrawer: <T = any>(open?: boolean, data?: T, openOnSet?: boolean) => void;
  closeDrawer: () => void;
  getOpen?: () => boolean;
}

export type RegisterFn = (drawerInstance: DrawerInstance, uuid: string) => void;

export interface ReturnInnerMethods extends DrawerInstance {
  closeDrawer: () => void;
  changeLoading: (loading: boolean) => void;
  changeOkLoading: (loading: boolean) => void;
  getOpen?: () => boolean;
}

export type UseDrawerReturnType = [RegisterFn, ReturnMethods];

export type UseDrawerInnerReturnType = [RegisterFn, ReturnInnerMethods];

export interface DrawerFooterProps {
  showOkBtn?: boolean;
  showCancelBtn?: boolean;
  /**
   * Text of the Cancel button
   * @default 'cancel'
   * @type string
   */
  cancelText?: string;
  /**
   * Text of the OK button
   * @default 'OK'
   * @type string
   */
  okText?: string;

  /**
   * Button type of the OK button
   * @default 'primary'
   * @type string
   */
  okType?: 'primary' | 'dashed' | 'default';
  /**
   * The ok button props, follow jsx rules
   * @type object
   */
  okButtonProps?: { props: ButtonProps };

  /**
   * The cancel button props, follow jsx rules
   * @type object
   */
  cancelButtonProps?: { props: ButtonProps; on: {} };
  /**
   * Whether to apply loading visual effect for OK button or not
   * @default false
   * @type boolean
   */
  confirmLoading?: boolean;

  showFooter?: boolean;
  footerHeight?: string | string;

  onOk?: (e?: Event) => void;
  onClose?: (e?: Event) => void;

  footer?: ReactNode;
  insertFooter?: ReactNode;
  centerFooter?: ReactNode;
  appendFooter?: ReactNode;
}
export interface DrawerProps extends DrawerFooterProps {
  isDetail?: boolean;
  loading?: boolean;
  showDetailBack?: boolean;
  open?: boolean;
  /**
   * Built-in ScrollContainer component configuration
   * @type ScrollContainerOptions
   */
  scrollOptions?: ScrollContainerOptions;
  closeFunc?: () => Promise<any>;
  triggerWindowResize?: boolean;
  /**
   * Whether a close (x) button is visible on top right of the Drawer dialog or not.
   * @default true
   * @type boolean
   */
  closable?: boolean;

  /**
   * Whether to unmount child components on closing drawer or not.
   * @default false
   * @type boolean
   */
  destroyOnClose?: boolean;

  /**
   * Return the mounted node for Drawer.
   * @default 'body'
   * @type any ( HTMLElement| () => HTMLElement | string)
   */
  getContainer?: string | false | HTMLElement | (() => HTMLElement);

  /**
   * Whether to show mask or not.
   * @default true
   * @type boolean
   */
  mask?: boolean;

  /**
   * Clicking on the mask (area outside the Drawer) to close the Drawer or not.
   * @default true
   * @type boolean
   */
  maskClosable?: boolean;

  /**
   * Style for Drawer's mask element.
   * @default {}
   * @type object
   */
  maskStyle?: CSSProperties;

  /**
   * The title for Drawer.
   * @type any (string | slot)
   */
  title?: ReactNode;
  /**
   * The class name of the container of the Drawer dialog.
   * @type string
   */
  wrapClassName?: string;
  class?: string;
  rootClassName?: string;
  /**
   * Style of wrapper element which **contains mask** compare to `drawerStyle`
   * @type object
   */
  wrapStyle?: CSSProperties;

  /**
   * Style of the popup layer element
   * @type object
   */
  drawerStyle?: CSSProperties;

  /**
   * Style of floating layer, typically used for adjusting its position.
   * @type object
   */
  bodyStyle?: CSSProperties;
  headerStyle?: CSSProperties;

  /**
   * Width of the Drawer dialog.
   * @default 256
   * @type string | string
   */
  width?: string | number;

  /**
   * placement is top or bottom, height of the Drawer dialog.
   * @type string | string
   */
  height?: string | string;

  /**
   * The z-index of the Drawer.
   * @default 1000
   * @type string
   */
  zIndex?: string;

  /**
   * The placement of the Drawer.
   * @default 'right'
   * @type string
   */
  placement?: 'top' | 'right' | 'bottom' | 'left';
  afterOpenChange?: (open?: boolean) => void;
  keyboard?: boolean;
  /**
   * Specify a callback that will be called when a user clicks mask, close button or Cancel button.
   */
  onClose?: (e?: Event) => void;

  onOpenChange?: (open: boolean) => void;
  onOk?: (e?: Event) => void;
  register: (drawerInstance: DrawerInstance, id: string) => void;

  children?: ReactNode;
  loadingText?: string;
  titleToolbar?: ReactNode;
}
export interface DrawerActionType {
  scrollBottom: () => void;
  scrollTo: (to: string) => void;
  getScrollWrap: () => Element | null;
}
