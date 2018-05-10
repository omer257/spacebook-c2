import PostsRepository from './posts-repository.js';
import PostsRenderer from './posts-renderer.js';
import EventsHandler from './events-handler.js';


//-----------------------------------------------------------------------------------
let postsRepository = new PostsRepository();
let postsRenderer = new PostsRenderer();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);
//-----------------------------------------------------------------------------------
;
//
loadPage();
async function loadPage() {
    let data = await postsRepository.buildPosts()
    postsRenderer.renderPosts(data);
    console.log(postsRepository.posts)
}
//-----------------------------------------------------------------------------------
eventsHandler.registerAddPost();
eventsHandler.registerRemovePost();
eventsHandler.registerToggleComments();
eventsHandler.registerAddComment();
eventsHandler.registerRemoveComment();
//-----------------------------------------------------------------------------------