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

function Character(): React.JSX.Element {
    const [inputCharacterName, setInputCharacterName] = useState('');
    const [newCharacterName, setNewCharacterName] = useState('');
    const onPressSetCharacterName = () => {
        setNewCharacterName(inputCharacterName);
    };

    const characterList = [
        new CharacterClass(1, newCharacterName, "Kevin", 10, 10, 4, 4, 0, 0, "Human", "mortal"),
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
