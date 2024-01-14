import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en_US",
    fallbackLng: "en_US",
    returnObjects: true,
    resources: {
      en_US: {
        translation: {
          enterCredentials:
            "Please enter your administrator login and password.",
          username: "Username",
          password: "Password",
          signIn: "Sign in",
        },
      },
      cs_CZ: {
        translation: {
          enterCredentials: "Prosím, zadejte přihlašovací údaje správce.",
          username: "Uživatelské jméno",
          password: "Heslo",
          signIn: "Přihlásit se",
        },
      },
      da_DK: {
        translation: {
          enterCredentials: "Indtast administratorlogin og adgangskode.",
          username: "Brugernavn",
          password: "Adgangskode",
          signIn: "Log ind",
        },
      },
      es_ES: {
        translation: {
          enterCredentials:
            "Por favor, ingrese su nombre de usuario y contraseña de administrador.",
          username: "Nombre de usuario",
          password: "Contraseña",
          signIn: "Iniciar sesión",
        },
      },
      fr_FR: {
        translation: {
          enterCredentials:
            "Veuillez entrer votre identifiant et votre mot de passe administrateur.",
          username: "Nom d'utilisateur",
          password: "Mot de passe",
          signIn: "Se connecter",
        },
      },
      hu_HU: {
        translation: {
          enterCredentials:
            "Kérjük, adja meg az adminisztrátori bejelentkezési és jelszót.",
          username: "Felhasználónév",
          password: "Jelszó",
          signIn: "Bejelentkezés",
        },
      },
      is_IS: {
        translation: {
          enterCredentials:
            "Vinsamlegast sláðu inn notendanafn og lykilorð stjórnanda.",
          username: "Notandanafn",
          password: "Lykilorð",
          signIn: "Skrá inn",
        },
      },
      it_IT: {
        translation: {
          enterCredentials:
            "Inserisci il nome utente e la password dell'amministratore.",
          username: "Nome utente",
          password: "Password",
          signIn: "Accedi",
        },
      },
      ja_JP: {
        translation: {
          enterCredentials: "管理者のログインとパスワードを入力してください。",
          username: "ユーザー名",
          password: "パスワード",
          signIn: "サインイン",
        },
      },
      ko_KR: {
        translation: {
          enterCredentials: "관리자 로그인 및 비밀번호를 입력하십시오.",
          username: "사용자 이름",
          password: "비밀번호",
          signIn: "로그인",
        },
      },
      nl_NL: {
        translation: {
          enterCredentials: "Voer uw beheerdersaanmelding en wachtwoord in.",
          username: "Gebruikersnaam",
          password: "Wachtwoord",
          signIn: "Aanmelden",
        },
      },
      pl_PL: {
        translation: {
          enterCredentials: "Proszę podać login i hasło administratora.",
          username: "Nazwa użytkownika",
          password: "Hasło",
          signIn: "Zaloguj się",
        },
      },
      pt_BR: {
        translation: {
          enterCredentials:
            "Por favor, insira o login e a senha do administrador.",
          username: "Nome de usuário",
          password: "Senha",
          signIn: "Entrar",
        },
      },
      ru_RU: {
        translation: {
          enterCredentials: "Введите логин и пароль администратора.",
          username: "Имя пользователя",
          password: "Пароль",
          signIn: "Войти",
        },
      },
      zh_CN: {
        translation: {
          enterCredentials: "请输入管理员登录名和密码。",
          username: "用户名",
          password: "密码",
          signIn: "登录",
        },
      },
      zh_TW: {
        translation: {
          enterCredentials: "請輸入管理員登錄名和密碼。",
          username: "用戶名",
          password: "密碼",
          signIn: "登錄",
        },
      },
      ca_ES: {
        translation: {
          enterCredentials:
            "Si us plau, introduïu el nom d'usuari i la contrasenya de l'administrador.",
          username: "Nom d'usuari",
          password: "Contrasenya",
          signIn: "Inicia sessió",
        },
      },
    },
  });
