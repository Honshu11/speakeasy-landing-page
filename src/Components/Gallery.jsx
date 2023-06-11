import React from 'react';


function Gallery() {
  const cocktails = [
    {
        name: 'Cherry Vanilla Whiskey Sour',
        description: 'An infused cherry and vanilla bean single malt whiskey makes this great whiskey sour cocktail that is full of flavor',
        image: './Images/cherry-vanilla-whiskey-sour.jpg',
    },
    {
        name: 'Arigato Sour',
        description: 'A play on a sweet and tart whiskey sour featuring a citrus you may not have tried before.',
        image: './Images/arigato-sour.jpg',
    }
  ]

  return (
    <div className="container" id='gallery'>
        <hr className='text-light'/>
        <h2 className='gallery-header pb-2 text-light'>Gallery</h2>
        <div className="row row-cols-1 row-cols-md-2">
        {cocktails.map(cocktail => (
          <div className="col mb-4" key={cocktail.name}>
            <div className="card">
              <img src={cocktail.image} className="card-img-top" id='card-image' alt={cocktail.name}/>
              <div className="card-body">
                <h5 className="card-title">{cocktail.name}</h5>
                <p className="card-text">{cocktail.description}</p>
              </div>
            </div>
          </div>
        ))}    
        </div>
    </div>
  )
}

export default Gallery;