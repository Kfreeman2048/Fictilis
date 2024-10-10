import React from "react";
import {useState} from 'react';
import { 
    TextInput,
    SafeAreaView,
    StyleSheet,
    Text,
} from "react-native";

import {
    Button,
  } from 'react-native-elements';

import CharacterClass from "./Character/characterClass.ts";

import WeaponClass from "./Weapon/weaponClass.ts";

function Character(): React.JSX.Element {
    const [inputCharacterName, setInputCharacterName] = useState('');
    const [newCharacterName, setNewCharacterName] = useState('');

    const onPressSetCharacterName = () => {
        setNewCharacterName(inputCharacterName);
    };

    let oakClub = new WeaponClass(1, "Oak Club", ["Melee", "Crushing"], 6, ["slam"]);
    let hatchet = new WeaponClass(2, "Hatchet", ["Melee", "Slashing"], 6, ["cleave"]);
    
    let weaponMap = new Map<WeaponClass, boolean>([
        [hatchet, false],
        [oakClub, true]
    ]);

    const characterList = [
        new CharacterClass(1, newCharacterName, "Kevin", 10, 10, 4, 4, 0, 0, "Human", "mortal", weaponMap,)
    ];
 
    const renderCharacters = () => {
        return characterList.map((char) => {
            return ( 
                <SafeAreaView key={char.id}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputCharacterName}
                        value={inputCharacterName}
                        placeholder="Character's Name"
                        keyboardType="default"
                    />
                    <Button
                        onPress={onPressSetCharacterName}
                        title="Set Character's Name"
                        accessibilityLabel="Set Character's Name"
                    />
                    <Text>
                        {char.characterName}
                        {"\n"}
                        {char.playerName}
                        {"\n"}
                    </Text>
                </SafeAreaView>
            );
        });
    };

    return <SafeAreaView>{renderCharacters()}</SafeAreaView>;
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Character;
