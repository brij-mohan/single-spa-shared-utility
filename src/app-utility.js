import { BehaviorSubject } from "rxjs";
// Anything exported from this file is importable by other in-browser modules.
const apiCacheData = new Map();

// Store api data and cache it and use across multiple micro-frontend apps
export function getData(url) {
    const data = apiCacheData.get(url);

    if(data) {
        console.log('cache data ', data);
        return Promise.resolve(data);
    } 
    return new Promise((resolve) => {
        setTimeout(() => {
            const apiResponse = {
                result: 10
            };
            apiCacheData.set(url, apiCacheData);
            console.log('Actual Api data ', apiResponse);
            resolve(apiResponse);
        }, 1000)
    });
}

// Share state between the root and active/mounted micro-frontend at a time.
export const state$ = new BehaviorSubject({});
