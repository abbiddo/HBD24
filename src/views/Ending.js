import React, { useState, useEffect } from 'react';
import "../css/ending.css";

const Ending = () => {

    return (
        <div className="ending-body">
            <div className="ending-review">
                <h4>- 후기 -</h4>
                <h4>오~ 이 병아리를 눌러 볼 생각을 하다니. 대단한 걸? 일부로 커서 모양도 안 바꿨는데 말이야.</h4>
                <h4>일단 너무 행복했어ㅎㅎ 쉬면서 짧은 목표 하나 잡고 프로젝트 한 느낌이야. 뿌듯도 하고 입이 근질근질 했어.</h4>
                <h4>작년 내 생일에 웹 페이지를 만들어 주겠다 해놓고 미루기만 하길래... 그래서 내가 만들었어!!!</h4>
                <h4>저는 프론트엔드 개발자가 아니기 때문에... 오빠 화면에서 보면 비율이 또 깨질 수 있지만 예쁘게 봐줬겠지~? 히히</h4>
                <h4>첫 페이지 우주 같이 기능적으로도 어려운 것도 있지만 미적 감각이 없어서 시간이 두 배로 걸렸어ㅋㅋㅋㅋㅋ</h4>
                <h4>그래서 개발자의 엔딩 크레딧은 퀴즈판을 재탕했어 ^3^ 이거 구현만큼 구상도 오래 걸렸다구,,,</h4>
                <h4>그리고 만들면서 든 생각은 우리 같이 찍은 사진이 그림자 뿐이더라고 이상한 사진은 엄청 많은데ㅋㅋㅋㅋㅋ</h4>
                <h4>여기까지 잘 즐겨줘서 고맙고 가끔 생각날 때 종종 들려줘💙 사랑해❤ 생일 축하해 오빠😍</h4>
                <a href="#/main" className="ending-link">우주</a>
                <a href="#/quiz" className="ending-link">퀴즈</a>
                <a href="#/photo" className="ending-link">사진</a>
                <a href="#/quiz2" className="ending-link">퀴즈2</a>
                <a href="#/cake" className="ending-link">케잌</a>
                <a href="#/candle" className="ending-link">촛불</a>
                <a href="#/letter" className="ending-link">편지</a>
            </div>
        </div>
    );
};


export default Ending;
