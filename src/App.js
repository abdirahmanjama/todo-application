import './App.css';
import { Heading } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import Add from './components/Add'
import List from './components/List'
import { IconButton } from "@chakra-ui/react"
import {SunIcon, MoonIcon} from '@chakra-ui/icons'

function App() {
  return (
    <VStack p={4}>
      <IconButton icon={<SunIcon/>} isRound="true" size="lg" alignSelf="flex-end"/>
      <Heading marginBottom="14" fontWeight="bold" size="2xl" color="blue.800">Todo Application</Heading>
      <List></List>
    </VStack>
  );
}

export default App;
