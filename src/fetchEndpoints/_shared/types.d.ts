/* 
Fetch Request and Response Data Types from the backend
*/
export interface SuccessDataType<T> {
    success: boolean,
    message: string,
    data: T
}
interface ErrorDataType {
    success: boolean,
    message: string,
    error?: any
}

export interface QuriedDataType<T> {
    data: T,
    page: number,
    perPage: number,
    total: number,
    lastPage: number
}

// Search params required while querying getAll Articles
export interface GetAllParamsObject {
    page?: number,
    perPage?: number,
    searchQuery?: string
}
export interface ServerApiResponse<T = any> {
    resData: SuccessDataType<T> | null,
    statusCode: number | string | undefined,
    error: ErrorDataType | null,
    isError: boolean
}

export type ClientApiResponse<T> = SuccessDataType<T>;
