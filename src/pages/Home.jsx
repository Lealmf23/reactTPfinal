import Productos from '../components/Productos'

const Home = () => {
    return (
        <>
            <div className='container p-4'>
                <div className='d-md-flex align-items-center'>
                    <div className='text-center'>
                        <p>
                            <img
                                src='./img/LogoLienzos.webp'
                                alt='Logo Lienzos'
                                width={200}
                                className='p-3'
                            />
                        </p>
                    </div>
                    <div className='p-3'>
                        <h1>Descubre el arte que transformará tus espacios.</h1>
                        <p className='fs-4'>Cuadros únicos y hechos con pasión para llenar tu hogar de inspiración</p>
                        <p>
                            En <strong>Liezos Vivos</strong>, creemos que cada pared cuenta una historia. Nuestra colección de cuadros combina estilos
                            modernos, clásicos y abstractos, diseñados para todos los gustos y espacios. Explora nuestra galería y encuentra el cuadro
                            perfecto para tu hogar, oficina o ese rincón especial.
                        </p>
                    </div>
                </div>
            </div>
            <Productos />
        </>
    )
}

export default Home
