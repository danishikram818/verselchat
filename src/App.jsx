import { useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Form,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";

export default function App() {
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState("");

  const user = { id: 1, username: "Ali" };

  const chats = [
    { id: 1, name: "Teachers Group" },
    { id: 2, name: "Private Chat - Ahmed" },
    { id: 3, name: "Study Circle" },
  ];

  const messages = {
    1: [
      { sender: "Ali", text: "Welcome everyone!" },
      { sender: "Ahmed", text: "Thanks, glad to join!" },
    ],
    2: [
      { sender: "Ali", text: "Hey Ahmed!" },
      { sender: "Ahmed", text: "Hi Ali, how are you?" },
    ],
    3: [
      { sender: "Ali", text: "Let's discuss our project today." },
      { sender: "Sara", text: "Sure, I'm ready." },
    ],
  };

  const handleSend = () => {
    if (!message.trim()) return;
    alert(`Message Sent: "${message}"`);
    setMessage("");
  };

  return (
    <Container fluid className="vh-100 bg-light">
      <Row className="h-100">
        {/* Sidebar */}
        <Col md={3} className="sidebar p-3 d-flex flex-column">
          <h4>💬 Chat App</h4>
          <ListGroup variant="flush">
            {chats.map((chat) => (
              <ListGroup.Item
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                action
                className={`${
                  activeChat === chat.id ? "bg-primary text-white" : ""
                }`}
              >
                {chat.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="mt-auto text-center small text-secondary">
            Logged in as <strong>{user.username}</strong>
          </div>
        </Col>

        {/* Chat Window */}
        <Col md={9} className="p-0 d-flex flex-column">
          {activeChat ? (
            <>
              {/* Chat Header */}
              <Card className="rounded-0 border-0 border-bottom shadow-sm">
                <Card.Body className="py-2 d-flex align-items-center justify-content-between">
                  <h5 className="m-0 text-primary">
                    {chats.find((c) => c.id === activeChat)?.name}
                  </h5>
                  <span className="text-muted small">Online</span>
                </Card.Body>
              </Card>

              {/* Message Area */}
              <div className="flex-grow-1 overflow-auto p-3 bg-white">
                {(messages[activeChat] || []).map((msg, idx) => (
                  <div
                    key={idx}
                    className={`d-flex mb-2 ${
                      msg.sender === user.username
                        ? "justify-content-end"
                        : "justify-content-start"
                    } fade-in`}
                  >
                    <div
                      className={`bubble ${
                        msg.sender === user.username ? "self" : "other"
                      }`}
                    >
                      <div className="small fw-bold mb-1">{msg.sender}</div>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-top p-3 bg-light">
                <InputGroup>
                  <Form.Control
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button variant="primary" onClick={handleSend}>
                    Send
                  </Button>
                </InputGroup>
              </div>
            </>
          ) : (
            <div className="d-flex align-items-center justify-content-center flex-grow-1 placeholder">
              Select a chat to start messaging
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
