import styles from "../css/home.module.css";

function DiscordLogin() {
  return (
    <div className={styles.modal}>
      <a
        id="login"
        href="https://discord.com/api/oauth2/authorize?client_id=1060823658832076830&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauth%2Fdiscord&response_type=token&scope=identify"
        class="bg-discord-blue text-xl px-5 py-3 rounded-md font-bold flex items-center space-x-4 hover:bg-gray-600 transition duration-75"
      >
        <i class="fa-brands fa-discord text-2xl"></i>
        <span>Login</span>
      </a>
    </div>
  );
}
export default DiscordLogin;
