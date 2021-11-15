import api from '../api/api.service';

import messages from './messages.json';

export const sendMessage = async (text: string) => {
  return await api.post('/messages', {
    text,
  });
};

export const getMessages = () => {
  return messages;
};
