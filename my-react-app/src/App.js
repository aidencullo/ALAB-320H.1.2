// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Blog</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <header>
//         <h1>My Blog</h1>
//         <h2>Your Daily Dose of Content</h2>
//         <nav aria-label="Main Navigation" role="navigation">
//             <ul>
//                 <li><a href="#home">Home</a></li>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#blog">Blog</a></li>
//                 <li><a href="#contact">Contact</a></li>
//             </ul>
//         </nav>
//     </header>
//     <main>
//         <article>
//             <h2>Blog Post Title 1</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
//             <a href="#continue" class="continue">continues...</a>
//         </article>
//         <article>
//             <h2>Blog Post Title 2</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
//             <a href="#continue" class="continue">continues...</a>
//         </article>
//     </main>
//     <footer>
//         <nav aria-label="Footer Navigation" role="navigation">
//             <ul>
//                 <li><a href="#privacy">Privacy Policy</a></li>
//                 <li><a href="#terms">Terms of Service</a></li>
//                 <li><a href="#contact">Contact</a></li>
//             </ul>
//         </nav>
//         <p>&copy; 2024 My Blog</p>
//     </footer>
// </body>
// </html>


import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
      <Header />
      <Main />
      <Footer />
      </div>
  );
}

export default App;
