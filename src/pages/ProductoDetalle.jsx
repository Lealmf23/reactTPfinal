import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import firebase from '../config/firebase'
import { Button } from 'react-bootstrap'
const { db } = firebase

const ProductoDetalle = () => {
    const { id } = useParams() // Obtén el ID del producto desde la URL
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                setLoading(true)
                const docRef = doc(db, 'products', id) // Refiere al documento específico en Firestore
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    setProduct(docSnap.data())
                } else {
                    setError('El producto no existe.')
                }
            } catch (e) {
                setError('Hubo un error al cargar el producto.')
                console.error(e)
            } finally {
                setLoading(false)
            }
        }

        fetchProducto()
    }, [id])

    if (loading) return <div className='container p-4'>Cargando...</div>
    if (error) return <h2>{error}</h2>

    return (
        <div className='container p-4'>
            <img
                src={product.image}
                alt={product.name}
                className='mb-4'
            />
            <h1>{product.name}</h1>
            <p>
                <strong>Precio:</strong> ${product.price}
            </p>
            <p>
                <strong>Descripción:</strong> {product.description}
            </p>
            <p>
                <strong>Tamaño:</strong> {product.size}
            </p>
            <p>
                <strong>Material del marco:</strong> {product.material}
            </p>
            <p>
                <strong>Artista:</strong> {product.artist}
            </p>
            <p>
                <strong>Edición:</strong> {product.edition}
            </p>
            <div className='d-flex'>
                <Button
                    className='btn btn-success btn-sm m-1'
                    as={Link}
                    to={`/`}>
                    Atras
                </Button>
                <Button
                    className='btn btn-success btn-sm m-1'
                    as={Link}
                    to={`/contacto`}>
                    Comprar
                </Button>
                
            </div>
        </div>
    )
}

export default ProductoDetalle
