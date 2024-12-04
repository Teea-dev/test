import { QuriedDataType } from "../_shared/types";




// Faq Base Data Type
export interface FaqDataType {
    _id: string,
    question: string,
    answer: string,
    createdAt: string,
    updatedAt: string,
}

export type QuriedFaqDataType = QuriedDataType<FaqDataType[]>;