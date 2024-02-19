import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) =>{
    return(
        <div>
            <h1>{greeting}</h1>
        </div> 
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
  };
export default ItemListContainer