const index = localStorage.getItem('postIndex');
const blogPost = JSON.parse(localStorage.getItem('blogPost'))[index];
const blogPage = document.getElementById("blog-page");

const showBlogPost = ()=>{
    let blogCont = document.createElement('div');
    blogCont.innerHTML = `
        <div class="header">
            <div class="content">
                <h3>${blogPost.title}</h3>
                <p>
                    ${blogPost.description}
                </p>
            </div>
            <div class="img-container">
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="">
            </div>
        </div>
        <article>
            <p>
            ${blogPost.content}
            </p>
        </article>
    `;
    blogPage.appendChild(blogCont);
}

showBlogPost()
