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
  
  export const AmplifyNewsCard = ({title, description, url, urlToImage}: {title: string; description: string; url: string; urlToImage: string}) => {
    const { tokens } = useTheme();
    return (
      <View
        backgroundColor={tokens.colors.background.secondary}
        padding={tokens.space.medium}
      >
        <Card>
          <Flex direction="row" alignItems="flex-start">
            <Image
              alt="Road to milford sound"
              src={urlToImage}
              width="33%"
            />
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
              <a href={url}><Button variation="primary">Visit</Button></a>
            </Flex>
          </Flex>
        </Card>
      </View>
    );
  };