import { Box, Button, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { FaUserAlt, FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleContactClick = () => {
    toast({
      title: "Contato",
      description: "Você clicou para entrar em contato!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} p={5}>
      <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTcxNDIyNDc5Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
      <Text fontSize="2xl" fontWeight="bold">
        João Silva
      </Text>
      <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
        <VStack spacing={3}>
          <Button leftIcon={<FaUserAlt />} w="full" justifyContent="flex-start">
            Perfil
          </Button>
          <Button leftIcon={<FaEnvelope />} w="full" justifyContent="flex-start">
            Email: joao.silva@example.com
          </Button>
          <Button leftIcon={<FaPhone />} w="full" justifyContent="flex-start">
            Telefone: (11) 99999-9999
          </Button>
          <Button leftIcon={<FaMapMarkedAlt />} w="full" justifyContent="flex-start">
            Localização: São Paulo, Brasil
          </Button>
          <Button colorScheme="blue" onClick={handleContactClick}>
            Entrar em Contato
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
