import './Category.css'


export default function Category(){
    return(
<div className="category-filter">
<button className="category-btn">All</button>
<button className="category-btn">Appetizers</button>
<button className="category-btn">Mains</button>
<button className="category-btn">Desserts</button>
<button className="category-btn">Drinks</button>
</div>
    )
}