import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Contacts from "expo-contacts";

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === "granted") {
        const data = await Contacts.getContactsAsync();
        //console.log(JSON.stringify(data));  
        for (var i=0;i<data.data.length;i++){
          
          var name = data.data[i].name
          for(var j=0; j<data.data[i].phoneNumbers.length;j++){
            
              var no = data.data[i].phoneNumbers[j].number;
              console.log(name,no);

          }

        }
        
        
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Contacts displayed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
