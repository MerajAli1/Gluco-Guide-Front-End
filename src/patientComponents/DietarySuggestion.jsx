import React from 'react';
import { Container, Box, Typography, Card, CardContent, Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const dietarySuggestions = [
  { id: 1, title: 'Eat More Vegetables', description: 'Include a variety of vegetables in your diet every day.' },
  { id: 2, title: 'Choose Whole Grains', description: 'Opt for whole grains instead of refined grains.' },
  { id: 3, title: 'Limit Sugar Intake', description: 'Reduce the amount of added sugars in your diet.' },
  { id: 4, title: 'Stay Hydrated', description: 'Drink plenty of water throughout the day.' },
  { id: 5, title: 'Eat Lean Proteins', description: 'Include lean proteins like chicken, fish, and legumes.' },
  { id: 6, title: 'Control Portion Sizes', description: 'Be mindful of portion sizes to avoid overeating.' },
  { id: 7, title: 'Include Healthy Fats', description: 'Incorporate healthy fats like avocados, nuts, and olive oil.' },
  { id: 8, title: 'Limit Processed Foods', description: 'Reduce the consumption of processed and packaged foods.' },
  { id: 9, title: 'Eat Regular Meals', description: 'Maintain a regular eating schedule with balanced meals.' },
  { id: 10, title: 'Enjoy Your Food', description: 'Take time to enjoy your meals and eat mindfully.' },
];

const DietarySuggestion = () => {
  return (
    <Container className="mt-5">
      <Box
        className="text-center"
        style={{
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" className="mb-4">Dietary Suggestions</Typography>
        <Grid container spacing={3}>
          {dietarySuggestions.map((suggestion) => (
            <Grid item xs={12} sm={6} md={4} key={suggestion.id}>
              <Card style={{ height: '100%' }}>
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