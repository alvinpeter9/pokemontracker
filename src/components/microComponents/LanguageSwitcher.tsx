import { Button, Box } from '@mui/material';
import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { useAppContext } from '../../hoc/AppContext';


interface LanguageSwitcherProps {
  handleLanguageSwitch: () => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  handleLanguageSwitch,
}) => {

  const { setSelectedPokemon, language, LanguageOptions } = useAppContext();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 2,
      }}
    >
      <Button onClick={() => setSelectedPokemon(null)}>
        <ChevronLeft width="30px" color="#18181B" height="30px" />
      </Button>

      <div
        className={`switchBtn ${
          language === LanguageOptions.ENGLISH ? 'justify_start' : 'justify_end'
        }`}
      >
        <div className="toggleBtn" onClick={handleLanguageSwitch}>
          {language === LanguageOptions.ENGLISH ? (
            <span className="effect_language">EN</span>
          ) : (
            <span className="effect_language">YD</span>
          )}
        </div>
      </div>
    </Box>
  );
};

export default LanguageSwitcher;
