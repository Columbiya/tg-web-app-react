import { useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import { IProduct } from '../../models/Product'
import { products } from '../../products/products'
import { ProductItem } from '../ProductItem/ProductItem'
import './ProductList.css'

const getTotalPrice = (items: IProduct[]) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

export const ProductList: React.FC = () => {
    const [addedItems, setAddedItems] = useState<IProduct[]>([])
    const { tg } = useTelegram()

    const onAdd = (product: IProduct) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id)
        let newItems = []

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id)
        } 
        else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide()
        }
        else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className="list">
            {products.map(item => (
                <ProductItem 
                    product={item}
                    onAdd={onAdd}
                    className="item"
                />
            ))}
        </div>
    )
}