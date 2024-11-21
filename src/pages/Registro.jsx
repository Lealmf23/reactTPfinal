import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { create } from '../Services/usuarioService'
import ButtonWithLoading from '../components/ButtonWithLoading'
import AlertNavigation from '../components/AlertNavigation'
import { useState } from 'react'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'

const Registro = () => {
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({
        variant: '',
        text: '',
        duration: 0,
        link: '',
    })

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' })

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const user = await create(data)
            console.log('Usuario creado:', user)

            setLoading(false)
            setAlert({
                variant: 'success',
                text: 'Usuario creado exitosamente',
                duration: 1500,
            })

            setTimeout(() => {
                navigate('/login')
            }, 1500)
        } catch (e) {
            console.error('Error al crear usuario:', e.message)

            setLoading(false)
            setAlert({
                variant: 'danger',
                text: e.code === 'auth/email-already-in-use' ? 'El email ya se encuentra registrado' : 'Ha ocurrido un error',
            })
        }
    }

    return (
        <div className='container'>
            <div className='form-box'>
                <h1>Crea tu cuenta</h1>
                <div className="col-md-4">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label='Nombre'
                        placeholder='Ingrese su nombre'
                        register={register('nombre', { required: 'El nombre es obligatorio' })}
                        name='nombre'
                        errors={errors}
                    />

                    <Input
                        label='Apellido'
                        placeholder='Ingrese su apellido'
                        register={register('apellido')}
                        name='apellido'
                        errors={errors}
                    />

                    <Input
                        label='Email'
                        type='email'
                        placeholder='Ingrese su email'
                        register={register('email', {
                            required: 'El email es obligatorio',
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                                message: 'Debe introducir un email válido',
                            },
                        })}
                        name='email'
                        errors={errors}
                    />

                    <Input
                        label='Password'
                        type='password'
                        placeholder='Ingrese su password'
                        register={register('password', {
                            required: 'El password es obligatorio',
                            minLength: {
                                value: 6,
                                message: 'Debe introducir al menos 6 caracteres',
                            },
                            maxLength: {
                                value: 12,
                                message: 'No debe superar los 12 caracteres',
                            },
                        })}
                        name='password'
                        errors={errors}
                    />

                    <ButtonWithLoading loading={loading}>Registrarse</ButtonWithLoading>
                    <AlertNavigation {...alert} />
                </Form>

                </div>

            </div>
        </div>
    )
}

export default Registro
