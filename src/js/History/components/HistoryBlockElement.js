const React = require("react")
    
function HistoryBlockElement(props){
    return (
        <li className = 'history'>
            {
                props.reply ? `${props.elemOne} является анаграммой ${props.elemTwo}`
                :`${props.elemOne} не является анаграммой ${props.elemTwo}`
            }
        </li>
    )
}

module.exports = {HistoryBlockElement}