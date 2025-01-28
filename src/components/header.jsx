

import './icon-components/header.css'



export default function Headertopo({acao}){



    return (
    <header className={acao ? 'header-cor' : ''}>
       <nav className="nav-bar">
            <div className="nav-img">
                 <img src="./logo.png" alt="" />
            </div>
            <div className="nav-item-container">
                <ul className="nav-item">
                    <li>
                      <a className="nav-link" href="#">Home</a>
                    </li>
                    <li>
                      <a className="nav-link"  href="#">Categories</a>
                    </li>
                    <li>
                      <a className="nav-link"  href="#">Sellers</a>
                    </li>
                    <li>
                      <a className="nav-link"  href="#">Showcase</a>
                    </li>
                    <li>
                      <a className="nav-link"  href="#">Faq</a>
                    </li>
                    <li>
                      <a className="nav-link"  href="#">Blog</a>
                    </li>
                </ul>
            </div>

            <div className="nav-button">
                  <button>
                  <i class="fa-solid fa-download"></i>
                    Download
                    
                  </button>
            </div>

            <div className="nav-mobile-icon" >
              <button > <img src="./menu.png" alt="" /></button>
            </div>
       </nav> 

       
    
    </header>
    )
}
