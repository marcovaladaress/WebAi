
import CardCategories from "./components/card-categories";
import Headertopo from "./components/header";
import ArrowRight from "./components/icon-components/arrow-right";
import SectionMain from "./components/section-main";




export default function App() {
  return (
    <>
      <Headertopo />
      <SectionMain />
      <CardCategories/>

      <section>
          <div className="container-sellers">
            <div className="top-sellers">
              <div className="title-sellers">
                <h1>Top Sellers</h1>
                <p>Start working with Tailwindcss It allows you to compose complex designs
                by combining and customizing utility classes..</p>
            </div>
              <div >
                <button className="button-view">View All <ArrowRight/> </button>
              </div>
            </div>
          </div>

        <div className="container-null">

        <div className="container-sellers-card">
                <div className="card1">
                    <div className="img-sellers">   
                        <img src="./card1.png" alt="" />
                        <img src="./img-monkey3.png" alt="" />
                        <img src="./img-monkey4.png" alt="" />
                        
                    </div>

                    <div className="users-sellers">
                        <img src="./users-1.png" alt="" />
                        <p>01</p>
                    </div>

                      <div className="info-sellers">
                      <div className="name-info">
                          <h1>Nikom Petroy</h1>
                          <p>Total earnings: $60,000</p>
                      </div>

                      <div>
                          <button className="button-view">View Detail</button>
                      </div>

                      </div>
                </div>       
    
          </div>


          <div className="container-sellers-card">
                <div className="card1">
                    <div className="img-sellers">   
                        <img src="./card-2.png" alt="" />
                        <img src="./card-3.png" alt="" />
                        <img src="./card4.png" alt="" />
                        
                    </div>

                    <div className="users-sellers">
                        <img src="./users-2.png" alt="" />
                        <p>02</p>
                    </div>

                      <div className="info-sellers">
                      <div className="name-info">
                          <h1>Mexi Luna</h1>
                          <p>Total earnings: $55,000</p>
                      </div>

                      <div>
                          <button className="button-view">View Detail</button>
                      </div>

                      </div>
                </div>       
    
          </div>


          <div className="container-sellers-card">
                <div className="card1">
                    <div className="img-sellers">   
                        <img src="./card-sellers1.png" alt="" />
                        <img src="./card-sellers2.png" alt="" />
                        <img src="./card-sellers3.png" alt="" />
                        
                    </div>

                    <div className="users-sellers">
                        <img src="./users-3.png" alt="" />
                        <p>03</p>
                    </div>

                      <div className="info-sellers">
                      <div className="name-info">
                          <h1>Atro Stark</h1>
                          <p>Total earnings: $52,000</p>
                      </div>

                      <div>
                          <button className="button-view">View Detail</button>
                      </div>

                      </div>
                </div>       
    
          </div>


          <div className="container-sellers-card">
                <div className="card1">
                    <div className="img-sellers">   
                        <img src="./card-sellers4.png" alt="" />
                        <img src="./card5.png" alt="" />
                        <img src="./card-sellers5.png" alt="" />
                        
                    </div>

                    <div className="users-sellers">
                        <img src="./users-1.png" alt="" />
                        <p>04</p>
                    </div>

                      <div className="info-sellers">
                      <div className="name-info">
                          <h1>Aliza Spencer</h1>
                          <p>Total earnings: $48,500</p>
                      </div>

                      <div>
                          <button className="button-view">View Detail</button>
                      </div>

                      </div>
                </div>       
    
          </div>

          <div className="container-sellers-card">
                <div className="card1">
                    <div className="img-sellers">   
                        <img src="./card-sellers6.png" alt="" />
                        <img src="./card-sellers7.png" alt="" />
                        <img src="./img-monkey2.png" alt="" />
                        
                    </div>

                    <div className="users-sellers">
                        <img src="./user-9.png" alt="" />
                        <p>05</p>
                    </div>

                      <div className="info-sellers">
                      <div className="name-info">
                          <h1>Tony Stark</h1>
                          <p>Total earnings: $45,200</p>
                      </div>

                      <div>
                          <button className="button-view">View Detail</button>
                      </div>

                      </div>
                </div>       
    
          </div>


          <div className="container-sellers-card">
                <div className="card1">
                    <div className="img-sellers">   
                        <img src="./card-sellers8.png" alt="" />
                        <img src="./card-sellers9.png" alt="" />
                        <img src="./img-monkey1.png" alt="" />
                        
                    </div>

                    <div className="users-sellers">
                        <img src="./users-5.png" alt="" />
                        <p>06</p>
                    </div>

                      <div className="info-sellers">
                      <div className="name-info">
                          <h1>Minato Namizake</h1>
                          <p>Total earnings: $45,100</p>
                      </div>

                      <div>
                          <button className="button-view">View Detail</button>
                      </div>

                      </div>
                </div>       
    
          </div>




          
        </div>
       
      </section>

    </>




  )
}