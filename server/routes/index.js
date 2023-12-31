const route = require("express").Router();

route.get("/api", (req, res) => {
  res.status(200).json({
    message: `Home page`,
  });
});

const customerRoute = require("./customer");
const hotelRoutes = require("./hotel");
const roomRoutes = require("./room");
const bookingRoute = require("./booking")

route.use("/api/customers", customerRoute);
route.use("/api/hotels", hotelRoutes);
route.use("/api", roomRoutes);
route.use("/api", bookingRoute)

module.exports = route;
