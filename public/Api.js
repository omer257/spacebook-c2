class PostsApi {
    constructor() {}
    fetch() {
        return $.ajax({
            method: "GET",
            url: '/posts',
        })
    }
}

const postApi = new PostsApi();
export default postApi