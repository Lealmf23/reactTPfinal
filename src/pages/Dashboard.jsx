import { useState } from 'react'
import firebase from '../config/firebase.js'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
const { db } = firebase

const Dashboard = () => {
    const initialFormData = {
        name: '',
        price: 0,
        description: '',
        size: '',
        image: '',
        material: '',
        artist: '',
        edition: '',
    }

    const [formData, setFormData] = useState(initialFormData)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [editMode, setEditMode] = useState(false)
    const [editProductId, setEditProductId] = useState(null)

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

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if (editMode) {
                const productRef = doc(db, 'products', editProductId)
                await updateDoc(productRef, formData)
                alert('Producto actualizado correctamente...')
                setEditMode(false)
                setEditProductId(null)
                setFormData(initialFormData)
                fetchProducts()
            } else {
                await addDoc(collection(db, 'products'), formData)
                alert('Producto agregado exitosamente...')
                setFormData(initialFormData)
                fetchProducts()
            }
        } catch (error) {
            console.error('Error al guardar el producto:', error)
        }
    }

    const handleEdit = (product) => {
        setFormData({
            name: product.name,
            price: product.price,
            description: product.description,
            size: product.size,
            image: product.image,
            material: product.material,
            artist: product.artist,
            edition: product.edition,
        })
        setEditMode(true)
        setEditProductId(product.id)
    }

    const handleDelete = async (productId) => {
        try {
            await deleteDoc(doc(db, 'products', productId))
            alert('Producto borrado con éxito...')
            fetchProducts()
        } catch (error) {
            console.error('Error al guardar el producto:', error)
        }
    }

    if (loading) {
        return <div className='container p-3'>Cargando...</div>
    } else {
        return (
            <div className='container p-3'>
                <form
                    onSubmit={handleSubmit}
                    className='row'>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>Nombre</label>
                        <input
                            className='form-control'
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>Precio</label>
                        <input
                            className='form-control'
                            type='number'
                            name='price'
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>Medidas</label>

                        <input
                            className='form-control'
                            type='text'
                            name='size'
                            value={formData.size}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>Imagen (URL)</label>

                        <input
                            className='form-control'
                            type='text'
                            name='image'
                            value={formData.image}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>Material del marco</label>

                        <input
                            className='form-control'
                            type='text'
                            name='material'
                            value={formData.material}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>Artista</label>

                        <input
                            className='form-control'
                            type='text'
                            name='artist'
                            value={formData.artist}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>Edición</label>

                        <input
                            className='form-control'
                            type='text'
                            name='edition'
                            value={formData.edition}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>Descripción</label>

                        <textarea
                            className='form-control'
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                            required></textarea>
                    </div>
                    <div className='mb-5'>
                        <button
                            className='btn btn-success'
                            type='submit'>
                            {editMode ? 'Guardar Cambios' : 'Agregar Producto'}
                        </button>
                    </div>
                </form>
                <div className="table-responsive">
                  <table className='table table-striped table-hover table-sm align-middle'>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Medidas</th>
                            <th>Material Marco</th>
                            <th>Artista</th>
                            <th>Edición</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                </td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.size}</td>
                                <td>{product.material}</td>
                                <td>{product.artist}</td>
                                <td>{product.edition}</td>
                                <td>{product.description}</td>

                                <td>
                                    <button
                                        type='button'
                                        className='btn btn-success btn-sm m-1'
                                        onClick={() => handleEdit(product)}>
                                        Modificar
                                    </button>
                                    <button
                                        type='button'
                                        className='btn btn-danger btn-sm m-1'
                                        onClick={() => handleDelete(product.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>  
                </div>
                
            </div>
        )
    }
}
export default Dashboard
