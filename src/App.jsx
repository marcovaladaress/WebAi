
import ArrowUp from "./components/arrow-up";
import Headertopo from "./components/header";




export default function App() {
  return (
    <>
      <Headertopo />
      <section>
        <div className="container">
          <div className="section-container">
          <div className="container-info">
            <div className="infos">
                <span><p className="collect-info">Collect Nfts</p></span>
                <h1><span className="title">Discover & Collect</span> The Best NFTs Digital Art</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis tempora veritatis consectetur esse cum neque voluptatibus.</p>
                <button className="explore-info">Explore Now</button>
               <span> <button className="sell-info">Sell Now <ArrowUp/> </button></span>
            </div>
          </div>
          <div className="container-img">
                <div className="img1">
                    <img width="300px" className="img-monkey" src="./img-monkey1.png" alt="" />
                    <img width="300px" className="img-monkey" src="./img-monkey2.png" alt="" />
                </div>
                <div className="img2">
                    <img width="300px" className="img-monkey" src="./img-monkey3.png" alt="" />
                    <img width="300px" className="img-monkey" src="./img-monkey4.png" alt="" />
                </div>
          </div>
        </div>
          </div>

          
      </section>
    </>




  )
}