import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  private _response: APIResponse | null = null;

  constructor(private readonly request: APIRequestContext) {}

  async get(url: string): Promise<void> {
    this._response = await this.request.get(url);
  }

  async post(url: string, data: object): Promise<void> {
    this._response = await this.request.post(url, { data });
  }

  async put(url: string, data: object): Promise<void> {
    this._response = await this.request.put(url, { data });
  }

  async patch(url: string, data: object): Promise<void> {
    this._response = await this.request.patch(url, { data });
  }

  async delete(url: string): Promise<void> {
    this._response = await this.request.delete(url);
  }

  get response(): APIResponse {
    if (!this._response) throw new Error('No response');
    return this._response;
  }

  async json(): Promise<Record<string, unknown>> {
    return this.response.json();
  }
}
