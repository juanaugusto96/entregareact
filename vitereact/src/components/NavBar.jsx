import CardWidget from "./CardWidget";

const NavBar = () => {
    return (
        <nav  class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme= "dark" >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">3DWINE🍷🍇</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div  class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#"></a>
                        <a class="nav-link" href="#">MUSICA</a>
                        <a class="nav-link" href="#">NOOTBOOOKS</a>
                        <a class="nav-link disabled">CELULARES</a>
                    </div>
                </div>
            </div>
            <CardWidget />
        </nav>
    )
}
export default NavBar;