import { Container, VStack, Heading, Input, Button, List, ListItem, Checkbox, IconButton, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="white" color="black">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" textAlign="center" mb={8} color="black">
          Todo App
        </Heading>
        <HStack width="100%">
          <Input
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            size="lg"
            borderColor="black"
            focusBorderColor="black"
            color="black"
            _placeholder={{ color: "gray.500" }}
          />
          <Button onClick={addTodo} size="lg" bg="black" color="white" _hover={{ bg: "gray.800" }}>
            Add
          </Button>
        </HStack>
        <List spacing={3} width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" alignItems="center" justifyContent="space-between" bg="gray.100" p={2} borderRadius="md">
              <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)} colorScheme="black" size="lg">
                <span style={{ textDecoration: todo.completed ? "line-through" : "none", fontWeight: "bold", fontSize: "lg" }}>
                  {todo.text}
                </span>
              </Checkbox>
              <IconButton
                aria-label="Delete todo"
                icon={<FaTrash />}
                size="lg"
                onClick={() => deleteTodo(index)}
                bg="red.500"
                color="white"
                _hover={{ bg: "red.700" }}
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;