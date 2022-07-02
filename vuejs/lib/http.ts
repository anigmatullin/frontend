
export function doGet(url: string)
{
    //
    let apiurl = '/api/get';
    let body = {url: url};
    let strBody = JSON.stringify(body);

    let params: RequestInit = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'same-origin', // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: new Headers({ 'content-type': 'application/json' }),
        // headers: { 'Content-Type': 'application/json' },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: strBody
    }

    // params.body = strBody;

    return fetch(apiurl, params);
}

export function doPost(url: string)
{
    //
}

export function doPut(url: string)
{
    //
}

export function doDelete(url: string)
{
    //
}

export function doHead(url: string)
{
    //
}
