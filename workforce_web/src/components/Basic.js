import { Box, Chip, Grid, Link, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";
import { useDropzone } from "react-dropzone";

function Basic(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  let { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const handleDelete = (fileToDelete) => {
    acceptedFiles = acceptedFiles.filter((file) => file !== fileToDelete);
  };

  let fileList = acceptedFiles.map((file, index) => (
    <Chip
      key={index}
      label={file.path}
      onDelete={() => handleDelete(file)}
      style={{ marginRight: "8px", marginBottom: "8px" }}
    />
  ));

  return (
    <Box className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <Grid item>
          <Item
            sx={{
              borderStyle: "dashed",
              border: "2px dashed #0C75EB",
              borderRadius: "12px",
              padding: "20px",
              backgroundColor: "#F0F7FF",
            }}
          >
            <input {...getInputProps()} />
            <Typography>
              <span style={{ fontWeight: "bold" }}>
                Drag and Drop Timesheets{" "}
              </span>
              or <Link>Click Here</Link>{" "}
              <span style={{ fontWeight: "bold" }}>To Upload</span>
            </Typography>
            <Typography>Document size 25MB, format - JPG, PNG</Typography>
          </Item>
        </Grid>
      </div>

      <Grid item marginTop={2}>
        <Item>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            Uploaded Documents
          </Typography>
          <Stack spacing={1} direction="row">
            {fileList}
          </Stack>
        </Item>
      </Grid>
    </Box>
  );
}

export default Basic;
