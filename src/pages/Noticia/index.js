import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';

const Notifica = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (text) => {
    setNotifications([...notifications, text]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {notifications.map((notification, index) => (
          <Text key={index} style={styles.notificationText}>
            {notification}
          </Text>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Fale com um de nossos atendentes"
        onSubmitEditing={(event) => addNotification(event.nativeEvent.text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  notificationText: {
    margin: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 5,
  },
});

export default Notifica;
