import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:  'root'
})

export  class  APIService {

    // server URL
    API_URL  =  'http://localhost:3000';

    constructor(private  httpClient:  HttpClient) {}

    getPosts() {
        return this.httpClient.get(`${this.API_URL}/posts`);
    }

    getPics() {
        return this.httpClient.get(`${this.API_URL}/pics`);
    }

    createPost(body) {
        return  this.httpClient.post(`${this.API_URL}/posts`, body);
    }

    createPic(formData) {
        return this.httpClient.post(`${this.API_URL}/pics`, formData);
    }
}
