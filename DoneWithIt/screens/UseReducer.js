import { SafeAreaView, View, Text, Stylesheet, Button } from "react-native";
import { useReducer } from "react";

export default function UseReducer() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        console.log("im on my use reducer switchcase");
        return { count: state.count + 1 };
      case "decrement":
        console.log("im on my use reducer switchcase");
        return { count: state.count - 1 };
      case "reset":
        console.log("im on my use reducer switchcase");
        return { count: (state.count = 0) };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SafeAreaView>
      <Text>Count: {state.count}</Text>
      <Button title="increment" onPress={() => dispatch({ type: "increment" })}>
        +
      </Button>
      <Button title="decrement" onPress={() => dispatch({ type: "decrement" })}>
        -
      </Button>
      <Button title="reset" onPress={() => dispatch({ type: "reset" })}>
        -
      </Button>
    </SafeAreaView>
  );
}
