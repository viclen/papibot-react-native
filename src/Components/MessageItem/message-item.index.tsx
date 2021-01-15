import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IMessage } from 'react-native-gifted-chat';
import { Message } from '../../interfaces/interfaces';
import Theme from '../Theme/theme.index';

interface MessageItemProps {
    message: IMessage;
}

const accessibilityIgnore = {
    accessibilityComponentType: undefined,
    accessibilityTraits: undefined
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
    const formatTimestamp = (strTime: string) => {
        return strTime;
    }

    if (message.user._id === 0) {
        return (
            <View style={styles.receivedMessageContainer}>
                <View {...accessibilityIgnore} style={styles.receivedText}>
                    <Text style={{ color: 'white' }}>
                        {message.text}
                    </Text>
                </View>
                <Text style={styles.time}>
                    {formatTimestamp(message.createdAt.toLocaleString())}
                </Text>
            </View>
        );
    } else {
        return (
            <View style={styles.sentMessageContainer}>
                <View {...accessibilityIgnore} style={styles.sentText}>
                    <Text style={{ color: 'white' }}>
                        {message.text}
                    </Text>
                </View>
                <Text style={styles.time}>
                    {formatTimestamp(message.createdAt.toLocaleString())}
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
        alignItems: 'flex-start',
        marginBottom: 5
    },
    sentMessageContainer: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginBottom: 5
    },
    receivedText: {
        textAlign: "left",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 0,
        maxWidth: "80%",
        backgroundColor: Theme.colors.primary,
        color: 'white',
        textTransform: 'none',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    sentText: {
        textAlign: "left",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 0,
        maxWidth: "80%",
        backgroundColor: Theme.colors.accent,
        color: 'white',
        textTransform: 'none',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    time: {
        color: Theme.colors.text,
        fontSize: 10
    }
});

export default MessageItem;