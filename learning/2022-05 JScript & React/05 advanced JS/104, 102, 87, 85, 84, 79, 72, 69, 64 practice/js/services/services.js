// 5-89
// const postData = async (url, data) => {
async function postData(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data // it was JSON.stringify(object) here
    });
    return await res.json();
};

// // 5-89
// const getResources = async (url) => {
async function getResources(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}. Status ${res.status}`);
    }
    return await res.json();
};

export {postData};
export {getResources};