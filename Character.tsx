import React from "react";
import { 
    SafeAreaView,
    Text,
} from "react-native";

import CharacterClass from "./Character/characterClass.ts";

function Character(): React.JSX.Element {
    const characterList = [
        new CharacterClass("Steve", "Kevin", 10, 10, 4, 4, 0, 0, "Human", "mortal"),
        new CharacterClass("Walrus", "Kevin", 20, 15, 3, 3, 0, 2, "Walrus", "mortal")
    ];

    const renderCharacters = () => {
        return characterList.map((char) => {
            return <Text>
                {char.characterName}
                {"\n"}
                {char.playerName}
                {"\n"}
            </Text>
        });
    };

    return <SafeAreaView>{renderCharacters()}</SafeAreaView>;
};

export default Character;
