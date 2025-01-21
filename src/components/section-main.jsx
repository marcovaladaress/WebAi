import ArrowUp from "./icon-components/arrow-up";

export default function SectionMain() {

    return(
        <section>
                <div className="container">
                  <div className="section-container">
                  <div className="container-info">
                    <div className="icon-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" color="transparent" viewBox="0 0 24 24" fill="rgb(124 58 237 / 0.2)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="badge" class="svg-section"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path></svg>  
                    </div>
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