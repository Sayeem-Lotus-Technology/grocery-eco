
import React from 'react'
import Layout from './Layout/Layout';
import {Provider} from "react-redux"
import store from './Components/Redux/Store/store';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Layout/>
      </Provider>
      
    </div>
  );
}

export default App;
