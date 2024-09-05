import React from 'react';
import './Benefits.css'
function Benefits() {
  return (
    <div className="form-container">
      <h1 className='font-bold'>Cost Comparison: Coal vs Solar Power Production</h1>

      <form>
        <h2 className='font-bold'>Cost of Producing Electricity per kWh</h2>
        <div className="input-group">
          <label htmlFor="coal-lower">Coal Lower Bound (USD):</label>
          <input type="number" id="coal-lower" value="2800" />
        </div>

        <div className="input-group">
          <label htmlFor="coal-upper">Coal Upper Bound (USD):</label>
          <input type="number" id="coal-upper" value="5000" />
        </div>

        <div className="input-group">
          <label htmlFor="solar-lower">Solar Lower Bound (USD):</label>
          <input type="number" id="solar-lower" value="4000" />
        </div>

        <div className="input-group">
          <label htmlFor="solar-upper">Solar Upper Bound (USD):</label>
          <input type="number" id="solar-upper" value="8000" />
        </div>

        <h2 className=' font-bold'>Potential Savings</h2>
        <div className="input-group">
          <label htmlFor="savings-lower">Lower Bound (%):</label>
          <input type="number" id="savings-lower" value="40.16" />
        </div>

        <div className="input-group">
          <label htmlFor="savings-upper">Upper Bound (%):</label>
          <input type="number" id="savings-upper" value="53.23" />
        </div>

        <h2 className='font-bold'>Estimated Savings Per kWh</h2>
        <div className="input-group">
          <label htmlFor="savings-perkwh-lower">Lower Bound (USD):</label>
          <input type="number" id="savings-perkwh-lower" value="2000" />
        </div>

        <div className="input-group">
          <label htmlFor="savings-perkwh-upper">Upper Bound (USD):</label>
          <input type="number" id="savings-perkwh-upper" value="3750" />
        </div>

        <h2 className='font-bold'>Estimated Savings Per Year</h2>
        <div className="input-group">
          <label htmlFor="savings-peryear-lower">Lower Bound (USD):</label>
          <input type="number" id="savings-peryear-lower" value="501072" />
        </div>

        <div className="input-group">
          <label htmlFor="savings-peryear-upper">Upper Bound (USD):</label>
          <input type="number" id="savings-peryear-upper" value="923510" />
        </div>

        <h2 className='font-bold'>UV Index Data (Top Cities)</h2>
        <div className="input-group">
          <label htmlFor="city1">1. Hyderabad:</label>
          <input type="text" id="city1" value="UV Index: 8-10, Exposure: 250-300 W/m²" />
        </div>

        <div className="input-group">
          <label htmlFor="city2">2. Jaipur:</label>
          <input type="text" id="city2" value="UV Index: 8-10, Exposure: 250-800 W/m²" />
        </div>

        <div className="input-group">
          <label htmlFor="city3">3. New Delhi:</label>
          <input type="text" id="city3" value="UV Index: 7-9, Exposure: 250-800 W/m²" />
        </div>

      </form>
    </div>
  );
}

export default Benefits;