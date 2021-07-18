const React = require("react")

var svgClasses = ["block-button__history"];

function SvgButton(props){
    const clickButton = (e) =>{
        props.settoggle({value : !props.toggle.value});
        !props.toggle.value == true ? svgClasses.push("history-active") : svgClasses.pop()
    }

    return (
        <div>
            <svg className={svgClasses.join(" ")} onClick = {e =>clickButton(e)} version="1.1" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 100 100">
                <path className="st0" d="M9.1,38.3C15.2,17.4,38.4,2.5,61.7,9.1c22.6,6.5,35.6,30,29.1,52.6c-4.4,15.4-17.5,26-29.2,29.1
                c-9,2.5-19.3,1.1-23.4,0c-1.3-0.3-2.5-0.8-2.5-0.8" />
                <path className="st1" d="M9.4,37.4" />
                <polygon className="st0" points="10.3,43.8 9.1,41.7 11.5,41.7 " />
                <line className="st2" x1="50.1" y1="15.4" x2="49.9" y2="49.9" />
                <line className="st3" x1="82.9" y1="50" x2="49.9" y2="49.9" />
            </svg>
        </div>
    )
}

module.exports = {SvgButton}