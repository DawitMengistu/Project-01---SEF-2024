import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors"

const PORT = 3000;

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static('images'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let bookList = [
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_1.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_2.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_3.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_4.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_5.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_1.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_2.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_3.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_4.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_5.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_1.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_2.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_3.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_4.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_5.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_1.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_2.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_3.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_4.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_5.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_1.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_2.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_3.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_4.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_5.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_1.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_2.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_3.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_4.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_5.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_1.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_2.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_3.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_4.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_5.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_1.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_2.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_3.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_4.jpg"
    },
    {
        book_title: "book 1 title",
        book_discription: "book 1 title",
        book_price: "book 1 title",
        book_id: "1",
        src: "http://localhost:3000/image_5.jpg"
    },
]


app.get('/', (req, res) => {
    console.log("someone came here")
    res.send("Hello")
});


app.post('/', (req, res) => {
    console.log("someone came post here", req.body)
    res.json({ name: 'dawit' })
});


app.get("/booklist", (req, res) => {
    res.json(bookList)
})




app.listen(PORT, () => {
    console.log('server running at localhost:' + PORT);
});