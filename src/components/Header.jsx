import { Flex, Text, Button } from "@radix-ui/themes";
import AccordionDemo from "./Accordion";

const Header = () => {
  return (
    <div>
      <Flex direction="column" gap="2">
			  <Text>Hello from Radix Themes :)</Text>
			  <Button>Let's go</Button>      
		  </Flex>

      <AccordionDemo />
    </div>    
  )
}

export default Header