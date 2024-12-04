import FetchBaseClass from "../_shared/serverBaseApi";
import { GetAllParamsObject, ServerApiResponse } from "../_shared/types";
import { _faqs } from "./paths";


export class FaqApi extends FetchBaseClass {

    constructor() {
        super()
    }

    // Get all faq data
    getAll<T>(object = {}, requestOptions: RequestInit = {}) {
        const urlSearchParams = new URLSearchParams(object as any);
        requestOptions.method = 'GET';
        requestOptions.next = { tags: ['Faq'] }
        // requestOptions.cache = 'no-store'
        return new Promise<ServerApiResponse<T>>(async (resolve, reject) => {
            const res = await this.fetchApi<T>(`${_faqs}?${urlSearchParams.toString()}`, requestOptions);
            resolve(res);
        })
    }
}

const faqApiInstance = new FaqApi();

export default faqApiInstance;