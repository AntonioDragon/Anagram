const React = require("react");
const {HistoryElement} = require("./HistoryElement.js");
    
function HistoryBlock(props){
    let blockClasses = [];

    if (props.toggle.value) blockClasses.push("block-history__active")
        return (
            <div className = {blockClasses.join(" ")}>
                <div className="block-history">
                    <ul className="collection">
                        { 
                            (props.arrHistory.length) ? 
                                props.arrHistory.map( 
                                    elem=><HistoryElement  key = {elem.id} elem ={elem.value} />
                                )
                            : <p className = 'history'>История пуста</p>
                        }
                    </ul>
                </div>
            </div>
        )
}

module.exports = {HistoryBlock}