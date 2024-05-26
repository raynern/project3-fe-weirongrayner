import {
  StreamVideoClient,
  User,
  useCall,
  useCallStateHooks,
  CallingState,
  StreamCall,
  StreamVideo,
  StreamVideoParticipant,
  ParticipantView,
  StreamTheme,
  SpeakerLayout,
  CallControls,
} from "@stream-io/video-react-sdk";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "./App.css";

// To identify Stream project we are using
const apiKey = "mmhfdzb5evj2";
// To authenticate user. Does this need to be kept secret?
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQnJha2lzcyIsImlzcyI6Imh0dHBzOi8vcHJvbnRvLmdldHN0cmVhbS5pbyIsInN1YiI6InVzZXIvQnJha2lzcyIsImlhdCI6MTcxNjY5Mzg2NywiZXhwIjoxNzE3Mjk4NjcyfQ.wCaUU89KokSoDKUF6929w5PyxAnXYpJSQzbj6Kjl2Go";
const userId = "Brakiss";
// To identify the call to join
const callId = "svbcpYR3u0Ba";

// Create template user to use to login
const user: User = {
  id: userId,
  name: "Oliver",
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
};

// Initialize Stream video client
const client = new StreamVideoClient({ apiKey, user, token });
// Create call. Different call types are available e.g. "default", "meeting", "livestream"
const call = client.call("default", callId);
// Join call. Create call if not already created
// In production grade apps, you'd typically store the call instance in a state variable and take care of correctly disposing it. **Read more in our Joining and Creating Calls guide**
await call.join({ create: true });

export const MyUILayout = () => {
  // Get access to the call object
  const call = useCall();

  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();

  // If state is not joined, show loading indicator
  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  return (
    <StreamTheme>
      <SpeakerLayout participantsBarPosition="bottom" />
      <CallControls />
    </StreamTheme>
  );
};

/* CUSTOM UI to show remote participants who joined the call 

export const MyParticipantList = (props: {
  participants: StreamVideoParticipant[];
}) => {
  const { participants } = props;
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
      {participants.map((participant) => (
        <ParticipantView
          participant={participant}
          key={participant.sessionId}
        />
      ))}
    </div>
  );
};

*/

/* CUSTOM UI to show local participant in a floating window 

export const MyFloatingLocalParticipant = (props: {
  participant?: StreamVideoParticipant;
}) => {
  const { participant } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "200px",
        left: "15px",
        width: "240px",
        height: "135px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 3px",
        borderRadius: "12px",
      }}
    >
      {participant && <ParticipantView participant={participant} />}
    </div>
  );
};

*/

function App() {
  // StreamVideo and StreamCall makes necessary hooks (client and call objects) available to child components
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  );
}

export default App;
