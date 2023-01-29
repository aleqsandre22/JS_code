function doConvert (){
    let numberInput = document.querySelector('#numberInput').value ;
    let myDiv = document.querySelector('#result');

    let oneToTwenty = ['','ერთი ','ორი ','სამი ','ოთხი ', 'ხუთი ','ექვსი ','შვიდი ','რვა ','ცხრა ','ათი ',
    'თერთმეტი ','თორმეტი ','ცამეტი ','თოთხმეტი ','თხუთმეტი ','თექვსმეტი ','ჩვიდმეტიn ','ცხრამეტი ','ოცი '];
    let tenth = ['', '', 'ოცი','ოცდაათი','ორმოცი','ორმოცდაათი', 'სამოცი','სამოცდაათი','ოთხმოცი','ოთხმოცდაათი'];

    if(numberInput.toString().length > 7) return myDiv.innerHTML = 'ლიმიტირებული' ;
    console.log(numberInput);
    //let num = ('0000000000'+ numberInput).slice(-10).match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  let num = ('0000000'+ numberInput).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(num);
    if(!num) return;

    let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}` )+' მილიონი' : ''; 
  
    outputText +=num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}` )+'ასი ' : ''; 
    outputText +=num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`)+' ათასი ' : ''; 
    outputText +=num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) +'ასი ': ''; 
    outputText +=num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `) : ''; 

    myDiv.innerHTML = outputText;
}