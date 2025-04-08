import Card, { CardBody } from "./assets/components/card";
import List from "./assets/components/List";
import Button from "./assets/components/Button";
import { useState } from "react";

import { AiOutlineLike } from "react-icons/ai";

/**
 * thurty =
 * falsy = 0, "",  false.undefined ,null
 */

function App() {
  // const list = ["goku", "tanjiro", "gohan", "picoro"];
  // const handleSelect = (elemento: string) => {
  //   console.log("imprimiendo", elemento);
  // };

  // const [isLoading, setIsLoading] = useState(false);
  // const handleclick = () => {
  //   setIsLoading(!isLoading);
  // };

  // return (
  //   <>
  //     <Card>
  //       <CardBody title="Hola mundo" parrafo="Este es el texto" />
  //       {list.length ? (
  //         <List data={list} onSelect={handleSelect} />
  //       ) : (
  //         "no hay texto"
  //       )}
  //     </Card>
  //     <Button isLoadin={isLoading} onClick={handleclick}>
  //       Hola mundo
  //     </Button>
  //   </>
  // );

  const [data, setData] = useState(["goku", "tanjiro", "gohan", "picoro"]);

  const addMinion = () => {
    setData([...data, "minion"]);
  };

  const delMinion = () => {
    setData(data.slice(0, -1));
  };

  return (
    <Card>
      <Button onClick={addMinion}>
        agregar
        <AiOutlineLike color="blue" size={40} />
      </Button>
      <Button onClick={delMinion}>
        aliminar <AiOutlineLike color="blue" size={40} />
      </Button>
      <List data={data}></List>
    </Card>
  );
}

export default App;
