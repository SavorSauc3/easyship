export function load({ params }) {
    console.log('Params in +page.ts:', params); // Debugging
    return {
        slug: params.slug // Pass the slug to the page
    };
}