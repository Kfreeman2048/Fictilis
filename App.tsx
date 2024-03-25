import React from 'react';
import {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Button,
  ThemeProvider,
} from 'react-native-elements';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

import{
  dieRoller,
} from './dice_roller/rollDie.ts';

import{
  slam,
  flurry,
  icicleSpear,
  cleave,
  parryingStrike,
  dragIntoDarkness,
  shoot,
} from './actions/attacks.ts';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const [dieValue, setDieValue] = useState(0);
  const [wDamage, setWDamage] = useState('');
  const [deflectAndDodge, setDeflectAndDodge] = useState('');
  const [targets, setTargets] = useState('');
  const [slamResult, setSlamResult] = useState(0);
  const [flurryResult, setFlurryResult] =useState([0, 0, 0]);
  const [icicleSpearResult, setIcicleSpearResult] = useState(0);
  const [parryingStrikeResult, setParryingStrikeResult] = useState(0);
  const [dragIntoDarknessResult, setDragIntoDarknessResult] = useState(0);
  const [shootResult, setShootResult] =useState([0, 0]);
  const [cleaveResult, setCleaveResult] =useState([0, 0]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPressRollD20 = () => {
    setDieValue(dieRoller(20));
  };

  const onPressGetSlamResult = () => {
    setSlamResult(slam(Number(deflectAndDodge), Number(wDamage)));
  };

  const onPressGetFlurryResult = () => {
    setFlurryResult(flurry(Number(deflectAndDodge), Number(wDamage)));
  };

  const onPressGetIcicleSpearResult = () => {
    setIcicleSpearResult(icicleSpear(Number(deflectAndDodge), Number(wDamage)));
  };

  const onPressGetParryingStrikeResult = () => {
    setParryingStrikeResult(parryingStrike(Number(deflectAndDodge), Number(wDamage)));
  };

  const onPressGetDragIntoDarknessResult = () => {
    setDragIntoDarknessResult(dragIntoDarkness(Number(deflectAndDodge), Number(wDamage)));
  };

  const onPressGetShootResult = () => {
    setShootResult(shoot(Number(deflectAndDodge), Number(wDamage)));
  };

  const onPressGetCleaveResult = () => {
    setCleaveResult(cleave(Number(deflectAndDodge), Number(wDamage), Number(targets)));
  };

  return (
    <ThemeProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Roll Dice">
              <SafeAreaView>
                <Button
                  onPress={onPressRollD20} 
                  title="Roll d20"
                  accessibilityLabel="Roll a 20 sided die."
                />
                <Text>
                  {"\n"}
                  {dieValue}
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setDeflectAndDodge}
                  value={deflectAndDodge}
                  placeholder="Target's Deflect and Dodge"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={setWDamage}
                  value={wDamage}
                  placeholder="Your Weapon Damage"
                  keyboardType="numeric"
                />
              <Button
                  onPress={onPressGetSlamResult} 
                  title="Slam"
                  accessibilityLabel="Slam"
                />
                <Text>
                  {"\n"}
                  {slamResult}
                </Text>
                <Button
                  onPress={onPressGetFlurryResult} 
                  title="Flurry"
                  accessibilityLabel="Flurry"
                />
                <Text>
                  {"\n"}
                  {flurryResult}
                </Text>
                <Button
                  onPress={onPressGetIcicleSpearResult} 
                  title="IcicleSpear"
                  accessibilityLabel="IcicleSpear"
                />
                <Text>
                  {"\n"}
                  {icicleSpearResult}
                </Text>
                <Button
                  onPress={onPressGetParryingStrikeResult} 
                  title="ParryingStrike"
                  accessibilityLabel="ParryingStrike"
                />
                <Text>
                  {"\n"}
                  {parryingStrikeResult}
                </Text>
                <Button
                  onPress={onPressGetDragIntoDarknessResult} 
                  title="DragIntoDarkness"
                  accessibilityLabel="DragIntoDarkness"
                />
                <Text>
                  {"\n"}
                  {dragIntoDarknessResult}
                </Text>
                <Button
                  onPress={onPressGetShootResult} 
                  title="Shoot"
                  accessibilityLabel="Shoot"
                />
                <Text>
                  {"\n"}
                  {shootResult}
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setTargets}
                  value={targets}
                  placeholder="Number of Targets for the Attack"
                  keyboardType="numeric"
                />
                <Button
                  onPress={onPressGetCleaveResult} 
                  title="Cleave"
                  accessibilityLabel="Cleave"
                />
                <Text>
                  {"\n"}
                  {cleaveResult}
                </Text>
              </SafeAreaView>
            </Section>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
