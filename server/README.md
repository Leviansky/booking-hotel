# MODEL 

```bash
    npx sequelize-cli model:generate --name Hotel --attributes address:string,total_room:integer

    npx sequelize-cli model:generate --name Room --attributes price:integer,status:string,HotelId:integer

    npx sequelize-cli model:generate --name Customer --attributes username:string,password:string,email:string,name:string,address:string,phone:integer,role:string

    npx sequelize-cli model:generate --name Booking --attributes dataCheckin:DATE,dataCheckout:DATE,total_customer:integer,status:string,CustomerId:integer,HotelId:integer

```