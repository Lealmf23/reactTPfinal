/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form'

function Input({ label, type = 'text', register, name, placeholder, errors, children }) {
    return (
        <Form.Group
            className='mb-3'
            controlId={`form${name}`}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                {...register}
            />
            {errors && errors[name] && errors[name]?.type === 'required' && <Form.Text className='text-danger'>El campo es obligatorio</Form.Text>}
            {children && children}
        </Form.Group>
    )
}

export default Input
