import ArrowUp from "./icon-components/arrow-up";

export default function SectionMain() {

    return(
        <section>
                <div className="container">
                  <div className="section-container">
                  <div className="container-info">
                    <div className="infos">
                        <h1><span className="title">Discover & Collect</span> The Best NFTs Digital Art</h1>
                        <p>Somos um grande mercado dedicado a conectar grandes artistas de todos os NFTs com seus fãs e colecionadores de tokens exclusivos!.</p>
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
              
    )
}