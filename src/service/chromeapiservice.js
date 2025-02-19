import { languageOptions } from "../utils/languageUtil";

// Language Detector
export const detectLang = async (text, callbacks) => {
    const {
        setDetecting = () => {}, setDetectedLangSymbol = () => {}, setDetectedLang = () => {}
    } = callbacks;

    if (setDetecting) setDetecting(true);

    const available = (await ai.languageDetector.capabilities()).available

    if (available === "no") {
        console.error("Sorry, your device does not support language detection")
        setDetecting(false)
        return;
    }

    const detector = await ai.languageDetector.create();
    const detectedLanguages = await detector.detect(text);
    
    setDetectedLangSymbol(detectedLanguages[0].detectedLanguage)
    setDetectedLang(languageOptions[detectedLanguages[0].detectedLanguage]);

    setDetecting(false);

}

export default detectLang;