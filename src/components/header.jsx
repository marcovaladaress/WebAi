import ArrowIcon from "./arrow";


export default function Headertopo(){

    return (
    <header className="header-container">
      <div className="logo-container">
        <img src="./logo-img.svg" alt="" />
      </div>
      <nav className="menu-options">
        <a href="#">What we Offer</a>
        <a href="#">How it Works</a>
        <a href="#">Portfolio</a>
      </nav>
       <span className="btn">
       <button  className="button-contact" >
           contact us
        <ArrowIcon/>
      </button>
       </span>
    
    </header>
    )
}