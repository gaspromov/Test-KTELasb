import { ReqMap } from "./tools/interfaces/req-map";

export const Requests: ReqMap  = {
    getItems: { url: '/items', method: 'GET' },
    getItemById: { url: '/items/:param', method: 'GET' },
    postItem: { url: '/items', method: 'POST' }
}