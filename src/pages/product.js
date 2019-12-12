import React from 'react';

import { WebView } from 'react-native-webview';

const Product = ({ navigation }) => {

  console.log('url -> ', navigation);

  return <WebView
    source={{ uri: "https://rocketseat.com.br"}}
  />
};

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.title

});

export default Product;