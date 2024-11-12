const posts =
  
  //Placeholder 
  [{
    id: "Placeholder",
    title: 'Post Title',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel turpis ac neque volutpat iaculis.",
    img: "https://via.placeholder.com/600x400"
  }]

// export default posts;
fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      const post = {
        id : element.id,
        title: element.title,
        content: element.body,
        img: element.thumbnail
      }

      posts.push(post)
    });
  })

  const post = posts.find(post => post.id === 'Placeholder')
  posts.splice(posts.indexOf(post,1))
  
  console.log(posts);

export default posts;