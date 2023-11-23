import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import PlaceSearch from './components/PlaceSearch';
import MapDisplay from './components/MapDisplay';
// import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <PlaceSearch />
        <MapDisplay />
      </div>
    </Provider>
  );
}

export default App;
