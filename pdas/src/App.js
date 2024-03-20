import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa is a cloud-based voice service that allows voice developers to create and manage their voice apps and integrate them with Alexa-related smart devices which was created by Amazon. It helps you in daily activities such as News Notification, Alarms and other social platforms to perform social activities. "
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana is a personal productivity assistant in Microsoft 365 which was made by Microsoft. It helps you achieve more with less effort while allowing you to focus on what matters."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri is an easy way to make calls, send texts, use apps and get things done with just your voice which was made by Apple. It is the most private intelligent assistant and is being phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
