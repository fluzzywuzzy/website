import { GH_TOKEN, CONSTRUCTION } from '$env/static/private'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ( {url} ) => {
    let construction = false;
    if (["t", "true", "1", 1].includes(CONSTRUCTION.toLowerCase())) {
        construction = true;
    }

    return {
        construction: construction,
        token: GH_TOKEN
    }
}