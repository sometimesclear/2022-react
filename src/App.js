import React,{useState} from 'react';
import './App.css';
import catImg from './img/cat.jpg';

function App() {
  const [status, setStatus] = useState('1~100 사이의 숫자를 맞춰보세요.');
  const [answer, setAnswer] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(Math.ceil(Math.random()*100));
  

  function returnFunc(e){
    e.preventDefault();
    if(+answer === rightAnswer){
      console.log(answer)
      setStatus("정답입니다!")      
      setTimeout(function(){
        resetFunc();
      }, 2000)
    }else if(answer < rightAnswer){
      setStatus("낮아요")      
    }else{
      setStatus("높아요")
    }
  }

  //리셋 후 랜덤으로 숫자 생성
  //텍스트 변경
  //현재 input 초기값 설정
  function resetFunc(){
    setRightAnswer(Math.ceil(Math.random()*100))
    setStatus("한 번 더 도전해보세요!")
    setAnswer(0);
  }

  //input 값 가져오는 함수
  function changeAnswer(e){
    setAnswer(e.target.value);
  }

    return (
      <div>
        <div class="wrap">
          <form onSubmit={returnFunc}>
            <h1>숫자 맞추기</h1>
            <p>{status}</p>
            <input type="number" max="100" min="1" value={answer} onChange={changeAnswer} />
            <button>입력</button>
          </form> 
        </div>
        
        {+answer === rightAnswer ? ( //넣은 값이 정답일때 이미지 출력
        <div class="imgWrap">
          <img 
          src={catImg}
          alt="cat"
          />
        </div>) : null} 
      </div>
    );

}

export default App;

