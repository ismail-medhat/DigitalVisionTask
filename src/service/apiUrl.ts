export type apisTypes = {
  login: string;
  shipmentList: string;
};

export const APIS: apisTypes = {
  login: 'api/method/login',
  shipmentList: 'api/method/frappe.client.get_list',
};
