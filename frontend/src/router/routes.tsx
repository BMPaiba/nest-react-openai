import { AssistantPage } from "@/presentation/pages/assitant/AssistantPage";
import { AudioToTextPage } from "@/presentation/pages/audio-to-text/AudioToTextPage";
import { ImageGenerationPage } from "@/presentation/pages/image-generation/ImageGenerationPage";
import { ImageTunningPage } from "@/presentation/pages/image-tunning/ImageTunningPage";
import { OrthographyPage } from "@/presentation/pages/orthography/OrthographyPage";
import { ProsConsStreamPage } from "@/presentation/pages/pros-cons-stream/ProsConsStreamPage";
import { ProsConsPage } from "@/presentation/pages/pros-cons/ProsConsPage";
import { TextToAudioPage } from "@/presentation/pages/text-to-audio/TextToAudioPage";
import { TranslatePage } from "@/presentation/pages/translate/TranslatePage";
import { Route, Routes } from "react-router";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Hello World!</div>} />
      <Route path="assistant" element={<AssistantPage />} />
      <Route path="audio-to-text" element={<AudioToTextPage />} />
      <Route path="image-tunning" element={<ImageTunningPage />} />
      <Route path="image-generation" element={<ImageGenerationPage />} />
      <Route path="text-to-audio" element={<TextToAudioPage />} />
      <Route path="translate" element={<TranslatePage />} />
      <Route path="pros-cons-stream" element={<ProsConsStreamPage />} />
      <Route path="pros-cons" element={<ProsConsPage />} />
      <Route path="orthography" element={<OrthographyPage />} />
    </Routes>
  );
};
