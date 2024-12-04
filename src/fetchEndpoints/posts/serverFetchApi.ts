import FetchBaseClass from "../_shared/serverBaseApi";
import { ServerApiResponse } from "../_shared/types";
import { _post_starz, _post_celebrities, _post_feed } from "./paths";

export class PostApi extends FetchBaseClass {

    constructor() {
        super()
    }

    // Get all Starz posts
    getStarzPosts<T>(object = {}, requestOptions: RequestInit = {}) {
        const urlSearchParams = new URLSearchParams(object as any);
        requestOptions.method = 'GET';
        requestOptions.next = { tags: ['StarzPosts'] }

        return new Promise<ServerApiResponse<T>>(async (resolve, reject) => {
            const res = await this.fetchApi<T>(`${_post_starz}?${urlSearchParams.toString()}`, requestOptions);
            resolve(res);
        })
    }

    // Get all Celebrities posts
    getCelebritiesPosts<T>(object = {}, requestOptions: RequestInit = {}) {
        const urlSearchParams = new URLSearchParams(object as any);
        requestOptions.method = 'GET';
        requestOptions.next = { tags: ['CelebritiesPosts'] }

        return new Promise<ServerApiResponse<T>>(async (resolve, reject) => {
            const res = await this.fetchApi<T>(`${_post_celebrities}?${urlSearchParams.toString()}`, requestOptions);
            resolve(res);
        })
    }

    // Get all Feed posts
    getFeedPosts<T>(object = {}, requestOptions: RequestInit = {}) {
        const urlSearchParams = new URLSearchParams(object as any);
        requestOptions.method = 'GET';
        requestOptions.next = { tags: ['FeedPosts'] }

        return new Promise<ServerApiResponse<T>>(async (resolve, reject) => {
            const res = await this.fetchApi<T>(`${_post_feed}?${urlSearchParams.toString()}`, requestOptions);
            resolve(res);
        })
    }
}

const postApiInstance = new PostApi();

export default postApiInstance;