class PostsApi {
    constructor() {}
    fetch($input) {
        return $.ajax({
            method: "GET",
            url: '/posts'
        })
    }
}

const postApi = new PostsApi();
export default postApi