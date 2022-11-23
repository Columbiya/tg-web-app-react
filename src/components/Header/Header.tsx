import { useEffect } from "react"
import { tg } from "../../utils/tg"
import { Button } from "../Button/Button"


export const Header: React.FC = () => {

    useEffect(() => {
        tg.ready() //является хорошей практикой сообщает о том, что приложение полностью инициализировалось
      }, [])
    
    const onClose = () => {
        tg.close()
    }

    return (
        <header className="header">
            <Button onClick={onClose}>Закрыть</Button>
            <span className="username">{tg.initDataUnsafe?.user?.usernames}</span>
        </header>
    )
}