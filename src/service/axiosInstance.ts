import axios, {Method, AxiosHeaders} from 'axios';
import {store} from '../store';
import {APIS, apisTypes} from './apiUrl';
import {Alert} from 'react-native';

const BASE_URL = 'https://shippex-demo.bc.brandimic.com/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  async error => {
    // Code here...
    const err = error?.response?.data?.message ?? '';
    console.log('Axios Error : ', err);
    if (err) {
      Alert.alert(err);
    }
    return Promise.reject(error);
  },
);

const Axios = async ({
  method,
  path,
  data,
  params,
  pathParams = '',
  header,
  isFormDate = false,
}: {
  method: Method;
  path: keyof apisTypes;
  data?: any;
  params?: any;
  pathParams?: string;
  header?: AxiosHeaders;
  isFormDate?: boolean;
}) => {
  const accessToken = '';

  const authHeder = accessToken
    ? {
        Authorization: `Bearer ${accessToken}`,
      }
    : {};

  const response = await axiosInstance({
    method: method,
    url: APIS[path] + pathParams,
    data: data,
    params: params,
    headers: isFormDate
      ? {
          'Content-Type': 'multipart/form-data',
          ...authHeder,
          ...header,
        }
      : {
          'Content-Type': 'application/json',
          ...authHeder,
          ...header,
        },
  });
  return response;
};

export default Axios;
