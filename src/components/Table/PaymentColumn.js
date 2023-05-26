import React from 'react'

function PaymentColumn(cellValues){
    const color=(cellValues.value=="PENDING")?"#008080":"#FFA500"
    return(
      <div style={{color:color}}>
        {cellValues.value}
      </div>
    )
  }

export default PaymentColumn