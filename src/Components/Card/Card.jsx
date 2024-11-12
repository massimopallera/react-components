import './Card.css'
import posts from '../../db/posts.js'

export default function Card() {
   
  return (
    <div className="col-12">
      <div className="card">
        <img src={posts.img} alt="" className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">
            {posts.title}
          </h3>
          <p className="card-text">
            {posts.content}
          </p>
          <a href="#" className="">
            Leggi di più
          </a>
        </div>
      </div>
    </div>
  )
}