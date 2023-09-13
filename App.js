import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Input from './components/Input';
import SubmitButton from './components/SubmitButton';
import Item from './components/Item';

export default function App() {

  const [novoItem, setNovoItem] = useState({});
  const [itens, setItens] = useState([{
    id: 1,
    cardName: "Item 1",
    touchCount: 0
  }, {
    id: 2,
    cardName: "Item 2",
    touchCount: 0
  }]);

  const onClick = () => {
    itens.push(novoItem);
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Itens</Text>

        <Input 
          setNovoItem={setNovoItem}
          style={styles.input}
          placeholder={"Adicione um novo item"}
        />  
        
        <SubmitButton
          onClick={onClick}
          textButton={"Adicionar Item"}
        />

        {itens.map((item) => {
          return(
            <Item item={item} />
          );
        })}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    paddingVertical: 8
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    marginTop: 16,
    marginHorizontal: 16
  }
});
