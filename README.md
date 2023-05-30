# Air_Booking_System_Api

## The API end points of this app are:-

1. **POST** `api/user/register` --> for registering of the user into the application
2. **POST** `api/user/login` --> for login of the user into the application
3. **POST** `api/flights` --> This endpoint will allow users to add new flights to the system.
4. **GET** `api/flights` --> This endpoint will allow users to get all flights available.
5. **GET** `api/flights/:id` --> This endpoint will allow users to get the specific flight of that id.
6. **PATCH** `api/flights/:id` --> This patch request will allow users to update the specific flight of that id.
7. **DELETE** `api/flights/:id` --> This DELETE request will allow users to DELETE the specific flight of that id.
8. **POST** `api/booking` --> This endpoint will allow the user to book flights.
9. **GET** `api/dashboard` --> This point will list all the bookings so far with the user and flight details.