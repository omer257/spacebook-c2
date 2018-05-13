import postApi from './Api.js';

/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */
class PostsRepository {
    constructor() {
        this.posts = this.initData();
    }
    async initData() {
        // console.log('calling');
        let result = await postApi.fetch();
        this.posts = result;
        return this.posts;
    }


    async addPost(postText) {
        var newPost = { text: postText };
        let result = await $.ajax({
            method: "POST",
            url: '/posts',
            data: newPost
        })
        this.posts.push(result)
    }

    async removePost(id) {
        let result = await $.ajax({
            method: "DELETE",
            url: `/posts/` + id,
        })
    }

    async addComment(newComment, postID) {
        let result = await $.ajax({
            method: "PUT",
            url: '/posts/' + postID,
            data: newComment
        })
    };

    async deleteComment(postID, commentID) { // neew more work !?!?!!

        let result = await $.ajax({
            method: "DELETE",
            url: '/posts/' + postID + '/' + commentID,

        })
    }
}


export default PostsRepository