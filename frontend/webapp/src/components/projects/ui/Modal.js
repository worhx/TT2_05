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
      <button className='btn' onClick={ onConfirm }>Confirm</button>
      <button className='btn btn--alt' onClick={ onCancel }>Cancel</button>
    </div>
  )
}

export default Modal
