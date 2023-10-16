# MODEL 

```bash
    npx sequelize-cli model:generate --name Hotel --attributes name:string,image:string,address:string,description:string,total_room:integer

    npx sequelize-cli model:generate --name Room --attributes roomNumbers:integer,price:integer,status:string,HotelId:integer

    npx sequelize-cli model:generate --name Customer --attributes username:string,password:string,email:string,name:string,avatar:string,address:string,phone:string,role:string

    npx sequelize-cli model:generate --name Booking --attributes dataCheckin:DATE,dataCheckout:DATE,total_customer:integer,status:string,CustomerId:integer,HotelId:integer,RoomId:integer

```