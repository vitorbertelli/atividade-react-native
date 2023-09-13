import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

const Item = (props) => {
  return(
    <View>
      <Card>
        <Text>{props.item.cardName}</Text>
      </Card>
    </View>
  );
}

export default Item;