import './Menu.css'




export default function MenuCard({item,onAdd}){
    
        return(
            <div className="menu-card">
                <img src={item.image} alt={item.name} className="menu-img"/>
                <div className="menu-details">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <div className="menu-footer">
                        <span className="price">${item.price.toFixed(2)}</span>
                        <button className="add-btn" onClick={() => onAdd(item)}>+Add</button>
                    </div>
                </div>
            </div>
        )
    
}