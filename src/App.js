import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Redux
import { useSelector, useDispatch } from 'react-redux'

import combineActions from './actions'

// Fetch Data
import axios from 'axios';

function App() {

  const [data, setData] = useState({ rates: [] })
  const [current, setCurrent] = useState({ buy: 0, currency: "-", sell: 0 })
  const [money, setMoney] = useState(0)

  const dispatch = useDispatch()

  const currency = useSelector(state => state.convert.currency)
  const value = useSelector(state => state.convert.value)


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('http://localhost:5000');
      setData(response.data)
    }
    fetchData();
  }, [])


  return (
    <div className="container">
      <div className="py-5">
        <table className="table">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Buy</th>
              <th>Sell</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.rates.map(item => (
                <tr>
                  <td>{item.currency}</td>
                  <td>{item.buy}</td>
                  <td>{item.sell}</td>
                  <td><button onClick={() => setCurrent(item)}>Choose</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="py-5">
        <h4>Calculator</h4>
        <h6>Currency Used : {current.currency}</h6>
        <div className="row pl-3 pt-3">
          <input onChange={(event) => setMoney(event.target.value)} className="form-control col-4 mr-3" />
          <button onClick={() => dispatch(combineActions.convertActions.buy({ money: money, currency: current }))} className="btn btn-primary col-1 mr-3">Buy</button>
          <button onClick={() => dispatch(combineActions.convertActions.sell({ money: money, currency: current }))} className="btn btn-danger col-1">Sell</button>
        </div>
        <div className="row pl-3 pt-3">
          <h3>{currency} {value}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
