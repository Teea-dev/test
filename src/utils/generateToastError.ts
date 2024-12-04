import { ToastOptions } from 'react-toastify';


/* 

This Helper function lazy loads toast function and
pops an error message base on the error statusCode

*/
export default async function generateToastError(error: any, customText?: string | null, options: ToastOptions<{}> = { type: 'error' }) {
    const toast = (await import('react-toastify').then(lib => lib.toast));
    const defaultText = customText || `Ooops, an error occurred please try again later`;


    if (error === 'default') {
        toast(defaultText, { ...options });
        return;
    }
    const statusCode = error?.originalStatus || error?.statusCode || error?.status;


    switch (statusCode) {
        case 500:
            toast(customText || `Internal Error, please try again later`, { ...options });
            break;
        case 404:
            toast(customText || `Sorry couldn't find the data you requested, please try again later`, { ...options });
            break;
        case 400:
            toast(customText || `Bad Request, Please check your input or try again later`, { ...options });
            break;

        default:
            toast(defaultText, { ...options });
            break;
    }
}