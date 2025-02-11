import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/screens/Home";
import { NewTodo } from "./src/screens/NewTodo";
import { TodoProvider } from "./src/component/TodoContext";


const Stack = createStackNavigator()
export default function App() {
  return( 
      <TodoProvider>
              <NavigationContainer>
                  <Stack.Navigator initialRouteName='Home'>
                      <Stack.Screen name='Home' component={Home} />
                      <Stack.Screen name='Add New Todo' component={NewTodo} />
                  </Stack.Navigator>
              </NavigationContainer>
      </TodoProvider>
  );
} 


