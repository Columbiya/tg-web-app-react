interface ButtonProps {
    className?: string
    children?: React.ReactNode
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ className, children }) => {
    return (
        <button className={`button ${className}`}>
            {children}
        </button>
    )
}