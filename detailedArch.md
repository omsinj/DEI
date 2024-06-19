**1. Front-End**
React.js: For building interactive user interfaces and managing state.
HTML5/CSS3/JavaScript: For structuring and styling the web pages.
Axios: For making API requests to the back-end.
  
**2. Back-End**
Node.js with Express.js: For handling server-side logic and routing.
REST API Gateway: Centralized gateway for managing API requests and routing them to appropriate services.
  
**3. Authentication**
JWT (JSON Web Tokens): For secure user authentication and session management.

**4. Game Logic**
Trivia Questions Service: Manages questions, answers, and user responses.
Progress Tracker: Keeps track of user progress and levels.

**5. Video Service**
Video Streaming: Handles streaming of simulation videos.
Video Overlay: Manages interactive questions and rewards during video playback.

**6. DEI Resources**
Resource Links: Manages and displays a list of DEI resources.
Bookmark Feature: Allows users to save and manage bookmarks.

**7. Database Layer**
MongoDB: A NoSQL database for storing user data, game progress, questions, video metadata, and resources.

**8. Media Storage**
AWS S3: For storing video files, narrations, and other media assets.

**9. Analytics and Monitoring**
Google Analytics: For tracking user engagement and behavior.
Server Logs: For monitoring server performance and errors.

**Data Flow**
**User Interaction:**
Users interact with the front-end UI built with React.js.
Actions like starting a game, selecting a journey, watching a video, or browsing resources trigger API calls.

**API Requests:**
API requests are routed through the REST API Gateway to the appropriate back-end services (e.g., game logic, video service, resources).

**Authentication:**
JWT tokens are used to authenticate and authorize users for secure access to different parts of the platform.

**Game Logic and Video Service:**
Game logic handles trivia questions, user progress, and certification.
Video service streams videos and overlays interactive elements.

**Database Operations:**
MongoDB handles data storage and retrieval for user profiles, game data, video metadata, and DEI resources.

**Media Storage:**
AWS S3 stores and serves media content like videos and narrations.

**Analytics and Monitoring:**
Google Analytics tracks user activity.
Server logs provide insights into server health and performance.
