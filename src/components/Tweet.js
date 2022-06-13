import ProfileImage from "./ProfileImage";
import UserInfo from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message"; 
import Actions from "./Actions";

function Tweet( {tweet} ) {
  return (
    <div className="tweet">

      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">

        <UserInfo userData={tweet.user} />
        <Timestamp time={tweet.timestamp} />
        </div>


        <p className="message">
        <Message message={tweet.message} />
        </p>

        <div className="actions">
        <Actions />
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
