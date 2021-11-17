import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Product } from '../component/Product';
import { getProducts } from '../service/ProductService';

export default function ProductList ({navigation}) {

  function renderProduct({item}) {
    return (
      <Product name = {item.name} price={item.price} image={item.image} onPress={()=>navigation.navigate('ProductDetails',{productId: item.id})}/> 
      
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });


  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});