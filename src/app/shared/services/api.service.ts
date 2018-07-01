import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:  'root'
})

export  class  APIService {

    // server URL
    API_URL  =  'http://localhost:3000/';

    constructor(private  httpClient:  HttpClient) {}

    getPostsPaginated(page) {
        return this.httpClient.get(`${this.API_URL}posts/${page}`);
    }

    getPosts() {
        return this.httpClient.get(`${this.API_URL}posts`);
    }

    getPicsPaginated(page) {
        return this.httpClient.get(`${this.API_URL}pics/${page}`);
    }

    getPics() {
        return this.httpClient.get(`${this.API_URL}pics`);
    }

    createPost(body) {
        return  this.httpClient.post(`${this.API_URL}posts`, body);
    }

    createPic(formData) {
        return this.httpClient.post(`${this.API_URL}pics`, formData);
    }

    likePic(id) {
        const body = {'_id': id};
        console.log(body);
        return this.httpClient.post(`${this.API_URL}pics/like`, body);
    }
}
