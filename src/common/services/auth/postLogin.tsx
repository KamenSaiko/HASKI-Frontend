import { RequestResponse } from "./RequestResponse";

export type postLoginParams = {
    nonce?: string;
};
export const postLogin = async (params?: postLoginParams): Promise<RequestResponse> => {
    const { nonce = "" } = params || {};
    return fetch(`http://fakedomain.com:5000/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ nonce: nonce }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return {
            status: response.status,
            message: response.statusText
        }
    }) as Promise<RequestResponse>;
};