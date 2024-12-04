import { fetchBasePath, fetchBaseUrl } from "./common";
import { ErrorDataType, ServerApiResponse, SuccessDataType } from "./types";

/* 
-- Description --
This is a base class used in server side fetching, its has only just 1 method called 'fetchApi' which is majorly used in 'serverFetchApi' files. Its abstract and makes sure all request failure and success have a uniform object type.
*/

export default class FetchBaseClass {
    baseUrl: string | undefined;
    basePath: string | undefined;
    constructor() {
        this.baseUrl = fetchBaseUrl;
        this.basePath = fetchBasePath;
    }

    fetchApi<T>(path: string, requestOptions: RequestInit = {}) {
        return new Promise<ServerApiResponse<T>>(async (resolve) => {

            try {
                const res = await fetch(`${this.baseUrl}/${this.basePath}${path}`, requestOptions);
                let resData = await res.json() as SuccessDataType<T> | ErrorDataType;

                if (resData.success) {
                    resolve({
                        resData: resData as SuccessDataType<T>,
                        statusCode: res.status,
                        isError: false,
                        error: null
                    })
                } else {
                    resolve({
                        resData: null,
                        statusCode: res.status,
                        isError: true,
                        error: resData as ErrorDataType
                    })
                }

            } catch (error: any) {
                resolve({
                    resData: null,
                    statusCode: error?.status,
                    isError: true,
                    error: error as ErrorDataType
                })
            }
        })
    }
}


