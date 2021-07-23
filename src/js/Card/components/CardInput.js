const React = require("react");

function CardInput(props) {
    return (
        <div className="card card--one--pos">
            <div className="card__title">
                <h3 className="card__text">Введите свое слово и предполагаемую анаграмму</h3>
            </div>
            <div className="card__input">
                <input 
                    name = "isInputOne" 
                    onChange = {e => props.firstHandler(e)} 
                    value = {props.valFirst.value} 
                    className="input input-first" 
                    type="text" 
                    placeholder="Первое слово"
                />
            </div>
            <div className="card__input">
                <input 
                    name = "isInputTwo" 
                    onChange = {e => props.secondHandler(e)} 
                    value = {props.valSecond.value} 
                    className="input input-second" 
                    type="text" 
                    placeholder="Второе слово"
                />
            </div>
        </div>
    )
}

module.exports = {CardInput}
