const Questions = (props) => {
  const quests = props.quests;

  return (
    <div>
      {quests.map((quest) => (
        <h1>{quest.title}</h1>
      ))}
    </div>
  );
};

export default Questions;
