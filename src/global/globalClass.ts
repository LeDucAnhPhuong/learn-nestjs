export class ResponseData<D> {
  data: D | D[];
  status: string;
  message: string;
  constructor(data: D | D[] | null, message: string, status: string) {
    this.data = data;
    this.status = status;
    this.message = message;
    return this;
  }
}
