import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, View, ScrollView, NativeScrollEvent, FlatList } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import ChatInput from '../../Components/ChatInput/chat-input.index';
import MessageItem from '../../Components/MessageItem/message-item.index';

import { loremIpsum } from '../../util/utils';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Array<IMessage>>([]);
    const [text, setText] = useState("");
    const listRef = useRef<ScrollView>(null);

    useEffect(() => {
        const arr: Array<IMessage> = [];

        for (let i = 0; i < 50; i++) {
            const sent = Math.random() > 0.5;

            arr.push({
                _id: i,
                text: i + loremIpsum(3 + Math.floor(Math.random() * 5)),
                createdAt: new Date(),
                sent,
                received: !sent,
                user: {
                    _id: sent ? 1 : 0,
                    name: sent ? "Você" : "Papi",
                }
            });
        }

        setMessages(arr);
    }, []);

    const sendMessage = () => {
        setMessages([{
            _id: messages.length,
            createdAt: new Date(),
            text,
            user: {
                _id: 1,
                name: "Você",
            },
        }, ...messages]);

        setText("");

        listRef.current?.scrollToEnd();

        setTimeout(() => setMessages(messages => [{
            _id: messages.length,
            createdAt: new Date(),
            text: loremIpsum(3 + Math.floor(Math.random() * 5)),
            user: {
                _id: 0,
                name: "Papi",
            }
        }, ...messages]), 500);
    }

    const loadMore = () => {
        const arr: Array<IMessage> = [];

        for (let i = 0; i < 10; i++) {
            const sent = Math.random() > 0.5;

            arr.push({
                _id: messages.length + i,
                text: i + loremIpsum(3 + Math.floor(Math.random() * 5)),
                createdAt: new Date(),
                sent,
                received: !sent,
                user: {
                    _id: sent ? 1 : 0,
                    name: sent ? "Você" : "Papi",
                }
            });
        }

        setMessages([...messages, ...arr]);
    }

    return (
        <GiftedChat
            messages={messages}
            onSend={() => sendMessage()}
            text={text}
            onInputTextChanged={setText}
            renderMessage={({ currentMessage }) => currentMessage && (
                <MessageItem message={currentMessage} />
            )}
            onLoadEarlier={() => loadMore()}
            loadEarlier={true}
        />

        // <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        //     {/* <ScrollView
        //                 ref={listRef}
        //                 style={styles.list}
        //                 onScroll={({ nativeEvent }) => {
        //                     if (isCloseToTop(nativeEvent)) {
        //                         loadMore()
        //                     }
        //                 }}
        //             >
        //                 {messages.map((message) => (
        //                     <MessageItem key={message.id.toString()} message={message} />
        //                 ))}
        //             </ScrollView> */}

        //     <View style={styles.listContainer}>
        //         <FlatList
        //             inverted
        //             data={messages}
        //             renderItem={({ item }) => (
        //                 <MessageItem message={item} />
        //             )}
        //             style={styles.list}
        //             keyExtractor={({ id }) => id.toString()}
        //             onEndReached={() => loadMore()}
        //         />
        //     </View>

        //     <View style={styles.inputContainer}>
        //         <ChatInput value={text} onChangeText={setText} onSend={sendMessage} />
        //     </View>
        // </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-around'
    },
    listContainer: {
        flexGrow: 1
    },
    list: {
        width: "100%"
    },
    inputContainer: {
        flex: 1,
        height: 100
    }
});

export default Chat;