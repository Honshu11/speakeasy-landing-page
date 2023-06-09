import React from 'react';


function Gallery() {
  const cocktails = [
    {
        name: 'Cherry Vanilla Whiskey Sour',
        description: 'A whiskey sour, with a hint of cherry-vanilla flavor',
        image: './Images/pineapple-mojito.jpg',
    },
    {
        name: 'Arigato Sour',
        description: 'A traditional whiskey sour using Toki Suntory whiskey, a Japanese whiskey.',
        image: './Images/pineapple-mojito.jpg',
    }
  ]

  return (
    <div className="container">
        <hr className='text-light'/>
        <h2 className='gallery-header pb-2 text-light'>Gallery</h2>
        <div className="row row-cols-1 row-cols-md-2">
        {cocktails.map(cocktail => (
          <div className="col mb-4" key={cocktail.name}>
            <div className="card">
              <img src={cocktail.image} className="card-img-top" alt={cocktail.name} />
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