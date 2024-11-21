import { collection, getDocs } from 'firebase/firestore'
import { useState } from 'react'
import firebase from '../config/firebase'
import { Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
const { db } = firebase

const Productos = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProducts = async () => {
        try {
            const productsCollection = collection(db, 'products')
            const productsSnapShot = await getDocs(productsCollection)
            const productsList = productsSnapShot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setProducts(productsList)
            setLoading(false)
            console.log(products)
        } catch (e) {
            console.e('Error fetchind products:', e)
        }
    }

    useState(() => {
        fetchProducts()
    }, [])

    if (loading) {
        return <div className='container p-4'>Cargando...</div>
    } else {
        return (
            <div className='container p-4'>
                <h1 className='mb-4'>Catalogo de cuadros</h1>
                <div className='row'>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className='col-md-3 mb-3'>
                            <div className='card rounded-4  bg-secondary overflow-hidden'>
                                <figure className='mb-0'>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className='w-100'
                                    />
                                </figure>

                                <div className='p-2'>
                                    <p className='fs-4'>
                                        <strong>{product.name}</strong>{' '}
                                    </p>
                                    <p>
                                        {product.description}
                                        <br />
                                        <strong>Precio: </strong>${product.price}
                                    </p>
                                    <p>
                                        <Button
                                            variant='primary'
                                            as={Link}
                                            to={`/${product.id}`}>
                                            Ver detalles
                                        </Button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Productos
