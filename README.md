npm init -y
npm i express nodemon
npm i mongoose and db connected

cors policy error cors stands for cross origin resource sharing cors is a security mechanism in the browsers that restricts the ability of a web page to make requests to a different domain in fact cors policy is a web security mechanism that prevents unauthorized cross-origin access to a resource or a server when a web page makes a request to a different domain the browser sends a request to the Target server the server will check that whether the request is permitted or not server can check Origins methods and headers and allow or deny the request 

npm i cors


vite used for frontend
npm create vite@latest
then npm i
then 
npm install -D tailwindcss postcss autoprefixer : postcss.config
npx tailwindcss init -p : tailwind config

update index.css by
@tailwind base;
@tailwind components;
@tailwind utilities;

delete app.css

update app.jsx

then in frontend: npm i react-router-dom for BrowserRouter used in main.jsx

create pages folder

run: npm i axios react-icons
/// axios for api calls


npm i notistack for alert msg

deployment process:
npm i dotenv and package.json shift to main folder
insert in main file index.js
const __dirname = path.resolve(); in main folder
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

insert in package.json: "build":"npm install && npm install --prefix frontend && npm run build --prefix frontend"

Steps:

 Create Node.js project from scratch
 Create our first Http Route
 Add MongoDB and mongoose to node js
 Create Book model with mongoose
 Save a new Book with mongoose
 Get All Books with mongoose
 Get One Book by id with mongoose
 Update a Book with mongoose
 Delete a book with mongoose
 Refactor Node js with express router
 CORS policy in Node js and Express js
 Create React project, Vite, Tailwind CSS
 SPA and Add react router dom
 Show Books List in React
 Show Book Details in React
 Create Book in React
 Edit Book in React
 Delete Book in React
 Show Books List as Card
 Make Book Card a single component
 Add Book Modal
 Improve User Experience (UX) with beautiful alert
 Outro
