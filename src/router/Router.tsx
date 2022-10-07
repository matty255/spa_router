import { format } from 'path';
import React, { Children, useState } from 'react'

type props = {
    children: React.ReactNode[];
}

const Router = (props:props) => {
  window.onpopstate = function(event) {
    history.back(); 
}

console.log(props?.children)
return (<div>
  {[...props?.children].map(child => child !== undefined && child)}
</div>)
}
export default Router;
