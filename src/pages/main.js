import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { Container } from './styles';

import api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Rodizcar'
  };

  state = {
    products: []
  };

  componentDidMount() {
    this.loadProdutcts();
  }

  loadProdutcts = async () => {
    const response = await api.get('/products');

    const { docs } = response.data;

    this.setState({ products: docs });
  }

  renderItems = ({ item }) => {
    return (
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.productButton} onPress={() => { }}>
          <Text style={styles.productButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {

    const { products } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={products}
          renderItem={this.renderItems}
          keyExtractor={item => item._id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  list: {
    padding: 0
  },
  productContainer: {
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  productTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productDescription:{
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 25,
  },
  productButton:{
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  productButtonText:{

  }

})
