
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let testData = []

function getPics(){
    fetch (imgUrl)
    .then(res => res.json())
    .then(data => writeDataTable(data)) 
}

function writeDataTable(pic){
    let listCopy = [pic, ...testData];
    testData = listCopy[0].message;
    goodDog()
}

function putGogPic(dogSnap){
    let gF = document.createElement('li')
    gF.className = 'card';
    gF.innerHTML = `
    <img src=${dogSnap} />
    `
    document.querySelector("#dog-image-container").appendChild(gF);
}



function start(){
    document.addEventListener('DOMContentLoaded', () => {
        getPics();
        //console.log(testData)
        //goodDog();
    }
   )
}

function goodDog(){
    console.log(testData)
    testData.map(function (item){
        return putGogPic(item)
    })
}


//why doesn't the goodDog work when called from start?
start()
