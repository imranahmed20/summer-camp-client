export const imageUpload = async image => {
    const formData = new formData()
    formData.append('image', image)
    const url = `https//api.imgdb.com.1.updated/key=${key}`
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    })
    const data = await response.json()
    return data;
}