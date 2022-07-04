import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";

// styling for preview image from dropzone
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  maxWidth: 400,
  flexWrap: "wrap",
};

const thumb = {
  position: "relative",
  display: "flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const DropzonePic = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [myFiles, setMyFiles] = useState([]);

  //   accept file then preview it
  const onDrop = useCallback(
    (acceptedFiles) => {
      setMyFiles(
        [...myFiles, ...acceptedFiles],
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [myFiles]
  );

  //   accept file when drop
  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    maxFiles: 4,
    accept: {
      "image/*": [],
    },
    onDrop,
  });

  //   remove file
  const removeFile = (file) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  //   To show preview image
  const files = myFiles.map((file) => (
    <div key={file.path}>
      <div style={thumb} key={file.path}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
            alt="preview"
          />
        </div>
      </div>
      <Button
        onClick={removeFile(file)}
        variant="standard"
        sx={{
          left: 50,
          bottom: 100,
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <CancelIcon color={"error"} />
      </Button>
    </div>
  ));

  // for rejected if not image
  const rejectedFilesItems = fileRejections.map((file) => (
    <li key={file.path}>
      <span style={{ color: "red" }}>
        <strong>
          (4 files are the maximum number of files you can drop here)
        </strong>
      </span>
    </li>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => myFiles.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [myFiles]);

  return (
    <section className="container">
      {myFiles.length < 4 && (
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <Box
            width={isMobile ? "4rem" : "6rem"}
            height={isMobile ? "4rem" : "6rem"}
            sx={{
              borderRadius: "10px",
              color: "black",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              mb: 1,
              border: "2px dashed #ccc",
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <AddIcon sx={{ fontSize: "26px", color: "#8A8A8A" }} />
          </Box>
        </div>
      )}
      <aside>
        <div style={thumbsContainer}>{files}</div>
        <div>{rejectedFilesItems}</div>
      </aside>
    </section>
  );
};

export default DropzonePic;
