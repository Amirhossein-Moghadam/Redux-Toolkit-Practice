
const mockApi = (url) => new Promise((res, rej) => {
    setTimeout(() => {
        res(url);
    }, 2000);
})

export default mockApi;