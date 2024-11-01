import logo from "./images/logo.png";
import Cards from "./Cards";
import Footer from "./Footer";

export default function App(){
        return(
        <div className="body">
                <div className="topLogo">
                        <img src={logo} alt="logo"/>
                        <h1>ZapRecall</h1>
                </div>
                <Cards />
                <Footer/>
        </div>
        );
}