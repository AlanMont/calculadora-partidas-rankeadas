function calculate(){
    let win = parseInt(document.getElementById('wins').value);
    let lose = parseInt(document.getElementById('losses').value);
    let playerBalance = win-lose;
    let heroLevel = playerLevel(win);

    console.log("win"+win+"Lose"+lose+"balance"+playerBalance);

    changeTheBars(win,lose,playerBalance);
    changeLevelImage(heroLevel.level);
    fillXP(heroLevel.reach,heroLevel.xp)
    showMessage(heroLevel.level,playerBalance);


}

function playerLevel(winScore){

    let playerTitleLvl;
    let toNextLevel;
    let reach;
    let playerInfo = new Object();

    if (winScore<=10){
        playerTitleLvl ="Ferro";
        reach= 11;
        toNextLevel= reach - winScore;
    
    }
    else if(winScore>10 && winScore<=20){
        playerTitleLvl ="Bronze";
        reach= 21;
        toNextLevel= reach - winScore;

    }else if(winScore>20 && winScore <=50){
        playerTitleLvl ="Prata";
        reach= 51;
        toNextLevel= reach - winScore;

    }else if(winScore>50 && winScore <=80){
        playerTitleLvl ="Ouro";
        reach= 81;
        toNextLevel= reach - winScore;

    }else if(winScore>80 && winScore <=90){
        playerTitleLvl ="Diamante";
        reach= 91;
        toNextLevel= reach - winScore;

    }else if(winScore>90 && winScore <=100){
        playerTitleLvl ="Lendário";
        reach= 101;
        toNextLevel= reach - winScore;

    }else{
        playerTitleLvl ="Imortal";
        reach= 0;
        toNextLevel= 0;
    }
    playerInfo.level = playerTitleLvl;
    playerInfo.xp = toNextLevel;
    playerInfo.reach = reach;

    return playerInfo;

}

function changeTheBars(winQtd,loseQtd,balanceQtd){

    let total = winQtd + loseQtd;
    winQtd= calcPercent(winQtd,total);
    loseQtd= calcPercent(loseQtd,total);
    //balanceQtd= calcPercent(balanceQtd,total);


    document.getElementById('winBar').style.width = winQtd + '%';
    document.getElementById('winBar').style.background = "repeating-linear-gradient(135deg, #24ebe1 0 10px, rgb(27, 112, 146) 0 20px) 0/100%";
    document.getElementById('loseBar').style.width = loseQtd + '%';
    document.getElementById('loseBar').style.background = "repeating-linear-gradient(135deg, #ee1414 0 10px, #f13737 0 20px) 0/100%";
    document.getElementById('balanceBar').style['background-color'] = '#24ebe1';
    document.getElementById('backBalance').style.background = "#ee1414";
    document.getElementById('balanceBar').style.width = winQtd + '%';
    

}

function calcPercent(value,total){

    let percent = (value / total) * 100;

    // Limita a porcentagem a no máximo 100%
    percent = Math.min(percent, 100);

    return percent;
}

function changeLevelImage(playerLevel){
    let shieldImage = document.getElementById("levelTitle");
    shieldImage.src = `./src/images/${playerLevel}.png`;
}

function fillXP(reach,nxtLevel){
    if(reach!=0 && nxtLevel!=0){
        nxtLevel = subtractPercentage(reach,nxtLevel);
        document.querySelector('.circular-bar-container').style.setProperty('--percentage', nxtLevel);
        console.log("YAAAY"+nxtLevel);
    }
    else{
        document.querySelector('.circular-bar-container').style.setProperty('--percentage', 100);
    }

}

function subtractPercentage(total, subtractedValue) {
    let remaining = total - subtractedValue;
    return (remaining / total) * 100;
    
}

function showMessage(level,balance){
    let message = `O Herói tem um saldo de ${balance} e está no nível ${level}`;
    document.querySelector('#result').innerHTML = message;
}