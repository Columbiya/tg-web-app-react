import './Button.css'

interface ButtonProps {
    className?: string
    children?: React.ReactNode
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}