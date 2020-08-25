import React from 'react';
import Child2 from './Child2'
import SuperF from './SuperF'


 function Child1() {
  return (
 <Child2/>
  );
}
export default SuperF(Child1)
