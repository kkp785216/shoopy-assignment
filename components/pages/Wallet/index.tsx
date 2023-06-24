import React from "react";
import Search from "./Subcomponents/Search";
import Container from "@/components/Utils/UI/Container";
import { Provider } from "./context/StateContext/Provider";

const Wallet = () => {
  return (
    <Provider>
      <Container>
        <Search />
      </Container>
    </Provider>
  );
};

export default Wallet;
