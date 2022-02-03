import React from 'react';
import s from './../HW5.module.css';

function Error404() {

    return (
        <div className={s.errorPage}>
            <div className={s.errorMessage}>
                <div className={s.errorNumber}>404</div>
                <div className={s.errorText}>Page not found!</div>
                <div className={s.error}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            </div>
        </div>
    )
}

export default Error404
