export const getGifs = async (category)=>{
    const url = `https://jsonplaceholder.typicode.com/photos`

    const resp= await fetch (url)
    const {data} = await resp.json()
    const photos =data.map(img=>{
        return{
            albumId:img.albumId,
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url,
            thumbnailUrl:img.thumbnailUrl.url
        }

    })
    return photos
}