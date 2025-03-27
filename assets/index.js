function calculateDays(){
    const input=document.getElementById(`birthday-input`);
    const result=document.getElementById(`result`);
    const errorMessage=document.getElementById(`error-message`);

    if (!input.value) {               
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Введите дату рождения';
        errorMessage.style.color='red';
        result.textContent=``;
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    const today = new Date();
    const birthday=new Date(input.value);
   birthday.setFullYear(today.getFullYear());
   if (birthday<today){
    birthday.setFullYear(today.getFullYear()+1);
   }

const difference=birthday-today;
const days=Math.ceil(difference/(1000*60*60*24));
result.textContent=`${days} ${declension(days)}`;
}

function declension(number){
    if(number % 10===1&&number % 100==11){
        return `день`;
        }else if(
            [2,3,4].includes(number %10)&&
            ![12,13,14].includes(number % 100)
        ){
            return `дня`;
        }return `дней`;
}