import './ChatDashboard.css';
import { FaCheckCircle, FaCircle, FaPaperclip, FaMicrophone, FaPaperPlane } from 'react-icons/fa';

const ChatDashboard = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <h1 className="title">Chat</h1>

        <section className="direct-messages">
          <button className="btn new-chat sidebar-new-chat">+ New Chat</button>
          <div className="dm-item">
            <img
              className="sidebar-profile-pic"
              src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
              alt="Narmeline"
            />
            <span className="dm-name">Bob</span>
            <FaCircle className="online-icon" />
          </div>
          <div className="dm-item">
            <img
              className="sidebar-profile-pic"
              src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
              alt="Now Sine"
            />
            <span className="dm-name">Zoe</span>
            <FaCheckCircle className="checked-icon" />
          </div>
        </section>

        <section className="groups">
          <h2>My Chat Groups</h2>
          <ul className="group-list">
            <li>🧑‍🔬 Physics Group</li>
            <li>
              ⚗️ Chemistry Groups <span className="group-badge">3</span>
            </li>
            <li>🧬 Biology Groups</li>
          </ul>
          <div className="group-actions">
            <div className="action-item">➕ Create Group</div>
            <div className="action-item">📢 Broadcast Message</div>
          </div>
        </section>
      </aside>
      
      <main className="chat-main">
        

        <header className="chat-header">
          <section className="header-top-buttons">
          <button className="header-btn ">Student's</button>
          <button className="header-btn">Teacher's</button>
          <button className="header-btn active">Chatbot</button>
          <button className="header-btn">My Groups</button>
        </section>

          <input className="search" type="text" placeholder="Search..." />
          <div className="menu-btn">⋯</div>
        </header>

        <section className="chat-content">
          <div className="messages">
            <div className="message-row received">
              <img
                className="profile-pic"
                src="https://cdn-icons-png.flaticon.com/512/1998/1998614.png"
                alt="Chatbot"
              />
              <div className="message">
                Hello, here's the practice questions!
                <span className="timestamp">10:35 AM</span>
              </div>
            </div>

            <div className="message-row sent">
              <div className="message">
                Thank you!
                <span className="timestamp">10:35 AM</span>
              </div>
              <img
                className="profile-pic"
                src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                alt="You"
              />
            </div>

            <div className="file-preview">
              <div className="pdf-icon">PDF</div>
              <div className="file-name">Practice_Question.pdf</div>
              <div className="file-size">2.5 MB</div>
            </div>
          </div>
        </section>

        <footer className="chat-input-area">
          <div className="typing-indicator">...typing</div>
          <textarea
            className="chat-input"
            placeholder="Type a message....."
            rows={1}
          />
          <div className="input-icons">
            <FaPaperclip className="icon" />
            <FaMicrophone className="icon" />
            <button className="send-btn">
              <FaPaperPlane />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ChatDashboard;
