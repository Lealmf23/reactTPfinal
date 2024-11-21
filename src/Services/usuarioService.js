import firebase from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'

const { auth, db } = firebase

// Crear un usuario con email y contraseña
export const create = async (userData) => {
    try {
        const responseUser = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
        if (responseUser) {
            console.log(responseUser.user.uid)

            // Agregar datos adicionales en Firestore
            await addDoc(collection(db, 'usuarios'), {
                nombre: userData.nombre,
                apellido: userData.apellido,
                userId: responseUser.user.uid,
            })

            return responseUser.user.uid
        }
    } catch (e) {
        console.error('Error al crear usuario:', e.message)
        throw e
    }
}

// Iniciar sesión con email y contraseña
export const login = async (email, password) => {
    try {
        const responseUser = await signInWithEmailAndPassword(auth, email, password)
        return responseUser.user.uid || null
    } catch (e) {
        console.error('Error al iniciar sesión:', e.message)
        throw e
    }
}
