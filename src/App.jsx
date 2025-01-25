
import { useState } from "react";
import CardCategories from "./components/card-categories";
import CardSellers from "./components/card-sellers";
import WalletCard from "./components/card-wallet";
import Headertopo from "./components/header";
import BrowseSection from "./components/section-browse";

import SectionMain from "./components/section-main";
import ShowCase from "./components/show-case";
import Accordion2 from "./components/accordion";
import AccordionIcon from "./components/icon-components/accordion-icon";
import DropDown from "./components/icon-components/dropdown";
import ChevronUp from "./components/icon-components/chevron-up";
import ArrowRight from "./components/icon-components/arrow-right";




export default function App() {



    const data = [
        {
            titulo: 'Will Tou Support My languague?',
            content: 'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.'
        },

        {
            titulo: 'Will Tou Support My languague?',
            content: 'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.'
        },

        {
            titulo: 'Will Tou Support My languague?',
            content: 'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.'
        },


    ]

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {

        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <>
            <Headertopo />
            <SectionMain />
            <CardCategories />
            <CardSellers />
            <ShowCase />
            <WalletCard />
            <BrowseSection />

            <section>
                <div className="title-faqs">
                    <h1>Faqs</h1>
                    <p>Start working with Tailwindcss It allows you to compose complex designs
                        by combining and customizing utility classes..
                    </p>
                </div>
                <div className="container-accordion">
                    <div className="accordion">
                        {data.map((item, i) => (
                            <div className="item" key={i}>
                                <div className="titulo" onClick={() => toggle(i)}>
                                    <div className="accordion-title">
                                        <AccordionIcon />
                                        <h2>{item.titulo}</h2>
                                    </div>
                                    <span>{selected === i ? <ChevronUp /> : <DropDown />}</span>
                                </div>
                                <div className={selected === i ? 'content show' : 'content'}>
                                    <p> {item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Accordion2 />
                </div>
            </section>


            <section>
                <div className="container-blog">
                    <div className="container-titleblog">
                        <div className="title-cardblog">
                            <h1>Resources Blog & News</h1>
                            <p>Start working with Tailwindcss It allows you to compose complex designs
                                by combining and customizing utility classes..</p>
                        </div>
                        <div className="button-cardblog">
                            <button className="button-showcase">See All <ArrowRight /> </button>
                        </div>
                    </div>

                    <div className="container-cardsblog">
                        <div className="card-blog">
                            <div className="img-cardblog">
                                <img src="./card-blog1.png" alt="" />
                            </div>

                            <div className="description-cardblog">
                                <p> 27 Aug 2021</p>
                                <h1>The Beginner's to creating & selling digital NFTs</h1>
                                <p>suscipit eget imperdiet nec imperdiet iaculis ipsum. Sed aliquam ultrices mauris.</p>
                                <div className="read-more">
                                    <p>Read More</p>
                                    <div className="icon-readmore">
                                        <ArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-blog">
                            <div className="img-cardblog">
                                <img src="./card-blog1.png" alt="" />
                            </div>

                            <div className="description-cardblog">
                                <p> 27 Aug 2021</p>
                                <h1>The Beginner's to creating & selling digital NFTs</h1>
                                <p>suscipit eget imperdiet nec imperdiet iaculis ipsum. Sed aliquam ultrices mauris.</p>
                                <div className="read-more">
                                    <p>Read More</p>
                                    <div className="icon-readmore">
                                        <ArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>






    )
}