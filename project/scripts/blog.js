document.addEventListener("DOMContentLoaded", function() {
    fetch('/data/blogs.json')
        .then(response => response.json())
        .then(blogs => {
            let blogContainer = document.getElementById("blog-list");
            blogs.forEach(blog => {
                let blogPost = `
                    <div class="blog-post">
                        <h2>${blog.title}</h2>
                        <p><em>by ${blog.author} on ${blog.date}</em></p>
                        <p>${blog.content}</p>
                        <hr>
                    </div>
                `;
                blogContainer.innerHTML += blogPost;
            });
        })
        .catch(error => console.error('Error fetching blog data:', error));
});
