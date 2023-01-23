# wishBook

## About
wishbook is a project that lists your top books you would like to read

## How to run
1. Clone this repository
2. Install all dependencies
3. Create .env file (check .env.example)
4. Run project

```bash
npm start
```
## Documentation

#### GET/books
Response: 
```
[
  {
    "id": 10,
    "book": "sobre a brevidade da vida",
    "isRead": false,
    "imgBook": "https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg",
    "createdAt": "2023-01-23T04:39:54.647Z"
  }
 ]
```
--------
#### POST/books
```
body
{
  "book":"Sobre a brevidade da vida",
  "imgBook":"https://m.media-amazon.com/images/I/81TNzkUcNzL.jpg"
}
```
---
#### PUT/isread/:id
Response: 
```
Status: 201 Created
```

#### DELETE/deletebook/:id
Response:
```
{
  "message": "livro deletado."
}
```
