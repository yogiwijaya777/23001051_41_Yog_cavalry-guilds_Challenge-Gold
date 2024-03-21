import './Footer.css'
import twitch from '../assets/twitch.png'
import fb from '../assets/fb.png'
import yt from '../assets/yt.png'
import twitter from '../assets/twitter.png'
const  Footer = () => {
    return (
        <div className="footer">
            <ul className="social-icon">
                <li>
                    <a href="#">
                        <img src={twitch} alt=''/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={fb} alt=''/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={yt} alt=''/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={twitter} alt=''/>
                    </a>
                </li>
            </ul>

            <hr></hr>
            <p>@2024 Calvary Guilds</p>
            <ul className="menu">
                <li>
                    <a href="#">Contact</a>
                    <a href="/">Home</a>
                    <a href="/topdeck">Top Decks</a>
                    <a href="/about">About</a>
                </li>
            </ul>
        </div>

        
    )
}

export default Footer;