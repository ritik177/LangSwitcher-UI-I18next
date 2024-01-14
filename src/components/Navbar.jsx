import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const languages = [
        { value: 'en_US', label: 'English' },
        { value: 'cs_CZ', label: 'Česky' },
        { value: 'da_DK', label: 'Dansk' },
        { value: 'de_DE', label: 'Deutsch' },
        { value: 'es_ES', label: 'Español' },
        { value: 'fr_FR', label: 'Français' },
        { value: 'hu_HU', label: 'Magyar' },
        { value: 'is_IS', label: 'íslenska' },
        { value: 'it_IT', label: 'Italiano' },
        { value: 'ja_JP', label: '日本語' },
        { value: 'ko_KR', label: '한국어' },
        { value: 'nl_NL', label: 'Nederlands' },
        { value: 'pl_PL', label: 'Polski' },
        { value: 'pt_BR', label: 'Português (BR)' },
        { value: 'ru_RU', label: 'Русский' },
        { value: 'zh_CN', label: '简体中文' },
        { value: 'zh_TW', label: '繁體中文' },
        { value: 'ca_ES', label: 'Catalan' },
        ];
    
    
    
      const [selectedLang, setSelectedLang] = useState("");
    
      const {i18n}=useTranslation();
    
      const handleSelectChange = (event) => {
         const newLanguage=event.target.value;
         setSelectedLang(newLanguage);
         i18n.changeLanguage(newLanguage);
         
    
      };
  
    return (
        <nav className="navbar">
            <div className="select-container">
         <select
        id="selectLang"
        value={selectedLang}
        onChange={handleSelectChange}
      >
        {languages.map((lng) => (
          <option value={lng.value} key={lng.value}>
            {lng.label}
          </option>
        ))}
      </select>
            </div>
        </nav>
    );
};

export default Navbar;




