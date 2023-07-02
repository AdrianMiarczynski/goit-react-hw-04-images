import css from './modal.module.css';

const Modal = ({ largeImageURL, modalClose, tags }) => {
  return (
    <div onClick={modalClose} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
export default Modal;
