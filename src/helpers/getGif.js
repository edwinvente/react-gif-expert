export const getGifs = async (category) => {
    console.log(category);
    const api_key = 'asCRJ0tzcBrVdeYAt58buDrL23hULb1n';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=asCRJ0tzcBrVdeYAt58buDrL23hULb1n`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

};