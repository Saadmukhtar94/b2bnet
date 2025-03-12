import React from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
export const metadata = {
  title: "B2BNet - Chat",
  description: "B2BNet - Business Networking Platform",
  icons: {
    icon: "/images/logo.png",
  },
};
export default function page() {
  return (
    <div>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-lg-9">
            {/* Chat Container */}
            <div className="chat-container mb-4">
              {/* Chat Sidebar */}
              <div className="chat-sidebar">
                <div className="chat-sidebar-header">
                  <h5 className="mb-0">Messages</h5>
                  <div className="chat-actions">
                    <button
                      className="btn btn-icon"
                      data-bs-toggle="tooltip"
                      title="New Message">
                      <i className="fas fa-edit" />
                    </button>
                    <button
                      className="btn btn-icon"
                      data-bs-toggle="tooltip"
                      title="More Options">
                      <i className="fas fa-ellipsis-h" />
                    </button>
                  </div>
                </div>
                <div className="chat-search">
                  <div className="input-group">
                    <span className="input-group-text bg-transparent border-end-0">
                      <i className="fas fa-search" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0"
                      placeholder="Search messages"
                    />
                  </div>
                </div>
                <div className="chat-filter">
                  <button className="btn btn-sm btn-filter active">All</button>
                  <button className="btn btn-sm btn-filter">Unread</button>
                  <button className="btn btn-sm btn-filter">Business</button>
                  <button className="btn btn-sm btn-filter">Individual</button>
                </div>
                <div className="chat-list">
                  {/* Active Chat */}
                  <div className="chat-item active">
                    <div className="chat-avatar">
                      <Image
                        width={4848}
                        height={4848}
                        src="/images/dp.png"
                        alt="New West End Company"
                        className="chat-img"
                      />
                      <span className="status-indicator online" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-name">New West End Company</div>
                      <div className="chat-last-message">
                        Thanks for reaching out! We&apos;d be happy to discuss
                        potential collaboration opportunities.
                      </div>
                      <div className="chat-meta">
                        <span className="chat-time">10:42 AM</span>
                      </div>
                    </div>
                  </div>
                  {/* Unread Chat */}
                  <div className="chat-item unread">
                    <div className="chat-avatar">
                      <Image
                        width={48}
                        height={48}
                        src="/images/dp.png"
                        alt="Sarah Johnson"
                        className="chat-img"
                      />
                      <span className="status-indicator online" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-name">Sarah Johnson</div>
                      <div className="chat-last-message">
                        Hi there! I saw your business profile and I&apos;m interested
                        in your services.
                      </div>
                      <div className="chat-meta">
                        <span className="chat-time">Yesterday</span>
                        <span className="unread-count">2</span>
                      </div>
                    </div>
                  </div>
                  {/* Regular Chat */}
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <Image
                        width={4848}
                        height={4848}
                        src="/images/dp.png"
                        alt="Tech Solutions Ltd"
                        className="chat-img"
                      />
                      <span className="status-indicator offline" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-name">Tech Solutions Ltd</div>
                      <div className="chat-last-message">
                        Let&apos;s schedule a meeting next week to discuss the
                        project details.
                      </div>
                      <div className="chat-meta">
                        <span className="chat-time">Mon</span>
                      </div>
                    </div>
                  </div>
                  {/* Regular Chat */}
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <Image
                        width={48}
                        height={48}
                        src="/images/dp.png"
                        alt="Michael Chen"
                        className="chat-img"
                      />
                      <span className="status-indicator away" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-name">Michael Chen</div>
                      <div className="chat-last-message">
                        I&apos;ve sent you the proposal. Let me know what you think.
                      </div>
                      <div className="chat-meta">
                        <span className="chat-time">Sun</span>
                      </div>
                    </div>
                  </div>
                  {/* Regular Chat */}
                  <div className="chat-item">
                    <div className="chat-avatar">
                      <Image
                        width={48}
                        height={48}
                        src="/images/business.png"
                        alt="Creative Studios"
                        className="chat-img"
                      />
                      <span className="status-indicator online" />
                    </div>
                    <div className="chat-details">
                      <div className="chat-name">Creative Studios</div>
                      <div className="chat-last-message">
                        The design mockups are ready for review. I&apos;ve attached
                        them to this message.
                      </div>
                      <div className="chat-meta">
                        <span className="chat-time">Fri</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Chat Main */}
              <div className="chat-main">
                <div className="chat-header">
                  <button
                    className="btn btn-icon d-lg-none me-2"
                    id="toggleChatSidebar">
                    <i className="fas fa-bars" />
                  </button>
                  <div className="d-flex align-items-center">
                    <div className="chat-avatar me-3">
                      <Image
                        width={48}
                        height={48}
                        src="/images/dp.png"
                        alt="New West End Company"
                        className="chat-img"
                      />
                      <span className="status-indicator online" />
                    </div>
                    <div>
                      <div className="chat-name">New West End Company</div>
                      <div className="chat-status">Online</div>
                    </div>
                  </div>
                  <div className="chat-actions">
                    <button
                      className="btn btn-icon"
                      data-bs-toggle="tooltip"
                      title="Voice Call">
                      <i className="fas fa-phone" />
                    </button>
                    <button
                      className="btn btn-icon"
                      data-bs-toggle="tooltip"
                      title="Video Call">
                      <i className="fas fa-video" />
                    </button>
                    <button
                      className="btn btn-icon"
                      id="toggleChatInfo"
                      data-bs-toggle="tooltip"
                      title="Info">
                      <i className="fas fa-info-circle" />
                    </button>
                  </div>
                </div>
                <div className="chat-messages">
                  {/* Date Separator */}
                  <div className="message-date-separator">
                    <span>Today</span>
                  </div>
                  {/* Received Message */}
                  <div className="message received">
                    <div className="message-avatar">
                      <Image
                        width={36363636}
                        height={36363636}
                        src="/images/dp.png"
                        alt="New West End Company"
                      />
                    </div>
                    <div className="message-content">
                      <div className="message-bubble">
                        <div className="message-text">
                          Hello! Thank you for connecting with us. How can we
                          help you today?
                        </div>
                      </div>
                      <div className="message-info">
                        <span className="message-time">09:30 AM</span>
                      </div>
                    </div>
                  </div>
                  {/* Sent Message */}
                  <div className="message sent">
                    <div className="message-content">
                      <div className="message-bubble">
                        <div className="message-text">
                          Hi there! I&apos;m interested in learning more about your
                          upcoming events in the West End area. Do you have any
                          business networking events planned?
                        </div>
                      </div>
                      <div className="message-info">
                        <span className="message-time">09:45 AM</span>
                        <span className="message-status">
                          <i className="fas fa-check-double" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Received Message with File */}
                  <div className="message received">
                    <div className="message-avatar">
                      <Image
                        width={363636}
                        height={363636}
                        src="/images/dp.png"
                        alt="New West End Company"
                      />
                    </div>
                    <div className="message-content">
                      <div className="message-bubble">
                        <div className="message-text">
                          Absolutely! We have several networking events coming
                          up. Here&apos;s our events calendar for the next quarter:
                        </div>
                        <div className="message-file">
                          <div className="file-preview pdf">
                            <i className="fas fa-file-pdf" />
                            <span>WestEnd_Events_2024.pdf</span>
                          </div>
                          <div className="file-info">
                            <span>2.4 MB</span>
                            <button className="btn btn-sm btn-download">
                              <i className="fas fa-download" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="message-info">
                        <span className="message-time">10:15 AM</span>
                      </div>
                    </div>
                  </div>
                  {/* Received Message */}
                  <div className="message received">
                    <div className="message-avatar">
                      <Image
                        width={3636}
                        height={3636}
                        src="/images/dp.png"
                        alt="New West End Company"
                      />
                    </div>
                    <div className="message-content">
                      <div className="message-bubble">
                        <div className="message-text">
                          Our next major networking event is on June 15th at The
                          Landmark Hotel. It&apos;s specifically for businesses in
                          the tech and retail sectors. Would you be interested
                          in attending?
                        </div>
                      </div>
                      <div className="message-info">
                        <span className="message-time">10:18 AM</span>
                      </div>
                    </div>
                  </div>
                  {/* Sent Message */}
                  <div className="message sent">
                    <div className="message-content">
                      <div className="message-bubble">
                        <div className="message-text">
                          That sounds perfect! I&apos;d definitely be interested in
                          attending. Are there any opportunities for businesses
                          to present or showcase their services at the event?
                        </div>
                      </div>
                      <div className="message-info">
                        <span className="message-time">10:30 AM</span>
                        <span className="message-status">
                          <i className="fas fa-check-double" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Received Message */}
                  <div className="message received">
                    <div className="message-avatar">
                      <Image
                        width={36}
                        height={36}
                        src="/images/dp.png"
                        alt="New West End Company"
                      />
                    </div>
                    <div className="message-content">
                      <div className="message-bubble">
                        <div className="message-text">
                          Thanks for reaching out! We&apos;d be happy to discuss
                          potential collaboration opportunities. We do have
                          exhibition spaces available for businesses to showcase
                          their services. The standard booth is £500, but we
                          also have premium spots available.
                        </div>
                      </div>
                      <div className="message-info">
                        <span className="message-time">10:42 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-footer">
                  <div className="chat-input">
                    <button className="btn btn-icon attachment-btn">
                      <i className="fas fa-paperclip" />
                    </button>
                    <input type="text" placeholder="Type a message..." />
                    <button className="btn btn-icon emoji-btn">
                      <i className="far fa-smile" />
                    </button>
                  </div>
                  <button className="send-btn">
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </div>
              {/* Chat Info */}
              <div className="chat-info">
                <div className="chat-info-header">
                  <h5 className="mb-0">Contact Info</h5>
                  <button className="btn btn-icon" id="closeChatInfo">
                    <i className="fas fa-times" />
                  </button>
                </div>
                <div className="chat-info-content">
                  <div className="text-center mb-4">
                    <Image
                      width={80}
                      height={80}
                      src="/images/dp.png"
                      alt="New West End Company"
                      className="chat-info-img"
                    />
                    <h5 className="mt-3 mb-1">New West End Company</h5>
                    <div className="text-muted">
                      Business Improvement District
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      {/* import Link from "next/link"; */}
                      <Link
                        href="https://example.com"
                        target="_blank"
                        className="btn btn-icon me-2"
                        data-bs-toggle="tooltip"
                        title="Visit Website">
                        <i className="fas fa-globe" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        className="btn btn-icon me-2"
                        data-bs-toggle="tooltip"
                        title="LinkedIn">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                      <Link
                        href="https://twitter.com/your-profile"
                        target="_blank"
                        className="btn btn-icon"
                        data-bs-toggle="tooltip"
                        title="Twitter">
                        <i className="fab fa-twitter" />
                      </Link>
                    </div>
                  </div>
                  <div className="chat-info-section">
                    <h6 className="section-title">About</h6>
                    <p className="section-content">
                      New West End Company is a business improvement district
                      for London&apos;s West End. We represent over 600 businesses in
                      the area, working to promote and enhance the commercial
                      environment.
                    </p>
                  </div>
                  <div className="chat-info-section">
                    <h6 className="section-title">Contact</h6>
                    <div className="contact-item">
                      <i className="fas fa-envelope" />
                      <span>info@newwestend.com</span>
                    </div>
                    <div className="contact-item">
                      <i className="fas fa-phone" />
                      <span>+44 20 7123 4567</span>
                    </div>
                    <div className="contact-item">
                      <i className="fas fa-map-marker-alt" />
                      <span>London, UK</span>
                    </div>
                  </div>
                  <div className="chat-info-section">
                    <h6 className="section-title">Shared Files</h6>
                    <div className="shared-file">
                      <i className="fas fa-file-pdf file-icon" />
                      <div className="file-info">
                        <div className="file-name">WestEnd_Events_2024.pdf</div>
                        <div className="file-meta">2.4 MB • Today</div>
                      </div>
                      <button className="btn btn-sm btn-icon">
                        <i className="fas fa-download" />
                      </button>
                    </div>
                    <div className="shared-file">
                      <i className="fas fa-file-image file-icon" />
                      <div className="file-info">
                        <div className="file-name">Event_Banner.jpg</div>
                        <div className="file-meta">1.8 MB • Yesterday</div>
                      </div>
                      <button className="btn btn-sm btn-icon">
                        <i className="fas fa-download" />
                      </button>
                    </div>
                    <div className="shared-file">
                      <i className="fas fa-file-word file-icon" />
                      <div className="file-info">
                        <div className="file-name">
                          Partnership_Proposal.docx
                        </div>
                        <div className="file-meta">520 KB • 3 days ago</div>
                      </div>
                      <button className="btn btn-sm btn-icon">
                        <i className="fas fa-download" />
                      </button>
                    </div>
                  </div>
                  <div className="chat-info-section">
                    <h6 className="section-title">Actions</h6>
                    <div className="action-buttons">
                      <button className="btn btn-outline-danger btn-sm">
                        <i className="fas fa-trash-alt me-1" /> Delete Chat
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="fas fa-bell-slash me-1" /> Mute
                        Notifications
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="fas fa-flag me-1" /> Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="col-lg-3">
            {/* Suggested Connections */}
            <div className="sidebar card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Suggested Connections</h5>
                <div className="suggested-connection">
                  <div className="d-flex align-items-center mb-2">
                    <Image
                      width={37}
                      height={22}
                      src="/images/business.png"
                      alt="Digital Innovators"
                      className="chat-img-small me-2"
                    />
                    <div>
                      <div className="fw-medium">Digital Innovators</div>
                      <div className="text-muted small">
                        Tech &amp; Software
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-custom w-100">
                    <i className="fas fa-comment me-1" /> Message
                  </button>
                </div>
                <div className="suggested-connection">
                  <div className="d-flex align-items-center mb-2">
                    <Image
                      width={37}
                      height={22}
                      src="/images/business.png"
                      alt="Jessica Williams"
                      className="chat-img-small me-2"
                    />
                    <div>
                      <div className="fw-medium">Jessica Williams</div>
                      <div className="text-muted small">Marketing Director</div>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-custom w-100">
                    <i className="fas fa-comment me-1" /> Message
                  </button>
                </div>
                <div className="suggested-connection">
                  <div className="d-flex align-items-center mb-2">
                    <Image
                      width={37}
                      height={22}
                      src="/images/business.png"
                      alt="Green Solutions"
                      className="chat-img-small me-2"
                    />
                    <div>
                      <div className="fw-medium">Green Solutions</div>
                      <div className="text-muted small">Sustainability</div>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-custom w-100">
                    <i className="fas fa-comment me-1" /> Message
                  </button>
                </div>
              </div>
            </div>
            {/* Promotional Banner */}
            <div className="p-2">
              <Image
                src="/images/right_banner.png"
                alt="Promotional Banner"
                className="w-100"
                width={242}
                height={220}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Script>
        {`document.addEventListener('DOMContentLoaded', function() {
            // Initialize tooltips
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
            
            // Toggle chat sidebar on mobile
            const toggleChatSidebar = document.getElementById('toggleChatSidebar');
            const chatContainer = document.querySelector('.chat-container');
            
            if (toggleChatSidebar) {
                toggleChatSidebar.addEventListener('click', function() {
                    chatContainer.classList.toggle('show-sidebar');
                });
            }
            
            // Toggle chat info panel
            const toggleChatInfo = document.getElementById('toggleChatInfo');
            const closeChatInfo = document.getElementById('closeChatInfo');
            
            if (toggleChatInfo) {
                toggleChatInfo.addEventListener('click', function() {
                    chatContainer.classList.toggle('show-info');
                });
            }
            
            if (closeChatInfo) {
                closeChatInfo.addEventListener('click', function() {
                    chatContainer.classList.remove('show-info');
                });
            }
            
            // Scroll to bottom of chat messages
            const chatMessages = document.querySelector('.chat-messages');
            if (chatMessages) {
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            // Send message on enter key
            const messageInput = document.querySelector('.chat-input input');
            const sendButton = document.querySelector('.send-btn');
            
            if (messageInput && sendButton) {
                messageInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        sendMessage();
                    }
                });
                
                sendButton.addEventListener('click', sendMessage);
            }
            
            function sendMessage() {
                const message = messageInput.value.trim();
                if (message) {
                    // Here you would normally send the message to your backend
                    // For demo purposes, we'll just clear the input
                    messageInput.value = '';
                    
                    // You could also add the message to the UI here
                    // For a complete implementation
                }
            }
        });`}
      </Script>
    </div>
  );
}
