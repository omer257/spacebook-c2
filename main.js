var posts = [];

const getTime = () => {
    var d = new Date();
    var n = d.getTime();
    return n;
}

var addPost = (string, num) => {
    var post = {
        text: string,
        id: num,
        comments: []
    };
    posts.push(post);
};

var renderPost = () => {
    $(".posts").empty();
    for (var i = 0; i < posts.length; i++) {
        $(".posts").append("<p " + "class = 'post' data-id = " +
        posts[i].id + "> " + posts[i].text + " " + 
        "<button type = 'button' class = 'btn btn-danger remove' >REMOVE</button> <br>"+
        "<input type='text' id= 'data-user' class = 'foo' placeholder = 'Username'>"+
        "<input type='text' id= 'data-comment' class = 'coo' placeholder = 'Comments'>"+
        "<button type = 'button' class = 'btn btn-success add-comment' >SEND</button></p>");
    }
        for (i = 0; i < posts.length; i++) {
        for(var j = 0; j < posts[i].comments.length; j++ ){
            alert(posts[i].comments[j]["username"]);
            $(".posts").append(posts[i].comments[j].username + " says: " + posts[i].comments[j].comment);
             } 
        } 
    }


$('.add-post').click(function () {
    var postInput = $('#post-name').val();
    var postNum = getTime();
    addPost(postInput, postNum);
    renderPost();
});

$(".posts").on('click', '.add-comment', function () {
    var clickedId = $(this).parent().data().id;
    var sentUser = $('#data-user').val();
    var sentComment = $('#data-comment').val();
    for (i = 0; i < posts.length; i++) {
        if (posts[i].id === clickedId) {
            var commObj = {
                username: sentUser,
                comment: sentComment
            };
            posts[i].comments.push(commObj);
        }
    }

    //$(".posts").append("<p>" + sentUser + " says: " + sentComment + "</p>");
    renderPost();
});

$(".posts").on('click', '.remove', function () {
    var clickedId = $(this).parent().data().id;
    for (i = 0; i < posts.length; i++) {
        if (posts[i].id === clickedId) {
            posts.splice(i, 1);
        }
    }
    renderPost();
});