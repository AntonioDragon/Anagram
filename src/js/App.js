require("../scss/style.scss");
ArtBackground = require("../assets/img-icon/artMinimal.png");

const React = require("react");
const {useState} = require("react");
const ReactDOM = require("react-dom")
const {ButtonCard} = require("./Card/ButtonCard.js")
const {HeaderBlock} = require("./Header/Header.js")
const {HistoryButton} = require("./History/HistoryButton.js")

const App = () => {
    const [arrHistory, setArrHistory] = useState([]);

    return (
        <React.Fragment>    
            <HeaderBlock/>
            <ButtonCard
                arrHistory = {arrHistory}
                setArrHistory = {setArrHistory}
            />
            <HistoryButton
                arrHistory = {arrHistory}
                setArrHistory = {setArrHistory}
            />
        </React.Fragment>
    )
}

ReactDOM.render( < App / > , document.querySelector(".root"))