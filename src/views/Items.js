import { useState, useEffect } from 'react';
import axios from 'axios'
import Table from './Table';

const Items = () => {
      // Uninitialized state will cause Child to error out
      const [items, setItems] = useState();
    
      // Data does't start loading
      // until *after* Parent is mounted
      useEffect(() => {
        console.log('start')
        axios({
            method: 'GET',
            url: 'http://backoffice.test/api/items',
          }).then(function (response) {
            setItems(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);

    return (
        <div>
            Items
            <div>
                {items && <Table items={items}/>}
            </div>
        </div>
    )
}

export default Items;