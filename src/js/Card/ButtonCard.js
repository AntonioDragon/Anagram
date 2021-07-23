const React = require("react")
const {useState} = require("react")

const {CardInput} = require("./components/CardInput")
const {CardOutput} = require("./components/CardOutput")

const { anagramCheck } = require("./anagramCheck.js")


function ButtonCard(props) {
    const [valFirst, setStateFirst] = useState({value: ""})
    const [valSecond, setStateSecond] = useState({value: ""})
    const [valKey, setStateKey] = useState({key : 1})
    const [valError, setStateError] = useState('')

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

    const AnagramCreateReply = () => new Object(
        {
            id: valKey.key, 
            inputFirst: valFirst.value, 
            inputSecond: valSecond.value, 
            reply: anagramCheck(valFirst.value, valFirst.value)
        }
    )
        
    const onClickAnagram = (e) => {
        if (valFirst.value != '' && valSecond.value != ''){
            props.setArrHistory(props.arrHistory.concat(AnagramCreateReply()))
            setStateKey({key: valKey.key + 1})
            setStateError("")
        }   
        else{setStateError("Вы не ввели все данные")} 
    }

    return (
        <form className ="cards" autoComplete="off">   
            <CardInput 
                firstHandler={firstHandler}
                secondHandler={secondHandler}
                valFirst={valFirst}  
                valSecond={valSecond}
            />
            <div className="card-button card-button--pos">
                <button 
                    className="card-button__anagram" 
                    type="button" 
                    onClick={e =>onClickAnagram(e)}
                >
                    Проверить
                </button>
            </div>
            <CardOutput 
                output={props.arrHistory[props.arrHistory.length-1]}
                error={valError}
            />
        </form>
    )
}

module.exports = {ButtonCard}