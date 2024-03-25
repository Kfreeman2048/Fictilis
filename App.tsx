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
      <SafeAreaView style={styles.pageIndent}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  pageIndent: {
    margin: 20,
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
