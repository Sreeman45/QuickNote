import {toast} from 'react-toastify';
let activeToasts=[];
export function handleSuccess(message){
    if (activeToasts.length >= 1) {
        toast.dismiss(activeToasts.shift());
      }
   const toastid=toast.success(message,{
    position:'top-right',
    autoClose:2000,
    hideProgressBar:false,
    closeButton:true
   })
   activeToasts.push(toastid);
}
export function handleError(message){
    if (activeToasts.length >= 1) {
        toast.dismiss(activeToasts.shift());
      }
    const toastid=toast.error(message,{
        position:'top-right',
        autoClose:2000,
        hideProgressBar:false,
        closeButton:true
    })
    activeToasts.push(toastid);
}