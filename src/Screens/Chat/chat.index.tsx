import React, { useState, useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatInput from '../../Components/ChatInput/chat-input.index';
import MessageItem from '../../Components/MessageItem/message-item.index';
import TopBar from '../../Components/TopBar/top-bar.index';

import { Message } from '../../interfaces/interfaces';
import { loremIpsum } from '../../util/utils';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Array<Message>>([]);
    const [text, setText] = useState("");

    useEffect(() => {
        const arr: Array<Message> = [];

        for (let i = 0; i < 50; i++) {
            arr.push({
                id: i,
                text: loremIpsum(3 + Math.floor(Math.random() * 5)),
                createdAt: "13:25",
                userId: Math.random() > 0.5 ? 1 : 0,
            });
        }

        setMessages(arr);
    }, []);

    const sendMessage = () => {
        setMessages([{
            id: messages.length,
            createdAt: new Date().toISOString().substr(11, 5),
            text,
            userId: 1,
        }, ...messages]);

        setText("");

        setTimeout(() => setMessages([{
            id: messages.length,
            createdAt: new Date().toISOString().substr(11, 5),
            text: loremIpsum(3 + Math.floor(Math.random() * 5)),
            userId: 0,
        }, ...messages]), 500);
    }

    const loadMore = () => {
        const arr: Array<Message> = [];

        for (let i = 0; i < 10; i++) {
            arr.push({
                id: i,
                text: loremIpsum(3 + Math.floor(Math.random() * 5)),
                createdAt: "13:25",
                userId: Math.random() > 0.5 ? 1 : 0,
            });
        }

        setMessages([...messages, ...arr]);
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TopBar />
            <FlatList
                inverted
                data={messages}
                renderItem={({ item }) => (
                    <MessageItem message={item} />
                )}
                style={styles.list}
                keyExtractor={({ id }) => id.toString()}
                onEndReached={() => loadMore()}
            />

            <ChatInput value={text} onChangeText={setText} onSend={sendMessage} />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    list: {
        width: "100%",
    }
});

export default Chat;