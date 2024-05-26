import {
  StreamVideoClient,
  User,
  useCall,
  useCallStateHooks,
  CallingState,
  StreamCall,
  StreamVideo,
} from "@stream-io/video-react-sdk";
import "./App.css";

// To identify Stream project we are using
const apiKey = "mmhfdzb5evj2";
// To authenticate user. Does this need to be kept secret?
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQWRtaXJhbF9UaHJhd24iLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0FkbWlyYWxfVGhyYXduIiwiaWF0IjoxNzE2Njg2MjA1LCJleHAiOjE3MTcyOTEwMTB9.UtXd86USowP512LoaimHKI5GlFBPhWD2YVKtsEi8mdk";
const userId = "Admiral_Thrawn";
// To identify the call to join
const callId = "qccxvQhFCzXe";

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

export const MyUILayout = () => {
  // Get access to the call object
  const call = useCall();

  const { useCallCallingState, useParticipantCount } = useCallStateHooks();
  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();

  // If state is not joined, show loading indicator
  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Call "{call?.id}" has {participantCount} participants!
    </div>
  );
};

export default App;
