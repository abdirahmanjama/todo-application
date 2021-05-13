import React from "react";
import { Stack, HStack, VStack, Text, Icon, StackDivider, Spacer } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react"

function List() {
  const todoItems = [
    { id: 1, body: "Get grocery" },
    { id: 2, body: "Go gym" },
  ];

  return (
    
      <VStack divider={<StackDivider/>} borderColor="gray.100" borderWidth="2px" borderRadius="lg" p="4" width="100%" maxW={{base: "90vw", sm: "70vw", md: "60vw", lg: "50vw"}} alignItems="stretch">
        {todoItems.map((todo) => (
            <>
          <HStack key={todo.id} >
            <Text>{todo.body}</Text>    
            <Spacer/>
            <IconButton icon={<DeleteIcon/>} isRound="true"/>
          </HStack>
          </>
        ))}
      </VStack>
  
  );
}

export default List;
