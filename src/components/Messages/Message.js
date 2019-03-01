import React from 'react';
import moment from 'moment';
import { Comment, Image } from 'semantic-ui-react';
import Linkify from 'react-linkify';

const isOwnMessage = (message, user) => {
  return message.user.id === user.uid ? 'message__self' : '';
};

const isImage = message => {
  return message.hasOwnProperty('image') && !message.hasOwnProperty('content');
};

const timeFromNow = timestamp => moment(timestamp).fromNow();

const Message = ({ message, user }) => (
  <Comment>
    <Comment.Avatar src={message.user.avatar} />
    <Comment.Content className={isOwnMessage(message, user)}>
      <Comment.Author as='a'>{message.user.name}</Comment.Author>
      <Comment.Metadata>
        {timeFromNow(message.timestamp)}
        {/* <div className='message__edit'>Edit</div> */}
      </Comment.Metadata>
      {isImage(message) ? (
        <Image src={message.image} className='message__image' />
      ) : (
        <Linkify properties={{ target: '_blank' }}>
          <Comment.Text>{message.content}</Comment.Text>
        </Linkify>
      )}
    </Comment.Content>
  </Comment>
);

export default Message;
