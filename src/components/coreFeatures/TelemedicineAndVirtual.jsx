import React from "react";
import { Video, Calendar, Shield, Users, Clock, Star, MapPin } from "lucide-react";

// Reusable UI components
function Card({ children, className }) {
  return <div className={`border rounded-lg bg-white ${className}`}>{children}</div>;
}

function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

function CardTitle({ children }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, className, ...props }) {
  return (
    <button className={`px-4 py-2 rounded font-medium transition ${className}`} {...props}>
      {children}
    </button>
  );
}

function Input(props) {
  return <input className="w-full border rounded px-3 py-2" {...props} />;
}

function Label({ children, htmlFor }) {
  return (
    <label className="block text-sm font-medium mb-1" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

function Textarea(props) {
  return <textarea className="w-full border rounded px-3 py-2" {...props} />;
}

function Badge({ children, className }) {
  return (
    <span className={`bg-gray-200 text-gray-700 rounded-full px-2 py-1 ${className}`}>
      {children}
    </span>
  );
}

// Hero Section
function TelemedicineHero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <Video className="h-12 w-12 text-blue-500" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Professional Therapy
          <span className="block text-blue-500">At Your Fingertips</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience personalized mental health care through our secure telemedicine platform. Connect with
          board-certified therapists who specialize in depression treatment and get the professional support you
          deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" />
            Schedule Session
          </Button>
          <Button className="bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100">
            View Therapists
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Shield className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold mb-2">Bank-Level Security</h3>
            <p className="text-sm text-gray-600">End-to-end encryption with HIPAA compliance</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold mb-2">Expert Therapists</h3>
            <p className="text-sm text-gray-600">Licensed professionals with 10+ years experience</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-sm text-gray-600">Evening and weekend appointments available</p>
          </div>
        </div>
      </div>
    </section>
  );
}


function BookingSection() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Consultation</h2>
          <p className="text-lg text-gray-600">
            Take the first step towards better mental health. Schedule your appointment today.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                Schedule Appointment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="concerns">What would you like to discuss? (Optional)</Label>
                <Textarea id="concerns" placeholder="Share any specific concerns or goals for your session..." className="min-h-[100px]" />
              </div>
              <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">Schedule Consultation</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


function TherapistGrid() {
  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Licensed Clinical Psychologist",
      specialties: ["Depression", "Anxiety", "Trauma"],
      rating: 4.9,
      reviews: 127,
      location: "California, USA",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-therapist-woman-tUcFEG34x7muyMRHvYqJUXLB3MKmpP.png",
      nextAvailable: "Today at 3:00 PM",
      bio: "Specializing in cognitive behavioral therapy with 12+ years of experience helping individuals overcome depression and anxiety.",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Licensed Marriage & Family Therapist",
      specialties: ["Depression", "Relationships", "Life Transitions"],
      rating: 4.8,
      reviews: 89,
      location: "New York, USA",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/asian-therapist-4RYkCOMNUGrz40eSuLr4hEHFWvf7ry.png",
      nextAvailable: "Tomorrow at 10:00 AM",
      bio: "Integrative approach combining mindfulness-based therapy with traditional counseling methods for holistic mental health care.",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Licensed Clinical Social Worker",
      specialties: ["Depression", "PTSD", "Substance Abuse"],
      rating: 4.9,
      reviews: 156,
      location: "Texas, USA",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/latina-therapist-i5CNi9JdfCvc9rdK3voNQgGeAAkJdw.png",
      nextAvailable: "Today at 7:00 PM",
      bio: "Trauma-informed care specialist with extensive experience in treating depression and co-occurring disorders.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Licensed Therapists</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with experienced mental health professionals who understand your journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist) => (
            <Card key={therapist.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <img src={therapist.image || "/placeholder.svg"} alt={therapist.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="font-bold text-lg">{therapist.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{therapist.title}</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-sm">{therapist.rating}</span>
                  <span className="text-xs text-gray-500">({therapist.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-4">
                  <MapPin className="h-3 w-3" />
                  {therapist.location}
                </div>
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  {therapist.specialties.map((s, i) => <Badge key={i} className="text-xs">{s}</Badge>)}
                </div>
                <p className="text-sm text-gray-600 text-center leading-relaxed mb-4">{therapist.bio}</p>
                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">Book Consultation</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


const TelemedicineAndVirtual = () => {
  return (
    <div>
      <TelemedicineHero />
      <BookingSection />
      <TherapistGrid />
    </div>
  );
};

export default TelemedicineAndVirtual;
