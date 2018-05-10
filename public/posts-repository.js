import postApi from './Api.js';

/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */
class PostsRepository {
    constructor() {
        // this.postApi = postApi;
        this.posts = [];
    }
    async initData() {
        console.log('calling');
        let result = await postApi.fetch();
        // console.log(result);
        //-------------------------
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
        // this.posts[postIndex].comments.push(newComment);
        //newComment is    { text: $comment.val(), user: $user.val() }
        //get post id 

        //send comments and id to node server 

        // update 
        let result = await $.ajax({
                method: "PUT",
                url: '/posts/' + postID,
                data: newComment
            })
            // this.posts.push(result)
    };

    deleteComment(postIndex, commentIndex) {
        this.posts[postIndex].comments.splice(commentIndex, 1);
    };
}

export default PostsRepository