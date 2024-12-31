import React from "react";


const heading = {
    fontSize: "72px",
    color: "purple"
}

function Inline(){

    return (
        <div>

            <h1 className='error'>Error</h1>

            {/* <h1 className={styles.success}>Success</h1> */}

            <h1 style = {heading}>heading</h1>

        </div>
    );
}

export default Inline