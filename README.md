# 📘 Book API (Node.js + Express)

This is a small project for doing **CRUD** operations (Create, Read, Update, Delete) on books using **Express.js**.  
It uses an **array in memory**, so data is lost when the server restarts.

---

## 🚀 How to Run

1. Open terminal and go to project folder  
2. Run:

```bash
npm install express

npm install
```
3. Then run:
```
node index.js
```
4. Server will start at:
```
http://localhost:3000
```

### 🛠 API Endpoints

✅ GET all books

    GET /books

    Returns all books

✅ Add a new book

    POST /books
```
    Body (JSON):

{
  "title": "Harry Potter",
  "author": "J.K. Rowling"
}
```
✅ Update a book

    PUT /books/:id
```
Body (JSON):

{
  "title": "New Title"
}
```
✅ Delete a book

    DELETE /books/:id

📦 Example Book Format
```
{
  "id": 1,
  "title": "Atomic Habits",
  "author": "James Clear"
}
```
📒 Notes

   This project does not use any database.

   All books are stored in an array.

   Use Postman or REST Client to test it.


