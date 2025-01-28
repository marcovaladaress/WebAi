
import { useEffect, useState } from "react";
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



    const[scrollIn,setScrollIn] = useState(false)


    useEffect(()=> {
            function posicaoScroll(){
               if( window.scrollY > 50) {
                setScrollIn(true)
               } else {
                setScrollIn(false)
               }
            }

            window.addEventListener('scroll', posicaoScroll)

    },[]) 

    


    return (
        <>
            <Headertopo acao={scrollIn} />
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


            <footer className="footer">
                    <div className="container-footer">
                        <div className="content-footer">
                            <div className="follows">
                                <a href="#"><img src="./logo.png" alt="" /></a>
                                <p>Start working with Tailwindcss It allows you to compose complex designs by combining and customizing utility classes.</p>
                                <h5>Follow Us :</h5>
                                <ul className="container-redes">
                                    <li className="redes-sociais">
                                        <a href="#">
                                        <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="redes-sociais">
                                        <a href="#">
                                        <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="redes-sociais">
                                        <a href="#">
                                        <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="redes-sociais">
                                        <a href="#">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="container-information">
                                <div className="information-footer">

                                    <div className="list-information">
                                       <ul>
                                             <h5>Marketplace</h5>
                                             <li>
                                                <a href="#" className="link-footer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="circle-slash"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                                All NFts
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#" className="link-footer" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="circle-slash"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                                New
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#" className="link-footer"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="circle-slash"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                                Arts
                                                    </a>
                                             </li>
                                       </ul>
                                        
                                    </div>

                                    <div className="list-information">
                                       <ul>
                                             <h5>Status</h5>
                                             <li>
                                                <a href="#" className="link-footer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="circle-slash"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                                Rangkings
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#" className="link-footer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="circle-slash"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                                Activity
                                                </a>
                                             </li>
                                             
                                       </ul>
                                        
                                    </div>
                                 
                                    <div className="list-information">
                                       <ul>
                                             <h5>Resources</h5>
                                             <li>
                                                <a href="#" className="link-footer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="circle-slash"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                                Help Center
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#" className="link-footer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="circle-slash"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                                Suggestions
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#" className="link-footer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="circle-slash"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                                Newsletter
                                                    </a>
                                             </li>
                                       </ul>
                                        
                                    </div>
                                 
                                    <div className="list-information">
                                       <ul>
                                             <h5>Company</h5>
                                             <li>
                                                <a href="#" className="link-footer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="circle-slash"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                                About
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#" className="link-footer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="circle-slash"><circle cx="12" cy="12" r="10"></circle><line x1="9" x2="15" y1="15" y2="9"></line></svg>
                                                Carrers
                                                </a>
                                             </li>
                                        
                                       </ul>
                                        
                                    </div>
                                 
                                 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-policy">
                        <div className="content-policy">
                        <div className="webAi">
                            <h5>2025 WebAi - Design & Crafted by Coderthemes</h5>
                        </div>
                        <div className="terms-condition">
                            <h5>Terms Conditions & Policy</h5>
                        </div>
                        </div>
                    </div>
            </footer>

        </>






    )
}