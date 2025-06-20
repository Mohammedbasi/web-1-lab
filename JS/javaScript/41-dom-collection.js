const myCollection = document.getElementsByTagName('p');
console.log(myCollection);
console.log(myCollection['p1']);
console.log(myCollection.length);

for(let i =0; i < myCollection.length; i++){
    myCollection[i].style.color = "red";
}

const myNodeList = document.querySelectorAll("p");
console.log(myNodeList);
console.log(myNodeList[1]);
console.log(myNodeList.length);

for(let i =0; i < myNodeList.length; i++){
    myNodeList[i].style.color = "blue";
}




