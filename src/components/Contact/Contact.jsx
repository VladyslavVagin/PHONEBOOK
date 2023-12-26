import trashIcon from '../../icons/trash.png';
import css from './Contact.module.css';

const Contact = ({contact}) => {
  const {id, name, phone} = contact;
  return (
    <tr className={css.tr}>
    <td className={css.td}>{name}</td>
    <td className={css.td}>{phone}</td>
    <td className={css.td}>
      {' '}
      <button
        type="button"
        className={css.deleteBtn}
        id={id}
      >
        <img src={trashIcon} alt="trash icon" width={16} />
      </button>
    </td>
  </tr>
  )
}

export default Contact