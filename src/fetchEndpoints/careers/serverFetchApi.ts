import FetchBaseClass from "../_shared/serverBaseApi";
import { ServerApiResponse } from "../_shared/types";
import { _careers } from "./paths";


export class CareersApi extends FetchBaseClass {

    constructor() {
        super()
    }

    // Get all Careers jobs
    getAll<T>(requestOptions: RequestInit = {}) {
        requestOptions.method = 'GET';
        requestOptions.next = { tags: ['Careers'] }
        requestOptions.cache = 'no-store'
        return new Promise<ServerApiResponse<T>>(async (resolve, reject) => {
            const res = await this.fetchApi<T>(`${_careers}`, requestOptions);
            resolve(res);
        })
    }
}

const careersApiInstance = new CareersApi();

export default careersApiInstance;