function back_to_blog_list(blog, blog_list, title, content, back) {
  location.hash = blog.id;
  title.innerHTML = "Blog";
  content.innerHTML = "";
  blog_list.style.display = "block";
  back.style.display = "none";
}

function update_blog_content(id, blog, blog_list) {
  const title = document.getElementById("blog-header");
  const content = document.getElementById("blog-content").firstChild;
  const back = document.getElementsByClassName("back-to-blogs")[0];

  location.hash = blog.id;
  title.innerHTML = blog.title;
  content.innerHTML = blog.content;
  blog_list.style.display = "none";
  back.style.display = "block";
  back.onclick = () => back_to_blog_list(blog, blog_list, title, content, back);
}

async function fetch_blog_content() {
  const blog_list = document.getElementById("blog-list");

  const data = await fetch("blog.json");
  const blogs = await data.json();

  blogs.forEach((blog) => {
    const blog_item = document.createElement("li");

    blog_item.className = "blog-item";
    blog_item.innerHTML = blog.date + " - " + "<a>" + blog.title + "</a>";

    blog_item.onclick = () => update_blog_content(blog.id, blog, blog_list);

    blog_list.appendChild(blog_item);
  });
  return b;
}

window.onload = function () {
  fetch_blog_content();
};
