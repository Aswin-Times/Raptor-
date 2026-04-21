export interface FirstAidTopic {
  id: string;
  title: string;
  shortDescription: string;
  instructions: string[];
  warnings: string[];
}

export const firstAidData: FirstAidTopic[] = [
  {
    id: "cpr",
    title: "CPR (Cardiopulmonary Resuscitation)",
    shortDescription: "For someone who is unresponsive and not breathing normally.",
    instructions: [
      "Check the scene for safety, then check the person for responsiveness.",
      "If unresponsive, call emergency services (e.g., 911/112) immediately.",
      "Place the person on their back on a firm, flat surface.",
      "Give 30 chest compressions: push hard and fast in the center of the chest (at least 2 inches deep, 100-120 per minute).",
      "Give 2 rescue breaths: tilt head back, lift chin, pinch nose, and blow until the chest rises.",
      "Continue cycles of 30 compressions and 2 breaths until help arrives or the person shows signs of life."
    ],
    warnings: [
      "Do not stop CPR unless the person starts breathing normally, an AED becomes available, or emergency responders take over.",
      "If you are untrained in rescue breathing, perform Hands-Only CPR (continuous chest compressions)."
    ]
  },
  {
    id: "choking",
    title: "Choking (Adult/Child)",
    shortDescription: "For someone who cannot cough, speak, or breathe.",
    instructions: [
      "Ask 'Are you choking?' and tell them you are going to help.",
      "Stand behind the person and wrap your arms around their waist.",
      "Make a fist with one hand and place the thumb side just above their belly button.",
      "Grasp your fist with your other hand.",
      "Give quick, upward thrusts (Heimlich maneuver) into the abdomen.",
      "Continue thrusts until the object is forced out or the person becomes unresponsive."
    ],
    warnings: [
      "If the person becomes unresponsive, lower them to the ground and begin CPR.",
      "Do not use abdominal thrusts on infants; use back blows and chest thrusts instead."
    ]
  },
  {
    id: "bleeding",
    title: "Severe Bleeding",
    shortDescription: "For heavy bleeding that doesn't stop on its own.",
    instructions: [
      "Ensure your safety. Put on gloves if available.",
      "Apply direct pressure to the wound using a clean cloth, sterile dressing, or your hand.",
      "Maintain continuous, firm pressure until the bleeding stops.",
      "If blood soaks through, add more layers of cloth. Do not remove the first layer.",
      "If possible, elevate the injured area above the heart."
    ],
    warnings: [
      "Call emergency services immediately for severe, spurting, or unstoppable bleeding.",
      "Use a tourniquet only as a last resort if direct pressure fails and you are trained to do so."
    ]
  },
  {
    id: "burns",
    title: "Burns",
    shortDescription: "For thermal burns caused by heat, fire, or hot liquids.",
    instructions: [
      "Remove the person from the source of the burn.",
      "Cool the burn immediately with cool (not freezing) running water for at least 10-20 minutes.",
      "Remove any constricting items (jewelry, belts) near the burn before it swells.",
      "Cover the burn loosely with a sterile, non-stick dressing or a clean cloth."
    ],
    warnings: [
      "Do not apply ice, butter, ointments, or creams to a severe burn.",
      "Do not break blisters.",
      "Seek immediate medical help for burns that are deep, cover a large area, or are on the face, hands, feet, or groin."
    ]
  },
  {
    id: "poisoning",
    title: "Poisoning",
    shortDescription: "For suspected swallowing or inhalation of toxic substances.",
    instructions: [
      "Find out what was taken, how much, and when.",
      "Call your local Poison Control Center or emergency services immediately.",
      "If the person inhaled poison, move them to fresh air right away.",
      "If poison is on the skin, remove contaminated clothing and rinse the skin with running water for 15-20 minutes."
    ],
    warnings: [
      "Do not induce vomiting or give anything to drink unless instructed to do so by Poison Control or a medical professional."
    ]
  },
  {
    id: "shock",
    title: "Shock",
    shortDescription: "A life-threatening condition usually resulting from severe injury, bleeding, or allergic reaction.",
    instructions: [
      "Call emergency services immediately.",
      "Have the person lie down on their back.",
      "Elevate their legs and feet slightly (about 12 inches) unless you suspect a head, neck, or back injury or broken bones in the legs.",
      "Keep the person warm and comfortable by covering them with a blanket or coat."
    ],
    warnings: [
      "Do not give the person anything to eat or drink.",
      "Monitor their breathing and be prepared to start CPR if they become unresponsive."
    ]
  }
];
