import './css/Header.css'
import img from './images/rockporch-logo.svg'

const Header = () => {
    const path = window.location.pathname
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={img} alt="rockporch logo" />
                <a className="navbar-brand"  href="/">Teams API</a>
                <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-content-end navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className={`nav-link ${path === "/" ? 'active' : ''}`} aria-current="page" href="/">Home</a>
                        <a className={`nav-link ${path === "/team-by-name" ? 'active' : ''}`} href="/team-by-name">TeamByName</a>
                        <a className={`nav-link ${path === "/add-team" ? 'active' : ''}`} href="add-team">AddTeam</a>
                        <a className={`nav-link ${path === "/delete-team" ? 'active' : ''}`} href="delete-team" tabIndex="-1" aria-disabled="true">DeleteTeam</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header