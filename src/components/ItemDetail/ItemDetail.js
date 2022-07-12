
import './ItemDetail.css';

const ItemDetail = ({name, detail, image, alt}) => {
    
    return(
        <div className="div__detail ">
            <h2>{name}</h2>
            <h4>{detail}</h4> 
            {/* <img className='img__detail' alt={alt} src={image}/> */}
        </div>

    )
}
    
export default ItemDetail;
