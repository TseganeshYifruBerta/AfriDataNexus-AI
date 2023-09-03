interface Content {
content: string
}
const ChatCard: React.FC<Content> = ({content}) => {
  return (
    
      <span>
       {content}
      </span>
    
  );
};

export default ChatCard;
