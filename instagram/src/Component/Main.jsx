import React, { useState } from "react";
import { addComment, toggleLike } from "../Store/action";
import InstaCard from "./InstaCard";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { Button, MobileStepper, useTheme } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const Main = () => {
  const [activeStep, setActiveStep] = useState(0);

  const { images, comment } = useSelector((state) => ({
    images: state.image,
    comment: state.comment,
  }));
  const dispatch = useDispatch();
    const theme = useTheme();
    
    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
    
    const handleComment = (id, text) => {
    const payload = {
      imageId: id,
      id: uuid(),
      text: text,
    };
    dispatch(addComment(payload));
  };


  const handleLike = (id) => {
    dispatch(toggleLike(id));
  };

    
  return (
    <div>
          <InstaCard  {...images[activeStep]}
            comments={comment.filter(
          (cmt) => cmt.imageId === images[activeStep].id )}
        handleLike={handleLike} handleComment={handleComment} />

        <MobileStepper
        style={{ width: 230, margin: "0 auto"  }}
        steps={images.length}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === images.length - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />

    </div>
  );
};

export default Main;
