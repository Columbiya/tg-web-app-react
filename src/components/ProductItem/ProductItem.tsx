import { IProduct } from "../../models/Product"
import { Button } from "../Button/Button"
import './ProductItem.css'

interface ProductItemProps {
    className?: string
    product: IProduct
    onAdd: (product: IProduct) => void
}

export const ProductItem: React.FC<ProductItemProps> = ({ className, product, onAdd }) => {

    const onAddHandler = () => {
        onAdd(product)
    }

    return (
        <div className={`product ${className}`}>
            <div className="img"></div>

            <div className="title">{product.title}</div>
            <div className="description">{product.description}</div>
            <div className="price">
                <span>Стоимость: <strong>{product.price}</strong></span>
            </div>
            <Button className="add-btn" onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    )
}