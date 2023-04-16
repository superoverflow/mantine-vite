import { useState, useEffect } from "react";
import { TableSort, RowData } from "./TableSort";
import { Container } from "@mantine/core";

import response from "./mockdata.json";

function App() {
  const [data, setData] = useState<RowData[]>();
  useEffect(() => setData(response.data), []);

  return (
    <Container mx="auto">
      {data && <TableSort data={data} />}
    </Container>
  );
}

export default App;
