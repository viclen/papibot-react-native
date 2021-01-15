import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

interface ChatInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onSend: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChangeText, onSend }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={value} onChangeText={onChangeText} accessibilityComponentType={undefined} accessibilityTraits={undefined} />
            <Button onPress={onSend} icon="send" mode="text" style={styles.button} accessibilityComponentType={undefined} accessibilityTraits={undefined}>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1
    },
    input: {
        flex: 1,
    },
    button: {
        backgroundColor: 'transparent'
    }
});

export default ChatInput;