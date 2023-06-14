import axios, { AxiosInstance } from 'axios';

export class RequestHandler {
  axiosInstance: AxiosInstance;

  constructor() {
    const options = {
      baseURL: '',
      headers: {
        'Content-type': 'application/json',
      },
    };
    this.axiosInstance = axios.create(options);
  }

  get requestHandler() {
    return this.axiosInstance;
  }
}
