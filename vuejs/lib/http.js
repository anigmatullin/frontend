
export function doGet(url)
{
    //
    let apiurl = '/api/get';
    let body = {url: url};
    body = JSON.stringify(body);

    let params = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'same-origin', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }

    params.body = body;

    return fetch(apiurl, params);
}

export function doPost(url)
{
    //
}

export function doPut(url)
{
    //
}

export function doDelete(url)
{
    //
}

export function doHead(url)
{
    //
}
