import { Button, TextField, Input } from "@mui/material";
import {Link} from "react-router-dom";
import React, { useState } from "react";
import {
  StyledMainInputDiv,
  StyledInputDiv,
  StyledInputH1,
} from "../components/Styled";

const CardInput = (props) => {
    const {inputAdd, setInputAdd} = props
  const [Input, setInput] = useState({
    id: Math.floor(Math.random() * 1000),
    english: "",
    turkish: "",
    example: "",
    image: "",
  });

  const handleChangeEnglish = (e) => {
    setInput({ ...Input, english: e.target.value });
  };

  const handleChangeTurkish = (e) => {
    setInput({ ...Input, turkish: e.target.value });
  };
  const handleChangeExample = (e) => {
    setInput({ ...Input, example: e.target.value });
  };
  const handleImageSelect = (e) => {
       const file = e.target.files[0];
         const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setInput({ ...Input, image: reader.result });
            }
    };

    const CardAdd = () => {
        setInputAdd([...inputAdd, Input])
        setInput({
            id: Math.floor(Math.random() * 1000),
            english: "",
            turkish: "",
            example: "",
            image: "",
            })
    }


  return (
    <StyledMainInputDiv>
      <div>
        <StyledInputH1>English Cards</StyledInputH1>
      </div>
      <div style={{width:"100%"}}>
      <Link to="/">
        <Button fullWidth={true} color="success" variant="contained">
          Kart Tarafı
        </Button>
      </Link>
      </div>
      <StyledInputDiv>
        <TextField
          id="outlined-basic"
          label="English"
          variant="outlined"
          value={Input.english}
          onChange={handleChangeEnglish}
        />
        <TextField
          id="outlined-basic"
          label="Turkish"
          variant="outlined"
          value={Input.turkish}
            onChange={handleChangeTurkish}
        />
        <TextField
          id="outlined-basic"
          label="Example"
          variant="outlined"
          value={Input.example}
            onChange={handleChangeExample}
        />
        <Button component="label" variant="outlined">
          Resim Seç
          <input onChange={handleImageSelect}  type="file" style={{ display: "none" }} />
        </Button>
      </StyledInputDiv>
      <Button onClick={CardAdd} fullWidth={true} variant="outlined">
        EKLE
      </Button>
    </StyledMainInputDiv>
  );
};

export default CardInput;
