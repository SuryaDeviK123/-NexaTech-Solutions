import { useMemo, useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaUserTie } from "react-icons/fa";
import "./AIGrowthAssistant.css";

const serviceMap = [
  { keywords: ["website", "web", "site", "portal", "frontend", "backend"], service: "Web Development", path: "/web-development", reason: "You mentioned a website or web application, so Web Development is the best fit." },
  { keywords: ["app", "android", "ios", "mobile", "phone"], service: "Mobile Development", path: "/mobile-development", reason: "Your requirement sounds like a mobile application, so Mobile Development is a good match." },
  { keywords: ["cloud", "aws", "azure", "migration", "server"], service: "Cloud Solutions", path: "/cloud-solutions", reason: "Your requirement involves cloud infrastructure or migration, so Cloud Solutions is recommended." },
  { keywords: ["ai", "artificial intelligence", "machine learning", "ml", "chatbot", "agent", "automation"], service: "Artificial Intelligence", path: "/artificial-intelligence", reason: "Your requirement involves AI, automation, or machine learning, so our AI service is the best match." },
  { keywords: ["design", "ui", "ux", "interface", "figma", "experience"], service: "UI / UX Design", path: "/uiux-design", reason: "Your requirement focuses on user experience or interface design, so UI / UX Design is recommended." },
  { keywords: ["marketing", "seo", "social media", "promotion", "ads", "digital"], service: "Digital Marketing", path: "/digital-marketing", reason: "Your requirement is related to online growth and promotion, so Digital Marketing is a good fit." },
];

function getRecommendation(input) {
  const text = input.toLowerCase();
  const match = serviceMap.find(({ keywords }) => keywords.some((word) => text.includes(word)));
  if (match) return { type: "recommendation", text: match.reason, service: match.service, path: match.path };
  return { type: "general", text: "Thanks for sharing. Tell me a little more about what you want to build, improve, automate, or promote." };
}

function AIGrowthAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [step, setStep] = useState("solution");
  const [recommendedService, setRecommendedService] = useState(null);
  const [budget, setBudget] = useState("");
  const [leadMode, setLeadMode] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", company: "", phone: "" });
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I’m Nexa AI. Tell me what your business needs, and I’ll recommend the right NexaTech service." },
    { role: "assistant", text: "What type of solution are you looking for?" },
  ]);

  const latestRecommendation = useMemo(
    () => [...messages].reverse().find((message) => message.service),
    [messages]
  );

  const addMessages = (...newMessages) => setMessages((current) => [...current, ...newMessages]);

  const sendMessage = (event) => {
    event?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    if (step === "solution") {
      addMessages({ role: "user", text: trimmed }, { role: "assistant", text: "What is your main requirement?" });
      setStep("requirement");
    } else if (step === "requirement") {
      const recommendation = getRecommendation(trimmed);
      setRecommendedService(recommendation.service ? recommendation : null);
      addMessages(
        { role: "user", text: trimmed },
        { role: "assistant", ...recommendation },
        { role: "assistant", text: "What is your approximate budget?" }
      );
      setStep("budget");
    } else if (step === "budget") {
      setBudget(trimmed);
      addMessages(
        { role: "user", text: trimmed },
        { role: "assistant", text: `Thanks! I’ve noted your approximate budget as ${trimmed}.` },
        { role: "assistant", text: "Would you like our team to contact you?" }
      );
      setStep("contact");
    } else if (step === "contact") {
      const yes = /\b(yes|yeah|yep|sure|okay|ok|interested|contact)\b/i.test(trimmed);
      addMessages({ role: "user", text: trimmed });
      if (yes) {
        setLeadMode(true);
        addMessages({ role: "assistant", text: "Great! Please provide your name, email, phone number, and company name." });
      } else {
        addMessages({ role: "assistant", text: "No problem! You can explore our services anytime. If you need help later, just tell me what you want to build." });
        setStep("done");
      }
    } else {
      const recommendation = getRecommendation(trimmed);
      addMessages({ role: "user", text: trimmed }, { role: "assistant", ...recommendation });
    }

    setInput("");
  };

  const saveLead = (event) => {
    event.preventDefault();
    if (!lead.name.trim() || !lead.email.trim() || !lead.phone.trim()) return;

    const existing = JSON.parse(localStorage.getItem("nexatech_ai_leads") || "[]");
    existing.push({
      ...lead,
      recommendedService: latestRecommendation?.service || recommendedService?.service || "Not specified",
      budget: budget || "Not specified",
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem("nexatech_ai_leads", JSON.stringify(existing));

    setMessages((current) => [...current, { role: "assistant", text: "Thanks! Your details have been saved as a qualified lead. Our team can follow up with you." }]);
    setLead({ name: "", email: "", company: "", phone: "" });
    setLeadMode(false);
    setStep("done");
  };

  const restart = () => {
    setStep("solution");
    setRecommendedService(null);
    setBudget("");
    setLeadMode(false);
    setMessages([
      { role: "assistant", text: "Hi! I’m Nexa AI. Tell me what your business needs, and I’ll recommend the right NexaTech service." },
      { role: "assistant", text: "What type of solution are you looking for?" },
    ]);
  };

  return (
    <>
      <button className="ai-float-button" onClick={() => setOpen(true)} aria-label="Open Nexa AI Assistant">
        <FaRobot /><span>Nexa AI</span>
      </button>

      {open && (
        <div className="ai-panel" role="dialog" aria-label="Nexa AI Growth Assistant">
          <div className="ai-header">
            <div><strong><FaRobot /> Nexa AI Growth Assistant</strong><small>Service discovery & lead qualification</small></div>
            <button onClick={() => setOpen(false)} aria-label="Close"><FaTimes /></button>
          </div>

          <div className="ai-messages">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`ai-message ${message.role}`}>
                <span>{message.role === "assistant" ? <FaRobot /> : <FaUserTie />}</span>
                <div>
                  <p>{message.text}</p>
                  {message.service && <a href={message.path} className="ai-service-link">Explore {message.service}</a>}
                </div>
              </div>
            ))}
          </div>

          {leadMode ? (
            <form className="ai-lead-form" onSubmit={saveLead}>
              <h4>Talk to our team</h4>
              <input value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} placeholder="Your name *" required />
              <input type="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} placeholder="Email *" required />
              <input type="tel" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="Phone number *" required />
              <input value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} placeholder="Company (optional)" />
              <button type="submit">Save Lead</button>
            </form>
          ) : (
            <>
              <form className="ai-input" onSubmit={sendMessage}>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={step === "budget" ? "e.g. ₹1 lakh" : "Type your answer..."} />
                <button type="submit" aria-label="Send"><FaPaperPlane /></button>
              </form>
              <div className="ai-actions">
                <button className="ai-lead-button" onClick={() => { setLeadMode(true); addMessages({ role: "assistant", text: "Sure! Please provide your name, email, phone number, and company name." }); }}>Interested? Talk to our team</button>
                <button className="ai-restart-button" onClick={restart}>Start Over</button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AIGrowthAssistant;
