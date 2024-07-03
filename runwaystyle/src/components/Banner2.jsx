const  Banner2= () => {
    return (
        <div className="container my-4">
            <div className="row">
                <h4 className="text-center">Busca la playera de tu equipo favorito</h4>
                <div className="col">
                    <img src="imagen-barcelona.png" alt="barcelona" width={250} className="img-fluid"/>
                </div>
                <div className="col">
                    <img src="imagen-inglaterra.png" alt="inglaterra" width={250} className="img-fluid" />
                </div>
                <div className="col">
                    <img src="imagen-francia.png" alt="inglaterra" width={250} className="img-fluid" />
                </div>
                <div className="col">
                    <img src="imagen-holanda.png" alt="inglaterra" width={250} className="img-fluid" />
                </div>
            </div>
        </div>
    )

}

export default Banner2;