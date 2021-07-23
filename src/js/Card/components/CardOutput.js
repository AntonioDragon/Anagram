const React = require("react")

function CardOutput(props) {
    const CardOutputTitle = () =>{
        return(
            <div className="card__title">
                <h3 className="card__text">Вывод</h3>
            </div>
        );
    }
    const CardPosOutput = () =>{
        return(
            <div className="card__output">
                <input 
                    className="output" 
                    readOnly 
                    value={ 
                        !props.error ?
                            props.output.id != undefined ?
                                props.output.reply ?
                                    `${props.output.inputFirst} является анаграммой ${props.output.inputSecond}`
                                    : `${props.output.inputFirst} не является анаграммой ${props.output.inputSecond}`
                                : ''
                        : props.error
                    }
                />
            </div>
        );
    }

    return (
        <div className="card card--two--pos">
            <CardOutputTitle/>
            <CardPosOutput/>
        </div>
    )
}

module.exports = {CardOutput}
