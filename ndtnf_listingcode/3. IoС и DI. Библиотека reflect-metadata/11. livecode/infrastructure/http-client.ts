import { injectable } from "inversify";

@injectable()
export class HttpClient {
  get(url) {
    console.log(`fetch from ${url}`);
    return [];
  }
}
