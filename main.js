var posts = [];

const getTime = () => {
    var d = new Date();
    var n = d.getTime();
    return n;
}

var addPost = (string, num) => {
   var post = {text: string,
               id: num
                };
    posts.push(post);
};

var renderPost = () => {
    $(".posts").empty();
    for(var i = 0; i < posts.length; i++){
    $(".posts").append("<p " + "class = 'post' data-id = " + posts[i].id + "> " + posts[i].text + " " + "<button type = 'button' class = 'remove' >REMOVE</button></p>");
    }
}

$('.add-post').click(function(){
   var postInput = $('#post-name').val();
  var postNum = getTime();
    addPost(postInput, postNum);
    renderPost();
});

$(".posts").on('click', '.remove', function(){ 
    var clickedId = $(this).parent().data().id;
    for(i = 0; i < posts.length; i++){
        if(posts[i].id === clickedId){
        posts.splice(i, 1);
    }
}
    renderPost();
});


