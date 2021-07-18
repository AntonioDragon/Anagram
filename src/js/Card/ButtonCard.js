const React = require("react");
const {useState} = require("react");

const {CardPosInput} = require("./components/CardInput");
const {CardPosOutput} = require("./components/CardOutput");

const {AnagramCheckMain} = require("./anagramMain")

var value = '';

function ButtonCard(props) {
    const [valFirst, setStateFirst] = useState({value: ""});
    const [valSecond, setStateSecond] = useState({value: ""});

    const firstHandler = (e) => {
        setStateFirst({
            value: checkValid(e.target.value)
        })
    }

    const secondHandler = (e) => {
        setStateSecond({
            value: checkValid(e.target.value)
        })
    }

    const checkValid = (check) => check.replace(/[^a-zA-Zа-яА-ЯїЇєЄіІёЁ]/, "")

    const onClickAnagram = (e) => {
        if (valFirst.value || valSecond.value){
            value = AnagramCheckMain(valFirst, valSecond)
            props.setArrHistory(props.arrHistory.concat(value))
        }   
        else value = {value : "Вы не ввели все данные"};
    }

    return (
        <form className ="cards" autoComplete="off">   
            <CardPosInput 
                firstHandler = {firstHandler}
                secondHandler = {secondHandler}
                valfirst = {valFirst}  
                valsecond = {valSecond}
            />
            <div className="card-button card-button--pos">
                <button 
                    className="card-button__anagram" 
                    type="button" 
                    onClick = {e =>onClickAnagram(e)}>
                    Проверить
                </button>
            </div>
            <CardPosOutput 
                value = {value}
            />
        </form>
    )
}

module.exports = {ButtonCard}