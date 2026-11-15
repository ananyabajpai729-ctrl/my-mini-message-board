import express from "express";
const router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', (req, res) =>{
  res.render("index", {title: "Mini Message Board", messages: messages})
})

router.get('/new', (req, res) => {
  res.render("form")
})

router.post('/new', (req, res) =>{
  const messageText = req.body.messageText;
  const author = req.body.author;

  messages.push({text: messageText, user: author, added: new Date()});

  res.redirect('/')
})

router.get('/message/:id', (req, res)=>{
  const id = req.params.id;
  const message = messages[id];
  res.render("messageInfo", {message: message})
})
export default router;