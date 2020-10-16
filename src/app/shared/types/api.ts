export interface IApiLoginBody {
  type: 'sms';
  phone: string;
  code?: string;
}

export type TOrderOperationName = 'refund' | 'resend_email' | 'resend_notifications' | 'resend_sms';

export interface IMultiLang {
  [key: string]: string;
}

export interface IOrderMetaOperation {
  [key: string]: {allow: boolean};
}

export interface IOrderMeta {
  operations: IOrderMetaOperation;
}

export interface IOrderProductItemDesc {
  name: IMultiLang;
}

export interface IOrderProductItemSchedule {
  begin: string;
  begin_time: string;
}

export interface IOrderProductItemHall {
  name: IMultiLang;
}

export interface IOrderProductItemHallPlace {
  meta: {
    row?: {name: IMultiLang};
    seat?: string;
  };
}

export interface IOrderProductItemSpot {
  name: IMultiLang;
}

export interface IOrderProductItem {
  uuid: string;
  ProductDesc: IOrderProductItemDesc;
  Schedule: IOrderProductItemSchedule;
  Hall: IOrderProductItemHall;
  HallPlace: IOrderProductItemHallPlace;
  Spot: IOrderProductItemSpot;
}

//ticket
export interface IOrderItemsContainerItemData {
  uuid: string;
  ProductItem: IOrderProductItem;
  number: string;
  price: string | number;
  total_sum: string | number;
  refund_fee: string | number;
  status: 'sold' | 'refund';
}

//ticket
export interface IOrderItemsContainerItem {
  data: IOrderItemsContainerItemData;
  meta: any;
}

export interface IExtOrdersContainerItemData {
  //tickets
  OrderItemsContainer: IOrderItemsContainerItem[];
}

//event
export interface IExtOrdersContainerItem {
  data: IExtOrdersContainerItemData;
  meta: any;
}

export interface IOrderData {
  ExtOrdersContainer: IExtOrdersContainerItem[];
  number: string;
}

//order - number, email, phone
export interface IOrder {
  data: IOrderData;
  meta: IOrderMeta;
}
