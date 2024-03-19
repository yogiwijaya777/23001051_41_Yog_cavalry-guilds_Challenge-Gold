import { useState } from "react";

const Home = () => {
    const [isLogin, setIsLogin] = useState(false)
    const handleLogin = () => {
        setIsLogin(!isLogin)
    }
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Cavalry Guilds</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                             <a className="nav-link active" aria-current="page" href="/topdeck">Top Decks</a>
                        </li>
                        <li className="nav-item">
                               <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
                <p>{isLogin ? 'Name of User' : ''}</p>
                <a onClick={handleLogin} className="btn btn-primary" href="#" role="button">{isLogin ? 'Logout' : 'Login'}</a>
            </div>
        </nav>
    )
}

export default Home;