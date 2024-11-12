const url = null // 'https://jsonplaceholder.typicode.com/posts?_limit=6'

let posts;

if (!url) {
  //Placeholder
  posts = (
    {
      id: "Placeholder",
      title: 'Post Title',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel turpis ac neque volutpat iaculis.",
      img: "https://via.placeholder.com/600x400"
    }
  )
} else {
  fetch(url)
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
    .catch(err => console.error('Error:', err))
    .finally(() => {
      if (!posts) {
        //Placeholder
        posts.push(
          {
            id: "Placeholder",
            title: 'Post Title',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel turpis ac neque volutpat iaculis.",
            img: "https://via.placeholder.com/600x400"
          }
        )
      }
    });  
}

export default posts;