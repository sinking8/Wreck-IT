import React from 'react';
import { Grid, GridItem, Flex } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Navbar from './navbar';
import GoogleMap from './map';
import Footer from './footer';

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Grid>
        <GridItem colStart={1} colEnd={2} p={'40px'}>
          <GoogleMap />
        </GridItem>
        <GridItem colStart={1} colEnd={2} mt={'-80px'}>
          <Wreckinfo />
        </GridItem>
      </Grid>
      <Flex
        style={{
          position: 'absolute',
          marginTop: '900px',
          marginLeft: '1px',
        }}
        className="flex"
      >
        <Footer />
      </Flex>
    </>
  );
};
