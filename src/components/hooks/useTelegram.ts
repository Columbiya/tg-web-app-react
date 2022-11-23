const tg = Telegram.WebApp

export function useTelegram() {
    const onClose = () => {
        tg.close()
    }

    return {
        tg,
        user: tg.initDataUnsafe.user,
        onClose
    }
}