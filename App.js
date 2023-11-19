import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { createStore } from "redux";
import { useDispatch } from "react-redux";
import { Provider } from 'react-redux';
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/Fontisto";
import Icon4 from "react-native-vector-icons/AntDesign";
import Icon5 from "react-native-vector-icons/Ionicons";

const Stask = createStackNavigator();
const initialState = [];
function todos(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.itemm]);
    default:
      return state;
  }
}

const store = createStore(todos);

function addTask(task) {
  return {
    type: "ADD_TODO",
    itemm: task,
  };
}

console.log(store.getState());
const S1 = ({ navigation }) => {
  return (
    <View style={[styles.container, { alignItems: "center" }]}>
      <View style={{ marginVertical: 30 }}>
        <Image source={require("./img/Image 95.png")} style={styles.img} />
      </View>
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Text style={{ color: "#8353E2", fontSize: 20, fontWeight: "bold" }}>
          MANAGE YOUR
        </Text>
        <Text style={{ color: "#8353E2", fontSize: 20, fontWeight: "bold" }}>
          TASK
        </Text>
      </View>

      <View
        style={[
          styles.fl,
          {
            width: 334,
            height: 43,
            borderColor: "gray",
            borderWidth: 1,
            alignItems: "center",
            borderRadius: 10,
            marginBottom: 40,
          },
        ]}
      >
        <Icon3
          name="email"
          style={{ fontSize: 24, color: "gray", marginHorizontal: 10 }}
        />
        <TextInput placeholder="Enter your name" />
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.center,
            {
              borderRadius: 10,
              backgroundColor: "#00BDD6",
              width: 190,
              height: 44,
            },
          ]}
          onPress={() => {
            navigation.navigate("S2");
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const S2 = ({ navigation }) => {
  const tasks = useSelector((state) => state); 
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.fl,
          {
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 10,
            marginVertical: 20,
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.navigate("S1")}>
          <Icon5
            name="arrow-back"
            style={{ fontSize: 30, color: "gray", marginHorizontal: 10 }}
          />
        </TouchableOpacity>

        <View style={[styles.fl]}>
          <Icon2
            name="user"
            style={{ fontSize: 30, color: "gray", marginHorizontal: 10 }}
          />
          <View style={[]}>
            <Text>Hi</Text>
            <Text>Have</Text>
          </View>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={[
            styles.fl,
            {
              width: 334,
              height: 43,
              borderColor: "gray",
              borderWidth: 1,
              alignItems: "center",
              borderRadius: 10,
              marginBottom: 40,
            },
          ]}
        >
          <Icon2
            name="search"
            style={{ fontSize: 30, color: "gray", marginHorizontal: 10 }}
          />
          <TextInput placeholder="Search" />
        </View>
      </View>

      <View >
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View style={{ alignItems: "center", marginVertical: 5}}>
                <View
                  style={{
                    backgroundColor: "#d2d5d8",
                    width: 334,
                    height: 50,
                    borderColor: "gray",
                    borderWidth: 1,
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <View style={[styles.fl, { alignItems: "center" }]}>
                    <Icon2
                      name="check-square"
                      style={{
                        fontSize: 30,
                        color: "green",
                        marginHorizontal: 10,
                      }}
                    />
                    <Text>{item}</Text>
                    <Icon4
                      name="edit"
                      style={{
                        fontSize: 30,
                        color: "red",
                        marginHorizontal: 10,
                        position: "absolute",
                        right: 10,
                      }}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View style={{ position: "absolute", bottom: 100, right: "45%" }}>
        <TouchableOpacity onPress={() => navigation.navigate("S3")}>
          <View
            style={[
              styles.center,
              {
                width: 50,
                height: 50,
                backgroundColor: "#26c3d9",
                borderRadius: 100,
              },
            ]}
          >
            <Icon5
              name="add"
              style={{ fontSize: 30, color: "white", marginHorizontal: 10 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const S3 = ({ navigation }) => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();
  const handleFinish = () => {
    if (task.trim() !== "") {
      dispatch(addTask(task));
      navigation.navigate("S2");
    }
  };
  return (
    <View>
      <View
        style={[
          styles.fl,
          {
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 10,
            marginVertical: 20,
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.navigate("S2")}>
          <Icon5
            name="arrow-back"
            style={{ fontSize: 30, color: "gray", marginHorizontal: 10 }}
          />
        </TouchableOpacity>

        <View style={[styles.fl]}>
          <Icon2
            name="user"
            style={{ fontSize: 30, color: "gray", marginHorizontal: 10 }}
          />
          <View style={[]}>
            <Text>Hi</Text>
            <Text>Have</Text>
          </View>
        </View>
      </View>

      <View style={styles.center}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 20 }}>
          ADD YOUR JOB
        </Text>

        <View
          style={[
            styles.fl,
            {
              width: 334,
              height: 43,
              borderColor: "gray",
              borderWidth: 1,
              alignItems: "center",
              borderRadius: 10,
              marginBottom: 40,
            },
          ]}
        >
          <Icon
            name="notebook-multiple"
            style={{ fontSize: 26, color: "green", marginHorizontal: 10 }}
          />
          <TextInput
            placeholder="input your job"
            onChangeText={(value) => setTask(value)}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.center,
            {
              backgroundColor: "#26c3d9",
              width: 150,
              height: 40,
              borderRadius: 10,
              marginVertical: 20,
            },
          ]}
          onPress={handleFinish}
        >
          <Text style={{ color: "white" }}>FINISH</Text>
          <Icon />
        </TouchableOpacity>

        <Image
          source={require("./img/Image 95.png")}
          style={[styles.img, { marginTop: 20 }]}
        />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stask.Navigator screenOptions={{ headerShown: false }}>
          <Stask.Screen name="S1" component={S1}></Stask.Screen>
          <Stask.Screen name="S2" component={S2}></Stask.Screen>
          <Stask.Screen name="S3" component={S3}></Stask.Screen>
        </Stask.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: 271,
    height: 271,
  },
  fl: {
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
