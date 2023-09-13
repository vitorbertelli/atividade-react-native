import { View, TextInput } from "react-native";
// import styles from './style.js';

const Input = (props) => {
  return(
    <View>
      <TextInput 
        style={props.style}
        placeholder={props.placeholder}
        onChangeText={
          value => {
            props.setNovoItem({
              cardName: `${value}`
            });
          }
        }
      />
    </View>   
  );
}

export default Input;