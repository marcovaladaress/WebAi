import ArrowIcon from "./arrow";


export default function Headertopo(){

    return (
    <header className="header-container">
      <div className="logo-container">
          <a href="#"><img className="img-logo"  src="./logo.png"  alt="" /></a>
      </div>
      <nav className="menu-options">
        <a href="#">Home</a>
        <a href="#">categories</a>
        <a href="#">Sellers</a>
        <a href="#">Showcase</a>
        <a href="#">Faq</a>
           <a href="#">Blog</a>
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