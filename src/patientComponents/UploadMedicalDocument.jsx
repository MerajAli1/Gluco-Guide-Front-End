import React, { useEffect, useState } from "react";
import { Button, TextField, Container, Box, List } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BaseURL } from "../apiBaseURL/BaseURL";

const UploadMedicalDocument = () => {
  const [medicalDocument, setMedicalDocument] = useState("");
  const [documents, setDocuments] = useState([]);
  
  const addDocument = async (e) => {
    e.preventDefault();
    if (!medicalDocument) {
      alert("Please select a document to upload");
      return;
    }
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.post(
        `${BaseURL}/uploaddocument`,
        {
          document: medicalDocument,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log("error: ", error);
    }
    console.log(medicalDocument.name);
  };
  const getAllDocuments = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      console.log("token", token);

      const res = await axios.get(`${BaseURL}/getdocuments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.data);
      setDocuments(res.data.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    getAllDocuments();
  }, []);
  return (
    <Container className="mt-5">
      
      <Box
        className="text-center"
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form onSubmit={(e) => addDocument(e)}>
          <h2 className="mb-4">Upload Medical Document</h2>

          <TextField
            onChange={(e) => setMedicalDocument(e.target.files[0])}
            fullWidth
            name="profilePic"
            type="file"
            id="password"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ padding: "10px 20px" }}
          >
            Upload
          </Button>
        </form>
      </Box>
      {/* // Displaying the uploaded documents */}
      <Box
        className="mt-4"
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 className="mb-4">Uploaded Documents</h3>
        <List>
          {documents?.map((e,i) => {
            return (
              <div>
                <h4>Document Name</h4>
                <p>Document Description</p>
                <Button variant="contained" color="primary">
                  Download
                </Button>
              </div>
            );
          })}
        </List>
      </Box>
    </Container>
  );
};

export default UploadMedicalDocument;
