import $ from 'jquery';

export default class Onclick {
    constructor() {
        this.banwanTalks = document.querySelectorAll('.banwan-section__talkbox > p');
        this.wishIcon = document.querySelector('.wish-icon-wrapper');
        this.ponziWishBG = document.querySelector('.wish-bg');
        this.shootingStarIcon = document.querySelectorAll('.wish-shooting-star > div');
        this.clickNum = 0;

    }

    banwanTalkClickEvent() {
        this.banwanTalks.forEach((node, index) => {
            node.addEventListener('click', (currentNodeClick) => {
                changeText(currentNodeClick.target);
            });
        })
    }

    candleSwitchEvent() {
        let that = this;
        this.wishIcon.addEventListener('click', (currentNodeClick) => {
                console.log(currentNodeClick.target);
                changeBG(currentNodeClick.target, that);
        })
    }
}



var textArray = [
    `<p id="0" class="d">胖子奴才，生日快樂！</p>`,
    `<p id="1" class="d">雖然我平常都一直打妳</p>`,
    `<p id="2" class="e">身為皇上，妳應該能體諒</p>`,
    `<p id="3" class="c">我是絕對的存在</p>`,
    `<p id="4" class="e">打妳的手是一種榮耀呀！</p>`,
    `<p id="5" class="b">本貓決定！</p>`,
    `<p id="6" class="d">留妳永遠當我的貓奴</p>`,
    `<p id="7" class="c">當我永遠的沙包</p>`,
    `<p id="8" class="c">喵喵．．．．</p>`,
    `<p id="9" class="d">一定要身體健康哦！</p>`
]

var textArrayInner = [
    `胖子奴才，生日快樂！`,
    `雖然我平常都一直打妳`,
    `身為皇上，妳應該能體諒`,
    `我是絕對的存在`,
    `打妳的手是一種榮耀呀！`,
    `本貓決定！`,
    `留妳永遠當我的貓奴`,
    `當我永遠的沙包`,
    `喵喵．．．．`,
    `一定要身體健康哦！`
]

var changeText = (currentNode) => {
    const number = currentNode.getAttribute('id');
    console.log(number);
    currentNode.textContent = textArrayInner[number];
}

var changeBG = (currentNode, that) => {
    // const position = currentNode.getAttribute('class').split('-')[2];
    // console.log(position);
    // console.log(that.ponziWishBG.style.background);
    // if(position == 'right'){
    //     that.ponziWishBG.classList.add('wish-bg-2');
    // }else if(position == 'mid'){
    //     that.ponziWishBG.classList.add('wish-bg-0');
    // }else if(position == 'left'){
    //     that.ponziWishBG.classList.add('wish-bg-1');
    // }
    that.clickNum += 1;
    if(that.clickNum === 1){
        that.ponziWishBG.classList.add('wish-bg-2');
    }else if(that.clickNum === 2){
        that.ponziWishBG.classList.add('wish-bg-1');
    }else if(that.clickNum === 3){
        that.ponziWishBG.classList.add('wish-bg-0');
        Array.from(that.shootingStarIcon).forEach((node,index) => {
            node.classList.add('icon-is-animating');
        })

    }
}