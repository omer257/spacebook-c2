var posts = [];

const getTime = () => {
    var d = new Date();
    var n = d.getTime();
    return n;
}

var addPost = (string, num) => {
    var post = {
        text: string,
        id: num
    };
    posts.push(post);
};

var renderPost = () => {
    $(".posts").empty();
    for (var i = 0; i < posts.length; i++) {
        $(".posts").append("<p " + "class = 'post' data-id = " + posts[i].id + "> " + posts[i].text + " " + "<button type = 'button' class = 'btn btn-danger remove' >REMOVE</button> <input type='text' id= 'data-user' class = 'form-control' placeholder = 'Username'> <input type='text' id= 'data-comment' class = 'form-control' placeholder = 'Comments'> <button type = 'button' class = 'btn btn-success add-comment' >SEND</button></p>");
    }
}

$('.add-post').click(function () {
    var postInput = $('#post-name').val();
    var postNum = getTime();
    addPost(postInput, postNum);
    renderPost();
});

$(".posts").on('click', '.add-comment', function () {
    var sentId = $(this).parent().data().id;
    var sentUser = $(this).parent().find('#data-user').val();
    var sentComment = $(this).parent().find('#data-comment').val();
    for (i = 0; i < posts.length; i++) {
        if (posts[i].id === sentId) {
            posts[i].username = sentUser;
            posts[i].comment = sentComment;
        }
    }
    $(".posts").append("<p>" + sentUser + " says: " + sentComment + "</p>");
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