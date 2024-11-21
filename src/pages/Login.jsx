import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { login } from '../Services/usuarioService'
import ButtonWithLoading from '../components/ButtonWithLoading'
import AlertNavigation from '../components/AlertNavigation'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'


const Login = () => {
    const [loading, setLoading] = useState(false)
    const context = useContext(AuthContext)

    const [alert, setAlert] = useState({
        variant: '',
        text: '',
        duration: 0,
        link: '',
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' })
    const onSubmit = async (data) => {
        try {
            setLoading(true)
            await login(data?.email, data?.password)
            context.handleLogin()
            setLoading(false)
            setAlert({
                variant: 'success',
                text: 'Usuario logueado exitosamente',
                duration: 2000,
                link: '/',
            })
        } catch (e) {
            setLoading(false)
            console.log(e)
            setAlert({
                variant: 'danger',
                text: e.code === 'auth/invalid-credential' ? 'El email o password es invalido' : 'Ha ocurrido un error',
            })
        }
    }

    return (
        <div className='container p-3'>
            <div className='col-md-4'>
                <h1>Ingresar al sistema</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group
                        className='mb-3'
                        controlId='formBasicEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Ingrese su email'
                            {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                            })}
                        />

                        {errors && errors?.email?.type === 'required' && <Form.Text className='text-danger'>El campo es obligatorio</Form.Text>}
                        {errors && errors?.email?.type === 'pattern' && (
                            <Form.Text className='text-danger'>Debe introducir un email valido</Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            {...register('password', {
                                required: true,
                                minLength: 6,
                                maxLength: 12,
                            })}
                        />
                        {errors && errors?.password?.type === 'required' && <Form.Text className='text-danger'>El campo es obligatorio</Form.Text>}
                        {errors && errors?.password?.type === 'minLength' && (
                            <Form.Text className='text-danger'>Debe introducir al menos 6 caracteres</Form.Text>
                        )}
                        {errors && errors?.password?.type === 'maxLength' && (
                            <Form.Text className='text-danger'>No debe superar los 12 caracteres</Form.Text>
                        )}
                    </Form.Group>

                    <ButtonWithLoading loading={loading}>Iniciar Sesión</ButtonWithLoading>
                    <AlertNavigation {...alert} />
                </Form>
            </div>
        </div>
    )
}

export default Login
