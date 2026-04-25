function back_to_blog_list(blog, blog_list, title, content, back, date) {
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search,
  );
  title.innerHTML = "Blog";
  title.style.width = "";
  content.innerHTML = "";
  blog_list.style.display = "block";
  back.style.display = "none";
  document.title = "hummusphere - Blog";
  date.style.display = "none";
}

function update_blog_content(id, blog, blog_list) {
  const title = document.getElementById("blog-header");
  const content = document.getElementById("blog-content");
  const back = document.getElementsByClassName("back-to-blogs")[0];
  const date = document.getElementById("blog-date");

  location.hash = blog.id;
  title.innerHTML = blog.title;
  title.style.width = "700px";
  content.innerHTML = blog.content;
  blog_list.style.display = "none";
  date.innerHTML = blog.date;
  date.style.display = "block";
  back.style.display = "block";
  document.title = "hummusphere - " + blog.title;
  back.onclick = () =>
    back_to_blog_list(blog, blog_list, title, content, back, date);
}

async function fetch_blog_content() {
  const blog_list = document.getElementById("blog-list");
  const data = await fetch("blog.json");
  const blogs = await data.json();

  var check_hash = false;
  blog_list.style.display = "none";

  blogs.forEach((blog) => {
    const blog_item = document.createElement("li");

    blog_item.className = "blog-item";
    blog_item.innerHTML =
      blog.date + " - " + '<a class="blog-list-a-tag">' + blog.title;
    blog_item.onclick = () => update_blog_content(blog.id, blog, blog_list);
    blog_list.appendChild(blog_item);
  });

  blogs.forEach((blog) => {
    if (window.location.hash && window.location.hash.slice(1) == blog.id) {
      check_hash = true;
      update_blog_content(blog.id, blog, blog_list);
    }
  });

  if (check_hash == false) {
    blog_list.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function() {
    fetch_blog_content();
});
