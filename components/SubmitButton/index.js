import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style'; 

const SubmitButton = (props) => {
  return(
    <View>
      <TouchableOpacity style={styles.button} onPress={props.onClick}>
        <Text style={styles.text}>{props.textButton}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SubmitButton;