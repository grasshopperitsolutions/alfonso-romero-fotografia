import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'es';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('es')}
        className={`text-xs uppercase tracking-wider transition-colors ${
          currentLang === 'es' 
            ? 'text-white font-semibold' 
            : 'text-gray-500 hover:text-gray-300'
        }`}
        aria-label="Switch to Spanish"
        title="Español"
      >
        ES
      </button>
      <span className="text-gray-600">|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`text-xs uppercase tracking-wider transition-colors ${
          currentLang === 'en' 
            ? 'text-white font-semibold' 
            : 'text-gray-500 hover:text-gray-300'
        }`}
        aria-label="Switch to English"
        title="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;