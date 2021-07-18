const React = require("react")

function CardPosOutput(props) {
    CardOutputTitle = () =>{
        return(
            <div className="card__title">
                <h3 className="card__text">Вывод</h3>
            </div>
        );
    }

    CardOutput = () =>{
        return(
            <div name ="isOutput" className="card__output">
                <input className="output" readOnly value = {props.value.value}/>
            </div>
        );
    }

    return (
        <div className="card card--two--pos">
            <CardOutputTitle/>
            <CardOutput/>
        </div>
    )
}

module.exports = {CardPosOutput}
