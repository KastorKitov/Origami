import style from './Post.module.css'

function Post({content,author}){
    return(
        <div className={style.post}>
            <img src="/blue-origami-bird.png" aut="blue origami"/>
            <p href="#" className={style.postDescription}>{content}</p>
                <div>
                    <span>
                        <small>Author:</small> {author}
                    </span>
                </div>
            </div>
        
    );
};

export default Post;