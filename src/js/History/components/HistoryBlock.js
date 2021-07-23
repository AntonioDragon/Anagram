const React = require("react");

const {HistoryBlockElement} = require("./HistoryBlockElement.js");
    
function HistoryBlock(props){
        return (
            <div className = {props.toggle.value ? "block-history__active" : "block-history__deactive"}>
                <div className="block-history">
                    <ul className="collection">
                        { 
                            (props.arrHistory.length) ? 
                                props.arrHistory.map( 
                                    elem =>{ 
                                        if(elem.id >0)
                                        return <HistoryBlockElement  
                                        key={elem.id} 
                                        elemOne={elem.inputFirst}
                                        elemTwo={elem.inputSecond}
                                        reply={elem.reply}                              
                                        />
                                    }
                                )   
                            : <p className='history'>История пуста</p>
                        }
                    </ul>
                </div>
            </div>
        )
}

module.exports = {HistoryBlock}