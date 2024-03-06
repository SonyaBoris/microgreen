const Modal = ({ active, setActive }) => {
  return (
    <div onClick={() => { setActive(false) }} className={active ? "modal visible" : "modal"}>
      <div className="modalContent">
        <div>
          Заказ отправлен!
        </div>
      </div>
    </div>
  );
}

export default Modal;