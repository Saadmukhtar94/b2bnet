"use client";
import { useEffect } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function page() {
  useEffect(() => {
    // Ensure the script runs only in the browser (Next.js runs in SSR too)
    if (typeof window !== "undefined") {
      // Character counter for feedback details
      const feedbackDetails = document.getElementById("feedbackDetails");
      if (feedbackDetails) {
        const charCounter = feedbackDetails.nextElementSibling;

        feedbackDetails.addEventListener("input", function () {
          const currentLength = this.value.length;
          charCounter.textContent = `${currentLength}/1000`;

          if (currentLength > 1000) {
            charCounter.classList.add("text-danger");
            this.value = this.value.substring(0, 1000);
            charCounter.textContent = "1000/1000";
          } else {
            charCounter.classList.remove("text-danger");
          }
        });
      }

      // Toggle contact fields visibility
      const contactCheck = document.getElementById("contactCheck");
      const contactFields = document.getElementById("contactFields");

      if (contactCheck && contactFields) {
        contactCheck.addEventListener("change", function () {
          contactFields.style.display = this.checked ? "block" : "none";
        });
      }

      // Form submission
      const feedbackForm = document.getElementById("feedbackForm");
      const feedbackSuccess = document.getElementById("feedbackSuccess");

      if (feedbackForm && feedbackSuccess) {
        feedbackForm.addEventListener("submit", function (e) {
          e.preventDefault();

          // Simulate form submission
          setTimeout(function () {
            feedbackForm.style.display = "none";
            feedbackSuccess.classList.remove("d-none");
          }, 1000);
        });
      }
    }
  }, []); // Run once on mount
  return (
    <div>
      <div className="container-fluid py-4">
        <div className="row g-4">
          {/* Left Sidebar - Profile */}
          <div className="col-12 col-lg-3">
            <div className="sidebar p-3 mb-4">
              <div className="text-center py-2">
                <Image
                  src="/images/dp.png"
                  alt="Profile"
                  className="profile-img mb-2"
                  width={72}
                  height={72}
                />
                <h6 className="mb-1">Shams Aujara</h6>
              </div>
              {/* <div className="d-grid gap-2 mt-2 mb-3">
                <button className="btn btn-outline-custom btn-sm" type="button">
                  <i className="far fa-heart me-2" /> Favourite
                </button>
              </div> */}
              <div className="business-item">
                <Image
                  src=" /images/business.png"
                  alt="Tekgenie"
                  className="business-logo"
                  width={41}
                  height={41}
                />

                <div>
                  <div className="fw-medium">Tekgenie</div>
                </div>
                <div className="ms-auto text-success">
                  <i className="fas fa-check-circle" />
                </div>
              </div>
              <div className="business-item">
                <Image
                  src="/images/business.png"
                  alt="Profile"
                  className="business-logo"
                  width={41}
                  height={41}
                />
                <div>
                  <div className="fw-medium">Deenscorp Royale</div>
                </div>
              </div>
              <div className="d-grid gap-2 mt-4">
                <button className="btn btn-primary-custom" type="button">
                  Add business
                </button>
              </div>
              <div className="mt-4 pt-2">
                <div className="menu-item">
                  <i className="fas fa-cog" /> Settings
                </div>
              </div>
              <div className="mt-4 pt-2 border-top">
                <div className="menu-item">
                  <i className="fas fa-info-circle" /> About B2BNet
                </div>
                <div className="menu-item">
                  <i className="fas fa-question-circle" /> Help Centre
                </div>
                <div className="menu-item">
                  <i className="fas fa-comment-dots" /> Feedback form
                </div>
                <div className="menu-item">
                  <i className="fas fa-shield-alt" /> Policy and Privacy
                </div>
              </div>
            </div>
          </div>
          {/* Middle Section - Feedback Form */}
          <div className="col-12 col-lg-6">
            <div className="feedback-form bg-white rounded p-4">
              <h5 className="mb-4">Share Your Feedback</h5>
              <div className="feedback-intro mb-4">
                <p>
                  We value your input! Please share your thoughts, suggestions,
                  or report any issues you've encountered while using B2BNet.
                  Your feedback helps us improve our platform.
                </p>
              </div>
              <form id="feedbackForm">
                {/* Feedback Type */}
                <div className="mb-4">
                  <label className="form-label">
                    What type of feedback do you have? *
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="feedbackType"
                        id="suggestionType"
                        defaultValue="suggestion"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="suggestionType">
                        Suggestion
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="feedbackType"
                        id="bugType"
                        defaultValue="bug"
                      />
                      <label className="form-check-label" htmlFor="bugType">
                        Bug/Issue
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="feedbackType"
                        id="complimentType"
                        defaultValue="compliment"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="complimentType">
                        Compliment
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="feedbackType"
                        id="otherType"
                        defaultValue="other"
                      />
                      <label className="form-check-label" htmlFor="otherType">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                {/* Feature Area */}
                <div className="mb-3">
                  <label htmlFor="featureArea" className="form-label">
                    Which area of B2BNet are you providing feedback on? *
                  </label>
                  {/* <select className="form-select" id="featureArea" required="">
              <option value="" selected="" disabled="">
                Select an area
              </option>
              <option value="business_directory">Business Directory</option>
              <option value="events">Events</option>
              <option value="messaging">Messaging</option>
              <option value="networking">Networking</option>
              <option value="profile">Profile Management</option>
              <option value="mobile_app">Mobile App</option>
              <option value="ui_ux">User Interface/Experience</option>
              <option value="other">Other</option>
            </select> */}
                  <select
                    className="form-select"
                    id="featureArea"
                    required
                    defaultValue="">
                    <option value="" disabled>
                      Select an area
                    </option>
                    <option value="business_directory">
                      Business Directory
                    </option>
                    <option value="events">Events</option>
                    <option value="messaging">Messaging</option>
                    <option value="networking">Networking</option>
                    <option value="profile">Profile Management</option>
                    <option value="mobile_app">Mobile App</option>
                    <option value="ui_ux">User Interface/Experience</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {/* Feedback Subject */}
                <div className="mb-3">
                  <label htmlFor="feedbackSubject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="feedbackSubject"
                    placeholder="Brief summary of your feedback"
                    required=""
                  />
                </div>
                {/* Feedback Details */}
                <div className="mb-4">
                  <label htmlFor="feedbackDetails" className="form-label">
                    Details *
                  </label>
                  <textarea
                    className="form-control"
                    id="feedbackDetails"
                    rows={5}
                    placeholder="Please provide as much detail as possible..."
                    required=""
                    defaultValue={""}
                  />
                  <div className="form-text text-end">0/1000</div>
                </div>
                {/* Attachment */}
                <div className="mb-4">
                  <label htmlFor="feedbackAttachment" className="form-label">
                    Attachment (optional)
                  </label>
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      id="feedbackAttachment"
                    />
                    <label
                      className="input-group-text"
                      htmlFor="feedbackAttachment">
                      Upload
                    </label>
                  </div>
                  <div className="form-text">
                    You can upload screenshots or documents to help explain your
                    feedback (max 5MB).
                  </div>
                </div>
                {/* Contact Information */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="contactCheck"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="contactCheck">
                      I&apos;d like to be contacted about my feedback
                    </label>
                  </div>
                  <div id="contactFields" className="mt-3">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="contactName" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contactName"
                          defaultValue="Shams Aujara"
                          readOnly=""
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="contactEmail" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="contactEmail"
                          defaultValue="shams@example.com"
                          readOnly=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Satisfaction Rating */}
                <div className="mb-4">
                  <label className="form-label">
                    How satisfied are you with B2BNet overall?
                  </label>
                  <div className="satisfaction-rating">
                    <div className="d-flex justify-content-between">
                      <div className="rating-option text-center">
                        <input
                          type="radio"
                          className="btn-check"
                          name="satisfaction"
                          id="rating1"
                          defaultValue={1}
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary rounded-circle p-2"
                          htmlFor="rating1">
                          <i className="far fa-angry" />
                        </label>
                        <div className="small mt-1">Very Dissatisfied</div>
                      </div>
                      <div className="rating-option text-center">
                        <input
                          type="radio"
                          className="btn-check"
                          name="satisfaction"
                          id="rating2"
                          defaultValue={2}
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary rounded-circle p-2"
                          htmlFor="rating2">
                          <i className="far fa-frown" />
                        </label>
                        <div className="small mt-1">Dissatisfied</div>
                      </div>
                      <div className="rating-option text-center">
                        <input
                          type="radio"
                          className="btn-check"
                          name="satisfaction"
                          id="rating3"
                          defaultValue={3}
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary rounded-circle p-2"
                          htmlFor="rating3">
                          <i className="far fa-meh" />
                        </label>
                        <div className="small mt-1">Neutral</div>
                      </div>
                      <div className="rating-option text-center">
                        <input
                          type="radio"
                          className="btn-check"
                          name="satisfaction"
                          id="rating4"
                          defaultValue={4}
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary rounded-circle p-2"
                          htmlFor="rating4">
                          <i className="far fa-smile" />
                        </label>
                        <div className="small mt-1">Satisfied</div>
                      </div>
                      <div className="rating-option text-center">
                        <input
                          type="radio"
                          className="btn-check"
                          name="satisfaction"
                          id="rating5"
                          defaultValue={5}
                          autoComplete="off"
                          defaultChecked=""
                        />
                        <label
                          className="btn btn-outline-secondary rounded-circle p-2"
                          htmlFor="rating5">
                          <i className="far fa-grin-stars" />
                        </label>
                        <div className="small mt-1">Very Satisfied</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary-custom px-5">
                    Submit Feedback
                  </button>
                </div>
              </form>
              {/* Success Message (initially hidden) */}
              <div id="feedbackSuccess" className="mt-4 text-center d-none">
                <div className="feedback-success-icon mb-3">
                  <i className="fas fa-check-circle text-success" />
                </div>
                <h5>Thank You for Your Feedback!</h5>
                <p>
                  We appreciate you taking the time to share your thoughts with
                  us. Your feedback has been submitted successfully.
                </p>
                <p className="mb-0">
                  If you've requested to be contacted, a member of our team will
                  get back to you soon.
                </p>
              </div>
            </div>
          </div>
          {/* Right Sidebar - FAQ and Support */}
          <div className="col-12 col-lg-3">
            <div className="sidebar card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Frequently Asked Questions</h5>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne">
                        How is my feedback used?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqOne"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Your feedback is reviewed by our product team and used
                        to improve B2BNet. We prioritize changes based on user
                        feedback and technical feasibility.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        Will I receive a response?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqTwo"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        If you&apos;ve checked the option to be contacted, we&apos;ll
                        respond to your feedback within 2-3 business days. For
                        urgent issues, please contact our support team directly.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree">
                        How do I report a bug?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqThree"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Select &#34;Bug/Issue&#34; as your feedback type and provide as
                        much detail as possible, including steps to reproduce
                        the issue, your device, browser, and screenshots if
                        available.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Need Help?</h5>
                <p>
                  If you need immediate assistance, our support team is here to
                  help.
                </p>
                <div className="d-grid gap-2">
                  {/* <a href="#" className="btn btn-outline-custom">
              <i className="fas fa-headset me-2" /> Contact Support
            </a>
            <a href="#" className="btn btn-outline-custom">
              <i className="fas fa-book me-2" /> Visit Help Center
            </a> */}
                  <Link href="/contact" className="btn btn-outline-custom">
                    <i className="fas fa-headset me-2" /> Contact Support
                  </Link>

                  <Link href="/help" className="btn btn-outline-custom">
                    <i className="fas fa-book me-2" /> Visit Help Center
                  </Link>
                </div>
              </div>
            </div>
            {/* Promotional Banner */}
            <div className="p-2">
              {/* <img
          src=" /images/right_banner.png"
          alt="Promotional Banner"
          className="w-100"
          style={{ height: 220, objectFit: "cover" }}
        /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
