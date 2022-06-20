import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Answer.scss'

MathFreaking.propTypes = {
    
};

function getRandomOperator(){
    const OPERATOR_LIST = ['-', '+']
    const randomIndex = Math.floor(Math.random() * OPERATOR_LIST.length);
    return OPERATOR_LIST[randomIndex]
}

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor(){
    const COLOR_LIST = ['deeppink', 'green', 'brown','black','red']
    const randomIndex = Math.floor(Math.random() * 5);
    return COLOR_LIST[randomIndex]
}

function getResult(num1, num2, op){
    return eval(num1+op+num2)
}

function getFakeResult(num1, num2, op){
    const fakeResult = getRandomNum(num1 -10, num2 + 10)
    return (fakeResult === getResult(num1, num2, op)) ? getFakeResult(num1, num2, op) : fakeResult;
}




function MathFreaking(props) {
    const [color, setColor] = useState(() => {return getRandomColor()});
    const [num1, setNum1] = useState(10);
    const [num2, setNum2] = useState(10);
    const [op, setOp] = useState('+');
    const [res, setRes] = useState(20);
    const [currentResult, setCurrentResult] = useState(true);
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    function generate(){
        const newNum1 = getRandomNum(1*Math.pow(10,level -1),10*Math.pow(10, level-1))
        setNum1(newNum1)      
        const newNum2 = getRandomNum(1*Math.pow(10,level -1),10*Math.pow(10, level-1))
        setNum2(newNum2)
        const newOp = getRandomOperator()
        setOp(newOp)
        const newColor = getRandomColor();
        setColor(newColor)
        const result = getResult(newNum1, newNum2, newOp);
        const fakeResult = getFakeResult(newNum1, newNum2, newOp)
        let randomResult = Math.random() > 0.5
        if (randomResult) {
            console.log('currentResult: ', currentResult)
            setCurrentResult(true)
            setRes(result);
        } else {
            console.log('currentResult: ', currentResult)
            setCurrentResult(false)
            setRes(fakeResult);

        }
    }

    function handleClick(result) {
        if (result === currentResult) {
            generate();
            setScore(score+1);
            if(score % 10 == 0 && score > 0){
                setLevel(level+1);
            }
        } else {
            let highestScore = localStorage.getItem('highest_score') || 0;
            if (score > highestScore) {
                highestScore = score;
                localStorage.setItem('highest_score', highestScore);
            }
            generate();
            setScore(0);
            alert(`Điểm của bạn là ${score} \n Điểm cao nhất: ${highestScore}`);
            setLevel(1);
            setScore(0);

        }
    }
    return (
        <div className='container' style={{backgroundColor: color}}>
            <div className="achiev">
                <h1 className="level">Level: {level}</h1>
                <h1 className="points">Points: {score}</h1>
            </div>
            <div className="calculation">
                <h1>{num1} {op} {num2} = {res}</h1>
            </div>
            <div id ="clickArea">
                <button id='trueValue'
                onClick={() => handleClick(true)}>
                    <i class="fa fa-check"></i>
                </button>
                <button id='falseValue'
                onClick={() => handleClick(false)}
                >
                    <i class="fa fa-close"></i>
                </button>
            </div>
            
        </div>
    );
}

export default MathFreaking;