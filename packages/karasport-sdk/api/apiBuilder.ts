import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class ApiBuilder {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create()
  }

  /* Set BaseUrl API */
  setBaseUrl(baseUrl: AxiosInstance['defaults']['baseURL']) {
    this.instance.defaults.baseURL = baseUrl

    return this
  }

  /* GET Method */
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.get(url, config)
  }
  /* POST Method */
  post<T>(
    url: string,
    data: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.post(url, data, config)
  }
  /* PUT Method */
  public put<T>(
    url: string,
    data: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.put(url, data, config)
  }
  /* DELETE Method */
  public delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.delete(url, config)
  }

  build(): AxiosInstance {
    return this.instance
  }
}
