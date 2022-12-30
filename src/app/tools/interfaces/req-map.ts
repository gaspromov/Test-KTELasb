export type ReqMap = Record<string, req> 

export interface req{
    url: string,
    method: 'GET' | 'POST',
    authType?: null
}