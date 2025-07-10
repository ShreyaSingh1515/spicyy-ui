import { smartSearch } from "../../data/dummy";
import type { SearchOptions } from "../../types";


export const searchAPI = async (query:SearchOptions) => {
    const res = smartSearch(query);
    return Promise.resolve(res);
}