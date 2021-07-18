const React = require("react")

function HeaderBlock(){
    return (
        <header className="header">
            <h1 className="head__title">Анаграмма-тест</h1>
            <div className="head__info info">
                <h2 className="info__text">Проверь свою анаграмму</h2>
            </div>
        </header>
    )
}

module.exports = {HeaderBlock}