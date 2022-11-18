import React from 'react';
import axios from 'axios'

const Home = () => {
    axios({
        method: 'GET',
        url: 'http://backoffice.test/api/orders',
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    return (
        <div>
            Home
        </div>
    )
}

export default Home;