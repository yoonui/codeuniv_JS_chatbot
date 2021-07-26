
var app = document.getElementById("typed");

var typewriter = new Typewriter(app, {
    loop: false,
});

var n = 0;
var light = 1;
var key = 0;

var question = "";
var answer = "";

var json =
[
    {
        "question" : "이름",
        "answer" : "농담곰!"
    },
    {
        "question" : "좋아하는 것",
        "answer" : "매운 음식!"
    },
    {
        "question" : "무서워하는 것",
        "answer" : "말레이곰..."
    }
]

function push_json(){
	json.push({question: `${question}`, answer: `${answer}`}); //json이라는 데이터에 값을 추가하는 push함수
    document.getElementById("imgId").src="./농담곰.gif"
	document.getElementById("bear_says").innerHTML = "대답 접수 완료";
	key = 0; //키 값 0으로 초기화
}

function check_text(){
    var value = document.getElementById("my_text").value;
    var says = document.getElementById("bear_says");

    var btn = document.getElementById("button");


    if(key === 1) {
        if(value === "응"){
			says.innerHTML = "대답을 알려줘";
			key = 2; //key 값을 2로 만들어, 대답을 입력받는 조건으로 변경
		}
		else{
            document.getElementById("imgId").src="./농담곰.gif"
			says.innerHTML = "오키 없었던 일로 하자구";
			key = 0; // key값을 다시 0으로 변경하여 상태 변경
		}
		return;
    }
    if(key === 2){
		answer = value; //전역변수 answer값에 사용자의 입력을 저장
		push_json();
        return;
	}

    for(let i = 0; i<json.length; i++){
        if(value === json[i].question){
            says.innerHTML = json[i].answer;
            return;
        }
    }
    if(value === "불꺼줘" || value === "불 꺼줘"){
        document.body.style.backgroundColor = '#606060';
        document.getElementById("imgId").src="./농담곰6.png"
        says.innerHTML = "예스마이로드";
        light--;
    }
	else if(value == "불켜줘"||value == "불 켜줘"){
        if(light === 0){
            if(n === 0){
                typewriter
                    .deleteAll()
                    .typeString("귀찮은지 뒹굴거린다.")
                    .pauseFor(1300)
                    .deleteAll()
                    .typeString("다시 한 번 말해보자.")
                    .pauseFor(1300)
                    .deleteAll()
                    .start();
                n++;
                console.log(n);
                says.innerHTML = "뒹굴~";
                document.getElementById("imgId").src="./농담곰10.png"
            }
            else if(n === 1) {
                typewriter
                    .deleteAll()
                    .typeString("장난치고 있다.")
                    .pauseFor(1300)
                    .deleteAll()
                    .typeString("다시 한 번 말해보자.")
                    .pauseFor(1300)
                    .deleteAll()
                    .start();
                n++;
                says.innerHTML = "";
                says.style = "background: url('./불.jpg'); background-size : cover";
            }
            else{
                n = 0;
                says.innerHTML = "불켜줬따";
                says.style = "background: url('');";
                document.getElementById("imgId").src="./농담곰.gif"
                document.body.style.backgroundColor = '#ffffff';
                light++;
            }
        }
        else {
            typewriter 
                .deleteAll()
                .typeString("장난치지 말라고 화내고 있다.")
                .pauseFor(1300)
                .deleteAll()
                .start();
            says.innerHTML = "이미 켜져있잖아";
            document.getElementById("imgId").src="./농담곰5.png"
        }
	}
	else{
		if(value === "공부하자" || value === "공부" || value === "공부 하자"){
            document.getElementById("imgId").src="./농담곰4.png"
            says.innerHTML = "...................";
        }
        else if(value === "엉덩이"){
            document.getElementById("imgId").src="./농담곰9.gif"
            says.innerHTML = "빵딩이";
        }
        else if(value === "밥먹자" || value === "밥 먹자"){
            document.getElementById("imgId").src="./농담곰7.gif"
            says.innerHTML = "달려가는중";
        }
        else if(value === "놀자" || value === "놀러가자"){
            document.getElementById("imgId").src="./농담곰8.gif"
            says.innerHTML = "와자뵤";
        }
        else{
            document.getElementById("imgId").src="./농담곰5.png"
            says.innerHTML = "이해할 수 없어, 가르쳐줘 (응 or 아니)";
            question = value; // 사용자의 질문을 미리 저장
            key = 1;
        }
	}
}