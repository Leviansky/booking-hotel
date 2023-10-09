const route = require("express").Router();

route.get("/api", (req, res) => {
  res.status(200).json({
    message: `Home page`,
  });
});

const customerRoute = require("./customer");
// const hotelRoutes = require("./hotel");
// const roomRoutes = require("./room");
const bookingRoutes = require("./booking")
const userRoutes = require('./user')

route.use("/api/customers", customerRoute);
// route.use("/api/hotels", hotelRoutes);
// route.use("/api/rooms", roomRoutes);
route.use("/api/books", bookingRoutes)
route.use('/api/users', userRoutes)

module.exports = route;
