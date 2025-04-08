import { Router } from "express";
import Customer from "../models/Customer.js";

const router = Router();

// Create customer route
router.post("/", async (request, response) => {
  try {
    const newCustomer = new Customer(request.body);

    const data = await newCustomer.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all customers route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}
    console.log("query", request.query);

    const data = await Customer.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single customer by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Customer.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a customer by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Customer.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
