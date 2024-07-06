const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        tg.close();
    };


    const increment = (value, setValue) => {
        setValue(value + 1);
    };

    const decrement = (value, setValue) => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
        increment,
        decrement
    };
}