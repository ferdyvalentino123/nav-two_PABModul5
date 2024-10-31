import { Heading, Text, Center, Image, Box } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <ScrollView>
      <Header title={"News"} withBack={true} />
      <Image
        source={{ uri: params.image }}
        w="100%"
        h="20%"
        alt="Image Data"
      />  
      <Box p={10}>
        <Text textAlign="left">{params.date}</Text>
        <Heading textAlign="left">{params.title}</Heading>
        <Box
          style={{
            width: '100%', 
            height: 0.4,      
            backgroundColor: 'grey', 
            marginVertical: 10 
          }}
        />
        <Text textAlign="left">{params.content}</Text>
      </Box>
    </ScrollView>
  );
};

export default NewsDetail;