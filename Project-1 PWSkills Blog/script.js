const modalContainer = document.querySelector('.modal-container');
const createBlog = document.getElementById('create-blog');
const blogs = document.querySelector('.blogs');
const addBlog = document.getElementById('add-blog');
const cancel = document.querySelector('.modal span');

const getAllPosts = () => {
    let blogPosts = JSON.parse(localStorage.getItem('blogPost') || "[]");
    document.querySelectorAll('.blog').forEach(blog => blog.remove());
    blogPosts.forEach((blogpost, index) => {
        // localStorage.setItem('postIndex', JSON.parse(index));
        let blog = document.createElement('div');
        blog.classList.add('blog');
        blog.innerHTML = `
        <div class="img-cont">
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="">
        </div>
        <h4>${blogpost.title}</h4>
        <p>${blogpost.description}</p>
        <a href="./blogPost/blog.html" onclick="localStorage.setItem('postIndex', JSON.parse(${index}))">Read</a>
    `;
        blogs.appendChild(blog);
    });

}

getAllPosts();

createBlog.onclick = () => {
    console.log('hello');
    modalContainer.classList.add('active');
}

cancel.onclick = () => {
    modalContainer.classList.remove('active');
}

addBlog.onclick = () => {
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const post = document.querySelector('#post');

    let obj = {
        title: title.value,
        description: description.value,
        post: post.value,
    }
    let blogpost = JSON.parse(localStorage.getItem('blogPost'));
    console.log(blogpost);
    let array;
    if (blogpost) {
        array = [...blogpost, obj];
    }
    else {
        array = [obj]
    }
    // blogs.insertAdjacentHTML('afterend', blog);
    modalContainer.classList.remove('active');
    localStorage.setItem('blogPost', JSON.stringify(array));
    getAllPosts();
}
