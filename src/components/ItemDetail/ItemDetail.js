
import './ItemDetail.css';

const ItemDetail = ({title, detail}) => {
    return(
        <div className="div__detail ">
            <h2>ItemDetail</h2>
            <h3>{title}</h3>            
            <h4>{detail}</h4>
            
        </div>

    )
}
    
export default ItemDetail;
