import { QuriedDataType } from "../_shared/types";




// Post Base Data Type
export interface PostBaseDataType {
    caption: string,
    video: string,
    handle: string,
    avatar: string
}

export interface TailorFeedDataType {
    id: string;
    video: string;
    interest: string;
}


export interface StarzDataType extends PostBaseDataType { }
export interface CelebritiesDataType extends PostBaseDataType { }