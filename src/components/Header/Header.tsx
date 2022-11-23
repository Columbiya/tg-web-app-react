import { useEffect } from "react"
import { Button } from "../Button/Button"
import { useTelegram } from "../../hooks/useTelegram"


export const Header: React.FC = () => {
    const { onClose, tg, user } = useTelegram()
    
    return (
        <header className="header">
            <Button onClick={onClose}>Закрыть</Button>
            <span className="username">{user?.usernames}</span>
        </header>
    )
}