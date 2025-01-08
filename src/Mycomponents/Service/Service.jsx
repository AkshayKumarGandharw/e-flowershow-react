import React from 'react';
import './service.css';

function Service() {
  return (
    <div className='Service'>
        <div className='main-div'>
            <div className='first-div'>
                <div className="Module" id="order">Order Now</div>
                <div className="Module" id="seller">Seller</div>
                <div className="Module" id="product">Product</div>
                <div className="Module" id="product-category">Product Category</div>
                <div className="Module" id="over-all-custumer">Over All Customers</div>
                <div className="Module" id="privacy-claim">Privacy and claim</div>
                 
            </div>
            <div className='second-div'>
                <div className='form-div'>
                    <h4>ORDER FORM</h4>
                    <form action="">
                        <div className='mt-3'>
                            <label>Customer Name:</label>
                            <input type="text" className='form-control'/>
                        </div>
                        <div className='mt-3'>
                            <label>Product Name:</label>
                            <input type="text" className='form-control'/>
                        </div>
                        <div className='mt-3'>
                            <label>Product Category:</label>
                            <select name="" id="" className='form-control'>
                                <option value="">Select any one</option>
                                <option value="">Option-1</option>
                                <option value="">Option-2</option>
                                <option value="">Option-3</option>
                            </select>
                        </div>
                        <div className='mt-3'>
                            <label>Product Price:</label>
                            <select name="" id="" className='form-control'>
                            <option value="">Select any one</option>
                                <option value="">Above 250/-</option>
                                <option value="">Under 900/-</option>
                                <option value="">Above 900/-</option>
                            </select>
                        </div>
                        <div className='mt-3 px-5'>
                            <button className='btn btn-success me-4'>ORDER NOW</button>
                            <button className='btn btn-warning'>CANCEL ORDER</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Service;