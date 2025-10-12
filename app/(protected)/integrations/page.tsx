import IntegrationCard from "@/components/integration-card";
import { INTEGRATION_CARDS } from "@/constants/integrations";
import { AudioWaveformIcon, BlocksIcon } from "lucide-react";
import React from "react";

const Integrations = () => {
  return (
    <main>
      <h1 className="flex flex-row gap-4 text-3xl items-center">
        <BlocksIcon /> Integrations
      </h1>
      <div className="flex flex-col gap-4 mt-8">
        {INTEGRATION_CARDS.map((card, index) => (
          <IntegrationCard key={index} {...card} />
        ))}
      </div>
    </main>
  );
};

export default Integrations;
