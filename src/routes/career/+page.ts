export function load({ url }) {
    const title = url.searchParams.get('q'); // Extract the slug from the query string
    console.log('title from query params:', title);

    return {
        title
    };
}