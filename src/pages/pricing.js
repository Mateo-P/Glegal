import React from "react";
import PricingSection from "./../components/PricingSection";

function PricingPage(props) {
  return (
    <PricingSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Servicios"
      subtitle="Todos los servicios cuentan con Garantia de 30 días-hábiles."
    />
  );
}

export default PricingPage;
