const React = require("react")
    
function HistoryElement(props){
    return (
        <li className = 'history'>{props.elem}</li>
    )
}

module.exports = {HistoryElement}