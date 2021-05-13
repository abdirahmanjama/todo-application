import './App.css';
import { Heading } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import Add from './components/Add'
import List from './components/List'

function App() {
  return (
    <VStack>
      <Heading>Todo Application</Heading>
      <List/>
      <Add/>
    </VStack>
  );
}

export default App;
