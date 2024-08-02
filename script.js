let toastBox = document.getElementById('toastBox');
let successMasage = '<a href="https://www.flaticon.com/free-icons/yes" title="yes icons">Yes icons created by hqrloveq - Flaticon</a>successully submited';
let errorMasage = '<a href="https://www.flaticon.com/free-icons/cross" title="cross icons">Cross icons created by hqrloveq - Flaticon</a>please fix the error';
let invalidMasage = '<a href="https://www.flaticon.com/free-icons/atention" title="atention icons">Atention icons created by riajulislam - Flaticon</a>invalid input , check agine';

function showToast(masage){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = 'masage';
    toastBox.appendChild(toast);
    if(masage.includes('error')){
         toast.classList.add('toast');
    } if(masage.includes('invalide')){
         toast.classList.add('invalide');
    }
    setTimeout(() => {
        toast.remove();
    }, 6000);
}
