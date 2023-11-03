/* eslint-disable @typescript-eslint/no-empty-interface */
export interface DeliverectResponse {
  _items: DeliverectItem[];
  _links: Links2;
  _meta: Meta;
}

export interface DeliverectItem {
  _id: string;
  account: string;
  _created: string;
  _updated: string;
  _etag: string;
  channelOrderId: string;
  channelOrderKey: string;
  channelOrderDisplayId: string;
  posId: string;
  posReceiptId: string;
  posLocationId: string;
  location: string;
  channelLink: string;
  status: number;
  statusHistory: StatusHistory[];
  reportingHistory: ReportingHistory[];
  packaging: Packaging;
  channelStatusHistory: ChannelStatusHistory[];
  by: string;
  orderType: number;
  channel: number;
  pos: number;
  rating: any[];
  pickupTime: string;
  deliveryTime: string;
  preparationTime: number;
  deliveryIsAsap: boolean;
  courier: Courier;
  customer: Customer;
  deliveryAddress: DeliveryAddress;
  orderIsAlreadyPaid: boolean;
  deliveryInfo: DeliveryInfo;
  taxes: any[];
  payment: Payment;
  payments: any[];
  note: string;
  items: Item2[];
  decimalDigits: number;
  numberOfCustomers: number;
  channelOrderRawId: string;
  channelOrderHistoryRawIds: any[];
  serviceCharge: number;
  deliveryCost: number;
  bagFee: number;
  tip: number;
  driverTip: number;
  discountTotal: number;
  discounts: any[];
  historyDriverUpdates: any[];
  courierUpdateHistory: CourierUpdateHistory[];
  deliveryJobIds: any[];
  deliverySystems: any[];
  failedDeliverySystems: any[];
  capacityUsages: any[];
  resolvedBy: string;
  brandId: string;
  timezone: string;
  date: number;
  fixedCost: number;
  ageCheck: boolean;
  _links: Links;
  pickupTimeETA?: string;
}

export interface StatusHistory {
  timeStamp: string;
  status: number;
  response: string;
  source: number;
}

export interface ReportingHistory {
  eventType: number;
  timestamp: string;
  properties: Properties;
}

export interface Properties {
  endpoint: string;
  httpStatus?: number;
  reportingEndpointType: number;
  orderStatus: number;
}

export interface Packaging {
  includeCutlery: boolean;
}

export interface ChannelStatusHistory {
  timeStamp: string;
  orderStatus: number;
  channelStatus: string;
  success: boolean;
  response: string;
  channelEvent: number;
  properties: Properties2;
}

export interface Properties2 {
  pickupTime?: string;
  deliveryTime?: string;
}

export interface Courier {
  deliveryBy: string;
}

export interface Customer {
  _id: string;
  hash: string;
  name: string;
  companyName: string;
  phoneNumber?: string;
  email: string;
  tin: string;
}

export interface DeliveryAddress {
  country: string;
  postalCode: string;
  city: string;
  street?: string;
  source: string;
  extraAddressInfo: string;
}

export interface DeliveryInfo {
  packageSize: string;
  transportType: string;
}

export interface Payment {
  amount: number;
  type: number;
  due: number;
  rebate: number;
}

export interface Item2 {
  _id: string;
  plu: string;
  name: string;
  sortOrder: number;
  price: number;
  quantity: number;
  productType: number;
  remark: string;
  isInternal: boolean;
  subItems: SubItem[];
  packaging: Packaging3;
  workstations: any[];
  productTags: number[];
  bottleDepositPrice?: number;
}

export interface SubItem {
  _id: string;
  plu: string;
  name: string;
  sortOrder: number;
  price: number;
  quantity: number;
  productType: number;
  isInternal: boolean;
  subItems: any[];
  packaging: Packaging2;
  workstations: any[];
  productTags: number[];
}

export interface Packaging2 {
  count: number;
  reusable: boolean;
  packedItems: number;
}

export interface Packaging3 {
  count: number;
  reusable: boolean;
  packedItems: number;
}

export interface CourierUpdateHistory {
  status: number;
  received: string;
  courier: Courier2;
  arrivalTime: string;
  deliveryTime?: string;
  source: number;
}

export interface Courier2 {}

export interface Links {
  self: Self;
}

export interface Self {
  title: string;
  href: string;
}

export interface Links2 {
  parent: Parent;
  self: Self2;
}

export interface Parent {
  title: string;
  href: string;
}

export interface Self2 {
  title: string;
  href: string;
}

export interface Meta {
  page: number;
  max_results: number;
  total: number;
  cursor: string;
}

export type DeliverectChannelResponse = ChannelResponseData[];

export interface ChannelResponseData {
  date: string;
  revenue: number;
  grossSales: number;
  fixedCost: number;
  adjustedRevenue: number;
  deliveryCost: number;
  discountTotal: number;
  serviceCharge: number;
  tip: number;
  driverTip: number;
  taxTotal: number;
  taxTotalComputed: number;
  taxRemitted: number;
  rebate: number;
  bagFee: number;
  channelDiscount: number;
  restaurantDiscount: number;
  channelDeliveryCost: number;
  restaurantDeliveryCost: number;
  count: number;
  byPaymentType_CARD: number;
  byPaymentType_CASH: number;
  byPaymentType_ON_DELIVERY: number;
  byPaymentType_ONLINE: number;
  byPaymentType_CREDITCARDATDOOR: number;
  byPaymentType_PINATDOOR: number;
  byPaymentType_VOUCHERATDOOR: number;
  byPaymentType_MEALVOUCHER: number;
  byPaymentType_BANCONTACT: number;
  byPaymentType_OTHER: number;
  byPaymentType_INVOICE: number;
  byDeliveryType_UNKNOWN: number;
  byDeliveryType_PICKUP: number;
  byDeliveryType_DELIVERY: number;
  byDeliveryType_EAT_IN: number;
  byDeliveryType_CURBSIDE: number;
  channel: number;
}
