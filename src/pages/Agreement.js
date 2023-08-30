import React, { useState } from "react";
import { Container, Box, Card, CardContent, Typography, Checkbox, Button } from "@mui/material";
import Foot from "../components/Foot";

const Agreement = () => {
  const [agree, setAgree] = useState(false);
  const checkboxHandler = () => {
    setAgree(prev => !prev);
  };
  const btnHandler = () => {
    window.location = "/Register";
  };

  return (
    <>
      <Container>
        <Box my={4}>
          <Card>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                Agreement
              </Typography>
              <Typography paragraph>
                Suandok Hospital นี้ ทำขึ้นระหว่างโรงพยาบาลมหาราชนครเชียงใหม่
                ซึ่งต่อไปนี้เรียกว่า "ผู้ให้บริการ" ฝ่ายหนึ่ง กับ ผู้ใช้บริการ
                ซึ่งต่อไปนี้เรียกว่า "ผู้ใช้บริการ" อีกฝ่ายหนึ่ง
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box mb={2}>
                  <Checkbox 
                    color="primary"
                    id="agree"
                    checked={agree}
                    onChange={checkboxHandler}
                  />
                  <label htmlFor="agree">
                    I agree to <b>terms and conditions</b>
                  </label>
                </Box>
                <Button 
                  variant="contained"
                  color="primary"
                  disabled={!agree}
                  onClick={btnHandler}
                >
                  Continue
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box my={4}></Box>
      </Container>
      <Foot />
    </>
  );
};

export default Agreement;
