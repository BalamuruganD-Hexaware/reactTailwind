import axios, { AxiosInstance } from 'axios';

export class RequestHandler {
  instance: AxiosInstance;

  constructor() {
    const options = {
      baseURL: import.meta.env.BASE_URL,
      headers: {
        'Content-type': 'application/json',
      },
    };
    this.instance = axios.create(options);
  }

  get requestHandler() {
    return this.instance;
  }
}
