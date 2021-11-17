import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductDetails } from './screen/ProductDetails';
import { Cart } from './screen/Cart';
import { CartIcon } from './component/CartIcon';
import { CartProvider } from './CartContext';
import ProductList from './screen/ProductList';
import Login from './screen/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Login"> 
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="CartIcon" component={CartIcon} />
        <Stack.Screen name="CartProvider" component={CartProvider} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  }
});

export default App;