import React, { Component } from 'react';
import Record from './Record'

class Records extends Component {

constructor(){
  super();
  this.state = {
    records:[
      {id:1, "date":"2018-11-01", "title":"收入", "amount":1},
      {id:1, "date":"2019-11-01", "title":"收入", "amount":2},
      {id:1, "date":"2017-11-01", "title":"收入", "amount":3},
      {id:1, "date":"2015-11-01", "title":"收入", "amount":423},
    ]
  }
}

  render() {
    return (
      <div>
        <h2>Records</h2>
        <table className="table table-boardered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
              <Record />
          </tbody>

        </table>
      </div>
    );
  }
}

export default Records;
