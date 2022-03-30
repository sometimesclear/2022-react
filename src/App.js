import React,{useState} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [status, setStatus] = useState('1~100 사이의 숫자를 맞춰보세요.');
  const [answer, setAnswer] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(Math.ceil(Math.random()*100));
  const showCat = showCat('정답이다옹');  

  function returnFunc(e){
    e.preventDefault();
    if(+answer === rightAnswer){
      console.log(answer)
      setStatus("정답입니다!")
      showCat(function(){          
        axios.get('https://api.thecatapi.com/v1/images/search')            
            
            ("#cat-img").attr("src",imgUrl);                 
      })
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
      <div class="wrap">
        <form onSubmit={returnFunc}>
          <h1>숫자 맞추기</h1>
          <p>{status}</p>
          <input type="number" max="100" min="1" value={answer} onChange={changeAnswer} />
          <button>입력</button>
        </form>
        <div>
          <img id="cat-img" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        </div>

      </div>

    );

}



export default App;

