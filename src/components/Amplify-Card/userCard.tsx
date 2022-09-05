import {
    Card,
    Image,
    View,
    Heading,
    Flex,
    Badge,
    Text,
    Button,
    useTheme,
  } from '@aws-amplify/ui-react';
  
  export const AmplifyUserCard = ({title, description}: {title: string; description: string}) => {
    const { tokens } = useTheme();
    return (
      <View
        backgroundColor={tokens.colors.background.secondary}
        padding={tokens.space.medium}
      >
        <Card>
          <Flex direction="row" alignItems="flex-start">
            
            <Flex
              direction="column"
              alignItems="flex-start"
              gap={tokens.space.xs}
             >

  
              <Heading level={5}>
                {title}
              </Heading>
  
              <Text as="span">
                {description}
              </Text>
            
            </Flex>
          </Flex>
        </Card>
      </View>
    );
  };