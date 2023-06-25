import React from "react";
import Search from "./Subcomponents/Search";
import Container from "@/components/Utils/UI/Container";
import { Provider } from "./context/StateContext/Provider";
import FilterBy from "./Subcomponents/FilterBy";

const Wallet = () => {
  return (
    <Provider>
      <Container>
        <Search />
        <FilterBy />
      </Container>
    </Provider>
  );
};

export default Wallet;
