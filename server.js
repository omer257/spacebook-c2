var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//---------------------------------------------------------------------------------------
const SERVER_PORT = 8080;
//---------------------------------------------------------------------------------------
mongoose.connect('mongodb://localhost/spacebookDB', () => {
        console.log("DB connection established!!!");
    })
    //-----------------------------------------------------------------------------------
var Post = require('./models/postModel');
// var Comment = require('./models/postModel');
//---------------------------------------------------------------------------------------
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//---------------------------------------------------------------------------------------
// You will need to create 5 server routes
// These will define your API:
//---------------------------------------------------------------------------------------
// 1) to handle getting all posts and their comments
app.get('/posts', (req, res) => {
    Post.find().exec((err, posts) => {
        if (err) {
            console.log(err)
        } else {
            // console.log(posts)
            res.send(posts);
        }
    })
});
//---------------------------------------------------------------------------------------
// 2) to handle adding a post
app.post('/posts', (req, res) => {
    //get the data the client sent
    // console.log(req.body) //{text: "whaterver"}
    //save a new Post
    var newPost = new Post(req.body);
    newPost.save((err, post) => {
        //after it saved return the saved post to the client, he'll get in the success function
        if (err) {
            console.log(err);
        } else {
            console.log('POST ADDED')
            res.send(post);
        }
    })
});
//---------------------------------------------------------------------------------------
// 3) to handle deleting a post
app.delete(`/posts/:id`, (req, res) => {
    var id = req.params.id;
    Post.findByIdAndRemove(id).exec((err, post) => {
        if (err) {
            console.log(err)
        } else {
            console.log('post :' + id + ' REMOVED')
        }
    })
});
//---------------------------------------------------------------------------------------
// 4) to handle adding a comment to a post
app.put(`/posts/:id`, (req, res) => {
        var id = req.params.id; // working
        var newcomment = (req.body);
        // console.log(id)
        // console.log(newcomment)

        Post.findByIdAndUpdate(id).exec((err, post) => {
            if (err) {
                console.log(err);
            } else {
                // console.log(post);
                post.comments.push(newcomment);

                // post.save();
                console.log(post) //just need to update this post <<<<<<<<<<<<<<<<<<<<<<<<<<
            }

        })
    })
    // 5) to handle deleting a comment from a post
    //---------------------------------------------------------------------------------------
app.listen(SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
});
//-------------------------------------------------------------------------------------------