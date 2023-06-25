import React from "react";
import Search from "./Subcomponents/Search";
import Container from "@/components/Utils/UI/Container";
import { Provider } from "./context/StateContext/Provider";
import FilterBy from "./Subcomponents/FilterBy";
import Tranjections from "./Subcomponents/Tranjections";

const Wallet = () => {
  return (
    <Provider>
      <Container>
        <Search />
        <FilterBy />
        <Tranjections />
      </Container>
    </Provider>
  );
};

export default Wallet;
