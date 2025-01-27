

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
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Categories</a>
                    </li>
                    <li>
                      <a href="#">Sellers</a>
                    </li>
                    <li>
                      <a href="#">Showcase</a>
                    </li>
                    <li>
                      <a href="#">Faq</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                </ul>
            </div>

            <div className="nav-button">
                  <button>
                  <i class="fa-solid fa-download"></i>
                    Download
                    
                  </button>
            </div>

            <div nav-mobile-icon>
              <img src="./menu.png" alt="" />
            </div>
       </nav>

       
    
    </header>
    )
}