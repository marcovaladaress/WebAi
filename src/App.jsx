
import ArrowRight from "./components/arrow-right";
import CardCategories from "./components/card-categories";
import CardSellers from "./components/card-sellers";
import Headertopo from "./components/header";

import SectionMain from "./components/section-main";




export default function App() {
    return (
        <>
            <Headertopo />
            <SectionMain />
            <CardCategories />
            <CardSellers />


            <section>
                <div className="container-showcase">
                    <div className="container-title">
                        <div className="title-showcase">
                            <h1>Browse by categories</h1>
                            <p>Start working with Tailwindcss It allows you to compose complex designs
                                by combining and customizing utility classes..</p>
                        </div>
                        <div>
                            <button className="button-showcase">See More <ArrowRight/> </button>
                        </div>
                    </div>

                    <div className="container-img-showcase">
                        <div className="img-showcasee">
                            <img src="./card-sellers1.png" alt="" />
                        </div>
                        <div className="img-showcasee">
                            <img  src="./card1.png" alt="" />
                        </div>
                        <div className="img-showcasee">
                            <img src="./img-monkey3.png" alt="" />
                        </div>
                        <div className="img-showcasee">
                            <img src="./card4.png" alt="" />
                        </div>
                        <div className="img-showcasee">
                            <img src="./card5.png" alt="" />
                        </div>
                        <div className="img-showcasee">
                            <img src="./img-monkey1.png" alt="" />
                        </div>
                        <div className="img-showcasee">
                            <img src="./card-sellers3.png" alt="" />
                        </div>
                        <div className="img-showcasee">
                            <img src="./card-sellers8.png" alt="" />
                        </div>
                        

                    </div>
                </div>


            </section>



        </>




    )
}