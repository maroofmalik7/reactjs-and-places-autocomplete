import React, { useEffect, useState } from 'react';
import { Input, List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddresses } from '../store/actions/placeActions';


const PlaceSearch = () => {
  const dispatch = useDispatch();
  const addresses = useSelector(state => state.addresses);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const filteredAddresses = addresses && addresses.filter(address => address.includes(searchText)) || [];

  // const handleSearch = (value) => {
  //   setSearchText(value);
  //   dispatch(fetchPlaces(value)); // Call action to fetch places based on searchText
  // };

  return (
    <div className="places">
    <Input.Search
      placeholder="Search places"
      value={searchText}
      onChange={e => setSearchText(e.target.value)}
    />
    <List
        bordered
        dataSource={filteredAddresses}
        renderItem={address => (
          <List.Item>{address}</List.Item>
        )}
        />
    </div>
  );
};

export default PlaceSearch;
