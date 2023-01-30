import "./App.css";
import Description from "./components/Description";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="first">
        <Title name={"Lorem"} />
        <Description
          text={
            "Lorem ipsum dolor sit amet. Eum quae delectus et voluptas quis ex voluptas ipsa eos tenetur omnis sed quae alias non deleniti voluptatibus et ipsum reprehenderit. Ut molestiae laboriosam ut omnis odit At illum maiores. Et atque cupiditate et sequi quos et quam laborum aut eaque accusantium nam mollitia optio eos quasi laborum 33 explicabo possimus. Sit eligendi corrupti vel eligendi dolor hic galisum tenetur nam maiores sapiente aut voluptate quis ut sapiente ullam. 33 galisum cupiditate qui iste aliquid ut quia odio aut accusamus explicabo ut autem atque. Sit minima galisum quo eaque velit eos tempora voluptate! In velit enim eum aperiam aspernatur At sunt natus et reiciendis officiis."
          }
        />
      </div>
      <div className="first">
        <Title name={"Ipsum"} />
        <Description
          name={
            "Ut molestiae laboriosam ut omnis odit At illum maiores. Et atque cupiditate et sequi quos et quam laborum aut eaque accusantium nam mollitia optio eos quasi laborum 33 explicabo possimus. Sit eligendi corrupti vel eligendi dolor"
          }
        />
      </div>
    </>
  );
}

export default App;
