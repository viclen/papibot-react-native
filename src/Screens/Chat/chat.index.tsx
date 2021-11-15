import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import MessageItem from '../../Components/MessageItem/message-item.index';

import Theme from '../../Components/Theme/theme.index';
import {TouchableOpacity} from 'react-native-gesture-handler';

import 'moment/locale/pt-br';
import {
  getMessages,
  sendMessage,
} from '../../services/messages/messages.service';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('getting messages...');

    const data = getMessages();
    setMessages(
      data.map((message: string, index: number) => ({
        _id: index,
        text: message,
        createdAt: new Date(),
        sent: index % 2 === 0,
        received: index % 2 !== 0,
        user: {
          _id: index % 2 === 0 ? 1 : 0,
          name: index % 2 === 0 ? 'Você' : 'Papibot',
        },
      })),
    );
  }, []);

  const handleSendMessage = async () => {
    if (!text) {
      return;
    }

    setMessages([
      {
        _id: -messages.length,
        createdAt: new Date(),
        text,
        user: {
          _id: 1,
          name: 'Você',
        },
      },
      ...messages,
    ]);

    setText('');

    const {data} = await sendMessage(text);

    setMessages((m) => {
      m[0] = {
        _id: data.sent.id,
        createdAt: new Date(data.sent.createdAt),
        sent: true,
        received: false,
        text: data.sent.text,
        user: {
          _id: data.sent.UserId,
          name: 'Você',
        },
      };

      return [
        {
          _id: data.answer.id,
          createdAt: new Date(data.answer.createdAt),
          text: data.answer.text,
          sent: false,
          received: true,
          user: {
            _id: 0,
            name: 'Papi',
          },
        },
        ...m,
      ];
    });
  };

  const SendButton = ({}) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingRight: 5,
      }}>
      <TouchableOpacity
        onPress={handleSendMessage}
        style={{
          backgroundColor: Theme.colors.accent,
          borderRadius: 100,
          height: 30,
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesomeIcon icon={faPaperPlane} size={15} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <GiftedChat
      messages={messages}
      text={text}
      onInputTextChanged={setText}
      renderMessage={({currentMessage}) =>
        currentMessage && <MessageItem message={currentMessage} />
      }
      loadEarlier={false}
      renderSend={SendButton}
      locale={'pt-br'}
    />
  );
};

export default Chat;
