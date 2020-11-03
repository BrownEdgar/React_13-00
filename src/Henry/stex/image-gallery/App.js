import React,{useState,useEffect} from 'react'
import InfiniteScroll from 'react-infinte-scroll-component'
import './App.css'


const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
console.log(accessKey)

export default function App() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPhotos();
    })
function getPhotos(){
    fetch(`https://api.unsplash.com/photos?client_id=${accessKey}&page=${page}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
}


function searchPhotos(){

}

    return (
        <div className="app">
            <h1>Unsplash Image Gallery!</h1>
            <form onSubmit={searchPhotos}>
                <input type="text"
                placeholder="search your photos"/>
                <button>Search</button>
            </form>
            
        <InfiniteScroll
        datalength={images.length}
        next={() => setPage(page => page +1)}
        hasMore={true}
        loader = {<h4>Loading...</h4>}>
        <div className="image-grid">
          {images.map((image, index) => (
            <a
              className="image"
              key={index}
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
          ))}
        </div>
        </InfiniteScroll>


        </div>
    )
}
