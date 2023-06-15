import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';

type RequestHandlerParam = {
  baseUrl: string;
}

type Fn = BaseQueryFn<
  {
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
  }, unknown, unknown>;

export const requestHandler = ({ baseUrl }: RequestHandlerParam): Fn => async ({ url, method, data, params }) => {
  try {
    const response = await axios({
      url: baseUrl + url, method, data, params, headers: {
        'Content-type': 'application/json',
      },
    });
    return { data: response.data };
  } catch (axiosError) {
    let err = axiosError as AxiosError
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    }
  }
}