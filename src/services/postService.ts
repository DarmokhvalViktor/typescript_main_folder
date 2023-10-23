import {axiosService, IRes} from "./axiosService";

import {IPost} from "../interfaces/postInterface";
import {urls} from "../constants/urls";

const postService = {
    getAll:():IRes<IPost[]> => axiosService.get(urls.posts.all),
    getById:(id:number):IRes<IPost> => axiosService.get(urls.posts.byId(id))
}

export {
    postService
}