import ArrowRight from "./arrow-right";

export default function ShowCase(){

    return (
        <section>
        <div className="container-showcase">
            <div className="container-title">
                <div className="title-showcase">
                    <h1>The Best showcase</h1>
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


    )
}