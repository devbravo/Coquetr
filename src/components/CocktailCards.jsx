import React from 'react';
import Like from './common/Like';
import InfoEdit from './common/InfoEditButton';

function CocktailCards({ drinks, onLike, onInfo, onEdit }) {
  return (
    <div className='card-container'>
      <h6>
        The are {drinks.length} cocktails in the {} category
      </h6>
      <div className='album py-5 bg-light'>
        <div className='container-fluid '>
          <div className='row'>
            {drinks.map(drink => (
              <div className='col-md-3' key={drink.idDrink}>
                <div className='card mb-4 shadow-sm'>
                  <img
                    src={drink.strDrinkThumb}
                    className='card-img-top'
                    alt={drink.strDrink}
                  />
                  <div className='card-body'>
                    <h6>
                      <b>{drink.strDrink}</b>
                    </h6>
                    <p className='card-text'>
                      This is a wider card with supporting text below
                      as a natural lead-in to additional content.
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <InfoEdit name={'Info'} type={onInfo} />
                        <InfoEdit name={'Edit'} type={onEdit} />
                      </div>
                      <Like
                        liked={drink.liked}
                        onClick={() => onLike(drink)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CocktailCards;
