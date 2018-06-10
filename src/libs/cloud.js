import spring from './cloudFetch'

export function getServices() {
    return spring({
        url: 'monitor/services',
        method: 'get'
    });
}