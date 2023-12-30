import React from 'react'

function HomePageProduct(props) {
  return (
    <>
      <div>

        <div className="container text-center ">

          <div className='p-5'>
            <h1>Our best Product</h1>
          </div>

          <div className='d-flex flex-wrap justify-content-center '>
            {
              props.PP.map((elements) => {
                return (
                  <div className="card bg-light m-3" style={{ width: "18rem" }}>
                    <img src={elements.img} className='card-img-top' style={{ height: "200px" }} alt="" />
                    <div className="card-body">
                      <h4 className='card-title'>{elements.name}</h4>
                      <h5 className='card-text'>{elements.price}$</h5>
                    </div>
                    <div className='card-footer'>
                      <p className='card-text'>{elements.dec}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>

      </div >
    </>
  )
}

export default HomePageProduct