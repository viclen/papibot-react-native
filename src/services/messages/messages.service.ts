import api from '../api/api.service';

export const sendMessage = async (text: string) => {
  return await api.post('/messages', {
    text,
  });
};

export const getMessages = async () => {
  return await api.get('/messages');
};
