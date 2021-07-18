const React = require("react")
const {useState} = require("react")
const {SvgButton} = require("./components/SvgButton.js")
const {HistoryBlock} = require("./components/HistoryBlock.js")

function HistoryButton(props) {
    const [toggle, settoggle] = useState({value: false});

    return (
        <React.Fragment>
            <div className="block-button">
                <div className="block-button__element">
                    <SvgButton 
                        toggle = {toggle}
                        settoggle = {settoggle}
                    />
                    <p className="block-button__text">История</p>
                </div>
            </div>
            <HistoryBlock 
                toggle = {toggle}
                arrHistory = {props.arrHistory}
            />
        </React.Fragment>
    )
}

module.exports = {HistoryButton}