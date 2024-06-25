import "../css/letter.css";

const Letter = () => {

    const handleButtonClick = () => {
        window.location.href = '#/ending';
    };

    return (
        <div className="letter-body">
            <div className="letter-paper">
                <div className="letter-content">To. 김상규💙</div><hr/>
                <div className="letter-content">안녕 오빠? 여기까지 잘 도착 했나보네ㅎㅎ 제발 생일 당일에 이 편지를 읽고 있으면 좋겠다! 생일 축하해 자기😘</div><hr/>
                <div className="letter-content">오빠 생일 웹 페이지를 만든 게 내가 쉬는 동안 한 첫 번째 유의미한 일이야. 영광으로 알도록!ㅎㅎ</div><hr/>
                <div className="letter-content">오빠가 내 생일 선무로 준 핑크 세트로 다 만든거야. 핑쿠 장패드 위에 제뤼축 키보드, 마우스, 핸드폰 충전도 하면서ㅎㅎ</div><hr/>
                <div className="letter-content">2024년 6월 29일은 우리가 만난 이후로 두 번째 맞이하는 오빠의 생일이자 500일이 갓 지난 날이야.</div><hr/>
                <div className="letter-content">속상하게도 우리 둘 다 생일에 온전히 같이 있어 본 적이 없네. 시험 기간, 학회, 바쁜 일... 내년에는 꼭 여유롭게 같이 있으면 좋겠다.</div><hr/>
                <div className="letter-content">우리 오빠랑 하루 하루 함께 보낸 시간들이 벌써 그리워. 지난 501일이 다 그리운 거 보면 오빠랑 같이 지낸 시간들 다 진심으로 살아왔나봐.</div><hr/>
                <div className="letter-content">내가 쉬겠다고 결정한 날, 갑작스러운 통보이기도 했고 한 번도 상의한 적 없던 일이기에 당황스러울 것도 알고 있었어. 미안하기도 했었고.</div><hr/>
                <div className="letter-content">그럼에도 늘 그랬던 것 처럼 나 믿어주고, 도와주고, 내 결정을 응원해줘서 고마워. 또 한번 설레고 반했지 뭐야😍</div><hr/>
                <div className="letter-content">오빠가 나에게 처음 이상형을 물어봤을 때, 나는 배울 점이 많은 사람이요! 라고 대답했었지ㅎㅎ 지금도 그렇구.</div><hr/>
                <div className="letter-content">열심히 무언가를 하고 있는 오빠를 보면 집중력도 좋고, 뚜렷한 목표와 계획도 있고, 리더십도 좋고, 말도 잘하고 내 워너비 같아.</div><hr/>
                <div className="letter-content">오빠 기준에서 바라보는 오빠는 부족한 것도 있고 마음에 들지 않는 부분들도 있겠지만, 적어도 타인의 시선으로 바라보는 오빠는 멋진 사람이야.</div><hr/>
                <div className="letter-content">내가 부족한 부분들을 오빠가 다 가지고 있어서 더 더 자연스럽게 끌렸나 봐. 오빠를 보고 있으면 부럽기도 하고 본 받고 싶고 그래.</div><hr/>
                <div className="letter-content">오빠도 오빠가 이렇게나 멋지고 개쩔고 지리는 킹갓울트라슈퍼파워 사람이라는 걸 알면 좋겠어 ㅎㅅㅎ (그게 바로 내 남자친구야ㅎ 부럽지?)</div><hr/>
                <div className="letter-content">나도 쉬면서 오빠만큼 겁나 멋져부러 인간이 되어 볼게. 같이 걸어가 줄 거지? 늘 고맙고 사랑해❤ 생일축하해❣ 행복한 하루 보내자🥰</div><hr/>
                <div className="letter-from">2024.06.29</div><hr/>
                <div className="letter-from">From. 정소영🤍</div><hr/>
            </div>
            <button className="letter-next" onClick={handleButtonClick}/>
        </div>
    );
};


export default Letter;
