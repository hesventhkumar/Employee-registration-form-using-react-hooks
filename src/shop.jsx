import React from 'react'
import ReactDOM from 'react-dom';
import {useState,useReducer} from 'react';

import Apple from './image/harvest-7458975_640.jpg'

import Orange from './image/tangerines-1721590_640.jpg'
import Mango from './image/mango-8283268_640.jpg'
import Water from './image/watermelons-5318938_640.jpg'
import Grape from './image/vines-1747224_640.jpg'
import Banana from './image/bananas-614090_640.jpg'


// INITILIZE STATE

const initialState = { count: 0 };


// FUNCTION  REDUCER

function Welcome(state, action) {
  switch (action.category) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Shop = () => {
    const [state, dispatch] = React.useReducer(Welcome, initialState);

  return (
    <div>

        <div className="container">

            <h1 className='text-center' >Shopy Zone</h1>


           <div className="row m-3">
                <div className="col">
                <div class="card " >
                <img src={Apple} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Apple</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch({ category: 'increment' })}>+</button>
                    <input type="text" value={ state.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹120/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                                        

                </div>
                <div className="col">
                <div class="card " >
                <img src={Water} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Watermelon</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch({ category: 'increment' })}>+</button>
                    <input type="text" value={ state.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹50/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                </div>
                <div className="col">
                <div class="card " >
                <img src={Mango} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Mango</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch({ category: 'increment' })}>+</button>
                    <input type="text" value={ state.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹90/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                </div>
           </div>




           
           <div className="row m-3">
                <div className="col">
                <div class="card " >
                <img src={Apple} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Apple</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch({ category: 'increment' })}>+</button>
                    <input type="text" value={ state.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹120/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                                        

                </div>
                <div className="col">
                <div class="card " >
                <img src={Banana} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Banana</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch({ category: 'increment' })}>+</button>
                    <input type="text" value={ state.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹50/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                </div>
                <div className="col">
                <div class="card " >
                <img src={Mango} alt=""  class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Mango</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">
                    <button onClick={() => dispatch({ category: 'increment' })}>+</button>
                    <input type="text" value={ state.count} className='w-25 mx-3 text-center' />
                    <button onClick={() => dispatch({ category: 'decrement' })}>-</button>
                    </li>
                    <li class="list-group-item">
                       <b> Rate:</b>₹90/Kg
                    </li>
                    <li class="list-group-item">
                      <div className='d-flex justify-content-center' > <button className='btn-primary px-4'>Buy</button></div>
                    </li>
                </ul>
               
            </div>

                </div>
           </div>




        </div>





      
    </div>
  )
}

export default Shop
