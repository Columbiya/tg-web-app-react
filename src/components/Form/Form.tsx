import { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Form.css'

enum SUBJECTS {
    PHYSICAL = 'physical',
    LEGAL = 'legal'
}

export const Form: React.FC = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState<SUBJECTS>(SUBJECTS.PHYSICAL)
    const { tg } = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Отправить данные"
        })
    }, [])

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide()
        }
        else {
            tg.MainButton.show()
        }
    }, [country, street])

    return (
        <div className="form">
            <h3>Введите ваши данные</h3>

            <input 
                className='input' 
                placeholder='Страна' 
                onChange={e => setCountry(e.target.value)}
                value={country} />
            <input 
                className='input' 
                placeholder='Улица' 
                onChange={e => setStreet(e.target.value)}
                value={street} />

            <select className="select" onChange={e => setSubject(e.target.value as SUBJECTS)} value={subject}>
                <option value="physical">{SUBJECTS.PHYSICAL}</option>
                <option value="legal">{SUBJECTS.LEGAL}</option>
            </select>
        </div>
    )
}