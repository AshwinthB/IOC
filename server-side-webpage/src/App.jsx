import Header from './components/Header';
import Footer from './components/Footer';
import TopicCard from './components/TopicCard';

const topics = [
  {
    title: "1. What is Server-Side Engineering?",
    content: "It involves handling backend operations like processing requests, connecting databases, authentication, and rendering server responses."
  },
  {
    title: "2. Server vs Client Side",
    content: "Client-side is about UI/UX; server-side is about logic, data, security, and performance."
  },
  {
    title: "3. Server-Side Technologies",
    content: "Popular tech includes Node.js, Express.js, Django, Flask, Ruby on Rails."
  },
  {
    title: "4. REST APIs & Routing",
    content: "APIs allow communication between client and server. Routes handle endpoints like /login, /getUser etc."
  },
  {
    title: "5. Databases",
    content: "MySQL, MongoDB are used for storing and retrieving server-side data."
  },
  {
    title: "6. Authentication",
    content: "JWT (JSON Web Token) is used for secure user identity validation."
  },
  {
    title: "7. Middleware & Security",
    content: "Middleware like body-parser, helmet helps with data parsing and server security."
  },
  {
    title: "8. Deployment Basics",
    content: "Apps can be deployed using platforms like Heroku, Vercel, and Netlify with CI/CD integrations."
  }
];

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      <Header />
      <main className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics.map((t, idx) => (
          <TopicCard key={idx} title={t.title} content={t.content} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
