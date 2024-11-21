/* eslint-disable react/prop-types */
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

function ButtonWithLoading({ loading, children, type = 'submit', variant = 'primary' }) {
    return (
        <Button
            variant={variant}
            type={type}
            disabled={loading}>
            {loading && (
                <Spinner
                    animation='border'
                    size='sm'
                />
            )}
            {children}
        </Button>
    )
}

export default ButtonWithLoading
