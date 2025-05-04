
import { Request } from '../requests/request';


export class BaseController {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.request = new Request(baseURL);
    }
}
