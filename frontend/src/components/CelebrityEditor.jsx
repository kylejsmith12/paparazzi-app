import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Grid,
  CardMedia,
} from "@mui/material";
import PropTypes from "prop-types"; // Add this import statement

function CelebrityEditor({ selectedCelebrity }) {
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [dob, setDob] = useState("");
  const [imageSrc, setImageSrc] = useState(null);

  // Define arrays for dynamic menu items
  const categories = ["Actor", "Singer", "Athlete"];
  const countries = ["USA", "UK", "Canada"];
  const genders = ["Male", "Female", "Other"];
  const statuses = ["Single", "Married", "Complicated"];

  useEffect(() => {
    setCategory("");
    setCountry("");
    setGender("");
    setName("");
    setStatus("");
    setDob("");
  }, [selectedCelebrity]);

  useEffect(() => {
    const loadImage = async () => {
      const fileExtensions = ["jpg", "jpeg", "webp"];
      if (selectedCelebrity) {
        for (const ext of fileExtensions) {
          try {
            const { default: image } = await import(
              `../assets/${selectedCelebrity.toLowerCase()}.${ext}`
            );
            setImageSrc(image);
            return; // Stop searching once an image is found
          } catch (error) {
            // Image not found for this extension, try next extension
          }
        }
        console.error(`Image for ${selectedCelebrity} not found`);
      }
    };

    loadImage();
  }, [selectedCelebrity]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleSubmit = () => {
    const payLoad = {
      test1: category,
      test2: country,
      test3: gender,
      test4: name,
      test5: status,
      test6: dob,
    };

    console.log(payLoad);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      {imageSrc && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={300}
          style={{ paddingBottom: "20px" }}
        >
          <CardMedia
            component="img"
            image={imageSrc}
            alt={selectedCelebrity}
            style={{ maxWidth: 300, maxHeight: 300 }}
          />
        </Box>
      )}
      {selectedCelebrity && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={category}
                onChange={handleCategoryChange}
                label="Category"
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country"
                value={country}
                onChange={handleCountryChange}
                label="Country"
              >
                {countries.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                value={gender}
                onChange={handleGenderChange}
                label="Gender"
              >
                {genders.map((gen) => (
                  <MenuItem key={gen} value={gen}>
                    {gen}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="name"
              label="Name"
              fullWidth
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                value={status}
                onChange={handleStatusChange}
                label="Status"
              >
                {statuses.map((stat) => (
                  <MenuItem key={stat} value={stat}>
                    {stat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="dob"
              label="Date of Birth"
              type="date"
              value={dob}
              onChange={handleDobChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

// Add prop type validation for selectedCelebrity
CelebrityEditor.propTypes = {
  selectedCelebrity: PropTypes.string.isRequired,
};

export default CelebrityEditor;
