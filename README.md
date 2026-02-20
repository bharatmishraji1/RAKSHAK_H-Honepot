Rakshak-H — AI Scam Honeypot Agent
Overview

Rakshak-H is an AI-driven scam honeypot agent designed to:

Engage scammers through investigative dialogue

Detect fraudulent behavior in real time

Extract structured threat intelligence

Automatically generate and submit a final intelligence report

The system is optimized for high engagement quality, deep intelligence extraction, and reliable scam detection.

Objectives

Accurately detect scams

Extract all planted fake data fields

Sustain long investigative conversations

Identify urgency patterns and red flags

Produce structured evaluation-ready final output

System Architecture

The application consists of four core modules:

1. Scam Detection Engine

Rule-based fraud analysis that evaluates:

OTP requests

Urgency language

Bank impersonation

Payment or transfer instructions

Suspicious URLs

UPI requests

The detection engine calculates a cumulative scam score and flags suspicious patterns.

2. Intelligence Extraction Engine

Regex-based structured extraction for:

Phone numbers

Bank account numbers

UPI IDs

Phishing links

Email addresses

Case IDs

Policy numbers

Order numbers

All extracted values are deduplicated before final submission.

3. Investigative Engagement Engine

The honeypot maintains conversation quality by:

Asking identity verification questions

Probing for official contact information

Requesting case references

Challenging urgency claims

Sustaining conversations beyond 12 turns

This maximizes evaluation scoring under conversation quality metrics.

4. Automated Final Report Submission

After sufficient engagement:

Generates structured final output

Prevents duplicate submissions

Submits intelligence to the evaluation endpoint

Project Structure
rakshak-h-honeypot/
│
├── src/
│   ├── server.ts
│   ├── honeypotAgent.ts
│   ├── detection.ts
│   ├── extraction.ts
│   ├── conversation.ts
│   ├── openrouterService.ts
│   └── types.ts
│
├── .env.example
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md

Technology Stack

Node.js

Express.js

TypeScript

Regex-based pattern detection

Docker-ready

Railway deployment compatible

Local Setup
Prerequisites

Node.js v18 or higher

1. Install Dependencies
npm install

2. Create Environment File

Create a .env file:

AUTH_KEY=your-auth-key
PORT=8080

3. Run Development Server
npm run dev


Server will run on:

http://localhost:8080

API Endpoint
POST /honeypot

Request body:

{
  "sessionId": "test-session",
  "message": {
    "sender": "scammer",
    "text": "Share OTP 458921",
    "timestamp": "2025-02-11T10:30:00Z"
  }
}


Response format:

{
  "status": "success",
  "reply": "Investigative follow-up question..."
}


This format strictly follows the hackathon evaluation specification.

Final Output Structure

After engagement threshold is reached, the system generates:

{
  "sessionId": "abc123",
  "scamDetected": true,
  "totalMessagesExchanged": 12,
  "engagementDurationSeconds": 240,
  "extractedIntelligence": {
    "phoneNumbers": [],
    "bankAccounts": [],
    "upiIds": [],
    "phishingLinks": [],
    "emailAddresses": []
  },
  "agentNotes": "Red Flags identified during conversation"
}

Scoring Optimization Strategy

The system is designed to maximize evaluation metrics:

High-confidence scam detection

Complete fake data extraction

Sustained multi-turn engagement

Multiple investigative questions

Structured response compliance

Deployment
Railway Deployment

Connect GitHub repository

Set environment variables:

AUTH_KEY

PORT (auto-provided by Railway)

The server uses:

const PORT = process.env.PORT || 8080;

Docker Deployment

Build:

docker build -t rakshak-h .


Run:

docker run -p 8080:8080 rakshak-h

Security Practices

.env excluded from Git

No sensitive logging

Duplicate submission prevention

Production-ready build process

License

This project is developed for cybersecurity evaluation and research purposes.