export function load({ params }) {
    console.log(params);
    return {
        slug: params.slug
    }
}

export const prerender = false;