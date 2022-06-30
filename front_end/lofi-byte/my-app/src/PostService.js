import axios from 'axios'

const GET_ALL_POSTS_URL = "http://localhost:8099/api/posts"
const GET_ALL_NONFLAGGED_POSTS_URL = 'http://localhost:8099/api/posts/flagged/false';
const GET_ALL_FLAGGED_POSTS_URL = 'http://localhost:8099/api/posts/flagged/true';
class PostService {

    getAllPosts() {
        return axios.get(GET_ALL_POSTS_URL);
    }

    getAllFlaggedPosts() {
        return axios.get(GET_ALL_FLAGGED_POSTS_URL);
    }

    getNonFlaggedPosts() {
        return axios.get(GET_ALL_NONFLAGGED_POSTS_URL);
    }


}

export default new PostService();