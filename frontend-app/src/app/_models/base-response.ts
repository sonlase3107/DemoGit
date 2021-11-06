export class BaseResponse<T> {
  public success?: boolean;
  public data?: T;
  public error?: any;
}
