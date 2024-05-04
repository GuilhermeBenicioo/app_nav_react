import React from "react";
import { View, Text, Button, StyleSheet } from "react-native-web";

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Detalhes</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
