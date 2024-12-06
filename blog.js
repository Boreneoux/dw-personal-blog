let blogs = [];

function addBlog(e) {
  e.preventDefault();

  let title = document.getElementById('input-blog-title').value;
  let content = document.getElementById('input-blog-content').value;
  let imageInput = document.getElementById('input-blog-image');

  if (title == '' || content == '' || imageInput.files.length === 0) {
    return alert('Please fill all fields');
  }

  image = URL.createObjectURL(imageInput.files[0]);

  let blog = {
    author: 'Ichlasul Fikri',
    title: title,
    content: content,
    image: image,
    postedAt: new Date()
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  console.log(blogs);

  let blogListElement = document.getElementById('blogList');

  blogListElement.innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    let formattedDate = formatDateToWIB(blogs[i].postedAt);

    console.log(blogs[i]);

    blogListElement.innerHTML += `
    <div id="${i}" class="blog-list-item">
        <div class="blog-image">
              <img src="${blogs[i].image}" alt="blog image" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="blog-detail.html" class="block-item-title"
                  >${blogs[i].title}</a
                >
              </h1>
              <div class="detail-blog-content">
                ${formattedDate} | ${blogs[i].author}
              </div>
              <p class="blog-text">
                ${blogs[i].content}
              </p>
              <p class="relative-time">${getRelativeTime(blogs[i].postedAt)}</p>
        </div>
    </div>
    `;
  }
}

function firstBlogContent() {
  return `
    <div class="blog-list-item">
        <div class="blog-image">
              <img src="assets/blog-img.png" alt="blog image" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="blog-detail.html" class="block-item-title"
                  >Test From JS</a
                >
              </h1>
              <div class="detail-blog-content">
                12 Jul 2024 22:30 WIB | Ichlasul Fikri
              </div>
              <p class="blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, eum id, alias magni, provident quo quam ducimus labore
                aut veritatis molestias. Odit id provident exercitationem
                incidunt a. Incidunt eaque molestiae consequuntur! Aliquid,
                libero. Aperiam vitae exercitationem voluptas inventore hic,
                perferendis facere delectus totam voluptatibus doloremque
                facilis illum maxime laudantium nisi!
              </p>
        </div>
    </div>
    `;
}

function formatDateToWIB(date) {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  let day = date.getDate().toString();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');

  let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;

  return formattedDate;
}

function getRelativeTime(targetDate) {
  let now = new Date();

  let diffInSeconds = Math.floor((now - targetDate) / 1000);

  console.log(diffInSeconds);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''} ago`;
  }

  let diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  }
}
