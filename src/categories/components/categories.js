import React from 'react';
import Category from './category';
import './categories.css'
function Categories(props) {
    return (
        <div className="Categories">
            {
                props.categories.map((item) => 
                     <Category key={item.id}
                     {...item} 
                     handleOpenModal={props.handleOpenModal}
                     />
                )
            }
        </div>
    )
}

export default Categories