import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseURL } from "../apiBaseURL/BaseURL";
import axios from "axios";

const lowDietarySuggestions = [
  {
    id: 1,
    title: "Increase Salt Intake",
    description: "Add a bit more salt to your meals.",
  },
  {
    id: 2,
    title: "Eat More Fruits",
    description: "Include a variety of fruits in your diet.",
  },
  {
    id: 3,
    title: "Consume Dairy Products",
    description: "Include milk, cheese, and yogurt in your diet.",
  },
  {
    id: 4,
    title: "Stay Hydrated",
    description: "Drink plenty of water throughout the day.",
  },
  {
    id: 5,
    title: "Eat Small, Frequent Meals",
    description: "Have smaller meals more frequently.",
  },
  {
    id: 6,
    title: "Include Lean Proteins",
    description: "Include lean proteins like chicken, fish, and legumes.",
  },
  {
    id: 7,
    title: "Consume Whole Grains",
    description: "Opt for whole grains instead of refined grains.",
  },
  {
    id: 8,
    title: "Add Healthy Fats",
    description: "Incorporate healthy fats like avocados, nuts, and olive oil.",
  },
  {
    id: 9,
    title: "Limit Caffeine",
    description: "Reduce your intake of caffeinated beverages.",
  },
  {
    id: 10,
    title: "Monitor Blood Pressure",
    description: "Regularly check your blood pressure levels.",
  },
];

const highDietarySuggestions = [
  {
    id: 1,
    title: "Reduce Salt Intake",
    description: "Limit the amount of salt in your meals.",
  },
  {
    id: 2,
    title: "Eat More Vegetables",
    description: "Include a variety of vegetables in your diet every day.",
  },
  {
    id: 3,
    title: "Choose Whole Grains",
    description: "Opt for whole grains instead of refined grains.",
  },
  {
    id: 4,
    title: "Limit Sugar Intake",
    description: "Reduce the amount of added sugars in your diet.",
  },
  {
    id: 5,
    title: "Stay Hydrated",
    description: "Drink plenty of water throughout the day.",
  },
  {
    id: 6,
    title: "Eat Lean Proteins",
    description: "Include lean proteins like chicken, fish, and legumes.",
  },
  {
    id: 7,
    title: "Control Portion Sizes",
    description: "Be mindful of portion sizes to avoid overeating.",
  },
  {
    id: 8,
    title: "Include Healthy Fats",
    description: "Incorporate healthy fats like avocados, nuts, and olive oil.",
  },
  {
    id: 9,
    title: "Limit Processed Foods",
    description: "Reduce the consumption of processed and packaged foods.",
  },
  {
    id: 10,
    title: "Eat Regular Meals",
    description: "Maintain a regular eating schedule with balanced meals.",
  },
];

const mediumDietarySuggestions = [
  {
    id: 1,
    title: "Maintain Balanced Diet",
    description: "Ensure your diet includes a balance of all food groups.",
  },
  {
    id: 2,
    title: "Eat More Vegetables",
    description: "Include a variety of vegetables in your diet every day.",
  },
  {
    id: 3,
    title: "Choose Whole Grains",
    description: "Opt for whole grains instead of refined grains.",
  },
  {
    id: 4,
    title: "Limit Sugar Intake",
    description: "Reduce the amount of added sugars in your diet.",
  },
  {
    id: 5,
    title: "Stay Hydrated",
    description: "Drink plenty of water throughout the day.",
  },
  {
    id: 6,
    title: "Eat Lean Proteins",
    description: "Include lean proteins like chicken, fish, and legumes.",
  },
  {
    id: 7,
    title: "Control Portion Sizes",
    description: "Be mindful of portion sizes to avoid overeating.",
  },
  {
    id: 8,
    title: "Include Healthy Fats",
    description: "Incorporate healthy fats like avocados, nuts, and olive oil.",
  },
  {
    id: 9,
    title: "Limit Processed Foods",
    description: "Reduce the consumption of processed and packaged foods.",
  },
  {
    id: 10,
    title: "Enjoy Your Food",
    description: "Take time to enjoy your meals and eat mindfully.",
  },
];

const DietarySuggestion = () => {
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState(
    "No specific dietary suggestions available."
  );
  const [dietarySuggestions, setDietarySuggestions] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const MLModelData = localStorage.getItem("MLModelData");
  useEffect(() => {
    if (MLModelData) {
      const lowerCaseData = MLModelData.toLocaleLowerCase();
      if (lowerCaseData.includes("low")) {
        setDietarySuggestions(lowDietarySuggestions);
        setSuggestions(
          "Your blood pressure is low. Consider increasing your intake of salty foods and staying hydrated."
        );
      } else if (lowerCaseData.includes("high")) {
        setDietarySuggestions(highDietarySuggestions);
        setSuggestions(
          "Your blood pressure is high. Reduce your intake of salty foods and avoid caffeine."
        );
      } else if (lowerCaseData.includes("medium")) {
        setDietarySuggestions(mediumDietarySuggestions);
        setSuggestions(
          "Your blood pressure is at a medium level. Maintain a balanced diet and regular exercise."
        );
      } else {
        setSuggestions("No specific dietary suggestions available.");
      }
    } else {
      setSuggestions("No data available.");
    }
    setLoading(false);
  }, [MLModelData]);

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
        <Typography variant="h4" className="mb-4">
          Dietary Suggestions
        </Typography>
        <Typography variant="body1" className="mb-4">
          {suggestions}
        </Typography>
        <Grid container spacing={3}>
          {dietarySuggestions.map((suggestion) => (
            <Grid item xs={12} sm={6} md={4} key={suggestion.id}>
              <Card style={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {suggestion.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {suggestion.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default DietarySuggestion;
