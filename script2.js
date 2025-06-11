const companyContent = `
Startup Name
Startup Name:  MjiRide

Origin Story
Our Story:
The idea originates from the everyday struggles faced by commuters in our public transportation system—marked by disorganization, reckless driving, unroadworthy vehicles, and unreliable stops. 
Witnessing these persistent issues firsthand inspired Garvin Aguko and Kyle Aluma to come up with a practical solution: a structured carpooling service designed to offer a safer, more efficient, and more reliable alternative. Sparked by personal experiences and a desire to improve the daily lives of many, the idea aims to eliminate the chaos of traditional commuting. It matters deeply to our community because better transportation means safer roads, reduced stress, and a stronger sense of trust and connection among commuters.

Products / Services
On-Demand Carpool Rides
Description: A real-time ride-hailing service that
allows users to request a ride instantly and 
it with others heading in the same direction, 
the same way uber works.

Scheduled Commute Pools
Description:  A recurring ride service for daily
commutes. Riders book seats ahead of time and are
matched with drivers on similar routines.

Service 3: Inter-City Ride Sharing Network
Description: A platform for long-distance ride 
sharing, connecting travelers going between cities,
towns, or regions. Riders can book seats in 
advance and join shared trips for vacations, 
events, or weekend getaways.

Key Features & Impact
Feature Name: Smart rider-matching (dynamic pooling)
Service(s): Real-time ride matching
Tool/Method:  AI-based matching algorithm using 
geolocation and trip data
Impact: Maximizes vehicle occupancy and route 
efficiency

Feature Name: Weekly or daily ride planning
Service(s): Advanced booking for routines
Tool/Method: Calendar based scheduling system for
each user
Impact: Keeps a high standard of predictability
and reliability

Feature Name: Real-time tracking & route optimization
Service(s): Live navigation and trip updates
Tool/Method: GPS tracking, real-time traffic data 
and route optimization algorithms
Impact: Shortens trip duration, enhances user 
confidence

Meet the Team
Name: Kyle Aluma
Role: CEO of SwiftMat
 
Name: Garvin Aguko 
Role: Manager at MjiRide
 
Name: Stennis Orina
Role: CFO at SwiftMat


Mission Statement
Mission: To provide the best, fastest and safest commuting experience for everyone. 

Vision Statement
Vision: We believe in a world where transportation across cities will
be seamless through our system of carpooling, that is eco-friendly, 
fast and full of flexibility to complement the public transportation 
system. 

Startup Goals
Increase the number of vehicles in our network to 2000.
Ensure 50% of our vehicles are eco-friendly vehicles.
Broadening our carpooling network to 2 more cities

Partners
Uber
Bolt
Capital FM
Pinehout Enterprises
`;


const messages = document.getElementById("messages");
const input = document.getElementById("userInput");

function appendBubble(text, type) {
  const bubble = document.createElement("div");
  bubble.className = `bubble ${type}`;
  bubble.innerText = text;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
}

async function sendMessage() {
  const userText = input.value.trim();
  if (!userText) return; 
  appendBubble(userText, "user");

  input.value = "";

   try {
    const reply = await puter.ai.chat([
        { role: "system", content: companyContent },
        { role: "user", content: userText }
      ]);

      if (!reply || !reply.message || !reply.message.content) {
        appendBubble("⚠️ The AI didn’t return a valid response. Make sure you're logged into Puter.com.", "bot");
        console.warn("Empty or malformed reply:", reply);
        return;
      }

      appendBubble(reply.message.content, "bot");
    } catch (error) {
      console.error("AI chat error:", error);
      appendBubble("⚠️ There was an error talking to the AI. Check the console or your internet connection.", "bot");
    }
  }

  function quickAsk(question) {
    input.value = question;
    sendMessage();
  }

