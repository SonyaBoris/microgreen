import s from "./Item.module.css"


const Item = ({ name, image,onSelectItem ,id}) => {
  return (
    <div className={s.item}>
      <img className={s.image} src={image} />
      <h4>{name}</h4>
      <p>150 p</p>
      <button className={s.btn} onClick={()=>onSelectItem(id)}>Подробнее</button>
      <button>Добавить в корзину</button>
    </div>
  );
}

export default Item;