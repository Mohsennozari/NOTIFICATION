let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check" style="color: #079c6f;"></i>successully submited';
let errorMsg = '<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>please fix the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation" style="color: #ff9500;"></i>invalid input , check agine';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if(msg.includes('error')){
         toast.classList.add('error');
    }
    if(msg.includes('invalid')){
         toast.classList.add('invalid');
    }
    setTimeout(() => {
        toast.remove();
    }, 6000);
}
