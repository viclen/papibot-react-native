import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Message } from '../../interfaces/interfaces';
import Theme from '../Theme/theme.index';

interface MessageItemProps {
    message: Message;
}

const accessibilityIgnore = {
    accessibilityComponentType: undefined,
    accessibilityTraits: undefined
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
    const formatTimestamp = (strTime: string) => {
        return strTime;
    }

    if (message.userId === 0) {
        return (
            <View style={styles.receivedMessageContainer}>
                <Button {...accessibilityIgnore} style={styles.receivedText}>
                    {message.text}
                </Button>
                <Text style={styles.time}>
                    {formatTimestamp(message.createdAt)}
                </Text>
            </View>
        );
    } else {
        return (
            <View style={styles.sentMessageContainer}>
                <Button {...accessibilityIgnore} style={styles.sentText}>
                    {message.text}
                </Button>
                <Text style={styles.time}>
                    {formatTimestamp(message.createdAt)}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    receivedMessageContainer: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    sentMessageContainer: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    receivedText: {
        textAlign: "left",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        maxWidth: "80%",
        backgroundColor: Theme.colors.primary,
    },
    sentText: {
        textAlign: "left",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        maxWidth: "80%",
        backgroundColor: Theme.colors.accent,
    },
    time: {
        color: Theme.colors.text,
        fontSize: 10
    }
});

export default MessageItem;