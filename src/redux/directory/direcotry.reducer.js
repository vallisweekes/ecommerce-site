const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: '/must-cool.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: '/jacket-model-resize.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'trainers',
      imageUrl: '/sneakers_shop.jpg',
      id: 3,
      linkUrl: 'shop/trainers',
    },
    {
      title: 'womens',
      imageUrl: '/women_model-resize.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: '/man-model.jpg',
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
