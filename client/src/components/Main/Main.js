import style from './Main.module.css';
import Post from '../Post/Post';


function Main({
    posts
}){
    return(
        <main className={style.mainContainer}>
            <h1>SoooooMe Heading</h1>
            <div className={style.posts}>
            {posts.map(x=>
                <Post
                 key={x.id}
                 content={x.content}
                 author={x.Author}
                 />
            )}
            </div>
        </main>
    );
};

export default Main;