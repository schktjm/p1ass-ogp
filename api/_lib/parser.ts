import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { pathname, query } = parse(req.url || '/', true);
    const { num } = (query || {});


    const arr = (pathname || '/').slice(1).split('.');
    let name = '';
    if (arr.length === 0) {
        name = '';
    } else if (arr.length === 1) {
        name = arr[0];
    } else {
        name = arr.join('.');
    }

    const parsedRequest: ParsedRequest = {
        name: decodeURIComponent(name),
        memberNum: getArray(num).length > 0 ? getArray(num)[0] : '0',
    };
    return parsedRequest;
}

function getArray(stringOrArray: string[] | string | undefined): string[] {
    if (typeof stringOrArray === 'undefined') {
        return [];
    } else if (Array.isArray(stringOrArray)) {
        return stringOrArray;
    } else {
        return [stringOrArray];
    }
}
