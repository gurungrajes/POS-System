import MenuCard from './MenuCard.jsx'
import './Menu.css'


export default function Menu({menu,onAdd}){

    return(
        <div className="menu-list">
            {menu.map(item=>(
                <MenuCard key={item.id} item={item} onAdd={onAdd} />
            ))}
        </div>
    )

}