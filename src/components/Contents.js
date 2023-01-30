import Description from "./Description";
import Title from "./Title";

const Contents = (props) => {
  return (
    <div className="first">
      <Title name={props.name} />
      <Description text={props.text} />
    </div>
  );
};

export default Contents;
