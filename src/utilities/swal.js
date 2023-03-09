import Swal from 'sweetalert2'

const ToastBase = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const Toast = ({ icon, title }) => {
  ToastBase.fire({
    icon,
    title
  })
}

const Confirmation = ({
  title = 'Perhatian',
  text = 'Apakah anda yakin?',
  icon = 'info',
  callback
}) => {
  Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      callback()
    }
  })
}

export { Toast, Confirmation }
