import { Anchor, Text, Paragraph, View, XStack, YStack } from 'tamagui'
import { Image } from 'expo-image';

export default function HomeScreen() {
  const fontSize = 48;
  return (
    <View flex={1} items="center" justify="center" background='white' >
      <YStack gap="$2" mb="$4" items="center">
      <Image
          source={require('../assets/images/perception-p.svg')}
          style={{ height: 150, width: 150 }}
          contentFit="contain"
        />
      <XStack gap="$0" items={'center'}>
        <Text fontSize={fontSize} fontFamily="CalSansRegular">Perception</Text>
        <Text fontSize={fontSize} fontFamily="UbuntuRegular" fontStyle='italic'>ware</Text>
      </XStack>
      {/* <Text fontSize={16} fontFamily="UbuntuRegular" fontStyle='italic'>Be informed. Always.</Text> */}
      </YStack>
    </View>
  )
}
