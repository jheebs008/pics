import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID npN0aS43Kj2pC7sjJfLNFJRhcIRnEz-b7UU4253KjAU'
    }
});