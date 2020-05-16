const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl:
        'https://www.vallisweekes.com/portfolio_assets/jacket-model-resize.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://www.vallisweekes.com/portfolio_assets/sneakers_shop.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl:
        'https://www.vallisweekes.com/portfolio_assets/women_model-resize.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://www.vallisweekes.com/portfolio_assets/man-model.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
