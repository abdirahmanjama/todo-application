import { Heading } from "@chakra-ui/react"
import { VStack } from "@chakra-ui/react"
import List from './components/List'
import { IconButton, useColorMode} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import AddItem from './components/AddItem';
import { useState } from 'react'
import Header from "./components/Header"

function App() {
  const initial = [
    { id: 1, body: "Get grocery" },
    { id: 2, body: "Go gym" },
  ];

  const {colorMode, toggleColorMode} = useColorMode();

  const [todoItems, setTodosItems] = useState(initial); 
  
  function deleteItem(id){
    const newTodos = todoItems.filter(todo => {
      return todo.id !== id;
    })

    setTodosItems(newTodos);

  }

  function addItem(todo){
    setTodosItems([...todoItems, todo])
  }

  return (
    <VStack padding={6}>
      <IconButton onClick={toggleColorMode} icon={colorMode==="light" ? <SunIcon/> : <MoonIcon/>} isRound="true" size="lg" alignSelf="flex-end"/>
      <Heading size="2xl" colorScheme="blue" fontWeight="bold" paddingBottom={8}>Todo Application</Heading>
 
      <List todoItems={todoItems} deleteItem={deleteItem}></List>
      <AddItem addItem = {addItem}/>
    </VStack>
  );
}

export default App;
