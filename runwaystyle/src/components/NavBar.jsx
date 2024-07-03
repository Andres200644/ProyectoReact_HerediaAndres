import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="conteiner my-4">
            <div className="row">
                <div className="col">
                    <img src="logo-nike.webp" alt="nike" width={80} />
                </div>
                <div className="col">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link text-black" aria-current="page" href="">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Ropa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Calzado</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Accesorios</a>
                        </li>
                    </ul>
                </div>
                <div className="col text-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )

}

export default NavBar;