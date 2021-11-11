import './styles.css'

const Modal = ({ onCancel, onConfirm }) => {

  // function cancelHandler() {
  //   onCancel();
  // }

  // function confirmHandler() {
  //   onConfirm();
  // }

  return (
    
    <div className='modal'>
      <p>Are you sure?</p>
      <button onClick={ onConfirm }>Confirm</button>
      <button onClick={ onCancel }>Cancel</button>
    </div>
  )
}

export default Modal
