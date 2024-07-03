const  Logos= () => {
    return (
        <div className="container-fluid center">
            <div className="row">
            <h4 className="text-center">Apoya a tu selección</h4>
                <div className="col justify content-end">
                    <img src="logo-brasil.png" alt="brasil" width={150} className="ronded-circle" />
                </div>
                <div className="col">
                    <img src="logo-francia.jpeg" alt="francia" width={150} className="rounded-circle"/>
                </div>
                <div className="col">
                    <img src="logo-inglaterra.png" alt="inglaterra" width={150} className="rounded-circle" />
                </div>
                <div className="col">
                    <img src="logo-h.png" alt="holanda" width={150} className="rounded-circle" />
                </div>
            </div>
        </div>
    )

}

export default Logos;