import React from "react";
import { Heart, Brain, Sparkles, Clock, Lightbulb, Target } from "lucide-react";


const Card = ({ children, className }) => (
  <div className={`border rounded-lg bg-white shadow p-4 ${className}`}>{children}</div>
);
const CardHeader = ({ children, className }) => <div className={`mb-3 ${className}`}>{children}</div>;
const CardTitle = ({ children, className }) => <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
const CardDescription = ({ children, className }) => <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
const CardContent = ({ children, className }) => <div className={`${className}`}>{children}</div>;


const benefits = [
  { icon: Heart, title: "Reduces Stress", description: "Lowers cortisol and blood pressure" },
  { icon: Brain, title: "Improves Focus", description: "Enhances attention and mental clarity" },
  { icon: Sparkles, title: "Better Sleep", description: "Calms the nervous system for rest" },
  { icon: Target, title: "Emotional Balance", description: "Better emotional regulation and self-awareness" },
  { icon: Lightbulb, title: "Increased Patience", description: "Greater life satisfaction and decision making" },
  { icon: Clock, title: "Present Moment", description: "Improved relationships and mindful living" },
];

const breathingTechniques = [
  {
    name: "4-7-8 Technique",
    description: "Inhale for 4, hold for 7, exhale for 8",
    bestFor: "Anxiety, sleep preparation",
    steps: ["Inhale through nose for 4 counts", "Hold breath for 7 counts", "Exhale through mouth for 8 counts", "Repeat 4-8 cycles"],
  },
  {
    name: "Box Breathing",
    description: "Equal counts for inhale, hold, exhale, hold",
    bestFor: "Focus, stress relief",
    steps: ["Inhale for 4 counts", "Hold for 4 counts", "Exhale for 4 counts", "Hold empty for 4 counts"],
  },
  {
    name: "Triangle Breathing",
    description: "Simple 3-count pattern",
    bestFor: "Beginners",
    steps: ["Inhale for 3 counts", "Hold for 3 counts", "Exhale for 3 counts"],
  },
  {
    name: "Extended Exhale",
    description: "Longer exhale than inhale",
    bestFor: "Calming nervous system",
    steps: ["Inhale for 4 counts", "Exhale for 8 counts"],
  },
];

const guidedPrompts = {
  stress: [
    "With each exhale, release tension from your shoulders",
    "Imagine stress melting away like ice in warm sun",
    "Your breath is an anchor in the present moment",
  ],
  sleep: [
    "Feel your body becoming heavy and relaxed",
    "Let go of the day's worries with each breath",
    "Sink deeper into peaceful rest",
  ],
  focus: [
    "Return your attention gently to your breath",
    "Notice when your mind wanders, then come back",
    "Each breath brings clarity and calm",
  ],
  anxiety: [
    "You are safe in this moment",
    "Breathe in calm, breathe out worry",
    "This feeling will pass like all feelings do",
  ],
};

export default function Meditation() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Meditation Guide</h1>
          <p className="text-lg text-gray-500">Comprehensive tips and techniques for mindful practice</p>
        </div>

        {/* Benefits */}
        <Card>
          <CardHeader>
            <CardTitle>Benefits of Meditation</CardTitle>
            <CardDescription>Why regular practice matters for your wellbeing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        
        <Card>
          <CardHeader>
            <CardTitle>Breathing Techniques</CardTitle>
            <CardDescription>Different patterns for various needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {breathingTechniques.map((tech, idx) => (
                <div key={idx} className="space-y-3 p-4 border rounded-lg">
                  <h3 className="font-semibold text-gray-800">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                  <p className="text-xs text-blue-500 font-medium">Best for: {tech.bestFor}</p>
                  <div className="space-y-1">
                    {tech.steps.map((step, sIdx) => (
                      <p key={sIdx} className="text-sm text-gray-600">• {step}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        
        <Card>
          <CardHeader>
            <CardTitle>Guided Prompts</CardTitle>
            <CardDescription>Helpful phrases for different meditation goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(guidedPrompts).map(([category, prompts]) => (
                <div key={category} className="space-y-3">
                  <h3 className="font-semibold text-gray-800 capitalize">For {category}</h3>
                  <div className="space-y-2">
                    {prompts.map((prompt, index) => (
                      <p key={index} className="text-sm text-gray-600 italic p-3 bg-gray-100 rounded">
                        "{prompt}"
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
