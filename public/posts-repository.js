import postApi from './Api.js';

/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */
class PostsRepository {
    constructor() {
        this.postApi = postApi;
        this.posts = [];
    }
    async buildPosts() {
        console.log('calling');
        let result = await this.postApi.fetch();
        console.log(result);
        //-------------------------
        this.posts = result;
        return this.posts;
    }

    addPost(postText) {
        this.posts.push({ text: postText, comments: [] });
        //
        $.ajax({
                method: "POST",
                url: '/posts',
                data: this.posts,

            })
            //
    }

    removePost(index) {
        this.posts.splice(index, 1);
    }

    addComment(newComment, postIndex) {
        this.posts[postIndex].comments.push(newComment);
    };

    deleteComment(postIndex, commentIndex) {
        this.posts[postIndex].comments.splice(commentIndex, 1);
    };
}

export default PostsRepository