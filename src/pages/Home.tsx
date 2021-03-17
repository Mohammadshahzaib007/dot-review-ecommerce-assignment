import React, { useState } from "react";
import { Container, Grid, TextField, InputAdornment, useMediaQuery } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import productsJson from "../data/db.json";
import ProductCard from "../components/ProductCard";

function Home() {

    const isSmallScreen = useMediaQuery('(max-width:900px)')

  const [searchTerm, setSearchTerm] = useState("");

  const products = (): JSX.Element | JSX.Element[] => {
    let products = productsJson;

    // for product searching logic
    products = products.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    });

    return products.length === 0 ? (
      <h1 style={{ textTransform: "uppercase" }}>No Item Found sorry 🙄</h1>
    ) : (
      products.map((item, i) => (
        <ProductCard key={i} title={item.name} imgLink={item.imgUrl} />
      ))
    );
  };

  return (
    <section>
      <Container>
        <Grid container>
          <Grid xs={12} style={{ margin: "20px 0" }}>
            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              fullWidth
              placeholder="Search products..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
            />
          </Grid>
          <Grid xs={12} style={{ display: "flex", flexWrap: "wrap",  justifyContent: isSmallScreen ? 'center' : 'flex-start' }}>
            {products()}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Home;
