import ArrowRight from "./icon-components/arrow-right";


export default function BrowseSection () {

    return (
        <section>
        <div className="container-browse">
            <div className="categories-browse">
                <div className="title-browse">
                    <h1>Browse by categories</h1>
                    <p>Start working with Tailwindcss It allows you to compose complex designs
                        by combining and customizing utility classes..</p>
                </div>
                <div>
                    <button className="button-showcase">See All <ArrowRight/> </button>
                </div>
            </div>

            <div className="card-browse">

                <div className="img-card">
                    <div className="btn-container">
                        <button className="btn-browse">Art</button>
                    </div>
                    <img src="./showcase.png" alt="" />
                </div>


                <div className="img-card">
                    <div className="btn-container">
                        <button className="btn-browse">Music</button>
                    </div>
                    <img src="./img-monkey3.png" alt="" />
                </div>


                <div className="img-card">
                    <div className="btn-container">
                        <button className="btn-browse">Uitily</button>
                    </div>
                    <img src="./card5.png" alt="" />
                </div>
            </div>
        </div>
    </section>

    )
}